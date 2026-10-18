import { getJob, getOrganization, type Example, type ExampleDetails } from "@/content";
import { asView, type ExploreState, type View } from "./example-navigation";

// Server-only parts of example navigation. They read the content library, so they live apart from
// example-navigation.ts, which client components import.

type Params = Record<string, string | string[] | undefined>;
const first = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v)?.trim();

// A section is offered only when the example has content for it. The same list governs the rail, the
// page and the URL, so a copied or typed link can never land on a section with nothing behind it.
export function availableViews(e: Example, details?: ExampleDetails): View[] {
  const views: View[] = ["question", "how-it-works"];
  if (details ? details.roleIds.length : e.roles.length) views.push("who");
  if (details ? details.pathwayIds.length : e.pathways.length) views.push("ways-in");
  views.push("ask");
  if (details && getOrganization(details.organizationId)) views.push("about");
  views.push("sources");
  return views;
}

// Unknown or incompatible values fall back to no selection; they never invent a link.
// The selection is validated on its own, whatever the destination: a role against the example's
// roles, a job against that role's jobs. Roles and jobs need enriched records (stable ids).
export function parseExplore(params: Params, details: ExampleDetails | undefined, views: readonly View[]): ExploreState {
  const view = asView(first(params.view), views);

  const rawRole = first(params.role);
  const role = details && rawRole && details.roleIds.includes(rawRole) ? rawRole : undefined;

  const rawJob = first(params.job);
  const found = role && rawJob && details!.jobIds.includes(rawJob) ? getJob(rawJob) : undefined;
  const job = found && found.roleIds.includes(role!) ? found.id : undefined;

  return { view, role, job };
}
