import { getJob, getOrganization, type Example, type ExampleDetails } from "@/content";

// An enriched example is one long page: classroom story, company, roles and pathways, in order.
// Its URL holds two separate things (plan: docs/build/PLAN-b2-one-page.md):
// - the selection, in the query (role, job), next to the search context (course, unit, topic);
// - the destination, in the fragment (#story, #company, #roles, #pathways), or a legacy `?view=`.
// Job examples live inside their role: a job is only selected with its role.

export const VIEWS = ["story", "company", "roles", "pathways"] as const;
export type View = (typeof VIEWS)[number];

export interface Selection {
  role?: string;
  job?: string;
}

export interface ExploreState extends Selection {
  /** A legacy `?view=` destination, validated. Never written by the app any more. */
  view?: View;
}

type Params = Record<string, string | string[] | undefined>;
const first = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v)?.trim();

// A section is offered only when the example has content for it. The same list governs the rail, the
// page and the URL, so a copied or typed link can never land on a section with nothing behind it.
export function availableViews(e: Example, details?: ExampleDetails): View[] {
  const views: View[] = ["story"];
  if (details && getOrganization(details.organizationId)) views.push("company");
  if (details ? details.roleIds.length : e.roles.length) views.push("roles");
  if (details ? details.pathwayIds.length : e.pathways.length) views.push("pathways");
  return views;
}

// A section name from a fragment or a legacy view, if the page has that section.
export function asView(raw: string | null | undefined, views: readonly View[]): View | undefined {
  const v = raw === "jobs" ? "roles" : raw; // links saved before jobs moved into roles
  return v && views.includes(v as View) ? (v as View) : undefined;
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

// Where the page lands on load, reload and Back/Forward. The first match wins:
// a valid fragment, a valid legacy view, Roles when a role is selected, otherwise the top (null).
export function landingSection(
  views: readonly View[],
  hash: string,
  legacyView: string | null | undefined,
  selection: Selection,
): View | null {
  return asView(hash.replace(/^#/, ""), views) ?? asView(legacyView, views) ?? (selection.role ? asView("roles", views) : undefined) ?? null;
}

// The query a URL navigates to, normalized the same way everywhere: without the legacy view (a
// destination, not a selection), in a stable order. Two URLs with the same key render the same page.
export function selectionQuery(params: URLSearchParams | Params): string {
  const q = new URLSearchParams();
  const entries = params instanceof URLSearchParams ? [...params.entries()] : Object.entries(params);
  for (const [k, v] of entries) {
    if (k === "view" || v === undefined) continue;
    for (const one of Array.isArray(v) ? v : [v]) q.append(k, one);
  }
  q.sort();
  return q.toString();
}

// `contextQuery` is the already-validated search context ("" when there is none).
// The selection goes in the query and the section in the fragment. It never writes `view`.
export function exploreHref(slug: string, contextQuery: string, target: Selection & { section?: View }): string {
  const q = new URLSearchParams(contextQuery);
  if (target.role) q.set("role", target.role);
  if (target.role && target.job) q.set("job", target.job);
  const s = q.toString();
  return `/examples/${slug}${s ? `?${s}` : ""}${target.section ? `#${target.section}` : ""}`;
}
