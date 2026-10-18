import type { IconName } from "@/components/Icon";

// The four ways into the library at /connections, kept free of content imports so the quick bar can
// use them in the browser. The course door is the library filter; the others list the same
// connections by challenge, by organization and by kind of work.

export type Door = "course" | "challenge" | "company" | "role";

export const DOORS: { id: Door; label: string; short: string; hint: string; icon: IconName }[] = [
  { id: "course", label: "Your course", short: "Course", hint: "Start from what you’re teaching", icon: "book" },
  { id: "challenge", label: "A challenge", short: "Challenge", hint: "Start from a real-world problem", icon: "compass" },
  { id: "company", label: "A company", short: "Company", hint: "Start from who’s in Calgary", icon: "building" },
  { id: "role", label: "A kind of work", short: "Work", hint: "Start from the people and jobs", icon: "users" },
];

type Params = Record<string, string | string[] | undefined>;
const first = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v)?.trim();

// Any filter parameter, even an empty one from the old GET form, means the course door, so every
// existing library link lands where it did. The library filter then normalizes the values.
export function parseDoor(params: Params): Door {
  if (["course", "unit", "topic"].some((k) => params[k] !== undefined)) return "course";
  const by = first(params.by);
  return DOORS.find((d) => d.id === by)?.id ?? "course";
}
