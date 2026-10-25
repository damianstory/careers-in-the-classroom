// Home Wi-Fi provisioning over USB. Keeps the Discover motion-test protocol.
// Credentials go directly to this device; they are never echoed over Serial.
#include <M5Unified.h>
#include <Adafruit_NeoPixel.h>
#include <ArduinoJson.h>
#include <WiFi.h>
#include <Preferences.h>
#include <HTTPClient.h>
#include <atomic>
#include <math.h>

Adafruit_NeoPixel pixels(25, 27, NEO_GRB + NEO_KHZ800);
Preferences prefs;
float energy = 0;
uint32_t lastReport = 0, startedConnecting = 0;
bool sensorReady = false, connecting = false, pendingSave = false;
bool saved = false, scanning = false, prefsReady = false;
String serialLine, pendingSsid, pendingPassword;
const char* wifiState = "needs_setup";
const char* wifiError = "";

// A length-one queue drops old motion rather than replaying it after an outage.
struct MotionPacket { char line[160]; uint32_t seq; uint32_t sampledAt; };
QueueHandle_t motionQueue;
SemaphoreHandle_t relayMutex;
char relayUrl[180] = "", relayToken[65] = "", bootId[17];
uint32_t sequence = 0;
std::atomic<int> relayHttpStatus{0};
std::atomic<uint32_t> relayLastSent{0};

bool validRelay(const String& url, const String& token) {
  if (url.length() >= sizeof(relayUrl) || !url.startsWith("http://") || !url.endsWith("/ingest") || token.length() != 64) return false;
  for (unsigned int i = 0; i < token.length(); ++i) if (!isxdigit(token[i])) return false;
  int colon = url.indexOf(':', 7), slash = url.indexOf('/', 7);
  if (colon < 0 || slash < colon) return false;
  IPAddress ip;
  if (!ip.fromString(url.substring(7, colon))) return false;
  int port = url.substring(colon + 1, slash).toInt();
  return port >= 1024 && port <= 65535 && (ip[0] == 10 || (ip[0] == 192 && ip[1] == 168) || (ip[0] == 172 && ip[1] >= 16 && ip[1] <= 31));
}

void applyRelay(const String& url, const String& token) {
  xSemaphoreTake(relayMutex, portMAX_DELAY);
  strlcpy(relayUrl, url.c_str(), sizeof(relayUrl));
  strlcpy(relayToken, token.c_str(), sizeof(relayToken));
  xSemaphoreGive(relayMutex);
}

void emitRelayStatus() {
  JsonDocument result;
  result["type"] = "relay";
  result["configured"] = relayUrl[0] != '\0';
  result["http_status"] = relayHttpStatus.load();
  result["sent_recently"] = relayLastSent.load() != 0 && millis() - relayLastSent.load() < 2000;
  serializeJson(result, Serial);
  Serial.println();
}

void relayWorker(void*) {
  MotionPacket packet;
  for (;;) {
    if (xQueueReceive(motionQueue, &packet, portMAX_DELAY) != pdTRUE) continue;
    if (WiFi.status() != WL_CONNECTED || millis() - packet.sampledAt > 850) continue;
    char url[180], token[65];
    xSemaphoreTake(relayMutex, portMAX_DELAY);
    strlcpy(url, relayUrl, sizeof(url));
    strlcpy(token, relayToken, sizeof(token));
    xSemaphoreGive(relayMutex);
    if (!url[0]) continue;
    HTTPClient http;
    http.setConnectTimeout(600);
    http.setTimeout(700);
    if (!http.begin(url)) continue;
    http.addHeader("Content-Type", "application/json");
    http.addHeader("Authorization", String("Bearer ") + token);
    JsonDocument data;
    data["boot"] = bootId;
    data["seq"] = packet.seq;
    data["age_ms"] = millis() - packet.sampledAt;
    data["line"] = packet.line;
    String body;
    serializeJson(data, body);
    int code = http.POST(body);
    relayHttpStatus.store(code);
    if (code == 200) relayLastSent.store(millis());
    http.end();
  }
}

void emitStatus() {
  JsonDocument result;
  result["type"] = "wifi";
  result["firmware"] = "citc-wifi-setup-v1";
  result["state"] = wifiState;
  result["saved"] = saved;
  if (WiFi.status() == WL_CONNECTED) {
    result["ip"] = WiFi.localIP().toString();
    result["signal"] = WiFi.RSSI();
  }
  if (*wifiError) result["error"] = wifiError;
  serializeJson(result, Serial);
  Serial.println();
}

void emitError(const char* message) {
  JsonDocument result;
  result["type"] = "error";
  result["message"] = message;
  serializeJson(result, Serial);
  Serial.println();
}

bool validNetwork(const String& ssid, const String& password) {
  if (!ssid.length() || ssid.length() > 32) return false;
  if (password.length() >= 8 && password.length() <= 63) return true;
  if (password.length() != 64) return false;
  for (unsigned int i = 0; i < password.length(); ++i) if (!isxdigit(password[i])) return false;
  return true;
}

void beginNetwork(const String& ssid, const String& password, bool saveOnSuccess) {
  WiFi.disconnect(false, false);
  pendingSsid = ssid;
  pendingPassword = password;
  pendingSave = saveOnSuccess;
  connecting = true;
  startedConnecting = millis();
  wifiState = "connecting";
  wifiError = "";
  WiFi.begin(pendingSsid.c_str(), pendingPassword.c_str());
  emitStatus();
}

void connectSaved() {
  if (!prefsReady || !saved) { emitStatus(); return; }
  String record = prefs.getString("network", "");
  JsonDocument data;
  if (deserializeJson(data, record)) { emitError("Saved network could not be read."); return; }
  String ssid = data["ssid"] | "";
  String password = data["password"] | "";
  if (!validNetwork(ssid, password)) { emitError("Saved network is invalid. Set it up again."); return; }
  beginNetwork(ssid, password, false);
}

void handleCommand(const String& line) {
  JsonDocument command;
  if (deserializeJson(command, line)) { emitError("Invalid setup command."); return; }
  const char* action = command["command"] | "";
  if (!strcmp(action, "wifi_status")) emitStatus();
  else if (!strcmp(action, "wifi_scan")) {
    if (scanning || connecting) { emitError("Wait for the current Wi-Fi operation to finish."); return; }
    int result = WiFi.scanNetworks(true);
    if (result == WIFI_SCAN_FAILED) { emitError("Network scan failed. Enter the network name manually."); return; }
    scanning = true;
  } else if (!strcmp(action, "wifi_set")) {
    if (connecting || scanning) { emitError("Wait for the current Wi-Fi operation to finish."); return; }
    if (!prefsReady) { emitError("Device storage is unavailable. Restart the Atom."); return; }
    if (!command["ssid"].is<String>() || !command["password"].is<String>()) { emitError("Network name and password are required."); return; }
    String ssid = command["ssid"].as<String>();
    String password = command["password"].as<String>();
    if (!validNetwork(ssid, password)) { emitError("Check the network name and password length."); return; }
    beginNetwork(ssid, password, true);
  } else if (!strcmp(action, "wifi_retry")) {
    if (!connecting && !scanning) connectSaved();
  } else if (!strcmp(action, "relay_status")) emitRelayStatus();
  else if (!strcmp(action, "relay_set")) {
    String url = command["url"] | "";
    String token = command["token"] | "";
    if (!prefsReady || !validRelay(url, token)) { emitError("Invalid Mac relay configuration."); return; }
    JsonDocument record;
    record["url"] = url;
    record["token"] = token;
    String encoded;
    serializeJson(record, encoded);
    if (prefs.putString("relay", encoded) != encoded.length()) { emitError("Could not save Mac relay."); return; }
    applyRelay(url, token);
    emitRelayStatus();
  } else emitError("Unknown setup command.");
}

void updateWifi() {
  if (scanning) {
    int count = WiFi.scanComplete();
    if (count != WIFI_SCAN_RUNNING) {
      scanning = false;
      JsonDocument result;
      result["type"] = "networks";
      auto networks = result["networks"].to<JsonArray>();
      for (int i = 0; i < count && i < 30; ++i) {
        String ssid = WiFi.SSID(i);
        if (ssid.length()) {
          auto item = networks.add<JsonObject>();
          item["ssid"] = ssid;
          item["signal"] = WiFi.RSSI(i);
        }
      }
      serializeJson(result, Serial);
      Serial.println();
      WiFi.scanDelete();
    }
  }
  if (WiFi.status() == WL_CONNECTED) {
    if (connecting || strcmp(wifiState, "connected")) {
      connecting = false;
      wifiState = "connected";
      wifiError = "";
      if (pendingSave) {
        JsonDocument record;
        record["ssid"] = pendingSsid;
        record["password"] = pendingPassword;
        String encoded;
        serializeJson(record, encoded);
        if (prefs.putString("network", encoded) == encoded.length()) saved = true;
        else { saved = false; wifiError = "Connected, but saving failed. Please try setup again."; }
      }
      pendingSave = false;
      pendingSsid = "";
      pendingPassword = "";
      emitStatus();
    }
  } else if (connecting && millis() - startedConnecting >= 25000) {
    connecting = false;
    pendingSave = false;
    pendingSsid = "";
    pendingPassword = "";
    WiFi.disconnect(false, false);
    wifiState = "failed";
    wifiError = "Could not join. Check the password and use a 2.4 GHz network.";
    emitStatus();
  } else if (!connecting && !strcmp(wifiState, "connected")) {
    wifiState = "disconnected";
    wifiError = "Wi-Fi connection lost. The Atom will try to reconnect.";
    emitStatus();
  }
}

void setup() {
  auto config = M5.config();
  config.internal_imu = true;
  M5.begin(config);
  Serial.begin(115200);
  pixels.begin();
  pixels.setBrightness(20);
  pixels.clear();
  sensorReady = M5.Imu.isEnabled();
  WiFi.persistent(false); // Store only our confirmed network in Preferences.
  WiFi.setHostname("citc-atom");
  WiFi.mode(WIFI_STA);
  WiFi.setAutoReconnect(true);
  prefsReady = prefs.begin("citc-wifi", false);
  saved = prefsReady && prefs.isKey("network");
  relayMutex = xSemaphoreCreateMutex();
  motionQueue = xQueueCreate(1, sizeof(MotionPacket));
  snprintf(bootId, sizeof(bootId), "%08lx%08lx", (unsigned long)esp_random(), (unsigned long)esp_random());
  if (prefsReady && prefs.isKey("relay")) {
    JsonDocument record;
    if (!deserializeJson(record, prefs.getString("relay", ""))) {
      String url = record["url"] | "", token = record["token"] | "";
      if (validRelay(url, token)) applyRelay(url, token);
    }
  }
  xTaskCreate(relayWorker, "motion-relay", 8192, nullptr, 1, nullptr);
  Serial.println(sensorReady ? "MOTION_TEST_READY" : "IMU_NOT_FOUND");
  if (saved) connectSaved(); else emitStatus();
}

void loop() {
  M5.update();
  // Bound work per frame so malformed input cannot stall motion sampling.
  int budget = 64;
  while (Serial.available() && budget-- > 0) {
    char c = Serial.read();
    if (c == '\n') {
      if (serialLine.length()) handleCommand(serialLine);
      serialLine = "";
    } else if (c != '\r') {
      if (serialLine.length() < 1024) serialLine += c;
      else { serialLine = ""; emitError("Setup message too long."); }
    }
  }
  updateWifi();
  float x = 0, y = 0, z = 0;
  bool sampleOK = sensorReady && M5.Imu.getAccel(&x, &y, &z);
  pixels.clear();
  if (!sampleOK) pixels.setPixelColor(12, pixels.Color(160, 0, 0));
  else {
    float movement = fmaxf(0.0f, fabsf(sqrtf(x*x + y*y + z*z) - 1.0f) - 0.08f);
    energy = fmaxf(movement, energy * 0.90f);
    int rows = energy < 0.08f ? 0 : constrain((int)ceilf(energy * 5.0f), 1, 5);
    if (!rows) pixels.setPixelColor(12, connecting ? pixels.Color(150, 70, 0) : WiFi.status() == WL_CONNECTED ? pixels.Color(0, 130, 60) : pixels.Color(0, 40, 150));
    else for (int row = 0; row < rows; ++row) for (int col = 0; col < 5; ++col) pixels.setPixelColor((4-row)*5+col, row >= 3 ? pixels.Color(180, 100, 0) : pixels.Color(0, 150, 50));
  }
  pixels.show();
  if (millis() - lastReport >= 500) {
    lastReport = millis();
    MotionPacket packet;
    packet.sampledAt = millis();
    packet.seq = sequence++;
    snprintf(packet.line, sizeof(packet.line), "imu=%s accel=%.3f,%.3f,%.3f motion=%.3f", sampleOK ? "ok" : "error", x, y, z, energy);
    Serial.println(packet.line);
    xQueueOverwrite(motionQueue, &packet);
  }
  delay(20);
}
