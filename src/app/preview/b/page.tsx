import type { Metadata } from "next";
import { courses } from "@/content";
import { FAMILIES, THEMES, browseExamples } from "@/lib/browse";
import { PreviewBar } from "../BrowseParts";
import { Directory } from "./Directory";

export const metadata: Metadata = { title: "Prototype B: one list, many filters" };

const list = (v: string | string[] | undefined) => (v === undefined ? [] : Array.isArray(v) ? v : [v]);

// Version B: every example in one list, narrowed by any mix of course, challenge and kind of work.
export default async function PreviewB({ searchParams }: PageProps<"/preview/b">) {
  const p = await searchParams;
  const valid = (ids: string[], opts: readonly { id: string }[]) => ids.filter((id) => opts.some((o) => o.id === id));
  const initial = {
    picks: { course: valid(list(p.course), courses), theme: valid(list(p.theme), THEMES), family: valid(list(p.work), FAMILIES) },
    q: list(p.q)[0]?.slice(0, 80) ?? "",
  };
  return (
    <>
      <PreviewBar current="/preview/b" />
      <Directory
        items={browseExamples()}
        courses={courses.map((c) => ({ id: c.id, name: c.name }))}
        themes={THEMES.map((t) => ({ id: t.id, name: t.name }))}
        families={FAMILIES.map((f) => ({ id: f.id, name: f.name }))}
        initial={initial}
      />
    </>
  );
}
