// The example rail's dither field: pure, DOM-free, shared by the rail renderer and the tests.
// Coordinates are CSS px measured from the rail column's top-left corner.
//
// The rail is split into three equal bands. Band 1 fades in from sparse (top) to dense
// (bottom), band 2 is its exact mirror, and band 3 fades in again, as in the P1 artboard.
// scripts/build-dither-assets.py uses the same Bayer matrix and threshold for the footer.

/** Side of one dither cell (one dot), in CSS px. */
export const DITHER_CELL = 2;

/** Density at the dense edge of each band, before the small wave. */
export const PEAK_DENSITY = 0.42;

/** Amplitude of the wave that leaves sparse specks at the top of each band. */
export const WAVE = 0.03;

export const BAYER_8: readonly (readonly number[])[] = [
  [0, 32, 8, 40, 2, 34, 10, 42],
  [48, 16, 56, 24, 50, 18, 58, 26],
  [12, 44, 4, 36, 14, 46, 6, 38],
  [60, 28, 52, 20, 62, 30, 54, 22],
  [3, 35, 11, 43, 1, 33, 9, 41],
  [51, 19, 59, 27, 49, 17, 57, 25],
  [15, 47, 7, 39, 13, 45, 5, 37],
  [63, 31, 55, 23, 61, 29, 53, 21],
];

const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);
const mod8 = (n: number) => ((n % 8) + 8) % 8;

/**
 * Dot density in [0, 1] at (x, y) on a rail `railHeight` px tall.
 * Band-local t runs 0 → 1 down bands 1 and 3, and 1 → 0 down band 2. The wave uses the
 * band-local (mirrored) y, so band 2 is an exact mirror image of band 1.
 */
export function density(x: number, y: number, railHeight: number): number {
  if (!(railHeight > 0)) return 0;
  const bandH = railHeight / 3;
  const yy = Math.min(railHeight, Math.max(0, y));
  const band = Math.min(2, Math.floor(yy / bandH));
  const local = (yy - band * bandH) / bandH;
  const t = band === 1 ? 1 - local : local;
  const ty = t * bandH;
  return clamp01(PEAK_DENSITY * Math.pow(t, 1.6) + WAVE * Math.sin(x / 9 + ty / 23));
}

/**
 * Whether the 2px cell containing (cx, cy) holds a dot: an ordered 8×8 Bayer threshold
 * against the density at the cell's centre. Every point inside one cell gives the same answer.
 */
export function isDot(cx: number, cy: number, railHeight: number): boolean {
  const col = Math.floor(cx / DITHER_CELL);
  const row = Math.floor(cy / DITHER_CELL);
  const threshold = (BAYER_8[mod8(row)][mod8(col)] + 0.5) / 64;
  const half = DITHER_CELL / 2;
  return density(col * DITHER_CELL + half, row * DITHER_CELL + half, railHeight) > threshold;
}
