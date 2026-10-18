"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Icon, type IconName } from "@/components/Icon";
import { QUERY_MAX } from "@/lib/browse-terms";
import styles from "../browse.module.css";

export interface DockDoor {
  id: string;
  label: string;
  short: string;
  icon: IconName;
}

// A thumb-reachable bar with the four doors and search. It appears once the big door row has
// scrolled up out of view (above or under the sticky site header), and stays hidden and out of the
// tab order otherwise. Without JavaScript it never appears.
export function Dock({ doors, by, q }: { doors: DockDoor[]; by: string; q: string }) {
  const [shown, setShown] = useState(false);
  const [searching, setSearching] = useState(false);
  const searchButton = useRef<HTMLButtonElement>(null);
  const dock = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const row = document.getElementById("ways-in");
    if (!row) return;
    // The header is sticky, so the visible area starts below it (--header-h is 64px, or 56px on phones).
    // A scroll check rather than an IntersectionObserver: a jump straight past the row (End key, or a
    // search page where the row starts below the fold) never intersects, so an observer would not fire.
    let frame = 0;
    const check = () => {
      frame = 0;
      const header = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-h")) || 64;
      const past = row.getBoundingClientRect().bottom <= header;
      setShown(past);
      if (!past) {
        // The full doors are back, so the bar and its search close. Focus inside them moves to the big search box.
        setSearching(false);
        if (dock.current?.contains(document.activeElement)) document.getElementById("qa")?.focus();
      }
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(check);
    };
    check();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  const visible = shown;

  const close = () => {
    setSearching(false);
    searchButton.current?.focus();
  };

  return (
    <div
      ref={dock}
      onKeyDown={(e) => {
        if (e.key === "Escape" && searching) close();
      }}
      className={styles.dock}
      data-dock=""
      data-shown={visible ? "" : undefined}
      aria-hidden={!visible}
      inert={!visible}
    >
      {searching && (
        <form action="/preview/a" role="search" className={styles.dockSearch}>
          <input type="hidden" name="by" value={by} />
          <label htmlFor="dock-q" className="sr-only">
            Search everything
          </label>
          <input
            id="dock-q"
            name="q"
            defaultValue={q}
            maxLength={QUERY_MAX}
            autoFocus
            className={`input ${styles.dockInput}`}
            placeholder="Search companies, challenges, work"
          />
          <button className="btn btn-signal">Search</button>
        </form>
      )}
      <nav aria-label="Ways in (quick bar)" className={styles.dockBar}>
        {doors.map((d) => (
          <Link
            key={d.id}
            href={`/preview/a?by=${d.id}#panel`}
            className={styles.dockItem}
            aria-current={by === d.id ? "page" : undefined}
            aria-label={d.label}
            onClick={() => setSearching(false)}
          >
            <Icon name={d.icon} />
            <span aria-hidden="true">{d.short}</span>
          </Link>
        ))}
        <button
          ref={searchButton}
          type="button"
          className={styles.dockItem}
          aria-expanded={searching}
          aria-label="Search everything"
          onClick={() => (searching ? close() : setSearching(true))}
        >
          <Icon name="search" />
          <span aria-hidden="true">Search</span>
        </button>
      </nav>
    </div>
  );
}
