import type { Metadata } from "next";
import Link from "next/link";
import { EvidenceTag } from "@/components/EvidenceTag";
import { SourceLink } from "@/components/SourceLink";
import { getNews } from "@/content";
import { SpeakerButton } from "../examples/[slug]/ExampleParts";
import styles from "./digest.module.css";

export const metadata: Metadata = { title: "Monthly email sample" };

// Web rendering of the approved monthly email sample. Nothing is sent.
export default function DigestPage() {
  const a = getNews("ghgsat-second-generation")!;
  const b = getNews("enzyme-system-early-research")!;

  return (
    <div className={styles.page}>
      <div className={styles.column}>
        <span className={styles.ruler} aria-hidden="true" />
        <article className={styles.email} aria-label="Sample monthly email">
          <header className={styles.envelope}>
            <div className={styles.fromRow}>
              <p className={styles.envelopeMeta}>From: Careers in the Classroom</p>
              <span className={styles.sample}>
                <span className={styles.sampleMark} aria-hidden="true" />
                Sample edition
              </span>
            </div>
            <p className={`${styles.envelopeMeta} ${styles.subjectLabel}`}>Subject:</p>
            <h1 className={`display ${styles.subject}`}>
              October: methane from space, and an enzyme with an unknown function
            </h1>
          </header>

          <div className={styles.body}>
            <div className={styles.masthead}>
              <p className={`display ${styles.brand}`}>Careers in the Classroom</p>
              <p className={styles.edition}>October 2026 · Calgary</p>
            </div>
            <p className={styles.intro}>
              Here’s this month’s pick for your saved topics. One local example, one new development, and one from further
              away.
            </p>
            <div className={styles.topics}>
              <span className={styles.topic}>Physics 30 · Electromagnetic radiation</span>
              <span className={styles.topic}>Biology 30 · Cell division, genetics and molecular biology</span>
              <Link href="/" className={styles.change}>
                Change topics
              </Link>
            </div>

            <section className={styles.item} aria-labelledby="d-local">
              <div className={styles.kicker}>
                <p className={styles.kind}>
                  <span className={styles.kindMark} aria-hidden="true" />
                  Local example
                </p>
                <span className="tag tag-neutral">Evergreen, not news</span>
              </div>
              <h2 id="d-local" className={`display ${styles.h2}`}>How can you find an invisible gas from space?</h2>
              <p className={styles.meta}>GHGSat · Physics 30</p>
              <p className={styles.text}>
                GHGSat’s satellites use a spectrometer to measure methane. It lists a Calgary office; headquarters is in
                Montreal. The full example covers the work, the team areas, and possible pathways.
              </p>
              <div className={styles.ask}>
                <p className={styles.askLabel}>Ask students</p>
                <p className={styles.askText}>If a sensor detects no methane, does that prove none is present?</p>
              </div>
              <p>
                <Link href="/examples/ghgsat?course=physics-30&unit=p30c" className={styles.readMore}>
                  Read the full example
                </Link>
              </p>
            </section>

            <section className={styles.item} aria-labelledby="d-new">
              <div className={styles.kicker}>
                <p className={styles.kind}>
                  <span className={styles.kindMark} aria-hidden="true" />
                  New this month
                </p>
                <EvidenceTag kind="interpreted">{a.status}</EvidenceTag>
              </div>
              <h2 id="d-new" className={`display ${styles.h2}`}>{a.title}</h2>
              <p className={styles.meta}>Published {a.published} · Physics 30</p>
              <p className={styles.text}>
                The company says the new satellite will have better sensitivity and coverage. Those are projections. Use it to
                talk about detection limits: {a.ask.charAt(0).toLowerCase() + a.ask.slice(1)}
              </p>
              <p className={styles.source}>
                <SourceLink href={a.sources[0].url}>Source: {a.sources[0].label}</SourceLink>
              </p>
            </section>

            <section className={styles.item} aria-labelledby="d-beyond">
              <div className={styles.kicker}>
                <p className={styles.kind}>
                  <span className={styles.kindMark} aria-hidden="true" />
                  Beyond Calgary
                </p>
                <EvidenceTag kind="interpreted">{b.status}</EvidenceTag>
              </div>
              <h2 id="d-beyond" className={`display ${styles.h2}`}>{b.title}</h2>
              <p className={styles.meta}>
                Published {b.published} · {b.location} · Biology 30
              </p>
              <p className={styles.text}>
                Anthropic reported finding an enzyme system through AI-assisted analysis, then human lab work. It says the
                function is still unknown. A preprint is linked; peer review is not verified here. {b.caution}
              </p>
              <div className={styles.ask}>
                <p className={styles.askLabel}>Ask students</p>
                <p className={styles.askText}>{b.ask}</p>
              </div>
              <p className={styles.source}>
                <SourceLink href={b.sources[0].url}>Source: {b.sources[0].label}</SourceLink>
              </p>
            </section>

            <section className={styles.note} aria-labelledby="d-opportunities">
              <h2 id="d-opportunities" className={styles.noteTitle}>
                Student opportunities
              </h2>
              <p className={styles.text}>None this month. We only include opportunities once eligibility and dates are verified.</p>
            </section>

            <section className={styles.speaker} aria-labelledby="d-speaker">
              <span className={`${styles.corner} ${styles.cornerTop}`} aria-hidden="true" />
              <span className={`${styles.corner} ${styles.cornerBottom}`} aria-hidden="true" />
              <h2 id="d-speaker" className={`display ${styles.speakerTitle}`}>
                Want someone from this field in your class?
              </h2>
              <p className={styles.speakerText}>Tell us your topic and timing. We check who’s suitable first.</p>
              <div className={styles.speakerAction}>
                <SpeakerButton topic="Physics 30 · Electromagnetic radiation" org="GHGSat" variant="signal" />
              </div>
            </section>

            <footer className={styles.foot}>
              <p>
                You get this because you saved topics on Careers in the Classroom. Sources were checked before sending.
                Organizations shown have not endorsed this email.
              </p>
              <p>Update topics · Monthly or less often · Unsubscribe (links shown for the sample only)</p>
            </footer>
          </div>
        </article>
      </div>
    </div>
  );
}
