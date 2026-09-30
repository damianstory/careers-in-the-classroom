import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { PROBE, expect, test } from "./fixtures";

// Regression checks for the first code inspection (findings R1–R7).

function filesUnder(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? filesUnder(path) : [path];
  });
}

test("R1: the demo server keeps no trace of typed search topics", async ({ page, requests }) => {
  void requests;
  const token = `${PROBE}topic${Date.now()}`;
  await page.goto(`/?course=physics-30&topic=${token}`);
  await expect(page.getByText(`No prepared example for “${token}” in Physics 30 yet.`)).toBeVisible();
  await page.waitForTimeout(500);
  const hits = filesUnder(".next").filter((f) => {
    try {
      return readFileSync(f).includes(token);
    } catch {
      return false;
    }
  });
  expect(hits, "files containing the typed topic").toEqual([]);
});

test("R2: the filter follows navigation it did not make", async ({ page, requests }) => {
  void requests;
  await page.goto("/?course=physics-30&unit=p30c");
  await page.goto("/?course=science-30&unit=s30c");
  await expect(page.locator("#filter-course")).toHaveValue("science-30");
  await expect(page.locator("#filter-unit")).toHaveValue("s30c");
  await page.goBack();
  await expect(page.locator("#filter-course")).toHaveValue("physics-30");
  await expect(page.locator("#filter-unit")).toHaveValue("p30c");
});

test("R3: on phones the example question comes before the side panel", async ({ page, requests }, info) => {
  void requests;
  test.skip(info.project.name !== "phone", "phone layout only");
  await page.goto("/examples/ghgsat?course=physics-30&unit=p30c");
  const h1 = await page.getByRole("heading", { level: 1 }).boundingBox();
  const rail = await page.getByRole("complementary", { name: /At a glance|Bring this work into class/ }).boundingBox();
  expect(h1!.y).toBeLessThan(rail!.y);
});

test("R4: focus lands on the page heading after signup removes the opener", async ({ page, requests }) => {
  void requests;
  await page.goto("/?course=physics-30&unit=p30c");
  await page.getByRole("button", { name: "Sign up free to open" }).focus();
  await page.keyboard.press("Enter");
  await page.getByRole("button", { name: "Create free account" }).click();
  await page.getByRole("button", { name: "Back to what I was reading" }).click();
  await expect(page.getByRole("dialog")).toBeHidden();
  await expect(page.getByRole("heading", { level: 1 })).toBeFocused();
});

test("R5: long unbroken topics never push the page sideways", async ({ page, requests }) => {
  void requests;
  const long = "W".repeat(80);
  for (const width of [320, 390]) {
    await page.setViewportSize({ width, height: 700 });
    for (const course of ["physics-30", "biology-30"]) {
      await page.goto(`/?course=${course}&topic=${long}`);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      expect(overflow, `${course} at ${width}px`).toBeLessThanOrEqual(0);
    }
  }
});

test("R6: site-level speaker and signup actions use the current page context", async ({ page, requests }, info) => {
  void requests;
  await page.goto("/examples/e3-lithium?course=chemistry-20&unit=c20d");
  const header = page.getByRole("banner");
  if (info.project.name === "phone") await header.getByRole("button", { name: "Menu" }).click();
  await header.getByRole("button", { name: "Request a speaker" }).click();
  const dialog = page.getByRole("dialog", { name: "Request a practitioner conversation" });
  await expect(dialog.getByLabel("Topic")).toHaveValue("Chemistry 20 · Quantitative relationships in chemical changes");
  await expect(dialog.getByText("Related example:")).toContainText("E3 Lithium");
  await page.keyboard.press("Escape");

  if (info.project.name === "phone") await header.getByRole("button", { name: "Menu" }).click();
  await header.getByRole("button", { name: "Sign up free" }).click();
  await expect(page.getByRole("dialog").getByText("Chemistry 20 · Quantitative relationships in chemical changes")).toBeVisible();
});

test("R2b: library speaker actions include the related organization", async ({ page, requests }, info) => {
  void requests;
  await page.goto("/?course=physics-30&unit=p30c");
  const header = page.getByRole("banner");
  if (info.project.name === "phone") await header.getByRole("button", { name: "Menu" }).click();
  await header.getByRole("button", { name: "Request a speaker" }).click();
  await expect(page.getByRole("dialog").getByText("Related example:")).toContainText("GHGSat");
});

test("R7: the demo still unlocks when session storage is blocked", async ({ page, requests }) => {
  void requests;
  await page.addInitScript(() => {
    Storage.prototype.setItem = () => {
      throw new Error("blocked");
    };
  });
  await page.goto("/?course=physics-30&unit=p30c");
  await page.getByRole("button", { name: "Sign up free to open" }).click();
  await page.getByRole("button", { name: "Create free account" }).click();
  await page.getByRole("button", { name: "Back to what I was reading" }).click();
  await expect(page.getByText("How would a lower detection threshold change which emissions events become visible?")).toBeVisible();
});

test("I3-R1: the library filter stays readable at mid widths", async ({ page, requests }, info) => {
  void requests;
  test.skip(info.project.name !== "desktop", "desktop widths");
  for (const width of [961, 1024, 1100]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/?course=physics-30");
    const form = (await page.getByRole("form", { name: "Filter examples" }).boundingBox())!;
    const unit = (await page.locator("#filter-unit").boundingBox())!;
    expect(unit.width, `unit width at ${width}px`).toBeGreaterThanOrEqual(200);
    for (const id of ["#filter-course", "#filter-unit", "#filter-topic"]) {
      const b = (await page.locator(id).boundingBox())!;
      expect(b.x + b.width, `${id} inside form at ${width}px`).toBeLessThanOrEqual(form.x + form.width + 1);
    }
  }
});

test("the filter docks under the header on wide screens, and phones get one summary row", async ({ page, requests }, info) => {
  void requests;
  await page.goto("/?course=physics-30&unit=p30c");
  await page.mouse.wheel(0, 1200);
  await page.waitForTimeout(400);
  if (info.project.name === "desktop") {
    await expect(page.getByRole("form", { name: "Filter examples" })).toBeInViewport();
  } else {
    const row = page.getByRole("button", { name: /Physics 30 · Electromagnetic radiation/ });
    await expect(row).toBeInViewport();
    const box = (await row.boundingBox())!;
    expect(box.y + box.height, "header + summary row height").toBeLessThanOrEqual(112);
    await row.click();
    await expect(page.locator("#filter-course")).toBeFocused();
  }
});

test("I3-R2: the phone menu does not reopen after navigating away and back", async ({ page, requests }, info) => {
  void requests;
  test.skip(info.project.name !== "phone", "phone menu");
  await page.goto("/");
  const header = page.getByRole("banner");
  await header.getByRole("button", { name: "Menu" }).click();
  await page.getByRole("navigation", { name: "Main (mobile)" }).getByRole("link", { name: "List your company" }).click();
  await expect(page).toHaveURL(/\/get-involved$/);
  await expect(page.getByRole("navigation", { name: "Main (mobile)" })).toHaveCount(0);
  await header.getByRole("link", { name: "Careers in the Classroom, home" }).click();
  await expect(page).toHaveURL(/\/$/);
  await expect(page.getByRole("navigation", { name: "Main (mobile)" })).toHaveCount(0);
  await header.getByRole("button", { name: "Menu" }).click();
  await page.getByRole("navigation", { name: "Main (mobile)" }).getByRole("link", { name: "Examples" }).click();
  await expect(page.getByRole("navigation", { name: "Main (mobile)" })).toHaveCount(0);
});
