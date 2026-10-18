import type { Metadata } from "next";
import Link from "next/link";
import { connection } from "next/server";
import { getJob, getOrganization, getPathway } from "@/content";
import { jobStatusLabel } from "@/lib/job-status";
import { Icon } from "@/components/Icon";
import methane from "../../../../public/images/story-diagrams/methane-graphic-novel.webp";
import owls from "../../../../public/images/story-diagrams/owl-recovery-graphic-novel.webp";
import lithium from "../../../../public/images/story-diagrams/lithium-separation-graphic-novel.webp";
import { Doors } from "../Doors";
import { PrototypeBar } from "../PrototypeBar";
import { companyDoors, courseDoors, getLandingExample, roleDoors, stats } from "../data";
import styles from "../landing.module.css";
import { Walkthrough, type WalkExample } from "./Walkthrough";

export const metadata: Metadata = { title: "Landing B · Show one example" };

const diagrams = { ghgsat: methane, "wilder-institute": owls, "e3-lithium": lithium } as const;

function walk(slug: keyof typeof diagrams, today: string): WalkExample {
  const { example: e, details, image, roles } = getLandingExample(slug);
  // "Elsewhere" means a different employer from the featured organization; relevance is geographic and says nothing about that.
  const orgName = (details ? getOrganization(details.organizationId)?.name : undefined) ?? e.org;
  return {
    slug,
    org: e.org,
    discipline: e.discipline,
    courseLine: e.courses.map((c) => c.course).join(", "),
    question: e.question,
    local: e.localShort,
    image,
    diagram: details ? { src: diagrams[slug], alt: details.story.diagramAlt } : undefined,
    steps: details?.story.steps.map((s) => s.text) ?? [],
    roles: roles.map((r) => ({ title: r.title, summary: r.summary })),
    pathways: (details?.pathwayIds ?? []).map(getPathway).flatMap((p) => (p ? [{ name: p.name, provider: p.provider }] : [])),
    // Saved postings keep their status, place and whether another employer posted them, as on the full example.
    jobs: (details?.jobIds ?? []).map(getJob).flatMap((j) =>
      j
        ? [{ title: j.title, employer: j.employer, location: j.location, elsewhere: j.employer.trim().toLowerCase() !== orgName.trim().toLowerCase(), status: jobStatusLabel(j, today) }]
        : [],
    ),
    prompt: e.prompt,
  };
}

// Prototype B: show, don't tell. The page opens on a working miniature of one example, so a
// newcomer understands the product by using it, then picks a way into the library.
export default async function LandingB() {
  // Job status labels depend on today's date, so render per request rather than freezing them at build time.
  await connection();
  const today = new Date().toISOString().slice(0, 10);
  const walks = [walk("ghgsat", today), walk("wilder-institute", today), walk("e3-lithium", today)];

  return (
    <div className={styles.landing}>
      <PrototypeBar current="b" />

      <section className={styles.heroB} aria-labelledby="b-title">
        <div className={styles.frame}>
          <h1 id="b-title" className={styles.heroBTitle}>
            Here’s what you could show your class tomorrow.
          </h1>
          <p className={styles.heroBLede}>
            Careers in the Classroom ties the unit you teach to a real Calgary organization and the people doing the work. It’s
            for Alberta high school science teachers. Click through one example below, the way you would in class.
          </p>
        </div>
        <div className={styles.frame}>
          <Walkthrough examples={walks} />
        </div>
      </section>

      <section id="start" className={styles.band} aria-labelledby="b-start">
        <div className={styles.frame}>
          <h2 id="b-start" className={styles.h2Tight}>
            Now find one for your class
          </h2>
          <p className={styles.sectionLede}>
            {stats.examples} examples from {stats.companies} Calgary organizations, so far.
          </p>
          <Doors courses={courseDoors} companies={companyDoors} roles={roleDoors} />
        </div>
      </section>

      <section className={`${styles.band} ${styles.bandWarm}`} aria-labelledby="b-faq">
        <div className={styles.frame}>
          <h2 id="b-faq" className={styles.h2}>
            Questions teachers ask
          </h2>
          <dl className={styles.faq}>
            <div>
              <dt>How long does it take in class?</dt>
              <dd>
                As long as you want it to. Open with the question as a warm-up, walk through the whole example, or use the
                discussion question to close a lesson.
              </dd>
            </div>
            <div>
              <dt>Where does the information come from?</dt>
              <dd>
                From each organization’s own pages and other dated public sources. Every claim links to its source, and we label our interpretations.
              </dd>
            </div>
            <div>
              <dt>Are these real people?</dt>
              <dd>
                The organizations and job postings are real. The illustrations show fictional people doing that kind of work.
              </dd>
            </div>
            <div>
              <dt>Can someone from the company visit?</dt>
              <dd>
                We’re working towards classroom visits and talks. Use Request a speaker at the top of any page to tell us who you’d like to hear from.
              </dd>
            </div>
          </dl>
          <Link href="/landing/about" className={styles.textLink}>
            More about the project <Icon name="arrowRight" small />
          </Link>
        </div>
      </section>
    </div>
  );
}
