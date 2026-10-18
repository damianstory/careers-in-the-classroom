// The library filter's URL and form data. Kept free of content imports: the filter form runs in the
// browser, and importing the content library here would ship every example record with it.

export const TOPIC_MAX = 80;

/** Sent on window by another control (a door or the quick bar) that is about to navigate the library,
 *  so the console drops an edit it is still waiting to apply instead of overwriting the newer filter.
 *  The detail is the filter being navigated to, or null when leaving the course door. */
export const FILTER_NAVIGATE = "citc:filter-navigate";

export const announceFilterNavigation = (next: LibraryFilter | null) =>
  window.dispatchEvent(new CustomEvent<LibraryFilter | null>(FILTER_NAVIGATE, { detail: next }));

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
