import { existsSync, readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { examples, getJob, getPathway } from "@/content";
import { exampleRecords } from "@/content/example-records";
import { buildDiscoverCards } from "@/lib/discover-cards";

const packet = "docs/validation/full-examples/2026-10-19/";
const approval = JSON.parse(readFileSync(`${packet}implementation-approval.json`, "utf8")) as { fullDraftIds: string[]; jobCardIds: string[] };
const drafts = JSON.parse(readFileSync(`${packet}drafts.json`, "utf8")).drafts as { id: string; slug: string; question: string; roleIds: string[] }[];
const batch = exampleRecords.filter(r => r.addedOn === "2026-10-19");
const cards = buildDiscoverCards("2026-10-19");

describe("19 October approved implementation", () => {
  it("implements precisely the approved drafts and leaves held companies out", () => {
    expect(batch.map(r => r.example.slug).sort()).toEqual(drafts.map(d => d.slug).sort());
    expect(drafts.map(d => d.id)).toEqual(approval.fullDraftIds);
    expect(batch).toHaveLength(15);
    for (const d of drafts) {
      const r = batch.find(r => r.example.slug === d.slug)!;
      expect(r.example.question).toBe(d.question);
      expect(r.details.roleIds).toEqual(d.roleIds);
    }
    for (const slug of ["orthotics-in-motion", "emsl", "saputo-foodservice", "alberta-distillers", "gga-architecture"]) {
      expect(examples.some(e => e.slug === slug)).toBe(false);
    }
  });

  it("includes the approved jobs with independent dated status and copy provenance", () => {
    expect(batch.flatMap(r => r.jobs.map(j => j.id)).sort()).toEqual([...approval.jobCardIds].sort());
    for (const id of approval.jobCardIds) {
      const job = getJob(id)!;
      expect(job.approval?.packetId).toBe("calgary-full-examples-2026-10-19");
      expect(job.approval?.candidateId).toBe(id);
      expect(job.approval?.copyVersion).toBe(1);
      expect(job.capturedOn).toBe("2026-10-19");
    }
    expect(getJob("CGY-091-J1")?.status.kind).toBe("unknown");
    expect(approval.jobCardIds.filter(id => getJob(id)?.status.kind === "open")).toHaveLength(3);
  });

  it("gives every new role/company pair a supported Discover context and preserves old numbers", () => {
    const numbering = JSON.parse(readFileSync(`${packet}implementation-evidence/discover-numbering.json`, "utf8")) as { previousNumbersPreserved: { number: string; roleId: string }[] };
    for (const before of numbering.previousNumbersPreserved) {
      expect(cards.find(c => c.number === before.number)?.role.id).toBe(before.roleId);
    }
    expect(cards.filter(c => Number(c.number) >= 58).map(c => c.number)).toEqual(Array.from({ length: 13 }, (_, i) => String(58 + i)));
    for (const r of batch) {
      expect(existsSync(`public/images/examples/${r.example.slug}-graphic-novel.webp`)).toBe(true);
      expect(existsSync(`public${r.diagram.image}`)).toBe(true);
      for (const roleId of r.details.roleIds) {
        expect(r.details.pathwayIds.map(getPathway).some(p => p?.roleRationale.some(x => x.roleId === roleId))).toBe(true);
        expect(cards.filter(c => c.relatedExamples.some(e => e.slug === r.example.slug && e.roleId === roleId))).toHaveLength(1);
      }
    }
  });

  it("keeps inquiry examples out of forced unit matches and clinical credentials distinct", () => {
    for (const slug of ["westech-industrial", "marlow-design"]) {
      expect(batch.find(r => r.example.slug === slug)?.unitLinks).toEqual([]);
    }
    expect(getPathway("oct19-route-prosthetic-tech")?.entryNote).toMatch(/technical|clinical/);
    expect(getPathway("oct19-route-prosthetic-clinical")?.entryNote).toMatch(/closed/);
    expect(getPathway("oct19-route-mlt")?.entryNote).toMatch(/registration|certification|regulat/);
    expect(batch.find(r => r.example.slug === "ptw-panel-shop")?.example.work).toMatch(/2023/);
  });
});
