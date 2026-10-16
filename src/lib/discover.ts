import {
  discoverImages, exampleDetails, examples, getJob, getOrganization,
  getOrganizationRole, getPathway, getRegistrySource, roleProfiles,
} from "@/content";
import { jobStatusLabel } from "./job-status";

export const subjects = ["all", "biology", "chemistry", "physics"] as const;
export type Subject = typeof subjects[number];
export const subjectLabels: Record<Subject, string> = {
  all: "All jobs", biology: "Biology", chemistry: "Chemistry", physics: "Physics",
};
export const steps = ["Guess", "Reveal", "The work", "Why it matters", "Team & subjects", "Ways in", "Real job"] as const;

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
export type DiscoverCard = ReturnType<typeof buildDiscoverCards>[number];
export const filterCards = (cards: DiscoverCard[], subject: Subject) =>
  cards.filter((card) => subject === "all" || card.subject === subject);
export const subjectCounts = (cards: DiscoverCard[]) =>
  Object.fromEntries(subjects.map((subject) => [subject, filterCards(cards, subject).length])) as Record<Subject, number>;

export function roundOrder(cards: DiscoverCard[], subject: Subject, found: string[], random = Math.random) {
  const active = filterCards(cards, subject).map((c) => c.role.id);
  let order = active.filter((id) => !found.includes(id));
  const fresh = order.length === 0;
  if (fresh) order = [...active];
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  return { order, fresh, found: fresh ? found.filter((id) => !active.includes(id)) : [...found] };
}

export interface DiscoverState { subject: Subject; role?: string; step: number; found: string[] }
type Query = Record<string, string | string[] | undefined>;
export function parseDiscoverState(query: Query, cards: DiscoverCard[]): DiscoverState {
  const subject = subjects.includes(query.subject as Subject) ? query.subject as Subject : "all";
  const role = filterCards(cards, subject).find((c) => c.number === query.role)?.role.id;
  const step = typeof query.step === "string" && /^[0-6]$/.test(query.step) ? Number(query.step) : 0;
  const rolesByNumber = new Map(cards.map((c) => [c.number, c.role.id]));
  const found = typeof query.found === "string"
    ? [...new Set(query.found.split(",").flatMap((number) => {
      const id = rolesByNumber.get(number);
      return id ? [id] : [];
    }))] : [];
  if (role && !found.includes(role)) found.push(role);
  return { subject, role, step: role ? step : 0, found };
}
export function serializeDiscoverState(state: DiscoverState, cards: DiscoverCard[]) {
  const numbersByRole = new Map(cards.map((c) => [c.role.id, c.number]));
  const query = new URLSearchParams({ subject: state.subject });
  const role = state.role ? numbersByRole.get(state.role) : undefined;
  if (role) { query.set("role", role); query.set("step", String(state.step)); }
  const found = state.found.flatMap((id) => {
    const number = numbersByRole.get(id);
    return number ? [number] : [];
  });
  if (found.length) query.set("found", found.join(","));
  return `?${query.toString()}`;
}
