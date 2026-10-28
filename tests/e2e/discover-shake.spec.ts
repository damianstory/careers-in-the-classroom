import { expect, test } from "./fixtures";
import { filterCards } from "../../src/lib/discover";
import { buildDiscoverCards } from "../../src/lib/discover-cards";

const cards = buildDiscoverCards(new Date().toISOString().slice(0, 10));

// Exercise the real Web Serial read loop and classroom state with a fake USB device.
test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    let source: ReadableStreamDefaultController<Uint8Array>;
    const encoder = new TextEncoder();
    const state = window as unknown as { portRequests: number; openFails?: boolean };
    state.portRequests = 0;
    Object.defineProperty(navigator, "serial", { configurable: true, value: {
      requestPort: async () => {
        state.portRequests++;
        return {
          readable: new ReadableStream<Uint8Array>({ start(controller) { source = controller; } }),
          open: async () => { if (state.openFails) throw new DOMException("Port busy", "InvalidStateError"); },
          close: async () => {},
        };
      },
    } });
    Object.assign(window, {
      atomSample: (motion: number) => source.enqueue(encoder.encode(`imu=ok accel=0,0,1 motion=${motion}\n`)),
      atomUnplug: () => source.close(),
    });
  });
});

type Page = import("@playwright/test").Page;
async function send(page: Page, motion: number, duration: number) {
  await page.evaluate(({ motion, duration }) => new Promise<void>((resolve) => {
    const sample = () => (window as unknown as { atomSample(motion: number): void }).atomSample(motion);
    sample();
    const timer = setInterval(sample, 500);
    setTimeout(() => { clearInterval(timer); resolve(); }, duration);
  }), { motion, duration });
}
async function shakeToGuess(page: Page) {
  await send(page, 3, 8500);
  await expect(page.getByRole("heading", { name: "What could this person do?", exact: true })).toBeVisible();
}
const role = (page: Page) => new URL(page.url()).searchParams.get("role");
const cardFor = (number: string | null) => cards.find((c) => c.number === number)!;
const pass = (page: Page) => page.getByRole("region", { name: "Discover", exact: true });

test("deliberate shaking sharpens a real unseen card, conceals the job, then follows the reveal and hand-off", async ({ page, requests }) => {
  void requests;
  test.setTimeout(60_000);
  await page.goto("/discover?play=shake&subject=physics&found=01");
  await page.getByRole("button", { name: "Connect shaker", exact: true }).click();
  await page.getByRole("button", { name: "Start shake round Space" }).click();
  const meter = page.getByRole("progressbar", { name: "Shake progress" });
  const mystery = page.getByRole("img", { name: /Mystery picture/ });
  await expect(mystery).toBeVisible();
  // Screen readers get the selected card's title-safe clue while the picture sharpens.
  const label = (await mystery.getAttribute("aria-label"))!;
  await send(page, .3, 1600);
  await expect(meter).toHaveAttribute("aria-valuenow", "0");
  await send(page, 1, 2100);
  const earned = Number(await meter.getAttribute("aria-valuenow"));
  expect(earned).toBeGreaterThan(0);
  await send(page, 0, 1100);
  await expect(meter).toHaveAttribute("aria-valuenow", String(earned));
  await shakeToGuess(page);
  await expect(page.getByText("Landed!")).toHaveCount(0);
  const url = new URL(page.url());
  expect(url.searchParams.get("step")).toBe("0");
  expect(url.searchParams.get("play")).toBe("shake");
  expect(role(page)).not.toBe("01");
  const card = cardFor(role(page));
  expect(card.subjects).toContain("physics");
  expect(label).toContain(card.image.clue);
  expect(label).not.toContain(card.title);
  await expect(page.getByRole("heading", { name: card.title, exact: true })).toHaveCount(0);
  const selected = role(page);
  await send(page, 3, 1100);
  expect(role(page)).toBe(selected);
  await page.getByRole("button", { name: "Reveal the job", exact: true }).click();
  await expect(page.getByRole("heading", { name: card.title, exact: true })).toBeVisible();
  await page.getByRole("button", { name: "Pass the shaker", exact: true }).click();
  await expect(page.getByRole("heading", { name: "Pass the shaker.", exact: true })).toBeVisible();
  await expect(page.getByText(` done · ${card.title}`)).toBeVisible();
  await expect(page.getByRole("img", { name: card.title, exact: true })).toBeVisible();
  await page.getByRole("button", { name: "Shake again Space" }).click();
  await expect(meter).toHaveAttribute("aria-valuenow", "0");
  await page.getByRole("button", { name: "Cancel round", exact: true }).click();
  await expect(page.getByRole("button", { name: "Start shake round Space" })).toBeVisible();
});

test("disconnect holds progress and reconnecting requires new movement", async ({ page, requests }) => {
  void requests;
  await page.goto("/discover?play=shake");
  await page.getByRole("button", { name: "Connect shaker", exact: true }).click();
  await page.getByRole("button", { name: "Start shake round Space" }).click();
  await send(page, 1, 2100);
  const meter = page.getByRole("progressbar", { name: "Shake progress" });
  const earned = await meter.getAttribute("aria-valuenow");
  await page.getByRole("button", { name: "Disconnect shaker", exact: true }).click();
  await expect(meter).toHaveAttribute("aria-valuenow", earned!);
  await page.getByRole("button", { name: "Connect shaker", exact: true }).click();
  await send(page, .3, 1100);
  await expect(meter).toHaveAttribute("aria-valuenow", earned!);
});

test("reduced motion keeps the meter and selection without picture movement", async ({ page, requests }) => {
  void requests;
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/discover?play=shake");
  await page.getByRole("button", { name: "Connect shaker", exact: true }).click();
  await page.getByRole("button", { name: "Start shake round Space" }).click();
  await send(page, 3, 1100);
  await expect(page.locator('[data-moving="false"]')).toBeVisible();
  await expect(page.getByRole("progressbar", { name: "Shake progress" })).not.toHaveAttribute("aria-valuenow", "0");
});

test("shake meter and picture fit a classroom projector", async ({ page, requests }) => {
  void requests;
  await page.setViewportSize({ width: 1280, height: 720 });
  await page.goto("/discover?play=shake");
  await page.getByRole("button", { name: "Connect shaker", exact: true }).click();
  await page.getByRole("button", { name: "Start shake round Space" }).click();
  await send(page, 1, 1100);
  for (const target of [page.getByRole("progressbar", { name: "Shake progress" }), page.getByRole("img", { name: /Mystery picture/ }), page.getByRole("button", { name: "Cancel round", exact: true })]) {
    const bounds = (await target.boundingBox())!;
    expect(bounds.y).toBeGreaterThan(64);
    expect(bounds.y + bounds.height).toBeLessThan(720);
  }
  await page.screenshot({ path: "output/atom-matrix/discover-shake-projector.png" });
});

test("a skipped guess never reveals its answer on a later hand-off", async ({ page, requests }) => {
  void requests;
  test.setTimeout(45_000);
  const skipped = filterCards(cards, "physics")[0];
  await page.goto(`/discover?play=shake&subject=physics&role=${skipped.number}&step=0`);
  await page.getByRole("navigation", { name: "Round controls" }).getByRole("button", { name: "Restart", exact: true }).click();
  // Without a connection Restart returns to Start, where the shaker can be connected.
  await expect(pass(page)).toHaveAttribute("data-phase", "start");
  await page.getByRole("button", { name: "Connect shaker", exact: true }).click();
  await page.getByRole("button", { name: "Start shake round Space" }).click();
  await shakeToGuess(page);
  const drawn = cardFor(role(page));
  expect(drawn.number).not.toBe(skipped.number);
  await page.getByRole("button", { name: "Reveal the job", exact: true }).click();
  await page.keyboard.press("r");
  await expect(page.getByRole("heading", { name: "Pass the shaker.", exact: true })).toBeVisible();
  await expect(page.getByRole("img", { name: drawn.title, exact: true })).toBeVisible();
  const text = await page.locator("main").innerText();
  const alts = await page.locator("main img").evaluateAll((images) => images.map((image) => image.getAttribute("alt")).join(" "));
  for (const value of [text, alts]) {
    expect(value).not.toContain(skipped.title);
    expect(value).not.toContain(skipped.role.title);
  }
});

test("R from Guess hands off without the answer; a restored reveal keeps it", async ({ page, requests }) => {
  void requests;
  const card = cardFor("05");
  await page.goto("/discover?play=shake&role=05&step=0");
  // Keyboard shortcuts attach after hydration; wait for the screen's focus effect.
  await expect(page.getByRole("button", { name: "Reveal the job", exact: true })).toBeFocused();
  await page.keyboard.press("r");
  await expect(page.getByRole("heading", { name: "Pass the shaker.", exact: true })).toBeVisible();
  await expect(page.getByText("Round 1 done", { exact: true })).toBeVisible();
  expect(await page.locator("main").innerText()).not.toContain(card.title);
  await expect(page.locator("main img")).toHaveCount(0);
  await page.getByRole("button", { name: "← Back to this job", exact: true }).click();
  await expect(page.getByRole("heading", { name: "What could this person do?", exact: true })).toBeVisible();
  await page.goto("/discover?play=shake&role=05&step=1");
  await expect(page.getByRole("heading", { name: card.title, exact: true })).toBeFocused();
  await page.keyboard.press("r");
  await expect(page.getByText(`Round 1 done · ${card.title}`, { exact: true })).toBeVisible();
  await page.getByRole("button", { name: "Change jobs", exact: true }).click();
  await expect(pass(page)).toHaveAttribute("data-phase", "start");
});

test("an exhausted subject that repeats a revealed card keeps the repeat concealed", async ({ page, requests }) => {
  void requests;
  test.setTimeout(45_000);
  const technology = filterCards(cards, "technology");
  const first = technology[0];
  await page.goto(`/discover?play=shake&subject=technology&found=${technology.map((c) => c.number).join(",")}&role=${first.number}&step=1`);
  await expect(page.getByRole("heading", { name: first.title, exact: true })).toBeFocused();
  await page.keyboard.press("r");
  await expect(page.getByText(`Round ${technology.length} done · ${first.title}`, { exact: true })).toBeVisible();
  await page.getByRole("button", { name: "Connect shaker", exact: true }).click();
  const shakeAgain = page.getByRole("button", { name: "Shake again Space" });
  await expect(shakeAgain).toBeEnabled();
  // Predict only the synchronous shuffle, preserving randomness used by the framework.
  await shakeAgain.evaluate((button: HTMLButtonElement) => {
    const random = Math.random;
    Math.random = () => .999;
    try { button.click(); } finally { Math.random = random; }
  });
  await shakeToGuess(page);
  expect(role(page)).toBe(first.number);
  await page.keyboard.press("r");
  await expect(page.getByRole("heading", { name: "Pass the shaker.", exact: true })).toBeVisible();
  expect(await page.locator("main").innerText()).not.toContain(first.title);
  await expect(page.getByRole("img", { name: first.title, exact: true })).toHaveCount(0);
});

test("a disconnected guess offers reconnection, including after an unplug", async ({ page, requests }) => {
  void requests;
  await page.goto("/discover?play=shake&role=05&step=0");
  const controls = page.getByRole("navigation", { name: "Round controls" });
  await expect(page.getByRole("status").filter({ hasText: "Shaker not connected" })).toBeVisible();
  await page.getByRole("button", { name: "Connect shaker", exact: true }).click();
  await expect(page.getByRole("status").filter({ hasText: "Shaker connected" })).toBeVisible();
  await page.evaluate(() => (window as unknown as { atomUnplug(): void }).atomUnplug());
  await expect(page.getByRole("status").filter({ hasText: "Shaker disconnected" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Connect shaker", exact: true })).toBeVisible();
  await controls.getByRole("button", { name: "Restart", exact: true }).click();
  await expect(pass(page)).toHaveAttribute("data-phase", "start");
  await expect(page.getByRole("button", { name: "Connect shaker", exact: true })).toBeVisible();
});

test("keyboard alone connects, plays and hands off", async ({ page, requests }) => {
  void requests;
  test.setTimeout(60_000);
  await page.goto("/discover?play=shake");
  const connect = page.getByRole("button", { name: "Connect shaker", exact: true });
  await expect(connect).toBeFocused();
  // Space away from any button runs the screen's main action: connect.
  await page.evaluate(() => (document.activeElement as HTMLElement).blur());
  await page.keyboard.press("Space");
  await expect(page.getByRole("button", { name: "Start shake round Space" })).toBeVisible();
  expect(await page.evaluate(() => (window as unknown as { portRequests: number }).portRequests)).toBe(1);
  await page.getByRole("button", { name: "Start shake round Space" }).focus();
  await page.keyboard.press("Space");
  await expect(pass(page)).toHaveAttribute("data-phase", "shaking");
  await shakeToGuess(page);
  await page.keyboard.press("Space");
  await expect(pass(page)).toHaveAttribute("data-step", "1");
  await page.keyboard.press("r");
  await expect(page.getByRole("heading", { name: "Pass the shaker.", exact: true })).toBeFocused();
  await page.keyboard.press("Space");
  await expect(pass(page)).toHaveAttribute("data-phase", "shaking");
});

test("connection failures keep their recovery guidance visible", async ({ page, requests }) => {
  void requests;
  await page.addInitScript(() => { (window as unknown as { openFails: boolean }).openFails = true; });
  await page.goto("/discover?play=shake");
  await page.getByRole("button", { name: "Connect shaker", exact: true }).click();
  const guidance = page.getByRole("status").filter({ hasText: "Disconnect it from other tabs and Arduino Serial Monitor" });
  await expect(guidance).toBeVisible();
  await page.waitForTimeout(500);
  await expect(guidance).toBeVisible();
  await expect(page.getByRole("button", { name: "Connect shaker", exact: true })).toBeEnabled();
});

test("a picture that fails to decode while shaking falls back to its written clues", async ({ page, requests }) => {
  void requests;
  // Preloading succeeds; the second decode of the same picture (the shaking canvas) fails.
  await page.addInitScript(() => {
    const decode = HTMLImageElement.prototype.decode;
    const seen = new Map<string, number>();
    HTMLImageElement.prototype.decode = function () {
      const count = (seen.get(this.src) ?? 0) + 1;
      seen.set(this.src, count);
      return count > 1 ? Promise.reject(new DOMException("Decode failed", "EncodingError")) : decode.call(this);
    };
  });
  await page.goto("/discover?play=shake&subject=technology");
  await page.getByRole("button", { name: "Connect shaker", exact: true }).click();
  await page.getByRole("button", { name: "Start shake round Space" }).click();
  const round = page.getByRole("region", { name: "Shake to discover" });
  await expect(round.getByText("Picture unavailable. Use these clues:", { exact: true })).toBeVisible();
  const clues = filterCards(cards, "technology").map((c) => c.image.clue);
  const shown = await round.locator("p").filter({ hasText: /\S/ }).allInnerTexts();
  expect(shown.some((text) => clues.includes(text))).toBe(true);
  await expect(page.getByRole("img", { name: /Mystery picture/ })).toHaveCount(0);
});
