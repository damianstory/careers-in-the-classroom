"use client";

import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { selectionQuery, type View } from "@/lib/example-navigation";

// Moving around the one-page example (plan: docs/build/PLAN-b2-one-page.md).
// - Section links only move within the page: a real `#section` href for no-JS and copied links,
//   and with JS one shared handler that scrolls, focuses the heading and replaces the fragment.
//   They add no history entries.
// - Selection links change role or job: real navigations (history entries) that carry the hash of
//   the section they act in. ExploreFocus then lands on that section.

/** Fired on window when a section move starts, so the rail can mark the destination at once. */
export const SECTION_EVENT = "explore:section";

const DESKTOP = "(min-width: 961px)";
const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

// The height of what stays pinned at the top: the site header, plus the tab bar on phones and tablets.
export function stickyOffset(): number {
  const header = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-h")) || 0;
  if (window.matchMedia(DESKTOP).matches) return header;
  const bar = document.querySelector<HTMLElement>("[data-rail-sticky]");
  return header + (bar?.offsetHeight ?? 0);
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
    if (h.bottom - s.top > window.innerHeight - pinned) top = h.top + window.scrollY - pinned - HEADING_GAP;
  }
  return Math.max(0, top);
}

/**
 * Scrolls to a section, focuses its heading and, unless told otherwise, replaces the URL's fragment
 * (dropping a stale legacy `view`). Smooth for a pointer or key press, instant with reduced motion.
 * Section links, the first landing and Back/Forward all move through here.
 */
export function goToSection(id: View, { smooth = true, writeHash = true }: { smooth?: boolean; writeHash?: boolean } = {}) {
  const section = document.getElementById(id);
  if (!section) return;
  window.dispatchEvent(new CustomEvent<View>(SECTION_EVENT, { detail: id }));
  const heading = sectionHeading(section);
  const behavior = smooth && !window.matchMedia(REDUCED_MOTION).matches ? "smooth" : "instant";
  window.scrollTo({ top: sectionScrollTop(section, heading), behavior });
  heading?.focus({ preventScroll: true });
  if (writeHash) {
    const url = new URL(window.location.href);
    url.searchParams.delete("view");
    url.hash = id;
    if (url.href !== window.location.href) window.history.replaceState(null, "", url);
  }
}

// Stops a smooth section move still under way. Called before the page changes under it (a selection
// navigation, Back/Forward): the browser keeps the page steady while content above the reader changes
// (scroll anchoring), and it applies that shift to a running animation too, which could carry the
// animation far from where the next landing puts the reader.
export function stopScrolling() {
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

// Set by a posting row's own toggle, read once by ExploreFocus when that navigation lands: only a row
// keeps focus on itself. Every other selection link lands on the section in its hash.
let rowToggle = false;
export function takeRowToggle() {
  const was = rowToggle;
  rowToggle = false;
  return was;
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
          rowToggle = !!row;
          stopScrolling();
          return;
        }
        e.preventDefault();
        goToSection(section);
      }}
    />
  );
}
