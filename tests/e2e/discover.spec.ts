import { expect, test } from "./fixtures";
import { steps } from "../../src/lib/discover";
import { buildDiscoverCards } from "../../src/lib/discover-cards";
import { jobStatusLabel } from "../../src/lib/job-status";

const cards = buildDiscoverCards(new Date().toISOString().slice(0, 10));

test.describe("Discover classroom flow", () => {
  test.beforeEach(async ({}, info) => { test.skip(info.project.name === "phone", "Desktop keyboard flow; phone has a tap journey below."); });

  test("header navigation is current", async ({ page, requests }) => {
    void requests;
    await page.goto("/");
    await page.getByRole("navigation", { name: "Main", exact: true }).getByRole("link", { name: "Discover" }).click();
    await expect(page).toHaveURL(/\/discover$/);
    await expect(page.getByRole("navigation", { name: "Main", exact: true }).getByRole("link", { name: "Discover" })).toHaveAttribute("aria-current", "page");
  });

  test("stops the displayed picture, conceals titles, steps and restores through Back", async ({ page, requests }) => {
    void requests;
    await page.goto("/discover");
    await page.getByRole("button", { name: "Start Space" }).click();
    await page.waitForTimeout(1000);
    const concealed = async () => {
      const text = await page.locator("body").innerText();
      const attributes = await page.locator("main").evaluate((main) => Array.from(main.querySelectorAll("*"), (element) => Array.from(element.attributes).filter((a) => a.name === "alt" || a.name === "title" || a.name.startsWith("aria-")).map((a) => a.value).join(" ")).join(" "));
      for (const card of cards) { expect(text).not.toContain(card.role.title); expect(attributes).not.toContain(card.role.title); }
    };
    await concealed();
    // Read and dispatch in one browser task: no timer can run between these operations.
    const role = await page.evaluate(() => {
      const role = document.querySelector<HTMLElement>('[data-visible="true"]')!.dataset.role!;
      document.activeElement!.dispatchEvent(new KeyboardEvent("keydown", { key: " ", bubbles: true, cancelable: true }));
      return role;
    });
    await expect(page.locator('[data-phase="reveal"]')).toHaveAttribute("data-step", "0");
    await expect(page.locator('[data-visible="true"]')).toHaveAttribute("data-role", role);
    await concealed();
    expect(page.url()).not.toContain(role);
    const card = cards.find((c) => c.role.id === role)!;
    expect(decodeURIComponent(page.url())).not.toContain(card.role.title);
    expect(new URL(page.url()).searchParams.get("role")).toMatch(/^\d{2}$/);
    expect(new URL(page.url()).searchParams.get("role")).toBe(card.number);
    expect(new URL(page.url()).searchParams.get("step")).toBe("0");
    expect(new URL(page.url()).searchParams.get("found")?.split(",")).toContain(card.number);
    await page.reload();
    await expect(page.getByRole("region", { name: "Discover", exact: true })).toHaveAttribute("data-step", "0");
    await expect(page.locator('[data-visible="true"]')).toHaveAttribute("data-role", role);
    await expect(page.getByText(`1 of ${cards.length} selected`, { exact: true })).toBeVisible();
    await concealed();
    await page.keyboard.press("Space");
    await expect(page.getByRole("heading", { name: card.title, exact: true })).toBeVisible();
    expect(new URL(page.url()).searchParams.get("role")).toBe(card.number);
    expect(new URL(page.url()).searchParams.get("step")).toBe("1");
    expect(new URL(page.url()).searchParams.get("found")?.split(",")).toContain(card.number);
    await page.keyboard.press("ArrowLeft");
    await expect(page.getByRole("region", { name: "Discover", exact: true })).toHaveAttribute("data-step", "0");
    expect(page.url()).not.toContain(role);
    expect(new URL(page.url()).searchParams.get("step")).toBe("0");
    await expect(page.getByText(`1 of ${cards.length} selected`, { exact: true })).toBeVisible();
    await page.keyboard.press("Space");
    for (let step = 2; step <= 6; step++) {
      await page.keyboard.press("Space");
      await expect(page.getByRole("heading", { name: steps[step], exact: true })).toBeVisible();
    }
    await page.keyboard.press("ArrowLeft");
    await expect(page.getByRole("heading", { name: "Ways in", exact: true })).toBeVisible();
    await page.getByRole("navigation", { name: "Reveal steps" }).getByRole("button", { name: "Team & subjects", exact: true }).click();
    await expect(page.getByRole("heading", { name: "Team & subjects", exact: true })).toBeVisible();
    const before = page.url();
    const example = page.getByRole("link", { name: `Work area at ${card.organization.name} →` });
    await expect(example).toHaveAttribute("href", `/examples/${card.example.slug}?role=${role}#who`);
    await example.click();
    await page.goBack();
    await expect(page).toHaveURL(before);
    await expect(page.getByRole("heading", { name: card.title, exact: true })).toBeVisible();
    await expect(page.locator('[data-phase="reveal"]')).toHaveAttribute("data-step", "4");
    await page.getByRole("navigation", { name: "Main", exact: true }).getByRole("link", { name: "Discover", exact: true }).click();
    await expect(page).toHaveURL(/\/discover$/);
    await expect(page.getByRole("region", { name: "Discover", exact: true })).toHaveAttribute("data-phase", "start");
    await expect(page.getByRole("heading", { name: "Snap a job.", exact: true })).toBeVisible();
  });

  test("one Space press stops without advancing when the key is released", async ({ page, requests }) => {
    void requests;
    await page.goto("/discover");
    await page.getByRole("button", { name: "Start Space" }).click();
    const released = await page.evaluate(async () => {
      document.body.dispatchEvent(new KeyboardEvent("keydown", { key: " ", bubbles: true, cancelable: true }));
      // Allow the stop render and focus effect to commit before releasing Space.
      await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
      const primary = document.activeElement!;
      const event = new KeyboardEvent("keyup", { key: " ", bubbles: true, cancelable: true });
      primary.dispatchEvent(event);
      return { label: primary.textContent, prevented: event.defaultPrevented };
    });
    expect(released.label).toBe("What could this person do?");
    expect(released.prevented).toBe(true);
    await expect(page.getByRole("region", { name: "Discover", exact: true })).toHaveAttribute("data-step", "0");
  });

  test("Chemistry does not repeat and resets the exhausted set", async ({ page, requests }) => {
    void requests;
    await page.goto("/discover");
    await page.getByLabel("JOBS", { exact: true }).selectOption("chemistry");
    await page.getByRole("button", { name: "Start Space" }).click();
    await page.getByRole("button", { name: "STOP", exact: true }).click();
    const first = await page.locator('[data-visible="true"]').getAttribute("data-role");
    await page.keyboard.press("r");
    await page.getByRole("button", { name: "STOP", exact: true }).click();
    const second = await page.locator('[data-visible="true"]').getAttribute("data-role");
    expect(first).not.toBe(second);
    const chemistry = cards.filter((c) => c.subjects.includes("chemistry"));
    const selected = new Set([first, second]);
    for (let i = 2; i < chemistry.length; i++) {
      await page.keyboard.press("r");
      await page.getByRole("button", { name: "STOP", exact: true }).click();
      const id = await page.locator('[data-visible="true"]').getAttribute("data-role");
      expect(selected.has(id)).toBe(false);
      selected.add(id);
    }
    expect([...selected].sort()).toEqual(chemistry.map((c) => c.role.id).sort());
    await page.keyboard.press("r");
    await expect(page.getByText("All jobs selected. Starting a fresh set.")).toBeVisible();
    await expect(page.getByText(`0 of ${chemistry.length} selected`)).toBeVisible();
  });

  test("deep links retain route, saved date, vacancy label and empty state", async ({ page, requests }) => {
    void requests;
    await page.goto("/discover?role=05&step=0");
    await expect(page.getByRole("region", { name: "Discover", exact: true })).toHaveAttribute("data-step", "0");
    await expect(page.locator('[data-visible="true"]')).toHaveAttribute("data-role", "animal-care");
    await page.goto("/discover?role=05&step=5");
    await expect(page.getByRole("heading", { name: "Ways in", exact: true })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Animal Care Technician", exact: true })).toBeVisible();
    await page.goto("/discover?role=05&step=6");
    await expect(page.getByText("Saved 29 Sep 2026", { exact: true })).toBeVisible();
    const job = cards.find((c) => c.role.id === "animal-care")!.job!;
    await expect(page.getByText(jobStatusLabel(job, new Date().toISOString().slice(0, 10)), { exact: true })).toBeVisible();
    await page.goto("/discover?role=06&step=6");
    await expect(page.getByText("No saved job example for this role yet.")).toBeVisible();
  });

  test("dialogs, fields and header controls isolate keyboard shortcuts", async ({ page, requests }) => {
    void requests;
    await page.goto("/discover");
    await expect(page.getByRole("button", { name: "Start Space" })).toBeEnabled();
    for (const [button, field] of [["Sign up free", "#su-email"], ["Request a speaker", "#sp-topic"]]) {
      await page.getByRole("banner").getByRole("button", { name: button }).click();
      await page.locator(field).fill("");
      await page.locator(field).pressSequentially("a b s");
      await expect(page.locator(field)).toHaveValue("a b s");
      await page.getByRole("dialog").getByRole("button", { name: "Close", exact: true }).click();
      await expect(page.locator('[data-phase="start"]')).toBeVisible();
      await expect(page.getByRole("button", { name: "Start Space" })).toBeVisible();
    }
    await page.getByRole("navigation", { name: "Main", exact: true }).getByRole("link", { name: "Connections", exact: true }).focus();
    await page.keyboard.press("Space");
    await expect(page.locator('[data-phase="start"]')).toBeVisible();
    await page.getByLabel("JOBS", { exact: true }).focus();
    await page.keyboard.press("s");
    await expect(page.locator('[data-phase="start"]')).toBeVisible();
  });

  test("picture loading respects header and subject focus", async ({ page, requests }) => {
    void requests;
    await page.addInitScript(() => {
      const decode = HTMLImageElement.prototype.decode;
      const released = new Promise<void>((resolve) => {
        window.addEventListener("discover-test:decode", () => resolve(), { once: true });
      });
      HTMLImageElement.prototype.decode = function () {
        return released.then(() => decode.call(this));
      };
    });
    for (const target of ["header", "select", "body"] as const) {
      await page.goto("/discover");
      await expect(page.getByRole("button", { name: /Loading pictures/ })).toBeDisabled();
      const focused = target === "header"
        ? page.getByRole("navigation", { name: "Main", exact: true }).getByRole("link", { name: "Connections", exact: true })
        : page.getByLabel("JOBS", { exact: true });
      if (target === "body") await page.evaluate(() => (document.activeElement as HTMLElement)?.blur());
      else await focused.focus();
      await page.evaluate(() => window.dispatchEvent(new Event("discover-test:decode")));
      const start = page.getByRole("button", { name: "Start Space" });
      await expect(start).toBeEnabled();
      await expect(target === "body" ? start : focused).toBeFocused();
    }
  });

  test("reduced motion draws once and failed pictures provide equivalent clues", async ({ page, requests }) => {
    void requests;
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.route("**/images/discover/*", (route) => route.abort());
    await page.goto("/discover");
    await expect(page.getByLabel("Round style")).toHaveCount(0);
    await page.getByRole("button", { name: "Draw a picture Space" }).click();
    await expect(page.locator('[data-phase="reveal"]')).toHaveAttribute("data-step", "0");
    const picture = page.locator('[data-visible="true"]');
    const id = await picture.getAttribute("data-role");
    await page.waitForTimeout(1100);
    await expect(picture).toHaveAttribute("data-role", id!);
    await expect(picture).toContainText("Picture unavailable. Use these clues:");
    await expect(picture).toContainText(cards.find((c) => c.role.id === id)!.image.clue);
    await page.getByRole("button", { name: "Reveal the job", exact: true }).click();
    await expect(page.locator("#discover-title")).toBeVisible();
    await expect(page.getByText("What job is this?", { exact: true })).toHaveCount(0);
  });

  test("classroom guessing controls fit a 720p screen and fullscreen can be requested", async ({ page, requests }) => {
    void requests;
    await page.setViewportSize({ width: 1280, height: 720 });
    for (const number of ["07", "18"]) {
      await page.goto(`/discover?role=${number}&step=0`);
      const reveal = page.getByRole("button", { name: "Reveal the job", exact: true });
      const box = (await reveal.boundingBox())!;
      expect(box.y + box.height).toBeLessThanOrEqual(720);
      await page.getByRole("button", { name: "Full screen", exact: true }).click();
      await expect.poll(() => page.evaluate(() => document.fullscreenElement?.getAttribute("aria-label"))).toBe("Discover");
      const fullBox = (await reveal.boundingBox())!;
      expect(fullBox.y + fullBox.height).toBeLessThanOrEqual(720);
      await reveal.click();
      await expect(page.getByRole("heading", { name: cards.find((c) => c.number === number)!.title, exact: true })).toBeVisible();
      await page.keyboard.press("Escape");
      await expect.poll(() => page.evaluate(() => document.fullscreenElement === null)).toBe(true);
    }
  });

  test("fullscreen sits below signup, centers the game and explains Escape", async ({ page, requests }) => {
    void requests;
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.goto("/discover");
    await expect(page.getByLabel("Round style")).toHaveCount(0);
    await expect(page.getByRole("button", { name: /^Slower/ })).toHaveCount(0);
    await expect(page.getByRole("button", { name: "Subjects", exact: true })).toHaveCount(0);
    const full = page.getByRole("button", { name: "Full screen", exact: true });
    const signup = (await page.getByRole("banner").getByRole("button", { name: "Sign up free", exact: true }).boundingBox())!;
    const control = (await full.boundingBox())!;
    expect(Math.abs(control.x + control.width - signup.x - signup.width)).toBeLessThan(2);
    expect(control.y).toBeGreaterThan(signup.y + signup.height);
    await full.click();
    await expect.poll(() => page.evaluate(() => document.fullscreenElement?.getAttribute("aria-label"))).toBe("Discover");
    await expect(page.getByText("Press Esc to exit full screen", { exact: true })).toBeVisible();
    const geometry = await page.locator('[data-phase="start"]').evaluate((area) => {
      const toolbar = area.firstElementChild!.getBoundingClientRect();
      const canvas = area.lastElementChild!.getBoundingClientRect();
      return { center: canvas.y + canvas.height / 2, availableCenter: (toolbar.bottom + innerHeight) / 2, overflow: document.documentElement.scrollWidth - innerWidth };
    });
    expect(Math.abs(geometry.center - geometry.availableCenter)).toBeLessThan(2);
    expect(geometry.overflow).toBe(0);
    await page.getByRole("button", { name: "Exit full screen", exact: true }).click();
    await expect.poll(() => page.evaluate(() => document.fullscreenElement === null)).toBe(true);
    await expect(full).toBeVisible();
    await full.click();
    await page.keyboard.press("Escape");
    await expect.poll(() => page.evaluate(() => document.fullscreenElement === null)).toBe(true);
    await expect(page.getByText("Press Esc to exit full screen", { exact: true })).toHaveCount(0);
  });

  test("desktop headings stay visually quiet while tabs retain keyboard focus", async ({ page, requests }) => {
    void requests;
    await page.goto("/discover");
    await expect(page.getByRole("button", { name: "Start Space" })).toBeFocused();
    await page.keyboard.press("Space");
    const heading = page.getByRole("heading", { level: 1 });
    await expect(heading).toBeFocused();
    await expect(heading).toHaveCSS("outline-style", "none");
    await page.keyboard.press("Space");
    await expect(page.getByRole("button", { name: "Reveal the job", exact: true })).toBeVisible();
    await page.keyboard.press("Space");
    await expect(page.locator("#discover-title")).toBeFocused();
    await expect(page.locator("#discover-title")).toHaveCSS("outline-style", "none");
    await expect(page.getByRole("navigation", { name: "Round controls" })).toBeHidden();
    await expect(page.getByRole("button", { name: "Next round", exact: true })).toBeVisible();
    await page.keyboard.press("Space");
    await expect(page.getByRole("region", { name: "Discover", exact: true })).toHaveAttribute("data-step", "2");
    await page.keyboard.press("Tab");
    const guess = page.getByRole("navigation", { name: "Reveal steps" }).getByRole("button", { name: "Guess", exact: true });
    await expect(guess).toBeFocused();
    await expect(guess).toHaveCSS("outline-style", "solid");
    await page.goto("/discover?role=07&step=6");
    await expect(page.locator("#discover-title")).toBeFocused();
    await page.keyboard.press("ArrowLeft");
    await expect(page.getByRole("region", { name: "Discover", exact: true })).toHaveAttribute("data-step", "5");
  });

  test("qualifications stay with routes and related-employer postings", async ({ page, requests }) => {
    void requests;
    await page.goto("/discover?role=06&step=5");
    await expect(page.getByTestId("step-content")).toContainText("Not direct entry from high school");
    const admissions = cards[5].pathwaySources.find((source) => source.id === "depth-ucalgary-dvm-entry")!;
    await expect(page.getByRole("link", { name: `${admissions.label} ↗`, exact: true })).toHaveAttribute("href", admissions.url);
    for (const number of ["02", "04", "09"]) {
      const card = cards.find((c) => c.number === number)!;
      await page.goto(`/discover?role=${number}&step=6`);
      const content = page.getByTestId("step-content");
      await expect(content).toContainText(`Employer: ${card.job!.employer}`);
      await expect(content).toContainText(card.job!.employerNote.text);
      await expect(content).toContainText(card.job!.level!);
      if (card.job!.limitation) await expect(content).toContainText(card.job!.limitation);
    }
  });

  test("every card has the same guess cover and reveals an unobstructed occupation", async ({ page, requests }) => {
    // Budget the whole-library sweep by card count; individual visibility waits remain unchanged.
    test.setTimeout(cards.length * 2_000);
    void requests;
    const coverRatios: number[] = [];
    for (const card of cards) {
      await page.goto(`/discover?role=${card.number}&step=0`);
      const picture = page.locator('[data-visible="true"]');
      const cover = picture.getByText("What job is this?", { exact: true });
      const coverBox = (await cover.boundingBox())!;
      const pictureBox = (await picture.boundingBox())!;
      coverRatios.push(coverBox.height / pictureBox.height);
      await page.getByRole("button", { name: "Reveal the job", exact: true }).click();
      await expect(page.getByRole("heading", { name: card.title, exact: true, level: 1 })).toBeVisible();
      await expect(page.getByText(`Work area: ${card.role.title}`, { exact: true })).toBeVisible();
      await expect(page.getByText("What job is this?", { exact: true })).toHaveCount(0);
      await expect(page.getByText("SAVED", { exact: true })).toHaveCount(0);
    }
    for (const ratio of coverRatios) expect(ratio).toBeCloseTo(.27, 2);
  });

});

test("phone flow works by tap with readable type and no sideways scroll", async ({ page, requests }, info) => {
  test.skip(info.project.name !== "phone");
  void requests;
  const noOverflow = async () => expect(await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)).toBeLessThanOrEqual(0);
  await page.goto("/discover");
  await page.getByRole("banner").getByRole("button", { name: "Menu", exact: true }).tap();
  await expect(page.getByRole("navigation", { name: "Main (mobile)" }).getByRole("link", { name: "Discover" })).toHaveAttribute("aria-current", "page");
  await page.getByRole("banner").getByRole("button", { name: "Menu", exact: true }).tap();
  await noOverflow();
  await page.getByRole("button", { name: "Start Space" }).tap();
  await noOverflow();
  await page.getByRole("button", { name: "STOP", exact: true }).tap();
  await noOverflow();
  for (const name of ["Reveal the job", "Show the work", "Why it matters", "Team & subjects", "Ways in"]) {
    await page.getByRole("navigation", { name: "Round controls" }).getByRole("button", { name, exact: true }).tap();
    await noOverflow();
  }
  await expect(page.getByRole("heading", { name: "Ways in", exact: true })).toBeVisible();
  const sizes = await page.getByTestId("step-content").locator("p").evaluateAll((ps) => ps.map((p) => parseFloat(getComputedStyle(p).fontSize)));
  expect(Math.min(...sizes)).toBeGreaterThanOrEqual(16);
});

for (const width of [390, 768, 1024]) {
  test(`step navigation lands on readable content at ${width}px`, async ({ page, requests }, info) => {
    test.skip(info.project.name === "phone");
    void requests;
    await page.setViewportSize({ width, height: 1024 });
    await page.goto("/discover?role=09&step=6");
    await page.getByRole("button", { name: "Back", exact: true }).click();
    await expect(page.locator("#discover-title")).toBeFocused();
    const headerBottom = await page.getByRole("banner").evaluate((el) => el.getBoundingClientRect().bottom);
    const heading = (await page.locator("#discover-title").boundingBox())!;
    expect(heading.y).toBeGreaterThanOrEqual(headerBottom);
    expect(heading.y).toBeLessThan(headerBottom + 180);
    const geometry = await page.getByTestId("step-content").evaluate((el) => {
      const style = getComputedStyle(el);
      return { fontSize: parseFloat(style.fontSize), scale: el.getBoundingClientRect().width / (el as HTMLElement).offsetWidth, overflow: document.documentElement.scrollWidth - innerWidth };
    });
    expect(geometry.fontSize * geometry.scale).toBeGreaterThanOrEqual(16);
    expect(geometry.overflow).toBe(0);
    for (const button of await page.getByRole("navigation", { name: "Reveal steps" }).getByRole("button").all()) {
      expect((await button.boundingBox())!.height).toBeGreaterThanOrEqual(44);
    }
  });
}

for (const width of [1280, 768, 390]) {
  test(`all ${cards.length * 6} content states remain readable and unclipped at ${width}px`, async ({ page, requests }, info) => {
    test.skip(info.project.name === "phone");
    test.setTimeout(cards.length * 12_000);
    void requests;
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.setViewportSize({ width, height: 900 });
    for (const card of cards) {
      for (let step = 1; step <= 6; step++) {
        await page.goto(`/discover?role=${card.number}&step=${step}`);
        await expect(page.locator("#discover-title")).toHaveText(card.title);
        const content = page.getByTestId("step-content");
        await expect(content.getByRole("heading", { name: steps[step], exact: true })).toBeVisible();
        const measurements = await content.evaluate((el) => ({
          pageOverflow: document.documentElement.scrollWidth - innerWidth,
          contentOverflow: el.scrollWidth - el.clientWidth,
          contentClipping: el.scrollHeight - el.clientHeight,
          font: parseFloat(getComputedStyle(el).fontSize),
        }));
        expect(measurements.pageOverflow).toBeLessThanOrEqual(0);
        expect(measurements.contentOverflow).toBeLessThanOrEqual(1);
        expect(measurements.contentClipping).toBeLessThanOrEqual(1);
        expect(measurements.font).toBeGreaterThanOrEqual(16);
      }
    }
    expect(errors).toEqual([]);
  });
}

test("guessing offers a direct restart in cycling and single-draw modes", async ({ page, requests }) => {
  void requests;
  await page.goto("/discover?subject=chemistry&role=07&step=0");
  await expect(page.getByRole("button", { name: "Back", exact: true })).toHaveCount(0);
  await page.getByRole("button", { name: "Restart", exact: true }).click();
  await expect(page.getByRole("region", { name: "Discover", exact: true })).toHaveAttribute("data-phase", "flashing");
  await page.getByRole("button", { name: "STOP", exact: true }).click();
  await expect(page.locator('[data-visible="true"]')).not.toHaveAttribute("data-role", "process-engineering");
  await page.goto("/discover?subject=chemistry&role=07&step=0");
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(page.getByLabel("Round style")).toHaveCount(0);
  await page.getByRole("button", { name: "Restart", exact: true }).click();
  await expect(page.getByRole("region", { name: "Discover", exact: true })).toHaveAttribute("data-phase", "reveal");
  await expect(page.getByRole("region", { name: "Discover", exact: true })).toHaveAttribute("data-step", "0");
  await expect(page.locator('[data-visible="true"]')).not.toHaveAttribute("data-role", "process-engineering");
  await expect(page.getByRole("button", { name: "Reveal the job", exact: true })).toBeVisible();
});

test("desktop guessing balances picture and clues without an empty column", async ({ page, requests }, info) => {
  test.skip(info.project.name === "phone");
  void requests;
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/discover?role=09&step=0");
  const picture = (await page.locator('[data-visible="true"]').boundingBox())!;
  const clues = (await page.getByRole("heading", { name: "Look for clues" }).boundingBox())!;
  expect(picture.x + picture.width).toBeLessThan(clues.x);
  expect(clues.x - (picture.x + picture.width)).toBeLessThan(64);
  const leftMargin = picture.x;
  const rightMargin = 1440 - (clues.x + clues.width);
  expect(Math.abs(leftMargin - rightMargin)).toBeLessThan(20);
  const restart = (await page.getByRole("button", { name: "Restart", exact: true }).boundingBox())!;
  const reveal = (await page.getByRole("button", { name: "Reveal the job", exact: true }).boundingBox())!;
  expect(restart.y).toBe(reveal.y);
  expect(reveal.x - (restart.x + restart.width)).toBeCloseTo(12, 0);
});
