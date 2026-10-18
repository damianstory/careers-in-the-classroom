import type { Metadata } from "next";
import Link from "next/link";
import { Icon, type IconName } from "@/components/Icon";
import { QUERY_MAX, THEMES, browseCourses, browseExamples, browseRoles, matchesQuery } from "@/lib/browse";
import { CompanyRow, ExampleTile, PreviewBar, RoleList } from "../BrowseParts";
import styles from "../browse.module.css";

export const metadata: Metadata = { title: "Prototype A: four ways in" };

const DOORS: { id: string; label: string; hint: string; icon: IconName }[] = [
  { id: "course", label: "Your course", hint: "Start from what you’re teaching", icon: "book" },
  { id: "challenge", label: "A challenge", hint: "Start from a real-world problem", icon: "compass" },
  { id: "company", label: "A company", hint: "Start from who’s in Calgary", icon: "building" },
  { id: "role", label: "A kind of work", hint: "Start from the people and jobs", icon: "users" },
];

// Version A: four equal doors above one panel. The choice and any search live in the URL.
export default async function PreviewA({ searchParams }: PageProps<"/preview/a">) {
  const params = await searchParams;
  const raw = Array.isArray(params.by) ? params.by[0] : params.by;
  const by = DOORS.some((d) => d.id === raw) ? raw! : "course";
  const q = (Array.isArray(params.q) ? params.q[0] : params.q)?.trim().slice(0, QUERY_MAX) ?? "";
  const all = browseExamples();
  const hits = q ? all.filter((e) => matchesQuery(e, q)) : [];
  const byName = [...all].sort((a, b) => a.org.name.localeCompare(b.org.name));

  return (
    <>
      <PreviewBar current="/preview/a" />
      <div className={styles.page}>
        <header className={`${styles.frame} ${styles.intro}`}>
          <p className="eyebrow">{all.length} Calgary connections</p>
          <h1 className={styles.h1}>How do you want to start?</h1>
          <p className={styles.lead}>
            Every example connects a science idea to a real Calgary organization and the people doing the work. Pick a way in.
          </p>
          {/* Keyed by the URL so an edited box resets when a link clears the search or changes door. */}
          <form key={`${by}|${q}`} action="/preview/a" className={styles.searchRow} role="search">
            <input type="hidden" name="by" value={by} />
            <label htmlFor="qa" className="sr-only">
              Search everything
            </label>
            <Icon name="search" className={styles.searchIcon} />
            <input
              id="qa"
              name="q"
              defaultValue={q}
              maxLength={QUERY_MAX}
              className={`input ${styles.searchInput}`}
              placeholder="Try “water”, “drone”, “Chemistry 20” or “bakery”"
            />
            <button className="btn btn-ink">Search</button>
          </form>
        </header>

        {q ? (
          <section className={`${styles.frame} ${styles.panel}`} aria-labelledby="hits">
            <div className={styles.panelHead}>
              <h2 id="hits" className={styles.h2}>
                {hits.length} {hits.length === 1 ? "match" : "matches"} for “{q}”
              </h2>
              <Link href={`/preview/a?by=${by}`} className="linkbtn">
                Clear search
              </Link>
            </div>
            {hits.length ? (
              <ul className={styles.companyList}>
                {hits.map((e) => (
                  <CompanyRow key={e.slug} e={e} />
                ))}
              </ul>
            ) : (
              <p className={styles.empty}>Nothing matches yet. Try a broader word, or pick a way in below.</p>
            )}
          </section>
        ) : null}

        <nav aria-label="Ways in" className={`${styles.frame} ${styles.doors}`}>
          {DOORS.map((d) => (
            <Link
              key={d.id}
              href={`/preview/a?by=${d.id}`}
              scroll={false}
              className={styles.door}
              aria-current={by === d.id ? "page" : undefined}
            >
              <Icon name={d.icon} />
              <span className={styles.doorLabel}>{d.label}</span>
              <span className={styles.doorHint}>{d.hint}</span>
            </Link>
          ))}
        </nav>

        <section className={`${styles.frame} ${styles.panel}`} aria-label={DOORS.find((d) => d.id === by)!.label}>
          {by === "course" && (
            <ul className={styles.courseGrid}>
              {browseCourses().map((c) => (
                <li key={c.id} className={styles.courseCard}>
                  <h2 className={styles.courseName}>{c.name}</h2>
                  <p className={styles.courseMeta}>
                    {c.examples} {c.examples === 1 ? "example" : "examples"} · {c.ready} of {c.total} units ready
                  </p>
                  <ul className={styles.unitList}>
                    {c.units.map((u) => (
                      <li key={u.id}>
                        {u.ready ? (
                          <Link href={`/?course=${c.id}&unit=${u.id}`} className={styles.unitLink}>
                            <span>{u.name}</span>
                            <span className={styles.unitCount}>{u.note}</span>
                          </Link>
                        ) : (
                          <span className={styles.unitOff}>
                            <span>{u.name}</span>
                            <span className={styles.unitCount}>Not yet</span>
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          )}

          {by === "challenge" &&
            THEMES.map((t) => {
              const list = all.filter((e) => e.theme === t.id);
              return (
                <section key={t.id} className={styles.theme} aria-labelledby={`t-${t.id}`}>
                  <div className={styles.familyHead}>
                    <h2 id={`t-${t.id}`} className={styles.familyTitle}>
                      {t.name} <span className={styles.count}>{list.length}</span>
                    </h2>
                    <p className={styles.familyBlurb}>{t.blurb}</p>
                  </div>
                  <ul className={styles.tileGrid}>
                    {list.map((e) => (
                      <ExampleTile key={e.slug} e={e} compact />
                    ))}
                  </ul>
                </section>
              );
            })}

          {by === "company" && (
            <>
              <p className={styles.panelNote}>
                {byName.length} organizations, A to Z. Each one is working on one challenge you can bring into class.
              </p>
              <ul className={styles.companyList}>
                {byName.map((e) => (
                  <CompanyRow key={e.slug} e={e} />
                ))}
              </ul>
            </>
          )}

          {by === "role" && (
            <>
              <p className={styles.panelNote}>
                The kinds of work in the library, grouped the way a student might think about them. Each name links to that
                person’s part of the example.
              </p>
              <RoleList roles={browseRoles()} />
            </>
          )}
        </section>
      </div>
    </>
  );
}
