import type { Page } from "@playwright/test";
import { expect, test } from "./fixtures";

// One long page per example (docs/build/PLAN-b2-one-page.md, section C, tests 1–10): sections in order,
// the rail as in-page navigation with a scroll-spy, selection (role, job) in the query and the
// destination in the fragment, organization logos, and a footer without links.

const GHGSAT = "/examples/ghgsat";
const lessonNav = (page: Page) => page.getByRole("navigation", { name: "Explore this example" });
const railLink = (page: Page, name: string) => lessonNav(page).getByRole("link", { name, exact: true });
const region = (page: Page, name: string) => page.getByRole("region", { name, exact: true });
const heading = (page: Page, section: string) => page.locator(`#${section}-title`);
const pathways = (page: Page) => region(page, "Ways to prepare for this work");
const filterNote = (page: Page) => pathways(page).locator("[data-pathway-filter]");
const pathwayCards = (page: Page) => pathways(page).getByRole("heading", { level: 3 });

async function expectLanded(page: Page, section: string) {
  await expect(heading(page, section)).toBeFocused();
  await expect(heading(page, section)).toBeInViewport();
}

test("1: scrolling from the story into Company moves the rail's marker without a click", async ({ page, requests }) => {
  void requests;
  await page.goto(GHGSAT);
  await expect(railLink(page, "Classroom story")).toHaveAttribute("aria-current", "location");
  // Park just above the Company band, then scroll on with the wheel.
  await page.evaluate(() => window.scrollTo(0, document.getElementById("company")!.getBoundingClientRect().top + window.scrollY - 500));
  await expect(railLink(page, "Classroom story")).toHaveAttribute("aria-current", "location");
  const before = page.url();
  for (let i = 0; i < 6; i++) {
    await page.mouse.move(700, 500);
    await page.mouse.wheel(0, 150);
  }
  await expect(railLink(page, "Company")).toHaveAttribute("aria-current", "location");
  await expect(railLink(page, "Classroom story")).not.toHaveAttribute("aria-current");
  // A scroll-spy only marks; it never navigates, moves focus or rewrites the URL.
  expect(page.url()).toBe(new URL(before).href);
  await expect(heading(page, "company")).not.toBeFocused();
});

test("2: a legacy ?view=roles link lands on Roles with its heading focused", async ({ page, requests }) => {
  void requests;
  await page.goto(`${GHGSAT}?view=roles`);
  await expect(heading(page, "roles")).toHaveText("Roles documented at GHGSat");
  await expectLanded(page, "roles");
  await expect(railLink(page, "Roles")).toHaveAttribute("aria-current", "location");
});

test("3: a selected role opens inline in Roles, and All roles returns to the list", async ({ page, requests }) => {
  void requests;
  await page.goto(`${GHGSAT}?view=roles&role=atmospheric-science`);
  const roles = page.locator("#roles");
  await expect(heading(page, "roles")).toHaveText("Atmospheric science and remote sensing");
  await expectLanded(page, "roles");
  await expect(roles.getByRole("heading", { name: "What might you actually do?" })).toBeVisible();
  await expect(roles.getByRole("heading", { name: "Satellite and instrument engineering" })).toHaveCount(0);

  await roles.getByRole("link", { name: "All roles at GHGSat" }).click();
  await expect(page).toHaveURL(/\/examples\/ghgsat#roles$/);
  await expect(heading(page, "roles")).toHaveText("Roles documented at GHGSat");
  await expectLanded(page, "roles");
  await expect(roles.getByRole("link", { name: "Satellite and instrument engineering" })).toBeVisible();
});

test("4: Pathways follows the selected role, and Show all clears it and lands on Pathways", async ({ page, requests }) => {
  void requests;
  await page.goto(`${GHGSAT}?role=satellite-engineering#pathways`);
  await expectLanded(page, "pathways");
  await expect(filterNote(page)).toHaveText("Showing routes for satellite and instrument engineering. Show all");
  await expect(pathwayCards(page)).toHaveText(["Engineering Physics (BSc)"]);

  await filterNote(page).getByRole("link", { name: "Show all" }).click();
  await expect(page).toHaveURL(/\/examples\/ghgsat#pathways$/);
  await expect(filterNote(page)).toHaveCount(0);
  await expect(pathwayCards(page)).toHaveCount(5);
  await expectLanded(page, "pathways");
  // The role's detail closed with it.
  await expect(heading(page, "roles")).toHaveText("Roles documented at GHGSat");
});

test("5: each example shows its organization's logo, captioned, on the right plate", async ({ page, requests }) => {
  void requests;
  for (const { slug, org, plate } of [
    { slug: "ghgsat", org: "GHGSat", plate: "light" },
    { slug: "e3-lithium", org: "E3 Lithium", plate: "light" },
    { slug: "wilder-institute", org: "Wilder Institute", plate: "dark" },
  ]) {
    await page.goto(`/examples/${slug}`);
    const hero = page.locator("#story header").first();
    const logo = hero.getByRole("img", { name: `${org} logo`, exact: true });
    await expect(logo, slug).toBeVisible();
    await expect(logo, slug).toHaveAttribute("src", `/images/logos/${slug}.svg`);
    await expect.poll(() => logo.evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0), { message: `${slug} loaded` }).toBe(true);
    const box = (await logo.boundingBox())!;
    expect(box.height, slug).toBeLessThanOrEqual(40.5);
    expect(box.width, slug).toBeLessThanOrEqual(160.5);
    await expect(hero.locator("figure[data-logo] figcaption"), slug).toHaveText("Logo shown for identification only");
    await expect(hero.locator("[data-plate]"), slug).toHaveAttribute("data-plate", plate);
    // Right of the question on wide screens; under the org line on phones.
    const title = (await page.getByRole("heading", { level: 1 }).boundingBox())!;
    if (page.viewportSize()!.width > 640) expect(box.x, slug).toBeGreaterThan(title.x + title.width);
    else expect(box.y, slug).toBeGreaterThan((await hero.getByText(org, { exact: true }).first().boundingBox())!.y);
  }
});

test("6: the footer has no links", async ({ page, requests }) => {
  void requests;
  for (const url of ["/", GHGSAT, "/get-involved", "/digest"]) {
    await page.goto(url);
    await expect(page.getByRole("contentinfo"), url).toBeVisible();
    await expect(page.getByRole("contentinfo").getByRole("link"), url).toHaveCount(0);
  }
});

test("7: one landing rule for load and reload", async ({ page, requests }) => {
  void requests;
  // A role and job with #roles: both open, and Roles has focus.
  await page.goto(`${GHGSAT}?role=atmospheric-science&job=ghgsat-emissions-scientist#roles`);
  await expect(page.getByRole("article", { name: "Remote Emissions Scientist" })).toBeVisible();
  await expectLanded(page, "roles");
  await page.reload();
  await expect(page.getByRole("article", { name: "Remote Emissions Scientist" })).toBeVisible();
  await expectLanded(page, "roles");

  // A legacy view with a role: Pathways, filtered.
  await page.goto(`${GHGSAT}?view=pathways&role=satellite-engineering`);
  await expect(filterNote(page)).toBeVisible();
  await expectLanded(page, "pathways");

  // The fragment beats the selection…
  await page.goto(`${GHGSAT}?role=atmospheric-science#pathways`);
  await expectLanded(page, "pathways");
  // …and the legacy view.
  await page.goto(`${GHGSAT}?view=company#roles`);
  await expectLanded(page, "roles");

  // A section move drops a stale view, so a reload lands on the new section.
  await page.goto(`${GHGSAT}?view=company`);
  await expectLanded(page, "company");
  await railLink(page, "Roles").click();
  await expect(page).toHaveURL(/\/examples\/ghgsat#roles$/);
  await page.reload();
  await expectLanded(page, "roles");

  // Nothing to land on: the top, with no forced focus.
  await page.goto(GHGSAT);
  expect(await page.evaluate(() => window.scrollY)).toBe(0);
  await expect(heading(page, "story")).not.toBeFocused();
});

test("8: Back and Forward unwind the selection; section moves add no history", async ({ page, requests }) => {
  void requests;
  await page.goto(GHGSAT);
  const entries = await page.evaluate(() => history.length);
  await railLink(page, "Roles").click();
  await railLink(page, "Company").click();
  await railLink(page, "Roles").click();
  await expect(page).toHaveURL(/\/examples\/ghgsat#roles$/);
  expect(await page.evaluate(() => history.length)).toBe(entries);

  await region(page, "Roles documented at GHGSat").getByRole("link", { name: "Atmospheric science and remote sensing" }).click();
  await expect(page).toHaveURL(/\?role=atmospheric-science#roles$/);
  await page.getByRole("link", { name: /Remote Emissions Scientist/ }).click();
  await expect(page).toHaveURL(/\?role=atmospheric-science&job=ghgsat-emissions-scientist#roles$/);
  await expect(page.getByRole("article", { name: "Remote Emissions Scientist" })).toBeVisible();

  await page.goBack();
  await expect(page).toHaveURL(/\?role=atmospheric-science#roles$/);
  await expect(page.getByRole("article")).toHaveCount(0);
  await expect(heading(page, "roles")).toHaveText("Atmospheric science and remote sensing");
  await expectLanded(page, "roles");

  await page.goBack();
  await expect(page).toHaveURL(/\/examples\/ghgsat#roles$/);
  await expect(heading(page, "roles")).toHaveText("Roles documented at GHGSat");
  await expectLanded(page, "roles");

  await page.goForward();
  await expect(heading(page, "roles")).toHaveText("Atmospheric science and remote sensing");
  await expectLanded(page, "roles");
});

test("9: the story's interior links move within the page, by pointer and by keyboard", async ({ page, requests }) => {
  void requests;
  for (const [name, section] of [
    ["Meet GHGSat", "company"],
    ["See the roles", "roles"],
  ] as const) {
    for (const how of ["pointer", "keyboard"] as const) {
      await page.goto(GHGSAT);
      const link = page.getByRole("region", { name: "Keep going" }).getByRole("link", { name });
      if (how === "pointer") await link.click();
      else {
        await link.focus();
        await page.keyboard.press("Enter");
      }
      await expect(page, `${name} by ${how}`).toHaveURL(new RegExp(`/examples/ghgsat#${section}$`));
      await expectLanded(page, section);
      await expect(lessonNav(page).locator(`#nav-${section}`)).toHaveAttribute("aria-current", "location");
    }
  }
});

test("10: See all pathways shows every program, and Back restores the role", async ({ page, requests }) => {
  void requests;
  await page.goto(`${GHGSAT}?role=satellite-engineering#roles`);
  await expect(heading(page, "roles")).toHaveText("Satellite and instrument engineering");
  await page.getByRole("link", { name: "See all pathways", exact: true }).click();
  await expect(page).toHaveURL(/\/examples\/ghgsat#pathways$/);
  await expectLanded(page, "pathways");
  await expect(filterNote(page)).toHaveCount(0);
  // Programs linked to other roles are there too.
  await expect(pathways(page).getByText("Earth Sciences major (BSc)")).toBeVisible();
  await expect(pathwayCards(page)).toHaveCount(5);

  await page.goBack();
  await expect(page).toHaveURL(/\?role=satellite-engineering#roles$/);
  await expect(heading(page, "roles")).toHaveText("Satellite and instrument engineering");
  await expectLanded(page, "roles");
});

test("sections come in order, each with one heading, and the shared end blocks once", async ({ page, requests }) => {
  void requests;
  await page.goto(GHGSAT);
  const railLabels = ["Classroom story", "Company", "Roles", "Pathways"];
  const ids = await page.locator("main section[id]").evaluateAll((els) => els.filter((e) => e.parentElement?.closest("section[id]") === null).map((e) => e.id));
  expect(ids.filter((id) => ["story", "company", "roles", "pathways"].includes(id))).toEqual(["story", "company", "roles", "pathways"]);
  await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
  for (const [i, s] of ["story", "company", "roles", "pathways"].entries()) {
    await expect(heading(page, s)).toHaveJSProperty("tagName", i === 0 ? "H1" : "H2");
    await expect(page.locator(`#${s}`)).toHaveAttribute("aria-labelledby", `${s}-title`);
    // The quiet band before each later section is numbered like the rail.
    if (i > 0) await expect(page.locator(`#${s} > [aria-hidden="true"]`).first()).toHaveText(new RegExp(`^0${i + 1}\\s*·\\s*${railLabels[i]}`));
  }
  await expect(page.getByRole("heading", { name: "Sources and course fit" })).toHaveCount(1);
  await expect(page.getByRole("complementary", { name: "Bring this work into class" })).toHaveCount(1);
  // The per-view "Your classroom story" recap is gone: the story is on the same page.
  await expect(page.getByRole("region", { name: "Your classroom story" })).toHaveCount(0);
});

// ---- Inspection fixes (B2-ONE-INSPECT-001…004) ----

// The section under the rail's active line, computed the way RailNav does (pinned height + 30% of the rest).
const sectionUnderLine = (page: Page) =>
  page.evaluate(() => {
    const header = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-h"));
    const bar = window.matchMedia("(min-width: 961px)").matches ? 0 : document.querySelector<HTMLElement>("[data-rail-sticky]")!.offsetHeight;
    const top = header + bar;
    const line = top + Math.max(8, (window.innerHeight - top) * 0.3);
    let current = "story";
    for (const id of ["story", "company", "roles", "pathways"]) if (document.getElementById(id)!.getBoundingClientRect().top <= line) current = id;
    return current;
  });

async function scrollSettled(page: Page) {
  let last = -1;
  await expect
    .poll(async () => {
      const y = await page.evaluate(() => window.scrollY);
      const settled = y === last;
      last = y;
      return settled;
    }, { intervals: [150] })
    .toBe(true);
}

const OPEN_JOB = `${GHGSAT}?role=atmospheric-science&job=ghgsat-emissions-scientist#roles`;

test("INSPECT-001: a role link elsewhere that closes an open posting lands on Roles", async ({ page, requests }) => {
  void requests;
  for (const [where, link] of [
    ["Company", (p: Page) => region(p, "GHGSat").getByRole("link", { name: "Atmospheric science and remote sensing" })],
    ["Pathways", (p: Page) => pathways(p).getByRole("link", { name: "Atmospheric science and remote sensing" }).first()],
  ] as const) {
    await page.goto(OPEN_JOB);
    await expect(page.getByRole("article", { name: "Remote Emissions Scientist" })).toBeVisible();
    await railLink(page, where).click();
    await expect(railLink(page, where)).toHaveAttribute("aria-current", "location");
    await link(page).click();
    await expect(page, where).toHaveURL(/\/examples\/ghgsat\?role=atmospheric-science#roles$/);
    await expect(page.getByRole("article")).toHaveCount(0);
    await expect(heading(page, "roles")).toHaveText("Atmospheric science and remote sensing");
    await expectLanded(page, "roles");
  }

  // The posting row's own toggle still keeps the reader at the row.
  await page.goto(OPEN_JOB);
  const row = page.getByRole("link", { name: /Remote Emissions Scientist/, expanded: true });
  await row.click();
  await expect(page).toHaveURL(/\?role=atmospheric-science#roles$/);
  await expect(page.getByRole("link", { name: /Remote Emissions Scientist/, expanded: false })).toBeFocused();
});

test("INSPECT-002: navigating away from an invalid job lands, and Back/Forward follow", async ({ page, requests }) => {
  void requests;
  await page.goto(`${GHGSAT}?role=atmospheric-science&job=made-up#company`);
  await expectLanded(page, "company");
  await expect(page.getByRole("article")).toHaveCount(0);

  await region(page, "GHGSat").getByRole("link", { name: "Atmospheric science and remote sensing" }).click();
  await expect(page).toHaveURL(/\/examples\/ghgsat\?role=atmospheric-science#roles$/);
  await expectLanded(page, "roles");

  await page.goBack();
  await expect(page).toHaveURL(/\?role=atmospheric-science&job=made-up#company$/);
  await expectLanded(page, "company");
  await page.goForward();
  await expect(page).toHaveURL(/\?role=atmospheric-science#roles$/);
  await expectLanded(page, "roles");
});

test("INSPECT-003: an interrupted section move marks the section actually on screen", async ({ page, requests }, info) => {
  void requests;
  // By the wheel (desktop pointer) and by any other scroll that cancels the move.
  for (const interrupt of ["wheel", "scroll"] as const) {
    if (interrupt === "wheel" && info.project.name === "phone") continue;
    await page.goto(GHGSAT);
    await railLink(page, "Pathways").click();
    await page.waitForTimeout(80);
    if (interrupt === "wheel") {
      await page.mouse.move(800, 500);
      for (let i = 0; i < 3; i++) await page.mouse.wheel(0, -600);
    } else {
      await page.evaluate(() => window.scrollTo({ top: document.getElementById("company")!.getBoundingClientRect().top + window.scrollY + 200, behavior: "instant" }));
    }
    await scrollSettled(page);
    const expected = await sectionUnderLine(page);
    if (interrupt === "scroll") expect(expected).toBe("company");
    await expect(lessonNav(page).locator(`#nav-${expected}`), `${interrupt}: marks ${expected}`).toHaveAttribute("aria-current", "location");
    await expect(lessonNav(page).locator("[aria-current]")).toHaveCount(1);
  }
});

test("INSPECT-004: with nothing to land on, a load starts at the top", async ({ page, requests }) => {
  void requests;
  // A scrolled bare URL, reloaded: no restored position.
  await page.goto(GHGSAT);
  await page.evaluate(() => window.scrollTo(0, 3000));
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(3000);
  await page.reload();
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0);
  await expect(page.locator("main :focus")).toHaveCount(0);

  // A fragment that names an element but not a section: back to the top, no forced focus.
  for (const hash of ["#sources", "#explore-strip"]) {
    await page.goto(`${GHGSAT}${hash}`);
    await expect.poll(() => page.evaluate(() => window.scrollY), hash).toBe(0);
    await expect(page.locator("main :focus"), hash).toHaveCount(0);
    await expect(railLink(page, "Classroom story")).toHaveAttribute("aria-current", "location");
  }
});

test("INSPECT-005: Back from an example to the library leaves the library's scroll to the browser and router", async ({ page, requests }) => {
  void requests;
  // Record every programmatic scroll to the top, so the example cannot quietly reset the library.
  await page.addInitScript(() => {
    const w = window as unknown as { __topScrolls: string[] };
    w.__topScrolls = [];
    const original = window.scrollTo.bind(window);
    window.scrollTo = ((...args: [ScrollToOptions] | [number, number]) => {
      const top = typeof args[0] === "object" ? args[0].top : args[1];
      if (top === 0) w.__topScrolls.push(window.location.pathname);
      return original(...(args as [ScrollToOptions]));
    }) as typeof window.scrollTo;
  });
  const question = "How can you find an invisible gas from space?";
  const scrollY = () => page.evaluate(() => Math.round(window.scrollY));
  for (const library of ["/#library", "/?course=physics-30&unit=p30c#library", "/?course=physics-30&unit=p30c"]) {
    await page.goto(library, { waitUntil: "networkidle" });
    const anchor = await scrollY(); // where the #library fragment put the page (0 without one)
    const card = page.getByRole("link", { name: question });
    await card.scrollIntoViewIfNeeded();
    // Park a little further down, so the position is the reader's own.
    await page.evaluate(() => window.scrollBy(0, 120));
    const y = await scrollY();
    expect(y, library).toBeGreaterThan(anchor);

    await card.click();
    await expect(page.getByRole("heading", { level: 1, name: question })).toBeVisible();
    await page.goBack();
    await expect(page).toHaveURL(new RegExp(`${library.replace(/[?]/g, "\\?")}$`));
    await expect(card).toBeVisible();
    // The browser restores the reader's position. With a #library fragment the router may instead bring
    // the page to that fragment, and on phones the restored position can differ by a header's height:
    // both happen after Back from any page, with or without the example's code. Never the top.
    const near = (now: number) => Math.abs(now - y) <= 120 || (library.includes("#") && now === anchor);
    await expect.poll(async () => { const now = await scrollY(); return near(now) ? "ok" : now; }, `${library}: near ${y}`).toBe("ok");
    const settled = await scrollY();
    expect(settled, library).toBeGreaterThan(0);
    // …and it stays there: no deferred landing from the example arrives late.
    await page.waitForTimeout(500);
    expect(await scrollY(), `${library} after a moment`).toBe(settled);
    expect(await page.evaluate(() => (window as unknown as { __topScrolls: string[] }).__topScrolls), library).toEqual([]);
  }
});

test("INSPECT-005: a history traversal to another page is never handled as the example's", async ({ page, requests }) => {
  void requests;
  // Depending on timing, the router may still show the example when popstate arrives for the library.
  // Reproduce that moment directly: the URL is already the library's while the example is mounted.
  await page.goto(GHGSAT);
  await expect(railLink(page, "Classroom story")).toHaveAttribute("aria-current", "location");
  await page.evaluate(() => window.scrollTo(0, 2000));
  const moved = await page.evaluate(async () => {
    const tops: number[] = [];
    const original = window.scrollTo.bind(window);
    window.scrollTo = ((...args: [ScrollToOptions]) => {
      tops.push(Math.round(args[0].top ?? -1));
      return original(...args);
    }) as typeof window.scrollTo;
    // The browser's own history API, not the router's patched copy: the router is not involved.
    History.prototype.pushState.call(window.history, null, "", "/#library");
    window.dispatchEvent(new PopStateEvent("popstate", { state: null }));
    await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(() => setTimeout(r, 300))));
    return { tops, y: Math.round(window.scrollY) };
  });
  expect(moved).toEqual({ tops: [], y: 2000 });
});

test("INSPECT-006: on a short landscape screen the focused heading is always on screen", async ({ page, requests }) => {
  void requests;
  await page.setViewportSize({ width: 568, height: 320 });
  // The focused heading lies fully between the pinned bars (header and tab bar) and the bottom edge.
  const focusedHeadingOnScreen = () =>
    page.evaluate(() => {
      const el = document.activeElement as HTMLElement | null;
      if (!el || !/^H[12]$/.test(el.tagName)) return `focus on ${el?.tagName}`;
      const header = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-h"));
      const pinned = header + document.querySelector<HTMLElement>("[data-rail-sticky]")!.offsetHeight;
      const r = el.getBoundingClientRect();
      return r.top >= pinned - 0.5 && r.bottom <= window.innerHeight + 0.5 ? "on screen" : `${el.id}: ${Math.round(r.top)}–${Math.round(r.bottom)}, visible ${pinned}–${window.innerHeight}`;
    });
  const expectHeading = async (section: string, text: string | RegExp, what: string) => {
    await expect(heading(page, section), what).toBeFocused();
    await expect(heading(page, section), what).toHaveText(text);
    await expect.poll(focusedHeadingOnScreen, what).toBe("on screen");
    await expect(railLink(page, { story: "Classroom story", company: "Company", roles: "Roles", pathways: "Pathways" }[section]!), what).toHaveAttribute("aria-current", "location");
  };

  // A load with a selected role.
  await page.goto(`${GHGSAT}?role=atmospheric-science#roles`);
  await expectHeading("roles", "Atmospheric science and remote sensing", "load");

  // Section moves through the tab bar.
  for (const [name, section, text] of [
    ["Pathways", "pathways", "Ways to prepare for this work"],
    ["Company", "company", "GHGSat"],
    ["Roles", "roles", "Atmospheric science and remote sensing"],
  ] as const) {
    await railLink(page, name).click();
    await expectHeading(section, text, `tab ${name}`);
  }

  // A selection change, then Back and Forward.
  await page.locator("#roles").getByRole("link", { name: "All roles at GHGSat" }).click();
  await expect(page).toHaveURL(/\/examples\/ghgsat#roles$/);
  await expectHeading("roles", "Roles documented at GHGSat", "All roles");
  await page.goBack();
  await expect(page).toHaveURL(/\?role=atmospheric-science#roles$/);
  await expectHeading("roles", "Atmospheric science and remote sensing", "Back");
  await page.goForward();
  await expect(page).toHaveURL(/\/examples\/ghgsat#roles$/);
  await expectHeading("roles", "Roles documented at GHGSat", "Forward");
});
