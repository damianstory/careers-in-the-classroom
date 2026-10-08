import type { StaticImageData } from "next/image";
import ghgsat from "../../public/images/examples/ghgsat-graphic-novel.webp";
import wilder from "../../public/images/examples/wilder-institute-graphic-novel.webp";
import lithium from "../../public/images/examples/e3-lithium-graphic-novel.webp";

// Fictional editorial scenes, not evidence of company staff, equipment or facilities.
// Prompts and provenance: design/example-illustrations-2026-10-07/.
export const exampleImages: Partial<Record<string, { src: StaticImageData; alt: string }>> = {
  ghgsat: {
    src: ghgsat,
    alt: "Graphic-novel illustration of a scientist studying a colour-coded methane map on a screen, with a small satellite model on the desk.",
  },
  "wilder-institute": {
    src: wilder,
    alt: "Graphic-novel illustration of a field ecologist recording observations of a burrowing owl beside its burrow on the prairie.",
  },
  "e3-lithium": {
    src: lithium,
    alt: "Graphic-novel illustration of a process engineer comparing a flow diagram with two test columns on a laboratory separation rig.",
  },
};
