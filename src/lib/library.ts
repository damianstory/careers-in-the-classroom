import {
  examples,
  getCourse,
  getPreparedSearch,
  getUnit,
  preparedSearches,
  unitsForCourse,
  type Course,
  type Discipline,
  type Example,
  type PreparedSearch,
  type Unit,
} from "@/content";
import { OTHER_UNIT, TOPIC_MAX, contextQuery, matchTopic, type SearchContext } from "./search";

// The home page is the example library. One filter (course → unit → optional topic) lives in the
// URL, so a filtered library can be shared, reloaded and reached with Back/Forward.

export interface LibraryFilter {
  courseId?: string;
  unitId?: string;
  topic?: string;
}

type Params = Record<string, string | string[] | undefined>;
const first = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v)?.trim();

// Unknown values are dropped rather than guessed. The old `unit=other&topic=…` form still parses.
export function parseFilter(params: Params): LibraryFilter {
  const course = getCourse(first(params.course) ?? "");
  const unit = getUnit(first(params.unit) ?? "");
  const topic = first(params.topic)?.slice(0, TOPIC_MAX).trim();
  return {
    courseId: course?.id,
    unitId: course && unit?.courseId === course.id ? unit.id : undefined,
    topic: topic || undefined,
  };
}

export function filterQuery(f: LibraryFilter): string {
  const q = new URLSearchParams();
  if (f.courseId) q.set("course", f.courseId);
  if (f.courseId && f.unitId) q.set("unit", f.unitId);
  if (f.topic) q.set("topic", f.topic);
  return q.toString();
}

// Editorial subject for each course and Science unit. Used only to suggest the closest examples
// when nothing is prepared, never to claim a fit. "The changing Earth" has no close subject yet.
const courseDiscipline = (courseId: string): Discipline | undefined =>
  courseId.startsWith("biology") ? "Biology" : courseId.startsWith("chemistry") ? "Chemistry" : courseId.startsWith("physics") ? "Physics" : undefined;

const scienceUnitDiscipline: Record<string, Discipline> = {
  s10a: "Chemistry",
  s10b: "Physics",
  s10c: "Biology",
  s10d: "Physics",
  s20a: "Chemistry",
  s20b: "Physics",
  s20d: "Biology",
  s30a: "Biology",
  s30b: "Chemistry",
  s30c: "Physics",
  s30d: "Physics",
};

export const disciplineFor = (courseId: string, unitId?: string): Discipline | undefined =>
  courseDiscipline(courseId) ?? (unitId ? scienceUnitDiscipline[unitId] : undefined);

const exampleCount = (s: PreparedSearch | undefined) => s?.results.filter((r) => "exampleSlug" in r).length ?? 0;
const newsCount = (s: PreparedSearch | undefined) => s?.results.filter((r) => "newsId" in r).length ?? 0;

export interface UnitOption {
  id: string;
  name: string;
  /** e.g. "1 example" or "1 recent development". Absent when nothing is prepared. */
  note?: string;
  ready: boolean;
}

// Coverage is shown before a teacher chooses: "Ready now" units have at least one prepared example.
export function unitOptions(courseId: string): UnitOption[] {
  return unitsForCourse(courseId).map((u: Unit) => {
    const s = u.preparedSearchId ? getPreparedSearch(u.preparedSearchId) : undefined;
    const ex = exampleCount(s);
    const nw = newsCount(s);
    const note = ex ? `${ex} example${ex > 1 ? "s" : ""}` : nw ? `${nw} recent development` : undefined;
    return { id: u.id, name: u.name, note, ready: ex > 0 };
  });
}

export function coverage(courseId: string) {
  const opts = unitOptions(courseId);
  return { ready: opts.filter((o) => o.ready).length, total: opts.length };
}

const words = (s: string) => s.toLowerCase().split(/[^a-z0-9]+/).filter((w) => w.length >= 3);

// A typed topic matches an example's own text, or the keywords of a prepared search that lists it.
export function topicMatches(e: Example, topic: string, courseId?: string): boolean {
  const t = topic.toLowerCase();
  const text = [e.question, e.org, e.work, e.explain, e.discipline, e.localShort, ...e.courses.flatMap((c) => [c.course, c.topic]), ...e.roles.map((r) => r.title)]
    .join(" ")
    .toLowerCase();
  if (words(topic).some((w) => text.includes(w))) return true;
  return preparedSearches.some(
    (p) =>
      (!courseId || p.courseId === courseId) &&
      p.results.some((r) => "exampleSlug" in r && r.exampleSlug === e.slug) &&
      p.keywords.some((k) => t.includes(k)),
  );
}

export type LibraryItem =
  | { type: "example"; example: Example; href: string; why?: string }
  | { type: "news"; newsId: string; why: string };

export interface LibrarySection {
  id: string;
  title: string;
  note?: string;
  items: LibraryItem[];
}

export interface Library {
  filter: LibraryFilter;
  course?: Course;
  unit?: Unit;
  /** "Physics 30 · Electromagnetic radiation", used for dialogs and the no-match banner. */
  label?: string;
  /** Examples that match the filter. Closest suggestions and the rest of the library are not counted. */
  count: number;
  noMatch: boolean;
  sections: LibrarySection[];
}

const fitsCourse = (e: Example, course: Course) => e.courses.find((c) => c.course === course.name);
const exampleHref = (slug: string, ctx?: SearchContext) => `/examples/${slug}${ctx ? `?${contextQuery(ctx)}` : ""}`;

export function buildLibrary(filter: LibraryFilter): Library {
  const course = filter.courseId ? getCourse(filter.courseId) : undefined;
  const unit = filter.unitId ? getUnit(filter.unitId) : undefined;
  const topic = filter.topic;

  // The prepared search behind "Fits your unit", and the context its cards carry to the example page.
  let search: PreparedSearch | undefined;
  let ctx: SearchContext | undefined;
  let label: string | undefined;
  if (course && unit) {
    search = unit.preparedSearchId ? getPreparedSearch(unit.preparedSearchId) : undefined;
    ctx = { courseId: course.id, unitId: unit.id };
    label = `${course.name} · ${unit.name}`;
  } else if (course && topic) {
    search = matchTopic(course.id, topic);
    ctx = { courseId: course.id, unitId: OTHER_UNIT, topic };
    label = `${course.name} · ${topic}`;
  } else if (topic) {
    label = topic;
  } else if (course) {
    label = course.name;
  }

  // A unit's prepared results are narrowed by a typed topic too; a topic's own prepared match is not.
  const passes = (e: Example) => !topic || topicMatches(e, topic, course?.id);
  const shown = new Set<string>();
  const sections: LibrarySection[] = [];

  const fits: LibraryItem[] = [];
  for (const r of search?.results ?? []) {
    if ("newsId" in r) fits.push({ type: "news", newsId: r.newsId, why: r.why });
    else {
      const e = examples.find((x) => x.slug === r.exampleSlug);
      if (!e || (unit && !passes(e))) continue;
      fits.push({ type: "example", example: e, href: exampleHref(e.slug, ctx), why: r.why });
      shown.add(e.slug);
    }
  }
  if (fits.length) {
    sections.push({
      id: "fits",
      title: unit ? `Fits ${unit.name}` : `Fits “${topic}” in ${course!.name}`,
      note: search?.note,
      items: fits,
    });
  }

  if (course) {
    const also = examples.filter((e) => !shown.has(e.slug) && fitsCourse(e, course) && passes(e));
    if (also.length) {
      const onlyCourse = !unit && !topic;
      sections.push({
        id: "course",
        title: onlyCourse ? `In ${course.name}` : `Also fits ${course.name}`,
        items: also.map((e) => {
          const readyUnits = unitsForCourse(course.id).filter((u) =>
            getPreparedSearch(u.preparedSearchId ?? "")?.results.some((r) => "exampleSlug" in r && r.exampleSlug === e.slug),
          );
          const why = readyUnits.length
            ? `Prepared for ${readyUnits.map((u) => u.name).join(" and ")}.`
            : `Fits ${course.name} · ${fitsCourse(e, course)!.topic}.`;
          return { type: "example" as const, example: e, href: exampleHref(e.slug), why };
        }),
      });
      also.forEach((e) => shown.add(e.slug));
    }
  }

  // Topic matches outside the chosen course.
  if (topic) {
    const more = examples.filter((e) => !shown.has(e.slug) && passes(e));
    if (more.length) {
      sections.push({
        id: "topic",
        title: course ? "Matches in other courses" : `Matches “${topic}”`,
        items: more.map((e) => ({ type: "example", example: e, href: exampleHref(e.slug) })),
      });
      more.forEach((e) => shown.add(e.slug));
    }
  }

  const count = shown.size;
  // A chosen unit with nothing prepared is a no-match even when other examples fit the course.
  const noMatch = unit ? fits.length === 0 : !!topic && count === 0 && fits.length === 0;

  // Nothing prepared: suggest the closest examples in the same subject, each with its reason.
  if (noMatch && course) {
    const subject = disciplineFor(course.id, unit?.id);
    const closest = subject ? examples.filter((e) => e.discipline === subject) : [];
    if (closest.length) {
      sections.push({
        id: "closest",
        title: "Closest examples",
        items: closest.map((e) => ({
          type: "example",
          example: e,
          href: exampleHref(e.slug),
          why: `The closest ${subject!.toLowerCase()} example. Prepared for ${e.courses.map((c) => c.course).join(", ")}.`,
        })),
      });
      closest.forEach((e) => shown.add(e.slug));
    }
  }

  // The rest of the library is always there to browse, so the grid is never blank.
  const rest = examples.filter((e) => !shown.has(e.slug));
  if (rest.length) {
    sections.push({
      id: "rest",
      title: !course && !topic ? "All examples" : course ? "Other courses" : "Other examples",
      items: rest.map((e) => ({ type: "example", example: e, href: exampleHref(e.slug) })),
    });
  }

  return { filter, course, unit, label, count: !course && !topic ? examples.length : count, noMatch, sections };
}
