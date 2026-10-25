import styles from "./discover.module.css";

/** The handheld shaker students pass around: a plain “?” cube, not the electronics inside it. */
export function Shaker({ className = "" }: { className?: string }) {
  return (
    <div className={`${styles.shaker} ${className}`} aria-hidden="true">
      <svg className={styles.shakerLines} viewBox="0 0 190 100" preserveAspectRatio="none">
        <path d="M14 30 q-10 20 0 40" /><path d="M2 38 q-6 12 0 24" /><path d="M176 30 q10 20 0 40" /><path d="M188 38 q6 12 0 24" />
      </svg>
      <div className={styles.shakerScene}>
        <div className={styles.shakerCube}>{Array.from({ length: 6 }, (_, i) => <i key={i}>?</i>)}</div>
      </div>
    </div>
  );
}
