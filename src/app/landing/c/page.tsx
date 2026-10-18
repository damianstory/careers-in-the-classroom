import type { Metadata } from "next";
import Link from "next/link";
import { ExampleCard } from "@/components/ExampleCard";
import { Icon } from "@/components/Icon";
import { getExample } from "@/content";
import { Doors } from "../Doors";
import { PrototypeBar } from "../PrototypeBar";
import { companyDoors, courseDoors, roleDoors, sampleSlugs, stats } from "../data";
import styles from "../landing.module.css";

export const metadata: Metadata = { title: "Landing C · Launchpad first" };

// Prototype C: the smallest change from today. The page is still a launchpad, but it opens with a
// one-line explanation, three ways in instead of one form, and a "new here?" primer that links to
// a full About page for anyone who wants the background.
export default function LandingC() {
  const picks = sampleSlugs.slice(0, 3).map((s) => getExample(s)!);

  return (
    <>
      <PrototypeBar current="c" />

      <section className={styles.heroC} aria-labelledby="c-title">
        <div className={`${styles.frame} ${styles.heroCGrid}`}>
          <div className={styles.heroCMain}>
            <h1 id="c-title" className={styles.heroCTitle}>
              Real Calgary work, matched to the science you teach.
            </h1>
            <p className={styles.heroCLede}>
              {stats.examples} classroom-ready examples from {stats.companies} organizations. Start from your class, a company,
              or a kind of job.
            </p>
            <Doors courses={courseDoors} companies={companyDoors} roles={roleDoors} tone="dark" />
          </div>

          <aside className={styles.primer} aria-labelledby="c-primer">
            <p className={styles.primerKicker}>New here?</p>
            <h2 id="c-primer" className={styles.primerTitle}>
              How it works
            </h2>
            <ol className={styles.primerSteps}>
              <li>
                <strong>Pick a starting point.</strong> Your course and unit, a company, or a job.
              </li>
              <li>
                <strong>Open an example.</strong> A question, the science behind the work, and the people doing it.
              </li>
              <li>
                <strong>Show your class.</strong> Project it full screen and finish with a discussion question.
              </li>
            </ol>
            <Link href="/landing/about" className={styles.primerLink}>
              About the project <Icon name="arrowRight" small />
            </Link>
          </aside>
        </div>
      </section>

      <section className={styles.band} aria-labelledby="c-picks">
        <div className={styles.frame}>
          <div className={styles.rowHead}>
            <h2 id="c-picks" className={styles.h2}>
              Not sure yet? Try one of these
            </h2>
            <Link href="/#library" className={styles.textLink}>
              Browse all {stats.examples} <Icon name="arrowRight" small />
            </Link>
          </div>
          <ul className={styles.pickGrid}>
            {picks.map((e) => (
              <li key={e.slug}>
                <ExampleCard e={e} href={`/examples/${e.slug}`} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
