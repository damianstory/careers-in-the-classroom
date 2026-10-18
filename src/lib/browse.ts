import type { StaticImageData } from "next/image";
import {
  courses,
  examples,
  getDetails,
  getOrganization,
  getOrganizationRole,
  getRoleProfile,
  jobExamples,
  type Discipline,
  type OrganizationLogo,
} from "@/content";
import { exampleImages } from "@/content/example-images";
import { coverage, unitOptions, type UnitOption } from "./library";
import type { FamilyId, ThemeId } from "./browse-terms";

export * from "./browse-terms";

// Browse prototypes: one slim, serializable index of the library, so a teacher can start from a
// course, a challenge, a company or a kind of work. Computed on the server; client views get only this.

const themeOf: Record<string, ThemeId> = {
  "o2-planning-design": "water",
  watersmart: "water",
  "integrated-sustainability": "water",
  "trace-associates": "water",
  clearbakk: "water",
  "livestock-water-recycling": "water",
  ghgsat: "energy",
  "eguana-technologies": "energy",
  carbonova: "energy",
  "ftg-aerospace-calgary": "energy",
  "e3-lithium": "energy",
  "summit-lithium-technologies": "energy",
  "phil-sebastian": "food",
  "calgary-italian-bakery": "food",
  "cbl-bakeries-cinnaroll": "food",
  botaneco: "food",
  entuitive: "build",
  "rjc-engineers": "build",
  cpkc: "build",
  "isl-engineering": "build",
  avmax: "build",
  "exergy-solutions": "making",
  foremost: "making",
  "tangent-design-engineering": "making",
  "northern-rna": "making",
  nanalysis: "sensing",
  geologicai: "sensing",
  veerum: "sensing",
  "wilder-institute": "wildlife",
  "aerium-analytics": "wildlife",
  "broken-pencil-studios": "media",
  "joe-media-group": "media",
};

const familyOf: Record<string, FamilyId> = {
  "work-landscape-design": "engineering",
  "work-structural-engineering": "engineering",
  "work-building-science-investigation": "engineering",
  "work-process": "engineering",
  "process-engineering": "engineering",
  "work-mechanical": "engineering",
  "work-power": "engineering",
  "satellite-engineering": "engineering",
  "work-instrument": "engineering",
  "work-lab": "lab",
  "laboratory-analysis": "lab",
  "work-quality": "lab",
  "work-food": "lab",
  "work-bioprocess": "lab",
  "work-materials": "lab",
  "work-applications": "lab",
  "work-environmental-field-assessment": "field",
  "work-water-resource-planning": "field",
  "work-wildlife": "field",
  "conservation-research": "field",
  "work-geoscience": "field",
  "atmospheric-science": "field",
  "work-weather": "field",
  "animal-care": "field",
  "wildlife-veterinary": "field",
  "work-software": "data",
  "software-data": "data",
  "work-spatial": "data",
  "work-drone": "data",
  "work-civil-and-construction-technology": "trades",
  "work-machining": "trades",
  "work-millwright": "trades",
  "work-fabrication": "trades",
  "work-maintenance": "trades",
  "work-avionics": "trades",
  "work-controls": "trades",
  "work-water-treatment-operations": "trades",
  "process-operations": "trades",
  "work-commercial-baking": "trades",
  "work-roast-production": "trades",
  "work-rail-traffic-control": "trades",
  "work-railway-conductor-work": "trades",
  "work-storyboarding-and-illustration": "creative",
  "work-animation": "creative",
  "work-camera-and-image-capture": "creative",
  "work-film-and-video-editing": "creative",
  "work-colour-finishing": "creative",
  "work-creative-production-coordination": "creative",
  "work-construction-coordination": "people",
  "work-planning-communication-and-engagement": "people",
  "commercial-partnerships": "people",
};

export interface BrowseRole {
  id: string;
  title: string;
  summary: string;
  family: FamilyId;
  /** What the source shows at this organization, e.g. a team name or an actual job title. */
  label?: string;
  /**
   * documented: a source shows this team or job title at the organization.
   * interpreted: the organization's sources point to this work, but not a specific assignment.
   * elsewhere: the example shows this work at another employer, not at this organization.
   */
  scope: "documented" | "interpreted" | "elsewhere";
  href: string;
}

export interface BrowseExample {
  slug: string;
  href: string;
  question: string;
  discipline: Discipline;
  theme: ThemeId;
  localShort: string;
  courses: { id?: string; name: string; topic: string }[];
  roles: BrowseRole[];
  jobs: number;
  image?: { src: StaticImageData; alt: string };
  org: {
    id: string;
    name: string;
    tagline: string;
    kind: "Company" | "Charity";
    logo?: OrganizationLogo;
    initials: string;
  };
}

const initials = (name: string) =>
  name
    .replace(/\(.*?\)|—.*$/g, "")
    .split(/[\s/&]+/)
    .filter((w) => /^[A-Za-z0-9]/.test(w))
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");

const courseId = (name: string) => courses.find((c) => c.name === name)?.id;

function toBrowse(): BrowseExample[] {
  return examples.map((e) => {
    const d = e.detailsId ? getDetails(e.detailsId) : undefined;
    const o = d ? getOrganization(d.organizationId) : undefined;
    const href = `/examples/${e.slug}`;
    const roles: BrowseRole[] = (d?.roleIds ?? []).flatMap((id) => {
      const r = getRoleProfile(id);
      if (!r) return [];
      const link = o ? getOrganizationRole(o.id, id) : undefined;
      const scope = !link ? "elsewhere" : link.establishes === "related-work" ? "interpreted" : "documented";
      return [{ id, title: r.title, summary: r.summary, family: familyOf[id] ?? "engineering", label: link?.label, scope, href: `${href}?role=${id}#who` }];
    });
    const name = o?.name ?? e.org;
    return {
      slug: e.slug,
      href,
      question: e.question,
      discipline: e.discipline,
      theme: themeOf[e.slug] ?? "making",
      localShort: e.localShort,
      courses: e.courses.map((c) => ({ id: courseId(c.course), name: c.course, topic: c.topic })),
      roles,
      jobs: jobExamples.filter((j) => d?.jobIds.includes(j.id)).length,
      image: exampleImages[e.slug],
      org: {
        id: o?.id ?? e.slug,
        name,
        tagline: o?.tagline ?? e.work,
        kind: o?.organizationType === "charity" ? "Charity" : "Company",
        logo: o?.logo,
        initials: initials(name),
      },
    };
  });
}

let cache: BrowseExample[] | undefined;
export const browseExamples = () => (cache ??= toBrowse());

export interface BrowseCourse {
  id: string;
  name: string;
  examples: number;
  ready: number;
  total: number;
  units: UnitOption[];
}

export const browseCourses = (): BrowseCourse[] =>
  courses.map((c) => ({
    id: c.id,
    name: c.name,
    examples: browseExamples().filter((e) => e.courses.some((x) => x.id === c.id)).length,
    ...coverage(c.id),
    units: unitOptions(c.id),
  }));

export interface BrowseRoleGroup {
  id: string;
  title: string;
  summary: string;
  family: FamilyId;
  at: { org: BrowseExample["org"]; label?: string; scope: BrowseRole["scope"]; href: string; question: string }[];
}

// One row per kind of work, listing every organization where the library shows it.
export function browseRoles(): BrowseRoleGroup[] {
  const map = new Map<string, BrowseRoleGroup>();
  for (const e of browseExamples()) {
    for (const r of e.roles) {
      // Some profiles were written twice under different ids; merge rows that share a title.
      const key = r.title.toLowerCase();
      const row = map.get(key) ?? { id: r.id, title: r.title, summary: r.summary, family: r.family, at: [] };
      row.at.push({ org: e.org, label: r.label, scope: r.scope, href: r.href, question: e.question });
      map.set(key, row);
    }
  }
  // Work at another employer is listed after the organizations where the work happens.
  for (const row of map.values()) row.at.sort((a, b) => Number(a.scope === "elsewhere") - Number(b.scope === "elsewhere"));
  return [...map.values()].sort((a, b) => b.at.length - a.at.length || a.title.localeCompare(b.title));
}

