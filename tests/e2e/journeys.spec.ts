import { examples, news, registry } from "../../src/content";
import { PROBE, expect, expectNoRequests, test } from "./fixtures";

const GHGSAT_Q = "How can you find an invisible gas from space?";
// The library shows its first 12 cards; the rest appear after "Show N more" (LibraryParts ShowMore).
const FIRST_CARDS = Math.min(examples.length, 12);

for (const activation of ["click", "keyboard"] as const) {
  test(`Show more preserves the reading position on ${activation}`, async ({ page, requests }) => {
    void requests;
    for (const path of ["/connections", "/connections?topic=combustion#library"]) {
      await page.goto(path, { waitUntil: "networkidle" });
      const cards = page.locator('main a[href^="/examples/"]');
      await expect(cards).toHaveCount(FIRST_CARDS);
      const originalLinks = await cards.evaluateAll((links) => links.map((link) => link.getAttribute("href")));
      const more = page.getByRole("button", { name: `Show ${examples.length - FIRST_CARDS} more`, exact: true });
      await more.scrollIntoViewIfNeeded();
      if (activation === "keyboard") await more.focus();
      const before = await page.evaluate(() => ({ y: window.scrollY, url: location.href }));
      expect(before.y).toBeGreaterThan(1000);

      if (activation === "keyboard") await more.press("Enter");
      else await more.click();

      await expect(cards).toHaveCount(examples.length);
      await expect(more).toHaveCount(0);
      expect((await cards.evaluateAll((links) => links.map((link) => link.getAttribute("href")))).slice(0, 12)).toEqual(originalLinks);
      // Allow layout and scroll anchoring to settle before checking the reading position.
      await page.waitForTimeout(300);
      expect(await page.evaluate(() => location.href)).toBe(before.url);
      expect(Math.abs(await page.evaluate(() => window.scrollY) - before.y)).toBeLessThan(2);
    }
  });
}

test("course and unit filter the library in place → example → back", async ({ page, requests }) => {
  void requests;
  await page.goto("/connections", { waitUntil: "networkidle" });
  await page.locator("#filter-course").selectOption("physics-30");
  await expect(page).toHaveURL(/\/connections\?course=physics-30$/);
  await page.locator("#filter-unit").selectOption("p30c");
  await expect(page).toHaveURL(/\/connections\?course=physics-30&unit=p30c$/);
  await expect(page.getByRole("heading", { level: 2, name: "Fits Electromagnetic radiation" })).toBeVisible();
  // Four examples prepared for the unit, plus one more Physics 30 example under "Also fits".
  await expect(page.getByRole("status").first()).toHaveText("5 matching");

  await page.getByRole("link", { name: GHGSAT_Q }).click();
  await expect(page.getByRole("heading", { level: 1, name: GHGSAT_Q })).toBeVisible();
  await expect(page.getByText("Why this matches Physics 30 · Electromagnetic radiation")).toBeVisible();

  await page.getByRole("link", { name: "Back to results" }).click();
  await expect(page).toHaveURL(/\/connections\?course=physics-30&unit=p30c#library$/);
  await expect(page.locator("#filter-unit")).toHaveValue("p30c");
});

test("Back and Forward restore the filter", async ({ page, requests }) => {
  void requests;
  await page.goto("/connections?course=physics-30&unit=p30c");
  await page.getByRole("link", { name: "Clear" }).click();
  await expect(page).toHaveURL(/\/connections(#library)?$/);
  await expect(page.locator("#filter-course")).toHaveValue("");
  await page.goBack();
  await expect(page.locator("#filter-course")).toHaveValue("physics-30");
  await expect(page.locator("#filter-unit")).toHaveValue("p30c");
});

test("Chemistry 20 units keep their own label through the library, example and back", async ({ page, requests }) => {
  void requests;
  for (const [unit, label] of [
    ["c20c", "Matter as solutions, acids and bases"],
    ["c20d", "Quantitative relationships in chemical changes"],
  ]) {
    await page.goto(`/connections?course=chemistry-20&unit=${unit}`);
    await expect(page.getByRole("heading", { level: 2, name: `Fits ${label}` })).toBeVisible();
    await page.getByRole("link", { name: "How do you separate something valuable from a complex liquid?" }).click();
    await expect(page.getByText(`Why this matches Chemistry 20 · ${label}`)).toBeVisible();
    await page.getByRole("link", { name: "Back to results" }).click();
    await expect(page).toHaveURL(new RegExp(`unit=${unit}#library$`));
  }
});

test("a typed topic keeps its label through the round trip", async ({ page, requests }) => {
  void requests;
  await page.goto("/connections", { waitUntil: "networkidle" });
  await page.locator("#filter-course").selectOption("biology-20");
  await expect(page).toHaveURL(/course=biology-20/);
  await page.locator("#filter-topic").fill("owl recovery");
  await page.locator("#filter-topic").press("Enter");
  await expect(page).toHaveURL(/\/connections\?course=biology-20&topic=owl\+recovery$/);
  await expect(page.getByRole("heading", { level: 2, name: "Fits “owl recovery” in Biology 20" })).toBeVisible();
  await page.getByRole("link", { name: "Can helping individual owls help a population recover?" }).click();
  await expect(page.getByText("Why this matches Biology 20 · owl recovery")).toBeVisible();
  await page.getByRole("link", { name: "Back to results" }).click();
  await expect(page).toHaveURL(/\/connections\?course=biology-20&topic=owl\+recovery#library$/);
  await expect(page.locator("#filter-topic")).toHaveValue("owl recovery");
});

test("a typed Biology 30 topic shows the Calgary example and keeps the outside research labelled", async ({ page, requests }) => {
  void requests;
  // Northern RNA now gives this topic a Calgary example; the recent development stays marked as outside research.
  await page.goto("/connections?course=biology-30&topic=DNA+replication");
  await expect(page.getByRole("heading", { level: 2, name: "Fits “DNA replication” in Biology 30" })).toBeVisible();
  await expect(page.getByText("No Calgary example is prepared for this topic yet.")).toHaveCount(0);
  await expect(page.getByRole("link", { name: "How do you make biological material consistently from batch to batch?" }).first()).toBeVisible();
  await expect(page.getByText("This recent development is research from outside Calgary.", { exact: false })).toBeVisible();
  await expect(page.getByText("Free with signup")).toBeVisible();
});

test("a course alone shows its examples and how many units are ready", async ({ page, requests }) => {
  void requests;
  await page.goto("/connections?course=physics-30");
  await expect(page.getByRole("heading", { level: 2, name: "In Physics 30" })).toBeVisible();
  await expect(page.getByText("Physics 30: 2 of 4 units ready")).toBeVisible();
  await expect(page.locator("#filter-unit optgroup")).toHaveCount(2);
  await expect(page.locator('#filter-unit optgroup[label="Ready now"] option')).toHaveText(["Forces and fields · 1 example", "Electromagnetic radiation · 4 examples"]);
});

test("a unit without an example gets the honest banner and the closest fits", async ({ page, requests }) => {
  await page.goto("/connections?course=science-20&unit=s20a");
  await expect(page.getByText("No prepared example for “Chemical changes” in Science 20 yet.")).toBeVisible();
  const closest = page.getByRole("region", { name: "Closest examples" });
  await expect(closest.getByRole("link", { name: "How do you separate something valuable from a complex liquid?" })).toBeVisible();
  const chemistry = examples.filter((e) => e.discipline === "Chemistry").length;
  await expect(closest.getByText(/The closest chemistry example/)).toHaveCount(Math.min(chemistry, 12));
  await expect(page.getByText("for interview notes")).toHaveCount(0);
  await expectNoRequests(requests, async () => {
    await page.getByRole("button", { name: "Note this topic for follow-up" }).click();
  });
  await expect(page.getByText("Topic noted. Nothing was sent.")).toBeVisible();
});

test("a topic with no match anywhere still leaves examples to browse", async ({ page, requests }) => {
  void requests;
  await page.goto("/connections?topic=combustion");
  await expect(page.getByText("No prepared example for “combustion” yet.")).toBeVisible();
  await expect(page.getByRole("heading", { level: 2, name: "Other examples" })).toBeVisible();
  await expect(page.getByRole("heading", { level: 3 })).toHaveCount(FIRST_CARDS);
  if (examples.length > 12) await expect(page.getByRole("button", { name: `Show ${examples.length - 12} more` })).toBeVisible();
});

test("examples are open; only recent developments wait for the demo signup", async ({ page, requests }) => {
  await page.goto("/connections?course=physics-30&unit=p30c");
  await expect(page.getByText("free preview")).toHaveCount(0);
  await expect(page.getByText("Free with signup")).toBeVisible();
  await page.getByRole("button", { name: "Sign up free to open" }).click();
  const dialog = page.getByRole("dialog", { name: "Save your search. Get Calgary examples monthly." });
  await expect(dialog).toBeVisible();
  await expect(dialog.getByText("Physics 30 · Electromagnetic radiation")).toBeVisible();
  await dialog.getByLabel("Email").fill(`${PROBE}@example.com`);
  await dialog.getByLabel("School", { exact: true }).fill(PROBE);
  await expectNoRequests(requests, async () => {
    await dialog.getByRole("button", { name: "Create free account" }).click();
  });
  await expect(page.getByRole("dialog", { name: "You’re signed up." })).toBeVisible();
  await page.getByRole("button", { name: "Back to what I was reading" }).click();
  await expect(page.getByText("How would a lower detection threshold change which emissions events become visible?")).toBeVisible();
  await expect(page.getByText("Free with signup")).toHaveCount(0);
});

test("speaker requests are prefilled and send nothing", async ({ page, requests }, info) => {
  await page.goto("/connections?course=physics-30&unit=p30c");
  const header = page.getByRole("banner");
  if (info.project.name === "phone") await header.getByRole("button", { name: "Menu" }).click();
  await header.getByRole("button", { name: "Request a speaker" }).click();
  const dialog = page.getByRole("dialog", { name: "Request a practitioner conversation" });
  await expect(dialog.getByLabel("Topic")).toHaveValue("Physics 30 · Electromagnetic radiation");
  await expect(dialog.getByText("Related example:")).toContainText("GHGSat");
  await dialog.getByLabel("Later this month").check();
  await dialog.getByLabel("Video call").check();
  await dialog.getByLabel(/What should students get/).fill(PROBE);
  await expectNoRequests(requests, async () => {
    await dialog.getByRole("button", { name: "Send request" }).click();
  });
  await expect(page.getByText("Physics 30 · Electromagnetic radiation · Later this month · Video call")).toBeVisible();
  await expect(page.getByText("Nothing was sent. This is not a booking.")).toBeVisible();

  await page.goto("/examples/e3-lithium?course=chemistry-20&unit=c20c#about");
  await page.getByRole("button", { name: "Request a conversation" }).first().click();
  const d2 = page.getByRole("dialog", { name: "Request a practitioner conversation" });
  await expect(d2.getByLabel("Topic")).toHaveValue("Chemistry 20 · Matter as solutions, acids and bases");
  await expect(d2.getByText("Related example:")).toContainText("E3 Lithium");
});

test("dialogs work with the keyboard and return focus", async ({ page, requests }) => {
  void requests;
  await page.goto("/connections?course=physics-30&unit=p30c", { waitUntil: "networkidle" });
  const opener = page.getByRole("button", { name: "Sign up free to open" });
  await opener.focus();
  await page.keyboard.press("Enter");
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  expect(await page.evaluate(() => !!document.activeElement?.closest("dialog"))).toBe(true);
  await page.keyboard.press("Escape");
  await expect(dialog).toBeHidden();
  await expect(opener).toBeFocused();
});

test("old library, search, Explore and filtered home links land on the library", async ({ page, requests }) => {
  void requests;
  // The library's earlier address, /examples, keeps its query and hash.
  await page.goto("/examples?course=physics-30&unit=p30c#library");
  await expect(page).toHaveURL(/\/connections\?course=physics-30&unit=p30c#library$/);
  await expect(page.locator("#filter-unit")).toHaveValue("p30c");
  await page.goto("/explore");
  await expect(page).toHaveURL(/\/connections$/);
  await expect(page.getByRole("heading", { level: 2, name: "Real problems Calgary organizations are working on" })).toBeVisible();
  await expect(page.getByRole("heading", { level: 3 })).toHaveCount(FIRST_CARDS);
  await page.goto("/search?course=chemistry-20&unit=c20c");
  await expect(page).toHaveURL(/\/connections\?course=chemistry-20&unit=c20c$/);
  await expect(page.getByRole("heading", { level: 2, name: "Fits Matter as solutions, acids and bases" })).toBeVisible();
  const res = await page.request.get("/?course=physics-30&unit=p30c", { maxRedirects: 0 });
  expect(res.status()).toBe(307);
  expect(new URL(res.headers().location, res.url()).href).toBe(new URL("/connections?course=physics-30&unit=p30c", res.url()).href);
  await page.goto("/?topic=combustion#library");
  await expect(page).toHaveURL(/\/connections\?topic=combustion#library$/);
  // Empty values, as the old unfiltered form submitted them, still mean the library.
  for (const [query, kept] of [["topic=", "topic="], ["course=&unit=&topic=", "course=&unit=&topic="], ["unit", "unit="]]) {
    const empty = await page.request.get(`/?${query}`, { maxRedirects: 0 });
    expect(empty.status(), query).toBe(307);
    expect(new URL(empty.headers().location, empty.url()).href, query).toBe(new URL(`/connections?${kept}`, empty.url()).href);
  }
  expect((await page.request.get("/", { maxRedirects: 0 })).status()).toBe(200);
});

test("the home page explains the project and opens the library three ways", async ({ page, requests }, info) => {
  void requests;
  await page.goto("/", { waitUntil: "networkidle" });
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Show your class who in Calgary");
  await expect(page.getByText(/Prototype/)).toHaveCount(0);
  const start = page.locator("#start");
  await start.getByRole("tab", { name: /A company/ }).click();
  const logos = start.locator('a[href^="/examples/"] img');
  await expect(logos).toHaveCount(examples.length);
  await expect.poll(() => logos.evaluateAll((imgs) => imgs.every((i) => (i as HTMLImageElement).naturalWidth > 0))).toBe(true);
  for (const src of await logos.evaluateAll((imgs) => imgs.map((i) => (i as HTMLImageElement).currentSrc))) {
    expect(src).toMatch(/\/images\/logos\/[a-z0-9-]+\.(svg|png)$/);
  }
  await start.getByRole("tab", { name: /My class/ }).click();
  await start.getByRole("link", { name: /Physics 30/ }).click();
  await expect(page).toHaveURL(/\/connections\?course=physics-30#library$/);
  await expect(page.locator("#filter-course")).toHaveValue("physics-30");
  if (info.project.name !== "phone") {
    await expect(page.getByRole("navigation", { name: "Main", exact: true }).getByRole("link", { name: "Connections" })).toHaveAttribute("aria-current", "page");
  }
});

test.describe("without JavaScript", () => {
  test.use({ javaScriptEnabled: false });
  test("the filter still works as a plain form", async ({ page, requests }) => {
    void requests;
    await page.goto("/connections");
    await page.locator("#filter-course").selectOption("physics-30");
    await page.getByRole("button", { name: "Show examples" }).click();
    await expect(page).toHaveURL(/course=physics-30/);
    await expect(page.getByRole("heading", { level: 2, name: "In Physics 30" })).toBeVisible();
  });
});

test("get involved and the digest sample are honest demos", async ({ page, requests }) => {
  await page.goto("/get-involved");
  await expectNoRequests(requests, async () => {
    await page.getByRole("button", { name: "Start a conversation" }).click();
  });
  await expect(page.getByText("Our team reviews every request. Nothing was sent from this page.")).toBeVisible();
  await page.goto("/digest");
  await expect(page.getByText("Sample edition", { exact: true })).toBeVisible();
  await expect(page.getByText("None this month. We only include opportunities once eligibility and dates are verified.")).toBeVisible();
});

test("Wilder pathways distinguish introductory care from veterinary medicine", async ({ page, requests }) => {
  void requests;
  await page.goto("/examples/wilder-institute?view=pathways");
  await expect(page.getByText("Veterinary Technical Assistant", { exact: true })).toBeVisible();
  await expect(page.getByText(/Not direct entry from high school/)).toBeVisible();
  await expect(page.getByText(/does not provide direct entry to a DVM/)).toBeVisible();
  await expect(page.getByRole("link", { name: "All connections" }).first()).toHaveAttribute("href", "/connections");
  await expect(page.getByText(/^Why this matches/)).toHaveCount(0);
});

test("source links open safely and match the content data", async ({ page, requests }) => {
  void requests;
  // It visits every example page (32 now, each with its logo), which takes most of the default 30s alone.
  test.setTimeout(90_000);
  const known = new Set([...examples.flatMap((e) => e.sources), ...news.flatMap((n) => n.sources), ...registry].map((s) => s.url));
  await page.addInitScript(() => sessionStorage.setItem("citc.signedUp", "1"));
  const pages = [...examples.map((e) => `/examples/${e.slug}`), "/connections?course=physics-30&unit=p30c", "/digest"];
  for (const path of pages) {
    // The signed-up state is read after hydration, so wait for it before counting source links.
    await page.goto(path, { waitUntil: "networkidle" });
    // Read each page's links together: the expanded collection produces thousands of
    // attribute round trips when queried one at a time, exceeding the test budget.
    const links = await page.locator('a[target="_blank"]').evaluateAll((anchors) => anchors.map((a) => ({
      href: a.getAttribute("href"),
      rel: a.getAttribute("rel"),
      referrerPolicy: a.getAttribute("referrerpolicy"),
    })));
    expect(links.length, `${path} has source links`).toBeGreaterThan(0);
    for (const { href, rel, referrerPolicy } of links) {
      expect(href).toMatch(/^https:\/\//);
      expect(known.has(href!), `${href} comes from content data`).toBe(true);
      expect(rel).toContain("noopener");
      expect(rel).toContain("noreferrer");
      expect(referrerPolicy).toBe("no-referrer");
    }
  }
});

test("unknown example slugs show the not-found page", async ({ page, requests }) => {
  void requests;
  const res = await page.goto("/examples/not-a-real-example");
  expect(res?.status()).toBe(404);
  await expect(page.getByText("We couldn’t find that page.")).toBeVisible();
});
