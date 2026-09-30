import Link from "next/link";
import { getDetails, type Example } from "@/content";
import { Icon } from "./Icon";
import { ExampleCardDiagram, RulerTicks, cardDiagramText } from "./ExampleCardDiagram";
import styles from "./ExampleCard.module.css";

const MAX_TAGS = 3;

// The card's top half is an instrument screen: the story schematic where there is one, with a
// type-only fallback for future examples. Decorative: the heading link carries the card's name.
function Screen({ e }: { e: Example }) {
  const kind = e.detailsId ? getDetails(e.detailsId)?.story.diagramKind : undefined;
  const text = kind ? cardDiagramText[kind] : undefined;
  return (
    <div className={styles.screen} aria-hidden="true">
      <p className={styles.screenBar}>
        <span className={styles.screenLabel}>{text?.label ?? e.discipline}</span>
        <RulerTicks />
      </p>
      {kind ? (
        <div className={styles.plot}>
          <ExampleCardDiagram kind={kind} />
        </div>
      ) : (
        <div className={`${styles.plot} ${styles.field}`}>
          <span className={styles.fieldOrg}>{e.org}</span>
        </div>
      )}
      {text && <p className={styles.caption}>{text.caption}</p>}
    </div>
  );
}

// The whole card is one link (the heading's link stretches over it), so the target is large
// but a screen reader hears only the question.
export function ExampleCard({ e, href, why }: { e: Example; href: string; why?: string }) {
  const details = e.detailsId ? getDetails(e.detailsId) : undefined;
  const roles = details?.roleIds.length ?? e.roles.length;
  const pathways = details?.pathwayIds.length ?? e.pathways.length;
  const extra = e.courses.length - MAX_TAGS;
  return (
    <article className={styles.card}>
      <Screen e={e} />
      <div className={styles.body}>
        <p className={styles.eyebrow}>
          <span className={styles.square} aria-hidden="true" />
          {e.discipline} · {e.org}
        </p>
        <h3 className={styles.q}>
          <Link href={href} className={styles.link}>
            {e.question}
          </Link>
        </h3>
        {why && <p className={styles.why}>{why}</p>}
        <p className={styles.local}>{e.localShort}</p>
        <ul className={styles.tags} aria-label="Courses">
          {e.courses.slice(0, MAX_TAGS).map((c) => (
            <li key={c.course} className="tag tag-neutral">
              {c.course}
            </li>
          ))}
          {extra > 0 && <li className="tag tag-neutral">+{extra}</li>}
        </ul>
        <p className={styles.meta}>
          <span>
            {roles} {roles === 1 ? "role" : "roles"} · {pathways} {pathways === 1 ? "pathway" : "pathways"}
            {e.newsId ? (
              <>
                {" · "}
                <span className={styles.metaAccent}>Recent development</span>
              </>
            ) : null}
          </span>
          <Icon name="arrowRight" small className={styles.arrow} />
        </p>
      </div>
    </article>
  );
}
