"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { asView, landingCard, selectionQuery, type Selection, type View } from "@/lib/example-navigation";
import { clearSelection, pendingSelection, takeSelection } from "@/lib/example-selection";
import { exampleRoot, goToSection, LAYOUT_EVENT, stickyOffset, storedLayout, stopScrolling } from "./SectionLink";
import { framed, ROLE_TAB_EVENT } from "./frame";

// Load, selection navigation and history share the same landing rule as the pre-paint script.
// Returns the card it landed on, if any.
function landHere(views: View[], selection: Selection, hasStory: boolean, { top, initial = false }: { top: boolean; initial?: boolean }): View | undefined {
  // Non-part anchors belong to the browser, not to the parts landing fallback.
  if (window.location.hash && !asView(window.location.hash, views)) return;
  const params = new URLSearchParams(window.location.search);
  // A bare visit has no requested destination. Layout initializes Question, but
  // the header/skip link remain the start of the keyboard and screen-reader flow.
  if (initial && !window.location.hash && !["view", "role", "job"].some((key) => params.has(key))) return;
  const target = landingCard(views, window.location.hash, params.get("view"), selection, exampleRoot()?.dataset.layout === "all" ? "all" : "parts", hasStory);
  if (target) goToSection(target.part, { card: target.card, smooth: false, writeHash: false });
  else if (top) window.scrollTo({ top: 0, behavior: "instant" });
  return target?.part;
}

// After a landing on Who (and only Who: the destination is resolved first), a selected job's posting
// heading takes focus. A return from a posting to its role (its Back link, or browser Back/Forward)
// opens the role's Job searches tab and focuses that posting's row link. Focus waits a frame for the
// tab to render.
function focusJob(part: View | undefined, selection: Selection, returnFrom?: string) {
  if (part !== "who" || !selection.role || (!selection.job && !returnFrom)) return;
  if (!selection.job) window.dispatchEvent(new CustomEvent(ROLE_TAB_EVENT, { detail: { role: selection.role, tab: "jobs" } }));
  requestAnimationFrame(() => {
    const target = selection.job
      ? [...document.querySelectorAll<HTMLElement>("[data-job-view] [data-job-detail]")].find((el) => el.getClientRects().length > 0)
      : document.querySelector<HTMLElement>(`[data-role-detail="${CSS.escape(selection.role!)}"] [data-job-row="${CSS.escape(returnFrom!)}"]`);
    if (target && target.getClientRects().length) {
      target.focus({ preventScroll: true });
      if (!framed(exampleRoot())) {
        // Section navigation has settled by this frame. Reveal the final job focus target,
        // rather than leaving it beneath the phone's sticky controls or off the screen.
        stopScrolling();
        const box = target.getBoundingClientRect();
        const top = stickyOffset() + 8;
        const footer = document.querySelector<HTMLElement>("[data-deck-footer]")?.getBoundingClientRect();
        const bottom = Math.min(window.innerHeight, footer?.top ?? window.innerHeight) - 8;
        const delta = box.top < top || box.height > bottom - top ? box.top - top
          : box.bottom > bottom ? box.bottom - bottom : 0;
        if (delta) window.scrollBy({ top: delta, behavior: "instant" });
      }
    }
  });
}

// The posting a selection change returns from: the same role, with the job dropped.
const returnedFrom = (selection: Selection, before: Selection) =>
  selection.role && !selection.job && before.role === selection.role && before.job ? before.job : undefined;

// A load that may not start at the top: a reload or a history traversal, or an unsupported fragment
// the browser has already jumped to.
function mayBeScrolled() {
  const nav = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
  return window.location.hash !== "" || nav?.type === "reload" || nav?.type === "back_forward";
}

// History and deferred landings belong to this example's own URL. Leaving it (Back to the library, say)
// must leave the next page's scroll to the browser and the router: every deferred step checks the path.
const onPath = (path: string) => window.location.pathname === path;

export function ExploreFocus({ views, role, job, navKey, hasStory }: { views: View[]; navKey: string; hasStory: boolean } & Selection) {
  const rendered = useRef<{ navKey: string; selection: Selection }>(null);
  const popped = useRef(false);
  const viewsKey = views.join(" ");

  useLayoutEffect(() => {
    const root = exampleRoot();
    if (!root) return;
    root.dataset.layout ??= storedLayout();
    const navigation = pendingSelection(window.location.pathname, navKey);
    const target = landingCard(viewsKey.split(" ") as View[], window.location.hash,
      new URLSearchParams(window.location.search).get("view"), { role, job }, root.dataset.layout === "all" ? "all" : "parts", hasStory);
    root.dataset.part = navigation?.part ?? target?.part ?? "question";
    root.dataset.card = String(navigation ? 1 : target?.card ?? 1);
    window.dispatchEvent(new Event(LAYOUT_EVENT));
  }, [viewsKey, navKey, role, job, hasStory]);

  // The landing rule decides where this page starts, so the browser must not restore an old scroll
  // position on reload or Back/Forward here. Other pages get their own setting back on leave.
  useEffect(() => {
    const previous = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    return () => {
      window.history.scrollRestoration = previous;
    };
  }, []);

  useEffect(() => {
    const path = window.location.pathname;
    const sections = viewsKey.split(" ") as View[];
    const selection = { role, job };
    const navigation = takeSelection(path, navKey);
    const before = rendered.current;
    rendered.current = { navKey, selection };
    if (!before && navigation) {
      goToSection(navigation.part, { smooth: false, history: "replace" });
      focusJob(navigation.part, selection);
      return;
    }
    if (!before) {
      // First load or reload. Wait for the load event: the browser's own jump to a #fragment runs until
      // then, and it clears focus when its target (a section) is not focusable.
      let frame = 0;
      let landed = false;
      const land = () => {
        frame = requestAnimationFrame(() => {
          landed = true;
          if (onPath(path)) focusJob(landHere(sections, selection, hasStory, { top: mayBeScrolled(), initial: true }), selection);
        });
      };
      if (document.readyState === "complete") land();
      else window.addEventListener("load", land, { once: true });
      return () => {
        window.removeEventListener("load", land);
        cancelAnimationFrame(frame);
        // Cancelled before it ran (a remount, or a navigation before load): the next run lands instead.
        if (!landed) rendered.current = null;
      };
    }
    if (before.navKey === navKey) return;

    if (popped.current) {
      popped.current = false;
      focusJob(landHere(sections, selection, hasStory, { top: true }), selection, returnedFrom(selection, before.selection));
      return;
    }
    const target = navigation ? { part: navigation.part, card: 1 } : landingCard(sections, window.location.hash, null, selection, exampleRoot()?.dataset.layout === "all" ? "all" : "parts", hasStory);
    if (target) goToSection(target.part, { card: target.card, writeHash: !!navigation, history: "replace" });
    focusJob(target?.part, selection, navigation?.row ? returnedFrom(selection, before.selection) : undefined);
  }, [navKey, role, job, viewsKey, hasStory]);

  // Back/Forward within this example. When the restored URL holds another query, the effect above
  // lands once it has rendered. When it holds the same one (only the fragment differs), nothing
  // re-renders: land now. A traversal to another page is not ours: nothing is stopped or scheduled.
  // Capture phase: this runs before the router's own popstate listener, which may render the restored
  // page synchronously, so the effect above already knows it is a history traversal.
  useEffect(() => {
    const path = window.location.pathname;
    const sections = viewsKey.split(" ") as View[];
    let frame = 0;
    const onPop = () => {
      if (!onPath(path) || (window.location.hash && !asView(window.location.hash, sections))) return;
      clearSelection();
      cancelAnimationFrame(frame);
      popped.current = false;
      stopScrolling();
      const current = rendered.current;
      const same = !!current && selectionQuery(new URLSearchParams(window.location.search)) === current.navKey;
      popped.current = !same;
      if (current && same) {
        frame = requestAnimationFrame(() => {
          if (onPath(path)) focusJob(landHere(sections, current.selection, hasStory, { top: true }), current.selection);
        });
      }
    };
    window.addEventListener("popstate", onPop, true);
    window.addEventListener("hashchange", onPop);
    return () => {
      window.removeEventListener("popstate", onPop, true);
      window.removeEventListener("hashchange", onPop);
      cancelAnimationFrame(frame);
    };
  }, [viewsKey, hasStory]);

  useEffect(() => {
    const main = document.getElementById("main");
    const skip = document.querySelector<HTMLAnchorElement>('a.skip-link[href="#main"]');
    if (!main || !skip) return;
    const previousTabIndex = main.getAttribute("tabindex");
    const onSkip = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      // Skip into main without losing the teacher's part, permalink or reading position.
      main.tabIndex = -1;
      main.focus({ preventScroll: true });
    };
    skip.addEventListener("click", onSkip);
    return () => {
      skip.removeEventListener("click", onSkip);
      if (previousTabIndex === null) main.removeAttribute("tabindex");
      else main.setAttribute("tabindex", previousTabIndex);
    };
  }, []);

  return null;
}
