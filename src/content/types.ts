// Content model for the prepared, sourced examples.
// Evidence kinds share one meaning everywhere in the UI:
//   stated       – the organization says it (solid green tag)
//   observed     – seen in a dated source (outlined tag)
//   interpreted  – our interpretation, or announced but not yet real (dashed tag)
//   unresearched – honestly not researched yet; must carry no sources (dashed tag)
export type EvidenceKind = "stated" | "observed" | "interpreted" | "unresearched";

export type Discipline = "Biology" | "Chemistry" | "Physics";

export interface Source {
  id: string;
  label: string;
  url: string;
}

export interface Evidenced {
  kind: EvidenceKind;
  sourceIds: string[];
}

export interface LedgerRow extends Evidenced {
  type: string;
  claim: string;
  status: string;
}

export interface Role extends Evidenced {
  title: string;
  note: string;
  evidence: string;
}

export interface Pathway extends Evidenced {
  kindLabel: string;
  label: string;
  note: string;
}

export interface CourseFit {
  course: string;
  topic: string;
}

export interface Example {
  slug: string;
  org: string;
  discipline: Discipline;
  question: string;
  work: string;
  localShort: string;
  calgary: string;
  site: string;
  localSourceIds: string[];
  status?: string;
  explain: string;
  prompt: string;
  conversation: string;
  mindset: string;
  courses: CourseFit[];
  courseFitSourceIds: string[];
  roles: Role[];
  rolesNote: string;
  pathways: Pathway[];
  ledger: LedgerRow[];
  sources: Source[];
  newsId?: string;
  checkedOn: string;
  /** Optional connected exploration (story, company, roles, next steps). Examples without it keep the single-page template. */
  detailsId?: string;
}

export type NewsStatusKind = "announcement" | "early-research" | "demonstrated";

export interface NewsItem extends Evidenced {
  id: string;
  title: string;
  published: string;
  statusKind: NewsStatusKind;
  status: string;
  statusShort: string;
  location: string;
  summary: string;
  ask: string;
  caution?: string;
  sources: Source[];
}

export interface Course {
  id: string;
  name: string;
}

export interface Unit {
  id: string;
  courseId: string;
  name: string;
  preparedSearchId?: string;
}

export type PreparedResult =
  | { exampleSlug: string; why: string }
  | { newsId: string; why: string };

export interface PreparedSearch {
  id: string;
  courseId: string;
  label: string;
  keywords: string[];
  note?: string;
  results: PreparedResult[];
}

// ---------------------------------------------------------------------------
// Connected exploration (increment 2). Records below cite sources from one
// shared registry (src/content/sources.ts), never an example's own source list.
// Every record carries the date its evidence was actually checked.

export interface DatedSource extends Source {
  checkedOn: string;
}

export interface Claim extends Evidenced {
  text: string;
}

/** local = Calgary or Alberta; broader = elsewhere in Canada or beyond. */
export type Relevance = "local" | "broader";

export interface Organization {
  id: string;
  name: string;
  organizationType?: "company" | "charity";
  tagline: string;
  description: Claim;
  problem: Claim;
  offering: Claim;
  beneficiaries: Claim;
  headquarters: Claim;
  localConnection: Claim;
  /** A dated range from a source, or absent when unknown. Never guessed. */
  size?: Claim;
  websiteSourceId: string;
  careersSourceId?: string;
  /** The organization's own header logo, shown for identification only. */
  logo?: OrganizationLogo;
  checkedOn: string;
}

export interface OrganizationLogo {
  /** A file in public/images/logos/, served as is (never inlined). */
  src: string;
  alt: string;
  /** Intrinsic size from the file's viewBox (rounded), so the image reserves its space before it loads. */
  width: number;
  height: number;
  /** A light (white) logo that needs the dark plate. */
  onDark: boolean;
  /** Where the file was downloaded from, and when. */
  sourceUrl: string;
  retrieved: string;
}

/** Links to pathways and jobs are derived from those records, so they cannot disagree. */
export interface RoleProfile {
  id: string;
  title: string;
  summary: string;
  /** General explanation of this kind of work. Editorial, not a company claim. */
  explanation: string;
  tasks: { title: string; detail: string }[];
  collaborators: string[];
  classroomConnection: string;
}

export interface OrganizationRole extends Evidenced {
  organizationId: string;
  roleId: string;
  /** "work-area": the source names a team or area only. "job-title": the source shows an actual position title. */
  establishes: "work-area" | "job-title";
  label: string;
  location?: string;
  checkedOn: string;
}

export interface LearningPathway extends Evidenced {
  id: string;
  provider: string;
  name: string;
  routeType: string;
  location: string;
  relevance: Relevance;
  learns: string;
  /** Why this route relates to each linked role, from the program's own description. */
  roleRationale: { roleId: string; why: string }[];
  entryNote?: string;
  urlSourceId: string;
  checkedOn: string;
}

export type JobStatusKind = "open" | "unknown" | "closed";

export interface JobExample extends Evidenced {
  id: string;
  title: string;
  employer: string;
  employerNote: Claim;
  roleIds: string[];
  location?: string;
  arrangement?: string;
  level?: string;
  relevance: Relevance;
  postingSourceId: string;
  /** Set when the saved posting is a third-party copy rather than the employer's own page. */
  postingCopySite?: string;
  capturedOn: string;
  publishedOn?: string;
  summary: string;
  duties: string[];
  skills: string[];
  excerpt?: string;
  classroomConnection?: string;
  limitation?: string;
  applicationDeadline?: string;
  approval?: { packetId: string; candidateId: string; copyVersion: number };
  /** Mutable, separate from the captured example. "open" only when an application page was seen accepting applications. */
  status: { kind: JobStatusKind; checkedOn: string; note: string };
}

export interface ClassroomStory {
  diagramKind: "methane" | "owl-recovery" | "lithium-separation";
  subtitle: string;
  caption: string;
  steps: Claim[];
  diagramAlt: string;
  diagramProvenance: string;
  discussion: string;
}

export interface ExampleDetails {
  id: string;
  exampleSlug: string;
  organizationId: string;
  story: ClassroomStory;
  roleIds: string[];
  pathwayIds: string[];
  jobIds: string[];
  checkedOn: string;
}
