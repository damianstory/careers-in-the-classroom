import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { exampleRecords } from "@/content/example-records";
import { getPathway } from "@/content";
import { buildDiscoverCards } from "@/lib/discover-cards";

const root = "docs/validation/full-examples/2026-10-20/";
const approved = JSON.parse(readFileSync(`${root}implementation-evidence/approval.json`, "utf8")) as { draftIds: string[] };
const drafts = JSON.parse(readFileSync(`${root}drafts.json`, "utf8")).drafts as { id: string; slug: string; question: string }[];
const before = JSON.parse(readFileSync(`${root}app-snapshot.json`, "utf8")) as { discover: { number: string; roleId: string; organizationId: string; pathwayId: string }[] };
const batch = exampleRecords.filter((r) => r.addedOn === "2026-10-20");
const cards = buildDiscoverCards("2026-10-20");

describe("20 October approved batch", () => {
  it("implements exactly the 30 approved drafts, preserving their questions", () => {
    expect(batch).toHaveLength(30);
    expect(drafts.map((d) => d.id)).toEqual(approved.draftIds);
    expect(batch.map((r) => r.example.slug).sort()).toEqual(drafts.map((d) => d.slug).sort());
    for (const draft of drafts) {
      expect(batch.find((r) => r.example.slug === draft.slug)?.example.question).toBe(draft.question);
    }
    expect(batch.flatMap((r) => r.jobs)).toEqual([]);
  });

  it("preserves all prior Discover identities and routes while linking every new work area", () => {
    for (const previous of before.discover) {
      const card = cards.find((c) => c.number === previous.number)!;
      expect([card.role.id, card.organization.id, card.pathway.id]).toEqual([previous.roleId, previous.organizationId, previous.pathwayId]);
    }
    expect(cards.filter((c) => Number(c.number) > 70).map((c) => c.number)).toEqual(["71", "72", "73", "74", "75", "76", "77", "78", "79"]);
    for (const record of batch) {
      for (const roleId of record.details.roleIds) {
        expect(cards.filter((c) => c.relatedExamples.some((e) => e.slug === record.example.slug && e.roleId === roleId))).toHaveLength(1);
        expect(record.details.pathwayIds.map(getPathway).some((p) => p?.roleRationale.some((r) => r.roleId === roleId))).toBe(true);
      }
    }
  });

  it("resolves the three gaps without inventing unit matches or clinical decisions", () => {
    const frog = batch.find((r) => r.example.slug === "frog3d-digital-to-physical")!;
    expect(frog.unitLinks).toEqual([]);
    expect(frog.example.courses[0].course).toBe("Science 10");
    const cawst = batch.find((r) => r.organization.id === "cawst")!;
    expect(cawst.details.story.diagramProvenance).toContain("CC BY 3.0");
    expect(cawst.sources.some((s) => s.url.includes("Biosand%20Filter%20Manual"))).toBe(true);
    const wildlife = batch.find((r) => r.organization.id === "calgary-wildlife")!;
    expect(wildlife.sources.some((s) => s.url.endsWith("/patient-release-process"))).toBe(true);
    expect(wildlife.example.mindset).toMatch(/clinical|rehabilitat|release/i);
  });
});
