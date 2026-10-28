import type { Locator } from "@playwright/test";
import { expect, test } from "./fixtures";

async function expectInsidePanel(target: Locator) {
  await expect.poll(() => target.evaluate((el) => {
    const win = el.closest("[data-paged-window]")!.getBoundingClientRect();
    const box = el.getBoundingClientRect();
    return box.left >= win.left - 1 && box.right <= win.right + 1 && box.top >= win.top - 1 && box.bottom <= win.bottom + 1;
  })).toBe(true);
}

test("the last partial About page remains visible after scroll settles", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/examples/cawst-biosand-learning#about");
  await expect(page.locator("[data-example-root]")).toHaveAttribute("data-frame", "");
  await page.evaluate(async () => {
    await document.fonts.ready;
    await new Promise<void>(resolve => requestAnimationFrame(() => requestAnimationFrame(() => resolve())));
  });
  const panel = page.locator("#about [data-paged]").first();
  const pager = panel.locator("[data-pager]");
  // About now uses a single reading column. Keep an explicit odd-column fixture so this
  // regression still exercises a clamped final partial page independently of edited copy.
  await panel.locator("[data-paged-window]").evaluate(el => {
    const height = el.clientHeight;
    (el as HTMLElement).style.setProperty("--page-columns", "2");
    el.replaceChildren(...Array.from({ length: 5 }, (_, index) => {
      const block = document.createElement("div");
      block.style.cssText = `height:${height}px;break-inside:avoid;overflow:hidden`;
      if (index === 4) {
        const button = document.createElement("button");
        button.textContent = "Final test control";
        block.append(button);
      } else block.textContent = `Test column ${index + 1}`;
      return block;
    }));
  });
  await expect(pager).toHaveAttribute("data-pages", "3");
  await pager.getByRole("button", { name: "Next page" }).click();
  await pager.getByRole("button", { name: "Next page" }).click();
  // A delayed scroll snap must not undo the final click.
  await page.waitForTimeout(500);
  await expect(pager).toContainText("Page 3 of 3");
  await expectInsidePanel(panel.getByRole("button", { name: "Final test control" }));
});

test("resizing keeps the focused citation on its visible page", async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto("/examples/ghgsat#about");
  await page.evaluate(() => document.fonts.ready);
  const citation = page.locator("#about [data-sources-button] button").nth(3);
  await citation.focus();
  await expectInsidePanel(citation);
  await page.setViewportSize({ width: 1280, height: 720 });
  await page.waitForTimeout(500);
  await expect(citation).toBeFocused();
  await expectInsidePanel(citation);
  await expect(page.locator("[data-example-root]")).not.toHaveAttribute("data-fit", "flow");
});

test("phone job focus stays between the sticky controls on load and return", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  const heading = page.locator("#job-title-ghgsat-emissions-scientist");
  const row = page.locator('[data-role-detail="atmospheric-science"] [data-job-row="ghgsat-emissions-scientist"]');
  const visibleFocus = async (target: Locator) => {
    await expect(target).toBeFocused();
    await expect.poll(() => target.evaluate(el => {
      const box = el.getBoundingClientRect();
      const top = document.querySelector("[data-rail-sticky]")!.getBoundingClientRect().bottom;
      const bottom = document.querySelector("[data-deck-footer]")!.getBoundingClientRect().top;
      return box.top >= top && box.bottom <= bottom;
    })).toBe(true);
  };
  await page.goto("/examples/ghgsat?role=atmospheric-science&job=ghgsat-emissions-scientist#who");
  await visibleFocus(heading);
  await page.reload();
  await visibleFocus(heading);
  await page.locator("[data-job-view]").getByRole("link", { name: /Back to/ }).click();
  await visibleFocus(row);
  await page.goBack();
  await visibleFocus(heading);
  await page.goForward();
  await visibleFocus(row);
});

for (const blocked of [false, true]) {
  test.describe(blocked ? "blocked bundles" : "JavaScript disabled", () => {
    if (!blocked) test.use({ javaScriptEnabled: false });
    test("job searches, preparation and later content stay readable without enhancement", async ({ page }) => {
      await page.setViewportSize({ width: 1440, height: 900 });
      if (blocked) await page.route("**/_next/static/**/*.js", route => route.abort());
      await page.goto("/examples/ghgsat?role=atmospheric-science#who");
      const role = page.locator('[data-role-detail="atmospheric-science"]');
      const job = role.locator('[data-job-row="ghgsat-emissions-scientist"]');
      await expect(job).toBeVisible();
      await job.scrollIntoViewIfNeeded();
      await expect(job).toBeInViewport();
      const preparation = role.locator('[data-tab-panel="prepare"]');
      await expect(preparation).toBeVisible();
      const pathway = preparation.getByRole("link", { name: "See all pathways" });
      await pathway.scrollIntoViewIfNeeded();
      await expect(pathway).toBeInViewport();
      expect(await role.locator("[data-paged-window]").evaluateAll(windows => windows.every(win => getComputedStyle(win).columnCount === "auto"))).toBe(true);
      expect(await page.evaluate(() => document.documentElement.scrollHeight > innerHeight)).toBe(true);
      const panels = await role.locator("[data-tab-panel]").evaluateAll(items => items.map(el => {
        const box = el.getBoundingClientRect();
        return { top: box.top, bottom: box.bottom, height: el.clientHeight, content: el.scrollHeight };
      }));
      for (let i = 0; i < panels.length; i++) {
        expect.soft(panels[i].content, "fallback content fits its panel").toBeLessThanOrEqual(panels[i].height + 1);
        if (i) expect.soft(panels[i].top, "fallback panels do not overlap").toBeGreaterThanOrEqual(panels[i - 1].bottom - 1);
      }
      // Visibility alone permits an overlapping sibling to intercept the posting link.
      await job.click({ timeout: 5000 });
      await expect(page).toHaveURL(/job=ghgsat-emissions-scientist#who$/);
      await expect(page.locator("#job-title-ghgsat-emissions-scientist")).toBeVisible();
    });
  });
}
