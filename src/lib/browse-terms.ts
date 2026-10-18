// Names for the browse prototypes' groupings. Kept apart from the index so client views stay small.

// Editorial grouping of each example's challenge into a theme. One theme per example.
export const THEMES = [
  { id: "water", name: "Clean water and land", blurb: "Treating, planning and protecting water, soil and stormwater." },
  { id: "energy", name: "Energy and climate", blurb: "Measuring emissions, storing power and recovering critical minerals." },
  { id: "food", name: "Food and ingredients", blurb: "Making food consistently, safely and with less waste." },
  { id: "build", name: "Buildings and getting around", blurb: "Structures, rail, roads and aircraft that have to stay safe." },
  { id: "making", name: "Making things at scale", blurb: "Taking something that works once and making it work every time." },
  { id: "sensing", name: "Seeing what eyes can’t", blurb: "Instruments and scans that reveal what is inside a sample or a site." },
  { id: "wildlife", name: "Wildlife and ecosystems", blurb: "Helping animals and the places they live." },
  { id: "media", name: "Light, image and story", blurb: "Using light, motion and editing to explain and persuade." },
] as const;
export type ThemeId = (typeof THEMES)[number]["id"];

// Editorial families of work, in words a student would use. Every role profile belongs to one.
export const FAMILIES = [
  { id: "engineering", name: "Engineering and design", blurb: "Designing structures, machines, processes and instruments." },
  { id: "lab", name: "Lab science and quality", blurb: "Testing samples and making sure results and products are consistent." },
  { id: "field", name: "Environment and wildlife", blurb: "Working outdoors with water, land, air and animals." },
  { id: "data", name: "Data, software and mapping", blurb: "Turning measurements into maps, models and tools." },
  { id: "trades", name: "Skilled trades and operations", blurb: "Building, running, fixing and making things by hand and machine." },
  { id: "creative", name: "Media and creative", blurb: "Drawing, filming, animating and editing." },
  { id: "people", name: "Planning, coordination and business", blurb: "Bringing people, plans and customers together." },
] as const;
export type FamilyId = (typeof FAMILIES)[number]["id"];

export const themeName = (id: ThemeId) => THEMES.find((t) => t.id === id)!.name;
export const familyName = (id: FamilyId) => FAMILIES.find((f) => f.id === id)!.name;

/** Longest search kept, in the box and in the URL, so a shared link reproduces the same results. */
export const QUERY_MAX = 80;

type Searchable = {
  question: string;
  theme: ThemeId;
  localShort: string;
  org: { name: string; tagline: string };
  roles: { title: string; family: FamilyId; scope: string }[];
  courses: { name: string; topic: string }[];
};

// Work shown at another employer does not make an organization match a family of work.
export const hasFamily = (e: Searchable, id: FamilyId | string) => e.roles.some((r) => r.family === id && r.scope !== "elsewhere");

const COURSE = /\b(science|biology|chemistry|physics)\s*(10|20|30)\b/g;
const STOP = new Set(["a", "an", "and", "the", "of", "in", "on", "for", "to", "with"]);
const escape = (w: string) => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

// A course named in the query ("Physics 30") must be one of the example's courses. Every other word,
// however short ("E3"), must start a word in the example's text. A query with nothing usable matches nothing.
export function matchesQuery(e: Searchable, query: string): boolean {
  const q = query.toLowerCase().replace(/[’']/g, "");
  const named = [...q.matchAll(COURSE)].map((m) => `${m[1]} ${m[2]}`);
  if (!named.every((c) => e.courses.some((x) => x.name.toLowerCase() === c))) return false;
  const words = q.replace(COURSE, " ").split(/[^a-z0-9]+/).filter((w) => w && !STOP.has(w));
  if (!words.length) return named.length > 0;
  const text = [
    e.question,
    e.org.name,
    e.org.tagline,
    e.localShort,
    themeName(e.theme),
    ...e.roles.map((r) => r.title),
    ...e.courses.flatMap((c) => [c.name, c.topic]),
  ]
    .join(" ")
    .toLowerCase()
    .replace(/[’']/g, "");
  return words.every((w) => new RegExp(`\\b${escape(w)}`).test(text));
}
