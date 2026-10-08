import Image from "next/image";
import type { ClassroomStory } from "@/content";
import methane from "../../../../public/images/story-diagrams/methane-graphic-novel.webp";
import owls from "../../../../public/images/story-diagrams/owl-recovery-graphic-novel.webp";
import lithium from "../../../../public/images/story-diagrams/lithium-separation-graphic-novel.webp";
import styles from "./story-diagram.module.css";

// Numbered keys stay live and readable on phones.
// Briefs and visual review: design/story-diagrams-2026-10-07/.
const diagrams = {
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

export function StoryDiagram({ story, headingId }: { story: ClassroomStory; headingId: string }) {
  const diagram = diagrams[story.diagramKind];
  return (
    <section className={styles.band} aria-labelledby={headingId}>
      <div className={styles.content}>
        <p className={styles.eyebrow}>Schematic · not to scale</p>
        <h2 id={headingId} className={styles.heading}>{diagram.heading}</h2>
        <figure className={styles.figure}>
          <Image src={diagram.image} alt={story.diagramAlt} sizes="(max-width: 720px) 100vw, 680px" className={styles.image} />
        </figure>
        <ol className={styles.key}>
          {diagram.steps.map((step, index) => (
            <li key={step}>
              <span className={styles.number} aria-hidden="true">{index + 1}</span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
        <p className={styles.note}>{diagram.note}</p>
        {"detail" in diagram && <p className={styles.detail}>{diagram.detail}</p>}
      </div>
    </section>
  );
}
