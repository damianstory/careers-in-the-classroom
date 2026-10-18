"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Icon } from "@/components/Icon";
import { DOORS, type Door } from "@/lib/doors";
import { announceFilterNavigation, filterQuery, TOPIC_MAX, type LibraryFilter } from "@/lib/library-filter";
import styles from "./ways-in.module.css";

const noop = () => () => {};

// A thumb-reachable bar with the four doors and search. It appears once the door row has scrolled up
// out of view (above or under the sticky site header), and stays hidden and out of the tab order
// otherwise. Without JavaScript it never appears.
export function QuickBar({ door, filter, courseHref }: { door: Door; filter: LibraryFilter; courseHref: string }) {
  const router = useRouter();
  const hydrated = useSyncExternalStore(noop, () => true, () => false);
  const [shown, setShown] = useState(false);
  const [searching, setSearching] = useState(false);
  const searchButton = useRef<HTMLButtonElement>(null);
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const row = document.getElementById("doors");
    if (!row) return;
    // The header is sticky, so the visible area starts below it (--header-h is 64px, or 56px on phones).
    // A scroll check rather than an IntersectionObserver: a jump straight past the row (End key, or a
    // long page restored lower down) never intersects, so an observer would not fire.
    let frame = 0;
    const check = () => {
      frame = 0;
      const header = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-h")) || 64;
      const past = row.getBoundingClientRect().bottom <= header;
      setShown(past);
      if (!past) {
        // The doors are back, so the bar and its search close. Focus inside them moves to the open door.
        setSearching(false);
        if (bar.current?.contains(document.activeElement)) row.querySelector<HTMLElement>('[aria-current="page"]')?.focus();
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

  const close = () => {
    setSearching(false);
    searchButton.current?.focus();
  };

  // On the course door a search narrows the current course and unit, as typing in the console does.
  const keep = door === "course" ? filter : {};

  return (
    <div
      ref={bar}
      onKeyDown={(e) => {
        if (e.key === "Escape" && searching) close();
      }}
      className={styles.quick}
      data-quickbar=""
      data-shown={shown ? "" : undefined}
      aria-hidden={!shown}
      inert={!shown}
    >
      {searching && (
        <form
          action="/connections"
          method="get"
          role="search"
          className={styles.quickSearch}
          onSubmit={(e) => {
            // Client-side, like the console, so in-memory session state survives the search.
            if (!hydrated) return;
            e.preventDefault();
            const topic = String(new FormData(e.currentTarget).get("topic") ?? "").trim();
            const next = { courseId: keep.courseId, unitId: keep.unitId, topic: topic || undefined };
            const q = filterQuery(next);
            setSearching(false);
            announceFilterNavigation(next);
            router.push(`/connections${q ? `?${q}` : ""}#library`);
          }}
        >
          {keep.courseId && <input type="hidden" name="course" value={keep.courseId} />}
          {keep.courseId && keep.unitId && <input type="hidden" name="unit" value={keep.unitId} />}
          <label htmlFor="quick-topic" className="sr-only">
            Search connections
          </label>
          <input
            id="quick-topic"
            name="topic"
            defaultValue={door === "course" ? filter.topic : ""}
            maxLength={TOPIC_MAX}
            autoFocus
            className={`input ${styles.quickInput}`}
            placeholder="Try “water”, “drone” or “bakery”"
          />
          <button className="btn btn-signal">Search</button>
        </form>
      )}
      <nav aria-label="Ways in (quick bar)" className={styles.quickBar}>
        {DOORS.map((d) => (
          <Link
            key={d.id}
            href={d.id === "course" ? `${courseHref}#library` : `/connections?by=${d.id}#library`}
            className={styles.quickItem}
            aria-current={door === d.id ? "page" : undefined}
            aria-label={d.label}
            onNavigate={() => {
              setSearching(false);
              announceFilterNavigation(d.id === "course" ? keep : null);
            }}
          >
            <Icon name={d.icon} />
            <span aria-hidden="true">{d.short}</span>
          </Link>
        ))}
        <button
          ref={searchButton}
          type="button"
          className={styles.quickItem}
          aria-expanded={searching}
          aria-label="Search connections"
          onClick={() => (searching ? close() : setSearching(true))}
        >
          <Icon name="search" />
          <span aria-hidden="true">Search</span>
        </button>
      </nav>
    </div>
  );
}
