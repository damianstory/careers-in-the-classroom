import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import type { BrowseExample, BrowseRoleGroup } from "@/lib/browse";
import { FAMILIES, familyName, themeName } from "@/lib/browse-terms";
import styles from "./browse.module.css";

const VERSIONS = [
  { href: "/preview/a", label: "A · Four ways in" },
  { href: "/preview/b", label: "B · One list, many filters" },
  { href: "/preview/c", label: "C · Build a sentence" },
];

// Marks the page as a design prototype and lets a reviewer flip between versions.
export function PreviewBar({ current }: { current: string }) {
  return (
    <div className={styles.previewBar}>
      <div className={styles.frame}>
        <p className={styles.previewLabel}>
          <span className={styles.dot} aria-hidden="true" />
          Prototype: search and browse
        </p>
        <nav aria-label="Prototype versions" className={styles.previewNav}>
          <Link href="/preview" aria-current={current === "/preview" ? "page" : undefined}>
            Overview
          </Link>
          {VERSIONS.map((v) => (
            <Link key={v.href} href={v.href} aria-current={current === v.href ? "page" : undefined}>
              {v.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}

// The organization's own logo where we have one, otherwise a monogram in the same box.
export function OrgMark({ org, size = 48 }: { org: BrowseExample["org"]; size?: number }) {
  if (org.logo) {
    return (
      <span className={`${styles.mark} ${org.logo.onDark ? styles.markDark : ""}`} style={{ width: size, height: size }}>
        <Image src={org.logo.src} alt="" width={org.logo.width} height={org.logo.height} unoptimized className={styles.markImg} />
      </span>
    );
  }
  return (
    <span className={`${styles.mark} ${styles.monogram}`} style={{ width: size, height: size, fontSize: size * 0.34 }} aria-hidden="true">
      {org.initials}
    </span>
  );
}

export function CompanyRow({ e, showRoles = true }: { e: BrowseExample; showRoles?: boolean }) {
  return (
    <li className={styles.companyRow}>
      <OrgMark org={e.org} />
      <div className={styles.companyMain}>
        <p className={styles.companyName}>
          <Link href={e.href} className={styles.stretch}>
            {e.org.name}
          </Link>
          <span className={styles.kind}>{e.org.kind}</span>
        </p>
        <p className={styles.companyTagline}>{e.org.tagline}</p>
        <p className={styles.companyQuestion}>
          <span className={styles.qMark}>Challenge</span> {e.question}
        </p>
        {showRoles && (
          <ul className={styles.roleChips} aria-label="Kinds of work shown">
            {e.roles.map((r) => (
              <li key={r.id}>{r.title}</li>
            ))}
          </ul>
        )}
      </div>
      <div className={styles.companySide}>
        <p className={styles.where}>
          <Icon name="pin" small />
          {e.localShort}
        </p>
        <ul className={styles.courseTags} aria-label="Courses">
          {e.courses.map((c) => (
            <li key={c.name} className="tag tag-neutral">
              {c.name}
            </li>
          ))}
        </ul>
      </div>
      <Icon name="arrowRight" className={styles.rowArrow} />
    </li>
  );
}

export function ExampleTile({ e, compact }: { e: BrowseExample; compact?: boolean }) {
  return (
    <li className={`${styles.tile} ${compact ? styles.tileCompact : ""}`}>
      {e.image && (
        <Image src={e.image.src} alt="" sizes="(max-width: 640px) 100vw, 360px" className={styles.tileImg} />
      )}
      <div className={styles.tileBody}>
        <p className={styles.tileOrg}>
          <OrgMark org={e.org} size={28} />
          {e.org.name}
        </p>
        <h3 className={styles.tileQ}>
          <Link href={e.href} className={styles.stretch}>
            {e.question}
          </Link>
        </h3>
        {!compact && (
          <p className={styles.tileMeta}>
            {themeName(e.theme)} · {e.courses.map((c) => c.name).join(", ")}
          </p>
        )}
        {!compact && (
          <p className={styles.tileMeta}>
            <Icon name="users" small /> {e.roles.map((r) => r.title).join(" · ")}
          </p>
        )}
      </div>
    </li>
  );
}

export function RoleList({ roles }: { roles: BrowseRoleGroup[] }) {
  return (
    <div className={styles.families}>
      {FAMILIES.map((f) => {
        const rows = roles.filter((r) => r.family === f.id);
        if (!rows.length) return null;
        return (
          <section key={f.id} className={styles.family} aria-labelledby={`fam-${f.id}`}>
            <div className={styles.familyHead}>
              <h3 id={`fam-${f.id}`} className={styles.familyTitle}>
                {familyName(f.id)}
              </h3>
              <p className={styles.familyBlurb}>{f.blurb}</p>
            </div>
            <ul className={styles.roleRows}>
              {rows.map((r) => (
                <li key={r.id} className={styles.roleRow}>
                  <div>
                    <p className={styles.roleTitle}>{r.title}</p>
                    <p className={styles.roleSummary}>{r.summary}</p>
                  </div>
                  <ul className={styles.roleAt} aria-label={`Where ${r.title.toLowerCase()} happens in Calgary`}>
                    {r.at.map((a) => (
                      <li key={a.org.id}>
                        <Link href={a.href} className={styles.atLink} title={a.question}>
                          <OrgMark org={a.org} size={24} />
                          {a.org.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
