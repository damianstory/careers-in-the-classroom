"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { ROLE_TAB_EVENT } from "./frame";
import styles from "./explore.module.css";

export type RoleTab = "what" | "jobs" | "prepare";
const noop = () => () => {};

export function RoleTabs({ roleId, shown, jobOpen, tabs }: {
  roleId: string; shown: boolean; jobOpen: boolean;
  tabs: { id: RoleTab; label: string; content: React.ReactNode }[];
}) {
  // Before hydration these are readable sections, rather than hidden behind inert tab buttons.
  const ready = useSyncExternalStore(noop, () => true, () => false);
  const [tab, setTab] = useState<RoleTab>("what");
  // A role newly shown, or shown again after its posting closed, opens on What they do. A return
  // from the posting (its Back link, or browser Back) is signalled by ExploreFocus, which opens
  // Job searches. Adjusted during render, not in an effect.
  const [seen, setSeen] = useState({ shown, jobOpen });
  if (seen.shown !== shown || seen.jobOpen !== jobOpen) {
    setSeen({ shown, jobOpen });
    if (shown && (!seen.shown || seen.jobOpen)) setTab("what");
  }
  useEffect(() => {
    const open = (event: Event) => {
      const detail = (event as CustomEvent<{ role: string; tab: RoleTab }>).detail;
      if (detail.role === roleId) setTab(detail.tab);
    };
    window.addEventListener(ROLE_TAB_EVENT, open);
    return () => window.removeEventListener(ROLE_TAB_EVENT, open);
  }, [roleId]);
  const refs = useRef<Record<string, HTMLButtonElement | null>>({});

  const keys = (event: React.KeyboardEvent) => {
    const index = tabs.findIndex((t) => t.id === tab);
    const next = event.key === "ArrowRight" ? (index + 1) % tabs.length
      : event.key === "ArrowLeft" ? (index - 1 + tabs.length) % tabs.length
      : event.key === "Home" ? 0 : event.key === "End" ? tabs.length - 1 : -1;
    if (next < 0) return;
    event.preventDefault();
    setTab(tabs[next].id);
    refs.current[tabs[next].id]?.focus();
  };

  return (
    <div className={styles.roleTabs} hidden={jobOpen} data-role-tabs={roleId} data-tabs-ready={ready ? "" : undefined}>
      <div role="tablist" aria-label="About this work" className={styles.tabList} hidden={!ready} onKeyDown={keys}>
        {tabs.map((t) => (
          <button key={t.id} ref={(el) => { refs.current[t.id] = el; }} type="button" role="tab" id={`tab-${roleId}-${t.id}`}
            aria-selected={tab === t.id} aria-controls={`panel-${roleId}-${t.id}`} tabIndex={tab === t.id ? 0 : -1}
            className={styles.tab} data-tab={t.id} onClick={() => setTab(t.id)}>
            {t.label}
          </button>
        ))}
      </div>
      {tabs.map((t) => (
        <div key={t.id} role="tabpanel" id={`panel-${roleId}-${t.id}`} aria-labelledby={`tab-${roleId}-${t.id}`}
          hidden={ready && tab !== t.id} className={styles.tabPanel} data-tab-panel={t.id}>
          {t.content}
        </div>
      ))}
    </div>
  );
}
