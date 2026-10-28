"use client";

import { useEffect, useState } from "react";
import { Modal } from "@/components/dialogs/Modal";
import { SHOW_PARTS, type View } from "@/lib/example-navigation";
import { changeLayout, exampleRoot, goToSection, LAYOUT_EVENT, SECTION_EVENT, SectionLink, stickyOffset } from "./SectionLink";
import styles from "./explore.module.css";

export interface RailItem { section: View; href: string; label: string }

export function RailNav({ items, initial, hasStory, contextLabel }: { items: RailItem[]; initial: View; hasStory: boolean; contextLabel?: string }) {
  const [active, setActive] = useState(initial);
  const [card, setCard] = useState(1);
  const [all, setAll] = useState(false);
  const [open, setOpen] = useState(false);
  const ids = items.map((i) => i.section).join(" ");

  useEffect(() => {
    let heldUntil = 0;
    let frame = 0;
    let timer = 0;
    const root = exampleRoot();
    const sections = ids.split(" ").map((id) => document.getElementById(id)!);
    const sync = () => {
      setAll(root?.dataset.layout === "all");
      setCard(Number(root?.dataset.card) || 1);
      setActive((root?.dataset.part ?? "question") as View);
    };
    const visiblePart = () => {
      const line = stickyOffset() + (window.innerHeight - stickyOffset()) * .3;
      let current = sections[0].id as View;
      for (const section of sections) if (section.getBoundingClientRect().top <= line) current = section.id as View;
      return current;
    };
    const spy = () => {
      if (root?.dataset.layout !== "all" || Date.now() < heldUntil) return;
      const current = visiblePart();
      root.dataset.part = current;
      const line = stickyOffset() + (window.innerHeight - stickyOffset()) * .3;
      const shownCards = document.getElementById(current)?.querySelectorAll<HTMLElement>("[data-card]") ?? [];
      let position = 1;
      for (const card of shownCards) if (card.getBoundingClientRect().top <= line) position = Number(card.dataset.card);
      root.dataset.card = String(position);
      setActive(current);
      setCard(position);
    };
    const onScroll = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(spy); };
    const move = () => {
      heldUntil = Date.now() + 1500;
      window.clearTimeout(timer);
      timer = window.setTimeout(release, 1500);
      sync();
    };
    const release = () => { heldUntil = 0; onScroll(); };
    const onScrollEnd = () => {
      // A cancelled earlier scroll can finish after a new move has started.
      if (Date.now() < heldUntil && root?.dataset.part !== visiblePart()) return;
      release();
    };
    const onKey = (event: KeyboardEvent) => {
      // Space/arrow keys on controls are activation, not an intent to scroll the page.
      if (event.target instanceof Element && event.target.closest("button, a, input, select, textarea, [contenteditable]")) return;
      if (["PageDown", "PageUp", "Home", "End", "ArrowDown", "ArrowUp", " "].includes(event.key)) release();
    };
    frame = requestAnimationFrame(sync);
    window.addEventListener(SECTION_EVENT, move);
    window.addEventListener(LAYOUT_EVENT, sync);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("scrollend", onScrollEnd);
    window.addEventListener("wheel", release, { passive: true });
    // A press on the view toggle must keep a section move's destination while it scrolls.
    window.addEventListener("touchmove", release, { passive: true });
    window.addEventListener("keydown", onKey);
    // The bootstrap owns fragment links and fallback controls until this nav is interactive.
    if (root) {
      root.dataset.navigationReady = "";
      root.dispatchEvent(new Event("explore:ready"));
    }
    return () => {
      if (root) delete root.dataset.navigationReady;
      cancelAnimationFrame(frame);
      window.clearTimeout(timer);
      window.removeEventListener(SECTION_EVENT, move);
      window.removeEventListener(LAYOUT_EVENT, sync);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("scrollend", onScrollEnd);
      window.removeEventListener("wheel", release);
      window.removeEventListener("touchmove", release);
      window.removeEventListener("keydown", onKey);
    };
  }, [ids]);

  const show = items.filter((i) => SHOW_PARTS.includes(i.section));
  const toggle = <button type="button" className={styles.viewToggle} data-view-toggle="" suppressHydrationWarning aria-pressed={all} onClick={changeLayout}>View as one page</button>;
  const choose = (event: React.MouseEvent<HTMLAnchorElement>, part: View) => {
    if (event.button || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    // Close synchronously: native focus restoration must finish before focusing the
    // selected part. A deferred animation frame left focus on Contents after dismissal.
    event.currentTarget.closest("dialog")?.close();
    setOpen(false);
    goToSection(part);
  };


  return <>
    <nav aria-label="Explore this example" className={styles.nav}>
      <RailGroups items={items} active={active} card={card} hasStory={hasStory} onChoose={choose} />
    </nav>
    <div className={styles.locationBar} data-rail-sticky="">
      {contextLabel && <p className={styles.locationContext}>Your lesson <strong>{contextLabel}</strong></p>}
      {items.map((item) => <div key={item.section} data-location-part={item.section}>
        {SHOW_PARTS.includes(item.section) && <p>{`${show.findIndex((i) => i.section === item.section) + 1} of ${show.length}`}</p>}
        <strong>{item.label}</strong>
      </div>)}
      <button type="button" className="btn btn-light" data-contents="" onClick={() => setOpen(true)} aria-haspopup="dialog" aria-expanded={open}>Contents</button>
    </div>
    <Modal containFocus open={open} onClose={() => setOpen(false)} titleId="contents-title" title="Contents">
      <nav aria-label="Example contents" className={styles.sheetNav}><RailGroups items={items} active={active} card={card} hasStory={hasStory} onChoose={choose} sheet />{toggle}</nav>
    </Modal>
    <span hidden data-navigation-end="" />
  </>;
}

function RailGroups({ items, active, card, hasStory, sheet = false, onChoose }: {
  items: RailItem[]; active: View; card: number; hasStory: boolean; sheet?: boolean;
  onChoose: (event: React.MouseEvent<HTMLAnchorElement>, part: View) => void;
}) {
  const teachingItems = items.filter((i) => SHOW_PARTS.includes(i.section));
  const activeIndex = teachingItems.findIndex((i) => i.section === active);
  return [true, false].map((teaching) => (
    <div key={String(teaching)} className={styles.navGroup} data-teaching={teaching}>
      {items.filter((i) => SHOW_PARTS.includes(i.section) === teaching).map((item, index) => {
        const story = hasStory && item.section === "how-it-works";
        const children = <>
          {teaching && <span className={styles.navNum} aria-hidden="true">{index < activeIndex && !sheet ? "✓" : index + 1}</span>}
          <span className={styles.navLabel}>{item.label}{story && <span className={styles.cardPosition} aria-hidden="true">{active === item.section ? `${card} of 2` : "2 parts"}</span>}</span>
        </>;
        const props = { className: styles.navItem, suppressHydrationWarning: true, "data-part-link": item.section, "data-done": teaching && index < activeIndex ? "" : undefined, "aria-label": item.label, "aria-current": active === item.section ? "location" as const : undefined };
        return sheet ? <a key={item.section} {...props} href={item.href} onClick={(event) => onChoose(event, item.section)}>{children}</a> : <SectionLink key={item.section} {...props} id={`nav-${item.section}`} section={item.section} href={item.href}>{children}</SectionLink>;
      })}
    </div>
  ));
}
