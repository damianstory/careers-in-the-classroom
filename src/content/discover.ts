// Permanent opaque numbers preserve shared guessing links. Never renumber existing cards.
// Titles describe the fictional illustrated occupation, not a verified employee or vacancy.
export interface DiscoverImage {
  number: string;
  roleId: string;
  organizationId: string;
  title: string;
  clue: string;
  pathwayId: string;
  jobId?: string;
  src: string;
  width: 752;
  height: 1344;
}

type CardSelection = Omit<DiscoverImage, "src" | "width" | "height">;
// Explicit editorial selections: a relevant preparation route and a sourced posting.
// These do not change when shared roles, pathways or jobs are reordered or expanded.
const selections: CardSelection[] = [
  { number: "01", organizationId: "ghgsat", roleId: "atmospheric-science", title: "Atmospheric Scientist", clue: "Outside, a person compares a coloured map on a tablet with readings from instruments on a tripod.", pathwayId: "ualberta-earth-sciences", jobId: "ghgsat-emissions-scientist" },
  { number: "02", organizationId: "ghgsat", roleId: "satellite-engineering", title: "Satellite Instrument Engineer", clue: "At a laboratory bench, a person adjusts a lens beside a small spacecraft model and a graph on a screen.", pathwayId: "ucalgary-engineering-physics", jobId: "muon-calibration-scientist" },
  { number: "03", organizationId: "ghgsat", roleId: "software-data", title: "Software Developer", clue: "A person types at a desk with code on one screen, maps and graphs on another, and a diagram in a notebook.", pathwayId: "sait-geomatics", jobId: "ghgsat-backend-developer" },
  { number: "04", organizationId: "wilder-institute", roleId: "conservation-research", title: "Conservation Scientist", clue: "In grassland, a person holds binoculars and records observations near an owl and a marked burrow.", pathwayId: "ucalgary-zoology", jobId: "enmas-environmental-technician" },
  { number: "05", organizationId: "wilder-institute", roleId: "animal-care", title: "Animal Care Technician", clue: "Inside a bird enclosure, a person wearing gloves prepares a bowl near food, a checklist and an owl on a perch.", pathwayId: "olds-assistant", jobId: "wilder-animal-care" },
  { number: "06", organizationId: "wilder-institute", roleId: "wildlife-veterinary", title: "Wildlife Veterinarian", clue: "In an examination room, a person uses a stethoscope to check an owl resting on a towel.", pathwayId: "ucalgary-dvm" },
  { number: "07", organizationId: "e3-lithium", roleId: "process-engineering", title: "Process Engineer", clue: "A person checks a flow diagram beside liquid-filled columns, tubes, pumps and pressure gauges.", pathwayId: "ucalgary-chemical", jobId: "e3-process-engineer" },
  { number: "08", organizationId: "e3-lithium", roleId: "process-operations", title: "Plant Operator", clue: "A person in a hard hat and safety glasses checks a tablet beside large pipes, tanks and a pressure gauge.", pathwayId: "sait-power", jobId: "e3-shift-operator" },
  { number: "09", organizationId: "ghgsat", roleId: "commercial-partnerships", title: "Partnerships Manager", clue: "At a meeting table, a person presents a map and a diagram connecting satellite measurements, plants and people.", pathwayId: "sait-marketing", jobId: "ghgsat-government-business" },
];
export const discoverImages: DiscoverImage[] = selections.map((selection) => ({
  ...selection, src: `/images/discover/${selection.roleId}.jpg`, width: 752, height: 1344,
}));
