"use client";

import { useEffect, useRef, useState } from "react";
import type { View } from "@/lib/example-navigation";
import { SECTION_EVENT, SectionLink, stickyOffset } from "./SectionLink";
import styles from "./explore.module.css";

export interface RailItem {
  section: View;
  href: string;
  label: string;
  short: string;
}

const two = (n: number) => String(n).padStart(2, "0");
// The active line sits a third of the way down the space below whatever stays pinned at the top,
// so a section counts as current once it fills most of the view, not only when it reaches the top.
const LINE_SHARE = 0.3;
const LINE_GAP = 8;

// The rail's section links (the tab bar on phones). A scroll-spy marks the section under the active
// line with aria-current="location". A section move marks its destination at once and holds it
// until the scroll settles, so a smooth scroll does not flicker through the sections it passes.
export function RailNav({ items, initial }: { items: RailItem[]; initial: View }) {
  const [active, setActive] = useState<View>(initial);
  const held = useRef(false);
  // The hrefs change with the selection; the sections do not, so the spy survives selection changes.
  const sectionIds = items.map((i) => i.section).join(" ");

  useEffect(() => {
    const sections = sectionIds.split(" ").map((id) => document.getElementById(id)).filter((s): s is HTMLElement => !!s);
    if (!sections.length) return;

    const line = () => {
      const top = stickyOffset();
      return top + Math.max(LINE_GAP, (window.innerHeight - top) * LINE_SHARE);
    };
    const update = () => {
      if (held.current) return;
      const y = line();
      let current = sections[0].id as View;
      for (const s of sections) if (s.getBoundingClientRect().top <= y) current = s.id as View;
      setActive(current);
    };

    // A one-pixel band at the active line: the observer fires whenever a section edge crosses it.
    let observer: IntersectionObserver | undefined;
    const observe = () => {
      observer?.disconnect();
      const y = Math.round(line());
      observer = new IntersectionObserver(update, { rootMargin: `-${y}px 0px -${Math.max(0, window.innerHeight - y - 1)}px 0px` });
      sections.forEach((s) => observer!.observe(s));
    };
    observe();

    // Held until the move settles (scrollend), the reader takes over (wheel, touch, pointer, key), or a
    // timeout. Whichever comes first releases the hold and marks the section actually under the line,
    // so an interrupted move never leaves its destination marked.
    const CANCEL = ["wheel", "touchstart", "pointerdown", "keydown"] as const;
    let release: (() => void) | undefined;
    const onSection = (e: Event) => {
      release?.();
      held.current = true;
      setActive((e as CustomEvent<View>).detail);
      const done = () => {
        release?.();
        held.current = false;
        update();
      };
      const timer = window.setTimeout(done, 1500);
      window.addEventListener("scrollend", done, { once: true });
      CANCEL.forEach((type) => window.addEventListener(type, done, { once: true, passive: true }));
      release = () => {
        window.clearTimeout(timer);
        window.removeEventListener("scrollend", done);
        CANCEL.forEach((type) => window.removeEventListener(type, done));
        release = undefined;
      };
    };
    window.addEventListener(SECTION_EVENT, onSection);
    window.addEventListener("resize", observe, { passive: true });
    return () => {
      release?.();
      observer?.disconnect();
      window.removeEventListener(SECTION_EVENT, onSection);
      window.removeEventListener("resize", observe);
    };
  }, [sectionIds]);

  return (
    <nav aria-label="Explore this example" className={styles.nav}>
      {items.map((n, i) => (
        <SectionLink
          key={n.section}
          id={`nav-${n.section}`}
          section={n.section}
          href={n.href}
          className={styles.navItem}
          aria-label={n.label}
          aria-current={active === n.section ? "location" : undefined}
        >
          <span className={styles.navNum} aria-hidden="true">
            {two(i + 1)}
          </span>
          <span className={styles.long}>{n.label}</span>
          <span className={styles.short}>{n.short}</span>
        </SectionLink>
      ))}
    </nav>
  );
}
