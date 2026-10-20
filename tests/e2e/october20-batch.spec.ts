import { test, expect } from "./fixtures";
import { discoverImages } from "../../src/content";

for (const card of discoverImages.filter((c) => Number(c.number) > 70)) {
  test(`${card.number}: new Discover image, hidden title and linked company`, async ({ page, requests }, info) => {
    void requests;
    await page.goto(`/discover?role=${card.number}&step=0`);
    const selected = page.locator(`[data-role="${card.roleId}"][data-visible="true"]`);
    await expect(selected.locator("img")).toBeVisible();
    await expect.poll(() => selected.locator("img").evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0)).toBe(true);
    await expect(page.getByRole("heading", { name: card.title, exact: true })).toHaveCount(0);
    const cover = selected.getByText("What job is this?", { exact: true });
    await expect(cover).toBeVisible();
    const imageBox = (await selected.locator("img").boundingBox())!;
    const coverBox = (await cover.boundingBox())!;
    expect(coverBox.height / imageBox.height).toBeGreaterThanOrEqual(0.26);
    if (card.number === "71") await page.screenshot({ path: `docs/validation/full-examples/2026-10-20/implementation-evidence/${info.project.name}-guess.png` });
    await page.getByRole("button", { name: "Reveal the job", exact: true }).click();
    await expect(page.getByRole("heading", { name: card.title, exact: true })).toBeVisible();
    await page.getByRole("button", { name: "Ways in", exact: true }).click();
    await expect(page.getByTestId("step-content")).toContainText(/SAIT|University of Calgary/);
    const example = page.getByRole("link", { name: /^Work area at / });
    await expect(example).toHaveAttribute("href", new RegExp(`role=${card.roleId}#who$`));
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    if (card.number === "75") await page.screenshot({ path: `docs/validation/full-examples/2026-10-20/implementation-evidence/${info.project.name}-new-discover.png` });
  });
}
