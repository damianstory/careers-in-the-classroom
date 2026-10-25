/** Motion messages from the AtomMatrixMotionTest USB firmware. Values are in g. */
export interface ShakeSample { motion: number; receivedAt: number; valid: boolean }
export type ShakeEffort = "gentle" | "active" | "firm";
export const shakeEfforts: Record<ShakeEffort, { label: string; threshold: number }> = {
  gentle: { label: "Gentle", threshold: 0.25 },
  active: { label: "Active", threshold: 0.65 },
  firm: { label: "Firm", threshold: 1.0 },
};

export function parseShakeSample(line: string, receivedAt: number): ShakeSample | null {
  const match = /^imu=(ok|error) accel=[\d.,+-]+ motion=(\d+(?:\.\d+)?)\s*$/.exec(line);
  if (!match) return null;
  const motion = Number(match[2]);
  if (!Number.isFinite(motion) || motion > 32) return null;
  return { motion, receivedAt, valid: match[1] === "ok" };
}

export interface ShakeProgress { value: number; lastAt: number | null; activeSince: number | null }
export const emptyShakeProgress = (): ShakeProgress => ({ value: 0, lastAt: null, activeSince: null });
export const pauseShakeProgress = (state: ShakeProgress): ShakeProgress => ({ ...state, lastAt: null, activeSince: null });

/** Credit only consecutive, fresh sensor samples. A single jolt earns nothing.
 * Supports the initial 500ms firmware without multiplying a held peak each frame.
 * About 10 seconds at normal effort, never faster than about 7 seconds.
 */
export function advanceShakeProgress(state: ShakeProgress, sample: ShakeSample, effort: ShakeEffort): ShakeProgress {
  if (state.value >= 100 || (state.lastAt !== null && sample.receivedAt <= state.lastAt)) return state;
  const threshold = shakeEfforts[effort].threshold;
  if (!sample.valid || sample.motion < threshold) return { ...state, lastAt: sample.receivedAt, activeSince: null };
  const elapsed = state.lastAt === null ? 0 : sample.receivedAt - state.lastAt;
  const continuing = elapsed > 0 && elapsed <= 850 && state.activeSince !== null;
  const activeSince = continuing ? state.activeSince! : sample.receivedAt;
  if (!continuing || sample.receivedAt - activeSince < 250) return { ...state, lastAt: sample.receivedAt, activeSince };
  const intensity = Math.min(1, (sample.motion - threshold) / 1.0);
  const rate = 8 + 6 * intensity;
  return { value: Math.min(100, state.value + Math.min(elapsed, 600) / 1000 * rate), lastAt: sample.receivedAt, activeSince };
}

/** Columns for the mystery picture while shaking: 25 steps from blocky to sharp. */
const pixelSteps = [3, 4, 5, 6, 8, 10, 12, 14, 17, 20, 24, 28, 33, 38, 44, 52, 60, 70, 82, 96, 112, 132, 160, 200] as const;
export function pixelColumns(progress: number): number | "full" {
  if (progress >= 100) return "full";
  return pixelSteps[Math.min(pixelSteps.length - 1, Math.max(0, Math.floor(progress / 4)))];
}
