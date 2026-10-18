import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import heroImage from "../../../../public/images/hero-calgary-dither-green.png";
import { Doors } from "../Doors";
import { PrototypeBar } from "../PrototypeBar";
import { companyDoors, courseDoors, getLandingExample, roleDoors, stats } from "../data";
import styles from "../landing.module.css";

export const metadata: Metadata = { title: "Landing A · Explain, then launch" };

// Prototype A: a classic front door. It says what this is, how a lesson uses it and why, shows the
// parts of one real example, then hands off to three ways into the library.
export default function LandingA() {
  const { example, image, roles } = getLandingExample("ghgsat");

  return (
    <>
      <PrototypeBar current="a" />

      <section className={styles.heroA} aria-labelledby="a-title">
        <Image src={heroImage} alt="" fill preload unoptimized sizes="100vw" className={styles.heroPhoto} />
        <div className={styles.heroScrim} aria-hidden="true" />
        <div className={`${styles.frame} ${styles.heroAInner}`}>
          <p className={styles.kicker}>For Alberta high school science teachers</p>
          <h1 id="a-title" className={styles.heroTitle}>
            Show your class who in Calgary uses the science they’re learning.
          </h1>
          <p className={styles.heroLede}>
            Careers in the Classroom connects the unit you’re teaching to a real Calgary organization, the problem it’s working
            on, and the people doing the work. Each example is ready to project in five minutes.
          </p>
          <div className={styles.ctaRow}>
            <a href="#start" className={styles.ctaPrimary}>
              Find an example for my class <Icon name="arrowRight" small />
            </a>
            <a href="#how" className={styles.ctaGhost}>
              How it works
            </a>
          </div>
          <dl className={styles.statRow}>
            <div>
              <dt>Examples</dt>
              <dd>{stats.examples}</dd>
            </div>
            <div>
              <dt>Calgary organizations</dt>
              <dd>{stats.companies}</dd>
            </div>
            <div>
              <dt>Kinds of work</dt>
              <dd>{stats.roles}</dd>
            </div>
            <div>
              <dt>Courses</dt>
              <dd>{stats.courses}</dd>
            </div>
          </dl>
        </div>
      </section>

      <section id="how" className={styles.band} aria-labelledby="a-how">
        <div className={styles.frame}>
          <p className={styles.eyebrow}>How it works</p>
          <h2 id="a-how" className={styles.h2}>
            From your unit to a real conversation, in three steps
          </h2>
          <ol className={styles.steps}>
            <li className={styles.step}>
              <span className={styles.stepNum}>1</span>
              <h3 className={styles.h3}>Start from what you teach</h3>
              <p>Pick your course and unit, or start from a company or a kind of job your students are curious about.</p>
            </li>
            <li className={styles.step}>
              <span className={styles.stepNum}>2</span>
              <h3 className={styles.h3}>Open a real Calgary example</h3>
              <p>
                Each one starts with a question your students can answer with the science they know, then shows how the
                organization uses it.
              </p>
            </li>
            <li className={styles.step}>
              <span className={styles.stepNum}>3</span>
              <h3 className={styles.h3}>Project it and talk</h3>
              <p>
                Show it full screen, meet the people who do the work and the ways into it, and finish with a question for the
                class.
              </p>
            </li>
          </ol>
        </div>
      </section>

      <section className={`${styles.band} ${styles.bandWarm}`} aria-labelledby="a-anatomy">
        <div className={`${styles.frame} ${styles.anatomy}`}>
          <div>
            <p className={styles.eyebrow}>What’s inside one example</p>
            <h2 id="a-anatomy" className={styles.h2}>
              {example.question}
            </h2>
            <p className={styles.body}>
              {example.org} · {example.localShort}
            </p>
            <ol className={styles.parts}>
              <li>
                <strong>The question.</strong> A hook to open class, tied to your unit.
              </li>
              <li>
                <strong>How it works.</strong> The science, step by step, with a teaching illustration.
              </li>
              <li>
                <strong>Who does this work.</strong> {roles.map((r) => r.title).join(", ")}.
              </li>
              <li>
                <strong>Ways in.</strong> Local programs and real job postings that lead there.
              </li>
              <li>
                <strong>Ask the class.</strong> “{example.prompt.split("?")[0]}?”
              </li>
            </ol>
            <Link href={`/examples/${example.slug}`} className={styles.textLink}>
              Open this example <Icon name="arrowRight" small />
            </Link>
          </div>
          {image && (
            <figure className={styles.anatomyFigure}>
              <Image src={image.src} alt={image.alt} sizes="(max-width: 900px) 100vw, 600px" className={styles.anatomyImage} />
            </figure>
          )}
        </div>
      </section>

      <section className={styles.band} aria-labelledby="a-why">
        <div className={styles.frame}>
          <p className={styles.eyebrow}>Why it matters</p>
          <h2 id="a-why" className={styles.h2}>
            “When will I ever use this?” deserves a local answer
          </h2>
          <div className={styles.whyGrid}>
            <div>
              <h3 className={styles.h3}>Close to home</h3>
              <p>
                Students hear about science careers in faraway labs. These are organizations they could pass on the way to
                school.
              </p>
            </div>
            <div>
              <h3 className={styles.h3}>People, not job titles</h3>
              <p>
                Every example names the kinds of work involved and explains what those people actually do, so careers feel
                reachable.
              </p>
            </div>
            <div>
              <h3 className={styles.h3}>Honest and sourced</h3>
              <p>
                Every claim links to its source and is dated. We mark what a company says, what we observed, and what is our
                interpretation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="start" className={`${styles.band} ${styles.bandDark}`} aria-labelledby="a-start">
        <div className={styles.frame}>
          <p className={`${styles.eyebrow} ${styles.eyebrowDark}`}>Get started</p>
          <h2 id="a-start" className={`${styles.h2} ${styles.h2Dark}`}>
            Where would you like to start?
          </h2>
          <Doors courses={courseDoors} companies={companyDoors} roles={roleDoors} tone="dark" />
        </div>
      </section>
    </>
  );
}
