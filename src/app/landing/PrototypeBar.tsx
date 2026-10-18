import Link from "next/link";
import styles from "./landing.module.css";

const versions = [
  { id: "a", href: "/landing/a", label: "A · Explain, then launch" },
  { id: "b", href: "/landing/b", label: "B · Show one example" },
  { id: "c", href: "/landing/c", label: "C · Launchpad first" },
];

// Review aid only: lets Damian flip between the prototypes. Not part of any design.
export function PrototypeBar({ current }: { current: "a" | "b" | "c" | "about" | "index" }) {
  return (
    <nav className={styles.protoBar} aria-label="Landing page prototypes">
      <Link href="/landing" className={styles.protoTitle}>
        Landing prototypes
      </Link>
      <ul className={styles.protoList}>
        {versions.map((v) => (
          <li key={v.id}>
            <Link href={v.href} aria-current={current === v.id ? "page" : undefined} className={styles.protoLink}>
              {v.label}
            </Link>
          </li>
        ))}
        <li>
          <Link href="/" className={styles.protoLink}>
            Current home
          </Link>
        </li>
      </ul>
    </nav>
  );
}
