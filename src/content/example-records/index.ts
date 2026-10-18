import o2PlanningDesign from "./o2-planning-design";
import entuitive from "./entuitive";
import philSebastian from "./phil-sebastian";
import brokenPencilStudios from "./broken-pencil-studios";
import cpkc from "./cpkc";
import watersmart from "./watersmart";
import integratedSustainability from "./integrated-sustainability";
import traceAssociates from "./trace-associates";
import rjcEngineers from "./rjc-engineers";
import calgaryItalianBakery from "./calgary-italian-bakery";
import joeMediaGroup from "./joe-media-group";
import cblBakeriesCinnaroll from "./cbl-bakeries-cinnaroll";
import islEngineering from "./isl-engineering";
import clearbakk from "./clearbakk";
import botaneco from "./botaneco";
import nanalysis from "./nanalysis";
import exergySolutions from "./exergy-solutions";
import livestockWaterRecycling from "./livestock-water-recycling";
import avmax from "./avmax";
import northernRna from "./northern-rna";
import aeriumAnalytics from "./aerium-analytics";
import geologicai from "./geologicai";
import tangentDesignEngineering from "./tangent-design-engineering";
import foremost from "./foremost";
import carbonova from "./carbonova";
import summitLithiumTechnologies from "./summit-lithium-technologies";
import veerum from "./veerum";
import eguanaTechnologies from "./eguana-technologies";
import ftgAerospaceCalgary from "./ftg-aerospace-calgary";
import type { ExampleRecord, StoryDiagramImage } from "../types";

// One file per researched example. Library order follows this list.
export const exampleRecords: ExampleRecord[] = [
  o2PlanningDesign,
  entuitive,
  philSebastian,
  brokenPencilStudios,
  cpkc,
  watersmart,
  integratedSustainability,
  traceAssociates,
  rjcEngineers,
  calgaryItalianBakery,
  joeMediaGroup,
  cblBakeriesCinnaroll,
  islEngineering,
  clearbakk,
  botaneco,
  nanalysis,
  exergySolutions,
  livestockWaterRecycling,
  avmax,
  northernRna,
  aeriumAnalytics,
  geologicai,
  tangentDesignEngineering,
  foremost,
  carbonova,
  summitLithiumTechnologies,
  veerum,
  eguanaTechnologies,
  ftgAerospaceCalgary,
];

// Teaching schematics, keyed by the story's illustrationSlug (the example's slug).
export const storyDiagrams: Record<string, StoryDiagramImage> = Object.fromEntries(exampleRecords.map((r) => [r.example.slug, r.diagram]));
