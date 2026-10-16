"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { asView, landingSection, selectionQuery, type Selection, type View } from "@/lib/example-navigation";
import { clearSelection, pendingSelection, takeSelection } from "@/lib/example-selection";
import { exampleRoot, goToSection, LAYOUT_EVENT, storedLayout, stopScrolling } from "./SectionLink";

// Load, selection navigation and history share the same landing rule as the pre-paint script.
function landHere(views: View[], selection: Selection, { top, initial = false }: { top: boolean; initial?: boolean }) {
  // Non-part anchors belong to the browser, not to the parts landing fallback.
  if (window.location.hash && !asView(window.location.hash, views)) return;
  const params = new URLSearchParams(window.location.search);
  // A bare visit has no requested destination. Layout initializes Question, but
  // the header/skip link remain the start of the keyboard and screen-reader flow.
  if (initial && !window.location.hash && !["view", "role", "job"].some((key) => params.has(key))) return;
  const target = landingSection(views, window.location.hash, params.get("view"), selection, exampleRoot()?.dataset.layout === "all" ? "all" : "parts");
  if (target) goToSection(target, { smooth: false, writeHash: false });
  else if (top) window.scrollTo({ top: 0, behavior: "instant" });
}

// A load that may not start at the top: a reload or a history traversal, or an unsupported fragment
// the browser has already jumped to.
function mayBeScrolled() {
  const nav = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
  return window.location.hash !== "" || nav?.type === "reload" || nav?.type === "back_forward";
}

// History and deferred landings belong to this example's own URL. Leaving it (Back to the library, say)
// must leave the next page's scroll to the browser and the router: every deferred step checks the path.
const onPath = (path: string) => window.location.pathname === path;

export function ExploreFocus({ views, role, job, navKey }: { views: View[]; navKey: string } & Selection) {
  const rendered = useRef<{ navKey: string; selection: Selection }>(null);
  const popped = useRef(false);
  const viewsKey = views.join(" ");

  useLayoutEffect(() => {
    const root = exampleRoot();
    if (!root) return;
    root.dataset.layout ??= storedLayout();
    const navigation = pendingSelection(window.location.pathname, navKey);
    root.dataset.part = navigation?.part ?? landingSection(viewsKey.split(" ") as View[], window.location.hash,
      new URLSearchParams(window.location.search).get("view"), { role, job }, root.dataset.layout === "all" ? "all" : "parts") ?? "question";
    window.dispatchEvent(new Event(LAYOUT_EVENT));
  }, [viewsKey, navKey, role, job]);

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
          if (onPath(path)) landHere(sections, selection, { top: mayBeScrolled(), initial: true });
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

    const row = navigation?.row;
    if (popped.current) {
      popped.current = false;
      return landHere(sections, selection, { top: true });
    }
    if (row && role && role === before.selection.role) {
      if (!job) return; // the row closed its posting: focus stays on the row
      // The open posting's row (or its title, where shown) takes focus.
      const detail = [...document.querySelectorAll<HTMLElement>("[data-job-detail]")].find((el) => el.offsetParent !== null);
      if (detail) {
        detail.focus({ preventScroll: true });
        const top = detail.getBoundingClientRect().top;
        if (top < 0 || top > window.innerHeight * 0.6) detail.scrollIntoView({ block: "start" });
        return;
      }
    }
    const target = navigation?.part ?? landingSection(sections, window.location.hash, null, selection, exampleRoot()?.dataset.layout === "all" ? "all" : "parts");
    if (target) goToSection(target, { writeHash: !!navigation, history: "replace" });
  }, [navKey, role, job, viewsKey]);

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
          if (onPath(path)) landHere(sections, current.selection, { top: true });
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
  }, [viewsKey]);

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
