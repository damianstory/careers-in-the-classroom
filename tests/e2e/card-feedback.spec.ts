import { expect, test } from "./fixtures";

// These checks measure the desktop frame composition; phone flow has separate coverage.
test.beforeEach(async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
});

test("arrow navigation focuses headings quietly and controls retain a visible focus ring", async ({ page }) => {
  await page.goto("/examples/aggene-crop-traits");
  await expect(page.locator("[data-example-root]")).toHaveAttribute("data-frame", "");
  await page.keyboard.press("ArrowRight");
  await expect(page.locator("#how-it-works-title")).toBeFocused();
  expect(await page.locator("#how-it-works-title").evaluate(el => getComputedStyle(el).outlineStyle)).toBe("none");
  await page.locator("[data-deck-next]").focus();
  expect(await page.locator("[data-deck-next]").evaluate(el => getComputedStyle(el).outlineStyle)).not.toBe("none");
});

test("diagram and explanation share a centre, and About fact cards share a top", async ({ page }) => {
  for (const slug of ["aggene-crop-traits", "providence-rna-delivery", "ghgsat", "cawst-biosand-learning"]) {
    await page.goto(`/examples/${slug}#how-it-works`);
    await expect(page.locator("[data-example-root]")).toHaveAttribute("data-frame", "");
    await page.evaluate(() => document.fonts.ready);
    await expect.poll(() => page.locator('#how-it-works [data-card="1"]').evaluate(el => {
      const image = el.querySelector("figure")!.getBoundingClientRect();
      const key = el.querySelector("[data-paged]")!.getBoundingClientRect();
      return Math.abs((image.top + image.bottom - key.top - key.bottom) / 2);
    })).toBeLessThanOrEqual(1);
    await page.locator('[data-part-link="about"]:visible').click();
    const facts = page.locator('#about dl[aria-label$="facts"] > div');
    const boxes = await facts.evaluateAll(items => items.map(el => el.getBoundingClientRect().toJSON()));
    expect(boxes).toHaveLength(2);
    expect(Math.abs(boxes[0].top - boxes[1].top)).toBeLessThanOrEqual(1);
    await expect(page.locator("[data-example-root]")).not.toHaveAttribute("data-fit", "flow");
  }
});

test("AgGene curriculum is readable and Sources reveal complete ledger pages", async ({ page }) => {
  await page.goto("/examples/aggene-crop-traits");
  await expect(page.locator("[data-example-root]")).toHaveAttribute("data-frame", "");
  await expect(page.getByRole("list", { name: "Courses this fits" })).toContainText("Cell division, genetics and molecular biology");
  await expect(page.getByRole("list", { name: "Courses this fits" })).toContainText("30–C3.2k");
  const logo = page.getByRole("img", { name: "AgGene logo" });
  expect((await logo.boundingBox())!.height).toBeGreaterThanOrEqual(46);
  await page.locator('[data-part-link="sources"]:visible').click();
  const details = page.locator("#sources details");
  await expect(details.locator("table")).toBeHidden();
  await details.locator("summary").click();
  await expect(details.locator("table")).toBeVisible();
  const pager = page.locator("#sources [data-pager]");
  await expect.poll(async () => Number(await pager.getAttribute("data-pages"))).toBeGreaterThan(1);
  const count = Number(await pager.getAttribute("data-pages"));
  for (let current = 1; current < count; current++) await pager.getByRole("button", { name: "Next page" }).click();
  await page.waitForTimeout(400);
  const lastRow = details.locator("tbody tr").last();
  await expect.poll(() => lastRow.evaluate(el => {
    const box = el.getBoundingClientRect();
    const win = el.closest("[data-paged-window]")!.getBoundingClientRect();
    return box.left >= win.left - 1 && box.right <= win.right + 1 && box.top >= win.top - 1 && box.bottom <= win.bottom + 1;
  })).toBe(true);
  await expect(page.locator("[data-example-root]")).not.toHaveAttribute("data-fit", "flow");
});
