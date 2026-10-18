import type { Metadata } from "next";
import Link from "next/link";
import { PreviewBar } from "./BrowseParts";
import styles from "./browse.module.css";

export const metadata: Metadata = { title: "Prototype: search and browse" };

const VERSIONS = [
  {
    href: "/preview/a",
    name: "A · Four ways in",
    idea: "Four equal starting points (course, challenge, company, kind of work) above one panel, plus one search box for everything.",
    best: "A teacher who knows how they like to start, and a first-time visitor who wants to see what’s here.",
    risk: "Choosing a door is one extra decision before seeing any examples.",
  },
  {
    href: "/preview/b",
    name: "B · One list, many filters",
    idea: "Every organization in one list with logos on the left, narrowed by any mix of course, challenge and kind of work.",
    best: "A teacher with two or three things in mind at once (Chemistry 20 and water, say), and anyone comparing companies.",
    risk: "Checkbox filters feel like a database; the course and unit pairing is weaker than today’s.",
  },
  {
    href: "/preview/c",
    name: "C · Build a sentence",
    idea: "The teacher finishes “I teach … and I want my students to meet … working on …”. Results, then a wall of every company.",
    best: "A first visit or a projector: it explains what the site does while you use it.",
    risk: "Fewer choices at once, and there is no unit-level control.",
  },
];

export default function PreviewIndex() {
  return (
    <>
      <PreviewBar current="/preview" />
      <div className={styles.page}>
        <header className={`${styles.frame} ${styles.intro}`}>
          <p className="eyebrow">Design prototype</p>
          <h1 className={styles.h1}>Three ways to start a search</h1>
          <p className={styles.lead}>
            Each version uses the same 32 examples. Courses stay in every version; each one adds starting from a challenge,
            a company or a kind of work. Nothing here replaces the current home page yet.
          </p>
        </header>
        <ul className={`${styles.frame} ${styles.versionList}`}>
          {VERSIONS.map((v) => (
            <li key={v.href} className={styles.versionCard}>
              <h2 className={styles.h2}>
                <Link href={v.href} className={styles.stretch}>
                  {v.name}
                </Link>
              </h2>
              <p>{v.idea}</p>
              <p>
                <strong>Works for:</strong> {v.best}
              </p>
              <p>
                <strong>Trade-off:</strong> {v.risk}
              </p>
            </li>
          ))}
        </ul>
        <section className={`${styles.frame} ${styles.panel}`} aria-labelledby="terms">
          <h2 id="terms" className={styles.h2}>
            Words used here
          </h2>
          <dl className={styles.terms}>
            <dt>Challenge</dt>
            <dd>
              The problem an organization is working on, written as a question (“How can a park help clean stormwater?”).
              Grouped into eight themes such as Clean water and land, or Energy and climate.
            </dd>
            <dt>Kind of work</dt>
            <dd>
              The 51 role profiles in the library, grouped into seven families a student would recognize, such as Lab science
              and quality, or Skilled trades and operations.
            </dd>
          </dl>
        </section>
      </div>
    </>
  );
}
