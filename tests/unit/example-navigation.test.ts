import { describe, expect, it } from "vitest";
import { getDetails, getExample, getJob } from "@/content";
import { availableViews, exploreHref, landingSection, parseExplore, selectionQuery } from "@/lib/example-navigation";
import { checkedRange } from "@/lib/job-status";
import { exampleContext, parseContext } from "@/lib/search";

const details = getDetails(getExample("ghgsat")!.detailsId!)!;
const views = availableViews(getExample("ghgsat")!, details);
const [roleA, roleB] = details.roleIds;
const jobForA = details.jobIds.find((id) => getJob(id)!.roleIds.includes(roleA))!;
const jobNotForB = details.jobIds.find((id) => !getJob(id)!.roleIds.includes(roleB));

describe("exploration state", () => {
  it("has no selection or destination by default", () => {
    expect(parseExplore({}, details, views)).toEqual({ view: undefined, role: undefined, job: undefined });
  });

  it("falls back on unknown values instead of failing", () => {
    expect(parseExplore({ view: "nope" }, details, views).view).toBeUndefined();
    expect(parseExplore({ role: "invented-role" }, details, views)).toMatchObject({ role: undefined });
    expect(parseExplore({ role: roleA, job: "invented-job" }, details, views)).toMatchObject({ role: roleA, job: undefined });
  });

  // One page: the selection no longer depends on a view (changed on purpose, PLAN-b2-one-page.md).
  it("keeps a valid role and job without any view", () => {
    expect(parseExplore({ role: roleA, job: jobForA }, details, views)).toEqual({ view: undefined, role: roleA, job: jobForA });
    expect(parseExplore({ view: "company", role: roleA }, details, views)).toEqual({ view: "company", role: roleA, job: undefined });
    expect(parseExplore({ view: "pathways", role: roleA, job: jobForA }, details, views)).toMatchObject({ role: roleA, job: jobForA });
  });

  it("drops an invalid role, and a job without its role", () => {
    expect(parseExplore({ role: "astronaut", job: jobForA }, details, views)).toMatchObject({ role: undefined, job: undefined });
    expect(parseExplore({ job: jobForA }, details, views).job).toBeUndefined();
  });

  it("drops a job that belongs to another role", () => {
    expect(jobNotForB).toBeDefined();
    expect(parseExplore({ role: roleB, job: jobNotForB }, details, views)).toMatchObject({ role: roleB, job: undefined });
  });

  it("still parses legacy view links", () => {
    expect(parseExplore({ view: "pathways", role: roleA }, details, views)).toEqual({ view: "pathways", role: roleA, job: undefined });
    // Links saved before jobs moved into roles.
    expect(parseExplore({ view: "jobs", role: roleA, job: jobForA }, details, views)).toEqual({ view: "roles", role: roleA, job: jobForA });
  });
});

describe("landing section", () => {
  it("prefers a valid fragment, then a legacy view, then Roles for a selection, then the top", () => {
    expect(landingSection(views, "#pathways", "company", { role: roleA })).toBe("pathways");
    expect(landingSection(views, "#roles", "company", {})).toBe("roles");
    expect(landingSection(views, "", "pathways", { role: roleA })).toBe("pathways");
    expect(landingSection(views, "", "jobs", {})).toBe("roles");
    expect(landingSection(views, "", null, { role: roleA, job: jobForA })).toBe("roles");
    expect(landingSection(views, "", null, {})).toBeNull();
  });

  it("ignores fragments and views the page does not have", () => {
    expect(landingSection(views, "#sources", "nope", {})).toBeNull();
    expect(landingSection(["story", "roles", "pathways"], "#company", "company", {})).toBeNull();
    expect(landingSection(views, "#nope", null, { role: roleA })).toBe("roles");
  });
});

describe("exploration links", () => {
  const ctx = exampleContext("ghgsat", parseContext({ course: "physics-30", unit: "p30c" }))!;

  it("keeps the validated search context first, the selection next and the section in the fragment", () => {
    expect(exploreHref("ghgsat", ctx.query, {})).toBe("/examples/ghgsat?course=physics-30&unit=p30c");
    expect(exploreHref("ghgsat", ctx.query, { section: "pathways", role: roleA })).toBe(
      `/examples/ghgsat?course=physics-30&unit=p30c&role=${roleA}#pathways`,
    );
    expect(exploreHref("ghgsat", ctx.query, { section: "roles", role: roleA, job: jobForA })).toBe(
      `/examples/ghgsat?course=physics-30&unit=p30c&role=${roleA}&job=${jobForA}#roles`,
    );
    expect(exploreHref("ghgsat", ctx.query, { section: "roles", job: jobForA })).not.toContain("job=");
  });

  it("never writes a view", () => {
    for (const section of ["story", "company", "roles", "pathways"] as const) {
      expect(exploreHref("ghgsat", ctx.query, { section, role: roleA })).not.toContain("view=");
    }
  });

  it("round-trips through the parser", () => {
    const selection = { role: roleA, job: jobForA };
    const url = new URL(exploreHref("ghgsat", ctx.query, { section: "roles", ...selection }), "http://x");
    const params = Object.fromEntries(url.searchParams);
    expect(parseExplore(params, details, views)).toEqual({ view: undefined, ...selection });
    expect(landingSection(views, url.hash, url.searchParams.get("view"), selection)).toBe("roles");
    expect(exampleContext("ghgsat", parseContext(params))?.label).toBe("Physics 30 · Electromagnetic radiation");
  });

  it("never carries an invalid search context", () => {
    expect(exampleContext("ghgsat", parseContext({ course: "physics-30", unit: "zzz" }))).toBeNull();
    expect(exploreHref("ghgsat", "", { section: "company" })).toBe("/examples/ghgsat#company");
  });
});

describe("navigation key", () => {
  it("normalizes a query the same way on the server and in the browser", () => {
    const server = selectionQuery({ view: "company", role: roleA, course: "physics-30", job: ["x", "y"], unit: undefined });
    const browser = selectionQuery(new URLSearchParams(`course=physics-30&role=${roleA}&job=x&job=y&view=roles`));
    expect(server).toBe(browser);
    expect(server).not.toContain("view=");
  });

  it("tells apart URLs whose validated selection is the same", () => {
    // An invalid job is dropped by the parser, but it is still another URL to navigate away from.
    expect(selectionQuery({ role: roleA, job: "made-up" })).not.toBe(selectionQuery({ role: roleA }));
    expect(parseExplore({ role: roleA, job: "made-up" }, details, views)).toEqual(parseExplore({ role: roleA }, details, views));
  });
});

describe("view availability", () => {
  const wilder = getExample("wilder-institute")!;
  const wilderViews = availableViews(wilder);

  it("keeps the fallback for an example without connected records", () => {
    expect(views).toEqual(["story", "company", "roles", "pathways"]);
    expect(wilderViews).toEqual(["story", "roles", "pathways"]);
  });

  it("offers all views for the two newly connected examples", () => {
    for (const slug of ["wilder-institute", "e3-lithium"]) {
      const e = getExample(slug)!;
      expect(availableViews(e, getDetails(e.detailsId!))).toEqual(["story", "company", "roles", "pathways"]);
    }
  });

  it("ignores an unavailable view, and drops role and job without enriched records", () => {
    expect(parseExplore({ view: "company" }, undefined, wilderViews)).toEqual({ view: undefined, role: undefined, job: undefined });
    expect(parseExplore({ view: "roles", role: "atmospheric-science", job: "x" }, undefined, wilderViews)).toEqual({
      view: "roles",
      role: undefined,
      job: undefined,
    });
  });
});

describe("checked date", () => {
  it("shows one date, or the earliest–latest range", () => {
    expect(checkedRange(["2026-09-25", "2026-09-25"])).toBe("25 Sep 2026");
    expect(checkedRange(["2026-09-25", "2026-09-24"])).toBe("24–25 Sep 2026");
    expect(checkedRange(["2026-08-30", "2026-09-02"])).toBe("30 Aug 2026 – 2 Sep 2026");
  });
});
