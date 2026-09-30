import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.ruler} aria-hidden="true" />
      <p className={styles.place}>
        <span className={styles.mark} aria-hidden="true" />
        Calgary, Alberta
      </p>
      <div className={styles.row}>
        <p className={styles.wordmark}>Careers in the Classroom</p>
      </div>
    </footer>
  );
}
