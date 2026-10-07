import { courses, preparedSearches, presets, units } from "./curriculum";
import { examples } from "./examples";
import { exampleDetails } from "./example-details";
import { jobExamples } from "./job-examples";
import { organizationRoles, organizations } from "./organizations";
import { learningPathways } from "./pathways";
import { roleProfiles } from "./roles";
import { registry } from "./sources";
import { news } from "./news";

export { courses, examples, news, preparedSearches, presets, units };
export { exampleDetails, jobExamples, learningPathways, organizationRoles, organizations, registry, roleProfiles };
export type * from "./types";

export const getExample = (slug: string) => examples.find((e) => e.slug === slug);
export const getNews = (id: string) => news.find((n) => n.id === id);
export const getCourse = (id: string) => courses.find((c) => c.id === id);
export const getUnit = (id: string) => units.find((u) => u.id === id);
export const getPreparedSearch = (id: string) => preparedSearches.find((p) => p.id === id);
export const unitsForCourse = (courseId: string) => units.filter((u) => u.courseId === courseId);

// Connected exploration. Sources for these records resolve only in the shared registry.
export const getDetails = (id: string) => exampleDetails.find((d) => d.id === id);
export const getOrganization = (id: string) => organizations.find((o) => o.id === id);
export const getRoleProfile = (id: string) => roleProfiles.find((r) => r.id === id);
export const getPathway = (id: string) => learningPathways.find((p) => p.id === id);
export const getJob = (id: string) => jobExamples.find((j) => j.id === id);
export const getRegistrySource = (id: string) => registry.find((s) => s.id === id);
export const getOrganizationRole = (organizationId: string, roleId: string) =>
  organizationRoles.find((l) => l.organizationId === organizationId && l.roleId === roleId);

export { discoverImages } from "./discover";
export type { DiscoverImage } from "./discover";
