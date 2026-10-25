// Atom Matrix motion test: blue at rest, green/yellow rows with movement.
// USB only; no network credentials or connection required.
#include <M5Unified.h>
#include <Adafruit_NeoPixel.h>
#include <math.h>

Adafruit_NeoPixel pixels(25, 27, NEO_GRB + NEO_KHZ800);
float energy = 0;
uint32_t lastReport = 0;
bool sensorReady = false;

void setup() {
  auto config = M5.config();
  config.internal_imu = true;
  M5.begin(config);
  Serial.begin(115200);
  pixels.begin();
  pixels.setBrightness(20); // Keep the small enclosed LEDs at low brightness.
  pixels.clear();
  sensorReady = M5.Imu.isEnabled();
  Serial.println(sensorReady ? "MOTION_TEST_READY" : "IMU_NOT_FOUND");
}

void loop() {
  M5.update();
  float x = 0, y = 0, z = 0;
  bool sampleOK = sensorReady && M5.Imu.getAccel(&x, &y, &z);
  pixels.clear();
  if (!sampleOK) {
    pixels.setPixelColor(12, pixels.Color(160, 0, 0));
  } else {
    // Subtract gravity's magnitude so resting in any orientation stays quiet.
    float movement = fmaxf(0.0f, fabsf(sqrtf(x*x + y*y + z*z) - 1.0f) - 0.08f);
    energy = fmaxf(movement, energy * 0.90f);
    int rows = energy < 0.08f ? 0 : constrain((int)ceilf(energy * 5.0f), 1, 5);
    if (rows == 0) {
      pixels.setPixelColor(12, pixels.Color(0, 40, 150));
    } else {
      for (int row = 0; row < rows; ++row) {
        uint32_t color = row >= 3 ? pixels.Color(180, 100, 0) : pixels.Color(0, 150, 50);
        for (int col = 0; col < 5; ++col) pixels.setPixelColor((4-row)*5+col, color);
      }
    }
  }
  pixels.show();
  if (millis() - lastReport >= 500) {
    lastReport = millis();
    Serial.printf("imu=%s accel=%.3f,%.3f,%.3f motion=%.3f\n", sampleOK ? "ok" : "error", x, y, z, energy);
  }
  delay(20);
}
