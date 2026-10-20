import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("Launch links to verified technology and business courses with approved examples", async ({ page }, testInfo) => {
  await page.goto("/#start");
  const launch = page.locator("#start");
  await expect(launch.getByText("Technology", { exact: true })).toBeVisible();
  await expect(launch.getByText("Business", { exact: true })).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  await launch.getByRole("link", { name: /CSE1120/ }).scrollIntoViewIfNeeded();
  await page.screenshot({ path: `docs/validation/full-examples/2026-10-20/implementation-evidence/${testInfo.project.name}-launch.png` });
  await launch.getByRole("link", { name: /CSE1120/ }).click();
  await expect(page).toHaveURL(/course=cse1120/);
  await expect(page.getByRole("link", { name: "How can software decide which learning task someone should see next?", exact: true })).toBeVisible();
  await expect(page.getByRole("link", { name: "Alberta curriculum and outcomes" })).toHaveAttribute("href", /CTSCSE\/CSE1120$/);
  for (const [code, count] of [["cse1120", 2], ["inf2070", 4], ["cse1240", 1], ["ent2010", 5], ["fin3060", 2]] as const) {
    await page.locator("#filter-course").selectOption(code);
    await expect(page).toHaveURL(new RegExp(`course=${code}(?:#|$)`));
    await page.getByLabel("Outcome focus", { exact: true }).selectOption(`${code}-focus`);
    await expect(page).toHaveURL(new RegExp(`course=${code}&unit=${code}-focus`));
    await expect(page.getByRole("form", { name: "Filter examples" }).getByRole("status")).toHaveText(`${count} matching`);
    await expect(page.getByText("No prepared match", { exact: true })).toHaveCount(0);
  }
  await page.reload();
  await expect(page.locator("#filter-course")).toHaveValue("fin3060");
  await expect(page.getByLabel("Outcome focus", { exact: true })).toHaveValue("fin3060-focus");
  await expect(page.getByText(/Prerequisite: FIN3040/)).toBeVisible();
  const accessibility = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
  expect(accessibility.violations.filter((v) => v.impact === "serious" || v.impact === "critical")).toEqual([]);
  await page.screenshot({ path: `docs/validation/full-examples/2026-10-20/implementation-evidence/${testInfo.project.name}-course.png`, fullPage: false });
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  await page.getByRole("link", { name: "Clear", exact: true }).click();
  await expect(page).toHaveURL(/\/connections#library$/);
  await page.goBack();
  await expect(page.locator("#filter-course")).toHaveValue("fin3060");
});

test("populated technology and business Discover subjects start sourced rounds", async ({ page }, testInfo) => {
  for (const subject of ["technology", "business"]) {
    await page.goto(`/discover?subject=${subject}`);
    const start = page.getByRole("button", { name: /^(Start|Draw a picture)/ });
    await expect(start).toBeEnabled();
    await start.click();
    const stop = page.getByRole("button", { name: "STOP", exact: true });
    if (await stop.isVisible()) await stop.click();
    await expect(page.getByRole("heading", { name: "What could this person do?", exact: true })).toBeVisible();
    await page.getByRole("button", { name: "Reveal the job", exact: true }).click();
    await expect(page.getByRole("region", { name: "Discover", exact: true })).toHaveAttribute("data-step", "1");
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  }
  await page.screenshot({ path: `docs/validation/full-examples/2026-10-20/implementation-evidence/${testInfo.project.name}-discover.png` });
});
