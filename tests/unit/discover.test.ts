import { existsSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { discoverImages, exampleDetails, examples, roleProfiles, organizationRoles } from "@/content";
import { cardForSubject, filterCards, parseDiscoverState, roundOrder, serializeDiscoverState, subjectCounts } from "@/lib/discover";
import { buildDiscoverCards } from "@/lib/discover-cards";

const featuredRoles = roleProfiles.filter((r) => discoverImages.some((image) => image.roleId === r.id));
const cards = buildDiscoverCards("2026-10-06");
describe("Discover content", () => {
  it("has one existing picture and one owning example per role", () => {
    expect(discoverImages).toHaveLength(featuredRoles.length);
    for (const role of featuredRoles) {
      const images = discoverImages.filter((image) => image.roleId === role.id);
      expect(images).toHaveLength(1);
      expect(existsSync(`public${images[0].src}`)).toBe(true);
      expect(images[0].clue.length).toBeGreaterThan(40);
      expect(images[0].clue).not.toContain(images[0].title);
      expect(exampleDetails.filter((d) => d.organizationId === images[0].organizationId && d.roleIds.includes(role.id))).toHaveLength(1);
      expect(organizationRoles.some((link) => link.roleId === role.id && link.organizationId === images[0].organizationId)).toBe(true);
    }
  });
  it("derives complete cards and preserves optional saved jobs", () => {
    expect(cards).toHaveLength(featuredRoles.length);
    for (const c of cards) {
      expect(c.example.detailsId).toBeTruthy();
      expect(c.organization.name).toBeTruthy();
      expect(c.evidence).toBeTruthy();
      expect(c.role.tasks).toHaveLength(3);
      expect(c.pathway.roleRationale.find((r) => r.roleId === c.role.id)?.why).toBe(c.rationale);
      expect(c.courseFit.type).toBe("course fit");
      expect(c.courseFit.status).toBeTruthy();
      expect(c.capturedOn).toBe(c.job?.capturedOn ?? null);
    }
    expect(cards.some((c) => c.job === null)).toBe(true);
    expect(cards.find((c) => c.role.id === "animal-care")?.capturedOn).toBe("2026-09-29");
  });
  it("keeps permanent numbers, curated routes and complete source qualifications", () => {
    expect(cards.slice(0, 9).map((c) => [c.number, c.role.id])).toEqual([
      ["01", "atmospheric-science"], ["02", "satellite-engineering"], ["03", "software-data"],
      ["04", "conservation-research"], ["05", "animal-care"], ["06", "wildlife-veterinary"],
      ["07", "process-engineering"], ["08", "process-operations"], ["09", "commercial-partnerships"],
    ]);
    for (const card of cards) {
      if (Number(card.number) < 10) expect(card.title).not.toBe(card.role.title);
      expect(card.evidenceSources.every((source) => source?.url)).toBe(true);
      expect(card.pathwaySources.every((source) => source?.url)).toBe(true);
      if (card.job) expect(card.jobSource?.url).toBeTruthy();
    }
    expect(cards[4].pathway.id).toBe("olds-assistant");
    expect(cards[5].pathwaySources.map((s) => s.id)).toContain("depth-ucalgary-dvm-entry");
    expect(cards[1].job?.employer).toBe("Muon Space");
    expect(cards[1].job?.employerNote.text).toContain("Not connected to GHGSat");
    expect(parseDiscoverState({ role: "05" }, [...cards].reverse()).role).toBe("animal-care");
  });
  it("represents every company and linked role, including shared occupation profiles", () => {
    for (const e of examples) {
      const d = exampleDetails.find((d) => d.id === e.detailsId)!;
      expect(cards.some((c) => c.relatedExamples.some((r) => r.slug === e.slug)), e.slug).toBe(true);
      for (const roleId of d.roleIds.filter((id) => organizationRoles.some((r) => r.organizationId === d.organizationId && r.roleId === id))) {
        const owners = cards.filter((c) => c.relatedExamples.some((r) => r.slug === e.slug && r.roleId === roleId));
        expect(owners, `${e.slug}/${roleId} has exactly one Discover card`).toHaveLength(1);
      }
    }
    expect(new Set(cards.map((c) => c.number)).size).toBe(cards.length);
    expect(new Set(cards.map((c) => c.role.id)).size).toBe(cards.length);
  });
  it("lets shared occupations match the subjects of their actual examples", () => {
    expect(subjectCounts(cards).all).toBe(cards.length);
    expect(filterCards(cards, "physics").some((c) => c.role.id === "work-sonography")).toBe(true);
    expect(filterCards(cards, "chemistry").some((c) => c.role.id === "software-data")).toBe(true);
    const process = cards.find((c) => c.role.id === "process-engineering")!;
    expect(process.relatedExamples.some((e) => e.roleId === "work-process")).toBe(true);
    expect(cards.some((c) => c.role.id === "work-process")).toBe(false);
    const operations = cards.find((c) => c.role.id === "process-operations")!;
    const physics = cardForSubject(operations, "physics");
    expect(physics.example.discipline).toBe("Physics");
    expect(physics.contexts.some((c) => c.example.slug === physics.example.slug)).toBe(true);
    expect(physics.pathway.roleRationale.some((r) => r.roleId === physics.contextRoleId)).toBe(true);
    expect(cardForSubject(operations, "all")).toBe(operations);
  });
});
describe("Discover rounds", () => {
  it("excludes found roles and never duplicates", () => {
    const { order, fresh } = roundOrder(cards, "all", ["animal-care"], () => .3);
    expect(order).toHaveLength(cards.length - 1);
    expect(new Set(order).size).toBe(cards.length - 1);
    expect(order).not.toContain("animal-care");
    expect(fresh).toBe(false);
  });
  it("resets only the exhausted subject and signals a fresh set", () => {
    const active = filterCards(cards, "chemistry").map((c) => c.role.id);
    const result = roundOrder(cards, "chemistry", ["animal-care", ...active]);
    expect(result.fresh).toBe(true);
    expect(result.found).toEqual(["animal-care"]);
    expect(result.order.sort()).toEqual(active.sort());
  });
});
describe("Discover URL state", () => {
  it("round trips a reveal and found list", () => {
    const state = { subject: "biology" as const, role: "animal-care", step: 5, found: ["animal-care", "software-data"] };
    expect(parseDiscoverState(Object.fromEntries(new URLSearchParams(serializeDiscoverState(state, cards))), cards)).toEqual(state);
  });
  it("counts a deep-linked role as found and excludes it from the next round", () => {
    const state = parseDiscoverState({ role: "05", step: "5" }, cards);
    expect(state.role).toBe("animal-care");
    expect(state.found).toEqual(["animal-care"]);
    expect(roundOrder(cards, state.subject, state.found).order).not.toContain("animal-care");
  });
  it("uses only exact card numbers in URLs, including Guess", () => {
    const state = { subject: "all" as const, role: "animal-care", step: 0, found: ["animal-care", "software-data"] };
    const query = new URLSearchParams(serializeDiscoverState(state, cards));
    expect(query.get("role")).toBe("05");
    expect(query.get("step")).toBe("0");
    expect(query.get("found")).toBe("05,03");
    expect(parseDiscoverState(Object.fromEntries(query), cards)).toEqual(state);
    for (const invalid of ["animal-care", "5", "005", " 05", "05 ", "00", "99", "5.0"]) {
      const parsed = parseDiscoverState({ role: invalid, found: invalid, step: "5" }, cards);
      expect(parsed.role).toBeUndefined();
      expect(parsed.found).toEqual([]);
      expect(parsed.step).toBe(0);
    }
  });
  it("validates unknown, mismatched, duplicated and malformed values", () => {
    expect(parseDiscoverState({ subject: "bad", role: "unknown", step: "5", found: "bad,05,05" }, cards)).toEqual({ subject: "all", role: undefined, step: 0, found: ["animal-care"] });
    expect(parseDiscoverState({ subject: "chemistry", role: "05", step: "5" }, cards).role).toBeUndefined();
    for (const step of ["-1", "7", "1.5", "", "NaN", "01"]) {
      expect(parseDiscoverState({ role: "05", step }, cards).step).toBe(0);
    }
    expect(parseDiscoverState({ subject: ["biology"], role: ["05"], found: ["05"] }, cards)).toEqual({ subject: "all", role: undefined, step: 0, found: [] });
    expect(parseDiscoverState({ step: "6" }, cards).step).toBe(0);
  });
});
