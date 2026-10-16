import { getJob, getOrganization, type Example, type ExampleDetails } from "@/content";

// The query holds a selection; the fragment holds a showable part.
export const VIEWS = ["question", "how-it-works", "who", "ways-in", "ask", "about", "sources"] as const;
export type View = (typeof VIEWS)[number];
export type Layout = "parts" | "all";
export const LAYOUT_KEY = "example-layout";
export const SHOW_PARTS: readonly View[] = ["question", "how-it-works", "who", "ways-in", "ask"];
export const PART_LABELS: Record<View, string> = {
  question: "The question", "how-it-works": "How it works", who: "Who does this work",
  "ways-in": "Ways in", ask: "Ask the class", about: "About", sources: "Sources",
};

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
  const views: View[] = ["question", "how-it-works"];
  if (details ? details.roleIds.length : e.roles.length) views.push("who");
  if (details ? details.pathwayIds.length : e.pathways.length) views.push("ways-in");
  views.push("ask");
  if (details && getOrganization(details.organizationId)) views.push("about");
  views.push("sources");
  return views;
}

export function asView(raw: string | null | undefined, views: readonly View[]): View | undefined {
  return landingSection(views, raw ?? "", null, {}, "all") ?? undefined;
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

// Self-contained so the pre-paint script and hydrated navigation execute this exact rule.
// `selection` has already been validated against the example on the server.
export function landingSection(
  views: readonly View[], hash: string, legacyView: string | null | undefined,
  selection: Selection, layout: Layout = "parts",
): View | null {
  const legacy: Record<string, string> = { story: "question", company: "about", roles: "who", pathways: "ways-in", jobs: "who" };
  const valid = (value: string) => {
    const part = legacy[value] ?? value;
    return views.includes(part as View) ? part as View : undefined;
  };
  return valid(hash.replace(/^#/, "")) ?? valid(legacyView?.trim() ?? "") ??
    (selection.role || selection.job ? valid("who") : undefined) ?? (layout === "parts" ? "question" : null);
}

// A blocking native script: next/script afterInteractive is too late, and beforeInteractive
// belongs in the root layout (installed Next.js docs: app/api-reference/components/script).
// Escape '<' so serialized content cannot terminate the script element.
export function layoutBootstrap(views: readonly View[], selection: Selection): string {
  const data = JSON.stringify({ views, selection, key: LAYOUT_KEY }).replace(/</g, "\\u003c");
  return `(()=>{const root=document.currentScript.parentElement;let observer;const fail=()=>{delete root.dataset.layout;delete root.dataset.part};try{
const data=${data},land=${landingSection.toString()};let layout="parts";try{if(localStorage.getItem(data.key)==="all")layout="all"}catch{}
root.dataset.part=land(data.views,location.hash,new URLSearchParams(location.search).get("view"),data.selection,layout)||"question";root.dataset.layout=layout;
const sync=()=>{for(const link of root.querySelectorAll("[data-part-link]")){if(link.dataset.partLink===root.dataset.part)link.setAttribute("aria-current","location");else link.removeAttribute("aria-current")}for(const button of root.querySelectorAll("[data-view-toggle]"))button.setAttribute("aria-pressed",String(root.dataset.layout==="all"))};
const hash=()=>{try{const part=land(data.views,location.hash,null,{},"all");if(!part)return;root.dataset.part=part;sync();const section=document.getElementById(part);section?.scrollIntoView({block:"start"});document.getElementById(section?.getAttribute("aria-labelledby"))?.focus({preventScroll:true})}catch{fail()}};
const click=(event)=>{const button=event.target.closest("[data-contents],[data-view-toggle]");if(!button||event.button||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;event.preventDefault();event.stopPropagation();try{if(button.hasAttribute("data-contents")){delete root.dataset.layout}else{root.dataset.layout=root.dataset.layout==="all"?"parts":"all";try{localStorage.setItem(data.key,root.dataset.layout)}catch{}}sync()}catch{fail()}};
const ready=()=>{observer?.disconnect();window.removeEventListener("hashchange",hash);root.removeEventListener("click",click,true)};
observer=new MutationObserver(()=>{try{sync();if(root.querySelector("[data-navigation-end]"))observer.disconnect()}catch{fail();observer.disconnect()}});observer.observe(root,{childList:true,subtree:true});
window.addEventListener("hashchange",hash);root.addEventListener("click",click,true);root.addEventListener("explore:ready",ready,{once:true});sync();
}catch{observer?.disconnect();fail()}})()`;
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
  q.delete("view");
  q.delete("role");
  q.delete("job");
  if (target.role) q.set("role", target.role);
  if (target.role && target.job) q.set("job", target.job);
  const s = q.toString();
  return `/examples/${slug}${s ? `?${s}` : ""}${target.section ? `#${target.section}` : ""}`;
}
