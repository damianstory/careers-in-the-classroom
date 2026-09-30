import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { getDetails, getExample, getJob, getPathway, getRegistrySource, jobExamples } from "@/content";
import { jobStatusLabel } from "@/lib/job-status";

const packet = JSON.parse(readFileSync("docs/validation/job-reviews/all-examples/2026-09-29-baseline/candidates.json", "utf8"));

describe("approved content integration", () => {
  it("preserves every approved v1 card and its provenance", () => {
    const integrated = jobExamples.filter((j) => j.approval?.packetId === packet.packet_id);
    expect(integrated).toHaveLength(5);
    for (const job of integrated) {
      const c = packet.candidates.find((c: { id: string }) => c.id === job.approval!.candidateId);
      expect(c.user_decision).toBe("approved");
      expect(job.approval!.copyVersion).toBe(c.copy_version);
      for (const key of ["title", "employer", "location", "arrangement", "level", "summary", "duties", "skills"] as const) {
        expect(job[key], `${c.id} ${key}`).toEqual(c[key]);
      }
      expect(job.employerNote.text).toBe(c.employer_note);
      expect(job.classroomConnection).toBe(c.connection);
      expect(job.limitation).toBe(c.limit);
      expect(getRegistrySource(job.postingSourceId)!.url).toBe(c.source_url);
      expect(getDetails(getExample(c.example_slug)!.detailsId!)!.jobIds).toContain(job.id);
    }
  });

  it("puts E3's own engineering example before the related employer", () => {
    const d = getDetails("e3-lithium-details")!;
    const engineering = d.jobIds.map((id) => getJob(id)!).filter((j) => j.roleIds.includes("process-engineering"));
    expect(engineering.map((j) => j.employer)).toEqual(["E3 Lithium", "Stantec"]);
  });

  it("keeps introductory animal care, technology and veterinarian routes distinct", () => {
    expect(getPathway("olds-assistant")!.entryNote).toContain("not a veterinarian qualification");
    expect(getPathway("olds-vet")!.entryNote).toContain("does not provide direct entry to a DVM");
    expect(getPathway("ucalgary-dvm")!.entryNote).toContain("Not direct entry from high school");
    expect(getPathway("olds-environment")!.roleRationale[0].why).toContain("not equivalent");
  });
});

describe("dated vacancy claims", () => {
  const job = getJob("wilder-animal-care")!;
  it("stops saying accepting applications after the explicit deadline", () => {
    expect(jobStatusLabel(job, "2026-10-09")).toMatch(/^Accepting/);
    expect(jobStatusLabel(job, "2026-10-10")).toMatch(/^Application deadline passed/);
    expect(jobStatusLabel(job, "2027-01-01")).toContain("historical job example");
  });
  it("never treats a future check as an observed open vacancy", () => {
    expect(jobStatusLabel(job, "2026-09-28")).not.toMatch(/^Accepting/);
  });
});
