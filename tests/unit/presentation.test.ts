import { describe, expect, it } from "vitest";
import { pathwayPages } from "@/lib/presentation";

describe("qualified pathway pagination", () => {
  it("keeps all cards in order, with no clipping or loss of an odd final card", () => {
    expect(pathwayPages([200, 220, 300, 280, 180], 560)).toEqual([[0, 1, 2, 3], [4]]);
  });
  it("splits before a tall row instead of shrinking its entry notes", () => {
    expect(pathwayPages([300, 260, 300, 380, 230], 600)).toEqual([[0, 1], [2, 3], [4]]);
  });
  it("handles missing pathways and rows that exactly fit", () => {
    expect(pathwayPages([], 600)).toEqual([]);
    expect(pathwayPages([280, 270, 296], 600)).toEqual([[0, 1, 2]]);
  });
});
