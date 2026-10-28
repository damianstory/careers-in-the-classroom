import { describe, expect, it } from "vitest";
import { relayReading, validRelayConfig } from "@/lib/atom-wifi";

describe("local Wi-Fi transport", () => {
  it("accepts scoped loopback configuration and rejects remote or malformed destinations", () => {
    const config = { endpoint: "http://127.0.0.1:8875/", key: "a".repeat(64) };
    expect(validRelayConfig(config)).toBe(true);
    for (const endpoint of ["https://example.org/", "http://192.168.2.81:8875/", "http://127.0.0.1:8875/ingest", "http://user@127.0.0.1:8875/", "http://127.0.0.1:8875/?key=a"]) expect(validRelayConfig({ ...config, endpoint })).toBe(false);
    expect(validRelayConfig({ ...config, key: "short" })).toBe(false);
  });
  it("accounts for source age and request latency without refreshing replayed samples", () => {
    const data = { sample: { boot: "boot1", seq: 3, line: "imu=ok accel=0,0,1 motion=1.000", age_ms: 200 } };
    const result = relayReading(data, 1000, 50)!;
    expect(result).toEqual({ boot: "boot1", seq: 3, sample: { valid: true, motion: 1, receivedAt: 750 } });
    expect(relayReading({ sample: { ...data.sample, age_ms: 900 } }, 1000, 0)).toBeNull();
    expect(relayReading(data, 1000, 700)).toBeNull();
    expect(relayReading({ sample: { ...data.sample, line: "boot message" } }, 1000, 0)).toBeNull();
    expect(relayReading({ sample: null }, 1000, 0)).toBeNull();
  });
});
