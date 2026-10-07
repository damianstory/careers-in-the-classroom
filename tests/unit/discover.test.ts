import { existsSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { discoverImages, exampleDetails, roleProfiles } from "@/content";
import { buildDiscoverCards, parseDiscoverState, roundOrder, serializeDiscoverState, subjectCounts } from "@/lib/discover";

const cards = buildDiscoverCards("2026-10-06");
describe("Discover content", () => {
  it("has one existing picture and one owning example per role", () => {
    expect(discoverImages).toHaveLength(roleProfiles.length);
    for (const role of roleProfiles) {
      const images = discoverImages.filter((image) => image.roleId === role.id);
      expect(images).toHaveLength(1);
      expect(existsSync(`public${images[0].src}`)).toBe(true);
      expect(images[0].titleBandPct).toBeGreaterThanOrEqual(15);
      expect(images[0].titleBandPct).toBeLessThanOrEqual(35);
      expect(exampleDetails.filter((d) => d.roleIds.includes(role.id))).toHaveLength(1);
    }
  });
  it("derives complete cards and preserves optional saved jobs", () => {
    expect(cards).toHaveLength(roleProfiles.length);
    for (const c of cards) {
      expect(c.example.detailsId).toBeTruthy();
      expect(c.organization.name).toBeTruthy();
      expect(c.evidence).toBeTruthy();
      expect(c.role.tasks).toHaveLength(3);
      expect(c.pathway.roleRationale.find((r) => r.roleId === c.role.id)?.why).toBe(c.rationale);
      expect(c.courseFit.type).toBe("course fit");
      expect(c.courseFit.status).toBeTruthy();
      expect(c.capturedOn).toBe(c.job?.capturedOn ?? null);
    }
    expect(cards.some((c) => c.job === null)).toBe(true);
    expect(cards.find((c) => c.role.id === "animal-care")?.capturedOn).toBe("2026-09-29");
  });
  it("counts the subjects", () => expect(subjectCounts(cards)).toEqual({ all: 9, biology: 3, chemistry: 2, physics: 4 }));
});
describe("Discover rounds", () => {
  it("excludes found roles and never duplicates", () => {
    const { order, fresh } = roundOrder(cards, "all", ["animal-care"], () => .3);
    expect(order).toHaveLength(8);
    expect(new Set(order).size).toBe(8);
    expect(order).not.toContain("animal-care");
    expect(fresh).toBe(false);
  });
  it("resets only the exhausted subject and signals a fresh set", () => {
    const result = roundOrder(cards, "chemistry", ["animal-care", "process-engineering", "process-operations"]);
    expect(result.fresh).toBe(true);
    expect(result.found).toEqual(["animal-care"]);
    expect(result.order.sort()).toEqual(["process-engineering", "process-operations"]);
  });
});
describe("Discover URL state", () => {
  it("round trips a reveal and found list", () => {
    const state = { subject: "biology" as const, role: "animal-care", step: 5, found: ["animal-care", "software-data"] };
    expect(parseDiscoverState(Object.fromEntries(new URLSearchParams(serializeDiscoverState(state, cards))), cards)).toEqual(state);
  });
  it("counts a deep-linked role as found and excludes it from the next round", () => {
    const state = parseDiscoverState({ role: "05", step: "5" }, cards);
    expect(state.role).toBe("animal-care");
    expect(state.found).toEqual(["animal-care"]);
    expect(roundOrder(cards, state.subject, state.found).order).not.toContain("animal-care");
  });
  it("uses only exact card numbers in URLs, including Guess", () => {
    const state = { subject: "all" as const, role: "animal-care", step: 0, found: ["animal-care", "software-data"] };
    const query = new URLSearchParams(serializeDiscoverState(state, cards));
    expect(query.get("role")).toBe("05");
    expect(query.get("step")).toBe("0");
    expect(query.get("found")).toBe("05,03");
    expect(parseDiscoverState(Object.fromEntries(query), cards)).toEqual(state);
    for (const invalid of ["animal-care", "5", "005", " 05", "05 ", "00", "99", "5.0"]) {
      const parsed = parseDiscoverState({ role: invalid, found: invalid, step: "5" }, cards);
      expect(parsed.role).toBeUndefined();
      expect(parsed.found).toEqual([]);
      expect(parsed.step).toBe(0);
    }
  });
  it("validates unknown, mismatched, duplicated and malformed values", () => {
    expect(parseDiscoverState({ subject: "bad", role: "unknown", step: "5", found: "bad,05,05" }, cards)).toEqual({ subject: "all", role: undefined, step: 0, found: ["animal-care"] });
    expect(parseDiscoverState({ subject: "chemistry", role: "05", step: "5" }, cards).role).toBeUndefined();
    for (const step of ["-1", "7", "1.5", "", "NaN", "01"]) {
      expect(parseDiscoverState({ role: "05", step }, cards).step).toBe(0);
    }
    expect(parseDiscoverState({ subject: ["biology"], role: ["05"], found: ["05"] }, cards)).toEqual({ subject: "all", role: undefined, step: 0, found: [] });
    expect(parseDiscoverState({ step: "6" }, cards).step).toBe(0);
  });
});
