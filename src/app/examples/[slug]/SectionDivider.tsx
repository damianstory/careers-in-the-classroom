"use client";

import { useEffect, useRef } from "react";
import styles from "./explore.module.css";

// The quiet band between two sections: "02 · Company". Its hairline draws left to right once, the
// first time the band scrolls into view. Without JS, above the fold or with reduced motion, the line
// is simply there. Nothing else moves.
export function SectionDivider({ num, label }: { num: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const band = ref.current;
    if (!band || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (band.getBoundingClientRect().top < window.innerHeight) return; // already seen: no motion
    band.dataset.armed = "";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        band.dataset.drawn = "";
        observer.disconnect();
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(band);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={styles.divider} aria-hidden="true">
      <span className={styles.dividerNum}>{num}</span>
      <span className={styles.dividerDot}>·</span>
      <span className={styles.dividerName}>{label}</span>
      <span className={styles.dividerLine} />
    </div>
  );
}
