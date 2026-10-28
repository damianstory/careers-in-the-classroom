import { EvidenceTag, evidenceLegend } from "@/components/EvidenceTag";
import { SourceLink } from "@/components/SourceLink";
import type { Example } from "@/content";
import { courseFitTopic } from "@/lib/course-fit";
import { PagedPanel } from "./PagedPanel";
import styles from "./example.module.css";
import explore from "./explore.module.css";

// The Sources part: course fit, the page's one checked date and a closed evidence disclosure.
export function SourcesAndFit({ e, checked }: { e: Example; checked: string }) {
  const sourceLabel = (id: string) => e.sources.find((s) => s.id === id)?.label ?? id;
  return (
    <div className={`${styles.band} ${styles.rule} ${styles.sources}`}>
      <div className={styles.sourcesHead}>
        <h2 id="sources-title" data-dialog-focus="" tabIndex={-1} className={`display ${styles.h2}`}>
          Sources and course fit
        </h2>
        <p className={`${styles.checked} ${styles.marked}`} data-checked="">
          Sources checked {checked}
        </p>
      </div>
      <PagedPanel label="Sources and course fit" className={explore.stagePanel}>
      <div className={styles.twoCols}>
        <div>
          <p className={styles.colLabel}>Where it fits</p>
          <ul className={styles.fitList}>
            {e.courses.map((c) => (
              <li key={c.course}>
                <strong>{c.course}</strong>
                <span>
                  <span className="sr-only"> · </span>
                  {courseFitTopic(e, c)}
                </span>
              </li>
            ))}
          </ul>
          <p className={styles.note}>
            Editorial mapping to published CBE course topics. Pending educator review. No outcome-code alignment is claimed.
          </p>
        </div>
        <div>
          <p className={styles.colLabel}>Sources</p>
          <ul className={styles.sourceList}>
            {e.sources.map((s) => (
              <li key={s.id}>
                <SourceLink href={s.url}>{s.label}</SourceLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className={`${styles.note} ${styles.sourcesFoot}`}>
        Organization claims are reported as the organization states them. {e.org} has not reviewed or endorsed this page.
      </p>

      <details className={styles.evidence}>
        <summary>What we know, and how</summary>
        <p className={styles.legend}>{evidenceLegend}</p>
        <table className={styles.ledger}>
          <thead>
            <tr>
              <th scope="col">Type</th>
              <th scope="col">Claim</th>
              <th scope="col">How we know</th>
            </tr>
          </thead>
          <tbody>
            {e.ledger.map((row, i) => (
              <tr key={i}>
                <td className="mono">{row.type}</td>
                <td>
                  {row.type === "course fit" && <p>{e.courses.map((fit) => `${fit.course}: ${courseFitTopic(e, fit)}`).join("; ")}</p>}
                  {row.claim}
                  <span className={styles.cites}>Source: {row.sourceIds.map(sourceLabel).join("; ")}</span>
                </td>
                <td>
                  <EvidenceTag kind={row.kind}>{row.status}</EvidenceTag>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </details>
      </PagedPanel>
    </div>
  );
}
