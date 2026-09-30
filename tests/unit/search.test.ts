import { describe, expect, it } from "vitest";
import {
  contextQuery,
  exampleContext,
  parseContext,
  resolveSearch,
  TOPIC_MAX,
} from "@/lib/search";

describe("resolveSearch", () => {
  it("matches a prepared unit and uses the unit name as the label", () => {
    const r = resolveSearch({ courseId: "physics-30", unitId: "p30c" });
    expect(r.status).toBe("match");
    if (r.status === "match") {
      expect(r.label).toBe("Electromagnetic radiation");
      expect(r.search.id).toBe("phys30");
    }
  });

  it("keeps each Chemistry 20 unit's own label even though both share a prepared search", () => {
    const c = resolveSearch({ courseId: "chemistry-20", unitId: "c20c" });
    const d = resolveSearch({ courseId: "chemistry-20", unitId: "c20d" });
    expect(c.status === "match" && c.label).toBe("Matter as solutions, acids and bases");
    expect(d.status === "match" && d.label).toBe("Quantitative relationships in chemical changes");
    expect(c.status === "match" && d.status === "match" && c.search.id === d.search.id).toBe(true);
  });

  it("matches a typed topic by keyword and keeps the typed text as the label", () => {
    const r = resolveSearch({ courseId: "biology-30", unitId: "other", topic: "DNA replication" });
    expect(r.status).toBe("match");
    if (r.status === "match") {
      expect(r.label).toBe("DNA replication");
      expect(r.search.id).toBe("bio30dna");
    }
  });

  it("asks for a unit when none is chosen, or when 'something else' has no topic", () => {
    expect(resolveSearch({ courseId: "physics-30", unitId: "" }).status).toBe("needs-unit");
    expect(resolveSearch({ courseId: "physics-30", unitId: "other" }).status).toBe("needs-unit");
  });

  it("returns an honest no-match for units without a prepared example", () => {
    expect(resolveSearch({ courseId: "physics-20", unitId: "p20a" })).toEqual({
      status: "no-match",
      courseName: "Physics 20",
      label: "Kinematics",
    });
  });

  it("does not match a unit from another course or an unknown course", () => {
    expect(resolveSearch({ courseId: "biology-20", unitId: "p30c" }).status).toBe("no-match");
    expect(resolveSearch({ courseId: "art-10", unitId: "p30c" }).status).toBe("no-match");
    expect(resolveSearch({ courseId: "physics-30", unitId: "other", topic: "rainbows of cheese" }).status).toBe("no-match");
  });
});

describe("search context in URLs", () => {
  it("round-trips unit and topic contexts", () => {
    const unit = { courseId: "chemistry-20", unitId: "c20d" };
    expect(parseContext(Object.fromEntries(new URLSearchParams(contextQuery(unit))))).toEqual({ ...unit, topic: undefined });
    const topic = { courseId: "biology-30", unitId: "other", topic: "dna replication" };
    expect(parseContext(Object.fromEntries(new URLSearchParams(contextQuery(topic))))).toEqual(topic);
  });

  it("drops a topic unless the unit is 'other', and limits its length", () => {
    expect(parseContext({ course: "physics-30", unit: "p30c", topic: "x" })?.topic).toBeUndefined();
    expect(parseContext({ course: "physics-30", unit: "other", topic: "a".repeat(200) })?.topic).toHaveLength(TOPIC_MAX);
    expect(parseContext({})).toBeNull();
  });
});

describe("exampleContext", () => {
  it("keeps the exact unit for why-match and the back link", () => {
    const c = exampleContext("e3-lithium", { courseId: "chemistry-20", unitId: "c20c" });
    const d = exampleContext("e3-lithium", { courseId: "chemistry-20", unitId: "c20d" });
    expect(c?.label).toBe("Chemistry 20 · Matter as solutions, acids and bases");
    expect(d?.label).toBe("Chemistry 20 · Quantitative relationships in chemical changes");
    expect(d?.backHref).toBe("/?course=chemistry-20&unit=c20d#library");
  });

  it("keeps a typed topic through the round trip", () => {
    const ctx = exampleContext("wilder-institute", { courseId: "biology-20", unitId: "other", topic: "owl recovery" });
    expect(ctx?.label).toBe("Biology 20 · owl recovery");
    expect(ctx?.backHref).toBe("/?course=biology-20&topic=owl+recovery#library");
  });

  it("shows no why-match when the example is not in the resolved results", () => {
    expect(exampleContext("wilder-institute", { courseId: "physics-30", unitId: "p30c" })).toBeNull();
    expect(exampleContext("ghgsat", null)).toBeNull();
  });
});
