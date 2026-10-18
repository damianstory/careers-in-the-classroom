// The library filter's URL and form data. Kept free of content imports: the filter form runs in the
// browser, and importing the content library here would ship every example record with it.

export const TOPIC_MAX = 80;

export interface LibraryFilter {
  courseId?: string;
  unitId?: string;
  topic?: string;
}

export function filterQuery(f: LibraryFilter): string {
  const q = new URLSearchParams();
  if (f.courseId) q.set("course", f.courseId);
  if (f.courseId && f.unitId) q.set("unit", f.unitId);
  if (f.topic) q.set("topic", f.topic);
  return q.toString();
}

export interface UnitOption {
  id: string;
  name: string;
  /** e.g. "1 example" or "1 recent development". Absent when nothing is prepared. */
  note?: string;
  ready: boolean;
}

export interface CourseOption {
  id: string;
  name: string;
  units: UnitOption[];
}
