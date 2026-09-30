import { describe, expect, it } from "vitest";
import { buildLibrary, coverage, filterQuery, parseFilter, unitOptions } from "@/lib/library";

const slugs = (lib: ReturnType<typeof buildLibrary>, id: string) =>
  lib.sections.find((s) => s.id === id)?.items.map((i) => (i.type === "example" ? i.example.slug : i.newsId)) ?? [];

describe("library filter in the URL", () => {
  it("round-trips course, unit and topic, and drops unknown or mismatched values", () => {
    const f = { courseId: "physics-30", unitId: "p30c", topic: "methane" };
    expect(parseFilter(Object.fromEntries(new URLSearchParams(filterQuery(f))))).toEqual(f);
    expect(parseFilter({ course: "art-10", unit: "p30c" })).toEqual({ courseId: undefined, unitId: undefined, topic: undefined });
    expect(parseFilter({ course: "biology-20", unit: "p30c" }).unitId).toBeUndefined();
  });

  it("still reads the old unit=other&topic= form", () => {
    expect(parseFilter({ course: "biology-20", unit: "other", topic: "owl recovery" })).toEqual({
      courseId: "biology-20",
      unitId: undefined,
      topic: "owl recovery",
    });
  });
});

describe("buildLibrary", () => {
  it("shows every example with no filter", () => {
    const lib = buildLibrary({});
    expect(lib.count).toBe(3);
    expect(lib.sections.map((s) => s.id)).toEqual(["rest"]);
  });

  it("puts the unit's prepared results first, with why-match and a context link", () => {
    const lib = buildLibrary({ courseId: "physics-30", unitId: "p30c" });
    expect(slugs(lib, "fits")).toEqual(["ghgsat", "ghgsat-second-generation"]);
    const first = lib.sections[0].items[0];
    expect(first.type === "example" && first.href).toBe("/examples/ghgsat?course=physics-30&unit=p30c");
    expect(first.type === "example" && first.why).toMatch(/spectrometer/);
    expect(lib.noMatch).toBe(false);
    expect(slugs(lib, "rest")).toEqual(["wilder-institute", "e3-lithium"]);
  });

  it("turns a unit with nothing prepared into nearest fits from the same subject", () => {
    const lib = buildLibrary({ courseId: "science-20", unitId: "s20a" });
    expect(lib.noMatch).toBe(true);
    expect(slugs(lib, "closest")).toEqual(["e3-lithium"]);
    expect(lib.sections.flatMap((s) => s.items)).toHaveLength(3);
  });

  it("keeps a no-match for the unit even when other examples fit the course", () => {
    const lib = buildLibrary({ courseId: "science-30", unitId: "s30b" });
    expect(lib.noMatch).toBe(true);
    expect(slugs(lib, "course")).toEqual(["ghgsat"]);
    expect(slugs(lib, "closest")).toEqual(["e3-lithium"]);
  });

  it("matches a typed topic in a course through its prepared search", () => {
    const lib = buildLibrary({ courseId: "biology-20", topic: "owl recovery" });
    const first = lib.sections[0].items[0];
    expect(first.type === "example" && first.href).toBe("/examples/wilder-institute?course=biology-20&unit=other&topic=owl+recovery");
  });

  it("filters by topic across courses, and shows a no-match when nothing fits", () => {
    expect(slugs(buildLibrary({ topic: "lithium" }), "topic")).toEqual(["e3-lithium"]);
    const none = buildLibrary({ topic: "combustion" });
    expect(none.noMatch).toBe(true);
    expect(none.count).toBe(0);
    expect(slugs(none, "rest")).toHaveLength(3);
  });

  it("keeps the honest news-only result for Biology 30 DNA", () => {
    const lib = buildLibrary({ courseId: "biology-30", topic: "DNA replication" });
    expect(slugs(lib, "fits")).toEqual(["enzyme-system-early-research"]);
    expect(lib.sections[0].note).toMatch(/No Calgary example/);
    expect(lib.noMatch).toBe(false);
  });
});

describe("coverage", () => {
  it("lists ready units with counts and keeps unprepared ones selectable", () => {
    const opts = unitOptions("physics-30");
    expect(opts.find((o) => o.id === "p30c")).toMatchObject({ ready: true, note: "1 example" });
    expect(opts.find((o) => o.id === "p30a")).toMatchObject({ ready: false, note: undefined });
    expect(coverage("physics-30")).toEqual({ ready: 1, total: 4 });
    expect(unitOptions("biology-30").find((o) => o.id === "b30c")).toMatchObject({ ready: false, note: "1 recent development" });
  });
});
