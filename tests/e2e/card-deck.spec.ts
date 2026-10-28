import { readFileSync } from "node:fs";
import { examples, getDetails, getNews, getPathway, getRoleProfile } from "../../src/content";
import { storyDiagrams } from "../../src/content/example-records";
import { cardsFor } from "../../src/lib/example-navigation";
import { availableViews } from "../../src/lib/example-views";
import { choosePart, exampleRoot, expectPart, toggleLayout } from "./example-helpers";
import { expect, test } from "./fixtures";

const normalize = (text: string) => text.replace(/\s+/g, " ").trim();
// Standard diagram copy is authored in the component; research diagrams live in records.
// Read the literal copy without importing Next's image modules into the test runner.
const standardDiagrams = readFileSync("src/app/examples/[slug]/StoryDiagram.tsx", "utf8")
  .split("export const diagrams = {")[1].split("\n};")[0];
function standardStrings(kind: string) {
  const block = standardDiagrams.split(`${kind === "methane" ? kind : `"${kind}"`}: {`)[1].split("\n  },")[0];
  return [...block.matchAll(/"([^"\n]+)"/g)].map((match) => match[1]);
}

for (const e of examples) {
  test(`${e.slug}: record copy and sources remain visible across the deck in both sessions`, async ({ page, requests }) => {
    void requests;
    test.setTimeout(120_000);
    const details = e.detailsId ? getDetails(e.detailsId) : undefined;
    const views = availableViews(e, details);
    const story = details?.story;
    const diagram = story?.diagramKind === "research" ? storyDiagrams[story.illustrationSlug ?? ""] : undefined;
    const expected = [e.question, e.org, e.localShort, ...e.courses.flatMap((c) => [c.course, c.topic]),
      ...(story ? [story.subtitle, ...story.steps.map((step) => step.text)] : [e.work]),
      // Deleted by the user's decision (rail/T1 plan, section 1 item 5): the Mindset panel and role evidence labels.
      e.status, e.explain, story?.discussion ?? e.prompt,
      ...(views.includes("about") ? [e.conversation] : []),
      ...(diagram ? [diagram.heading, ...diagram.steps, diagram.note] : story ? standardStrings(story.diagramKind) : []),
      ...(details ? details.roleIds.flatMap((id) => {
        const role = getRoleProfile(id)!; return [role.title, role.summary, role.classroomConnection];
      }) : e.roles.flatMap((role) => [role.title, role.note])),
      ...(details ? details.pathwayIds.flatMap((id) => {
        const route = getPathway(id)!;
        return [route.name, route.provider, route.learns, route.entryNote, ...route.roleRationale.filter((r) => details.roleIds.includes(r.roleId)).map((r) => r.why)];
      }) : e.pathways.flatMap((route) => [route.label, route.note, route.kindLabel])),
      ...e.sources.map((source) => source.label),
    ].filter((value): value is string => !!value);
    for (const signedUp of [false, true]) {
      await page.goto(`/examples/${e.slug}`);
      await page.evaluate((signed) => { sessionStorage.setItem("citc.signedUp", signed ? "1" : "0"); localStorage.removeItem("example-layout"); }, signedUp);
      await page.reload();
      await expect(exampleRoot(page)).toHaveAttribute("data-navigation-ready", "");
      const allText = normalize(await exampleRoot(page).textContent() ?? "");
      for (const text of expected) expect(allText, text).toContain(normalize(text));
      const visible: string[] = [];
      for (const card of cardsFor(views, !!story)) {
        await expect(exampleRoot(page)).toHaveAttribute("data-part", card.part);
        await expect(exampleRoot(page)).toHaveAttribute("data-card", String(card.card));
        visible.push(await page.locator("[data-deck-body]").innerText());
        if (card.part !== "sources") await page.locator("[data-deck-next]").click();
      }
      await expect(page.locator("[data-deck-next]")).toBeDisabled();
      await expect(page.locator("[data-deck-next]")).toHaveText("End of example");
      // Roles show one at a time and their details sit in tabs: visit each role and tab too.
      for (const roleId of details?.roleIds ?? []) {
        await page.goto(`/examples/${e.slug}?role=${roleId}#who`);
        await expect(exampleRoot(page)).toHaveAttribute("data-navigation-ready", "");
        for (const tab of ["what", "jobs", "prepare"]) {
          await page.locator(`[data-role-detail="${roleId}"] [data-tab="${tab}"]`).click();
          visible.push(await page.locator(`[data-role-detail="${roleId}"]`).innerText());
        }
      }
      const union = normalize(visible.join(" ")).toLocaleLowerCase();
      for (const text of expected) expect(union, `${signedUp ? "signed up" : "signed out"}: ${text}`).toContain(normalize(text).toLocaleLowerCase());
      if (signedUp && e.newsId && views.includes("about")) {
        const news = getNews(e.newsId)!;
        for (const text of [news.summary, news.ask]) expect(union).toContain(normalize(text).toLocaleLowerCase());
      }
      for (const source of e.sources) {
        await expect(page.locator("#sources a").filter({ hasText: source.label }).first()).toHaveAttribute("href", source.url);
      }
      if (story) await expect(page.locator("#how-it-works figure img")).toHaveAttribute("alt", story.diagramAlt);
    }
  });
}

test("second-card links survive reload, history, keyboard and layout changes", async ({ page, requests }) => {
  void requests;
  await page.goto("/examples/ghgsat#how-it-works-2");
  await expectPart(page, "how-it-works");
  await expect(exampleRoot(page)).toHaveAttribute("data-card", "2");
  await expect(page.locator('#how-it-works [data-card="1"]')).toBeHidden();
  await page.reload();
  await expectPart(page, "how-it-works");
  await expect(exampleRoot(page)).toHaveAttribute("data-card", "2");
  const entries = await page.evaluate(() => history.length);
  await page.keyboard.press("ArrowRight");
  await expectPart(page, "who");
  expect(await page.evaluate(() => history.length)).toBe(entries + 1);
  await page.goBack();
  await expectPart(page, "how-it-works");
  await expect(exampleRoot(page)).toHaveAttribute("data-card", "2");
  await page.goForward(); await expectPart(page, "who");
  await page.keyboard.press("ArrowLeft");
  await expect(exampleRoot(page)).toHaveAttribute("data-card", "2");
  await choosePart(page, "How it works");
  await expect(exampleRoot(page)).toHaveAttribute("data-card", "1");
  await page.locator("[data-deck-next]").focus();
  await page.keyboard.press("ArrowRight");
  await expect(exampleRoot(page)).toHaveAttribute("data-card", "1");
  await toggleLayout(page);
  await expect(page.locator("[data-deck-next]")).toBeHidden();
  await expect(page.locator('#how-it-works [data-card="2"]')).toBeVisible();
  await page.locator("#how-it-works-title").focus();
  const url = page.url(); await page.keyboard.press("ArrowRight"); expect(page.url()).toBe(url);
  await page.reload();
  await expect(exampleRoot(page)).toHaveAttribute("data-layout", "all");
  await toggleLayout(page);
  await expect(exampleRoot(page)).toHaveAttribute("data-layout", "parts");
  await expect(page.locator("[data-deck-next]")).toBeVisible();
  await page.goto("/examples/ghgsat#how-it-works-99");
  await expectPart(page, "how-it-works");
  await expect(exampleRoot(page)).toHaveAttribute("data-card", "1");
});

test("second card is selected before hydration", async ({ page, requests }) => {
  void requests;
  await page.route("**/_next/static/**/*.js", (route) => route.abort());
  await page.goto("/examples/ghgsat#how-it-works-2", { waitUntil: "domcontentloaded" });
  await expect(exampleRoot(page)).toHaveAttribute("data-card", "2");
  await expect(page.locator('#how-it-works [data-card="2"]')).toBeVisible();
  await expect(page.locator('#how-it-works [data-card="1"]')).toBeHidden();
});

for (const width of [1440, 1100, 390]) {
  test(`pinned heading clearance at ${width}px and 200% zoom`, async ({ page, requests }) => {
    void requests;
    await page.setViewportSize({ width, height: 900 });
    for (const zoom of [1, 2]) {
      await page.goto("/examples/ghgsat#how-it-works-2");
      // Equivalent CSS viewport at browser zoom. Actual browser UI zoom remains a host check.
      await page.setViewportSize({ width: Math.round(width / zoom), height: Math.round(900 / zoom) });
      const clear = async () => expect.poll(() => page.evaluate(() => {
        const heading = document.activeElement?.getBoundingClientRect();
        // In frame mode the section heading sits in the card's top row, below the site header.
        const root = document.querySelector<HTMLElement>("[data-example-root]")!;
        const framed = root.dataset.frame !== undefined && root.dataset.fit !== "flow";
        const top = framed ? document.querySelector("body > header")!.getBoundingClientRect().bottom
          : innerWidth > 960 ? parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-h"))
          : document.querySelector("[data-rail-sticky]")!.getBoundingClientRect().bottom;
        const bottom = document.querySelector("[data-deck-footer]")!.getBoundingClientRect().top;
        return !!heading && heading.top >= top && heading.bottom <= bottom;
      })).toBe(true);
      await choosePart(page, "Who does this work"); await clear();
      await page.locator("[data-deck-back]").click(); await clear();
      await page.reload(); await expectPart(page, "how-it-works"); await clear();
      await page.goBack(); await expectPart(page, "who"); await clear();
      await page.goForward(); await expectPart(page, "how-it-works"); await clear();
      expect(await page.evaluate(() => document.documentElement.scrollWidth - innerWidth)).toBe(0);
    }
  });
}

test("signup from About restores focus to the visible About heading", async ({ page, requests }) => {
  void requests;
  await page.goto("/examples/ghgsat#about");
  await page.locator("#about").getByRole("button", { name: "Sign up free to open" }).click();
  const dialog = page.getByRole("dialog", { name: "Save your search. Get Calgary examples monthly." });
  await dialog.getByLabel("Email").fill("deck-test@example.com");
  await dialog.getByLabel("School", { exact: true }).fill("Test school");
  await dialog.getByRole("button", { name: "Create free account" }).click();
  await page.getByRole("button", { name: "Back to what I was reading" }).click();
  await expect(page.locator("#about-title")).toBeFocused();
  await expect(page.locator("#about-title")).toBeInViewport();
});

// Fit is covered by card-frame.spec.ts (rail/T1 plan, criterion A), which replaces the earlier sticky-panel fit test.

test("the announced position and Next labels distinguish reference cards", async ({ page, requests }) => {
  void requests;
  await page.goto("/examples/geologicai");
  const counter = page.locator("[data-deck-counter]");
  const next = page.locator("[data-deck-next]");
  await expect(counter).toHaveText("Card 1 of 6 · The question");
  await expect(next).toHaveAccessibleName("Next: How it works");
  await expect(next).toContainText("Next section");
  await next.click();
  await expect(counter).toHaveText("Card 2 of 6 · How it works");
  await expect(next).toHaveAccessibleName("Next: The lesson, in the real world");
  await expect(next).toContainText("Next card");
  await next.click();
  await expect(counter).toHaveText("Card 3 of 6 · How it works");
  await choosePart(page, "Ask the class");
  await expect(counter).toHaveText("Card 6 of 6 · Ask the class");
  await expect(next).toHaveAccessibleName("Next: About GeologicAI");
  await next.click();
  await expect(counter).toHaveText("About GeologicAI");
  await next.click();
  await expect(counter).toHaveText("Sources");
});

// Long reference labels must leave usable space for Next on narrow screens.
for (const width of [390, 320]) {
  test(`About headings and footer destinations wrap at ${width}px`, async ({ page, requests }) => {
    void requests;
    await page.setViewportSize({ width, height: 844 });
    for (const slug of ["solvet-consistent-batches", "calgary-wildlife-release-evidence", "sfc-fuel-cell-battery-support",
      "engineered-power-demanding-batteries", "frog3d-digital-to-physical", "alberta-cheese", "canadian-blood-services-calgary",
      "canada-malting", "ptw-panel-shop", "abc-bees", "ffa-acoustics", "phil-sebastian", "watersmart", "ftg-aerospace-calgary"]) {
      await page.goto(`/examples/${slug}#about`);
      await expect(exampleRoot(page)).toHaveAttribute("data-navigation-ready", "");
      await expectPart(page, "about");
      const bounds = await page.evaluate(() => {
        const next = document.querySelector("[data-deck-next]")!;
        const button = next.getBoundingClientRect();
        const overflow = [...document.querySelectorAll("#about-title, [data-deck-counter], [data-deck-next]"), ...next.querySelectorAll("*")]
          .filter((el) => {
            const rect = el.getBoundingClientRect();
            return el.getClientRects().length > 0 && (rect.left < 0 || rect.right > innerWidth);
          }).map((el) => el.tagName + "#" + el.id);
        return { overflow, horizontalScroll: document.documentElement.scrollWidth - innerWidth, nextWidth: button.width };
      });
      expect(bounds.overflow, slug).toEqual([]);
      expect(bounds.horizontalScroll, slug).toBe(0);
      expect(bounds.nextWidth, `${slug}: usable Next button`).toBeGreaterThanOrEqual(48);
    }
  });
}
