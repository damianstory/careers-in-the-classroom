"use client";

import { useId } from "react";
import { SourceLink } from "@/components/SourceLink";
import styles from "./explore.module.css";

export interface SourceRef { label: string; url?: string }

// A citation as a compact button instead of a run of source names. The list is a native popover:
// it stays in the DOM while closed, closes on Escape or an outside click, and sits in the top
// layer, so it never adds height to a card.
export function SourcesButton({ sources }: { sources: SourceRef[] }) {
  const id = `sources-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;
  if (!sources.length) return null;
  const anchor = `--${id}`;
  return (
    <span className={styles.sourcesCite} data-sources-button="">
      <button type="button" className={styles.sourcesToggle} popoverTarget={id} style={{ anchorName: anchor } as React.CSSProperties}>
        {sources.length === 1 ? "Source" : `Sources · ${sources.length}`}
      </button>
      <span id={id} popover="auto" className={styles.sourcesPopover} style={{ positionAnchor: anchor } as React.CSSProperties}>
        <span className={styles.sourcesPopoverTitle}>{sources.length === 1 ? "Source" : "Sources"}</span>
        <span className={styles.sourcesPopoverList}>
          {sources.map((s, i) => (
            <span key={`${s.label}-${i}`}>{s.url ? <SourceLink href={s.url}>{s.label}</SourceLink> : s.label}</span>
          ))}
        </span>
      </span>
    </span>
  );
}
