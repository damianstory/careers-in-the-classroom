"use client";

import { useDialogs } from "@/components/dialogs/DialogProvider";
import { Icon } from "@/components/Icon";
import { SourceLink } from "@/components/SourceLink";
import type { Source } from "@/content";
import { useSignedUp } from "@/lib/session";
import styles from "./explore.module.css";

export function SpeakerButton({ topic, org, variant }: { topic: string; org: string; variant: "out" | "signal" }) {
  const { openSpeaker } = useDialogs();
  return (
    <button type="button" className={`btn btn-${variant}`} onClick={() => openSpeaker({ topic, org })}>
      <Icon name="message" />
      Request a conversation
    </button>
  );
}

export function SaveExample({ contextLabel, className }: { contextLabel: string; className?: string }) {
  const signedUp = useSignedUp();
  const { openSignup } = useDialogs();
  if (signedUp) return null;
  return (
    <p className={className ?? "body-text small"}>
      Teaching this topic again?{" "}
      <button type="button" className={`linkbtn ${styles.saveLink}`} onClick={() => openSignup(contextLabel)}>
        Save it with a free account
      </button>
    </p>
  );
}

// The recent development: a dark instrument panel while locked, a light card once open.
export function GatedNews({
  contextLabel,
  headingId,
  news,
}: {
  contextLabel: string;
  headingId: string;
  news: { title: string; published: string; status: string; statusShort: string; summary: string; ask: string; source: Source };
}) {
  const signedUp = useSignedUp();
  const { openSignup } = useDialogs();
  if (!signedUp) {
    return (
      <div className={styles.newsLocked}>
        <div className={styles.newsMain}>
          <div className={styles.newsLabelRow}>
            <h2 id={headingId} className={styles.newsLabel}>
              Recent development
            </h2>
            <span className={styles.lockTag}>
              <Icon name="lock" small />
              Free with signup
            </span>
          </div>
          <p className={styles.newsTitle}>{news.title}</p>
          <p className={styles.newsMeta}>
            Published {news.published} · {news.statusShort}
          </p>
        </div>
        <div className={styles.newsSkeleton} aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>
        <div>
          <button type="button" className="btn btn-signal" onClick={() => openSignup(contextLabel)}>
            <Icon name="lock" small />
            Sign up free to open
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.newsOpen}>
      <div className={styles.newsLabelRow}>
        <h2 id={headingId} className={`${styles.newsLabel} ${styles.newsLabelLight}`}>
          Recent development
        </h2>
        <span className="tag tag-interpreted">{news.status}</span>
      </div>
      <p className={styles.newsTitle}>{news.title}</p>
      <p className={styles.newsMeta}>Published {news.published}</p>
      <p className={styles.newsSummary}>{news.summary}</p>
      <div className={styles.newsAsk}>
        <p className="eyebrow">Ask students</p>
        <p className={styles.newsAskText}>{news.ask}</p>
      </div>
      <p className="small">
        <SourceLink href={news.source.url}>{news.source.label}</SourceLink>
      </p>
    </div>
  );
}
