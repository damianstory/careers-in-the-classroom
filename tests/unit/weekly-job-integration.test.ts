import { readFileSync } from "node:fs";
import { expect, it } from "vitest";
import { getDetails, getJob, getOrganizationRole, getRegistrySource } from "@/content";
import { buildDiscoverCards } from "@/lib/discover";
import { jobStatusLabel } from "@/lib/job-status";

const packet = JSON.parse(readFileSync("docs/validation/job-reviews/all-examples/2026-10-05-weekly/candidates.json", "utf8"));
it("integrates approved work copy with distinct employer attribution", () => {
  for (const [index, id] of ["agat-water-lab-technician", "enmas-environmental-technician"].entries()) {
    const job = getJob(id)!;
    const candidate = packet.candidates[index];
    expect(candidate.user_decision).toBe("approved");
    for (const key of ["title", "employer", "summary", "duties", "skills", "level"] as const) expect(job[key]).toEqual(candidate[key]);
    expect(job.employerNote.text).toBe(candidate.employer_note);
    expect(getRegistrySource(job.postingSourceId)?.url).toBe(candidate.source_url);
  }
  expect(getDetails("e3-lithium-details")?.roleIds).toContain("laboratory-analysis");
  expect(getOrganizationRole("e3-lithium", "laboratory-analysis")).toBeUndefined();
  expect(buildDiscoverCards("2026-10-07").some((c) => c.role.id === "laboratory-analysis")).toBe(false);
});
it("preserves historical evidence without claiming an unavailable posting is open", () => {
  expect(jobStatusLabel(getJob("agat-water-lab-technician")!, "2026-10-07")).toBe("Historical job example — not a current vacancy");
  expect(jobStatusLabel(getJob("ghgsat-full-stack-developer")!, "2026-10-07")).toMatch(/^Closed/);
  const backend = getJob("ghgsat-backend-developer")!;
  expect(backend.publishedOn).toBeUndefined();
  expect(backend.sourceIds).toContain("job-ghgsat-backend");
  expect(getRegistrySource(backend.postingSourceId)?.url).toBe("https://ghgsat.bamboohr.com/careers/205");
});
