import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { exampleRecords } from "@/content/example-records";
import { examples, getPathway, getRegistrySource, discoverImages } from "@/content";
import { buildDiscoverCards } from "@/lib/discover-cards";

const root = "docs/validation/full-examples/2026-10-23/";
const before = JSON.parse(readFileSync(`${root}app-before.json`, "utf8")) as {
  examples: typeof examples; discoverImages: typeof discoverImages;
};
const authorization = JSON.parse(readFileSync(`${root}authorization.json`, "utf8")) as { approvedCandidateIds: string[] };
const drafts = JSON.parse(readFileSync(`${root}drafts.json`, "utf8")).examples as { candidateId: string; slug: string }[];
const batch = exampleRecords.filter((record) => record.addedOn === "2026-10-23");
const cards = buildDiscoverCards("2026-10-23");

describe("23 October approved company integration", () => {
  it("adds exactly the 19 authorized candidates and preserves previous examples and card identities", () => {
    expect(batch).toHaveLength(19);
    expect(drafts.map((d) => d.candidateId).sort()).toEqual(authorization.approvedCandidateIds.slice().sort());
    expect(batch.map((r) => r.example.slug).sort()).toEqual(drafts.map((d) => d.slug).sort());
    for (const previous of before.examples) expect(examples.find((e) => e.slug === previous.slug)).toEqual(previous);
    for (const previous of before.discoverImages) expect(discoverImages.find((c) => c.number === previous.number)).toEqual(previous);
    expect(discoverImages.filter((c) => !before.discoverImages.some((p) => p.number === c.number)).map((c) => c.number)).toEqual(["83"]);
  });
  it("gives each related work area exactly one Discover context, evidence and a supported pathway", () => {
    for (const record of batch) {
      expect(record.jobs).toEqual([]);
      for (const roleId of record.details.roleIds) {
        expect(cards.filter((card) => card.relatedExamples.some((example) => example.slug === record.example.slug && example.roleId === roleId))).toHaveLength(1);
        expect(record.details.pathwayIds.map(getPathway).some((path) => path?.roleRationale.some((role) => role.roleId === roleId))).toBe(true);
      }
      for (const evidence of record.organizationRoles) expect(evidence.sourceIds.every((id) => getRegistrySource(id)?.url)).toBe(true);
    }
  });
  it("preserves the historical, clinical and cross-unit evidence limits", () => {
    const get = (slug: string) => batch.find((r) => r.example.slug === slug)!;
    expect(get("allnorth-sensor-to-control").unitLinks).toEqual([]);
    expect(get("bioaro-checking-genomic-results").example.mindset).toMatch(/not a clinical/);
    expect(get("spark-programming-motion").example.mindset).toContain("BEC Robotics");
    expect(get("stellaralgo-fan-records").example.work).toMatch(/2021|2022/);
  });
});
