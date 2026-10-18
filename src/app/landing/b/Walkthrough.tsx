"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Icon } from "@/components/Icon";
import styles from "../landing.module.css";

export interface WalkExample {
  slug: string;
  org: string;
  discipline: string;
  courseLine: string;
  question: string;
  local: string;
  image?: { src: StaticImageData; alt: string };
  diagram?: { src: StaticImageData; alt: string };
  steps: string[];
  roles: { title: string; summary: string }[];
  pathways: { name: string; provider: string }[];
  jobs: { title: string; employer: string }[];
  prompt: string;
}

const parts = [
  { id: "question", label: "The question", gives: "A hook for the first five minutes, tied to the unit you’re on." },
  { id: "how", label: "How it works", gives: "The science your students know, applied to the organization’s real problem." },
  { id: "who", label: "Who does this work", gives: "The kinds of people involved and what they actually do all day." },
  { id: "ways", label: "Ways in", gives: "Programs in Calgary and Alberta, and real job postings, that lead to this work." },
  { id: "ask", label: "Ask the class", gives: "A discussion question to close, with no single right answer." },
] as const;

// A miniature of the example page's lesson rail, so a first-time visitor sees what they would
// project before being asked to search for anything.
export function Walkthrough({ examples }: { examples: WalkExample[] }) {
  const [which, setWhich] = useState(0);
  const [part, setPart] = useState(0);
  const e = examples[which]!;
  const p = parts[part]!;

  return (
    <div className={styles.walk}>
      <div className={styles.walkPicker} role="group" aria-label="Try a different example">
        <span className={styles.walkPickerLabel}>Try</span>
        {examples.map((x, i) => (
          <button
            key={x.slug}
            type="button"
            className={styles.walkChip}
            aria-pressed={i === which}
            onClick={() => {
              setWhich(i);
              setPart(0);
            }}
          >
            {x.org}
          </button>
        ))}
      </div>

      <div className={styles.walkBody}>
        <ol className={styles.walkRail} aria-label="Parts of the example">
          {parts.map((x, i) => (
            <li key={x.id}>
              <button type="button" className={styles.walkRailItem} aria-current={i === part ? "step" : undefined} onClick={() => setPart(i)}>
                <span className={styles.walkRailNum}>{i + 1}</span>
                {x.label}
              </button>
            </li>
          ))}
        </ol>

        <div className={styles.screenFrame} aria-live="polite">
          <p className={styles.screenMeta}>
            <span className={styles.square} aria-hidden="true" />
            {e.discipline} · {e.org} · {e.courseLine}
          </p>

          {p.id === "question" && (
            <div className={styles.screenSplit}>
              <h3 className={styles.screenQ}>{e.question}</h3>
              {e.image && <Image src={e.image.src} alt={e.image.alt} sizes="(max-width: 900px) 100vw, 480px" className={styles.screenImg} />}
            </div>
          )}

          {p.id === "how" && (
            <div className={styles.screenSplit}>
              <ol className={styles.screenSteps}>
                {e.steps.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ol>
              {e.diagram && <Image src={e.diagram.src} alt={e.diagram.alt} sizes="(max-width: 900px) 100vw, 480px" className={styles.screenImg} />}
            </div>
          )}

          {p.id === "who" && (
            <ul className={styles.screenCards}>
              {e.roles.map((r) => (
                <li key={r.title}>
                  <Icon name="users" small />
                  <strong>{r.title}</strong>
                  <span>{r.summary}</span>
                </li>
              ))}
            </ul>
          )}

          {p.id === "ways" && (
            <div className={styles.screenTwo}>
              <div>
                <p className={styles.screenSub}>Programs</p>
                <ul className={styles.screenList}>
                  {e.pathways.slice(0, 4).map((x) => (
                    <li key={x.name + x.provider}>
                      <strong>{x.name}</strong> · {x.provider}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className={styles.screenSub}>Real job postings</p>
                <ul className={styles.screenList}>
                  {e.jobs.slice(0, 4).map((x) => (
                    <li key={x.title + x.employer}>
                      <strong>{x.title}</strong> · {x.employer}
                    </li>
                  ))}
                  {e.jobs.length === 0 && <li>None saved for this example yet.</li>}
                </ul>
              </div>
            </div>
          )}

          {p.id === "ask" && <p className={styles.screenAsk}>{e.prompt}</p>}

          <div className={styles.screenFoot}>
            <button type="button" className={styles.screenBtn} disabled={part === 0} onClick={() => setPart(part - 1)}>
              <Icon name="arrowLeft" small /> Back
            </button>
            {part < parts.length - 1 ? (
              <button type="button" className={styles.screenBtnPrimary} onClick={() => setPart(part + 1)}>
                Next: {parts[part + 1]!.label} <Icon name="arrowRight" small />
              </button>
            ) : (
              <Link href={`/examples/${e.slug}`} className={styles.screenBtnPrimary}>
                Open the full example <Icon name="arrowRight" small />
              </Link>
            )}
          </div>
        </div>

        <aside className={styles.walkNote} aria-label="What this part gives you">
          <p className={styles.walkNoteLabel}>What this gives you</p>
          <p className={styles.walkNoteText}>{p.gives}</p>
        </aside>
      </div>
    </div>
  );
}
