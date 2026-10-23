import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { exampleRecords } from "@/content/example-records";
import { getPathway, getRegistrySource, discoverImages } from "@/content";
import { buildDiscoverCards } from "@/lib/discover-cards";

const root = "docs/validation/full-examples/2026-10-21/";
const drafts = JSON.parse(readFileSync(`${root}drafts.json`, "utf8")).examples as {
  id: string; version: number; exampleSlug: string; question: string;
  classroom: { steps: string[]; activity: string; modelLimits: string };
}[];
const approval = JSON.parse(readFileSync(`${root}implementation-approval.json`, "utf8")) as {
  approvedDrafts: { id: string; version: number }[];
};
const previous = JSON.parse(readFileSync(`${root}app-snapshot.json`, "utf8")).discoverImages as typeof discoverImages;
const batch = exampleRecords.filter((record) => record.addedOn === "2026-10-21");
const cards = buildDiscoverCards("2026-10-21");

describe("21 October approved examples", () => {
  it("preserves the exact approved questions, teaching sequence and model limits", () => {
    expect(batch.map((record) => record.example.slug).sort()).toEqual(drafts.map((draft) => draft.exampleSlug).sort());
    expect(approval.approvedDrafts).toEqual(drafts.map(({ id, version }) => ({ id, version })));
    for (const draft of drafts) {
      const record = batch.find((record) => record.example.slug === draft.exampleSlug)!;
      expect(record.example.question).toBe(draft.question);
      expect(record.details.story.steps.map((step) => step.text)).toEqual(draft.classroom.steps);
      expect(record.example.explain).toBe(draft.classroom.activity);
      expect(record.example.mindset).toBe(draft.classroom.modelLimits);
      expect(record.jobs).toEqual([]);
    }
  });

  it("keeps existing Discover identities and gives every new work area exactly one sourced context", () => {
    for (const image of previous) expect(discoverImages.find((current) => current.number === image.number)).toEqual(image);
    expect(cards.filter((card) => Number(card.number) >= 80 && Number(card.number) <= 82).map((card) => card.number)).toEqual(["80", "81", "82"]);
    for (const record of batch) for (const roleId of record.details.roleIds) {
      expect(cards.filter((card) => card.relatedExamples.some((example) => example.slug === record.example.slug && example.roleId === roleId))).toHaveLength(1);
      expect(record.details.pathwayIds.map(getPathway).some((path) => path?.roleRationale.some((role) => role.roleId === roleId))).toBe(true);
      for (const evidence of record.organizationRoles) expect(evidence.sourceIds.every((id) => getRegistrySource(id)?.url)).toBe(true);
    }
  });

  it("keeps cross-unit measurement and vacancy limits explicit", () => {
    expect(batch.find((record) => record.example.slug === "mcelhanney-measuring-landscapes")?.unitLinks).toEqual([]);
    expect(batch.find((record) => record.example.slug === "amazon-yyc4-robot-decisions")?.details.roleIds).toEqual(["work-warehousing"]);
    expect(getPathway("route-geology")?.name).toBe("Geoscience (BSc)");
  });
});
