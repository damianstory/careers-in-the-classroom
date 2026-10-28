"use client";

import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { rememberSelection } from "@/lib/example-selection";
import { cardFragment, LAYOUT_KEY, selectionQuery, type Layout, type View } from "@/lib/example-navigation";
import { framed } from "./frame";

/** Fired on window when a section move starts, so the rail can mark the destination at once. */
export const SECTION_EVENT = "explore:section";

const DESKTOP = "(min-width: 961px)";
const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

// The height of what stays pinned at the top: the site header, plus the location bar on phones and
// tablets. On desktop the sections sit beside the rail, so nothing else is pinned above them.
export function stickyOffset(): number {
  const header = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-h")) || 0;
  const bar = window.matchMedia(DESKTOP).matches ? null : document.querySelector<HTMLElement>("[data-rail-sticky]");
  return header + Math.ceil(bar?.getBoundingClientRect().height ?? 0);
}

export function sectionHeading(section: Element): HTMLElement | null {
  const id = section.getAttribute("aria-labelledby");
  return id ? document.getElementById(id) : null;
}

// Space kept above a heading brought up to just below the pinned bars.
const HEADING_GAP = 8;

// Where a section move scrolls to: the section's start (its divider band) just below the pinned bars,
// as long as its heading still fits in the unobscured viewport from there. On a short screen (a phone
// held sideways, say) the heading comes first: it sits just below the bars, so focus is never off-screen.
function sectionScrollTop(section: HTMLElement, heading: HTMLElement | null): number {
  const pinned = stickyOffset();
  const s = section.getBoundingClientRect();
  let top = s.top + window.scrollY - pinned;
  if (heading) {
    const h = heading.getBoundingClientRect();
    const footer = document.querySelector<HTMLElement>("[data-deck-footer]")?.getBoundingClientRect().height ?? 0;
    if (h.bottom - s.top > window.innerHeight - pinned - footer) top = h.top + window.scrollY - pinned - HEADING_GAP;
  }
  return Math.max(0, top);
}

export function exampleRoot() {
  return document.querySelector<HTMLElement>("[data-example-root]");
}

export const LAYOUT_EVENT = "explore:layout";
export function storedLayout(): Layout {
  try { return localStorage.getItem(LAYOUT_KEY) === "all" ? "all" : "parts"; }
  catch { return "parts"; }
}

export function changeLayout() {
  const root = exampleRoot();
  if (!root) return;
  const layout = root.dataset.layout === "all" ? "parts" : "all";
  root.dataset.layout = layout;
  try { localStorage.setItem(LAYOUT_KEY, layout); } catch { /* preference is optional */ }
  window.dispatchEvent(new Event(LAYOUT_EVENT));
  goToSection((root.dataset.part ?? "question") as View, { card: Number(root.dataset.card) || 1, smooth: false, history: "replace", focus: false });
}

let scrollFrame = 0;

// All part moves reveal before measuring/focusing. Parts push history; all-page moves replace it.
export function goToSection(id: View, { card = 1, smooth = true, writeHash = true, history = "auto", focus = true }: {
  card?: number; smooth?: boolean; writeHash?: boolean; history?: "auto" | "replace"; focus?: boolean;
} = {}) {
  const section = document.getElementById(id);
  const root = exampleRoot();
  if (!section || !root) return;
  // A stored second card must not leak into a one-card section after all-page scroll-spy.
  card = card > 1 && section.querySelector(`[data-card="${card}"]`) ? card : 1;
  root.dataset.part = id;
  root.dataset.card = String(card);
  window.dispatchEvent(new CustomEvent<View>(SECTION_EVENT, { detail: id }));
  const heading = sectionHeading(section);
  const behavior = root.dataset.layout !== "parts" && smooth && !window.matchMedia(REDUCED_MOTION).matches ? "smooth" : "instant";
  const target = root.dataset.layout === "parts"
    ? root.querySelector<HTMLElement>("[data-deck-body]") ?? section
    : id === "question" && heading ? heading : section;
  // A framed card fits the window: the document stays at the top.
  const scroll = (scrollBehavior: ScrollBehavior) => window.scrollTo({ top: framed(root) ? 0 : sectionScrollTop(target, heading), behavior: scrollBehavior });
  scroll(behavior);
  // SECTION_EVENT updates the phone location label through React. Measure again after
  // that commit, when wrapped labels and a closing Contents sheet have their final height.
  const path = window.location.pathname;
  cancelAnimationFrame(scrollFrame);
  scrollFrame = requestAnimationFrame(() => {
    if (root.isConnected && window.location.pathname === path && root.dataset.part === id) scroll(behavior);
  });
  if (focus) heading?.focus({ preventScroll: true });
  if (writeHash) {
    const url = new URL(window.location.href);
    url.searchParams.delete("view");
    url.hash = cardFragment({ part: id, card });
    if (url.href !== window.location.href) {
      const method = root.dataset.layout === "parts" && history === "auto" ? "pushState" : "replaceState";
      // Next copies its internal state itself. Passing __NA back would bypass its
      // patched history integration and leave the router's canonical URL stale.
      window.history[method](null, "", url);
    }
  }
}

// Stops a smooth section move still under way. Called before the page changes under it (a selection
// navigation, Back/Forward): the browser keeps the page steady while content above the reader changes
// (scroll anchoring), and it applies that shift to a running animation too, which could carry the
// animation far from where the next landing puts the reader.
export function stopScrolling() {
  cancelAnimationFrame(scrollFrame);
  window.scrollTo({ top: window.scrollY, behavior: "instant" });
}

// A plain click or Enter: new tabs, downloads and modified clicks keep the browser's own behaviour.
const plainClick = (e: React.MouseEvent<HTMLAnchorElement>) =>
  e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey && !e.defaultPrevented;

type AnchorProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "onClick"> & { children: ReactNode };

export function SectionLink({ section, href, ...rest }: AnchorProps & { section: View; href: string }) {
  return (
    <a
      {...rest}
      href={href}
      onClick={(e) => {
        if (!plainClick(e)) return;
        e.preventDefault();
        goToSection(section);
      }}
    />
  );
}

/**
 * A role, job, "All roles", "Show all" or "See all pathways" link. A real navigation with
 * `scroll={false}`: ExploreFocus lands on the section in its hash once the new selection renders.
 * If the target holds the selection already on screen, it is only a section move.
 * `row`: the toggle of a posting row, which opens or closes the posting in place.
 */
export function SelectionLink({ section, href, row, ...rest }: AnchorProps & { section: View; href: string; row?: boolean }) {
  return (
    <Link
      {...rest}
      href={href}
      scroll={false}
      onClick={(e) => {
        if (!plainClick(e)) return;
        const here = new URL(window.location.href);
        if (selectionQuery(new URL(href, here).searchParams) !== selectionQuery(here.searchParams)) {
          rememberSelection(new URL(href, here), section, !!row);
          stopScrolling();
          return;
        }
        e.preventDefault();
        goToSection(section);
      }}
    />
  );
}
