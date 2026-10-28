import { describe, expect, it } from "vitest";
import { advanceShakeProgress, emptyShakeProgress, parseShakeSample, pauseShakeProgress, pixelColumns, type ShakeEffort } from "@/lib/discover-shake";

function shake(motion: number, seconds: number, effort: ShakeEffort = "active") {
  let state = emptyShakeProgress();
  for (let at = 0; at <= seconds * 1000; at += 500) state = advanceShakeProgress(state, { motion, receivedAt: at, valid: true }, effort);
  return state;
}
describe("Atom motion and progress", () => {
  it("accepts sensor messages and ignores boot logs and invalid readings", () => {
    expect(parseShakeSample("imu=ok accel=0.052,-0.994,-0.024 motion=0.700\r", 50)).toEqual({ motion: .7, receivedAt: 50, valid: true });
    expect(parseShakeSample("imu=error accel=0.000,0.000,0.000 motion=0.000", 50)?.valid).toBe(false);
    for (const line of ["ets Jun 8 2016", "MOTION_TEST_READY", "imu=ok accel=0,0,1 motion=Infinity", "imu=ok accel=0,0,1 motion=900"]) expect(parseShakeSample(line, 50)).toBeNull();
  });
  it("rejects light finger movement even over a long round", () => {
    expect(shake(.3, 60).value).toBe(0);
    expect(shake(.64, 60).value).toBe(0);
    expect(shake(.3, 10, "gentle").value).toBeGreaterThan(0);
  });
  it("needs consecutive movement; a single hard jolt earns nothing", () => {
    let state = advanceShakeProgress(emptyShakeProgress(), { motion: 5, receivedAt: 0, valid: true }, "active");
    state = advanceShakeProgress(state, { motion: .1, receivedAt: 500, valid: true }, "active");
    expect(state.value).toBe(0);
  });
  it("finishes in roughly ten seconds, with an intensity cap", () => {
    expect(shake(1, 9).value).toBeLessThan(100);
    expect(shake(1, 10).value).toBe(100);
    expect(shake(8, 6).value).toBeLessThan(100);
    expect(shake(8, 7.5).value).toBe(100);
    expect(shake(8, 1).value).toBe(shake(2, 1).value);
  });
  it("holds progress during pauses, stale samples, duplicate samples and reconnects", () => {
    const state = shake(1, 3);
    const paused = advanceShakeProgress(state, { motion: 0, receivedAt: 3500, valid: true }, "active");
    expect(paused.value).toBe(state.value);
    expect(advanceShakeProgress(state, { motion: 5, receivedAt: 10_000, valid: true }, "active").value).toBe(state.value);
    expect(advanceShakeProgress(state, { motion: 5, receivedAt: 3000, valid: true }, "active")).toBe(state);
    expect(advanceShakeProgress(pauseShakeProgress(state), { motion: 5, receivedAt: 4000, valid: true }, "active").value).toBe(state.value);
    expect(advanceShakeProgress(state, { motion: 5, receivedAt: 3500, valid: false }, "active").value).toBe(state.value);
  });
  it("sharpens the mystery picture in 25 steps, only reaching full detail when the meter is full", () => {
    expect(pixelColumns(0)).toBe(3);
    expect(pixelColumns(3.9)).toBe(3);
    expect(pixelColumns(4)).toBe(4);
    expect(pixelColumns(99.9)).toBe(200);
    expect(pixelColumns(100)).toBe("full");
    expect(pixelColumns(120)).toBe("full");
    const seen = Array.from({ length: 101 }, (_, p) => pixelColumns(p));
    expect(new Set(seen).size).toBe(25);
    const numeric = seen.filter((c): c is number => c !== "full");
    expect(numeric.every((c, i) => i === 0 || c >= numeric[i - 1])).toBe(true);
  });
});
