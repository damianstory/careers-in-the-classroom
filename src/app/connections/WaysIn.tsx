import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { browseExamples, browseRoles, type BrowseExample, type BrowseRoleGroup } from "@/lib/browse";
import { FAMILIES, THEMES, familyName } from "@/lib/browse-terms";
import { DOORS, withBrowseOrigin, type Door } from "@/lib/doors";
import type { LibraryFilter } from "@/lib/library-filter";
import { DoorLink } from "./DoorLink";
import { CompanySearch } from "./CompanySearch";
import styles from "./ways-in.module.css";

// The four ways in, as a row of cards on the hero. The course card keeps the current filter.
export function Doors({ door, courseHref, filter }: { door: Door; courseHref: string; filter: LibraryFilter }) {
  return (
    <nav id="doors" aria-label="Ways in" className={styles.doors}>
      {DOORS.map((d) => (
        <DoorLink
          key={d.id}
          to={d.id === "course" ? (door === "course" ? filter : {}) : null}
          href={d.id === "course" ? courseHref : `/connections?by=${d.id}`}
          scroll={false}
          className={styles.door}
          aria-current={door === d.id ? "page" : undefined}
        >
          <Icon name={d.icon} />
          <span className={styles.doorLabel}>{d.label}</span>
          <span className={styles.doorHint}>{d.hint}</span>
        </DoorLink>
      ))}
    </nav>
  );
}

// The organization's own logo, otherwise a monogram in the same box.
function OrgMark({ org, size = 48 }: { org: BrowseExample["org"]; size?: number }) {
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

function PanelHead({ title, note }: { title: string; note: string }) {
  return (
    <div className={styles.panelHead}>
      <h2 className={styles.panelTitle}>{title}</h2>
      <p className={styles.panelNote}>{note}</p>
    </div>
  );
}

function CompanyRow({ e, query }: { e: BrowseExample; query: string }) {
  return (
    <li className={styles.companyRow}>
      <OrgMark org={e.org} />
      <div className={styles.companyMain}>
        <p className={styles.companyName}>
          <Link href={withBrowseOrigin(e.href, { door: "company", company: query })} className={styles.stretch}>
            {e.org.name}
          </Link>
          <span className={styles.kind}>{e.org.kind}</span>
        </p>
        <p className={styles.companyTagline}>{e.org.tagline}</p>
        <p className={styles.companyQuestion}>
          <span className={styles.qMark}>Challenge</span> {e.question}
        </p>
        <ul className={styles.roleChips} aria-label="Kinds of work shown">
          {e.roles.map((r) =>
            r.scope === "elsewhere" ? (
              <li key={r.id} className={styles.elsewhere}>
                {r.title} <span>· at another employer</span>
              </li>
            ) : (
              <li key={r.id}>{r.title}</li>
            ),
          )}
        </ul>
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

function ExampleTile({ e }: { e: BrowseExample }) {
  return (
    <li className={`${styles.tile} ${styles.tileCompact}`}>
      {e.image && <Image src={e.image.src} alt="" sizes="(max-width: 640px) 100vw, 360px" className={styles.tileImg} />}
      <div className={styles.tileBody}>
        <p className={styles.tileOrg}>
          <OrgMark org={e.org} size={28} />
          {e.org.name}
        </p>
        <h4 className={styles.tileQ}>
          <Link href={withBrowseOrigin(e.href, { door: "challenge" })} className={styles.stretch}>
            {e.question}
          </Link>
        </h4>
      </div>
    </li>
  );
}

export function ChallengePanel() {
  const all = browseExamples();
  return (
    <>
      <PanelHead
        title="Start from a challenge"
        note="Real problems Calgary organizations are working on, grouped by what they are about."
      />
      <nav aria-label="Challenge groups" className={styles.groupJumps}>
        {THEMES.filter((t) => all.some((e) => e.theme === t.id)).map((t) => <a key={t.id} href={`#t-${t.id}`}>{t.name}</a>)}
      </nav>
      {THEMES.map((t) => {
        const list = all.filter((e) => e.theme === t.id);
        return (
          <section key={t.id} className={styles.theme} aria-labelledby={`t-${t.id}`}>
            <div className={styles.familyHead}>
              <h3 id={`t-${t.id}`} tabIndex={-1} className={styles.familyTitle}>
                {t.name} <span className={styles.count}>{list.length}</span>
              </h3>
              <p className={styles.familyBlurb}>{t.blurb}</p>
            </div>
            <ul className={styles.tileGrid}>
              {list.map((e) => (
                <ExampleTile key={e.slug} e={e} />
              ))}
            </ul>
          </section>
        );
      })}
    </>
  );
}

export function CompanyPanel({ query = "" }: { query?: string }) {
  const byName = [...browseExamples()].sort((a, b) => a.org.name.localeCompare(b.org.name));
  const matches = byName.filter((e) => e.org.name.toLowerCase().includes(query.toLowerCase()));
  return (
    <>
      <PanelHead
        title="Start from a company"
        note={`${byName.length} organizations, A to Z. Each one is working on a challenge you can bring into class.`}
      />
      <CompanySearch query={query} />
      {query && <p role="status" className={styles.panelNote}>{matches.length} of {byName.length} organizations match “{query}”.</p>}
      {matches.length === 0 && <p className={styles.empty}>No company matches. Try part of its name or clear your search.</p>}
      <ul className={styles.companyList}>
        {matches.map((e) => (
          <CompanyRow key={e.slug} e={e} query={query} />
        ))}
      </ul>
    </>
  );
}

function RoleList({ roles }: { roles: BrowseRoleGroup[] }) {
  return (
    <div className={styles.families}>
      {FAMILIES.map((f) => {
        const rows = roles.filter((r) => r.family === f.id);
        if (!rows.length) return null;
        return (
          <section key={f.id} className={styles.family} aria-labelledby={`fam-${f.id}`}>
            <div className={styles.familyHead}>
              <h3 id={`fam-${f.id}`} tabIndex={-1} className={styles.familyTitle}>
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
                  <ul className={styles.roleAt} aria-label={`Organizations connected to ${r.title.toLowerCase()}`}>
                    {r.at.map((a) => (
                      <li key={a.org.id}>
                        <Link
                          href={withBrowseOrigin(a.href, { door: "role" })}
                          className={`${styles.atLink} ${a.scope === "elsewhere" ? styles.elsewhere : ""}`}
                          title={a.question}
                        >
                          <OrgMark org={a.org} size={24} />
                          {a.org.name}
                          {a.scope === "elsewhere" && <span>· example only, work is at another employer</span>}
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

export function RolePanel() {
  const roles = browseRoles();
  return (
    <>
      <PanelHead
        title="Start from a kind of work"
        note="The kinds of work in these connections, grouped the way a student might think about them. Each name links to that person’s part of the connection."
      />
      <nav aria-label="Work groups" className={styles.groupJumps}>
        {FAMILIES.filter((f) => roles.some((r) => r.family === f.id)).map((f) => <a key={f.id} href={`#fam-${f.id}`}>{familyName(f.id)}</a>)}
      </nav>
      <RoleList roles={roles} />
    </>
  );
}
