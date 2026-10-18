import { courses, examples, getDetails, getOrganization, roleProfiles } from "@/content";
import { exampleImages } from "@/content/example-images";

// Server-side summaries for the home page. Everything here is derived from the
// existing example records, so the three doors (class, company, role) can never disagree with
// the library. The doors only link into the library and example pages; they do not filter.

export interface CourseDoor {
  id: string;
  name: string;
  count: number;
  href: string;
}

export interface CompanyDoor {
  slug: string;
  org: string;
  question: string;
  discipline: string;
  local: string;
  /** The organization's own logo where we hold one; otherwise a monogram is drawn. */
  logo?: { src: string; width: number; height: number; onDark: boolean };
  monogram: string;
  href: string;
}

export interface RoleDoor {
  id: string;
  title: string;
  summary: string;
  /** Exactly the examples whose details list this role; the row links to each one. */
  examples: { slug: string; org: string }[];
}

const monogram = (name: string) =>
  name
    .replace(/&/g, " ")
    .split(/\s+/)
    .filter((w) => /^[A-Za-z0-9]/.test(w))
    .slice(0, 2)
    .map((w) => w[0]!.toUpperCase())
    .join("");

export const courseDoors: CourseDoor[] = courses.map((c) => ({
  id: c.id,
  name: c.name,
  count: examples.filter((e) => e.courses.some((f) => f.course === c.name)).length,
  href: `/connections?course=${c.id}#library`,
}));

export const companyDoors: CompanyDoor[] = examples
  .map((e) => {
    const org = e.detailsId ? getOrganization(getDetails(e.detailsId)?.organizationId ?? "") : undefined;
    return {
      slug: e.slug,
      org: e.org,
      question: e.question,
      discipline: e.discipline,
      local: e.localShort,
      logo: org?.logo ? { src: org.logo.src, width: org.logo.width, height: org.logo.height, onDark: org.logo.onDark } : undefined,
      monogram: monogram(e.org),
      href: `/examples/${e.slug}`,
    };
  })
  .sort((a, b) => a.org.localeCompare(b.org));

// Roles come from the shared role profiles, linked to examples through each example's details.
export const roleDoors: RoleDoor[] = roleProfiles
  .map((r) => {
    const linked = examples.filter((e) => (e.detailsId ? getDetails(e.detailsId)?.roleIds.includes(r.id) : false));
    return {
      id: r.id,
      title: r.title,
      summary: r.summary,
      examples: linked.map((e) => ({ slug: e.slug, org: e.org })),
    };
  })
  .filter((r) => r.examples.length > 0)
  .sort((a, b) => b.examples.length - a.examples.length || a.title.localeCompare(b.title));

export const stats = {
  examples: examples.length,
  companies: new Set(examples.map((e) => e.org)).size,
  roles: roleDoors.length,
  courses: courseDoors.filter((c) => c.count > 0).length,
};

export const getLandingExample = (slug: string) => {
  const e = examples.find((x) => x.slug === slug)!;
  const details = e.detailsId ? getDetails(e.detailsId) : undefined;
  return {
    example: e,
    details,
    image: exampleImages[slug],
    roles: (details?.roleIds ?? []).map((id) => roleProfiles.find((r) => r.id === id)!).filter(Boolean),
  };
};

