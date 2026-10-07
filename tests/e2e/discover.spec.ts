import { expect, test } from "./fixtures";
import { buildDiscoverCards, steps } from "../../src/lib/discover";
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
    await expect(page.getByText("1 of 9 found", { exact: true })).toBeVisible();
    await concealed();
    await page.keyboard.press("Space");
    await expect(page.getByRole("heading", { name: card.role.title, exact: true })).toBeVisible();
    expect(new URL(page.url()).searchParams.get("role")).toBe(card.number);
    expect(new URL(page.url()).searchParams.get("step")).toBe("1");
    expect(new URL(page.url()).searchParams.get("found")?.split(",")).toContain(card.number);
    await page.keyboard.press("ArrowLeft");
    await expect(page.getByRole("region", { name: "Discover", exact: true })).toHaveAttribute("data-step", "0");
    expect(page.url()).not.toContain(role);
    expect(new URL(page.url()).searchParams.get("step")).toBe("0");
    await expect(page.getByText("1 of 9 found", { exact: true })).toBeVisible();
    await page.keyboard.press("Space");
    for (let step = 2; step <= 6; step++) {
      await page.keyboard.press("Space");
      await expect(page.getByRole("heading", { name: steps[step], exact: true })).toBeVisible();
    }
    await page.keyboard.press("ArrowLeft");
    await expect(page.getByRole("heading", { name: "Route", exact: true })).toBeVisible();
    await page.getByRole("navigation", { name: "Reveal steps" }).getByRole("button", { name: "Team", exact: true }).click();
    await expect(page.getByRole("heading", { name: "Team", exact: true })).toBeVisible();
    const before = page.url();
    const example = page.getByRole("link", { name: `Explore the ${card.organization.name} example →` });
    await expect(example).toHaveAttribute("href", `/examples/${card.example.slug}?role=${role}#roles`);
    await example.click();
    await page.goBack();
    await expect(page).toHaveURL(before);
    await expect(page.getByRole("heading", { name: card.role.title, exact: true })).toBeVisible();
    await expect(page.locator('[data-phase="reveal"]')).toHaveAttribute("data-step", "4");
    await page.getByRole("navigation", { name: "Main", exact: true }).getByRole("link", { name: "Discover", exact: true }).click();
    await expect(page).toHaveURL(/\/discover$/);
    await expect(page.getByRole("region", { name: "Discover", exact: true })).toHaveAttribute("data-phase", "start");
    await expect(page.getByRole("heading", { name: "Snap a job.", exact: true })).toBeVisible();
  });

  test("one Space press stops without activating the newly focused button", async ({ page, requests }) => {
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
    expect(released.label).toBe("Reveal the job");
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
    expect([first, second].sort()).toEqual(["process-engineering", "process-operations"]);
    await page.keyboard.press("r");
    await expect(page.getByText("All jobs found. Starting a fresh set.")).toBeVisible();
    await expect(page.getByText("0 of 2 found")).toBeVisible();
  });

  test("deep links retain route, saved date, vacancy label and empty state", async ({ page, requests }) => {
    void requests;
    await page.goto("/discover?role=05&step=0");
    await expect(page.getByRole("region", { name: "Discover", exact: true })).toHaveAttribute("data-step", "0");
    await expect(page.locator('[data-visible="true"]')).toHaveAttribute("data-role", "animal-care");
    await page.goto("/discover?role=05&step=5");
    await expect(page.getByRole("heading", { name: "Route", exact: true })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Animal care and welfare", exact: true })).toBeVisible();
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
      await expect(page.getByRole("button", { name: "Slower: off" })).toBeVisible();
    }
    await page.getByRole("navigation", { name: "Main", exact: true }).getByRole("link", { name: "Examples", exact: true }).focus();
    await page.keyboard.press("Space");
    await expect(page.locator('[data-phase="start"]')).toBeVisible();
    await page.getByLabel("JOBS", { exact: true }).focus();
    await page.keyboard.press("s");
    await expect(page.getByRole("button", { name: "Slower: off" })).toBeVisible();
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
        ? page.getByRole("navigation", { name: "Main", exact: true }).getByRole("link", { name: "Examples", exact: true })
        : page.getByLabel("JOBS", { exact: true });
      if (target === "body") await page.evaluate(() => (document.activeElement as HTMLElement)?.blur());
      else await focused.focus();
      await page.evaluate(() => window.dispatchEvent(new Event("discover-test:decode")));
      const start = page.getByRole("button", { name: "Start Space" });
      await expect(start).toBeEnabled();
      await expect(target === "body" ? start : focused).toBeFocused();
    }
  });

  test("reduced motion defaults to slower and failed pictures remain playable", async ({ page, requests }) => {
    void requests;
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.route("**/images/discover/*.jpg", (route) => route.abort());
    await page.goto("/discover");
    await expect(page.getByRole("button", { name: "Slower: on" })).toBeVisible();
    await page.getByRole("button", { name: "Start Space" }).click();
    await page.getByRole("button", { name: "STOP", exact: true }).click();
    await page.getByRole("button", { name: "Reveal the job", exact: true }).click();
    await expect(page.locator("#discover-title")).toBeVisible();
    await expect(page.locator('[data-visible="true"]')).toContainText("What job is this?");
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
  for (const name of ["Reveal the job", "Show the work", "Why it matters", "The team", "A route"]) {
    await page.getByRole("button", { name, exact: true }).tap();
    await noOverflow();
  }
  await expect(page.getByRole("heading", { name: "Route", exact: true })).toBeVisible();
  const sizes = await page.getByTestId("step-content").locator("p").evaluateAll((ps) => ps.map((p) => parseFloat(getComputedStyle(p).fontSize)));
  expect(Math.min(...sizes)).toBeGreaterThanOrEqual(16);
});
