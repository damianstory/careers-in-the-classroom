import type { Metadata } from "next";
import Link from "next/link";
import { EvidenceTag } from "@/components/EvidenceTag";
import { Icon } from "@/components/Icon";
import { PrototypeBar } from "../PrototypeBar";
import { stats } from "../data";
import styles from "../landing.module.css";

export const metadata: Metadata = { title: "About · prototype" };

// A plain About page, linked from prototypes B and C. Any of the three could use it.
export default function About() {
  return (
    <>
      <PrototypeBar current="about" />
      <article className={`${styles.about} ${styles.landing}`}>
        <h1 className={styles.aboutTitle}>About Careers in the Classroom</h1>
        <p className={styles.aboutLede}>
          Helping Alberta science teachers answer “where would I use this?” with people doing the work down the road.
        </p>

        <h2 className={styles.aboutH2}>What it is</h2>
        <p>
          A library of {stats.examples} short, sourced examples for Alberta high school science. Each one connects a unit you
          teach to a real Calgary organization, the problem it is working on, the people who do that work, and the programs
          and job postings that lead there.
        </p>

        <h2 className={styles.aboutH2}>Why it matters</h2>
        <p>
          Students often can’t picture who uses chemistry, physics or biology after school, or assume those jobs are somewhere
          else. Seeing the work happening in their own city, done by people with job titles they can look up, makes the
          science they’re learning feel useful and the careers feel reachable.
        </p>

        <h2 className={styles.aboutH2}>How a lesson uses it</h2>
        <ol className={styles.aboutList}>
          <li>Find an example by course and unit, by company, or by a kind of job.</li>
          <li>Open with its question. Students reason about it with what they already know.</li>
          <li>Walk through how the organization uses that science, and who does the work.</li>
          <li>Close with the discussion question, and point students to programs and real postings.</li>
        </ol>

        <h2 className={styles.aboutH2}>How we research</h2>
        <p>Every claim links to a dated source and carries a tag that says how sure we are:</p>
        <ul className={styles.aboutTags}>
          <li>
            <EvidenceTag kind="stated">Stated</EvidenceTag> The organization says it on its own pages.
          </li>
          <li>
            <EvidenceTag kind="observed">Observed</EvidenceTag> We saw it in a dated source, such as a job posting.
          </li>
          <li>
            <EvidenceTag kind="interpreted">Interpreted</EvidenceTag> Our interpretation, such as which unit an example fits.
          </li>
        </ul>
        <p>Illustrations show fictional people and generic equipment, not the organization’s staff or facilities.</p>

        <h2 className={styles.aboutH2}>Where it’s going</h2>
        <p>
          We’re talking with teachers now about what helps in class. Next comes connecting classrooms with the people in these
          examples for visits and talks. Organizations can <Link href="/get-involved">list themselves</Link>.
        </p>

        <Link href="/landing/c" className={styles.ctaPrimaryLight}>
          Find an example <Icon name="arrowRight" small />
        </Link>
      </article>
    </>
  );
}
