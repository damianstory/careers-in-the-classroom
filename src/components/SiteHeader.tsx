"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useSignedUp } from "@/lib/session";
import { useDialogs } from "./dialogs/DialogProvider";
import { Icon } from "./Icon";
import styles from "./SiteHeader.module.css";

const nav = [
  { href: "/", label: "Examples", match: (p: string) => p === "/" || p.startsWith("/examples") },
  { href: "/get-involved", label: "List your company", match: (p: string) => p.startsWith("/get-involved") },
];

export function SiteHeader() {
  const pathname = usePathname();
  const onHome = pathname === "/";
  const [pastHero, setPastHero] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  // Close the menu whenever the route changes (adjusting state during render, not in an effect).
  const [menuRoute, setMenuRoute] = useState(pathname);
  if (menuRoute !== pathname) {
    setMenuRoute(pathname);
    setMenuOpen(false);
  }
  const signedUp = useSignedUp();
  const { openSpeaker, openSignup } = useDialogs();

  useEffect(() => {
    if (!onHome) return;
    // Solid as soon as the page moves, so the header never sits over scrolling text.
    const onScroll = () => setPastHero(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onHome]);

  const over = onHome && !pastHero && !menuOpen;

  return (
    <header className={`${styles.header} ${over ? styles.over : ""}`}>
      <div className={styles.row}>
        <Link href="/" className={styles.brand} aria-label="Careers in the Classroom, home">
          <span className={styles.name}>Careers in the Classroom</span>
        </Link>

        <nav aria-label="Main" className={styles.nav}>
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className={styles.navlink} aria-current={n.match(pathname) ? "page" : undefined}>
              {n.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <button type="button" className={styles.ghost} onClick={() => openSpeaker()}>
            <Icon name="message" />
            Request a speaker
          </button>
          {signedUp ? (
            <span className={styles.signedUp}>
              <Icon name="check" small />
              Signed up
            </span>
          ) : (
            <button type="button" className={styles.signup} onClick={() => openSignup()}>
              Sign up free
            </button>
          )}
        </div>

        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={menuOpen}
          aria-controls="site-menu"
          aria-label="Menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <Icon name={menuOpen ? "close" : "menu"} className={styles.menuIcon} />
        </button>
      </div>

      {menuOpen && (
        <div id="site-menu" className={styles.menu}>
          <nav aria-label="Main (mobile)" className={styles.menuNav}>
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className={styles.menuLink}
                aria-current={n.match(pathname) ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <button
            type="button"
            className={`${styles.ghost} ${styles.menuAction}`}
            onClick={() => {
              setMenuOpen(false);
              openSpeaker();
            }}
          >
            <Icon name="message" />
            Request a speaker
          </button>
          {!signedUp && (
            <button
              type="button"
              className={`${styles.signup} ${styles.menuAction}`}
              onClick={() => {
                setMenuOpen(false);
                openSignup();
              }}
            >
              Sign up free
            </button>
          )}
        </div>
      )}
    </header>
  );
}
