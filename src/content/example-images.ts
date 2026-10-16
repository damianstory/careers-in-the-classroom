import expansion0 from "../../public/images/examples/botaneco-graphic-novel.webp";
import expansion1 from "../../public/images/examples/nanalysis-graphic-novel.webp";
import expansion2 from "../../public/images/examples/exergy-solutions-graphic-novel.webp";
import expansion3 from "../../public/images/examples/livestock-water-recycling-graphic-novel.webp";
import expansion4 from "../../public/images/examples/avmax-graphic-novel.webp";
import expansion5 from "../../public/images/examples/northern-rna-graphic-novel.webp";
import expansion6 from "../../public/images/examples/aerium-analytics-graphic-novel.webp";
import expansion7 from "../../public/images/examples/geologicai-graphic-novel.webp";
import expansion8 from "../../public/images/examples/tangent-design-engineering-graphic-novel.webp";
import expansion9 from "../../public/images/examples/foremost-graphic-novel.webp";
import expansion10 from "../../public/images/examples/carbonova-graphic-novel.webp";
import expansion11 from "../../public/images/examples/summit-lithium-technologies-graphic-novel.webp";
import expansion12 from "../../public/images/examples/veerum-graphic-novel.webp";
import expansion13 from "../../public/images/examples/eguana-technologies-graphic-novel.webp";
import expansion14 from "../../public/images/examples/ftg-aerospace-calgary-graphic-novel.webp";
import type { StaticImageData } from "next/image";
import ghgsat from "../../public/images/examples/ghgsat-graphic-novel.webp";
import wilder from "../../public/images/examples/wilder-institute-graphic-novel.webp";
import lithium from "../../public/images/examples/e3-lithium-graphic-novel.webp";

// Fictional editorial scenes, not evidence of company staff, equipment or facilities.
// Prompts and provenance: design/example-illustrations-2026-10-07/.
export const exampleImages: Partial<Record<string, { src: StaticImageData; alt: string }>> = {
  "botaneco": { src: expansion0, alt: "Graphic-novel illustration. A scientist comparing oilseed ingredient fractions beside a centrifuge." },
  "nanalysis": { src: expansion1, alt: "Graphic-novel illustration. A scientist placing a sample tube into a benchtop NMR instrument beside a spectrum." },
  "exergy-solutions": { src: expansion2, alt: "Graphic-novel illustration. An engineer measuring a metal bracket beside fabrication equipment." },
  "livestock-water-recycling": { src: expansion3, alt: "Graphic-novel illustration. A technician comparing sample jars beside a pilot water-treatment system." },
  "avmax": { src: expansion4, alt: "Graphic-novel illustration. An aircraft technician inspecting a removed brake component in a hangar." },
  "northern-rna": { src: expansion5, alt: "Graphic-novel illustration. A bioprocess scientist checking sample vials and batch records." },
  "aerium-analytics": { src: expansion6, alt: "Graphic-novel illustration. A drone operator beside a bird-shaped robotic aircraft near an airfield." },
  "geologicai": { src: expansion7, alt: "Graphic-novel illustration. A geoscientist examining rock core beside scanning equipment and measurement displays." },
  "tangent-design-engineering": { src: expansion8, alt: "Graphic-novel illustration. An engineer comparing a flow drawing with a demonstration skid." },
  "foremost": { src: expansion9, alt: "Graphic-novel illustration. An engineer inspecting a broad vehicle track in a workshop." },
  "carbonova": { src: expansion10, alt: "Graphic-novel illustration. A scientist examining a carbon-material sample beside a small reactor." },
  "summit-lithium-technologies": { src: expansion11, alt: "Graphic-novel illustration. A technician inspecting sorbent material beside test columns." },
  "veerum": { src: expansion12, alt: "Graphic-novel illustration. A spatial-data specialist comparing a point cloud with a digital site model." },
  "eguana-technologies": { src: expansion13, alt: "Graphic-novel illustration. An engineer checking energy-storage controls beside closed battery cabinets." },
  "ftg-aerospace-calgary": { src: expansion14, alt: "Graphic-novel illustration. An avionics engineer testing a circuit board beside signal-measurement equipment." },
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
