import { courses, units, type CourseFit, type Example } from "@/content";
import { exampleRecords } from "@/content/example-records";

// Use the existing authored unit links to explain code-only fits. These are unit descriptions,
// not newly inferred outcome wording; the original reference remains alongside the English.
export function courseFitTopic(example: Pick<Example, "slug">, fit: CourseFit): string {
  if (/[a-z]{3}/i.test(fit.topic)) return fit.topic;
  const course = courses.find((item) => item.name === fit.course);
  const links = exampleRecords.find((record) => record.example.slug === example.slug)?.unitLinks ?? [];
  const names = units.filter((unit) => unit.courseId === course?.id && links.some((link) => link.unitId === unit.id)).map((unit) => unit.name);
  return names.length ? `${names.join("; ")} · ${fit.topic}` : fit.topic;
}
