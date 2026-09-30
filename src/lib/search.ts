import { getCourse, getPreparedSearch, getUnit, preparedSearches, type Course, type PreparedSearch } from "@/content";

export const OTHER_UNIT = "other";
export const TOPIC_MAX = 80;

// A search context is { course, unit } or { course, unit: "other", topic }.
// It is serialised the same way in every URL so results, examples and dialogs agree.
export interface SearchContext {
  courseId: string;
  unitId: string;
  topic?: string;
}

type Params = Record<string, string | string[] | undefined>;

const first = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v);

export function parseContext(params: Params): SearchContext | null {
  const courseId = first(params.course)?.trim();
  if (!courseId) return null;
  const unitId = first(params.unit)?.trim() ?? "";
  const topic = first(params.topic)?.trim().slice(0, TOPIC_MAX);
  return { courseId, unitId, topic: unitId === OTHER_UNIT && topic ? topic : undefined };
}

export function contextQuery(ctx: SearchContext): string {
  const q = new URLSearchParams({ course: ctx.courseId, unit: ctx.unitId });
  if (ctx.unitId === OTHER_UNIT && ctx.topic) q.set("topic", ctx.topic);
  return q.toString();
}

export type Resolution =
  | { status: "needs-unit"; courseId: string }
  | { status: "match"; course: Course; label: string; search: PreparedSearch }
  | { status: "no-match"; courseName: string; label: string };

export function matchTopic(courseId: string, topic: string): PreparedSearch | undefined {
  const t = topic.trim().toLowerCase();
  if (!t) return undefined;
  return preparedSearches.find(
    (p) => p.courseId === courseId && (p.label.toLowerCase() === t || p.keywords.some((k) => t.includes(k))),
  );
}

export function resolveSearch(ctx: SearchContext): Resolution {
  if (!ctx.unitId || (ctx.unitId === OTHER_UNIT && !ctx.topic)) {
    return { status: "needs-unit", courseId: ctx.courseId };
  }
  const course = getCourse(ctx.courseId);
  if (!course) return { status: "no-match", courseName: "this course", label: ctx.topic ?? "this unit" };

  if (ctx.unitId === OTHER_UNIT) {
    const label = ctx.topic!;
    const search = matchTopic(course.id, label);
    return search ? { status: "match", course, label, search } : { status: "no-match", courseName: course.name, label };
  }

  const unit = getUnit(ctx.unitId);
  if (!unit || unit.courseId !== course.id) return { status: "no-match", courseName: course.name, label: "this unit" };
  const search = unit.preparedSearchId ? getPreparedSearch(unit.preparedSearchId) : undefined;
  return search
    ? { status: "match", course, label: unit.name, search }
    : { status: "no-match", courseName: course.name, label: unit.name };
}

export interface ExampleContext {
  why: string;
  label: string;
  backHref: string;
  query: string;
}

// Why-match and back navigation only apply when the context really resolves to this example.
export function exampleContext(slug: string, ctx: SearchContext | null): ExampleContext | null {
  if (!ctx) return null;
  const res = resolveSearch(ctx);
  if (res.status !== "match") return null;
  const hit = res.search.results.find((r) => "exampleSlug" in r && r.exampleSlug === slug);
  if (!hit) return null;
  const query = contextQuery(ctx);
  // Back goes to the filtered library on the home page, where a typed topic needs no "other" unit.
  const back = new URLSearchParams(query);
  if (ctx.unitId === OTHER_UNIT) back.delete("unit");
  return { why: hit.why, label: `${res.course.name} · ${res.label}`, backHref: `/?${back}#library`, query };
}
