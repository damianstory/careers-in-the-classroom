import { runInNewContext } from "node:vm";
import { describe, expect, it } from "vitest";
import { getDetails, getExample, getJob } from "@/content";
import { availableViews, exploreHref, landingSection, layoutBootstrap, parseExplore, selectionQuery } from "@/lib/example-navigation";
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
    expect(parseExplore({ view: "company", role: roleA }, details, views)).toEqual({ view: "about", role: roleA, job: undefined });
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
    expect(parseExplore({ view: "pathways", role: roleA }, details, views)).toEqual({ view: "ways-in", role: roleA, job: undefined });
    // Links saved before jobs moved into roles.
    expect(parseExplore({ view: "jobs", role: roleA, job: jobForA }, details, views)).toEqual({ view: "who", role: roleA, job: jobForA });
  });
});

describe("landing section", () => {
  it("prefers a valid fragment, then a legacy view, then Roles for a selection, then the top", () => {
    expect(landingSection(views, "#ways-in", "company", { role: roleA })).toBe("ways-in");
    expect(landingSection(views, "#who", "company", {})).toBe("who");
    expect(landingSection(views, "", "pathways", { role: roleA })).toBe("ways-in");
    expect(landingSection(views, "", "jobs", {})).toBe("who");
    expect(landingSection(views, "", null, { role: roleA, job: jobForA })).toBe("who");
    expect(landingSection(views, "", null, {})).toBe("question");
    expect(landingSection(views, "", null, {}, "all")).toBeNull();
  });

  it("ignores fragments and views the page does not have", () => {
    expect(landingSection(views, "#sources", "nope", {})).toBe("sources");
    expect(landingSection(["question", "how-it-works", "who", "ways-in", "ask", "sources"], "#about", "company", {})).toBe("question");
    expect(landingSection(views, "#nope", null, { role: roleA })).toBe("who");
  });
});

describe("exploration links", () => {
  const ctx = exampleContext("ghgsat", parseContext({ course: "physics-30", unit: "p30c" }))!;

  it("keeps the validated search context first, the selection next and the section in the fragment", () => {
    expect(exploreHref("ghgsat", ctx.query, {})).toBe("/examples/ghgsat?course=physics-30&unit=p30c");
    expect(exploreHref("ghgsat", ctx.query, { section: "ways-in", role: roleA })).toBe(
      `/examples/ghgsat?course=physics-30&unit=p30c&role=${roleA}#ways-in`,
    );
    expect(exploreHref("ghgsat", ctx.query, { section: "who", role: roleA, job: jobForA })).toBe(
      `/examples/ghgsat?course=physics-30&unit=p30c&role=${roleA}&job=${jobForA}#who`,
    );
    expect(exploreHref("ghgsat", ctx.query, { section: "who", job: jobForA })).not.toContain("job=");
  });

  it("never writes a view", () => {
    for (const section of ["question", "how-it-works", "who", "ways-in", "ask", "about", "sources"] as const) {
      expect(exploreHref("ghgsat", ctx.query, { section, role: roleA })).not.toContain("view=");
    }
  });

  it("round-trips through the parser", () => {
    const selection = { role: roleA, job: jobForA };
    const url = new URL(exploreHref("ghgsat", ctx.query, { section: "who", ...selection }), "http://x");
    const params = Object.fromEntries(url.searchParams);
    expect(parseExplore(params, details, views)).toEqual({ view: undefined, ...selection });
    expect(landingSection(views, url.hash, url.searchParams.get("view"), selection)).toBe("who");
    expect(exampleContext("ghgsat", parseContext(params))?.label).toBe("Physics 30 · Electromagnetic radiation");
  });

  it("never carries an invalid search context", () => {
    expect(exampleContext("ghgsat", parseContext({ course: "physics-30", unit: "zzz" }))).toBeNull();
    expect(exploreHref("ghgsat", "", { section: "about" })).toBe("/examples/ghgsat#about");
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
    expect(views).toEqual(["question", "how-it-works", "who", "ways-in", "ask", "about", "sources"]);
    expect(wilderViews).toEqual(["question", "how-it-works", "who", "ways-in", "ask", "sources"]);
  });

  it("offers all views for the two newly connected examples", () => {
    for (const slug of ["wilder-institute", "e3-lithium"]) {
      const e = getExample(slug)!;
      expect(availableViews(e, getDetails(e.detailsId!))).toEqual(["question", "how-it-works", "who", "ways-in", "ask", "about", "sources"]);
    }
  });

  it("ignores an unavailable view, and drops role and job without enriched records", () => {
    expect(parseExplore({ view: "company" }, undefined, wilderViews)).toEqual({ view: undefined, role: undefined, job: undefined });
    expect(parseExplore({ view: "roles", role: "atmospheric-science", job: "x" }, undefined, wilderViews)).toEqual({
      view: "who",
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


describe("parts landing and pre-paint", () => {
  it.each([["story", "question"], ["company", "about"], ["roles", "who"], ["pathways", "ways-in"], ["jobs", "who"]])("maps legacy %s to %s", (old, part) => {
    expect(landingSection(views, `#${old}`, null, {})).toBe(part);
    expect(landingSection(views, "", old, {})).toBe(part);
  });

  it("omits unavailable content from every sequence", () => {
    const example = { ...getExample("ghgsat")!, roles: [], pathways: [] };
    expect(availableViews(example)).toEqual(["question", "how-it-works", "ask", "sources"]);
  });

  it.each(["parts", "all", "denied"])("bootstrap and hydrated landing agree with %s storage", (preference) => {
    for (const hash of ["", "#how-it-works", "#roles", "#company", "#unknown"]) {
      const { root, context } = bootstrapDOM(preference, hash, "?view=pathways");
      runInNewContext(layoutBootstrap(views, { role: roleA }), context);
      const layout = preference === "all" ? "all" : "parts";
      expect(root.dataset).toEqual({ layout, part: landingSection(views, hash, "pathways", { role: roleA }, layout) });
    }
  });

  it("fails open if the bootstrap cannot initialize", () => {
    const root = { dataset: {} };
    runInNewContext(layoutBootstrap(views, {}), { document: { currentScript: { parentElement: root } }, location: {}, URLSearchParams });
    expect(root.dataset).toEqual({});
  });

  it("cannot embed a closing script tag from serialized data", () => {
    expect(layoutBootstrap(views, { role: "</script>" })).not.toContain("</script>");
  });
});


// Execute the emitted script, including its pre-hydration event lifecycle, without React.
function bootstrapDOM(preference: string, hash: string, search = "") {
  const element = (dataset: Record<string, string>) => ({
    dataset, attributes: new Map<string, string>(),
    setAttribute(name: string, value: string) { this.attributes.set(name, value); },
    removeAttribute(name: string) { this.attributes.delete(name); },
    hasAttribute(name: string) { return this.attributes.has(name); },
  });
  const links = views.map((part) => element({ partLink: part }));
  const toggle = element({});
  const contents = element({});
  contents.setAttribute("data-contents", "");
  const listeners = new Map<string, (event?: unknown) => void>();
  const root = {
    dataset: {} as Record<string, string>,
    querySelectorAll: (selector: string) => selector === "[data-part-link]" ? links : [toggle],
    querySelector: () => null as object | null,
    addEventListener: (name: string, callback: (event?: unknown) => void) => { listeners.set(name, callback); },
    removeEventListener: (name: string) => { listeners.delete(name); },
  };
  const mutation = { notify: () => {}, disconnected: false };
  class Observer {
    constructor(callback: () => void) { mutation.notify = callback; }
    observe() {}
    disconnect() { mutation.disconnected = true; }
  }
  const location = { hash, search };
  const context = {
    document: { currentScript: { parentElement: root }, getElementById: () => null },
    window: { addEventListener: root.addEventListener, removeEventListener: root.removeEventListener },
    location, URLSearchParams, MutationObserver: Observer,
    localStorage: {
      getItem: () => { if (preference === "denied") throw new Error("denied"); return preference; },
      setItem: (_key: string, value: string) => { if (preference === "denied") throw new Error("denied"); preference = value; },
    },
  };
  const click = (button: typeof toggle) => listeners.get("click")?.({
    target: { closest: () => button }, button: 0, preventDefault() {}, stopPropagation() {},
  });
  return { root, context, links, toggle, contents, listeners, mutation, location, click };
}

describe("navigation without hydration", () => {
  it("reveals fragment destinations and marks links, while ignoring the skip-link fragment", () => {
    const dom = bootstrapDOM("parts", "#who");
    runInNewContext(layoutBootstrap(views, {}), dom.context);
    expect(dom.links.filter((link) => link.attributes.has("aria-current")).map((link) => link.dataset.partLink)).toEqual(["who"]);
    for (const [hash, part] of [["#ways-in", "ways-in"], ["#roles", "who"], ["#main", "who"]]) {
      dom.location.hash = hash;
      dom.listeners.get("hashchange")!();
      expect(dom.root.dataset.part).toBe(part);
      expect(dom.links.filter((link) => link.attributes.has("aria-current")).map((link) => link.dataset.partLink)).toEqual([part]);
    }
  });

  it("syncs the parsed navigation then hands event ownership to React", () => {
    const dom = bootstrapDOM("all", "#ways-in");
    runInNewContext(layoutBootstrap(views, {}), dom.context);
    dom.toggle.removeAttribute("aria-pressed"); // controls parsed after the initial script
    dom.root.querySelector = () => ({});
    dom.mutation.notify();
    expect(dom.toggle.attributes.get("aria-pressed")).toBe("true");
    expect(dom.mutation.disconnected).toBe(true);
    dom.listeners.get("explore:ready")!();
    expect(dom.listeners.has("hashchange")).toBe(false);
    expect(dom.listeners.has("click")).toBe(false);
  });

  it("keeps controls useful with denied storage and no React bundle", () => {
    const dom = bootstrapDOM("denied", "#ways-in");
    runInNewContext(layoutBootstrap(views, {}), dom.context);
    dom.click(dom.toggle);
    expect(dom.root.dataset.layout).toBe("all");
    expect(dom.toggle.attributes.get("aria-pressed")).toBe("true");
    dom.click(dom.toggle);
    expect(dom.root.dataset.layout).toBe("parts");
    dom.click(dom.contents);
    expect(dom.root.dataset.layout).toBeUndefined();
    expect(dom.root.dataset.part).toBe("ways-in");
    dom.location.hash = "#about";
    dom.listeners.get("hashchange")!();
    expect(dom.root.dataset).toEqual({ part: "about" });
  });

  it("fails open if the pre-hydration bridge cannot initialize", () => {
    const dom = bootstrapDOM("parts", "");
    runInNewContext(layoutBootstrap(views, {}), { ...dom.context, MutationObserver: undefined });
    expect(dom.root.dataset).toEqual({});
  });
});
