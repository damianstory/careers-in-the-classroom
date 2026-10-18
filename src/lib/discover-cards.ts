import {
  discoverImages, exampleDetails, examples, getJob, getOrganization,
  getOrganizationRole, getPathway, getRegistrySource, roleProfiles,
} from "@/content";
import type { Subject } from "./discover";
import { jobStatusLabel } from "./job-status";

// Server-only: reads the content library. DiscoverStage, a client component, imports discover.ts,
// so the card builder lives here to keep every example record out of the browser.
export function buildDiscoverCards(today: string) {
  return discoverImages.map((image) => {
    const role = roleProfiles.find((r) => r.id === image.roleId);
    const details = exampleDetails.find((d) => d.organizationId === image.organizationId && d.roleIds.includes(image.roleId)
      && getOrganizationRole(d.organizationId, image.roleId));
    const pathway = getPathway(image.pathwayId);
    const rationale = pathway?.roleRationale.find((r) => r.roleId === image.roleId)?.why;
    const job = image.jobId ? getJob(image.jobId) : undefined;
    if (!role || !details || !pathway || !rationale || !details.pathwayIds.includes(pathway.id)
      || (image.jobId && (!job || !details.jobIds.includes(job.id) || !job.roleIds.includes(role.id)))) {
      throw new Error(`Invalid Discover selection: ${image.number}`);
    }
    const example = examples.find((e) => e.detailsId === details.id)!;
    const organization = getOrganization(details.organizationId)!;
    const link = getOrganizationRole(organization.id, role.id)!;
    return {
      role, example, organization, evidence: link.label,
      evidenceSources: [...new Set([...link.sourceIds, ...organization.problem.sourceIds, ...organization.description.sourceIds])].map((id) => getRegistrySource(id)!),
      number: image.number, title: image.title,
      subject: example.discipline.toLowerCase() as Exclude<Subject, "all">,
      image, courseFit: example.ledger.find((row) => row.type === "course fit")!,
      pathway, rationale,
      pathwaySources: pathway.sourceIds.map((id) => getRegistrySource(id)!),
      job: job ?? null, capturedOn: job?.capturedOn ?? null,
      jobSource: job ? getRegistrySource(job.postingSourceId)! : null,
      jobStatus: job ? jobStatusLabel(job, today) : null,
    };
  });
}
