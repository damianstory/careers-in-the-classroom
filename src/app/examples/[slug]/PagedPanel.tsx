"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { FIT_EVENT } from "./frame";
import styles from "./explore.module.css";

// A two-column window can end with one column. Its last logical page then has a smaller
// physical offset because the browser clamps scrollLeft to the remaining content width.
function pageOffset(el: HTMLElement, page: number) {
  const step = el.clientWidth + (parseFloat(getComputedStyle(el).columnGap) || 0);
  return Math.min(page * step, Math.max(0, el.scrollWidth - el.clientWidth));
}

// Long content as pages instead of a scroll. In frame mode the window is a fixed-height multi-column
// box (explore.module.css); overflow becomes extra columns to the right, and a page is one window
// width. Every word stays in the DOM: Tab into an off-page link turns to its page. Outside frame mode
// the window is plain flow and the pager stays hidden.
// `inline`: a panel inside a composition (a diagram key, a list of steps) that takes only the height it
// needs, up to the space available, and shows its pager only when it has more than one page.
export function PagedPanel({ children, label, className, inline = false }: { children: React.ReactNode; label: string; className?: string; inline?: boolean }) {
  const win = useRef<HTMLDivElement>(null);
  const [pages, setPages] = useState(1);
  const [page, setPage] = useState(0);
  const pageRef = useRef(0);

  const step = () => {
    const el = win.current!;
    return el.clientWidth + (parseFloat(getComputedStyle(el).columnGap) || 0);
  };
  const paged = () => {
    const el = win.current;
    return !!el && el.getClientRects().length > 0 && getComputedStyle(el).columnCount !== "auto";
  };

  const show = useCallback((next: number) => {
    const el = win.current;
    if (!el) return;
    pageRef.current = next;
    setPage(next);
    el.scrollTo({ left: paged() ? pageOffset(el, next) : 0, behavior: "instant" });
  }, []);

  const measure = useCallback(() => {
    const el = win.current;
    if (!el) return;
    // An inline panel measures at full height first; if everything fits on one page it then takes
    // only the height it needs, so its composition stays vertically centred.
    const panel = el.parentElement!;
    if (inline) delete panel.dataset.single;
    if (!paged()) {
      setPages(1);
      if (pageRef.current) show(0);
      el.scrollLeft = 0;
      return;
    }
    const count = Math.max(1, Math.round((el.scrollWidth + (parseFloat(getComputedStyle(el).columnGap) || 0)) / step()));
    if (inline && count === 1) panel.dataset.single = "";
    setPages(count);
    const active = document.activeElement;
    const focusedPage = active instanceof Element && el.contains(active) && !active.closest("[popover]")
      ? Math.floor((active.getBoundingClientRect().left - el.getBoundingClientRect().left + el.scrollLeft + 1) / step())
      : pageRef.current;
    show(Math.max(0, Math.min(focusedPage, count - 1)));
  }, [show, inline]);

  useEffect(() => {
    const el = win.current;
    if (!el) return;
    const root = el.closest<HTMLElement>("[data-example-root]");
    let frame = 0;
    const later = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => { measure(); root?.dispatchEvent(new Event(FIT_EVENT)); });
    };
    const resize = new ResizeObserver(later);
    resize.observe(el);
    const mutations = new MutationObserver(later);
    mutations.observe(el, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ["hidden", "open", "class"] });
    // A focused element on another page (Tab, or a heading focused by navigation) turns to that page.
    // Focus from a pointer press is on something already in view: turning now would move it from
    // under the pointer before the click completes.
    let pressed = false;
    const onPress = () => { pressed = true; window.setTimeout(() => { pressed = false; }, 0); };
    const onFocus = (event: FocusEvent) => {
      if (pressed || !paged() || !(event.target instanceof Element) || event.target.closest("[popover]")) return;
      const left = event.target.getBoundingClientRect().left - el.getBoundingClientRect().left + el.scrollLeft;
      show(Math.max(0, Math.floor((left + 1) / step())));
    };
    // The browser may scroll the window itself to reveal an element (scrollIntoView, find in page):
    // once it settles, snap to the start of the page that holds the revealed position. Waiting lets
    // an action aimed at the revealed element (a click) land first.
    let settle = 0;
    const onScroll = () => {
      window.clearTimeout(settle);
      settle = window.setTimeout(() => {
        if (!paged()) return;
        if (Math.abs(el.scrollLeft - pageOffset(el, pageRef.current)) <= 1) return;
        const count = Math.max(1, Math.round((el.scrollWidth + (parseFloat(getComputedStyle(el).columnGap) || 0)) / step()));
        let nearest = 0;
        for (let i = 1; i < count; i++) {
          if (Math.abs(el.scrollLeft - pageOffset(el, i)) < Math.abs(el.scrollLeft - pageOffset(el, nearest))) nearest = i;
        }
        show(nearest);
      }, 250);
    };
    const onToggle = () => later();
    el.addEventListener("pointerdown", onPress, true);
    el.addEventListener("focusin", onFocus);
    el.addEventListener("scroll", onScroll);
    el.addEventListener("toggle", onToggle, true);
    later();
    document.fonts?.ready.then(later);
    window.addEventListener("explore:section", later);
    window.addEventListener("explore:layout", later);
    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(settle);
      resize.disconnect();
      mutations.disconnect();
      el.removeEventListener("pointerdown", onPress, true);
      el.removeEventListener("focusin", onFocus);
      el.removeEventListener("scroll", onScroll);
      el.removeEventListener("toggle", onToggle, true);
      window.removeEventListener("explore:section", later);
      window.removeEventListener("explore:layout", later);
    };
  }, [measure, show]);

  return (
    <div className={`${styles.paged} ${inline ? styles.pagedInline : ""} ${className ?? ""}`} data-paged="">
      <div ref={win} className={styles.pagedWindow} data-paged-window="" role="group" aria-label={label}>
        {children}
      </div>
      <div className={styles.pager} data-pager="" data-pages={pages} hidden={pages < 2}>
        <button type="button" className={styles.pagerButton} aria-label="Previous page" disabled={page === 0} onClick={() => show(page - 1)}>
          <svg className="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m15 5-7 7 7 7" /></svg>
        </button>
        <span className={styles.pagerText} aria-live="polite">Page {page + 1} of {pages}</span>
        <button type="button" className={styles.pagerButton} aria-label="Next page" disabled={page >= pages - 1} onClick={() => show(page + 1)}>
          <svg className="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 7 7-7 7" /></svg>
        </button>
      </div>
    </div>
  );
}
