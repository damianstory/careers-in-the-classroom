"use client";

import { useEffect, useRef } from "react";
import { Icon } from "../Icon";
import styles from "./dialogs.module.css";

// Native <dialog> opened with showModal(): the browser traps focus, closes on
// Escape and returns focus to the control that opened it.
//
// Layouts: the default is a white panel with the title on top. `aside` splits the
// dialog into a dark green panel (title + aside) beside the content. `tone="dark"`
// renders the whole panel dark green (used for confirmations). On phones every
// dialog becomes a bottom sheet.
export function Modal({
  open,
  onClose,
  titleId,
  title,
  eyebrow,
  intro,
  aside,
  tone = "light",
  width = 600,
  children,
}: {
  open: boolean;
  onClose: () => void;
  titleId: string;
  title: React.ReactNode;
  eyebrow?: React.ReactNode;
  intro?: React.ReactNode;
  aside?: React.ReactNode;
  tone?: "light" | "dark";
  width?: number;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);

  const layout = aside ? styles.split : tone === "dark" ? styles.dark : styles.light;
  const heading = (
    <div className={styles.head}>
      {eyebrow}
      <h2 id={titleId} className={`display ${styles.title}`}>
        {title}
      </h2>
      {intro}
    </div>
  );

  return (
    <dialog
      ref={ref}
      className={`${styles.dialog} ${layout}`}
      style={{ "--dialog-width": `${width}px` } as React.CSSProperties}
      aria-labelledby={titleId}
      onClose={() => {
        onClose();
        // If the control that opened the dialog was removed (e.g. signup unlocked the page),
        // move focus to the page heading instead of losing it.
        setTimeout(() => {
          const active = document.activeElement;
          if (active && active !== document.body && active.isConnected) return;
          const target = document.querySelector<HTMLElement>("main h1") ?? document.querySelector<HTMLElement>("main");
          if (!target) return;
          target.setAttribute("tabindex", "-1");
          target.focus();
        }, 0);
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {open && (
        <>
          {/* First in the DOM so it receives initial focus, as before. */}
          <button type="button" className={styles.close} onClick={onClose} aria-label="Close">
            <Icon name="close" />
          </button>
          {aside ? (
            <div className={styles.splitGrid}>
              <div className={styles.aside}>
                <span className={styles.asideRuler} aria-hidden="true" />
                {heading}
                {aside}
              </div>
              <div className={styles.body}>{children}</div>
            </div>
          ) : (
            <div className={styles.body}>
              {tone === "dark" && (
                <>
                  <span className={`${styles.corner} ${styles.cornerStart}`} aria-hidden="true" />
                  <span className={`${styles.corner} ${styles.cornerEnd}`} aria-hidden="true" />
                </>
              )}
              {heading}
              {children}
            </div>
          )}
        </>
      )}
    </dialog>
  );
}
