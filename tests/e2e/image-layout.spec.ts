import { test, expect } from "./fixtures";

for (const slug of ["ghgsat", "wilder-institute", "e3-lithium", "broken-pencil-studios", "standens", "efw-radiology"]) {
  test(`${slug}: story and teaching images reserve their loaded geometry`, async ({ page, requests }) => {
    void requests;
    await page.addInitScript(() => localStorage.setItem("example-layout", "all"));
    let release!: () => void;
    const images = new Promise<void>((resolve) => { release = resolve; });
    await page.route("**/_next/image?**", async (route) => { await images; await route.continue(); });
    try {
      await page.goto(`/examples/${slug}`, { waitUntil: "domcontentloaded" });
      // The progressive fallback exposes every role panel until hydration. Wait for that
      // enhancement before isolating layout changes caused by decoding the blocked images.
      await expect(page.locator("[data-example-root]")).toHaveAttribute("data-navigation-ready", "");
      await expect.poll(() => page.locator("[data-role-tabs]").evaluateAll(tabs => tabs.every(el => el.hasAttribute("data-tabs-ready")))).toBe(true);
      const illustrations = page.locator("#question figure img, #how-it-works figure img");
      await expect(illustrations).toHaveCount(2);
      // Trigger lazy loading before comparing the reserved space with the decoded image.
      for (const illustration of await illustrations.all()) await illustration.scrollIntoViewIfNeeded();
      await page.evaluate(() => document.fonts.ready);
      const geometry = () => illustrations.evaluateAll((imgs) => imgs.map((img) => {
        const box = img.getBoundingClientRect();
        return { width: box.width, height: box.height };
      }));
      expect(await illustrations.evaluateAll((imgs) => imgs.every((img) => (img as HTMLImageElement).naturalWidth === 0))).toBe(true);
      const before = await geometry();
      const pageHeight = await page.evaluate(() => document.documentElement.scrollHeight);
      release();
      await expect.poll(() => illustrations.evaluateAll((imgs) => imgs.every((img) => (img as HTMLImageElement).naturalWidth > 0))).toBe(true);
      expect(await geometry()).toEqual(before);
      expect(await page.evaluate(() => document.documentElement.scrollHeight)).toBe(pageHeight);
    } finally {
      release();
    }
  });
}
