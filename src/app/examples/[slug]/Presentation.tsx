"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { flushSync } from "react-dom";
import type { View } from "@/lib/example-navigation";
import { pathwayPages } from "@/lib/presentation";
import { goToSection } from "./SectionLink";
import styles from "./explore.module.css";

export interface PresentationFrame { part: View; label: string; content: ReactNode; cards?: ReactNode[] }
const PRESENT_EVENT = "explore:present";

export function PresentButton({ part }: { part: View }) {
  return <button type="button" className={`btn btn-out ${styles.presentButton}`} data-present={part}
    onClick={() => window.dispatchEvent(new CustomEvent(PRESENT_EVENT, { detail: part }))}>Show full screen</button>;
}

export function Presentation({ frames }: { frames: PresentationFrame[] }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const layer = useRef<HTMLDivElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const measure = useRef<HTMLDivElement>(null);
  const full = useRef(false);
  const [opened, setOpened] = useState(false);
  const [index, setIndex] = useState(0);
  const [pages, setPages] = useState<number[][] | null>(null);
  const ways = frames.find((frame) => frame.cards?.length);
  // Until measured, keep complete cards on separate frames. Measurement then combines rows.
  const groups = pages ?? ways?.cards?.map((_, i) => [i]) ?? [];
  const expanded = frames.flatMap((frame) => frame.cards?.length ? groups.map((indices, i) => ({
    ...frame, label: groups.length > 1 ? `${frame.label}, ${i + 1} of ${groups.length}` : frame.label,
    content: <>{frame.content}<div className={styles.projectGrid}>{indices.map((n) => frame.cards![n])}</div></>,
  })) : [frame]);
  const current = expanded[Math.min(index, expanded.length - 1)];
  const currentRef = useRef(current);
  useEffect(() => { currentRef.current = current; }, [current]);

  const close = () => {
    const d = dialog.current;
    if (!d?.open) return;
    const part = currentRef.current.part;
    d.close();
    setOpened(false);
    full.current = false;
    const restore = () => {
      goToSection(part, { smooth: false, history: "replace", focus: false });
      document.querySelector<HTMLButtonElement>(`[data-present="${part}"]`)?.focus({ preventScroll: true });
    };
    restore();
    if (document.fullscreenElement) void document.exitFullscreen().catch(() => {}).finally(restore);
  };
  const closeRef = useRef(close);
  useEffect(() => { closeRef.current = close; });

  useEffect(() => {
    const open = (event: Event) => {
      if (!window.matchMedia("(min-width: 961px)").matches) return;
      const part = (event as CustomEvent<View>).detail;
      flushSync(() => { setIndex(Math.max(0, expanded.findIndex((f) => f.part === part))); setOpened(true); });
      const d = dialog.current!;
      d.showModal();
      // Unsupported or refused requests leave the modal covering the viewport.
      try { void layer.current?.requestFullscreen?.().catch(() => {}); } catch { /* overlay still works */ }
    };
    const changed = () => {
      if (document.fullscreenElement === layer.current) full.current = true;
      else if (full.current) closeRef.current();
    };
    window.addEventListener(PRESENT_EVENT, open);
    document.addEventListener("fullscreenchange", changed);
    return () => { window.removeEventListener(PRESENT_EVENT, open); document.removeEventListener("fullscreenchange", changed); };
  }, [expanded]);

  useEffect(() => {
    if (!opened) return;
    let disposed = false;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const resize = () => {
      if (disposed) return;
      if (stage.current) stage.current.style.setProperty("--frame-scale", String(stage.current.clientWidth / 1600));
      if (measure.current && ways?.cards?.length) {
        const grid = measure.current.querySelector<HTMLElement>("[data-measure-cards]")!;
        const capacity = 900 - 56 - grid.offsetTop;
        const next = pathwayPages([...grid.children].map((card) => (card as HTMLElement).offsetHeight), capacity);
        setPages((before) => JSON.stringify(before) === JSON.stringify(next) ? before : next);
        // Measurement can change the number of Ways in frames after opening Ask directly.
        const part = currentRef.current.part;
        if (part === "ask") setIndex(frames.length + next.length - 2);
        else if (part === "ways-in") setIndex((n) => Math.min(n, frames.findIndex((f) => f.part === "ways-in") + next.length - 1));
      }
    };
    const observer = new ResizeObserver(resize);
    observer.observe(stage.current!);
    if (measure.current) observer.observe(measure.current);
    void document.fonts.ready.then(resize);
    return () => { disposed = true; observer.disconnect(); document.body.style.overflow = previous; };
  }, [opened, ways, frames]);

  return <dialog ref={dialog} className={styles.presentation} aria-labelledby="presentation-title"
    onCancel={(event) => { event.preventDefault(); closeRef.current(); }}
    onKeyDown={(event) => {
      if (event.key === "Escape") { event.preventDefault(); closeRef.current(); }
      if (event.key === "ArrowRight") { event.preventDefault(); setIndex((n) => Math.min(n + 1, expanded.length - 1)); }
      if (event.key === "ArrowLeft") { event.preventDefault(); setIndex((n) => Math.max(n - 1, 0)); }
    }}>
    {opened && <div ref={layer} className={styles.presentationLayer}>
      <div className={styles.projectControls}>
        <button type="button" className="btn btn-light" onClick={() => closeRef.current()}>Close full screen</button>
        <p aria-live="polite">{Math.min(index + 1, expanded.length)} / {expanded.length} · {current.label}</p>
        <div><button className="btn btn-light" disabled={index === 0} onClick={() => setIndex((n) => n - 1)}>Previous</button>
        <button className="btn btn-light" disabled={index >= expanded.length - 1} onClick={() => setIndex((n) => n + 1)}>Next</button></div>
      </div>
      <div ref={stage} className={styles.projectStage}>
        <div className={styles.projectFrame} data-frame-part={current.part}>
          <h2 id="presentation-title">{current.label}</h2>{current.content}
        </div>
      </div>
      {ways && <div ref={measure} className={`${styles.projectFrame} ${styles.projectMeasure}`} aria-hidden="true" inert>
        <h2>Ways in</h2>{ways.content}<div className={styles.projectGrid} data-measure-cards="">{ways.cards}</div>
      </div>}
    </div>}
  </dialog>;
}
