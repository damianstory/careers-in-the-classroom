import type { Metadata } from "next";
import { connection } from "next/server";
import { courses } from "@/content";
import { FAMILIES, THEMES, browseExamples } from "@/lib/browse";
import { PreviewBar } from "../BrowseParts";
import { Directory } from "./Directory";

export const metadata: Metadata = { title: "Prototype B: one list, many filters" };

// Version B: every example in one list, narrowed by any mix of course, challenge and kind of work.
// Rendered per request, so a shared filter link arrives already filtered.
export default async function PreviewB() {
  await connection();
  return (
    <>
      <PreviewBar current="/preview/b" />
      <Directory
        items={browseExamples()}
        courses={courses.map((c) => ({ id: c.id, name: c.name }))}
        themes={THEMES.map((t) => ({ id: t.id, name: t.name }))}
        families={FAMILIES.map((f) => ({ id: f.id, name: f.name }))}
      />
    </>
  );
}
