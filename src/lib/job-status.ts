import type { JobExample } from "@/content";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const formatDate = (iso: string) => {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${MONTHS[m - 1]} ${y}`;
};

const daysBetween = (a: string, b: string) => Math.round((Date.parse(b) - Date.parse(a)) / 86_400_000);

export const OPEN_FOR_DAYS = 30;

// The captured example never changes; this label is about the posting's live status.
// "Open" needs an application page seen accepting applications within OPEN_FOR_DAYS.
// Anything else, including an unknown status, reads as historical: never as closed or open.
export function jobStatusLabel(j: JobExample, today: string): string {
  if (j.applicationDeadline && today > j.applicationDeadline) {
    return `Application deadline passed (${formatDate(j.applicationDeadline)}) · historical job example`;
  }
  const age = daysBetween(j.status.checkedOn, today);
  if (j.status.kind === "open" && age >= 0 && age <= OPEN_FOR_DAYS) {
    return `Accepting applications when checked ${formatDate(j.status.checkedOn)}`;
  }
  if (j.status.kind === "closed") return `Closed when checked ${formatDate(j.status.checkedOn)} · historical job example`;
  return "Historical job example — not a current vacancy";
}

// One freshness line per page: a single date, or the earliest–latest range when records differ.
export function checkedRange(dates: string[]): string {
  const sorted = [...new Set(dates)].sort();
  if (sorted.length === 0) return "";
  const [first, last] = [sorted[0], sorted[sorted.length - 1]];
  if (first === last) return formatDate(first);
  const [fy, fm] = first.split("-");
  const [ly, lm] = last.split("-");
  if (fy === ly && fm === lm) return `${Number(first.slice(8))}–${formatDate(last)}`;
  return `${formatDate(first)} – ${formatDate(last)}`;
}
