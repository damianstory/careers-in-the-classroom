import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "./fixtures";
import { choosePart } from "./example-helpers";

test("repaired routes load without browser errors or failed HTTP responses", async ({ page, requests }) => {
  void requests;
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => { if (message.type() === "error") errors.push(message.text()); });
  page.on("response", (response) => { if (response.status() >= 400) errors.push(`${response.status()} ${response.url()}`); });
  for (const route of ["/", "/connections?by=company", "/connections?by=challenge", "/connections?by=role", "/examples/ghgsat?role=satellite-engineering#who"]) {
    await page.goto(route, { waitUntil: "networkidle" });
  }
  expect(errors).toEqual([]);
});

test("home role links select the intended role through reload and history", async ({ page, requests }) => {
  void requests;
  await page.goto("/#start");
  await page.getByRole("tab", { name: /A kind of job/ }).click();
  const role = page.getByRole("tabpanel").getByRole("listitem").filter({ hasText: "Satellite and instrument engineering" });
  await role.getByRole("link", { name: "GHGSat" }).click();
  await expect(page).toHaveURL(/\/examples\/ghgsat\?role=satellite-engineering#who$/);
  await expect(page.getByRole("heading", { name: "Satellite and instrument engineering", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Related job postings", exact: true })).toBeVisible();
  await page.reload();
  await expect(page.locator("[data-example-root]")).toHaveAttribute("data-part", "who");
  await page.goBack();
  await expect(page).toHaveURL(/\/#start$/);
  await page.goForward();
  await expect(page.getByRole("heading", { name: "Satellite and instrument engineering", exact: true })).toBeVisible();
});

for (const width of [320, 390, 1440]) {
  test(`landing tabs support focus, activation and preserved search at ${width}px`, async ({ page, requests }) => {
    void requests;
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/#start");
    const tabs = page.getByRole("tablist", { name: "Start from" });
    await expect(tabs).toHaveAttribute("aria-orientation", width <= 640 ? "vertical" : "horizontal");
    const classTab = tabs.getByRole("tab", { name: /My class/ });
    const company = tabs.getByRole("tab", { name: /A company/ });
    const role = tabs.getByRole("tab", { name: /A kind of job/ });
    await classTab.focus();
    await page.keyboard.press(width <= 640 ? "ArrowDown" : "ArrowRight");
    await expect(company).toBeFocused();
    await expect(company).toHaveAttribute("aria-selected", "true");
    await expect(classTab).toHaveAttribute("tabindex", "-1");
    await page.keyboard.press("Tab");
    await expect(page.getByRole("searchbox", { name: "Find a company" })).toBeFocused();
    await page.getByRole("searchbox").fill("GHGSat");
    await company.focus();
    await page.keyboard.press("End");
    await expect(role).toBeFocused();
    await page.keyboard.press(width <= 640 ? "ArrowDown" : "ArrowRight");
    await expect(classTab).toBeFocused();
    await page.keyboard.press("End");
    await page.keyboard.press("Home");
    await expect(classTab).toBeFocused();
    await company.click();
    await expect(page.getByRole("searchbox")).toHaveValue("GHGSat");
    await expect(page.getByRole("tabpanel").getByRole("link", { name: /GHGSat/ })).toBeVisible();
    const result = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
    expect(result.violations).toEqual([]);
    expect(await page.evaluate(() => document.documentElement.scrollWidth - innerWidth)).toBe(0);
  });
}

for (const width of [320, 390, 768, 1440]) {
  test(`landing anchors clear the sticky header at ${width}px`, async ({ page, requests }) => {
    void requests;
    await page.setViewportSize({ width, height: 900 });
    const clearance = (id: string) => page.evaluate((target) => {
      const heading = document.querySelector(`#${target} h2`)!.getBoundingClientRect();
      return heading.top - document.querySelector("body > header, header")!.getBoundingClientRect().bottom;
    }, id);
    for (const id of ["how", "start"]) {
      await page.goto(`/#${id}`);
      await expect.poll(() => clearance(id)).toBeGreaterThanOrEqual(0);
    }
    await page.getByRole("tab", { name: /A kind of job/ }).click();
    await expect.poll(() => clearance("start")).toBeGreaterThanOrEqual(0);
    await page.goBack();
    await expect(page).toHaveURL(/#how$/);
    await expect.poll(() => clearance("how")).toBeGreaterThanOrEqual(0);
    await page.goForward();
    await expect.poll(() => clearance("start")).toBeGreaterThanOrEqual(0);
  });
}

test("mobile menu Escape returns focus and its links still navigate", async ({ page, requests }) => {
  void requests;
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const menu = page.getByRole("button", { name: "Menu", exact: true });
  await menu.click();
  await page.getByRole("navigation", { name: "Main (mobile)" }).getByRole("link", { name: "Connections" }).focus();
  await page.keyboard.press("Escape");
  await expect(menu).toBeFocused();
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  await menu.click();
  await page.getByRole("navigation", { name: "Main (mobile)" }).getByRole("link", { name: "Connections" }).click();
  await expect(page).toHaveURL(/\/connections$/);
  await expect(menu).toHaveAttribute("aria-expanded", "false");
});

test("company search stays in its directory and survives the example round trip", async ({ page, requests }) => {
  void requests;
  await page.goto("/connections?by=company");
  await page.getByRole("searchbox", { name: "Find a company" }).fill("ghgsat");
  await page.getByRole("button", { name: "Find company", exact: true }).click();
  await expect(page.getByRole("status")).toContainText("1 of 46");
  await page.getByRole("link", { name: "GHGSat", exact: true }).click();
  await choosePart(page, "Who does this work");
  await expect(page).toHaveURL(/from=company&company=ghgsat#who$/);
  await page.getByRole("link", { name: "Satellite and instrument engineering", exact: true }).click();
  await expect(page.getByRole("heading", { name: "Satellite and instrument engineering", exact: true })).toBeVisible();
  await expect(page).toHaveURL(/from=company&company=ghgsat&role=satellite-engineering#who$/);
  await page.reload();
  await page.getByRole("link", { name: "Back to companies" }).click();
  await expect(page.getByRole("searchbox", { name: "Find a company" })).toHaveValue("ghgsat");
  await page.getByRole("searchbox").fill("no-company-matches");
  await page.getByRole("button", { name: "Find company", exact: true }).click();
  await expect(page.getByText("No company matches.", { exact: false })).toBeVisible();
  await page.getByRole("link", { name: "Clear search" }).click();
  await expect(page.getByRole("searchbox")).toHaveValue("");
});

for (const mode of ["challenge", "role"] as const) {
  test(`${mode} group jumps and example return preserve the directory`, async ({ page, requests }) => {
    void requests;
    await page.goto(`/connections?by=${mode}#library`);
    await page.evaluate(() => { (window as unknown as { directoryVisit: boolean }).directoryVisit = true; });
    const nav = page.getByRole("navigation", { name: mode === "role" ? "Work groups" : "Challenge groups" });
    const jump = nav.getByRole("link").last();
    const href = await jump.getAttribute("href");
    await jump.click();
    const top = await page.locator(href!).evaluate((el) => el.getBoundingClientRect().top);
    expect(top).toBeGreaterThanOrEqual(56);
    const link = mode === "role" ? page.getByRole("link", { name: "GHGSat", exact: true }).first() : page.locator('main h4 a[href*="ghgsat"]').first();
    await link.click();
    await expect(page).toHaveURL(new RegExp(`from=${mode}`));
    await choosePart(page, "Ways in");
    const back = page.getByRole("link", { name: mode === "role" ? "Back to kinds of work" : "Back to challenges" });
    await back.click();
    await expect(page).toHaveURL(new RegExp(`/connections\\?by=${mode}#library$`));
    expect(await page.evaluate(() => (window as unknown as { directoryVisit?: boolean }).directoryVisit)).toBe(true);
    await expect.poll(() => page.locator("#library").evaluate((el) => el.getBoundingClientRect().top)).toBeGreaterThanOrEqual(56);
    const quick = page.getByRole("navigation", { name: "Ways in (quick bar)" });
    await quick.getByRole("link", { name: "A company", exact: true }).click();
    await expect(page.getByRole("heading", { name: "Start from a company", exact: true })).toBeVisible();
    await quick.getByRole("link", { name: mode === "role" ? "A kind of work" : "A challenge", exact: true }).click();
    await expect(page).toHaveURL(new RegExp(`/connections\\?by=${mode}#library$`));
    await quick.getByRole("link", { name: mode === "role" ? "A kind of work" : "A challenge", exact: true }).click();
    await expect(page).toHaveURL(new RegExp(`/connections\\?by=${mode}#library$`));
  });
}

test.describe("company directory without JavaScript", () => {
  test.use({ javaScriptEnabled: false });
  test("search and return links work as ordinary GET navigation", async ({ page, requests }) => {
    void requests;
    await page.goto("/connections?by=company");
    await page.getByRole("searchbox", { name: "Find a company" }).fill("RJC");
    await page.getByRole("button", { name: "Find company", exact: true }).click();
    await expect(page.getByRole("status")).toContainText("1 of 46");
    await page.getByRole("link", { name: "RJC Engineers", exact: true }).click();
    await page.getByRole("link", { name: "Back to companies", exact: true }).click();
    await expect(page.getByRole("searchbox", { name: "Find a company" })).toHaveValue("RJC");
  });
});
