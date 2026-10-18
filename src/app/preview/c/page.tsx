import type { Metadata } from "next";
import { courses } from "@/content";
import { FAMILIES, THEMES, browseExamples } from "@/lib/browse";
import { PreviewBar } from "../BrowseParts";
import { Sentence } from "./Sentence";

export const metadata: Metadata = { title: "Prototype C: build a sentence" };

// Version C: the teacher finishes a sentence about their class; results and a company wall follow.
export default function PreviewC() {
  return (
    <>
      <PreviewBar current="/preview/c" />
      <Sentence
        items={browseExamples()}
        courses={courses.map((c) => ({ id: c.id, name: c.name }))}
        themes={THEMES.map((t) => ({ id: t.id, name: t.name }))}
        families={FAMILIES.map((f) => ({ id: f.id, name: f.name }))}
      />
    </>
  );
}
