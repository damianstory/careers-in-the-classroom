import { parseShakeSample, type ShakeSample } from "./discover-shake";

export interface AtomRelayConfig { endpoint: string; key: string }
export function validRelayConfig(value: unknown): value is AtomRelayConfig {
  if (!value || typeof value !== "object" || !("endpoint" in value) || !("key" in value)) return false;
  if (typeof value.endpoint !== "string" || typeof value.key !== "string" || !/^[a-f0-9]{64}$/.test(value.key)) return false;
  try {
    const url = new URL(value.endpoint);
    return url.protocol === "http:" && url.hostname === "127.0.0.1" && /^\d+$/.test(url.port) && url.pathname === "/" && !url.search && !url.hash && !url.username && !url.password;
  } catch { return false; }
}

export interface RelayReading { boot: string; seq: number; sample: ShakeSample }
export function relayReading(data: unknown, receivedAt: number, elapsed: number): RelayReading | null {
  if (!data || typeof data !== "object" || !("sample" in data)) return null;
  const value = data.sample;
  if (!value || typeof value !== "object") return null;
  if (!("boot" in value) || !("seq" in value) || !("line" in value) || !("age_ms" in value)) return null;
  if (typeof value.boot !== "string" || typeof value.seq !== "number" || !Number.isInteger(value.seq) || value.seq < 0 || typeof value.line !== "string" || typeof value.age_ms !== "number" || !Number.isFinite(value.age_ms)) return null;
  const age = value.age_ms + Math.max(0, elapsed);
  if (age < 0 || age > 850) return null;
  const sample = parseShakeSample(value.line, receivedAt - age);
  return sample ? { boot: value.boot, seq: value.seq, sample } : null;
}
