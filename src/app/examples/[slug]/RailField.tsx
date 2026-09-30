"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import { DITHER_CELL, isDot } from "@/lib/dither-field";
import styles from "./explore.module.css";

// The example rail's dither field and its magnetic dots (plan: docs/build/PLAN-b2-field-instrument.md,
// Phases 3 and 6). Desktop only. Decoration: nothing on the page waits for it or depends on it.
//
// - An offscreen field canvas holds every dot of the rail at 1:1, drawn once from `isDot`.
// - The visible canvas is sticky inside the rail's clipped overlay and shows the viewport's slice
//   of the field. Its CSS opacity (0.6) is the only place the strength is applied.
// - With a fine hovering pointer and motion allowed, dots near the pointer are pushed away and
//   spring home. The loop runs only while something moves and stops when everything is home.
//
// Test hooks on the canvas: data-magnet="on|off", data-magnet-idle (present when the loop has
// stopped), data-frame (a counter of drawn frames) and data-field-dpr (the field's scale, 1 when capped).

const DESKTOP = "(min-width: 961px)";
const FINE_POINTER = "(hover: hover) and (pointer: fine)";
const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

const DOT = "#6ebd6a"; // --signal, at full alpha
const MAX_SIDE = 32767; // largest canvas side browsers accept

// Physics, tuned in the P7/P8 prototypes.
const RADIUS = 90;
const STRENGTH = 2.4;
const SPRING = 0.08;
const DAMPING = 0.82;
const MAX_TRAVEL = 20;
const REST = 0.0025; // squared distance and speed below which a dot is home

function subscribeDesktop(onChange: () => void) {
  const mq = window.matchMedia(DESKTOP);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

// Mounts only while the desktop query matches; the canvas (and its engine) unmount when it stops.
export function RailField() {
  const desktop = useSyncExternalStore(
    subscribeDesktop,
    () => window.matchMedia(DESKTOP).matches,
    () => false,
  );
  return desktop ? <RailCanvas /> : null;
}

function RailCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    const rail = canvas?.closest<HTMLElement>("[data-rail-column]");
    if (!canvas || !rail) return;
    const engine = new FieldEngine(canvas, rail);
    return () => engine.destroy();
  }, []);
  return <canvas ref={ref} className={styles.railCanvas} data-rail-canvas="" aria-hidden="true" />;
}

interface Dot {
  hx: number; // home, rail CSS px (cell top-left)
  hy: number;
  ox: number; // displacement from home
  oy: number;
  vx: number;
  vy: number;
}

class FieldEngine {
  private readonly ctx: CanvasRenderingContext2D;
  private readonly off: (() => void)[] = [];

  // Field: every dot of the rail, 1:1.
  private field: HTMLCanvasElement | null = null;
  private fieldDpr = 1;
  private railW = 0;
  private railH = 0;
  private cols = 0;
  private rows = 0;
  private cells = new Uint8Array(0);

  // Visible canvas.
  private viewDpr = 1;
  private viewH = 0;

  private readonly dots = new Map<number, Dot>();
  private pointer: { x: number; y: number } | null = null; // client coordinates
  private pointerMoved = false;
  private magnet = false;

  private raf = 0;
  private needsField = true;
  private needsView = true;
  private hidden = false;
  private onScreen = true;
  private frames = 0;

  constructor(
    private readonly canvas: HTMLCanvasElement,
    private readonly rail: HTMLElement,
  ) {
    this.ctx = canvas.getContext("2d")!;

    const fine = window.matchMedia(FINE_POINTER);
    const reduced = window.matchMedia(REDUCED_MOTION);
    const updateMagnet = () => {
      this.magnet = fine.matches && !reduced.matches;
      canvas.dataset.magnet = this.magnet ? "on" : "off";
      if (!this.magnet) this.dots.clear();
      this.request();
    };
    updateMagnet();
    this.listen(fine, "change", updateMagnet);
    this.listen(reduced, "change", updateMagnet);

    this.listen(rail, "pointermove", (e) => {
      const p = e as PointerEvent;
      if (!this.magnet || p.pointerType === "touch") return;
      this.pointer = { x: p.clientX, y: p.clientY };
      this.pointerMoved = true;
      this.request();
    });
    this.listen(rail, "pointerleave", () => {
      if (!this.pointer) return;
      this.pointer = null;
      this.request();
    });
    // Passive, on window: programmatic scrolls (ExploreFocus) and wheel scrolls under a still pointer both count.
    this.listen(window, "scroll", () => this.request());
    this.listen(document, "visibilitychange", () => {
      this.hidden = document.hidden;
      if (this.hidden) this.stop();
      else this.request();
    });

    // The rail changes height with the view, opened jobs and unlocked news: rebuild the field.
    const railObserver = new ResizeObserver(() => {
      this.needsField = true;
      this.request();
    });
    railObserver.observe(rail);
    // The visible canvas follows the viewport height, so it can resize on its own.
    const viewObserver = new ResizeObserver(() => {
      this.needsView = true;
      this.request();
    });
    viewObserver.observe(canvas);
    const visibility = new IntersectionObserver(([entry]) => {
      this.onScreen = entry.isIntersecting;
      if (this.onScreen) this.request();
      else this.stop();
    });
    visibility.observe(rail);
    this.off.push(() => railObserver.disconnect(), () => viewObserver.disconnect(), () => visibility.disconnect());

    this.watchDpr();
    this.hidden = document.hidden;
    this.request();
  }

  destroy() {
    this.stop();
    this.off.forEach((f) => f());
    this.off.length = 0;
    this.field = null;
    this.dots.clear();
  }

  private listen(target: EventTarget, type: string, fn: (e: Event) => void) {
    target.addEventListener(type, fn, { passive: true });
    this.off.push(() => target.removeEventListener(type, fn));
  }

  // A DPR change (moving the window to another screen, or zooming) rebuilds both canvases.
  private watchDpr() {
    const query = window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`);
    const onChange = () => {
      query.removeEventListener("change", onChange);
      this.needsField = true;
      this.needsView = true;
      this.watchDpr();
      this.request();
    };
    query.addEventListener("change", onChange);
    this.off.push(() => query.removeEventListener("change", onChange));
  }

  // Every trigger (scroll, resize, pointer, media change) merges into one animation frame.
  private request() {
    if (this.raf || this.hidden || !this.onScreen) return;
    delete this.canvas.dataset.magnetIdle;
    this.raf = requestAnimationFrame(this.tick);
  }

  private stop() {
    if (this.raf) cancelAnimationFrame(this.raf);
    this.raf = 0;
    this.canvas.dataset.magnetIdle = "";
  }

  private readonly tick = () => {
    this.raf = 0;
    if (this.needsField) this.buildField();
    if (this.needsView) this.sizeView();

    const railRect = this.rail.getBoundingClientRect();
    // The canvas is sticky: its top, measured from the rail's top, is the slice to show.
    const offset = this.canvas.getBoundingClientRect().top - railRect.top;

    let target: { x: number; y: number } | null = null;
    if (this.magnet && this.pointer) {
      const x = this.pointer.x - railRect.left;
      const y = this.pointer.y - railRect.top;
      if (x >= 0 && y >= 0 && x <= railRect.width && y <= railRect.height) target = { x, y };
    }
    const moving = this.magnet ? this.step(target) : false;
    this.draw(offset);

    this.frames++;
    this.canvas.dataset.frame = String(this.frames);
    if (this.canvas.dataset.ready === undefined) this.canvas.dataset.ready = "";

    const pointerMoved = this.pointerMoved;
    this.pointerMoved = false;
    // Keep going while dots travel. A resting pointer over settled dots, or every dot home, stops the loop.
    if (this.dots.size > 0 && (moving || pointerMoved || !target)) this.raf = requestAnimationFrame(this.tick);
    else this.canvas.dataset.magnetIdle = "";
  };

  private buildField() {
    this.needsField = false;
    const rect = this.rail.getBoundingClientRect();
    const w = Math.round(rect.width);
    const h = rect.height;
    this.railW = w;
    this.railH = h;
    this.dots.clear();
    if (w <= 0 || h <= 0) {
      this.field = null;
      return;
    }

    const cols = Math.ceil(w / DITHER_CELL);
    const rows = Math.ceil(h / DITHER_CELL);
    const cells = new Uint8Array(cols * rows);
    for (let r = 0; r < rows; r++) {
      const cy = r * DITHER_CELL;
      for (let c = 0; c < cols; c++) if (isDot(c * DITHER_CELL, cy, h)) cells[r * cols + c] = 1;
    }
    this.cols = cols;
    this.rows = rows;
    this.cells = cells;

    // A very long rail at a high DPR would pass the canvas size limit: draw the field at 1x then.
    let dpr = window.devicePixelRatio || 1;
    if (Math.ceil(h * dpr) > MAX_SIDE) dpr = 1;
    this.fieldDpr = dpr;
    this.canvas.dataset.fieldDpr = String(dpr);
    const field = this.field ?? document.createElement("canvas");
    field.width = Math.round(w * dpr);
    field.height = Math.min(MAX_SIDE, Math.ceil(h * dpr));
    const fc = field.getContext("2d")!;
    fc.clearRect(0, 0, field.width, field.height);
    fc.fillStyle = DOT;
    fc.beginPath();
    const size = Math.round(DITHER_CELL * dpr);
    for (let r = 0; r < rows; r++) {
      const y = Math.round(r * DITHER_CELL * dpr);
      for (let c = 0; c < cols; c++) if (cells[r * cols + c]) fc.rect(Math.round(c * DITHER_CELL * dpr), y, size, size);
    }
    fc.fill();
    this.field = field;
  }

  private sizeView() {
    this.needsView = false;
    const w = this.canvas.clientWidth;
    const h = this.canvas.clientHeight;
    let dpr = window.devicePixelRatio || 1;
    if (Math.ceil(h * dpr) > MAX_SIDE) dpr = 1;
    this.viewDpr = dpr;
    this.viewH = h;
    this.canvas.width = Math.round(w * dpr);
    this.canvas.height = Math.round(h * dpr);
  }

  // Advances every active dot one frame. Returns whether any dot is still travelling.
  private step(target: { x: number; y: number } | null): boolean {
    const half = DITHER_CELL / 2;
    const r2 = RADIUS * RADIUS;
    if (target) {
      // Wake the dots whose home lies within reach of the pointer (grid lookup over isDot cells).
      const c0 = Math.max(0, Math.floor((target.x - RADIUS) / DITHER_CELL));
      const c1 = Math.min(this.cols - 1, Math.floor((target.x + RADIUS) / DITHER_CELL));
      const r0 = Math.max(0, Math.floor((target.y - RADIUS) / DITHER_CELL));
      const r1 = Math.min(this.rows - 1, Math.floor((target.y + RADIUS) / DITHER_CELL));
      for (let r = r0; r <= r1; r++) {
        const hy = r * DITHER_CELL;
        const dy = hy + half - target.y;
        for (let c = c0; c <= c1; c++) {
          const key = r * this.cols + c;
          if (!this.cells[key] || this.dots.has(key)) continue;
          const hx = c * DITHER_CELL;
          const dx = hx + half - target.x;
          if (dx * dx + dy * dy < r2) this.dots.set(key, { hx, hy, ox: 0, oy: 0, vx: 0, vy: 0 });
        }
      }
    }

    let moving = false;
    for (const [key, d] of this.dots) {
      if (target) {
        let dx = d.hx + half + d.ox - target.x;
        let dy = d.hy + half + d.oy - target.y;
        const dist2 = dx * dx + dy * dy;
        if (dist2 < r2) {
          let dist = Math.sqrt(dist2);
          if (dist < 0.001) {
            dx = 0.5;
            dy = 0.5;
            dist = Math.SQRT1_2;
          }
          const f = 1 - dist / RADIUS;
          const push = (STRENGTH * f * f) / dist;
          d.vx += dx * push;
          d.vy += dy * push;
        }
      }
      d.vx = (d.vx - d.ox * SPRING) * DAMPING;
      d.vy = (d.vy - d.oy * SPRING) * DAMPING;
      d.ox += d.vx;
      d.oy += d.vy;
      const travel = Math.hypot(d.ox, d.oy);
      if (travel > MAX_TRAVEL) {
        d.ox *= MAX_TRAVEL / travel;
        d.oy *= MAX_TRAVEL / travel;
      }
      const speed2 = d.vx * d.vx + d.vy * d.vy;
      if (d.ox * d.ox + d.oy * d.oy < REST && speed2 < REST) {
        this.dots.delete(key);
        continue;
      }
      if (speed2 > 0.00001) moving = true;
    }
    return moving;
  }

  // Frame order: clear everything, copy the slice, clear active dots' homes, draw them displaced.
  private draw(offset: number) {
    const ctx = this.ctx;
    const vd = this.viewDpr;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    const field = this.field;
    if (!field) return;

    // Slice [offset, offset + viewH] of the rail, in device pixels, clamped to the field.
    const top = Math.round(offset * vd); // rail row shown at the canvas' first pixel row
    const scale = this.fieldDpr / vd;
    const destH = Math.round(this.viewH * vd);
    const srcTop = Math.max(0, top * scale);
    const srcBottom = Math.min(field.height, (top + destH) * scale);
    if (srcBottom > srcTop) {
      const destY = srcTop / scale - top;
      ctx.drawImage(field, 0, srcTop, field.width, srcBottom - srcTop, 0, destY, this.railW * vd, (srcBottom - srcTop) / scale);
    }

    if (this.dots.size === 0) return;
    const size = Math.round(DITHER_CELL * vd);
    for (const d of this.dots.values()) ctx.clearRect(Math.round(d.hx * vd), Math.round(d.hy * vd) - top, size, size);
    ctx.fillStyle = DOT;
    ctx.beginPath();
    for (const d of this.dots.values()) ctx.rect(Math.round((d.hx + d.ox) * vd), Math.round((d.hy + d.oy) * vd) - top, size, size);
    ctx.fill();
  }
}
