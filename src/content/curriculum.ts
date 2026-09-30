import type { Course, PreparedSearch, Unit } from "./types";

export const courses: Course[] = [
  { id: "science-10", name: "Science 10" },
  { id: "science-20", name: "Science 20" },
  { id: "science-30", name: "Science 30" },
  { id: "biology-20", name: "Biology 20" },
  { id: "biology-30", name: "Biology 30" },
  { id: "chemistry-20", name: "Chemistry 20" },
  { id: "chemistry-30", name: "Chemistry 30" },
  { id: "physics-20", name: "Physics 20" },
  { id: "physics-30", name: "Physics 30" },
];

// Unit names from Alberta Education programs of studies.
// To confirm against the current curriculum before wider use.
export const units: Unit[] = [
  { id: "s10a", courseId: "science-10", name: "Energy and matter in chemical change" },
  { id: "s10b", courseId: "science-10", name: "Energy flow in technological systems" },
  { id: "s10c", courseId: "science-10", name: "Cycling of matter in living systems" },
  { id: "s10d", courseId: "science-10", name: "Energy flow in global systems", preparedSearchId: "sci10" },
  { id: "s20a", courseId: "science-20", name: "Chemical changes" },
  { id: "s20b", courseId: "science-20", name: "Changes in motion" },
  { id: "s20c", courseId: "science-20", name: "The changing Earth" },
  { id: "s20d", courseId: "science-20", name: "Changes in living systems" },
  { id: "s30a", courseId: "science-30", name: "Living systems respond to their environment" },
  { id: "s30b", courseId: "science-30", name: "Chemistry and the environment" },
  { id: "s30c", courseId: "science-30", name: "Electromagnetic energy", preparedSearchId: "sci30" },
  { id: "s30d", courseId: "science-30", name: "Energy and the environment" },
  { id: "b20a", courseId: "biology-20", name: "Energy and matter exchange in the biosphere" },
  { id: "b20b", courseId: "biology-20", name: "Ecosystems and population change", preparedSearchId: "bio20" },
  { id: "b20c", courseId: "biology-20", name: "Photosynthesis and cellular respiration" },
  { id: "b20d", courseId: "biology-20", name: "Human systems" },
  { id: "b30a", courseId: "biology-30", name: "Nervous and endocrine systems" },
  { id: "b30b", courseId: "biology-30", name: "Reproduction and development" },
  { id: "b30c", courseId: "biology-30", name: "Cell division, genetics and molecular biology", preparedSearchId: "bio30dna" },
  { id: "b30d", courseId: "biology-30", name: "Population and community dynamics", preparedSearchId: "bio30pop" },
  { id: "c20a", courseId: "chemistry-20", name: "The diversity of matter and chemical bonding" },
  { id: "c20b", courseId: "chemistry-20", name: "Forms of matter: gases" },
  { id: "c20c", courseId: "chemistry-20", name: "Matter as solutions, acids and bases", preparedSearchId: "chem20" },
  { id: "c20d", courseId: "chemistry-20", name: "Quantitative relationships in chemical changes", preparedSearchId: "chem20" },
  { id: "c30a", courseId: "chemistry-30", name: "Thermochemical changes" },
  { id: "c30b", courseId: "chemistry-30", name: "Electrochemical changes", preparedSearchId: "chem30" },
  { id: "c30c", courseId: "chemistry-30", name: "Chemical changes of organic compounds" },
  { id: "c30d", courseId: "chemistry-30", name: "Chemical equilibrium focusing on acid–base systems" },
  { id: "p20a", courseId: "physics-20", name: "Kinematics" },
  { id: "p20b", courseId: "physics-20", name: "Dynamics" },
  { id: "p20c", courseId: "physics-20", name: "Circular motion, work and energy" },
  { id: "p20d", courseId: "physics-20", name: "Oscillatory motion and mechanical waves" },
  { id: "p30a", courseId: "physics-30", name: "Momentum and impulse" },
  { id: "p30b", courseId: "physics-30", name: "Forces and fields" },
  { id: "p30c", courseId: "physics-30", name: "Electromagnetic radiation", preparedSearchId: "phys30" },
  { id: "p30d", courseId: "physics-30", name: "Atomic physics" },
];

export const preparedSearches: PreparedSearch[] = [
  {
    id: "phys30", courseId: "physics-30", label: "Electromagnetic radiation",
    keywords: ["electromagnetic", "radiation", "spectr", "light", "wave", "satellite", "methane", "emr"],
    results: [
      { exampleSlug: "ghgsat", why: "A satellite spectrometer measuring methane puts electromagnetic radiation to work on a real environmental question." },
      { newsId: "ghgsat-second-generation", why: "A new announcement about detection sensitivity. Good for a question about measurement limits." },
    ],
  },
  {
    id: "sci30", courseId: "science-30", label: "Electromagnetic energy",
    keywords: ["electromagnetic", "energy", "radiation", "environment", "methane", "climate", "emission"],
    results: [
      { exampleSlug: "ghgsat", why: "Connects electromagnetic energy to an environmental decision: finding methane emissions." },
      { newsId: "ghgsat-second-generation", why: "A new announcement about detection sensitivity. Good for a question about measurement limits." },
    ],
  },
  {
    id: "sci10", courseId: "science-10", label: "Energy flow in global systems",
    keywords: ["energy", "global", "system", "methane", "climate", "emission"],
    results: [{ exampleSlug: "ghgsat", why: "A broader introductory connection: monitoring emissions from energy systems." }],
  },
  {
    id: "bio20", courseId: "biology-20", label: "Ecosystems and population change",
    keywords: ["population", "ecosystem", "conservation", "owl", "species", "recover", "endanger", "wildlife"],
    results: [{ exampleSlug: "wilder-institute", why: "An intervention at one life stage, young owls in their first winter, used to try to help a whole population recover." }],
  },
  {
    id: "bio30pop", courseId: "biology-30", label: "Population and community dynamics",
    keywords: ["population", "community", "dynamic", "ecology", "owl", "conservation", "species"],
    results: [{ exampleSlug: "wilder-institute", why: "Monitoring released owls turns population dynamics into a real measurement problem." }],
  },
  {
    id: "bio30dna", courseId: "biology-30", label: "Cell division, genetics and molecular biology",
    keywords: ["dna", "protein", "gene", "genetic", "enzyme", "molecular", "inquiry"],
    note: "No Calgary example is prepared for this topic yet. One recent development from outside Calgary is relevant.",
    results: [{ newsId: "enzyme-system-early-research", why: "Connects DNA, proteins and scientific inquiry, with the uncertainty kept visible." }],
  },
  {
    id: "chem20", courseId: "chemistry-20", label: "Matter as solutions, acids and bases",
    keywords: ["solution", "separat", "mixture", "concentration", "quantitative", "lithium", "brine", "stoichiometr"],
    results: [{ exampleSlug: "e3-lithium", why: "Separating lithium from brine makes solutions and quantitative change a real engineering problem." }],
  },
  {
    id: "chem30", courseId: "chemistry-30", label: "Electrochemical changes",
    keywords: ["electrochem", "battery", "batteries", "lithium", "redox", "cell"],
    results: [{ exampleSlug: "e3-lithium", why: "A wider battery connection only. We are not claiming E3’s extraction process uses electrochemistry." }],
  },
];

// Suggested searches shown on the no-match page and as related searches: [courseId, unitId].
export const presets: [string, string][] = [
  ["physics-30", "p30c"],
  ["biology-20", "b20b"],
  ["chemistry-20", "c20c"],
  ["biology-30", "b30c"],
  ["science-30", "s30c"],
];
