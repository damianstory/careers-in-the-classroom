"use client";

import { useEffect, useState } from "react";
import { useDialogs } from "@/components/dialogs/DialogProvider";
import { RulerTicks } from "@/components/ExampleCardDiagram";
import { Icon } from "@/components/Icon";
import { SourceLink } from "@/components/SourceLink";
import type { Source } from "@/content";
import { addUnmatched, useSignedUp, useUnmatched } from "@/lib/session";
import styles from "./home.module.css";

// Keeps a session-only list of searches without a prepared match, for interview notes.
export function NoMatchRecorder({ course, label }: { course: string; label: string }) {
  useEffect(() => {
    addUnmatched({ course, label });
  }, [course, label]);
  return null;
}

// Shown to the interviewer only: build or run with NEXT_PUBLIC_INTERVIEW_NOTES=1.
export function UnmatchedList() {
  const list = useUnmatched();
  if (process.env.NEXT_PUBLIC_INTERVIEW_NOTES !== "1" || !list.length) return null;
  return (
    <div className={styles.notes}>
      <p className="cap">Searches without a match in this tab (for interview notes)</p>
      <ul className="body-text small">
        {list.map((m, i) => (
          <li key={i}>
            {m.course} · {m.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function NoteTopic() {
  const [noted, setNoted] = useState(false);
  if (noted) {
    return (
      <p className={styles.noted} role="status">
        <Icon name="check" small />
        Topic noted. Nothing was sent.
      </p>
    );
  }
  return (
    <button type="button" className="btn btn-out" onClick={() => setNoted(true)}>
      Note this topic for follow-up
    </button>
  );
}

export interface NewsCardData {
  why: string;
  title: string;
  published: string;
  status: string;
  statusShort: string;
  location: string;
  summary: string;
  ask: string;
  caution?: string;
  source: Source;
}

// Recent developments are the one gated thing. Examples are always open.
// This is a demonstration gate, not access control: gated content is in the page.
export function NewsCard({ item, contextLabel }: { item: NewsCardData; contextLabel?: string }) {
  const signedUp = useSignedUp();
  const { openSignup } = useDialogs();
  const bar = (
    <p className={styles.newsBar}>
      <span>Recent development</span>
      <RulerTicks />
    </p>
  );
  if (!signedUp) {
    return (
      <article className={`${styles.news} ${styles.newsLocked}`}>
        {bar}
        <div className={styles.newsBody}>
          <div className={styles.newsTags}>
            <span className="tag tag-neutral">
              <Icon name="lock" small />
              Free with signup
            </span>
          </div>
          <h3 className={styles.newsTitle}>{item.title}</h3>
          <p className={styles.newsMeta}>
            Published {item.published} · {item.statusShort}
          </p>
          <p className={styles.newsText}>
            {item.why} Sign up free to see the classroom write-up, a question to ask students, and the source.
          </p>
          <div className={styles.newsAction}>
            <button type="button" className="btn btn-ink" onClick={() => openSignup(contextLabel)}>
              Sign up free to open
            </button>
          </div>
        </div>
      </article>
    );
  }
  return (
    <article className={styles.news}>
      {bar}
      <div className={styles.newsBody}>
        <div className={styles.newsTags}>
          <span className="tag tag-interpreted">{item.status}</span>
        </div>
        <h3 className={styles.newsTitle}>{item.title}</h3>
        <p className={styles.newsMeta}>
          Published {item.published} · {item.location}
        </p>
        <p className={styles.newsText}>
          <strong className={styles.strong}>Why it matches.</strong> {item.why}
        </p>
        <p className={styles.newsText}>{item.summary}</p>
        <div className="wash">
          <p className="eyebrow">Ask students</p>
          <p className={styles.ask}>{item.ask}</p>
        </div>
        {item.caution && <p className={styles.newsSmall}>{item.caution}</p>}
        <p className={styles.newsSmall}>
          <SourceLink href={item.source.url}>{item.source.label}</SourceLink>
        </p>
      </div>
    </article>
  );
}

// The one signup prompt on the page, after the matching examples. Hidden once signed up.
export function SignupStrip({ label }: { label: string }) {
  const signedUp = useSignedUp();
  const { openSignup } = useDialogs();
  if (signedUp) return null;
  return (
    <div className={styles.signup}>
      <p>
        <strong>Teaching {label} again?</strong> Sign up free to open recent developments and get new Calgary examples for
        your topics once a month.
      </p>
      <button type="button" className="btn btn-signal" onClick={() => openSignup(label)}>
        Sign up free
      </button>
    </div>
  );
}

// Long lists show 12 cards first; the rest are in the page and appear on request.
export function ShowMore({ children, total, first = 12 }: { children: React.ReactNode[]; total: number; first?: number }) {
  const [all, setAll] = useState(false);
  if (all || total <= first) return <>{children}</>;
  return (
    <>
      {children.slice(0, first)}
      <li className={styles.more}>
        <button type="button" className="btn btn-out" onClick={() => setAll(true)}>
          Show {total - first} more
        </button>
      </li>
    </>
  );
}
