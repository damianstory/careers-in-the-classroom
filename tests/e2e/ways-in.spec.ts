import AxeBuilder from "@axe-core/playwright";
import type { Page } from "@playwright/test";
import { examples } from "../../src/content";
import { expect, PROBE, test } from "./fixtures";

// The four ways into /connections and the quick bar that follows the reader down the page.

const bar = (page: Page) => page.locator("[data-quickbar]");
const quick = (page: Page) => page.getByRole("navigation", { name: "Ways in (quick bar)" });
const doors = (page: Page) => page.getByRole("navigation", { name: "Ways in", exact: true });
const rowBottom = (page: Page) => page.locator("#doors").evaluate((el) => el.getBoundingClientRect().bottom);
const headerH = (page: Page) =>
  page.evaluate(() => parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-h")));

test("the course door is the library, and old filter links still land there", async ({ page, requests }) => {
  void requests;
  await page.goto("/connections");
  await expect(doors(page).getByRole("link", { name: /Your course/ })).toHaveAttribute("aria-current", "page");
  await expect(page.locator("#filter-course")).toBeVisible();
  await page.goto("/connections?by=company&course=physics-30");
  await expect(page.getByRole("heading", { level: 2, name: "In Physics 30" })).toBeVisible();
  await expect(doors(page).getByRole("link", { name: /Your course/ })).toHaveAttribute("aria-current", "page");
  await page.goto("/?course=physics-30");
  await expect(page).toHaveURL(/\/connections\?course=physics-30$/);
});

test("each other door lists the connections its own way", async ({ page, requests }) => {
  void requests;
  await page.goto("/connections");
  await doors(page).getByRole("link", { name: /A challenge/ }).click();
  await expect(page).toHaveURL(/\?by=challenge$/);
  await expect(page.getByRole("heading", { level: 2, name: "Start from a challenge" })).toBeVisible();
  await expect(page.locator("#filter-course")).toHaveCount(0);

  await doors(page).getByRole("link", { name: /A company/ }).click();
  await expect(page.getByRole("heading", { level: 2, name: "Start from a company" })).toBeVisible();
  const rows = page.locator("main ul li:has(> span img)");
  await expect(rows).toHaveCount(examples.length);

  await doors(page).getByRole("link", { name: /A kind of work/ }).click();
  await expect(page.getByRole("heading", { level: 2, name: "Start from a kind of work" })).toBeVisible();
  const role = page.getByRole("link", { name: /GHGSat/ }).first();
  await expect(role).toHaveAttribute("href", /^\/examples\/ghgsat\?role=[\w-]+&from=role#who$/);
});

for (const width of [320, 390]) {
  test(`kinds of work read as one column at ${width}px`, async ({ page, requests }, info) => {
    void requests;
    test.skip(info.project.name !== "phone");
    await page.setViewportSize({ width, height: 800 });
    await page.goto("/connections?by=role");
    const summary = page.locator("main li p + p").first();
    expect((await summary.boundingBox())!.width).toBeGreaterThan(width - 80);
    // Organization links keep their logo and name on one line.
    const link = (await page.getByRole("link", { name: /GHGSat/ }).first().boundingBox())!;
    expect(link.height).toBeLessThanOrEqual(40);
    expect(link.x + link.width).toBeLessThanOrEqual(width);
    expect(await page.evaluate(() => document.documentElement.scrollWidth - innerWidth)).toBe(0);
  });
}

test("the quick bar appears past the doors, switches doors and hides again", async ({ page, requests }) => {
  void requests;
  await page.goto("/connections?by=company");
  await expect(bar(page)).not.toHaveAttribute("data-shown");
  await expect(bar(page)).toHaveAttribute("aria-hidden", "true");
  // A jump straight past the row (no intersection on the way) still shows it.
  await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
  await expect(bar(page)).toHaveAttribute("data-shown", "");

  await quick(page).getByRole("link", { name: "A kind of work" }).click();
  await expect(page).toHaveURL(/\?by=role#library$/);
  await expect(page.getByRole("heading", { level: 2, name: "Start from a kind of work" })).toBeVisible();
  await expect.poll(() => rowBottom(page)).toBeLessThanOrEqual(await headerH(page));
  await expect(bar(page)).toHaveAttribute("data-shown", "");
  await expect(quick(page).getByRole("link", { name: "A kind of work" })).toHaveAttribute("aria-current", "page");

  // Back at the doors the bar hides, and focus inside it moves to the open door.
  await quick(page).getByRole("link", { name: "A kind of work" }).focus();
  await page.evaluate(() => window.scrollTo(0, 0));
  await expect(bar(page)).not.toHaveAttribute("data-shown");
  await expect(doors(page).getByRole("link", { name: /A kind of work/ })).toBeFocused();
});

test("search from the quick bar filters the library and Escape closes it", async ({ page, requests }) => {
  void requests;
  await page.goto("/connections?by=challenge");
  await page.evaluate(() => window.scrollTo(0, 2000));
  const search = quick(page).getByRole("button", { name: "Search connections" });
  await search.click();
  await expect(page.locator("#quick-topic")).toBeFocused();
  await page.keyboard.press("Tab");
  await page.keyboard.press("Tab");
  await page.keyboard.press("Escape");
  await expect(page.locator("#quick-topic")).toHaveCount(0);
  await expect(search).toBeFocused();

  await search.click();
  await page.locator("#quick-topic").fill("water");
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/\/connections\?topic=water#library$/);
  await expect(page.locator("#filter-topic")).toHaveValue("water");
  await expect(page.getByRole("heading", { level: 2, name: "Matches “water”" })).toBeVisible();
});

test("quick-bar navigation keeps the signup and noted searches when storage is blocked", async ({ page, requests }) => {
  void requests;
  // With storage writes blocked, both live only in memory (src/lib/session.ts), so a document reload
  // would lose them. Each blocked write is recorded so the test can see what was kept in memory.
  await page.addInitScript(() => {
    const w = window as unknown as { citcWrites: [string, string][] };
    w.citcWrites = [];
    Storage.prototype.setItem = (key: string, value: string) => {
      w.citcWrites.push([key, value]);
      throw new Error("blocked");
    };
  });
  const state = () =>
    page.evaluate(() => {
      const w = window as unknown as { citcMark?: number; citcWrites: [string, string][] };
      return { mark: w.citcMark, unmatched: w.citcWrites.filter(([k]) => k === "citc.unmatched").map(([, v]) => v) };
    });

  await page.goto("/connections?course=physics-30&unit=p30c");
  await page.getByRole("button", { name: "Sign up free to open" }).click();
  const dialog = page.getByRole("dialog", { name: "Save your search. Get Calgary examples monthly." });
  await dialog.getByLabel("Email").fill(`${PROBE}@example.com`);
  await dialog.getByLabel("School", { exact: true }).fill(PROBE);
  await dialog.getByRole("button", { name: "Create free account" }).click();
  await page.getByRole("button", { name: "Back to what I was reading" }).click();
  await expect(page.getByText("Free with signup")).toHaveCount(0);
  // Signup removes its opener. Wait for the dialog's asynchronous focus restoration
  // before scrolling; otherwise that restoration can undo the test's scroll.
  await expect(page.getByRole("heading", { level: 1 })).toBeFocused();
  await page.evaluate(() => ((window as unknown as { citcMark: number }).citcMark = 1));

  // Switch door, then search for a topic nothing matches: the no-match banner records it.
  await page.evaluate(() => window.scrollTo(0, 1500));
  await quick(page).getByRole("link", { name: "A company" }).click();
  await expect(page.getByRole("heading", { level: 2, name: "Start from a company" })).toBeVisible();
  await page.evaluate(() => window.scrollTo(0, 2500));
  await quick(page).getByRole("button", { name: "Search connections" }).click();
  await page.locator("#quick-topic").fill("combustion");
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/\/connections\?topic=combustion#library$/);
  await expect(page.getByText("No prepared example for “combustion” yet.")).toBeVisible();
  await expect.poll(async () => (await state()).unmatched.at(-1) ?? "").toContain("combustion");

  // Back to the unit: same document, signup still open, and the noted search still in memory.
  await page.goBack();
  await page.goBack();
  await expect(page).toHaveURL(/\/connections\?course=physics-30&unit=p30c$/);
  await expect(page.getByRole("heading", { level: 2, name: "Fits Electromagnetic radiation" })).toBeVisible();
  await expect(page.getByText("Free with signup")).toHaveCount(0);
  const end = await state();
  expect(end.mark).toBe(1);
  expect(end.unmatched.at(-1)).toContain("combustion");
});

test("a quick-bar search wins over a console edit that is still waiting to apply", async ({ page, requests }, info) => {
  void requests;
  // On wide screens the console stays docked under the header, so both forms can be used at once.
  test.skip(info.project.name !== "desktop");
  await page.goto("/connections", { waitUntil: "networkidle" });
  await page.evaluate(() => window.scrollTo(0, 1500));
  await expect(bar(page)).toHaveAttribute("data-shown", "");
  await page.locator("#filter-topic").fill("drone");
  await quick(page).getByRole("button", { name: "Search connections" }).click();
  await page.locator("#quick-topic").fill("water");
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/\/connections\?topic=water#library$/);
  await page.waitForTimeout(1200);
  await expect(page).toHaveURL(/\/connections\?topic=water#library$/);
  await expect(page.locator("#filter-topic")).toHaveValue("water");
});

test("door links also win over a waiting console edit, even when the page is slow", async ({ page, requests }, info) => {
  void requests;
  test.skip(info.project.name !== "desktop");
  await page.goto("/connections?topic=water", { waitUntil: "networkidle" });
  await page.evaluate(() => window.scrollTo(0, 1500));
  await expect(bar(page)).toHaveAttribute("data-shown", "");

  // The current Course item keeps the committed filter and the console shows it again.
  await page.locator("#filter-topic").fill("drone");
  await quick(page).getByRole("link", { name: "Your course" }).click();
  await page.waitForTimeout(1200);
  await expect(page).toHaveURL(/\/connections\?topic=water#library$/);
  await expect(page.locator("#filter-topic")).toHaveValue("water");

  // A slow switch to another door is not overtaken by the console's debounce.
  await page.route(/\/connections\?(.*&)?by=company/, async (route) => {
    await new Promise((r) => setTimeout(r, 1500));
    await route.continue();
  });
  await page.locator("#filter-topic").fill("drone");
  await quick(page).getByRole("link", { name: "A company" }).click();
  await expect(page.getByRole("heading", { level: 2, name: "Start from a company" })).toBeVisible({ timeout: 10_000 });
  await page.waitForTimeout(800);
  await expect(page).toHaveURL(/\/connections\?by=company#library$/);

  // The same holds for the doors in the hero.
  await page.goto("/connections?topic=water", { waitUntil: "networkidle" });
  await page.locator("#filter-topic").fill("drone");
  await doors(page).getByRole("link", { name: /A company/ }).click();
  await expect(page.getByRole("heading", { level: 2, name: "Start from a company" })).toBeVisible({ timeout: 10_000 });
  await page.waitForTimeout(800);
  await expect(page).toHaveURL(/\/connections\?by=company$/);
});

test("re-submitting the same search clears an abandoned console edit", async ({ page, requests }, info) => {
  void requests;
  test.skip(info.project.name !== "desktop");
  await page.goto("/connections?topic=water", { waitUntil: "networkidle" });
  await page.evaluate(() => window.scrollTo(0, 1500));
  await page.locator("#filter-topic").fill("drone");
  await quick(page).getByRole("button", { name: "Search connections" }).click();
  await expect(page.locator("#quick-topic")).toHaveValue("water");
  await page.keyboard.press("Enter");
  await page.waitForTimeout(1200);
  await expect(page).toHaveURL(/\/connections\?topic=water#library$/);
  await expect(page.locator("#filter-topic")).toHaveValue("water");
});

test("the footer clears the bar at the bottom, even with a safe-area inset", async ({ page, requests }) => {
  void requests;
  await page.goto("/connections?by=company");
  // env(safe-area-inset-bottom) cannot be set from a test, so add the same 34px it would add.
  await page.addStyleTag({
    content: `body:has([data-quickbar]) { padding-bottom: calc(var(--quickbar-h) + 34px) !important; }
      @media (min-width: 641px) { body:has([data-quickbar]) { padding-bottom: calc(var(--quickbar-h) + 50px) !important; } }
      [data-quickbar] { padding-bottom: 34px !important; }
      @media (min-width: 641px) { [data-quickbar] { padding-bottom: 50px !important; } }`,
  });
  await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
  await expect(bar(page)).toHaveAttribute("data-shown", "");
  const { textBottom, barTop } = await page.evaluate(() => {
    const range = document.createRange();
    range.selectNodeContents(document.querySelector("footer")!);
    return {
      textBottom: Math.max(...[...range.getClientRects()].map((r) => r.bottom)),
      barTop: document.querySelector("[data-quickbar] nav")!.getBoundingClientRect().top,
    };
  });
  expect(textBottom).toBeLessThanOrEqual(barTop);
});

for (const by of ["course", "challenge", "company", "role"]) {
  test(`the ${by} door and its quick bar pass axe with no sideways scroll`, async ({ page, requests }) => {
    void requests;
    await page.goto(`/connections?by=${by}`, { waitUntil: "networkidle" });
    await page.evaluate(() => window.scrollTo(0, 2500));
    await expect(bar(page)).toHaveAttribute("data-shown", "");
    await quick(page).getByRole("button", { name: "Search connections" }).click();
    await expect(page.locator("#quick-topic")).toBeFocused();
    const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
    const serious = results.violations
      .filter((v) => v.impact === "serious" || v.impact === "critical")
      .map((v) => `${v.id}: ${v.nodes.map((n) => n.target.join(" ")).join(", ")}`);
    expect(serious).toEqual([]);
    expect(await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)).toBeLessThanOrEqual(0);
  });
}
