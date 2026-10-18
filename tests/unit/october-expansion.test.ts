import { existsSync, readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { examples, getRoleProfile, learningPathways as octoberPathways } from "@/content";
import { exampleRecords } from "@/content/example-records";

const batch = exampleRecords.filter(r => r.addedOn === "2026-10-17");
const octoberExamples = batch.map(r => r.example);
const octoberDetails = batch.map(r => r.details);
const octoberJobs = batch.flatMap(r => r.jobs);
const octoberDiagrams = Object.fromEntries(batch.map(r => [r.example.slug, r.diagram]));
const octoberUnitLinks = batch.flatMap(r => r.unitLinks.map(l => ({ slug: r.example.slug, ...l })));

describe("17 October approved examples", () => {
  it("includes exactly the approved company set without duplicate example IDs", () => {
    const drafts = JSON.parse(readFileSync("docs/validation/full-examples/2026-10-17/drafts.json", "utf8")) as { slug: string }[];
    expect(octoberExamples.map(e => e.slug).sort()).toEqual(drafts.map(d => d.slug).sort());
    expect(new Set(examples.map(e => e.slug)).size).toBe(examples.length);
    expect(octoberExamples).toHaveLength(14);
  });

  it.each(octoberDetails)("$exampleSlug has both images and a supported route for each role", detail => {
    expect(existsSync(`public/images/examples/${detail.exampleSlug}-graphic-novel.webp`)).toBe(true);
    const diagram = octoberDiagrams[detail.exampleSlug];
    expect(existsSync(`public${diagram.image}`)).toBe(true);
    expect(diagram.steps).toHaveLength(4);
    for (const roleId of detail.roleIds) {
      expect(getRoleProfile(roleId)).toBeDefined();
      expect(octoberPathways.some(p => detail.pathwayIds.includes(p.id) && p.roleRationale.some(r => r.roleId === roleId))).toBe(true);
    }
  });

  it("keeps inquiry-only baking stories out of invented unit matches", () => {
    expect(octoberUnitLinks.some(l => ["calgary-italian-bakery", "cbl-bakeries-cinnaroll"].includes(l.slug))).toBe(false);
    expect(octoberUnitLinks.find(l => l.slug === "broken-pencil-studios")?.unitId).toBe("p20a");
    expect(octoberUnitLinks.find(l => l.slug === "joe-media-group")?.unitId).toBe("p30c");
  });

  it("separates historical controller training from the conductor program and live jobs", () => {
    const cpkc = octoberDetails.find(d => d.exampleSlug === "cpkc")!;
    const routes = octoberPathways.filter(p => cpkc.pathwayIds.includes(p.id));
    const controller = routes.find(p => p.provider === "CPKC")!;
    expect(controller.entryNote).toMatch(/historical|now unavailable/);
    expect(controller.roleRationale.map(r => r.roleId)).toEqual(["work-rail-traffic-control"]);
    const conductor = routes.find(p => p.name === "Railway Conductor")!;
    expect(conductor.roleRationale.map(r => r.roleId)).not.toContain("work-rail-traffic-control");
    expect(cpkc.jobIds).toEqual([]);
    expect(octoberJobs.find(j => j.id === "cgy-041-j1")?.status.kind).toBe("unknown");
    expect(octoberJobs.find(j => j.id === "cgy-050-j1")?.status.kind).toBe("open");
  });
});
