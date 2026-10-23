import { describe, expect, it } from "vitest";
import { courses, examples, unitsForCourse } from "@/content";
import { courseDoors } from "@/app/_home/data";
import { buildLibrary, courseOptions, filterQuery, parseFilter } from "@/lib/library";
import { buildDiscoverCards } from "@/lib/discover-cards";
import { filterCards, parseDiscoverState, roundOrder, serializeDiscoverState } from "@/lib/discover";

const modules = ["cse1120", "inf2070", "cse1240", "ent2010", "fin3060"];
const expectedCounts: Record<string, number> = { cse1120: 7, inf2070: 11, cse1240: 3, ent2010: 12, fin3060: 6 };

describe("verified CTS course browsing with approved examples", () => {
  it.each(modules)("keeps %s selectable with sourced outcomes and honest coverage", (id) => {
    const course = courses.find((c) => c.id === id)!;
    expect(course.curriculum?.url).toContain(`/pos/CTS${id.slice(0, 3).toUpperCase()}/${id.toUpperCase()}`);
    expect(course.focusLabel).toBe("Outcome focus");
    const focuses = unitsForCourse(id);
    expect(focuses.length).toBeGreaterThan(0);
    expect(focuses.every((u) => u.outcomeIds?.length && u.preparedSearchId)).toBe(true);
    expect(courseDoors.find((c) => c.id === id)).toMatchObject({ group: course.group, count: expectedCounts[id] });
    expect(courseOptions().find((c) => c.id === id)?.units.every((u) => u.ready)).toBe(true);
    for (const unitId of [undefined, ...focuses.map((u) => u.id)]) {
      const filter = { courseId: id, unitId };
      expect(parseFilter(Object.fromEntries(new URLSearchParams(filterQuery(filter))))).toMatchObject(filter);
      const library = buildLibrary(filter);
      expect(library).toMatchObject({ count: expectedCounts[id], noMatch: false });
      const prepared = library.sections.find((s) => s.id === (unitId ? "fits" : "course"))!;
      expect(prepared.items).toHaveLength(expectedCounts[id]);
      expect(prepared.items.every((item) => item.type === "example" && item.example.courses.some((fit) => fit.course === course.name))).toBe(true);
      expect(library.sections.flatMap((s) => s.items).filter((i) => i.type === "example")).toHaveLength(examples.length);
    }
  });

  it("does not count science suggestions as a technology course match", () => {
    const library = buildLibrary({ courseId: "cse1120", topic: "methane" });
    expect(library.sections.find((s) => s.id === "topic")?.items.length).toBeGreaterThan(0);
    expect(library).toMatchObject({ count: 0, noMatch: true });
    expect(library.sections.some((s) => s.id === "fits" || s.id === "course")).toBe(false);
    expect(parseFilter({ course: "fin3060", unit: "cse1120-focus" }).unitId).toBeUndefined();
  });

  it.each(["technology", "business"] as const)("preserves an empty %s Discover selection without inventing cards", (subject) => {
    // Keep the empty-state contract even now that the actual library has these subjects.
    const cards = buildDiscoverCards("2026-10-20").filter((c) => !c.subjects.includes(subject));
    expect(filterCards(cards, subject)).toEqual([]);
    const state = parseDiscoverState({ subject, role: "03", found: "05" }, cards);
    expect(state).toMatchObject({ subject, role: undefined, step: 0, found: ["animal-care"] });
    expect(parseDiscoverState(Object.fromEntries(new URLSearchParams(serializeDiscoverState(state, cards))), cards)).toEqual(state);
    expect(roundOrder(cards, subject, state.found).order).toEqual([]);
  });

  it.each(["technology", "business"] as const)("starts a sourced %s round in the populated library", (subject) => {
    const cards = buildDiscoverCards("2026-10-20");
    const matching = filterCards(cards, subject);
    expect(matching.length).toBeGreaterThan(0);
    expect(roundOrder(cards, subject, []).order.sort()).toEqual(matching.map((c) => c.role.id).sort());
    for (const card of matching) {
      expect([card, ...card.contexts].some((context) => context.subject === subject && context.evidenceSources.length > 0)).toBe(true);
    }
  });
});
