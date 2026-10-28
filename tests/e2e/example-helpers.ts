import type { Page } from "@playwright/test";
import { expect } from "./fixtures";

export const partIds = ["question", "how-it-works", "who", "ways-in", "ask", "about", "sources"];
export const exampleRoot = (page: Page) => page.locator("[data-example-root]");
export const lessonNav = (page: Page) => page.getByRole("navigation", { name: "Explore this example", includeHidden: true });

export async function choosePart(page: Page, label: string) {
  // This helper exercises the hydrated modal; bootstrap navigation is tested separately.
  await expect(exampleRoot(page)).toHaveAttribute("data-navigation-ready", "");
  const contents = page.getByRole("button", { name: "Contents", exact: true });
  if (await contents.isVisible()) {
    await contents.click();
    await page.getByRole("dialog", { name: "Contents", exact: true }).getByRole("link", { name: label, exact: true }).click();
    await expect(page.getByRole("dialog", { name: "Contents", exact: true })).toBeHidden();
  } else await lessonNav(page).getByRole("link", { name: label, exact: true }).click();
}

export async function toggleLayout(page: Page) {
  await expect(exampleRoot(page)).toHaveAttribute("data-navigation-ready", "");
  const contents = page.getByRole("button", { name: "Contents", exact: true });
  if (await contents.isVisible()) {
    await contents.click();
    const sheet = page.getByRole("dialog", { name: "Contents", exact: true });
    await sheet.getByRole("button", { name: "View as one page" }).click();
    await sheet.getByRole("button", { name: "Close", exact: true }).click();
  } else await page.locator("[data-deck-footer]").getByRole("button", { name: "View as one page" }).click();
}

export async function expectPart(page: Page, part: string, focus = true) {
  await expect(exampleRoot(page)).toHaveAttribute("data-part", part);
  await expect(page.locator(`section[data-part]#${part}`)).toBeVisible();
  if (focus) await expect(page.locator(`#${part}-title`)).toBeFocused();
}
