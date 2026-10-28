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

export interface ExampleCard { part: View; card: number; title: string }

export function cardsFor(views: readonly View[], hasStory: boolean): ExampleCard[] {
  return views.flatMap((part) => part === "how-it-works" && hasStory
    ? [{ part, card: 1, title: "What happens" }, { part, card: 2, title: "The lesson, in the real world" }]
    : [{ part, card: 1, title: PART_LABELS[part] }]);
}

export function cardFragment({ part, card }: Pick<ExampleCard, "part" | "card">): string {
  return `#${part}${card > 1 ? `-${card}` : ""}`;
}

export function adjacentCard(cards: readonly ExampleCard[], current: Pick<ExampleCard, "part" | "card">, direction: -1 | 1) {
  const index = cards.findIndex((item) => item.part === current.part && item.card === current.card);
  return index < 0 ? undefined : cards[index + direction];
}

export interface Selection {
  role?: string;
  job?: string;
}

export interface ExploreState extends Selection {
  /** A legacy `?view=` destination, validated. Never written by the app any more. */
  view?: View;
}

type Params = Record<string, string | string[] | undefined>;

export function asView(raw: string | null | undefined, views: readonly View[]): View | undefined {
  return landingSection(views, raw ?? "", null, {}, "all") ?? undefined;
}

// Self-contained so the pre-paint script and hydrated navigation execute this exact rule.
// `selection` has already been validated against the example on the server.
export function landingSection(
  views: readonly View[], hash: string, legacyView: string | null | undefined,
  selection: Selection, layout: Layout = "parts",
): View | null {
  return landingCard(views, hash, legacyView, selection, layout)?.part ?? null;
}

// Self-contained: this exact parser is serialized into the pre-paint bootstrap.
export function landingCard(
  views: readonly View[], hash: string, legacyView: string | null | undefined,
  selection: Selection, layout: Layout = "parts", hasStory = false,
): Pick<ExampleCard, "part" | "card"> | null {
  const legacy: Record<string, string> = { story: "question", company: "about", roles: "who", pathways: "ways-in", jobs: "who" };
  const valid = (value: string) => {
    const match = value.match(/^(.*?)-(\d+)$/);
    const name = match ? match[1] : value;
    const part = (legacy[name] ?? name) as View;
    if (!views.includes(part)) return undefined;
    const requested = match ? Number(match[2]) : 1;
    return { part, card: part === "how-it-works" && hasStory && requested === 2 ? 2 : 1 };
  };
  return valid(hash.replace(/^#/, "")) ?? valid(legacyView?.trim() ?? "") ??
    (selection.role || selection.job ? valid("who") : undefined) ?? (layout === "parts" ? { part: "question", card: 1 } : null);
}

// A blocking native script: next/script afterInteractive is too late, and beforeInteractive
// belongs in the root layout (installed Next.js docs: app/api-reference/components/script).
// Escape '<' so serialized content cannot terminate the script element.
export function layoutBootstrap(views: readonly View[], selection: Selection, hasStory = false): string {
  const data = JSON.stringify({ views, selection, hasStory, key: LAYOUT_KEY }).replace(/</g, "\\u003c");
  return `(()=>{const root=document.currentScript.parentElement;let observer;const fail=()=>{delete root.dataset.layout;delete root.dataset.part;delete root.dataset.card};try{
const data=${data},land=${landingCard.toString()};let layout="parts";try{if(localStorage.getItem(data.key)==="all")layout="all"}catch{}
const initial=land(data.views,location.hash,new URLSearchParams(location.search).get("view"),data.selection,layout,data.hasStory);root.dataset.part=initial?.part||"question";root.dataset.card=String(initial?.card||1);root.dataset.layout=layout;
const sync=()=>{for(const link of root.querySelectorAll("[data-part-link]")){if(link.dataset.partLink===root.dataset.part)link.setAttribute("aria-current","location");else link.removeAttribute("aria-current")}for(const button of root.querySelectorAll("[data-view-toggle]"))button.setAttribute("aria-pressed",String(root.dataset.layout==="all"))};
const hash=()=>{try{const empty=location.hash===""||location.hash==="#",layout=root.dataset.layout==="parts"?"parts":"all";
const target=empty?land(data.views,"",new URLSearchParams(location.search).get("view"),data.selection,layout,data.hasStory):land(data.views,location.hash,null,{},"all",data.hasStory);
if(!target){if(empty)window.scrollTo(0,0);return}root.dataset.part=target.part;root.dataset.card=String(target.card);sync();const section=document.getElementById(target.part);section?.scrollIntoView({block:"start"});document.getElementById(section?.getAttribute("aria-labelledby"))?.focus({preventScroll:true})}catch{fail()}};
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
