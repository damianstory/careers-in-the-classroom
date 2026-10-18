import { examples, getDetails } from "../../src/content";
import { SHOW_PARTS } from "../../src/lib/example-navigation";
import { availableViews } from "../../src/lib/example-views";
import type { Page } from "@playwright/test";
import { exampleRoot, expectPart, lessonNav } from "./example-helpers";
import { expect, test } from "./fixtures";

// Every example in the library works in the parts layout. Expectations come from the content records,
// not from what the page renders: each available part is reachable, examples with a classroom story
// show and project their teaching diagram, every projector frame fits, and phones never scroll sideways.
// Opens the i-th part from the rail, or from the Contents sheet on phones.
async function openPart(page: Page, i: number) {
  const contents = page.getByRole("button", { name: "Contents", exact: true });
  if (await contents.isVisible()) {
    await contents.click();
    const sheet = page.getByRole("dialog", { name: "Contents", exact: true });
    await sheet.getByRole("link").nth(i).click();
    await expect(sheet).toBeHidden();
  } else await lessonNav(page).getByRole("link").nth(i).click();
}

for (const e of examples) {
  const details = e.detailsId ? getDetails(e.detailsId) : undefined;
  const parts: string[] = availableViews(e, details);
  const showParts = parts.filter((p) => (SHOW_PARTS as readonly string[]).includes(p));
  const hasDiagram = !!details?.story;

  test(`${e.slug}: every part, the diagram and the projector work`, async ({ page, requests }, info) => {
    void requests;
    const errors: string[] = [];
    page.on("pageerror", (err) => errors.push(err.message));
    page.on("console", (msg) => { if (msg.type() === "error") errors.push(msg.text()); });
    const overflow = () => page.evaluate(() => document.documentElement.scrollWidth - innerWidth);

    await page.addInitScript(() => { Element.prototype.requestFullscreen = () => Promise.reject(new Error("refused")); });
    await page.goto(`/examples/${e.slug}`);
    await expect(exampleRoot(page)).toHaveAttribute("data-layout", "parts");
    await expect(exampleRoot(page)).toHaveAttribute("data-navigation-ready", "");
    await expect(page.getByRole("heading", { level: 1, name: e.question })).toBeVisible();
    expect(await page.locator("section[data-part]").evaluateAll((s) => s.map((el) => el.id)), e.slug).toEqual(parts);
    const contents = page.getByRole("button", { name: "Contents", exact: true });
    if (info.project.name === "phone") {
      await contents.click();
      const sheet = page.getByRole("dialog", { name: "Contents", exact: true });
      await expect(sheet.getByRole("link")).toHaveCount(parts.length);
      await sheet.getByRole("button", { name: "Close", exact: true }).click();
    } else await expect(lessonNav(page).getByRole("link")).toHaveCount(parts.length);

    for (let i = 0; i < parts.length; i++) {
      await openPart(page, i);
      await expectPart(page, parts[i], info.project.name !== "phone");
      if (info.project.name === "phone") expect(await overflow(), `${e.slug} ${parts[i]}`).toBe(0);
    }

    // The teaching diagram exists and loads wherever the example has a classroom story.
    await openPart(page, 1);
    const diagram = page.locator("#how-it-works figure img");
    await expect(diagram).toHaveCount(hasDiagram ? 1 : 0);
    if (hasDiagram) {
      await expect(diagram).toBeVisible();
      await expect.poll(() => diagram.evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0), e.slug).toBe(true);
    }

    if (info.project.name !== "phone") {
      // The projector runs the whole sequence from the first part; every frame fits, diagrams uncropped.
      await openPart(page, 0);
      await page.locator('[data-present="question"]').click();
      const dialog = page.getByRole("dialog");
      const frame = dialog.locator("[data-frame-part]");
      await expect(frame).toHaveAttribute("data-frame-part", "question");
      const seen: string[] = [];
      for (let i = 0; i < 30; i++) {
        const part = (await frame.getAttribute("data-frame-part"))!;
        seen.push(part);
        expect(await frame.evaluate((el) => el.scrollHeight <= el.clientHeight), `${e.slug} ${part} frame fits`).toBe(true);
        if (part === "how-it-works" && hasDiagram) {
          const img = frame.locator("img");
          await expect(img).toHaveCount(1);
          await expect.poll(() => img.evaluate((el: HTMLImageElement) => el.complete && el.naturalWidth > 0), `${e.slug} projector diagram`).toBe(true);
          expect(await img.evaluate((el) => getComputedStyle(el).objectFit)).toBe("contain");
        }
        if (await dialog.getByRole("button", { name: "Next", exact: true }).isDisabled()) break;
        await page.keyboard.press("ArrowRight");
      }
      expect([...new Set(seen)], e.slug).toEqual(showParts);
      await page.keyboard.press("Escape");
      await expect(dialog).toBeHidden();
    }
    expect(errors, `${e.slug} console errors`).toEqual([]);
  });
}
