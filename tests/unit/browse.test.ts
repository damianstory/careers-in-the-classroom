import { describe, expect, it } from "vitest";
import { examples } from "@/content";
import { FAMILIES, THEMES, browseExamples, browseRoles, hasFamily } from "@/lib/browse";
import { parseDoor } from "@/lib/doors";

const all = browseExamples();

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

  it("gives every organization its logo", () => {
    for (const e of all) expect(e.org.logo?.src, e.org.name).toMatch(/^\/images\/logos\//);
  });
});

describe("parseDoor", () => {
  it("opens the named door, and the course door otherwise", () => {
    expect(parseDoor({})).toBe("course");
    expect(parseDoor({ by: "company" })).toBe("company");
    expect(parseDoor({ by: ["role", "challenge"] })).toBe("role");
    expect(parseDoor({ by: "nope" })).toBe("course");
  });

  it("keeps any library filter on the course door", () => {
    expect(parseDoor({ by: "company", course: "physics-30" })).toBe("course");
    expect(parseDoor({ by: "role", topic: "water" })).toBe("course");
    expect(parseDoor({ by: "challenge", topic: "  " })).toBe("course");
    expect(parseDoor({ by: "company", course: "" })).toBe("course");
    expect(parseDoor({ by: "role", unit: ["", "p30c"] })).toBe("course");
  });
});
