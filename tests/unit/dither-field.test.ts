import { describe, expect, it } from "vitest";
import { BAYER_8, DITHER_CELL, PEAK_DENSITY, WAVE, density, isDot } from "@/lib/dither-field";

const RAIL_WIDTH = 280;
const HEIGHTS = { short: 1200, typical: 4400, long: 9000 };

// Share of dotted cells across the rail width in a horizontal strip [y0, y1).
function coverage(y0: number, y1: number, railHeight: number) {
  let dots = 0;
  let cells = 0;
  for (let y = y0; y < y1; y += DITHER_CELL) {
    for (let x = 0; x < RAIL_WIDTH; x += DITHER_CELL) {
      cells++;
      if (isDot(x, y, railHeight)) dots++;
    }
  }
  return dots / cells;
}

describe("dither field density", () => {
  it("uses every Bayer level once", () => {
    expect(BAYER_8.flat().sort((a, b) => a - b)).toEqual(Array.from({ length: 64 }, (_, i) => i));
  });

  it("stays in [0, 1] everywhere, including outside the rail", () => {
    for (const h of Object.values(HEIGHTS)) {
      for (let y = -50; y <= h + 50; y += 7) {
        for (let x = -20; x <= RAIL_WIDTH + 20; x += 13) {
          const d = density(x, y, h);
          expect(d).toBeGreaterThanOrEqual(0);
          expect(d).toBeLessThanOrEqual(1);
        }
      }
    }
    expect(density(10, 10, 0)).toBe(0);
    expect(density(10, 10, Number.NaN)).toBe(0);
  });

  it("is sparse (≤ 0.03) at the top of every band", () => {
    for (const h of Object.values(HEIGHTS)) {
      const bandH = h / 3;
      for (let x = 0; x < RAIL_WIDTH; x++) {
        expect(density(x, 0, h)).toBeLessThanOrEqual(WAVE);
        expect(density(x, 2 * bandH, h)).toBeLessThanOrEqual(WAVE);
        // Band 2's sparse edge is its bottom (it is band 1 flipped).
        expect(density(x, 2 * bandH - 1e-6, h)).toBeLessThanOrEqual(WAVE + 1e-6);
      }
    }
  });

  it("peaks at the band boundaries where the bands meet dense-to-dense", () => {
    for (const h of Object.values(HEIGHTS)) {
      const bandH = h / 3;
      for (let x = 0; x < RAIL_WIDTH; x += 5) {
        for (const y of [bandH - 1e-6, bandH, h]) {
          expect(density(x, y, h)).toBeGreaterThanOrEqual(PEAK_DENSITY - WAVE - 1e-9);
          expect(density(x, y, h)).toBeLessThanOrEqual(PEAK_DENSITY + WAVE + 1e-9);
        }
      }
    }
  });

  it("makes band 2 an exact mirror of band 1", () => {
    for (const h of Object.values(HEIGHTS)) {
      const bandH = h / 3;
      for (let d = 0; d < bandH; d += bandH / 97) {
        for (const x of [0, 17, 133, 279]) {
          expect(density(x, bandH + d, h)).toBeCloseTo(density(x, bandH - d, h), 9);
        }
      }
    }
  });

  it("repeats band 1 in band 3", () => {
    const h = HEIGHTS.typical;
    const bandH = h / 3;
    for (let d = 0; d < bandH; d += 13) {
      expect(density(40, 2 * bandH + d, h)).toBeCloseTo(density(40, d, h), 9);
    }
  });
});

describe("dither field dots", () => {
  it("gives the same dots for the same inputs", () => {
    const h = HEIGHTS.typical;
    const sample = () => {
      const out: boolean[] = [];
      for (let y = 0; y < h; y += 37) for (let x = 0; x < RAIL_WIDTH; x += 11) out.push(isDot(x, y, h));
      return out;
    };
    expect(sample()).toEqual(sample());
  });

  it("gives one answer per 2px cell", () => {
    const h = HEIGHTS.typical;
    for (let y = 1000; y < 1100; y += DITHER_CELL) {
      for (let x = 0; x < 64; x += DITHER_CELL) {
        const dot = isDot(x, y, h);
        expect(isDot(x + 0.5, y + 1.5, h)).toBe(dot);
        expect(isDot(x + 1.99, y + 0.01, h)).toBe(dot);
      }
    }
  });

  it("follows the fade-in, fade-out, fade-in band layout on short, typical and long rails", () => {
    for (const [name, h] of Object.entries(HEIGHTS)) {
      const bandH = h / 3;
      const strip = 16; // two Bayer periods of 2px cells
      const top1 = coverage(0, strip, h);
      const bottom1 = coverage(bandH - strip, bandH, h);
      const top2 = coverage(bandH, bandH + strip, h);
      const bottom2 = coverage(2 * bandH - strip, 2 * bandH, h);
      const top3 = coverage(2 * bandH, 2 * bandH + strip, h);
      const bottom3 = coverage(h - strip, h, h);
      const mid1 = coverage(bandH / 2 - strip / 2, bandH / 2 + strip / 2, h);

      for (const sparse of [top1, bottom2, top3]) expect(sparse, `${name} sparse edge`).toBeLessThan(0.06);
      for (const dense of [bottom1, top2, bottom3]) expect(dense, `${name} dense edge`).toBeGreaterThan(0.3);
      for (const dense of [bottom1, top2, bottom3]) expect(dense, `${name} dense edge`).toBeLessThan(0.5);
      expect(mid1, `${name} mid band`).toBeGreaterThan(top1);
      expect(mid1, `${name} mid band`).toBeLessThan(bottom1);
      // Coverage tracks the analytic density.
      const expectedMid = PEAK_DENSITY * Math.pow(0.5, 1.6);
      expect(Math.abs(mid1 - expectedMid), `${name} mid coverage`).toBeLessThan(0.06);
    }
  });

  it("grows monotonically down band 1 (averaged over wide strips)", () => {
    for (const h of Object.values(HEIGHTS)) {
      const bandH = h / 3;
      const steps = 6;
      const strip = Math.max(16, Math.floor(bandH / steps / 16) * 16);
      let previous = -1;
      for (let i = 0; i < steps; i++) {
        const y0 = Math.floor((i * bandH) / steps / DITHER_CELL) * DITHER_CELL;
        const c = coverage(y0, Math.min(y0 + strip, bandH), h);
        expect(c).toBeGreaterThanOrEqual(previous);
        previous = c;
      }
    }
  });
});
