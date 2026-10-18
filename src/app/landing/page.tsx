import type { Metadata } from "next";
import Link from "next/link";
import { PrototypeBar } from "./PrototypeBar";
import styles from "./landing.module.css";

export const metadata: Metadata = { title: "Landing prototypes" };

const options = [
  {
    href: "/landing/a",
    name: "A · Explain, then launch",
    idea: "A classic front door: what this is, how a lesson uses it, why it matters, the parts of one example, then three ways in.",
    best: "Best when most visitors arrive cold, from an email, a colleague or a PD session.",
  },
  {
    href: "/landing/b",
    name: "B · Show one example",
    idea: "Opens on a clickable miniature of a real example, so teachers understand it by using it. Then three ways in and a short FAQ.",
    best: "Best when the product sells itself once seen, and teachers skim rather than read.",
  },
  {
    href: "/landing/c",
    name: "C · Launchpad first",
    idea: "Closest to today. One-line explanation, three ways in as the hero, a small “New here?” primer, and a separate About page.",
    best: "Best when most visitors are returning teachers who want to get to an example fast.",
  },
];

export default function LandingIndex() {
  return (
    <>
      <PrototypeBar current="index" />
      <div className={styles.about}>
        <p className={styles.eyebrow}>For review</p>
        <h1 className={styles.aboutTitle}>Three landing page directions</h1>
        <p>
          Each uses live content from the library. The ways in (class, company, kind of job) link into the existing library
          and example pages; the search itself is being redesigned separately.
        </p>
        <ul className={styles.optionList}>
          {options.map((o) => (
            <li key={o.href}>
              <Link href={o.href} className={styles.optionCard}>
                <span className={styles.optionName}>{o.name}</span>
                <span>{o.idea}</span>
                <span className={styles.optionBest}>{o.best}</span>
              </Link>
            </li>
          ))}
        </ul>
        <p>
          Also: <Link href="/landing/about">About page</Link>, linked from B and C.
        </p>
      </div>
    </>
  );
}
