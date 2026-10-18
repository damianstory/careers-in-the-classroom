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
    <div className={styles.landing}>
      <PrototypeBar current="a" />

      <section className={styles.heroA} aria-labelledby="a-title">
        <Image src={heroImage} alt="" fill preload unoptimized sizes="100vw" className={styles.heroPhoto} />
        <div className={styles.heroScrim} aria-hidden="true" />
        <div className={`${styles.frame} ${styles.heroAInner}`}>
          <h1 id="a-title" className={styles.heroTitle}>
            <span className={styles.line}>
              <span className={styles.rise}>Show your class who in Calgary </span>
            </span>
            <span className={styles.line}>
              <span className={styles.rise}>uses the science they’re learning.</span>
            </span>
          </h1>
          <p className={styles.heroLede}>
            For Alberta high school science teachers. Careers in the Classroom connects the unit you’re teaching to a real
            Calgary organization, the problem it’s working on and the people doing the work. There are {stats.examples}{" "}
            examples so far, each ready to project in class.
          </p>
          <div className={styles.ctaRow}>
            <a href="#start" className={styles.ctaPrimary}>
              Find an example for my class <Icon name="arrowRight" small />
            </a>
            <a href="#how" className={styles.ctaGhost}>
              How it works
            </a>
          </div>
        </div>
      </section>

      <section id="how" className={styles.band} aria-labelledby="a-how">
        <div className={styles.frame}>
          <h2 id="a-how" className={styles.h2}>
            From your unit to a real conversation in three steps
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
                Each one starts with a question your students can reason about with the science they know, then shows how
                the organization uses it.
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
            <h2 id="a-anatomy" className={styles.h2}>
              What a class sees: “{example.question}”
            </h2>
            <p className={styles.body}>
              {example.org} · {example.localShort}
            </p>
            <dl className={styles.parts}>
              <div>
                <dt>The question</dt>
                <dd>A hook to open class, tied to your unit.</dd>
              </div>
              <div>
                <dt>How it works</dt>
                <dd>The science, step by step, with a teaching illustration.</dd>
              </div>
              <div>
                <dt>Who does this work</dt>
                <dd>{roles.map((r) => r.title).join(" · ")}</dd>
              </div>
              <div>
                <dt>Ways in</dt>
                <dd>Local programs and real job postings that lead there.</dd>
              </div>
              <div>
                <dt>Ask the class</dt>
                <dd>“{example.prompt.split("?")[0]}?”</dd>
              </div>
            </dl>
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
        <div className={`${styles.frame} ${styles.why}`}>
          <h2 id="a-why" className={styles.whyStatement}>
            “When will I ever use this?” deserves an answer from down the road.
          </h2>
          <div className={styles.whyBody}>
            <p>
              Science careers can feel like they happen somewhere else. These examples put the work in Calgary: an office on
              5th Avenue, a roastery in the Simmons Building, a field program in southeastern Alberta.
            </p>
            <p>
              Each one names the kinds of work involved and says what those people do day to day, with programs and job
              postings students can look up afterwards.
            </p>
            <p>
              Every claim links to a dated source. We mark what an organization says, what we saw in a source, and what is
              our own interpretation.
            </p>
          </div>
        </div>
      </section>

      <section id="start" className={`${styles.band} ${styles.bandDark}`} aria-labelledby="a-start">
        <div className={styles.frame}>
          <h2 id="a-start" className={`${styles.h2} ${styles.h2Dark}`}>
            Where would you like to start?
          </h2>
          <Doors courses={courseDoors} companies={companyDoors} roles={roleDoors} tone="dark" />
        </div>
      </section>
    </div>
  );
}
