import type { Page } from "@playwright/test";
import { expect, test } from "./fixtures";

// The example rail (plan: docs/build/PLAN-b2-field-instrument.md, Verification 1–8): the sticky
// section links, the dither field canvas that mounts only on desktop, and the magnetic dots.
// Since docs/build/PLAN-b2-one-page.md the rail runs beside the whole one-page example.

const GHGSAT = "/examples/ghgsat";
const ROLES = "/examples/ghgsat?view=roles";
const STICKY_TOP = 64 + 24; // --header-h + 24px at desktop widths

const lessonNav = (page: Page) => page.getByRole("navigation", { name: "Explore this example" });
const canvas = (page: Page) => page.locator("[data-rail-canvas]");

function collectErrors(page: Page) {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(String(e)));
  page.on("console", (m) => {
    if (m.type() === "error") errors.push(m.text());
  });
  return errors;
}

async function scrollToFraction(page: Page, fraction: number) {
  await page.evaluate((f) => window.scrollTo(0, (document.documentElement.scrollHeight - window.innerHeight) * f), fraction);
  await page.evaluate(() => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r))));
}

const rect = (page: Page, selector: string) =>
  page.evaluate((s) => {
    const r = document.querySelector(s)!.getBoundingClientRect();
    return { top: r.top, bottom: r.bottom, left: r.left, right: r.right, width: r.width, height: r.height };
  }, selector);

// Opaque pixels of the visible rail canvas inside a box of CSS px, centred on a client point.
const opaqueAround = (page: Page, x: number, y: number, half: number) =>
  page.evaluate(
    ({ x, y, half }) => {
      const c = document.querySelector<HTMLCanvasElement>("[data-rail-canvas]")!;
      const r = c.getBoundingClientRect();
      const k = c.width / r.width;
      const sx = Math.round((x - half - r.left) * k);
      const sy = Math.round((y - half - r.top) * k);
      const size = Math.round(half * 2 * k);
      const data = c.getContext("2d")!.getImageData(sx, sy, size, size).data;
      let n = 0;
      for (let i = 3; i < data.length; i += 4) if (data[i] > 0) n++;
      return n;
    },
    { x, y, half },
  );

// A cheap fingerprint of every pixel on the visible rail canvas.
const canvasHash = (page: Page) =>
  page.evaluate(() => {
    const c = document.querySelector<HTMLCanvasElement>("[data-rail-canvas]")!;
    const data = c.getContext("2d")!.getImageData(0, 0, c.width, c.height).data;
    let h = 0;
    for (let i = 0; i < data.length; i++) h = (h * 31 + data[i]) | 0;
    return `${c.width}x${c.height}:${h}`;
  });

async function waitForField(page: Page) {
  await expect(canvas(page)).toHaveAttribute("data-ready", "");
  await expect(canvas(page)).toHaveAttribute("data-magnet-idle", "");
}

// Finds a point over the rail, below the links, with dots drawn around it.
async function dottedPoint(page: Page) {
  const point = await page.evaluate(() => {
    const c = document.querySelector<HTMLCanvasElement>("[data-rail-canvas]")!;
    const r = c.getBoundingClientRect();
    const k = c.width / r.width;
    const data = c.getContext("2d")!.getImageData(0, 0, c.width, c.height).data;
    const opaque = (x: number, y: number) => {
      let n = 0;
      for (let dy = -3; dy < 3; dy++)
        for (let dx = -3; dx < 3; dx++) {
          const px = Math.round((x + dx - r.left) * k);
          const py = Math.round((y + dy - r.top) * k);
          if (data[(py * c.width + px) * 4 + 3] > 0) n++;
        }
      return n;
    };
    const links = document.querySelector("[data-rail-sticky]")!.getBoundingClientRect();
    for (let y = Math.max(links.bottom + 40, window.innerHeight * 0.55); y < window.innerHeight - 20; y += 12)
      for (let x = r.left + 40; x < r.right - 40; x += 10) if (opaque(x, y) >= 4) return { x, y };
    return null;
  });
  if (!point) throw new Error("no dotted point found on the rail");
  return point;
}

test.describe("desktop rail", () => {
  test.beforeEach(({}, info) => {
    test.skip(info.project.name !== "desktop", "desktop rail only");
  });

  test("1: the section links stay pinned while scrolling, and still work", async ({ page, requests }) => {
    void requests;
    for (const url of [GHGSAT, ROLES]) {
      await page.goto(url);
      const sticky = "[data-rail-sticky]";

      await scrollToFraction(page, 0.5);
      expect(Math.abs((await rect(page, sticky)).top - STICKY_TOP), `${url} at 50%`).toBeLessThanOrEqual(1);

      await page.evaluate(() => document.getElementById("sources")!.scrollIntoView({ block: "start" }));
      await page.evaluate(() => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r))));
      expect(Math.abs((await rect(page, sticky)).top - STICKY_TOP), `${url} at the sources`).toBeLessThanOrEqual(1);
      for (const link of await lessonNav(page).getByRole("link").all()) {
        await expect(link).toBeInViewport({ ratio: 1 });
        await link.click({ trial: true });
      }

      // Near the end of the page the block stops at the rail column's bottom edge.
      await scrollToFraction(page, 1);
      const block = await rect(page, sticky);
      const column = await rect(page, "[data-rail-column]");
      expect(block.bottom, `${url} at the bottom`).toBeLessThanOrEqual(column.bottom + 0.5);
    }

    // Every section move works from a scrolled page: one page, so the rail scrolls within it.
    await page.goto(GHGSAT);
    const entries = await page.evaluate(() => history.length);
    for (const [name, section] of [
      ["Company", "company"],
      ["Roles", "roles"],
      ["Pathways", "pathways"],
      ["Classroom story", "story"],
    ] as const) {
      await scrollToFraction(page, 0.5);
      const link = lessonNav(page).getByRole("link", { name });
      await link.click();
      await expect(page).toHaveURL(new RegExp(`/examples/ghgsat#${section}$`));
      await expect(link).toHaveAttribute("aria-current", "location");
      const heading = page.locator(`#${section}-title`);
      await expect(heading).toBeFocused();
      await expect(heading).toBeInViewport();
      // At the story (the top of the page) the block sits in its own place, below the back link.
      if (section !== "story") {
        await expect
          .poll(async () => Math.abs((await rect(page, "[data-rail-sticky]")).top - STICKY_TOP), { message: `${name}: the links stay pinned` })
          .toBeLessThanOrEqual(1);
      }
    }
    expect(await page.evaluate(() => history.length), "section moves add no history entries").toBe(entries);
  });

  test("2: mounting the field moves nothing", async ({ page, browser, requests }) => {
    void requests;
    const measure = async (p: Page) => {
      await p.evaluate(() => document.fonts.ready);
      const nav = (await lessonNav(p).boundingBox())!;
      const height = await p.evaluate(() => document.documentElement.scrollHeight);
      return { x: nav.x, y: nav.y, width: nav.width, height: nav.height, page: height };
    };

    // Before RailField mounts: the server-rendered page, with no script at all.
    const noScript = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 1440, height: 900 } });
    const plain = await noScript.newPage();
    await plain.goto(new URL(GHGSAT, test.info().project.use.baseURL).href);
    await expect(plain.locator("[data-rail-canvas]")).toHaveCount(0);
    const before = await measure(plain);
    await noScript.close();

    await page.goto(GHGSAT);
    await waitForField(page);
    expect(await measure(page)).toEqual(before);
  });

  test("3: the field mounts on desktop only, with the magnet only when motion is welcome", async ({ page, requests }) => {
    void requests;
    await page.goto(GHGSAT);
    await expect(canvas(page)).toHaveCount(1);
    await expect(canvas(page)).toHaveAttribute("data-magnet", "on");

    await page.setViewportSize({ width: 390, height: 844 });
    await expect(canvas(page)).toHaveCount(0);
    await page.setViewportSize({ width: 1440, height: 900 });
    await expect(canvas(page)).toHaveCount(1);
    await expect(canvas(page)).toHaveAttribute("data-magnet", "on");

    await page.emulateMedia({ reducedMotion: "reduce" });
    await expect(canvas(page)).toHaveAttribute("data-magnet", "off");
    await page.reload();
    await expect(canvas(page)).toHaveCount(1);
    await expect(canvas(page)).toHaveAttribute("data-magnet", "off");
  });

  test("4: the magnet never blocks the links", async ({ page, requests }) => {
    void requests;
    await page.goto(GHGSAT);
    await waitForField(page);
    const column = await rect(page, "[data-rail-column]");
    for (let y = 120; y < 860; y += 40) await page.mouse.move(column.left + 20 + ((y * 7) % 220), y, { steps: 2 });
    for (const [name, view] of [
      ["Company", /\/examples\/ghgsat#company$/],
      ["Roles", /\/examples\/ghgsat#roles$/],
      ["Pathways", /\/examples\/ghgsat#pathways$/],
      ["Classroom story", /\/examples\/ghgsat#story$/],
    ] as const) {
      const link = lessonNav(page).getByRole("link", { name });
      await link.click();
      await expect(page).toHaveURL(view);
      await expect(link).toHaveAttribute("aria-current", "location");
    }
  });

  test("5: wheel scrolling under a still pointer keeps the field drawing", async ({ page, requests }) => {
    void requests;
    const errors = collectErrors(page);
    await page.goto(GHGSAT);
    await waitForField(page);
    const column = await rect(page, "[data-rail-column]");
    await page.mouse.move(column.left + 140, 700, { steps: 4 });
    const frame = async () => Number(await canvas(page).getAttribute("data-frame"));
    for (let i = 0; i < 3; i++) {
      const before = await frame();
      await page.mouse.wheel(0, 300);
      await expect.poll(frame).toBeGreaterThan(before);
    }
    expect(errors).toEqual([]);
  });

  test("6: the visible canvas follows height-only resizes, and the pointer still moves the dots under it", async ({ page, requests }) => {
    void requests;
    await page.goto(GHGSAT);
    await waitForField(page);
    for (const height of [900, 600, 900]) {
      await page.setViewportSize({ width: 1440, height });
      await expect
        .poll(() =>
          page.evaluate(() => {
            const c = document.querySelector<HTMLCanvasElement>("[data-rail-canvas]")!;
            return c.height === Math.round(c.clientHeight * window.devicePixelRatio) && c.clientHeight === window.innerHeight - 64;
          }),
        )
        .toBe(true);
      await page.mouse.move(1000, 400);
      await expect(canvas(page)).toHaveAttribute("data-magnet-idle", "");
      const point = await dottedPoint(page);
      await page.mouse.move(point.x - 30, point.y, { steps: 2 });
      await page.mouse.move(point.x, point.y, { steps: 6 });
      await expect.poll(() => opaqueAround(page, point.x, point.y, 3), `pixels under the pointer at ${height}px`).toBe(0);
    }
  });

  test("7: moved dots leave no trails once they are home", async ({ page, requests }) => {
    void requests;
    await page.goto(GHGSAT);
    await waitForField(page);
    const still = await canvasHash(page);
    const column = await rect(page, "[data-rail-column]");
    for (let y = 460; y < 880; y += 30) await page.mouse.move(column.left + 30 + ((y * 13) % 200), y, { steps: 3 });
    expect(await canvasHash(page)).not.toBe(still);
    await page.mouse.move(900, 500, { steps: 3 });
    await expect(canvas(page)).toHaveAttribute("data-magnet-idle", "", { timeout: 10_000 });
    await expect.poll(() => canvasHash(page)).toBe(still);
  });
});

test("the field of the full one-page rail stays under the canvas size limit", async ({ browser, requests }, info) => {
  void requests;
  test.skip(info.project.name !== "desktop", "desktop rail only");
  // A 2× screen: the one-page rail is about 3× the old view's height.
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });
  const page = await context.newPage();
  for (const slug of ["ghgsat", "wilder-institute", "e3-lithium"]) {
    await page.goto(new URL(`/examples/${slug}`, info.project.use.baseURL).href);
    await expect(canvas(page)).toHaveAttribute("data-ready", "");
    const { railHeight, fieldDpr } = await page.evaluate(() => ({
      railHeight: document.querySelector("[data-rail-column]")!.getBoundingClientRect().height,
      fieldDpr: Number(document.querySelector<HTMLCanvasElement>("[data-rail-canvas]")!.dataset.fieldDpr),
    }));
    expect(railHeight, `${slug} is one long page`).toBeGreaterThan(6000);
    // Under the limit the field keeps the screen's DPR; over it, the cap draws it at 1×.
    expect(fieldDpr, slug).toBe(Math.ceil(railHeight * 2) > 32767 ? 1 : 2);
    expect(Math.ceil(railHeight * fieldDpr), slug).toBeLessThanOrEqual(32767);
  }
  await context.close();
});

test("3: phones get the plain tab bar, never the field", async ({ page, requests }, info) => {
  void requests;
  test.skip(info.project.name !== "phone", "phone layout only");
  await page.goto(GHGSAT, { waitUntil: "networkidle" });
  await expect(lessonNav(page)).toBeVisible();
  await expect(canvas(page)).toHaveCount(0);
});

test("8: no hero shows coordinates", async ({ page, requests }) => {
  void requests;
  for (const url of ["/", GHGSAT, "/examples/wilder-institute", "/examples/e3-lithium", "/get-involved", "/digest"]) {
    await page.goto(url);
    await expect(page.locator("main").getByText("51.05"), url).toHaveCount(0);
  }
});
