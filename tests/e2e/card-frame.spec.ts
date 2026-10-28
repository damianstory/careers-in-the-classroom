import type { Page } from "@playwright/test";
import { examples, getDetails, getJob, getRegistrySource } from "../../src/content";
import { cardsFor } from "../../src/lib/example-navigation";
import { availableViews } from "../../src/lib/example-views";
import { exampleRoot, expectPart } from "./example-helpers";
import { expect, test } from "./fixtures";

// Frame mode (plan: CitC/docs/design/example-card-rail-2026-10-23/PLAN.md, criteria A–F).
// On laptops and desktops each card fits the window: no document scroll, no inner scrolling,
// nothing clipped, the site footer hidden, and Back/Next never move.

type Box = [number, number, number, number];
interface FrameState { scroll: number; y: number; footer: string; fit: string; frame: boolean; boxes: Record<string, Box | null>; scrollers: string[]; outside: string[]; clipped: string[] }

async function frameState(page: Page): Promise<FrameState> {
  // The navigation and frame controller hydrate independently. Measure the interactive frame,
  // rather than using a transient readable-fallback layout as the geometry reference.
  await expect(exampleRoot(page)).toHaveAttribute("data-frame", "");
  await page.evaluate(async () => {
    await document.fonts.ready;
    await new Promise<void>((resolve) => requestAnimationFrame(() => requestAnimationFrame(() => resolve())));
  });
  return page.evaluate(() => {
    const root = document.querySelector<HTMLElement>("[data-example-root]")!;
    const box = (selector: string) => {
      const el = document.querySelector(selector);
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return [Math.round(r.x), Math.round(r.y), Math.round(r.width), Math.round(r.height)] as [number, number, number, number];
    };
    const shown = (el: Element) => el.getClientRects().length > 0 && !el.closest(".sr-only, [popover], details:not([open]) > :not(summary)");
    const name = (el: Element) => `${el.tagName.toLowerCase()}${el.id ? `#${el.id}` : ""}.${String(el.className).split(" ")[0]}`;
    const card = root.querySelector<HTMLElement>(":scope > div")!;
    const stage = root.querySelector<HTMLElement>("[data-deck-body]")!.getBoundingClientRect();
    const scrollers: string[] = [];
    for (const el of card.querySelectorAll<HTMLElement>("*")) {
      const style = getComputedStyle(el);
      if (/(auto|scroll)/.test(style.overflowY) && el.scrollHeight > el.clientHeight + 1) scrollers.push(name(el));
    }
    const outside: string[] = [];
    for (const el of root.querySelectorAll<HTMLElement>("[data-deck-body] *")) {
      if (!shown(el) || el.closest("[data-paged-window], [data-part-header]")) continue;
      if (root.dataset.part !== "question" && el.closest("[data-example-title]")) continue;
      const r = el.getBoundingClientRect();
      if (r.height && (r.top < stage.top - 1 || r.bottom > stage.bottom + 1 || r.left < stage.left - 1 || r.right > stage.right + 1)) outside.push(name(el));
    }
    // Every page of every rendered paged window: each visible element lies inside the window's height.
    const clipped: string[] = [];
    for (const win of root.querySelectorAll<HTMLElement>("[data-paged-window]")) {
      if (!win.getClientRects().length) continue;
      const w = win.getBoundingClientRect();
      for (const el of win.querySelectorAll<HTMLElement>("*")) {
        if (!shown(el)) continue;
        const r = el.getBoundingClientRect();
        if (r.height && (r.top < w.top - 1 || r.bottom > w.bottom + 1)) clipped.push(name(el));
      }
    }
    return {
      scroll: document.documentElement.scrollHeight - innerHeight, y: scrollY,
      footer: getComputedStyle(document.querySelector("body > footer")!).display,
      fit: root.dataset.fit ?? "", frame: root.dataset.frame !== undefined,
      boxes: { card: box("[data-example-root] > div"), back: box("[data-deck-back]"), next: box("[data-deck-next]"), top: box("[data-deck-header]"), footer: box("[data-deck-footer]") },
      scrollers, outside: outside.slice(0, 8), clipped: clipped.slice(0, 8),
    };
  });
}

async function expectFramed(page: Page, label: string, reference: { boxes?: Record<string, Box | null> }, visitPages = true) {
  const state = await frameState(page);
  expect.soft(state.frame, `${label}: frame mode`).toBe(true);
  expect.soft(state.fit, `${label}: no flow fallback`).toBe("");
  expect.soft(state.scroll, `${label}: no document scroll`).toBeLessThanOrEqual(1);
  expect.soft(state.y, `${label}: at the top`).toBe(0);
  expect.soft(state.footer, `${label}: site footer hidden`).toBe("none");
  expect.soft(state.scrollers, `${label}: no inner scroll container`).toEqual([]);
  expect.soft(state.outside, `${label}: content inside the stage`).toEqual([]);
  expect.soft(state.clipped, `${label}: paged content not clipped`).toEqual([]);
  if (reference.boxes) expect.soft(state.boxes, `${label}: stable frame`).toEqual(reference.boxes);
  else reference.boxes = state.boxes;
  if (!visitPages) return;
  // Traverse the actual pages: inspecting all column boxes alone does not prove the pager can
  // reach (and keep) the final partial page. Return to page 1 before continuing the journey.
  for (const panel of await page.locator("[data-paged]:visible").all()) {
    const pager = panel.locator(":scope > [data-pager]");
    if (!await pager.isVisible()) continue;
    const next = pager.getByRole("button", { name: "Next page" });
    const previous = pager.getByRole("button", { name: "Previous page" });
    while (await previous.isEnabled()) await previous.click();
    const count = Number(await pager.getAttribute("data-pages"));
    for (let current = 2; current <= count; current++) {
      await next.click();
      await expect(pager).toContainText(`Page ${current} of ${count}`);
      await expectFramed(page, `${label}: panel page ${current}`, reference, false);
    }
    while (await previous.isEnabled()) await previous.click();
  }
}

async function walkExample(page: Page, slug: string, { roles = true } = {}) {
  const e = examples.find((item) => item.slug === slug)!;
  const details = e.detailsId ? getDetails(e.detailsId) : undefined;
  const cards = cardsFor(availableViews(e, details), !!details?.story);
  const reference: { boxes?: Record<string, Box | null> } = {};
  await page.goto(`/examples/${slug}`);
  await expect(exampleRoot(page)).toHaveAttribute("data-navigation-ready", "");
  for (const card of cards) {
    await expect(exampleRoot(page)).toHaveAttribute("data-part", card.part);
    await expect(exampleRoot(page)).toHaveAttribute("data-card", String(card.card));
    await expectFramed(page, `${slug} ${card.part}-${card.card}`, reference);
    if (card.part === "sources") {
      const ledger = page.locator("#sources details");
      if (await ledger.count()) {
        await ledger.locator("summary").click();
        await expectFramed(page, `${slug} sources ledger open`, reference);
        await ledger.locator("summary").click();
      }
    }
    if (card !== cards.at(-1)) await page.locator("[data-deck-next]").click();
  }
  if (!roles || !details) return;
  for (const roleId of details.roleIds) {
    await page.goto(`/examples/${slug}?role=${roleId}#who`);
    await expectPart(page, "who");
    const detail = page.locator(`[data-role-detail="${roleId}"]`);
    for (const tab of ["what", "jobs", "prepare"]) {
      await detail.locator(`[data-tab="${tab}"]`).click();
      await expectFramed(page, `${slug} ${roleId} ${tab}`, reference);
    }
    const job = details.jobIds.map((id) => getJob(id)!).find((j) => j.roleIds.includes(roleId));
    if (job) {
      await page.goto(`/examples/${slug}?role=${roleId}&job=${job.id}#who`);
      await expect(page.locator("[data-job-view]")).toBeVisible();
      await expectFramed(page, `${slug} ${roleId} job ${job.id}`, reference);
    }
  }
}

test.describe("frame mode", () => {
  test.beforeEach(async ({}, info) => {
    test.skip(info.project.name !== "desktop", "frame mode is a desktop layout");
    // Each walk visits every card, role, tab and saved job of an example.
    test.setTimeout(180_000);
  });

  for (const e of examples) {
    test(`${e.slug}: every card, role, tab and saved job fits at 1280x720`, async ({ page, requests }) => {
      void requests;
      await page.setViewportSize({ width: 1280, height: 720 });
      await walkExample(page, e.slug);
    });
  }

  for (const viewport of [{ width: 1366, height: 768 }, { width: 1440, height: 900 }, { width: 1920, height: 1080 }]) {
    for (const slug of ["providence-rna-delivery", "ghgsat", "cawst-biosand-learning"]) {
      test(`${slug}: fits at ${viewport.width}x${viewport.height}`, async ({ page, requests }) => {
        void requests;
        await page.setViewportSize(viewport);
        await walkExample(page, slug);
      });
    }
  }

  test("paged panels turn pages, follow focus, recompute, and fall back instead of clipping", async ({ page, requests }) => {
    void requests;
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto("/examples/ghgsat#about");
    await expectPart(page, "about");
    const panel = page.locator("#about [data-paged]").first();
    const pager = panel.locator("[data-pager]");
    await expect(pager).toBeVisible();
    await expect(pager).toContainText("Page 1 of");
    await panel.getByRole("button", { name: "Next page" }).click();
    await expect(pager).toContainText("Page 2 of");
    await panel.getByRole("button", { name: "Previous page" }).click();
    await expect(pager).toContainText("Page 1 of");
    // Keyboard focus on an off-page link turns to its page.
    const win = panel.locator("[data-paged-window]");
    const last = win.locator("a, button").last();
    await last.focus();
    await expect(last).toBeInViewport();
    const visible = await last.evaluate((el) => {
      const w = el.closest("[data-paged-window]")!.getBoundingClientRect();
      const r = el.getBoundingClientRect();
      return r.left >= w.left - 1 && r.right <= w.right + 1;
    });
    expect(visible).toBe(true);
    await expect(pager).not.toContainText("Page 1 of");
    // Resizing recomputes the page count.
    const before = await pager.getAttribute("data-pages");
    await page.setViewportSize({ width: 1920, height: 1080 });
    await expect.poll(() => pager.getAttribute("data-pages")).not.toBe(before);
    // An oversized block cannot be paged: the card falls back to flow, and nothing is clipped.
    await page.setViewportSize({ width: 1280, height: 720 });
    await win.evaluate((el) => {
      const block = document.createElement("div");
      block.dataset.testOversized = "";
      // overflow: hidden makes the block monolithic: columns cannot split it.
      block.style.cssText = "height: 2000px; overflow: hidden; display: block;";
      block.textContent = "oversized";
      el.prepend(block);
    });
    await expect(exampleRoot(page)).toHaveAttribute("data-fit", "flow");
    await expect(pager).toBeHidden();
    const scrollable = await page.evaluate(() => document.documentElement.scrollHeight > innerHeight);
    expect(scrollable).toBe(true);
    await win.locator("[data-test-oversized]").evaluate((el) => el.remove());
    await expect(exampleRoot(page)).not.toHaveAttribute("data-fit", "flow");
  });

  test("the Sources ledger toggles inside the paged Sources card without clipping", async ({ page, requests }) => {
    void requests;
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto("/examples/ghgsat#sources");
    await expectPart(page, "sources", false);
    const pager = page.locator("#sources [data-pager]");
    const pages = Number(await pager.getAttribute("data-pages"));
    await page.locator("#sources details summary").click();
    await expect(page.locator("#sources details")).toHaveAttribute("open", "");
    await expect.poll(async () => Number(await pager.getAttribute("data-pages"))).toBeGreaterThanOrEqual(pages);
    await expectFramed(page, "ghgsat ledger open", {});
    // The ledger's last row is reachable: on the last page it lies inside the window.
    const next = page.locator("#sources").getByRole("button", { name: "Next page" });
    while (await next.isEnabled()) await next.click();
    const inside = await page.locator("#sources details tbody tr").last().evaluate((row) => {
      const w = row.closest("[data-paged-window]")!.getBoundingClientRect();
      const r = row.getBoundingClientRect();
      return r.left >= w.left - 1 && r.right <= w.right + 1 && r.top >= w.top - 1 && r.bottom <= w.bottom + 1;
    });
    expect(inside).toBe(true);
  });
});

test("a citation is a Sources button with the same labels and links", async ({ page, requests }) => {
  void requests;
  await page.setViewportSize({ width: 1280, height: 720 });
  await page.goto("/examples/ghgsat#how-it-works-2");
  await expectPart(page, "how-it-works");
  const details = getDetails(examples.find((e) => e.slug === "ghgsat")!.detailsId!)!;
  const ids = [...new Set(details.story!.steps.flatMap((s) => s.sourceIds))];
  const toggle = page.locator('#how-it-works [data-card="2"] [data-sources-button] button');
  await expect(toggle).toHaveText(ids.length === 1 ? "Source" : `Sources · ${ids.length}`);
  const popover = page.locator('#how-it-works [data-card="2"] [data-sources-button] [popover]');
  await expect(popover).toBeHidden();
  await toggle.focus();
  await page.keyboard.press("Enter");
  await expect(popover).toBeVisible();
  for (const id of ids) {
    const source = getRegistrySource(id)!;
    await expect(popover.getByRole("link", { name: source.label })).toHaveAttribute("href", source.url);
  }
  await page.keyboard.press("Escape");
  await expect(popover).toBeHidden();
  await toggle.click();
  await expect(popover).toBeVisible();
  await page.mouse.click(5, 300);
  await expect(popover).toBeHidden();
});

// Job focus and history (plan D.4): destination first; then the posting heading or the job's row.
for (const size of [{ width: 1280, height: 720 }, { width: 390, height: 844 }]) {
  test(`saved job focus and history at ${size.width}px`, async ({ page, requests }) => {
    void requests;
    await page.setViewportSize(size);
    const role = "atmospheric-science";
    const job = getDetails(examples.find((e) => e.slug === "ghgsat")!.detailsId!)!.jobIds
      .map((id) => getJob(id)!).find((j) => j.roleIds.includes(role))!;
    const heading = page.locator(`#job-title-${job.id}`);
    const row = page.locator(`[data-role-detail="${role}"] [data-job-row="${job.id}"]`);
    await page.goto(`/examples/ghgsat?role=${role}#who`);
    await expectPart(page, "who");
    await page.locator(`[data-role-detail="${role}"] [data-tab="jobs"]`).click();
    await row.focus();
    await page.keyboard.press("Enter");
    await expect(page).toHaveURL(new RegExp(`job=${job.id}`));
    await expect(heading).toBeFocused();
    await page.reload();
    await expect(heading).toBeFocused();
    await page.goBack();
    await expect(page).not.toHaveURL(/job=/);
    await expect(page.locator(`[data-role-detail="${role}"] [data-tab="jobs"]`)).toHaveAttribute("aria-selected", "true");
    await expect(row).toBeFocused();
    await page.goForward();
    await expect(heading).toBeFocused();
    await page.locator("[data-job-view]").getByRole("link", { name: /Back to/ }).click();
    await expect(page).not.toHaveURL(/job=/);
    await expect(page.locator(`[data-role-detail="${role}"] [data-tab="jobs"]`)).toHaveAttribute("aria-selected", "true");
    await expect(row).toBeFocused();
    // Another destination wins over the job selection.
    for (const [suffix, part] of [["#ways-in", "ways-in"], ["#about", "about"]] as const) {
      await page.goto(`/examples/ghgsat?role=${role}&job=${job.id}${suffix}`);
      await expectPart(page, part);
      await page.reload();
      await expectPart(page, part);
    }
    await page.goto(`/examples/ghgsat?role=${role}&job=${job.id}&view=pathways`);
    await expectPart(page, "ways-in");
    await page.goto(`/examples/ghgsat?role=${role}&job=${job.id}#about`);
    await page.goto(`/examples/ghgsat?role=${role}&job=${job.id}#ways-in`);
    await page.goBack();
    await expectPart(page, "about");
  });
}

test("below frame mode the page scrolls and never overflows sideways", async ({ page, requests }) => {
  void requests;
  for (const viewport of [{ width: 390, height: 844 }, { width: 320, height: 640 }, { width: 720, height: 450 }]) {
    await page.setViewportSize(viewport);
    await page.goto("/examples/ghgsat#about");
    await expect(exampleRoot(page)).toHaveAttribute("data-navigation-ready", "");
    const state = await page.evaluate(() => ({
      frame: document.querySelector<HTMLElement>("[data-example-root]")!.dataset.frame !== undefined,
      sideways: document.documentElement.scrollWidth - innerWidth,
      scrolls: document.documentElement.scrollHeight > innerHeight,
    }));
    expect(state.frame, `${viewport.width}: not framed`).toBe(false);
    expect(state.sideways, `${viewport.width}: no horizontal overflow`).toBe(0);
    expect(state.scrolls, `${viewport.width}: page scrolls`).toBe(true);
  }
});
