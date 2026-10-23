import { test, expect } from "./fixtures";
import { exampleRecords } from "../../src/content/example-records";
import { choosePart } from "./example-helpers";
const output = "docs/validation/full-examples/2026-10-23/implementation-evidence";

for (const record of exampleRecords.filter((r) => r.addedOn === "2026-10-23")) {
  test(`${record.example.slug}: artwork, logo and evidence links load`, async ({ page, requests }, info) => {
    void requests;
    await page.goto(`/examples/${record.example.slug}`);
    for (const part of ["question", "how-it-works", "about", "sources"]) {
      if (part !== "question") await choosePart(page, { "how-it-works": "How it works", about: `About ${record.example.org}`, sources: "Sources" }[part]!);
      const section = page.locator(`section#${part}`);
      for (const img of await section.locator("img").all()) {
        await expect(img).toBeVisible();
        await expect.poll(() => img.evaluate((el: HTMLImageElement) => el.complete && el.naturalWidth > 0)).toBe(true);
        if (part === "question" || part === "how-it-works") expect((await img.boundingBox())!.width).toBeLessThanOrEqual(680);
      }
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
      if (["bioaro-checking-genomic-results", "made-by-marcus-seasonal-value", "optiseis-survey-tradeoffs"].includes(record.example.slug)) await page.screenshot({path:`${output}/${info.project.name}-${record.example.slug}-${part}.png`});
    }
  });
}

test("83: the new occupation remains hidden until reveal and has sourced ways in", async ({ page, requests }, info) => {
  void requests;
  await page.goto("/discover?role=83&step=0");
  const selected=page.locator('[data-role="work-geophysics"][data-visible="true"]');
  await expect(selected.locator("img")).toBeVisible();
  await expect.poll(()=>selected.locator("img").evaluate((el: HTMLImageElement)=>el.complete && el.naturalWidth>0)).toBe(true);
  await expect(page.getByRole("heading",{name:"Geophysicist",exact:true})).toHaveCount(0);
  await page.screenshot({path:`${output}/${info.project.name}-83-guess.png`});
  await page.getByRole("button",{name:"Reveal the job",exact:true}).click();
  await expect(page.getByRole("heading",{name:"Geophysicist",exact:true})).toBeVisible();
  await page.screenshot({path:`${output}/${info.project.name}-83-reveal.png`});
  await page.getByRole("button",{name:"Ways in",exact:true}).click();
  await expect(page.getByTestId("step-content")).toContainText("University of Calgary");
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
});
