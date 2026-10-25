"use client";

import { useEffect, useEffectEvent, useRef, useState, type CSSProperties, type ReactNode, type RefObject } from "react";
import type { DiscoverCard } from "@/lib/discover";
import { advanceShakeProgress, emptyShakeProgress, pauseShakeProgress, pixelColumns, shakeEfforts, type ShakeEffort, type ShakeSample } from "@/lib/discover-shake";
import { DITHER_CELL, isDot } from "@/lib/dither-field";
import styles from "./discover.module.css";

const confettiColours = ["#51b04c", "#c5e5c3", "#367533", "#6ebd6a", "#231f20"];

export function ShakeRound({ card, round, failed, sample, connected, effort, reducedMotion, onComplete, onCancel, heading, connection }: {
  card?: DiscoverCard; round: number; failed: boolean; sample: RefObject<ShakeSample | null>; connected: boolean; effort: ShakeEffort;
  reducedMotion: boolean; onComplete(): void; onCancel(): void; heading: RefObject<HTMLHeadingElement | null>; connection: ReactNode;
}) {
  const progress = useRef(emptyShakeProgress());
  const finished = useRef(false);
  const consumed = useRef<number | null>(null);
  const [reading, setReading] = useState({ value: 0, moving: false, strength: 0, live: false });
  const [done, setDone] = useState(false);
  // Changing effort or reconnecting keeps earned progress, but requires a fresh sequence.
  useEffect(() => {
    progress.current = pauseShakeProgress(progress.current);
    consumed.current = sample.current?.receivedAt ?? null;
    const timer = setInterval(() => {
      if (finished.current) return;
      const next = sample.current;
      const live = connected && next !== null && next.valid && performance.now() - next.receivedAt <= 850;
      const usable = live && !document.hidden;
      if (!usable) progress.current = pauseShakeProgress(progress.current);
      const moving = usable && next.motion >= shakeEfforts[effort].threshold;
      if (next && consumed.current !== next.receivedAt) {
        consumed.current = next.receivedAt;
        if (usable) progress.current = advanceShakeProgress(progress.current, next, effort);
      }
      setReading({ value: progress.current.value, moving, strength: moving ? Math.min(1, next.motion / 2) : 0, live });
      if (progress.current.value >= 100) {
        // The card was chosen when the round started; further movement cannot advance or reselect it.
        finished.current = true;
        setDone(true);
      }
    }, 50);
    return () => clearInterval(timer);
  }, [sample, connected, effort]);

  // A short beat on the sharp picture (title still covered) before the guess screen.
  const complete = useEffectEvent(() => onComplete());
  useEffect(() => {
    if (!done) return;
    const timer = setTimeout(() => complete(), reducedMotion ? 400 : 1200);
    return () => clearTimeout(timer);
  }, [done, reducedMotion]);

  const percent = done ? 100 : Math.floor(reading.value);
  const hype = done ? "Got it!" : percent >= 80 ? "Almost!" : percent >= 50 ? "Keep going!" : percent >= 20 ? "Sharpen it!" : "Shake it!";
  const encouragement = done ? "Meter full!" : !connected ? "Connect the shaker to continue" : !reading.live ? "Waiting for the shaker…"
    : !reading.moving ? percent ? "Progress held. Give it another shake!" : "Give it a proper shake!"
    : percent >= 75 ? "Nearly full!" : percent >= 35 ? "Great shaking!" : "That’s it. Keep shaking!";
  const power = done || !reading.moving ? 0 : Math.max(1, Math.round(reading.strength * 5));

  return <section className={styles.shakeRound} aria-label="Shake to discover">
    <div className={styles.shakeBody}>
      <div className={styles.shakePicture} data-moving={reading.moving && !reducedMotion && !done}>
        <PixelPicture card={card} failed={failed} columns={pixelColumns(percent)} concealed={percent === 0} />
        <div className={styles.shakeCover} data-concealed={percent === 0}>?</div>
      </div>
      <div className={styles.shakeCopy}>
        <p className={styles.eyebrow}>Round {round} · Shake to discover</p>
        <h1 ref={heading} tabIndex={-1}>{hype}</h1>
        <p className={styles.shakeLead}>Every shake makes the picture clearer. Start guessing now.</p>
        <div className={styles.shakeMeter}>
          <div className={styles.shakeMeterTop}><span className={styles.shakePercent} aria-hidden="true">{percent}%</span><span role="status">{encouragement}</span></div>
          <div className={styles.shakeTrack} role="progressbar" aria-label="Shake progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={percent}>
            <div className={styles.shakeFill} style={{ width: `${percent}%` }} />
            {done && !reducedMotion && <span className={styles.shakeBurst} aria-hidden="true">{Array.from({ length: 36 }, (_, i) => <i key={i} style={{
              "--burst-x": `${Math.cos((-170 + (i * 47) % 160) * Math.PI / 180) * (120 + (i * 53) % 240)}px`,
              "--burst-y": `${Math.sin((-170 + (i * 47) % 160) * Math.PI / 180) * (120 + (i * 53) % 240)}px`,
              "--burst-turn": `${i * 67}deg`, background: confettiColours[i % confettiColours.length],
            } as CSSProperties} />)}</span>}
          </div>
          <div className={styles.shakeMeterBottom}>
            <span className={styles.shakePower}>Shake power <span aria-hidden="true">{Array.from({ length: 5 }, (_, i) => <b key={i} data-on={i < power} />)}</span></span>
            <span aria-hidden="true">Blocky → Sharp</span>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.dock}>
      <nav className={styles.dockRow} aria-label="Round controls">
        <button onClick={onCancel}>Cancel round</button>
        <p className={styles.dockNote}>About 10 seconds of steady shaking. Pauses keep your progress.</p>
        {connection}
      </nav>
    </div>
  </section>;
}

/** The selected illustration drawn as large blocks that sharpen with progress. The cover hides its title band. */
function PixelPicture({ card, failed, columns, concealed }: { card?: DiscoverCard; failed: boolean; columns: number | "full"; concealed: boolean }) {
  const canvas = useRef<HTMLCanvasElement>(null);
  // Results are keyed by source, so a new card never reuses another card's picture or error.
  const [result, setResult] = useState<{ src: string; image?: HTMLImageElement; failed?: boolean } | null>(null);
  const src = card?.image.src;
  const image = result && result.src === src ? result.image ?? null : null;
  const decodeFailed = Boolean(result && result.src === src && result.failed);
  useEffect(() => {
    if (!src || failed) return;
    let live = true;
    const picture = new Image();
    picture.src = src;
    picture.decode().then(() => { if (live) setResult({ src, image: picture }); }, () => { if (live) setResult({ src, failed: true }); });
    return () => { live = false; };
  }, [src, failed]);
  useEffect(() => {
    const target = canvas.current;
    const context = target?.getContext("2d");
    if (!target || !context) return;
    const width = 376, height = Math.round(width * (card?.image.height ?? 1344) / (card?.image.width ?? 752));
    if (target.width !== width || target.height !== height) { target.width = width; target.height = height; }
    if (concealed) {
      // The navigation rail's exact three-band Bayer field, at the same strength.
      const theme = getComputedStyle(target);
      context.fillStyle = theme.getPropertyValue("--surface-dark").trim() || "#1b3b19";
      context.fillRect(0, 0, width, height);
      context.fillStyle = theme.getPropertyValue("--signal").trim() || "#6ebd6a";
      context.globalAlpha = 0.6;
      for (let y = 0; y < height; y += DITHER_CELL) {
        for (let x = 0; x < width; x += DITHER_CELL) {
          if (isDot(x, y, height)) context.fillRect(x, y, DITHER_CELL, DITHER_CELL);
        }
      }
      context.globalAlpha = 1;
      return;
    }
    if (!image) return;
    if (columns === "full") {
      context.imageSmoothingEnabled = true;
      context.drawImage(image, 0, 0, width, height);
      return;
    }
    const rows = Math.max(1, Math.round(columns * height / width));
    const small = document.createElement("canvas");
    small.width = columns; small.height = rows;
    small.getContext("2d")?.drawImage(image, 0, 0, columns, rows);
    context.imageSmoothingEnabled = false;
    context.drawImage(small, 0, 0, columns, rows, 0, 0, width, height);
  }, [image, columns, concealed, card?.image.width, card?.image.height]);
  if (!card) return null;
  if (failed || decodeFailed) return <div className={styles.fallback}><p>Picture unavailable. Use these clues:</p><p>{card.image.clue}</p></div>;
  return <canvas ref={canvas} className={styles.pixelCanvas} role="img" aria-label={`Mystery picture. It gets sharper as you shake. Clue: ${card.image.clue}`} />;
}
