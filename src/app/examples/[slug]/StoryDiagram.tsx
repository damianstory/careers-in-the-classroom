import type { ClassroomStory } from "@/content";
import { MethanePanel } from "./MethaneDiagram";
import styles from "./story-diagram.module.css";

// Editorial schematics, not company equipment, measured results or biological models.
// Each renders its own band of the classroom story: the methane instrument panel (GHGSat), or a
// full-width dark green flow with a loop that runs from the last stage back to the first.

interface Stage {
  tag: string;
  title: string;
  text: string;
  strong?: boolean;
}

interface Flow {
  heading: string;
  icon: React.ReactNode;
  /** Stages in order, one array per column; a column with two stages is a branch. */
  columns: Stage[][];
  feedback: string;
  note: string;
}

const owlIcon = (
  <>
    <path d="M14 20 12 8 26 16h12L52 8l-2 12v18c0 12-8 19-18 19S14 50 14 38Z" />
    <circle cx="24" cy="29" r="8" />
    <circle cx="40" cy="29" r="8" />
    <circle cx="24" cy="29" r="2" />
    <circle cx="40" cy="29" r="2" />
    <path d="m28 39 4 5 4-5M22 57v5m20-5v5" />
  </>
);

const flaskIcon = (
  <>
    <path d="M21 6h22M25 6v20L10 51q-3 7 5 7h34q8 0 5-7L39 26V6M18 40h28" />
    <circle cx="26" cy="47" r="2" />
    <circle cx="37" cy="49" r="2" />
  </>
);

const FLOWS: Record<Exclude<ClassroomStory["diagramKind"], "methane">, Flow> = {
  "owl-recovery": {
    heading: "From care to evidence",
    icon: owlIcon,
    columns: [
      [{ tag: "01", title: "Vulnerable young owls", text: "A difficult early life stage" }],
      [{ tag: "02", title: "Care through winter", text: "Food, welfare and health checks" }],
      [{ tag: "03", title: "Release in spring", text: "Pairs return to prairie habitat" }],
      [{ tag: "04", title: "Follow what happens", text: "Survival, breeding and offspring", strong: true }],
    ],
    feedback: "↶ Evidence informs the next intervention",
    note: "A release is a step. Recovery is the question.",
  },
  "lithium-separation": {
    heading: "From mixture to material",
    icon: flaskIcon,
    columns: [
      [{ tag: "01", title: "Mixed brine", text: "Lithium dissolved alongside other substances" }],
      [{ tag: "02", title: "Separate", text: "Recover a lithium-rich stream", strong: true }],
      [
        { tag: "03a", title: "Purify + convert", text: "Toward battery-grade material" },
        { tag: "03b", title: "Other streams", text: "Remaining material also needs managing" },
      ],
    ],
    feedback: "↶ Test results inform process design",
    note: "Compare recovery, purity, water and energy.",
  },
};

export function StoryDiagram({ story, headingId }: { story: ClassroomStory; headingId: string }) {
  if (story.diagramKind === "methane") {
    return (
      <section className={styles.instrumentBand} aria-labelledby={headingId}>
        <figure className={styles.figure}>
          <MethanePanel headingId={headingId} desc={story.diagramAlt} />
          <figcaption className={styles.caption}>
            <span>{story.caption}</span>
            <span className={styles.provenance}>{story.diagramProvenance}</span>
          </figcaption>
        </figure>
      </section>
    );
  }

  const flow = FLOWS[story.diagramKind];
  return (
    <section className={styles.flowBand} aria-labelledby={headingId}>
      <div className={styles.flowHead}>
        <h2 id={headingId} className={styles.panelTitle}>
          {flow.heading}
        </h2>
        <svg viewBox="0 0 64 64" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true" focusable="false">
          {flow.icon}
        </svg>
      </div>
      <figure className={styles.flowFigure}>
        <div role="img" aria-label={story.diagramAlt} className={styles.flowBody}>
          <div aria-hidden="true">
            <div className={styles.loopArea} style={{ "--cols": flow.columns.length } as React.CSSProperties}>
              <div className={styles.stages}>
                {flow.columns.map((column, i) => (
                  <div key={i} className={styles.column}>
                    {column.map((s) => (
                      <div key={s.tag} className={`${styles.stage} ${s.strong ? styles.stageStrong : ""}`}>
                        <p className={styles.stageTag}>{s.tag}</p>
                        <p className={styles.stageTitle}>{s.title}</p>
                        <p className={styles.stageText}>{s.text}</p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <div className={styles.loop}>
                <svg className={styles.loopSvg} focusable="false">
                  <rect className={styles.loopTrack} x="1" y="1" width="100%" height="100%" rx="28" />
                  <rect className={`${styles.loopTrack} ${styles.loopFlow}`} x="1" y="1" width="100%" height="100%" rx="28" />
                </svg>
                <p className={styles.feedback}>{flow.feedback}</p>
              </div>
            </div>
            <p className={styles.note}>{flow.note}</p>
          </div>
        </div>
        <figcaption className={styles.flowCaption}>
          <span>{story.caption}</span>
          <span className={styles.flowProvenance}>{story.diagramProvenance}</span>
        </figcaption>
      </figure>
    </section>
  );
}
