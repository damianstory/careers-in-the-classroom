import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "./fixtures";

const routes = [
  "/",
  "/?course=physics-30&unit=p30c",
  "/?course=physics-20&unit=p20a",
  "/?course=biology-30&topic=DNA+replication",
  "/examples/ghgsat?course=physics-30&unit=p30c",
  "/examples/ghgsat?course=physics-30&unit=p30c&view=company",
  "/examples/ghgsat?course=physics-30&unit=p30c&view=roles",
  "/examples/ghgsat?course=physics-30&unit=p30c&view=roles&role=satellite-engineering",
  "/examples/ghgsat?course=physics-30&unit=p30c&view=roles&role=atmospheric-science&job=ghgsat-emissions-scientist",
  "/examples/ghgsat?course=physics-30&unit=p30c&view=pathways",
  "/examples/ghgsat?view=pathways&role=software-data",
  "/examples/wilder-institute",
  "/examples/e3-lithium",
  "/examples/wilder-institute?view=company",
  "/examples/wilder-institute?view=roles&role=animal-care&job=wilder-animal-care",
  "/examples/wilder-institute?view=pathways",
  "/examples/e3-lithium?view=company",
  "/examples/e3-lithium?view=roles&role=process-engineering&job=stantec-water-eit",
  "/examples/e3-lithium?view=pathways",
  "/get-involved",
  "/digest",
];

for (const route of routes) {
  test(`no serious accessibility violations and no sideways scroll: ${route}`, async ({ page, requests }) => {
    void requests;
    await page.goto(route);
    const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
    const serious = results.violations
      .filter((v) => v.impact === "serious" || v.impact === "critical")
      .map((v) => `${v.id}: ${v.nodes.map((n) => n.target.join(" ")).join(", ")}`);
    expect(serious).toEqual([]);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow, "horizontal overflow in px").toBeLessThanOrEqual(0);
  });
}

test("open dialogs pass the accessibility scan", async ({ page, requests }, info) => {
  void requests;
  await page.goto("/?course=physics-30&unit=p30c");
  const header = page.getByRole("banner");
  if (info.project.name === "phone") await header.getByRole("button", { name: "Menu" }).click();
  await header.getByRole("button", { name: "Request a speaker" }).click();
  await expect(page.getByRole("dialog")).toBeVisible();
  const results = await new AxeBuilder({ page }).include("dialog[open]").analyze();
  expect(results.violations.filter((v) => v.impact === "serious" || v.impact === "critical")).toEqual([]);
});

test("narrowest phones (320px) have no sideways scroll", async ({ page, requests }) => {
  void requests;
  await page.setViewportSize({ width: 320, height: 640 });
  for (const route of routes) {
    await page.goto(route);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow, `${route} overflow`).toBeLessThanOrEqual(0);
  }
});
