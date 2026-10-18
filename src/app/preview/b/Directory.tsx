"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Icon } from "@/components/Icon";
import type { BrowseExample } from "@/lib/browse";
import { QUERY_MAX, hasFamily, matchesQuery } from "@/lib/browse-terms";
import { CompanyRow, ExampleTile } from "../BrowseParts";
import styles from "../browse.module.css";

type Opt = { id: string; name: string };
type Facet = "course" | "theme" | "family";
export type Picks = Record<Facet, string[]>;

const EMPTY: Picks = { course: [], theme: [], family: [] };

const has: Record<Facet, (e: BrowseExample, id: string) => boolean> = {
  course: (e, id) => e.courses.some((c) => c.id === id),
  theme: (e, id) => e.theme === id,
  family: hasFamily,
};

// Within a facet, options widen (OR); across facets they narrow (AND).
function matches(e: BrowseExample, picks: Picks, q: string, skip?: Facet) {
  for (const f of Object.keys(picks) as Facet[]) {
    if (f === skip || !picks[f].length) continue;
    if (!picks[f].some((id) => has[f](e, id))) return false;
  }
  return !q.trim() || matchesQuery(e, q);
}

export interface DirectoryProps {
  items: BrowseExample[];
  courses: Opt[];
  themes: Opt[];
  families: Opt[];
}

function toQuery(picks: Picks, q: string) {
  const p = new URLSearchParams();
  picks.course.forEach((v) => p.append("course", v));
  picks.theme.forEach((v) => p.append("theme", v));
  picks.family.forEach((v) => p.append("work", v));
  if (q.trim()) p.set("q", q.trim());
  return p.toString();
}

// The URL is the source of truth: the filter is read from it, written back as it changes, and
// re-read whenever something else changes it (a link, Back or Forward).
export function Directory({ items, courses, themes, families }: DirectoryProps) {
  const params = useSearchParams();
  const fromUrl = (): { picks: Picks; q: string } => {
    const valid = (ids: string[], opts: Opt[]) => ids.filter((id) => opts.some((o) => o.id === id));
    return {
      picks: { course: valid(params.getAll("course"), courses), theme: valid(params.getAll("theme"), themes), family: valid(params.getAll("work"), families) },
      q: (params.get("q") ?? "").slice(0, QUERY_MAX),
    };
  };
  const [picks, setPicks] = useState<Picks>(() => fromUrl().picks);
  const [q, setQ] = useState(() => fromUrl().q);
  const [view, setView] = useState<"companies" | "cards">("companies");
  const [open, setOpen] = useState(false);

  // An outside URL change that this component did not write replaces the local filter.
  const urlKey = params.toString();
  const [seenKey, setSeenKey] = useState(urlKey);
  if (urlKey !== seenKey) {
    setSeenKey(urlKey);
    const next = fromUrl();
    if (urlKey !== toQuery(picks, q)) {
      setPicks(next.picks);
      setQ(next.q);
    }
  }

  useEffect(() => {
    const s = toQuery(picks, q);
    if (s !== new URLSearchParams(window.location.search).toString()) {
      window.history.replaceState(null, "", s ? `?${s}` : window.location.pathname);
    }
  }, [picks, q]);

  const shown = useMemo(() => items.filter((e) => matches(e, picks, q)), [items, picks, q]);
  const active = picks.course.length + picks.theme.length + picks.family.length + (q.trim() ? 1 : 0);

  const toggle = (f: Facet, id: string) =>
    setPicks((p) => ({ ...p, [f]: p[f].includes(id) ? p[f].filter((x) => x !== id) : [...p[f], id] }));

  const group = (f: Facet, title: string, opts: Opt[]) => (
    <fieldset className={styles.facet}>
      <legend className={styles.facetTitle}>{title}</legend>
      {opts.map((o) => {
        const n = items.filter((e) => has[f](e, o.id) && matches(e, picks, q, f)).length;
        const on = picks[f].includes(o.id);
        return (
          <label key={o.id} className={styles.check} data-off={!n && !on ? "" : undefined}>
            <input type="checkbox" checked={on} onChange={() => toggle(f, o.id)} />
            <span>{o.name}</span>
            <span className={styles.checkCount}>{n}</span>
          </label>
        );
      })}
    </fieldset>
  );

  const chips = [
    ...picks.course.map((id) => ({ f: "course" as Facet, id, name: courses.find((c) => c.id === id)?.name })),
    ...picks.theme.map((id) => ({ f: "theme" as Facet, id, name: themes.find((c) => c.id === id)?.name })),
    ...picks.family.map((id) => ({ f: "family" as Facet, id, name: families.find((c) => c.id === id)?.name })),
  ];

  return (
    <div className={styles.page}>
      <header className={`${styles.frame} ${styles.intro}`}>
        <p className="eyebrow">Calgary connections</p>
        <h1 className={styles.h1}>Find who’s doing the science you teach</h1>
        <div className={styles.searchRow} role="search">
          <label htmlFor="qb" className="sr-only">
            Search companies, challenges and kinds of work
          </label>
          <Icon name="search" className={styles.searchIcon} />
          <input
            id="qb"
            className={`input ${styles.searchInput}`}
            value={q}
            maxLength={QUERY_MAX}
            onChange={(ev) => setQ(ev.target.value.slice(0, QUERY_MAX))}
            placeholder="Search companies, challenges and kinds of work"
          />
        </div>
      </header>

      <div className={`${styles.frame} ${styles.directory}`}>
        <aside className={styles.facets} data-open={open ? "" : undefined} aria-label="Filters">
          <button type="button" className={`btn btn-out ${styles.facetToggle}`} aria-expanded={open} onClick={() => setOpen(!open)}>
            Filters{active ? ` (${active})` : ""}
            <Icon name="chevronDown" small />
          </button>
          <div className={styles.facetBody}>
            {group("course", "Course", courses)}
            {group("theme", "Challenge", themes)}
            {group("family", "Kind of work", families)}
          </div>
        </aside>

        <section className={styles.listArea} aria-live="polite" aria-label="Results">
          <div className={styles.listHead}>
            <p className={styles.resultCount}>
              <strong>{shown.length}</strong> of {items.length} organizations
            </p>
            <div className={styles.segment} role="group" aria-label="Show as">
              <button type="button" aria-pressed={view === "companies"} onClick={() => setView("companies")}>
                List
              </button>
              <button type="button" aria-pressed={view === "cards"} onClick={() => setView("cards")}>
                Cards
              </button>
            </div>
          </div>
          {!!chips.length && (
            <ul className={styles.activeChips} aria-label="Active filters">
              {chips.map((c) => (
                <li key={c.f + c.id}>
                  <button type="button" onClick={() => toggle(c.f, c.id)} aria-label={`Remove ${c.name}`}>
                    {c.name}
                    <Icon name="close" small />
                  </button>
                </li>
              ))}
              <li>
                <button type="button" className={styles.clearAll} onClick={() => (setPicks(EMPTY), setQ(""))}>
                  Clear all
                </button>
              </li>
            </ul>
          )}
          {!shown.length && <p className={styles.empty}>No organization fits all of these yet. Remove a filter to widen the list.</p>}
          {view === "companies" ? (
            <ul className={styles.companyList}>
              {shown.map((e) => (
                <CompanyRow key={e.slug} e={e} />
              ))}
            </ul>
          ) : (
            <ul className={styles.tileGrid}>
              {shown.map((e) => (
                <ExampleTile key={e.slug} e={e} />
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}
