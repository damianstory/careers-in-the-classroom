import { describe, expect, it } from "vitest";
import { examples } from "../../src/content";
import { courseFitTopic } from "../../src/lib/course-fit";

describe("course-fit language", () => {
  it("keeps the original reference and explains every code-only fit in words", () => {
    for (const example of examples) for (const fit of example.courses) {
      const topic = courseFitTopic(example, fit);
      expect(topic, `${example.slug}: ${fit.topic}`).toContain(fit.topic);
      expect(topic, `${example.slug}: English connection`).toMatch(/[a-z]{3}/i);
    }
  });
  it("uses the authored genetics unit for AgGene", () => {
    const example = examples.find(e => e.slug === "aggene-crop-traits")!;
    expect(courseFitTopic(example, example.courses[0])).toBe("Cell division, genetics and molecular biology · 30–C3.2k");
  });
});
