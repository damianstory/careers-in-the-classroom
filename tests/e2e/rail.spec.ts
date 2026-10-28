import { choosePart, exampleRoot, lessonNav, toggleLayout } from "./example-helpers";
import { expect, test } from "./fixtures";

// The removed rail's navigation guarantees now belong to the two card panels.
test("panels stay pinned on long cards and all-page jumps keep working", async ({ page, requests }) => {
  void requests;
  await page.addInitScript(() => localStorage.setItem("example-layout", "all"));
  await page.goto("/examples/ghgsat");
  const entries = await page.evaluate(() => history.length);
  for (const [label, part] of [["About GHGSat", "about"], ["Who does this work", "who"], ["Ways in", "ways-in"], ["The question", "question"]]) {
    await choosePart(page, label);
    await expect(page.locator(`#${part}-title`)).toBeFocused();
    await expect(page.locator(`#${part}-title`)).toBeInViewport();
    await expect(page.locator("[data-deck-footer]")).toBeInViewport({ ratio: 1 });
  }
  expect(await page.evaluate(() => history.length)).toBe(entries);
  await toggleLayout(page);
  await expect(exampleRoot(page)).toHaveAttribute("data-layout", "parts");
});

test("desktop tabs and footer toggle remain reachable on short screens", async ({ page, requests }, info) => {
  void requests;
  test.skip(info.project.name !== "desktop", "desktop header");
  await page.setViewportSize({ width: 1100, height: 600 });
  await page.goto("/examples/ghgsat#who");
  for (const link of await lessonNav(page).getByRole("link").all()) {
    await expect(link).toBeInViewport({ ratio: 1 });
    await link.click();
    await expect(link).toHaveAttribute("aria-current", "location");
  }
  const toggle = page.locator("[data-deck-footer] [data-view-toggle]");
  await expect(toggle).toBeInViewport({ ratio: 1 });
  await toggleLayout(page);
  await expect(toggle).toHaveAttribute("aria-pressed", "true");
  await toggleLayout(page);
  await expect(toggle).toHaveAttribute("aria-pressed", "false");
});

test("static stage replaces the rail field at every width and motion preference", async ({ page, requests }) => {
  void requests;
  await page.goto("/examples/ghgsat");
  for (const width of [1440, 1100, 390]) {
    await page.setViewportSize({ width, height: 844 });
    for (const reducedMotion of ["reduce", "no-preference"] as const) {
      await page.emulateMedia({ reducedMotion });
      await expect(page.locator("[data-rail-column], [data-rail-canvas], [data-present]")).toHaveCount(0);
      await choosePart(page, "How it works");
      await expect(page.locator("#how-it-works-title")).toBeFocused();
      expect(await page.evaluate(() => document.documentElement.scrollWidth - innerWidth)).toBe(0);
    }
  }
});

test("no hero shows coordinates", async ({ page, requests }) => {
  void requests;
  for (const url of ["/", "/connections", "/examples/ghgsat", "/examples/wilder-institute", "/examples/e3-lithium", "/get-involved", "/digest"]) {
    await page.goto(url);
    await expect(page.locator("main").getByText("51.05"), url).toHaveCount(0);
  }
});
