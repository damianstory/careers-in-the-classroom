"use client";

import { useEffect, useState } from "react";
import { adjacentCard, PART_LABELS, SHOW_PARTS, type ExampleCard, type View } from "@/lib/example-navigation";
import { changeLayout, exampleRoot, goToSection, LAYOUT_EVENT, SECTION_EVENT, stickyOffset } from "./SectionLink";
import { FIT_EVENT, FRAME_QUERY, offStage, windowClips } from "./frame";
import styles from "./explore.module.css";

// Frame fit, owned here and nowhere else: the state fits when nothing in the stage reaches past it
// and no paged window clips. Otherwise data-fit="flow" lets the card grow and the page scroll, so
// nothing is ever cut off. Each check first measures the constrained frame again.
function useFrameFit() {
  useEffect(() => {
    const root = exampleRoot();
    if (!root) return;
    const media = window.matchMedia(FRAME_QUERY);
    let frame = 0;
    const check = () => {
      const inFrame = media.matches && root.dataset.layout === "parts";
      if (inFrame) root.dataset.frame = ""; else delete root.dataset.frame;
      delete root.dataset.fit;
      if (!inFrame) return;
      const stage = root.querySelector<HTMLElement>("[data-deck-body]");
      if (!stage) return;
      const box = stage.getBoundingClientRect();
      let overflow = stage.scrollHeight > stage.clientHeight + 1;
      for (const el of stage.querySelectorAll<HTMLElement>("*")) {
        if (overflow) break;
        // A section heading sits in the top row in frame mode, by design.
        if (el.closest("[data-paged-window], [data-part-header]") || offStage(el) || !el.getClientRects().length) continue;
        // Off the Question card, the page h1 is visually hidden (a 1px clipped box).
        if (root.dataset.part !== "question" && el.closest("[data-example-title]")) continue;
        const r = el.getBoundingClientRect();
        if (r.height && (r.top < box.top - 1 || r.bottom > box.bottom + 1)) overflow = true;
      }
      if (!overflow) for (const win of stage.querySelectorAll<HTMLElement>("[data-paged-window]")) if (windowClips(win)) { overflow = true; break; }
      if (overflow) root.dataset.fit = "flow";
      else if (window.scrollY) window.scrollTo({ top: 0, behavior: "instant" });
    };
    const later = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(check); };
    const stage = root.querySelector<HTMLElement>("[data-deck-body]");
    const mutations = new MutationObserver(later);
    if (stage) mutations.observe(stage, { childList: true, subtree: true, attributes: true, attributeFilter: ["hidden", "open"] });
    const resize = new ResizeObserver(later);
    if (stage) resize.observe(stage);
    later();
    document.fonts?.ready.then(later);
    media.addEventListener("change", later);
    root.addEventListener(FIT_EVENT, later);
    root.addEventListener("toggle", later, true);
    window.addEventListener(SECTION_EVENT, later);
    window.addEventListener(LAYOUT_EVENT, later);
    window.addEventListener("resize", later);
    return () => {
      cancelAnimationFrame(frame);
      mutations.disconnect();
      resize.disconnect();
      media.removeEventListener("change", later);
      root.removeEventListener(FIT_EVENT, later);
      root.removeEventListener("toggle", later, true);
      window.removeEventListener(SECTION_EVENT, later);
      window.removeEventListener(LAYOUT_EVENT, later);
      window.removeEventListener("resize", later);
    };
  }, []);
}

export function DeckControls({ cards, org }: { cards: ExampleCard[]; org: string }) {
  const [index, setIndex] = useState(0);
  const [all, setAll] = useState(false);
  useFrameFit();
  useEffect(() => {
    const root = exampleRoot();
    if (!root) return;
    const sync = () => {
      const position = Math.max(0, cards.findIndex((item) => item.part === root.dataset.part && item.card === Number(root.dataset.card)));
      setIndex(position);
      setAll(root.dataset.layout === "all");
    };
    const measure = () => {
      const footer = root.querySelector<HTMLElement>("[data-deck-footer]");
      root.style.setProperty("--example-pinned-top", `${stickyOffset()}px`);
      root.style.setProperty("--deck-footer-height", `${Math.ceil(footer?.getBoundingClientRect().height ?? 0)}px`);
      // Outside frame mode the document scrolls: reserve the footer for native focus/anchor scrolling.
      document.documentElement.style.setProperty("scroll-padding-bottom", `${Math.ceil(footer?.getBoundingClientRect().height ?? 0) + 12}px`);
    };
    const move = (event: KeyboardEvent) => {
      if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey || root.dataset.layout !== "parts") return;
      if (event.target instanceof Element && event.target.closest("a, button, input, select, textarea, [contenteditable], dialog, [role=tablist]")) return;
      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
      const current = cards.find((item) => item.part === root.dataset.part && item.card === Number(root.dataset.card));
      const next = current && adjacentCard(cards, current, event.key === "ArrowLeft" ? -1 : 1);
      if (next) { event.preventDefault(); goToSection(next.part, { card: next.card }); }
    };
    const previousPadding = document.documentElement.style.getPropertyValue("scroll-padding-bottom");
    const observer = new ResizeObserver(measure);
    for (const element of root.querySelectorAll("[data-deck-header], [data-rail-sticky], [data-deck-footer]")) observer.observe(element);
    const frame = requestAnimationFrame(() => { sync(); measure(); });
    window.addEventListener(SECTION_EVENT, sync);
    window.addEventListener(LAYOUT_EVENT, sync);
    window.addEventListener("resize", measure);
    window.addEventListener("keydown", move);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      document.documentElement.style.setProperty("scroll-padding-bottom", previousPadding);
      window.removeEventListener(SECTION_EVENT, sync);
      window.removeEventListener(LAYOUT_EVENT, sync);
      window.removeEventListener("resize", measure);
      window.removeEventListener("keydown", move);
    };
  }, [cards]);

  const current = cards[index];
  const previous = cards[index - 1];
  const next = cards[index + 1];
  const classroom = cards.filter((item) => SHOW_PARTS.includes(item.part));
  const classroomIndex = classroom.findIndex((item) => item.part === current.part && item.card === current.card);
  const sectionTitle = (part: View) => part === "about" ? `About ${org}` : PART_LABELS[part];
  const nextTitle = next ? next.part === current.part ? next.title : sectionTitle(next.part) : "End of example";
  const kicker = next && (next.part === current.part ? "Next card" : SHOW_PARTS.includes(next.part) ? "Next section" : "Next");
  return <footer className={styles.deckFooter} data-deck-footer="">
    <button type="button" data-view-toggle="" className={styles.viewToggle} suppressHydrationWarning
      aria-label="View as one page" aria-pressed={all} onClick={changeLayout}>{all ? "View as cards" : "View as one page"}</button>
    <p className="sr-only" data-deck-counter="" aria-live="polite" aria-atomic="true">
      {classroomIndex >= 0 ? `Card ${classroomIndex + 1} of ${classroom.length} · ${sectionTitle(current.part)}` : sectionTitle(current.part)}
    </p>
    <div className={styles.deckButtons}>
      <button type="button" data-deck-back="" className={styles.deckBack} disabled={!previous}
        aria-label={`Back: ${previous?.title ?? "Start of example"}`}
        onClick={() => previous && goToSection(previous.part, { card: previous.card })}>
        <svg className="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m15 5-7 7 7 7" /></svg><span>Back</span>
      </button>
      <button type="button" data-deck-next="" className={styles.deckNext} disabled={!next}
        aria-label={`Next: ${nextTitle}`}
        onClick={() => next && goToSection(next.part, { card: next.card })}>
        <span>{next && <small>{kicker}</small>}<strong>{nextTitle}</strong></span>
        <svg className="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 7 7-7 7" /></svg>
      </button>
    </div>
  </footer>;
}
