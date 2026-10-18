"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Icon } from "@/components/Icon";
import type { BrowseExample } from "@/lib/browse";
import { ExampleTile, OrgMark } from "../BrowseParts";
import styles from "../browse.module.css";

type Opt = { id: string; name: string };

// The fewest constraints first to drop when nothing fits: challenge, then kind of work.
function pick(items: BrowseExample[], course: string, family: string, theme: string) {
  const fit = (e: BrowseExample, useTheme: boolean, useFamily: boolean) =>
    (!course || e.courses.some((c) => c.id === course)) &&
    (!useFamily || !family || e.roles.some((r) => r.family === family)) &&
    (!useTheme || !theme || e.theme === theme);
  const exact = items.filter((e) => fit(e, true, true));
  if (exact.length) return { list: exact, relaxed: "" };
  const noTheme = items.filter((e) => fit(e, false, true));
  if (noTheme.length) return { list: noTheme, relaxed: "challenge" };
  return { list: items.filter((e) => fit(e, false, false)), relaxed: "kind of work and challenge" };
}

export function Sentence({ items, courses, themes, families }: { items: BrowseExample[]; courses: Opt[]; themes: Opt[]; families: Opt[] }) {
  const router = useRouter();
  const [course, setCourse] = useState("");
  const [family, setFamily] = useState("");
  const [theme, setTheme] = useState("");
  const { list, relaxed } = pick(items, course, family, theme);
  const byName = [...items].sort((a, b) => a.org.name.localeCompare(b.org.name));

  const select = (id: string, label: string, value: string, set: (v: string) => void, any: string, opts: Opt[]) => (
    <span className={styles.blank}>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <select id={id} value={value} onChange={(e) => set(e.target.value)} className={styles.blankSelect} data-set={value ? "" : undefined}>
        <option value="">{any}</option>
        {opts.map((o) => (
          <option key={o.id} value={o.id}>
            {o.name}
          </option>
        ))}
      </select>
      <Icon name="chevronDown" small className={styles.blankIcon} />
    </span>
  );

  return (
    <div className={styles.page}>
      <section className={styles.sentenceHero} aria-labelledby="c-title">
        <div className={styles.frame}>
          <h1 id="c-title" className="sr-only">
            Find a Calgary connection for your class
          </h1>
          <p className={styles.sentence}>
            I teach {select("c-course", "Course", course, setCourse, "any course", courses)} and I want my students to meet{" "}
            {select("c-work", "Kind of work", family, setFamily, "people", families.map((f) => ({ ...f, name: `people in ${f.name.toLowerCase()}` })))}{" "}
            working on {select("c-theme", "Challenge", theme, setTheme, "any challenge", themes.map((t) => ({ ...t, name: t.name.toLowerCase() })))}.
          </p>
          <div className={styles.sentenceActions}>
            <button
              type="button"
              className="btn btn-signal"
              onClick={() => router.push(list[Math.floor(Math.random() * list.length)].href)}
            >
              Surprise me
            </button>
            {(course || family || theme) && (
              <button type="button" className={`btn btn-light`} onClick={() => (setCourse(""), setFamily(""), setTheme(""))}>
                Start again
              </button>
            )}
          </div>
        </div>
      </section>

      <section className={`${styles.frame} ${styles.panel}`} aria-live="polite" aria-labelledby="c-results">
        <div className={styles.panelHead}>
          <h2 id="c-results" className={styles.h2}>
            {list.length} {list.length === 1 ? "connection" : "connections"}
          </h2>
          {relaxed && <p className={styles.relaxed}>Nothing fits every part yet, so this ignores the {relaxed}.</p>}
        </div>
        <ul className={styles.tileGrid}>
          {list.map((e) => (
            <ExampleTile key={e.slug} e={e} />
          ))}
        </ul>
      </section>

      <section className={`${styles.frame} ${styles.panel}`} aria-labelledby="c-wall">
        <div className={styles.panelHead}>
          <h2 id="c-wall" className={styles.h2}>
            Or start from a company
          </h2>
        </div>
        <ul className={styles.wall}>
          {byName.map((e) => (
            <li key={e.slug}>
              <Link href={e.href} className={styles.wallItem}>
                <OrgMark org={e.org} size={40} />
                <span>{e.org.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
