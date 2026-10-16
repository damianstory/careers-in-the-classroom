import { existsSync, readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { expansionDetails, expansionExamples, expansionJobs, expansionOrganizations, expansionPathways } from "@/content/calgary-expansion";
import { expansionDiagrams } from "@/content/expansion-diagrams";

describe("approved Calgary expansion", () => {
  it("implements exactly the approved full-copy set", () => {
    const drafts = JSON.parse(readFileSync("docs/validation/full-examples/2026-10-15/drafts.json", "utf8"));
    expect(expansionExamples.map(e => e.slug).sort()).toEqual(drafts.map((d: { slug: string }) => d.slug).sort());
    expect(expansionExamples).toHaveLength(15);
    expect(expansionOrganizations).toHaveLength(15);
  });

  it.each(expansionDetails)("$exampleSlug has images and a relevant route for every role", detail => {
    expect(existsSync(`public/images/examples/${detail.exampleSlug}-graphic-novel.webp`)).toBe(true);
    const diagram = expansionDiagrams[detail.exampleSlug];
    expect(existsSync(`public${diagram.image}`)).toBe(true);
    expect(diagram.steps).toHaveLength(4);
    for (const roleId of detail.roleIds) {
      expect(expansionPathways.some(p => detail.pathwayIds.includes(p.id) && p.roleRationale.some(r => r.roleId === roleId)), roleId).toBe(true);
    }
  });

  it("does not turn historical posting evidence into open vacancies", () => {
    expect(expansionJobs).toHaveLength(2);
    for (const job of expansionJobs) expect(job.status.kind).not.toBe("open");
  });
});
