"use client";

import { useEffect, useRef } from "react";
import { landingSection, selectionQuery, type Selection, type View } from "@/lib/example-navigation";
import { goToSection, stopScrolling, takeRowToggle } from "./SectionLink";

// Where the one-page example lands (plan: docs/build/PLAN-b2-one-page.md). One rule, the first match wins:
//   1. a valid #section, 2. a valid legacy ?view=, 3. Roles when a role is selected, 4. the top.
// Steps 1–3 scroll to the section and focus its heading; step 4 forces no focus.
// - First load and reload: the rule, once the page has loaded. The browser does not restore an old
//   scroll position here, and an unsupported #fragment (say #sources) is taken back to the top.
// - Back/Forward: the rule again, once the restored URL has rendered.
// - A selection link (role, job, All roles, Show all, See all pathways): the section in its hash. One
//   exception, kept from the old view model: a posting row's own toggle keeps the reader at the row
//   (opening focuses the open row, closing leaves focus on it).
// Every navigation to another URL counts, even when the validated role and job stay the same (an
// invalid job being dropped, for example): `navKey` is the page's normalized query, and it is
// compared with the URL's the same way (selectionQuery) on Back/Forward.
// No scroll hijacking: nothing here runs on scroll.

function landHere(views: View[], selection: Selection, { top }: { top: boolean }) {
  const params = new URLSearchParams(window.location.search);
  const target = landingSection(views, window.location.hash, params.get("view"), selection);
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
    const before = rendered.current;
    rendered.current = { navKey, selection };
    if (!before) {
      // First load or reload. Wait for the load event: the browser's own jump to a #fragment runs until
      // then, and it clears focus when its target (a section) is not focusable.
      let frame = 0;
      let landed = false;
      const land = () => {
        frame = requestAnimationFrame(() => {
          landed = true;
          if (onPath(path)) landHere(sections, selection, { top: mayBeScrolled() });
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

    const row = takeRowToggle();
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
    const target = landingSection(sections, window.location.hash, null, selection);
    if (target) goToSection(target, { writeHash: false });
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
      takeRowToggle();
      cancelAnimationFrame(frame);
      popped.current = false;
      if (!onPath(path)) return;
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
    return () => {
      window.removeEventListener("popstate", onPop, true);
      cancelAnimationFrame(frame);
    };
  }, [viewsKey]);

  return null;
}
