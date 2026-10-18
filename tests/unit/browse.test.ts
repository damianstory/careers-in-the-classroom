import { describe, expect, it } from "vitest";
import { examples } from "@/content";
import { FAMILIES, THEMES, browseExamples, browseRoles, hasFamily, matchesQuery } from "@/lib/browse";

const all = browseExamples();
const search = (q: string) => all.filter((e) => matchesQuery(e, q)).map((e) => e.slug);

describe("browse index", () => {
  it("covers every example with a theme and every role with a family", () => {
    expect(all).toHaveLength(examples.length);
    for (const e of all) {
      expect(THEMES.map((t) => t.id)).toContain(e.theme);
      for (const r of e.roles) expect(FAMILIES.map((f) => f.id)).toContain(r.family);
    }
  });

  it("keeps work shown at another employer out of the organization's families", () => {
    const e3 = all.find((e) => e.slug === "e3-lithium")!;
    expect(e3.roles.find((r) => r.id === "laboratory-analysis")?.scope).toBe("elsewhere");
    expect(hasFamily(e3, "lab")).toBe(false);
    expect(hasFamily(e3, "engineering")).toBe(true);
    const lab = browseRoles().find((r) => r.id === "laboratory-analysis")!;
    expect(lab.at.at(-1)?.scope).toBe("elsewhere");
  });
});

describe("matchesQuery", () => {
  it("keeps short words such as company abbreviations", () => {
    expect(search("E3")).toEqual(["e3-lithium"]);
  });

  it("treats a named course as that course, not just its subject", () => {
    const hits = search("Physics 30");
    expect(hits).not.toContain("entuitive");
    expect(hits.length).toBeGreaterThan(0);
    for (const slug of hits) expect(all.find((e) => e.slug === slug)!.courses.map((c) => c.name)).toContain("Physics 30");
  });

  it("combines a course with other words", () => {
    expect(search("chemistry 20 water")).toContain("livestock-water-recycling");
    expect(search("chemistry 20 water")).not.toContain("watersmart");
  });

  it("matches nothing when the query has no usable words", () => {
    expect(search("…")).toEqual([]);
    expect(search("the and")).toEqual([]);
  });
});
