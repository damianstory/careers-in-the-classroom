"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { Icon, type IconName } from "@/components/Icon";
import type { CompanyDoor, CourseDoor, RoleDoor } from "./data";
import styles from "./landing.module.css";

export type DoorId = "class" | "company" | "role";

const tabs: { id: DoorId; label: string; hint: string; icon: IconName }[] = [
  { id: "class", label: "My class", hint: "Start from the course you teach", icon: "book" },
  { id: "company", label: "A company", hint: "Start from a Calgary organization", icon: "building" },
  { id: "role", label: "A kind of job", hint: "Start from the people doing the work", icon: "users" },
];

const subjectOf = (name: string) => name.replace(/\s+\d+$/, "");

// The launchpad: three ways into the same library. It only links; filtering lives in the library.
export function Doors({
  courses,
  companies,
  roles,
  initial = "class",
  tone = "light",
}: {
  courses: CourseDoor[];
  companies: CompanyDoor[];
  roles: RoleDoor[];
  initial?: DoorId;
  tone?: "light" | "dark";
}) {
  const [tab, setTab] = useState<DoorId>(initial);
  const [query, setQuery] = useState("");
  const id = useId();
  const q = query.trim().toLowerCase();
  const shownCompanies = q
    ? companies.filter((c) => `${c.org} ${c.question} ${c.discipline}`.toLowerCase().includes(q))
    : companies;
  const subjects = [...new Set(courses.map((c) => subjectOf(c.name)))];

  return (
    <div className={styles.doors} data-tone={tone}>
      <div role="tablist" aria-label="Start from" className={styles.doorTabs}>
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            id={`${id}-${t.id}-tab`}
            aria-selected={tab === t.id}
            aria-controls={`${id}-${t.id}`}
            className={styles.doorTab}
            onClick={() => setTab(t.id)}
          >
            <Icon name={t.icon} className={styles.doorTabIcon} />
            <span>
              <span className={styles.doorTabLabel}>{t.label}</span>
              <span className={styles.doorTabHint}>{t.hint}</span>
            </span>
          </button>
        ))}
      </div>

      {tab === "class" && (
        <div role="tabpanel" id={`${id}-class`} aria-labelledby={`${id}-class-tab`} className={styles.doorPanel}>
          {subjects.map((s) => (
            <div key={s} className={styles.subjectRow}>
              <p className={styles.subjectName}>{s}</p>
              <ul className={styles.courseList}>
                {courses
                  .filter((c) => subjectOf(c.name) === s)
                  .map((c) => (
                    <li key={c.id}>
                      <Link href={c.href} className={styles.courseTile}>
                        <span className={styles.courseName}>{c.name}</span>
                        <span className={styles.courseCount}>
                          {c.count === 0 ? "None yet" : `${c.count} example${c.count === 1 ? "" : "s"}`}
                        </span>
                        <Icon name="arrowRight" small className={styles.courseArrow} />
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
          <p className={styles.doorNote}>Next, you choose your unit, and the library shows what fits it best.</p>
        </div>
      )}

      {tab === "company" && (
        <div role="tabpanel" id={`${id}-company`} aria-labelledby={`${id}-company-tab`} className={styles.doorPanel}>
          <label className={styles.companySearch}>
            <Icon name="search" small />
            <span className="sr-only">Find a company</span>
            <input
              type="search"
              placeholder={`Find one of ${companies.length} organizations`}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
          <ul className={styles.companyList}>
            {shownCompanies.map((c) => (
              <li key={c.slug}>
                <Link href={c.href} className={styles.companyRow}>
                  <span className={styles.logoBox} aria-hidden="true">
                    {c.logo ? (
                      // Official identification logos are shown as they are, never resampled.
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={c.logo.src} alt="" width={c.logo.width} height={c.logo.height} />
                    ) : (
                      <span className={styles.monogram}>{c.monogram}</span>
                    )}
                  </span>
                  <span className={styles.companyText}>
                    <span className={styles.companyName}>{c.org}</span>
                    <span className={styles.companyQ}>{c.question}</span>
                  </span>
                  <span className={styles.companyTag}>{c.discipline}</span>
                </Link>
              </li>
            ))}
            {shownCompanies.length === 0 && <li className={styles.doorNote}>No organization matches “{query}”.</li>}
          </ul>
        </div>
      )}

      {tab === "role" && (
        <div role="tabpanel" id={`${id}-role`} aria-labelledby={`${id}-role-tab`} className={styles.doorPanel}>
          <ul className={styles.roleList}>
            {roles.map((r) => (
              <li key={r.id} className={styles.roleRow}>
                <div className={styles.roleText}>
                  <p className={styles.roleTitle}>{r.title}</p>
                  <p className={styles.roleSummary}>{r.summary}</p>
                </div>
                <p className={styles.roleWhere}>
                  <span className={styles.roleWhereLabel}>
                    {r.examples.length} example{r.examples.length === 1 ? "" : "s"}
                  </span>
                  {r.examples.map((e, i) => (
                    <span key={e.slug}>
                      {i > 0 && ", "}
                      <Link href={`/examples/${e.slug}`}>{e.org}</Link>
                    </span>
                  ))}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
