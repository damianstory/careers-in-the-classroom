import {
  discoverImages, exampleDetails, examples, getJob, getOrganization,
  getOrganizationRole, getPathway, getRegistrySource, roleProfiles,
} from "@/content";
import type { Subject } from "./discover";
import { jobStatusLabel } from "./job-status";
import { discoverRoleId } from "@/content/discover-role-aliases";

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
    const relatedExamples = examples.flatMap((candidate) => {
      const detail = exampleDetails.find((d) => d.id === candidate.detailsId);
      const roleId = detail?.roleIds.find((id) => discoverRoleId(id) === role.id
        && getOrganizationRole(detail.organizationId, id));
      return detail && roleId ? [{
        slug: candidate.slug, organization: candidate.org, question: candidate.question,
        roleId, subject: candidate.discipline.toLowerCase() as Exclude<Subject, "all">,
        evidence: getOrganizationRole(detail.organizationId, roleId)!,
      }] : [];
    });
    // A shared occupation can teach several subjects. Keep its company evidence and
    // preparation route together when the selected subject needs a different example.
    const contexts = relatedExamples.filter((e) => e.slug !== example.slug).map((reference) => {
      const contextExample = examples.find((e) => e.slug === reference.slug)!;
      const detail = exampleDetails.find((d) => d.id === contextExample.detailsId)!;
      const org = getOrganization(detail.organizationId)!;
      const route = detail.pathwayIds.map(getPathway).find((p) => p?.roleRationale.some((r) => r.roleId === reference.roleId));
      if (!route) throw new Error(`Missing Discover pathway: ${reference.slug}/${reference.roleId}`);
      const savedJob = detail.jobIds.map(getJob).find((j) => j?.roleIds.includes(reference.roleId));
      return {
        example: contextExample, organization: org, contextRoleId: reference.roleId,
        evidence: reference.evidence.label,
        evidenceSources: [...new Set([...reference.evidence.sourceIds, ...org.problem.sourceIds, ...org.description.sourceIds])].map((id) => getRegistrySource(id)!),
        subject: reference.subject, courseFit: contextExample.ledger.find((row) => row.type === "course fit")!,
        pathway: route, rationale: route.roleRationale.find((r) => r.roleId === reference.roleId)!.why,
        pathwaySources: route.sourceIds.map((id) => getRegistrySource(id)!),
        job: savedJob ?? null, capturedOn: savedJob?.capturedOn ?? null,
        jobSource: savedJob ? getRegistrySource(savedJob.postingSourceId)! : null,
        jobStatus: savedJob ? jobStatusLabel(savedJob, today) : null,
      };
    });
    return {
      role, example, organization, evidence: link.label,
      evidenceSources: [...new Set([...link.sourceIds, ...organization.problem.sourceIds, ...organization.description.sourceIds])].map((id) => getRegistrySource(id)!),
      number: image.number, title: image.title,
      subject: example.discipline.toLowerCase() as Exclude<Subject, "all">,
      subjects: [...new Set(relatedExamples.map((e) => e.subject))],
      relatedExamples, contexts, contextRoleId: role.id,
      image, courseFit: example.ledger.find((row) => row.type === "course fit")!,
      pathway, rationale,
      pathwaySources: pathway.sourceIds.map((id) => getRegistrySource(id)!),
      job: job ?? null, capturedOn: job?.capturedOn ?? null,
      jobSource: job ? getRegistrySource(job.postingSourceId)! : null,
      jobStatus: job ? jobStatusLabel(job, today) : null,
    };
  });
}
