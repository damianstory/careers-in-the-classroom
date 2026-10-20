import { exampleRecords } from "./example-records";
import type { Course, PreparedSearch, Unit } from "./types";

export const courses: Course[] = [
  { id: "science-10", name: "Science 10", group: "Science" },
  { id: "science-20", name: "Science 20", group: "Science" },
  { id: "science-30", name: "Science 30", group: "Science" },
  { id: "biology-20", name: "Biology 20", group: "Biology" },
  { id: "biology-30", name: "Biology 30", group: "Biology" },
  { id: "chemistry-20", name: "Chemistry 20", group: "Chemistry" },
  { id: "chemistry-30", name: "Chemistry 30", group: "Chemistry" },
  { id: "physics-20", name: "Physics 20", group: "Physics" },
  { id: "physics-30", name: "Physics 30", group: "Physics" },
  // Verified implemented CTS modules; company lessons remain subject to content review.
  {
    id: "cse1120",
    name: "CSE1120 · Structured Programming 2",
    group: "Technology",
    focusLabel: "Outcome focus",
    curriculum: {
      url: "https://curriculum.learnalberta.ca/curriculum/en/pos/CTSCSE/CSE1120",
      checkedOn: "2026-10-19",
      level: "Introductory",
      preparation: "Prerequisite: CSE1110 — Structured Programming 1."
    }
  },
  {
    id: "inf2070",
    name: "INF2070 · Database 2",
    group: "Technology",
    focusLabel: "Outcome focus",
    curriculum: {
      url: "https://curriculum.learnalberta.ca/curriculum/en/pos/CTSINF/INF2070",
      checkedOn: "2026-10-19",
      level: "Intermediate",
      preparation: "No formal prerequisite; prior flat-file database understanding is expected."
    }
  },
  {
    id: "cse1240",
    name: "CSE1240 · Robotics Programming 1",
    group: "Technology",
    focusLabel: "Outcome focus",
    curriculum: {
      url: "https://curriculum.learnalberta.ca/curriculum/en/pos/CTSCSE/CSE1240",
      checkedOn: "2026-10-19",
      level: "Introductory",
      preparation: "Prerequisite: CSE1110. Physical or simulated robotics environments are permitted."
    }
  },
  {
    id: "ent2010",
    name: "ENT2010 · Analyzing Ventures",
    group: "Business",
    focusLabel: "Outcome focus",
    curriculum: {
      url: "https://curriculum.learnalberta.ca/curriculum/en/pos/CTSENT/ENT2010",
      checkedOn: "2026-10-19",
      level: "Intermediate",
      preparation: "No prerequisite."
    }
  },
  {
    id: "fin3060",
    name: "FIN3060 · Financial Analysis",
    group: "Business",
    focusLabel: "Outcome focus",
    curriculum: {
      url: "https://curriculum.learnalberta.ca/curriculum/en/pos/CTSFIN/FIN3060",
      checkedOn: "2026-10-19",
      level: "Advanced",
      preparation: "Prerequisite: FIN3040 — Financial Statements."
    }
  },
];

// Unit names from Alberta Education programs of studies.
// To confirm against the current curriculum before wider use.
// CTS focus names below summarize selected verified outcomes; they are not official unit titles.
export const units: Unit[] = [
  { id: "cse1120-focus", courseId: "cse1120", name: "Decisions, repetition and testing", outcomeIds: ["1", "1.9", "2", "3.1"] },
  { id: "inf2070-focus", courseId: "inf2070", name: "Related tables, keys and data imports", outcomeIds: ["1.1", "1.2", "1.4", "2.4", "2.8", "3.4"] },
  { id: "cse1240-focus", courseId: "cse1240", name: "Robot tasks, environments and capabilities", outcomeIds: ["1.3", "1.4", "3.1", "3.2", "3.3"] },
  { id: "ent2010-focus", courseId: "ent2010", name: "Customer value and venture feasibility", outcomeIds: ["1.1.2", "1.1.5", "1.1.7", "2.1.3", "2.1.10", "2.1.11"] },
  { id: "fin3060-focus", courseId: "fin3060", name: "Comparative statements, trends and ratios", outcomeIds: ["1.2", "1.3", "2.2", "2.3", "2.4"] },
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
    note: "This recent development is research from outside Calgary. Related Calgary company examples appear separately where their course connection is supported.",
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

// Editorial unit matches from each example's record, earlier research batches first.
const unitLinks = [...exampleRecords]
  .sort((a, b) => a.addedOn.localeCompare(b.addedOn))
  .flatMap((r) => r.unitLinks.map((link) => ({ slug: r.example.slug, ...link })));

// Each expanded unit gets its own results, so one unit's additions never leak into another.
for (const unit of units) {
  const additions = unitLinks.filter((link) => link.unitId === unit.id);
  if (!additions.length) continue;
  const original = preparedSearches.find((search) => search.id === unit.preparedSearchId);
  const id = `expanded-${unit.id}`;
  preparedSearches.push({
    id,
    courseId: unit.courseId,
    label: unit.name,
    keywords: [],
    results: [
      ...(original?.results ?? []),
      ...additions.map((link) => ({ exampleSlug: link.slug, why: link.why })),
    ],
  });
  unit.preparedSearchId = id;
}
