# Atom Matrix for Discover

Students hold the Atom inside a larger handheld shell, so Discover calls the
device **the shaker** and never shows the Atom or its LEDs on screen.

Open `/discover?play=shake` in desktop Chrome or Edge on localhost or HTTPS.
Connect the Atom with a USB data cable, choose **Shake to discover**, then
**Connect shaker**, select its USB serial port, and choose **Start shake round**.
Disconnect it from other browser tabs and Arduino Serial Monitor first: one
connection can use the port at a time.

The meter selects one real, unseen Discover occupation in the teacher's chosen
subject; its picture sharpens from large blocks as the meter fills, with the job
title covered. It stops at Guess; the teacher controls Reveal, then **Pass the
shaker** hands off to the next student. Pauses, connection loss and hidden tabs
preserve earned progress. Each round requires an explicit start. Reduced motion
retains progress and selection without picture movement or confetti.

## Firmware

The included `AtomMatrixMotionTest` sketch is the initial working firmware. It
reads the MPU6886 via M5Unified, shows movement on the LEDs at brightness 20, and
sends a USB message every 500ms at 115200 baud. It does not require Wi-Fi or keys.
The LEDs currently show movement intensity, rather than accumulated round progress.

Arduino setup:

- Official board index: `https://static-cdn.m5stack.com/resource/arduino/package_m5stack_index.json`
- Board package: M5Stack 3.3.10; board **M5Atom** (`m5stack:esp32:m5stack_atom`).
- Libraries: M5Unified 0.2.28, M5GFX 0.2.35, Adafruit NeoPixel 1.15.5.
- Use upload speed **115200** if the default 1500000 transfer fails.
- Uploading replaces the firmware currently running on the device.

## Effort tuning

The browser receives `motion`, a short peak envelope of acceleration magnitude
minus gravity and a small noise floor. Thresholds are measured in g above that
floor: Gentle 0.25, Active 0.65 (default), Firm 1.0. These are initial settings,
not a measurement of how much a student's whole body is moving. Validate the feel
with the final enclosure and firmware before classroom use.

Progress requires consecutive qualifying samples over at least 250ms. With the
initial 500ms reporting cadence, that means at least two readings. Sub-threshold
movement, invalid readings and gaps over 850ms earn nothing. Progress is credited
once per new sample, capped at 600ms per update, at 8–14 percentage points per
second. Typical sustained movement around 1g finishes in about ten seconds;
stronger movement cannot complete a round instantly.

This is the USB implementation. Wireless provisioning, pairing and a network
relay remain future work. The local static prototype in Documents/Arduino is
superseded by this integrated mode.

## Home Wi-Fi setup (step 1)

`AtomMatrixWifiSetup/AtomMatrixWifiSetup.ino` adds USB provisioning while keeping
exactly the original `imu=... accel=... motion=...` messages for Discover. It also
requires **ArduinoJson 7.4.3**. Use the same board and 115200 upload speed above.

Run the local setup page from the repository root:

```sh
python3 -m http.server 8874 --bind 127.0.0.1 --directory hardware/atom-matrix/wifi-setup
```

Open `http://127.0.0.1:8874` in desktop Chrome or Edge, connect the Atom, find a
2.4 GHz network (or enter its name), and enter its password. The page sends the
settings directly over USB; credentials never go to the HTTP server, source
files, logs, browser storage or a cloud service. The firmware stores the confirmed
network in its own `citc-wifi` Preferences namespace only after receiving a Wi-Fi
address. This prototype uses ordinary device NVS storage; it does not configure
flash encryption. It reconnects to that saved network after a restart.

At rest the centre light is blue before setup, amber while joining, and green
when connected. Shaking still displays the original intensity rows. If joining
fails after 25 seconds, the page permits another attempt; a previously saved
network remains stored. The page's Disconnect USB button releases the serial port
so integrated Discover or Arduino can use it again.

This step only joins Wi-Fi and saves its settings. It does **not** send wireless
motion to a Mac relay yet. Do not interpret a successful join as an end-to-end
wireless Discover test.

The firmware accepts newline-delimited JSON commands `wifi_status`, `wifi_scan`,
`wifi_set` (with `ssid` and `password`) and `wifi_retry`. Replies are JSON with
`type` equal to `wifi`, `networks` or `error`, interleaved with unchanged motion
lines. It never echoes passwords. Connection success includes the DHCP address
and saved status. Source for the setup page is in `wifi-setup/`.

With the setup server running, run the isolated browser/protocol checks using:

```sh
node --test hardware/atom-matrix/tests/wifi-setup.test.mjs
```

The tests use fake credentials and a simulated serial port; verify the actual
home connection in the setup page. This firmware and page are independent of
Discover UI changes being made concurrently.

## Wireless home demo (motion relay)

The Wi-Fi setup firmware now also sends motion to a local Mac relay. The existing
USB motion format and saved Wi-Fi network remain intact. No cloud service is used.

Start these in separate terminals from the repository root:

```sh
python3 hardware/atom-matrix/relay.py --lan-ip "$(ipconfig getifaddr en0)"
node hardware/atom-matrix/preview.mjs
```

The default demo ports are **8875** for the relay and **3312** for Discover.
`preview.mjs` uses an isolated `.next/wifi-demo` output and its own TypeScript
configuration, so it can run beside the main UI preview without rebuilding it.
It serves the latest application source; it is a local development preview.

After uploading `AtomMatrixWifiSetup`, provision the Mac address and device key
once (close other serial connections first):

```sh
python3 hardware/atom-matrix/relay.py --lan-ip "$(ipconfig getifaddr en0)" --configure-usb /dev/cu.usbserial-75521E3E38
```

The script transfers only the receiver address and a scoped motion-write token;
it does not read, replace or print the Atom's saved Wi-Fi password. The relay
configuration is retained alongside the Wi-Fi configuration in device Preferences.
The serial device name can differ on another Mac. If the Mac's LAN address changes,
run provisioning again. The default en0 interface is appropriate for the tested
Mac; use its actual home-network address on a different setup.

Open **http://127.0.0.1:8875/discover**, choose **Connect shaker**, then start a
shake round. The UI should report **Shaker connected over Wi-Fi**. The Atom can
be powered by a separate USB charger or power bank. Keep the Mac awake with both
local processes running. Stop a process with Ctrl+C in its terminal.

`http://127.0.0.1:8875/status` reports whether fresh device samples are arriving.
Status does not expose credentials. A cable plugged into the Mac may still supply
power; no browser or serial program needs to hold its data connection during play.
Actual unplug/replug to an independent power source remains a physical demo check.

### Transport boundaries

- Firmware uses a separate networking task and a one-packet queue. Slow/failed
  sends drop old samples rather than block the motion loop or replay a backlog.
- Each packet includes a boot ID, sequence and source age. The relay rejects
  duplicate/out-of-order packets and retired boots. The browser does not refresh
  a duplicate sample's timestamp; it includes relay age and request latency in
  freshness checks. Missing/stale data holds progress, with automatic reconnect.
- `useAtomWifi.ts` provides the same latest-sample interface as USB.
  `useAtomSerial.ts` selects that transport when Wi-Fi is requested. No game or
  card-selection logic is duplicated. `?connection=usb` clears the Wi-Fi selection
  for that browser tab; the normal USB path remains available.
- The relay accepts only authenticated motion writes on the LAN. Browser reads
  require a different key and come from loopback. Host/Origin checks restrict
  browser access to the configured local Discover origin. `/browser-config`
  bootstraps the scoped read key only to that origin, without putting it in a URL.
- Runtime keys live in `~/Library/Application Support/CitCAtomRelay/config.json`
  (directory 700, file 600), outside Git. Never copy that file or print its values.
  The tab keeps its read key in sessionStorage. It contains no Wi-Fi credentials.
- This is a home demo using HTTP on the trusted home LAN. It is not an internet
  service or a school deployment. The relay listens on the Mac's interfaces so the
  Atom can reach it, and gates requests with the above token/Host/Origin checks.

Checks (relay and isolated preview running for browser checks):

```sh
python3 -m unittest discover -s hardware/atom-matrix/tests -p 'test_relay.py'
npm run test -- tests/unit/atom-wifi.test.ts tests/unit/discover-shake.test.ts
node --test hardware/atom-matrix/tests/wifi-relay.browser.test.mjs
```

The browser test simulates Wi-Fi samples through the actual relay client, checks
light movement and stale-data pauses, draws/reveals a real card, and confirms USB
mode remains available. Physical packet arrival is separately checked with the
real device and `/status`.
