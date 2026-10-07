import {
  discoverImages, exampleDetails, examples, getJob, getOrganization,
  getOrganizationRole, getPathway, roleProfiles,
} from "@/content";
import { jobStatusLabel } from "./job-status";

export const subjects = ["all", "biology", "chemistry", "physics"] as const;
export type Subject = typeof subjects[number];
export const subjectLabels: Record<Subject, string> = {
  all: "All jobs", biology: "Biology", chemistry: "Chemistry", physics: "Physics",
};
export const steps = ["Guess", "Job", "Work", "Why", "Team", "Route", "Deeper"] as const;

export function buildDiscoverCards(today: string) {
  return roleProfiles.map((role, index) => {
    const details = exampleDetails.find((d) => d.roleIds.includes(role.id))!;
    const example = examples.find((e) => e.detailsId === details.id)!;
    const organization = getOrganization(details.organizationId)!;
    const evidence = getOrganizationRole(organization.id, role.id)!.label;
    const pathway = details.pathwayIds.map(getPathway).find((p) => p?.roleRationale.some((r) => r.roleId === role.id))!;
    const job = details.jobIds.map(getJob).find((j) => j?.roleIds.includes(role.id));
    return {
      role, example, organization, evidence,
      number: String(index + 1).padStart(2, "0"),
      subject: example.discipline.toLowerCase() as Exclude<Subject, "all">,
      image: discoverImages.find((image) => image.roleId === role.id)!,
      courseFit: example.ledger.find((row) => row.type === "course fit")!,
      pathway, rationale: pathway.roleRationale.find((r) => r.roleId === role.id)!.why,
      job: job ?? null, capturedOn: job?.capturedOn ?? null,
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
