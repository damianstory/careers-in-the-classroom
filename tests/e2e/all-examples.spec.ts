import { examples } from "../../src/content";
import { exampleRoot, expectPart, lessonNav } from "./example-helpers";
import { expect, test } from "./fixtures";

// Every example in the library works in the parts layout: each part opens on its own, the teaching
// diagram loads, every projector frame fits without clipping, and phones never scroll sideways.
for (const e of examples) {
  test(`${e.slug}: every part, the diagram and the projector work`, async ({ page, requests }, info) => {
    void requests;
    const errors: string[] = [];
    page.on("pageerror", (err) => errors.push(err.message));
    page.on("console", (msg) => { if (msg.type() === "error") errors.push(msg.text()); });

    await page.goto(`/examples/${e.slug}`);
    await expect(exampleRoot(page)).toHaveAttribute("data-layout", "parts");
    await expect(exampleRoot(page)).toHaveAttribute("data-navigation-ready", "");
    await expect(page.getByRole("heading", { level: 1, name: e.question })).toBeVisible();
    const parts = await page.locator("section[data-part]").evaluateAll((s) => s.map((el) => el.id));
    expect(parts.slice(0, 2), e.slug).toEqual(["question", "how-it-works"]);
    expect(parts.at(-1), e.slug).toBe("sources");

    if (info.project.name === "phone") {
      expect(await page.evaluate(() => document.documentElement.scrollWidth - innerWidth), e.slug).toBe(0);
      await page.getByRole("button", { name: "Contents", exact: true }).click();
      const sheet = page.getByRole("dialog", { name: "Contents", exact: true });
      await expect(sheet.getByRole("link")).toHaveCount(parts.length);
      await sheet.getByRole("link").nth(1).click();
      await expectPart(page, "how-it-works", false);
      expect(await page.evaluate(() => document.documentElement.scrollWidth - innerWidth), `${e.slug} how-it-works`).toBe(0);
    } else {
      const links = lessonNav(page).getByRole("link");
      await expect(links).toHaveCount(parts.length);
      for (let i = 0; i < parts.length; i++) {
        await links.nth(i).click();
        await expectPart(page, parts[i]);
      }
      // The teaching diagram loads on the page…
      await links.nth(1).click();
      const diagram = page.locator("#how-it-works figure img");
      if (await diagram.count()) {
        await expect(diagram).toBeVisible();
        await expect.poll(() => diagram.evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0), e.slug).toBe(true);
      }
      // …and every projector frame fits, starting from How it works.
      await page.locator('[data-present="how-it-works"]').click();
      const dialog = page.getByRole("dialog");
      const frame = dialog.locator("[data-frame-part]");
      await expect(frame).toHaveAttribute("data-frame-part", "how-it-works");
      const projected = frame.locator("img");
      if (await projected.count()) {
        await expect.poll(() => projected.first().evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0), `${e.slug} projector diagram`).toBe(true);
      }
      for (let i = 0; i < 20; i++) {
        const part = await frame.getAttribute("data-frame-part");
        expect(await frame.evaluate((el) => el.scrollHeight <= el.clientHeight), `${e.slug} ${part} frame fits`).toBe(true);
        if (await dialog.getByRole("button", { name: "Next", exact: true }).isDisabled()) break;
        await page.keyboard.press("ArrowRight");
      }
      await page.keyboard.press("Escape");
      await expect(dialog).toBeHidden();
    }
    expect(errors, `${e.slug} console errors`).toEqual([]);
  });
}
