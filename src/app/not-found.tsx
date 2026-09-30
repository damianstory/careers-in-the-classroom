import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <section className={styles.band} aria-labelledby="nf-title">
      <div className={styles.inner}>
        <span className={styles.ruler} aria-hidden="true" />
        <p className={styles.eyebrow}>
          <span className={styles.mark} aria-hidden="true" />
          Not found
        </p>
        <h1 id="nf-title" className={`display ${styles.title}`}>
          We couldn’t find that page.
        </h1>
        <p className={styles.text}>Try the example library instead.</p>
        <div className={styles.actions}>
          <Link href="/" className="btn btn-ink">
            Browse examples
          </Link>
        </div>
      </div>
    </section>
  );
}
