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

export type BrowseOrigin = { door: Exclude<Door, "course">; company?: string };

export function companyQuery(value: string | string[] | undefined): string {
  return (first(value) ?? "").slice(0, 80);
}

// Only a named directory can be a return destination; never accept a redirect URL.
export function parseBrowseOrigin(params: Params): BrowseOrigin | undefined {
  const door = first(params.from);
  if (door !== "company" && door !== "challenge" && door !== "role") return undefined;
  const company = door === "company" ? companyQuery(params.company) : "";
  return { door, ...(company ? { company } : {}) };
}

export function browseOriginQuery(origin?: BrowseOrigin): string {
  if (!origin) return "";
  const params = new URLSearchParams({ from: origin.door });
  if (origin.door === "company" && origin.company) params.set("company", companyQuery(origin.company));
  return params.toString();
}

export function browseReturnHref(origin?: BrowseOrigin): string {
  if (!origin) return "/connections";
  const params = new URLSearchParams(browseOriginQuery(origin));
  params.delete("from");
  params.set("by", origin.door);
  return `/connections?${params}#library`;
}

export function withBrowseOrigin(href: string, origin: BrowseOrigin): string {
  const [pathAndQuery, hash] = href.split("#");
  const [path, query] = pathAndQuery.split("?");
  const params = new URLSearchParams(query);
  new URLSearchParams(browseOriginQuery(origin)).forEach((value, key) => params.set(key, value));
  return `${path}?${params}${hash ? `#${hash}` : ""}`;
}
