import Image from "next/image";
import { storyDiagrams } from "@/content/example-records";
import type { ClassroomStory } from "@/content";
import methane from "../../../../public/images/story-diagrams/methane-graphic-novel.webp";
import owls from "../../../../public/images/story-diagrams/owl-recovery-graphic-novel.webp";
import lithium from "../../../../public/images/story-diagrams/lithium-separation-graphic-novel.webp";
import { PagedPanel } from "./PagedPanel";
import styles from "./story-diagram.module.css";

// Numbered keys stay live and readable on phones.
// Briefs and visual review: design/story-diagrams-2026-10-07/.
export const diagrams = {
  methane: {
    image: methane,
    heading: "Measuring methane with reflected sunlight",
    steps: [
      "Sunlight travels down to the ground, including infrared we can’t see.",
      "Reflected sunlight travels back up through the air toward the satellite.",
      "A spectrometer splits the received light by wavelength. It sends out no light of its own.",
    ],
    note: "Methane is invisible; the dashed outline marks its location. The graph shows light received vertically and wavelength horizontally: absorption makes dips, not zero light.",
    detail: "Methane measurement band: about 1,630–1,675 nanometres. Satellite altitude: about 500 km.",
  },
  "owl-recovery": {
    image: owls,
    heading: "From care to evidence",
    steps: [
      "Vulnerable young owls face a difficult early life stage.",
      "Care through winter supports food, welfare and health.",
      "Pairs return to prairie habitat in spring.",
      "Monitor survival, breeding and offspring after release.",
    ],
    note: "The return arrow shows evidence informing the next intervention. A release is a step; recovery is the question.",
  },
  "lithium-separation": {
    image: lithium,
    heading: "From mixture to material",
    steps: [
      "Mixed brine contains lithium alongside other substances.",
      "Separation recovers a lithium-rich stream.",
      "Purify and convert toward battery-grade material.",
      "Manage the remaining material in a separate stream.",
    ],
    note: "The return arrow shows test results informing design. Compare recovery, purity, water and energy. The dots represent a conceptual mixture, not particular chemical species or measured amounts.",
  },
};

// A hand-built diagram or an approved research diagram, with the same live explanations.
export function storyDiagram(story: ClassroomStory) {
  return story.diagramKind === "research"
    ? storyDiagrams[story.illustrationSlug ?? ""]
    : diagrams[story.diagramKind];
}

export function StoryDiagram({ story, headingId }: { story: ClassroomStory; headingId: string }) {
  const diagram = storyDiagram(story);
  if (!diagram) return null;
  const width = typeof diagram.image === "string" ? 1344 : diagram.image.width;
  const height = typeof diagram.image === "string" ? 756 : diagram.image.height;
  return (
    <section className={styles.band} aria-labelledby={headingId}>
      <div className={styles.content}>
        <header className={styles.intro}>
        <p className={styles.eyebrow}>Schematic · not to scale</p>
        <h3 id={headingId} className={styles.heading}>{diagram.heading}</h3>
        </header>
        <div className={styles.visual}>
        <figure className={styles.figure}>
          <Image src={diagram.image} width={width} height={height} alt={story.diagramAlt} sizes="(max-width: 720px) 100vw, 680px" className={styles.image} style={{ aspectRatio: `${width} / ${height}`, objectFit: "contain" }} />
        </figure>
        </div>
        <div className={styles.explanation}>
        <PagedPanel label="Diagram key" inline>
        <ol className={styles.key}>
          {diagram.steps.map((step, index) => (
            <li key={step}>
              <span className={styles.number} aria-hidden="true">{index + 1}</span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
        <p className={styles.note}>{diagram.note}</p>
        {"detail" in diagram && typeof diagram.detail === "string" && <p className={styles.detail}>{diagram.detail}</p>}
        </PagedPanel>
        </div>
      </div>
    </section>
  );
}
