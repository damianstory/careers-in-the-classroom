import { expect, test } from "./fixtures";
import { choosePart, exampleRoot, expectPart, lessonNav, partIds, toggleLayout } from "./example-helpers";

const GHGSAT = "/examples/ghgsat";
const labels = ["The question", "How it works", "Who does this work", "Ways in", "Ask the class", "About GHGSat", "Sources"];

for (const slug of ["ghgsat", "e3-lithium", "wilder-institute"]) {
  test(`${slug}: parts first, one h1, persistent one-page choice and print`, async ({ page, requests }) => {
    void requests;
    await page.goto(`/examples/${slug}`);
    await expect(exampleRoot(page)).toHaveAttribute("data-layout", "parts");
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator("h1")).toBeVisible();
    await expect(page.locator("section[data-part]:visible")).toHaveCount(1);
    expect(await page.locator("section[data-part]").evaluateAll((parts) => parts.map((p) => p.id))).toEqual(partIds);
    await expect(lessonNav(page).locator("a")).toHaveCount(7);
    await expect(page.locator("h1").locator("xpath=ancestor::section[@data-part]")).toHaveCount(0);
    await choosePart(page, "Who does this work");
    await expectPart(page, "who");
    await toggleLayout(page);
    await expect(exampleRoot(page)).toHaveAttribute("data-layout", "all");
    await expect(page.locator("section[data-part]:visible")).toHaveCount(7);
    await expect(page.getByRole("link", { name: /^Next:/ })).toHaveCount(0);
    await page.reload();
    await expect(exampleRoot(page)).toHaveAttribute("data-layout", "all");
    await choosePart(page, "How it works");
    await toggleLayout(page);
    await expect(exampleRoot(page)).toHaveAttribute("data-layout", "parts");
    await expectPart(page, "how-it-works", false);
    await page.emulateMedia({ media: "print" });
    await expect(page.locator("section[data-part]:visible")).toHaveCount(7);
    await expect(lessonNav(page)).toBeHidden();
    await expect(page.getByRole("button", { name: "Contents" })).toHaveCount(0);
    await expect(page.getByRole("button", { name: "Show full screen" })).toHaveCount(0);
    await expect(page.locator("#sources a").first()).toHaveText(/.+/);
  });
}

test("each part is a history entry; Back and Forward restore focus", async ({ page, requests }) => {
  void requests;
  await page.goto(GHGSAT);
  const entries = await page.evaluate(() => history.length);
  for (let i = 1; i < partIds.length; i++) {
    await choosePart(page, labels[i]);
    await expectPart(page, partIds[i]);
    await expect(page.locator("section[data-part]:visible")).toHaveCount(1);
  }
  expect(await page.evaluate(() => history.length)).toBe(entries + 6);
  await page.goBack(); await expectPart(page, "about");
  await page.goForward(); await expectPart(page, "sources");
  await page.locator("#sources").getByRole("link", { name: "Back to: The question" }).click();
  await expectPart(page, "question");
  await page.locator("#question").getByRole("link", { name: "Next: How it works" }).click();
  await expectPart(page, "how-it-works");
});

test("legacy URLs, explicit fragments and validated selections share the landing rule", async ({ page, requests }) => {
  void requests;
  for (const [suffix, part] of [
    ["#story", "question"], ["#company", "about"], ["#roles", "who"], ["#pathways", "ways-in"], ["#jobs", "who"],
    ["?view=pathways", "ways-in"], ["?view=jobs", "who"], ["?role=satellite-engineering#roles", "who"],
    ["?role=satellite-engineering", "who"], ["?role=invalid", "question"], ["?view=company#how-it-works", "how-it-works"],
  ]) {
    await page.goto(`${GHGSAT}${suffix}`); await expectPart(page, part);
    await page.reload(); await expectPart(page, part);
  }
});

test("pre-paint script selects the right part even before hydration can run", async ({ page, requests }) => {
  void requests;
  await page.route("**/_next/static/**/*.js", (route) => route.abort());
  await page.goto(`${GHGSAT}#how-it-works`, { waitUntil: "domcontentloaded" });
  await expect(exampleRoot(page)).toHaveAttribute("data-layout", "parts");
  await expect(exampleRoot(page)).toHaveAttribute("data-part", "how-it-works");
  await expect(page.locator("section[data-part]:visible")).toHaveCount(1);
});

test("storage denial defaults to parts and does not break the toggle", async ({ page, requests }) => {
  void requests;
  await page.addInitScript(() => {
    Object.defineProperty(window, "localStorage", { get() { throw new Error("blocked"); } });
  });
  await page.goto(GHGSAT);
  await expect(exampleRoot(page)).toHaveAttribute("data-layout", "parts");
  await toggleLayout(page);
  await expect(exampleRoot(page)).toHaveAttribute("data-layout", "all");
  await choosePart(page, "Ways in");
  await toggleLayout(page);
  await expectPart(page, "ways-in", false);
});

test("role overview exposes classroom connections; About links to it without role cards", async ({ page, requests }) => {
  void requests;
  await page.goto(`${GHGSAT}?course=physics-30&unit=p30c#who`);
  await expect(page.locator("#who").getByText("Physics 30", { exact: true })).toHaveCount(4);
  await expect(page.getByText("Interference, wavelength and the behaviour of light are what make a spectrometer work.")).toBeVisible();
  await choosePart(page, "About GHGSat");
  await expect(page.locator("#about [data-logo]")).toBeVisible();
  await expect(page.locator("#question [data-logo]")).toHaveCount(0);
  await expect(page.locator("#about a[href*='role=']")).toHaveCount(0);
  await page.locator("#about").getByRole("link", { name: "Who does this work", exact: true }).click();
  await expectPart(page, "who");
  await expect(page).toHaveURL(/course=physics-30&unit=p30c#who$/);
});

test("selection, posting-row focus and pathways preserve course context", async ({ page, requests }) => {
  void requests;
  await page.goto(`${GHGSAT}?course=physics-30&unit=p30c#who`);
  await page.locator("#who").getByRole("link", { name: "Atmospheric science and remote sensing", exact: true }).click();
  await expectPart(page, "who");
  const posting = page.locator("#who").getByRole("link", { name: /Remote Emissions Scientist/ });
  await posting.click(); await expect(posting).toBeFocused();
  await expect(posting).toHaveAttribute("aria-expanded", "true");
  await posting.click(); await expect(posting).toBeFocused();
  await expect(posting).toHaveAttribute("aria-expanded", "false");
  await page.goBack(); await expectPart(page, "who");
  await expect(posting).toHaveAttribute("aria-expanded", "true");
  await page.getByRole("link", { name: "See all pathways", exact: true }).click();
  await expectPart(page, "ways-in");
  await expect(page).toHaveURL(/course=physics-30&unit=p30c#ways-in$/);
  await page.goBack(); await expectPart(page, "who");
  await expect(posting).toHaveAttribute("aria-expanded", "true");
});

test("a role link outside its posting row lands on the part heading", async ({ page, requests }) => {
  void requests;
  await page.goto(`${GHGSAT}?role=atmospheric-science&job=ghgsat-emissions-scientist#who`);
  await choosePart(page, "Ways in");
  await page.locator("#ways-in").getByRole("link", { name: "Atmospheric science and remote sensing", exact: true }).first().click();
  await expectPart(page, "who");
  await expect(page).toHaveURL(/\?role=atmospheric-science#who$/);
  await expect(page.locator("#who [aria-expanded=true]")).toHaveCount(0);
});

test("invalid job removal is still a navigation and traverses correctly", async ({ page, requests }) => {
  void requests;
  await page.goto(`${GHGSAT}?role=atmospheric-science&job=made-up#ways-in`);
  await page.locator("#ways-in").getByRole("link", { name: "Atmospheric science and remote sensing", exact: true }).first().click();
  await expectPart(page, "who");
  await page.goBack(); await expectPart(page, "ways-in");
  await expect(page).toHaveURL(/job=made-up#ways-in$/);
  await page.goForward(); await expectPart(page, "who");
});

test("one-page scroll spy follows scrolling and section moves replace history", async ({ page, requests }) => {
  void requests;
  await page.goto(GHGSAT); await toggleLayout(page);
  const entries = await page.evaluate(() => history.length);
  await choosePart(page, "Ways in");
  await expectPart(page, "ways-in");
  expect(await page.evaluate(() => history.length)).toBe(entries);
  await page.evaluate(() => {
    window.dispatchEvent(new WheelEvent("wheel"));
    window.scrollTo({ top: document.getElementById("how-it-works")!.getBoundingClientRect().top + scrollY, behavior: "instant" });
  });
  await expect(exampleRoot(page)).toHaveAttribute("data-part", "how-it-works");
  await expect(lessonNav(page).locator("#nav-how-it-works")).toHaveAttribute("aria-current", "location");
  await toggleLayout(page); await expectPart(page, "how-it-works", false);
});

test("phone Contents contains focus, closes by Escape or button, and navigates", async ({ page, requests }, info) => {
  void requests;
  test.skip(info.project.name !== "phone", "phone contents");
  await page.goto(GHGSAT);
  await expect(exampleRoot(page)).toHaveAttribute("data-navigation-ready", "");
  const contents = page.getByRole("button", { name: "Contents", exact: true });
  const sheet = page.getByRole("dialog", { name: "Contents", exact: true });
  await contents.focus(); await page.keyboard.press("Enter");
  await expect(sheet).toBeVisible();
  for (let i = 0; i < 12; i++) { await page.keyboard.press("Tab"); expect(await page.evaluate(() => !!document.activeElement?.closest("dialog[open]"))).toBe(true); }
  for (let i = 0; i < 12; i++) { await page.keyboard.press("Shift+Tab"); expect(await page.evaluate(() => !!document.activeElement?.closest("dialog[open]"))).toBe(true); }
  await page.keyboard.press("Escape"); await expect(contents).toBeFocused();
  await contents.click(); await sheet.getByRole("button", { name: "Close", exact: true }).click(); await expect(contents).toBeFocused();
  await choosePart(page, "How it works"); await expectPart(page, "how-it-works");
  await expect(page.getByText("Show your class · 2 of 5", { exact: true })).toBeVisible();
  await expect(page.getByRole("button", { name: "Show full screen" })).toHaveCount(0);
  expect(await page.evaluate(() => document.documentElement.scrollWidth - innerWidth)).toBe(0);
});

for (const slug of ["ghgsat", "e3-lithium", "wilder-institute"]) {
  test(`${slug}: projector sequence fits, keeps qualifications and returns focus to last part`, async ({ page, requests }, info) => {
    void requests;
    test.skip(info.project.name !== "desktop", "desktop projection");
    // Exercise the required fallback without depending on the host's fullscreen permission.
    await page.addInitScript(() => { Element.prototype.requestFullscreen = () => Promise.reject(new Error("refused")); });
    await page.goto(`/examples/${slug}`);
    await page.locator('[data-present="question"]').click();
    const dialog = page.getByRole("dialog", { name: /The question|How it works|Who does this work|Ways in|Ask the class/ });
    await expect(dialog).toBeVisible();
    const url = page.url();
    const seen: string[] = [];
    for (let i = 0; i < 20; i++) {
      const frame = dialog.locator("[data-frame-part]");
      const part = (await frame.getAttribute("data-frame-part"))!;
      seen.push(part);
      expect(await frame.evaluate((el) => el.scrollHeight <= el.clientHeight), `${slug} ${part} fits`).toBe(true);
      if (part === "how-it-works") {
        await expect(frame.getByText("Schematic · not to scale")).toBeVisible();
        expect(await frame.locator("img").evaluate((el) => getComputedStyle(el).objectFit)).toBe("contain");
      }
      if (part === "ways-in" && slug === "wilder-institute") {
        const text = await frame.innerText();
        if (text.includes("Doctor of Veterinary Medicine")) expect(text).toContain("Not direct entry from high school");
      }
      if (await dialog.getByRole("button", { name: "Next", exact: true }).isDisabled()) break;
      await page.keyboard.press("ArrowRight");
    }
    expect([...new Set(seen)]).toEqual(partIds.slice(0, 5));
    expect(seen.filter((part) => part === "ways-in").length).toBeGreaterThan(1);
    expect(page.url()).toBe(url);
    await page.keyboard.press("ArrowLeft"); // Last Ways in frame, including Wilder's DVM note.
    await page.keyboard.press("Escape");
    await expectPart(page, "ways-in", false);
    await expect(page.locator('[data-present="ways-in"]')).toBeFocused();
    await expect(page).toHaveURL(/#ways-in$/);
    // Each opener starts at the matching frame, including direct entry to Ask after pagination.
    for (const part of partIds.slice(0, 5)) {
      await choosePart(page, labels[partIds.indexOf(part)]);
      await page.locator(`[data-present="${part}"]`).click();
      await expect(dialog.locator("[data-frame-part]")).toHaveAttribute("data-frame-part", part);
      await page.keyboard.press("Escape");
      await expect(page.locator(`[data-present="${part}"]`)).toBeFocused();
    }
  });
}

test.describe("without JavaScript", () => {
  test.use({ javaScriptEnabled: false });
  test("all parts and a visible list of fragment links work at both viewport sizes", async ({ page, requests }) => {
    void requests;
    for (const slug of ["ghgsat", "e3-lithium", "wilder-institute"]) {
      await page.goto(`/examples/${slug}`);
      await expect(page.locator("section[data-part]:visible")).toHaveCount(7);
      await expect(exampleRoot(page)).not.toHaveAttribute("data-layout");
      await expect(lessonNav(page)).toBeVisible();
      for (const part of partIds) {
        const link = lessonNav(page).locator(`a[href$='#${part}']`);
        await expect(link).toBeVisible(); await link.click();
        await expect(page).toHaveURL(new RegExp(`#${part}$`));
      }
    }
  });
});

test("phone filter summary appears without moving the library results", async ({ page, requests }, info) => {
  void requests;
  test.skip(info.project.name !== "phone", "phone filter summary");
  for (const library of ["/examples", "/examples?course=physics-30&unit=p30c"]) {
    await page.goto(library, { waitUntil: "networkidle" });
    const summary = page.getByRole("button", { name: /Change$/ });
    const card = page.locator('main a[href^="/examples/"]').first();
    const documentTop = () => card.evaluate((el) => el.getBoundingClientRect().top + window.scrollY);
    await expect(summary).toBeHidden();
    const top = await documentTop();

    await card.scrollIntoViewIfNeeded();
    await expect(summary).toBeVisible();
    expect(await documentTop(), `${library}: revealing the summary must not move cards`).toBeCloseTo(top, 0);

    await summary.click();
    await expect(page.getByRole("combobox", { name: "Course", exact: true })).toBeFocused();
    await expect(summary).toBeHidden();
    expect(await documentTop(), `${library}: hiding the summary must not move cards`).toBeCloseTo(top, 0);
  }
});

test("INSPECT-005: Back from an example to the library leaves the library's scroll to the browser and router", async ({ page, requests }) => {
  void requests;
  // Record every programmatic scroll to the top, so the example cannot quietly reset the library.
  await page.addInitScript(() => {
    const w = window as unknown as { __topScrolls: string[] };
    w.__topScrolls = [];
    const original = window.scrollTo.bind(window);
    window.scrollTo = ((...args: [ScrollToOptions] | [number, number]) => {
      const top = typeof args[0] === "object" ? args[0].top : args[1];
      if (top === 0) w.__topScrolls.push(window.location.pathname);
      return original(...(args as [ScrollToOptions]));
    }) as typeof window.scrollTo;
  });
  const scrollY = () => page.evaluate(() => Math.round(window.scrollY));
  for (const library of ["/examples#library", "/examples?course=physics-30&unit=p30c#library", "/examples?course=physics-30&unit=p30c"]) {
    await page.goto(library, { waitUntil: "networkidle" });
    const anchor = await scrollY(); // where the #library fragment put the page (0 without one)
    // The first example card on that library page (the full library shows only its first 12 cards).
    const first = page.locator('main a[href^="/examples/"]').first();
    const question = (await first.innerText()).trim();
    const card = page.getByRole("link", { name: question, exact: true }).first();
    await card.scrollIntoViewIfNeeded();
    // Park a little further down, so the position is the reader's own.
    await page.evaluate(() => window.scrollBy(0, 120));
    const y = await scrollY();
    expect(y, library).toBeGreaterThan(anchor);

    await card.click();
    await expect(page.getByRole("heading", { level: 1, name: question })).toBeVisible();
    await page.goBack();
    await expect(page).toHaveURL(new RegExp(`${library.replace(/[?]/g, "\\?")}$`));
    await expect(card).toBeVisible();
    // The browser restores the reader's position. With a #library fragment the router may instead bring
    // the page to that fragment, and on phones the restored position can differ by a header's height:
    // both happen after Back from any page, with or without the example's code. Never the top.
    const near = (now: number) => Math.abs(now - y) <= 120 || (library.includes("#") && now === anchor);
    await expect.poll(async () => { const now = await scrollY(); return near(now) ? "ok" : now; }, `${library}: near ${y}`).toBe("ok");
    const settled = await scrollY();
    expect(settled, library).toBeGreaterThan(0);
    // …and it stays there: no deferred landing from the example arrives late.
    await page.waitForTimeout(500);
    expect(await scrollY(), `${library} after a moment`).toBe(settled);
    expect(await page.evaluate(() => (window as unknown as { __topScrolls: string[] }).__topScrolls), library).toEqual([]);
  }
});

test("INSPECT-005: a history traversal to another page is never handled as the example's", async ({ page, requests }) => {
  void requests;
  // Depending on timing, the router may still show the example when popstate arrives for the library.
  // Reproduce that moment directly: the URL is already the library's while the example is mounted.
  await page.goto(GHGSAT);
  await expect(lessonNav(page).locator("#nav-question")).toHaveAttribute("aria-current", "location");
  await toggleLayout(page);
  // Scroll only once the one-page view is in place and tall enough to hold the position.
  await expect(exampleRoot(page)).toHaveAttribute("data-layout", "all");
  await expect.poll(() => page.evaluate(() => document.documentElement.scrollHeight - innerHeight)).toBeGreaterThan(2000);
  await page.evaluate(() => window.scrollTo(0, 2000));
  await expect.poll(() => page.evaluate(() => Math.round(window.scrollY))).toBe(2000);
  const moved = await page.evaluate(async () => {
    const tops: number[] = [];
    const original = window.scrollTo.bind(window);
    window.scrollTo = ((...args: [ScrollToOptions]) => {
      tops.push(Math.round(args[0].top ?? -1));
      return original(...args);
    }) as typeof window.scrollTo;
    // The browser's own history API, not the router's patched copy: the router is not involved.
    History.prototype.pushState.call(window.history, null, "", "/#library");
    window.dispatchEvent(new PopStateEvent("popstate", { state: null }));
    await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(() => setTimeout(r, 300))));
    return { tops, y: Math.round(window.scrollY) };
  });
  expect(moved).toEqual({ tops: [], y: 2000 });
});

test("Show all clears the role filter and Back restores it", async ({ page, requests }) => {
  void requests;
  await page.goto(`${GHGSAT}?course=physics-30&unit=p30c&role=satellite-engineering#ways-in`);
  await expectPart(page, "ways-in");
  await expect(page.locator("[data-pathway-filter]")).toContainText("satellite and instrument engineering");
  await page.getByRole("link", { name: "Show all", exact: true }).click();
  await expect(page).toHaveURL(/course=physics-30&unit=p30c#ways-in$/);
  await expectPart(page, "ways-in");
  await expect(page.locator("[data-pathway-filter]")).toHaveCount(0);
  await page.goBack(); await expectPart(page, "ways-in");
  await expect(page.locator("[data-pathway-filter]")).toBeVisible();
});

test("reduced-motion navigation keeps the heading in a short viewport", async ({ page, requests }) => {
  void requests;
  await page.setViewportSize({ width: 568, height: 320 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto(`${GHGSAT}?role=atmospheric-science#who`);
  for (const label of ["Ways in", "About GHGSat", "Who does this work"]) {
    await choosePart(page, label);
    expect(await page.evaluate(() => {
      const heading = document.activeElement!;
      const rect = heading.getBoundingClientRect();
      const header = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-h"));
      const pinned = header + document.querySelector<HTMLElement>("[data-rail-sticky]")!.offsetHeight;
      return rect.top >= pinned - 1 && rect.bottom <= innerHeight;
    })).toBe(true);
  }
});


test("compact question stays below the site header when navigating parts", async ({ page, requests }, info) => {
  void requests;
  test.skip(info.project.name !== "desktop", "desktop compact title");
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto(GHGSAT);
  for (const label of labels.slice(1)) {
    await choosePart(page, label);
    await expect.poll(() => page.evaluate(() => {
      const title = document.querySelector("h1")!.getBoundingClientRect();
      const heading = document.activeElement!.getBoundingClientRect();
      const pinned = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-h"));
      return title.top >= pinned && heading.top > title.bottom && heading.bottom <= innerHeight;
    })).toBe(true);
  }
});

for (const [slug, org, scope] of [
  ["ghgsat", "GHGSat", "Roles documented at GHGSat"],
  ["e3-lithium", "E3 Lithium", "Roles connected to this example"],
  ["wilder-institute", "Wilder Institute", "Roles documented at Wilder Institute"],
]) {
  test(`${slug}: part headings are unique and role scope stays explicit`, async ({ page, requests }) => {
    void requests;
    await page.goto(`/examples/${slug}#who`);
    await expectPart(page, "who");
    await expect(page.locator("#who p[data-role-scope]")).toHaveText(scope);
    await expect(page.locator("#who").getByText("For your students", { exact: true })).toHaveCount(0);
    if (slug === "e3-lithium") {
      await expect(page.locator("#who").getByText("Related work at another employer", { exact: true }).first()).toBeVisible();
    }
    await choosePart(page, `About ${org}`);
    await expect(page.locator("#about").getByRole("heading", { name: org, exact: true })).toHaveCount(0);
    await expect(page.locator("#about").getByRole("heading", { name: "People behind the work", exact: true })).toHaveCount(0);
    await expect(page.locator("#about").getByRole("link", { name: "Who does this work", exact: true })).toHaveCount(1);
    await toggleLayout(page);
    for (const part of partIds.slice(1)) {
      await expect(page.locator(`#${part} h2`)).toHaveCount(1);
      await expect(page.locator(`#${part} h2`)).toHaveAttribute("id", `${part}-title`);
    }
  });
}


for (const layout of ["parts", "all"]) {
  test(`INSPECT-004: bare ${layout} load leaves focus and scroll at the document start`, async ({ page, requests }) => {
    void requests;
    await page.addInitScript((value) => localStorage.setItem("example-layout", value), layout);
    await page.goto(GHGSAT, { waitUntil: "networkidle" });
    await expect(exampleRoot(page)).toHaveAttribute("data-layout", layout);
    await expect(exampleRoot(page)).toHaveAttribute("data-part", "question");
    expect(await page.evaluate(() => ({
      inMain: document.getElementById("main")!.contains(document.activeElement),
      y: window.scrollY,
    }))).toEqual({ inMain: false, y: 0 });
  });

  test(`skip link preserves the active part and reading position in ${layout} view`, async ({ page, requests }) => {
    void requests;
    await page.addInitScript((value) => localStorage.setItem("example-layout", value), layout);
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto(`${GHGSAT}?role=satellite-engineering#ways-in`);
    await expectPart(page, "ways-in");
    const before = await page.evaluate(() => ({ y: scrollY, url: location.href }));
    await page.getByRole("link", { name: "Skip to content" }).focus();
    await page.keyboard.press("Enter");
    await expect(page.locator("main")).toBeFocused();
    await page.evaluate(() => new Promise<void>((resolve) => requestAnimationFrame(() => requestAnimationFrame(() => resolve()))));
    await expectPart(page, "ways-in", false);
    expect(await page.evaluate(() => ({ y: scrollY, url: location.href }))).toEqual(before);
    // Neither native fragment event may reinterpret an unrelated anchor as a part.
    await page.evaluate(() => {
      History.prototype.replaceState.call(history, history.state, "", "#main");
      dispatchEvent(new PopStateEvent("popstate", { state: history.state }));
      dispatchEvent(new HashChangeEvent("hashchange"));
    });
    await page.evaluate(() => new Promise<void>((resolve) => requestAnimationFrame(() => requestAnimationFrame(() => resolve()))));
    await expectPart(page, "ways-in", false);
    expect(await page.evaluate(() => scrollY)).toBe(before.y);
  });
}

test("filtered Ways in projection keeps the role qualification", async ({ page, requests }, info) => {
  void requests;
  test.skip(info.project.name !== "desktop", "desktop projection");
  await page.addInitScript(() => { Element.prototype.requestFullscreen = () => Promise.reject(new Error("refused")); });
  await page.goto(`${GHGSAT}?role=satellite-engineering#ways-in`);
  await expectPart(page, "ways-in");
  await page.locator('[data-present="ways-in"]').click();
  const frame = page.locator('dialog[open] [data-frame-part="ways-in"]');
  await expect(frame.getByText("Showing routes for satellite and instrument engineering.", { exact: true })).toBeVisible();
  await expect(frame.getByText("Programs that teach skills this work uses. Each is one route in, not a requirement, and no program has endorsed this page.", { exact: true })).toBeVisible();
  await expect(frame.getByRole("link", { name: "Show all" })).toHaveCount(0);
  expect(await frame.evaluate((element) => element.scrollHeight <= element.clientHeight)).toBe(true);
});

test("For you dividers have no orphaned numbering or dot", async ({ page, requests }) => {
  void requests;
  await page.addInitScript(() => localStorage.setItem("example-layout", "all"));
  await page.goto(GHGSAT);
  for (const [part, label] of [["about", "About GHGSat"], ["sources", "Sources"]]) {
    await expect(page.locator(`#${part} > div[aria-hidden="true"]`).first()).toHaveText(label);
  }
  await expect(page.locator('#who > div[aria-hidden="true"]').first()).toHaveText("03·Who does this work");
});

test("a fragment link clicked before hydration lands on its part", async ({ page, requests }) => {
  void requests;
  let release!: () => void;
  const scripts = new Promise<void>((resolve) => { release = resolve; });
  await page.addInitScript(() => {
    Object.defineProperty(window, "localStorage", { get() { throw new Error("blocked"); } });
  });
  await page.route("**/_next/static/**/*.js", async (route) => { await scripts; await route.continue(); });
  try {
    await page.goto(GHGSAT, { waitUntil: "commit" });
    await expect(exampleRoot(page)).toHaveAttribute("data-part", "question");
    const contents = page.getByRole("button", { name: "Contents", exact: true });
    if (await contents.isVisible()) await contents.click({ noWaitAfter: true });
    await page.locator("#nav-ways-in").click({ noWaitAfter: true });
    await expect(page).toHaveURL(/#ways-in$/);
  } finally {
    release();
  }
  await page.waitForLoadState("load");
  await expectPart(page, "ways-in");
});

test("pressing the view toggle during a section scroll preserves its destination", async ({ page, requests }, info) => {
  void requests;
  test.skip(info.project.name !== "desktop", "desktop rail press timing");
  await page.goto(GHGSAT);
  await toggleLayout(page);
  await expect(exampleRoot(page)).toHaveAttribute("data-layout", "all");
  const marked = await page.evaluate(async () => {
    await new Promise<void>((resolve) => requestAnimationFrame(() => requestAnimationFrame(() => resolve())));
    const original = window.scrollTo.bind(window);
    // Hold the animation at its start, making the pointerdown/scroll-spy race deterministic.
    window.scrollTo = ((...args: [ScrollToOptions] | [number, number]) => {
      if (typeof args[0] === "object" && args[0].behavior === "smooth") return;
      original(...(args as [ScrollToOptions]));
    }) as typeof window.scrollTo;
    try {
      document.getElementById("nav-ways-in")!.click();
      const toggle = document.querySelector<HTMLButtonElement>('nav[aria-label="Explore this example"] button[aria-pressed]')!;
      toggle.dispatchEvent(new PointerEvent("pointerdown", { bubbles: true }));
      await new Promise<void>((resolve) => requestAnimationFrame(() => requestAnimationFrame(() => resolve())));
      const part = document.querySelector<HTMLElement>("[data-example-root]")!.dataset.part;
      toggle.click();
      return part;
    } finally {
      window.scrollTo = original;
    }
  });
  expect(marked).toBe("ways-in");
  await expectPart(page, "ways-in", false);
});


test("permanently blocked bundles leave every part reachable", async ({ page, requests }) => {
  void requests;
  await page.route("**/_next/static/**/*.js", (route) => route.abort());
  await page.goto(`${GHGSAT}?course=physics-30&unit=p30c#who`, { waitUntil: "domcontentloaded" });
  await expect(exampleRoot(page)).not.toHaveAttribute("data-navigation-ready");
  await expect(exampleRoot(page)).toHaveAttribute("data-part", "who");
  await expect(lessonNav(page).locator("#nav-who")).toHaveAttribute("aria-current", "location");
  await expect(page.getByText("Your lesson Physics 30 · Electromagnetic radiation")).toBeVisible();
  const contents = page.getByRole("button", { name: "Contents", exact: true });
  if (await contents.isVisible()) {
    // The pre-hydration Contents action exposes the ordinary list and all content.
    await contents.click();
    await expect(exampleRoot(page)).not.toHaveAttribute("data-layout");
    await expect(page.locator("section[data-part]:visible")).toHaveCount(7);
  }
  for (const part of partIds) {
    const link = lessonNav(page).locator(`#nav-${part}`);
    await expect(link).toBeVisible();
    await link.click();
    await expect(exampleRoot(page)).toHaveAttribute("data-part", part);
    await expect(page.locator(`section[data-part]#${part}`)).toBeVisible();
    await expect(link).toHaveAttribute("aria-current", "location");
    await expect(lessonNav(page).locator('[aria-current="location"]')).toHaveCount(1);
  }
  await page.evaluate(() => { location.hash = "main"; });
  await expect(page).toHaveURL(/#main$/);
  await expect(exampleRoot(page)).toHaveAttribute("data-part", "sources");
});

test("permanently blocked bundles: Back to the bare URL restores the first part", async ({ page, requests }) => {
  void requests;
  await page.route("**/_next/static/**/*.js", (route) => route.abort());
  await page.goto("/examples/botaneco", { waitUntil: "domcontentloaded" });
  await expect(exampleRoot(page)).not.toHaveAttribute("data-navigation-ready");
  await expect(exampleRoot(page)).toHaveAttribute("data-part", "question");
  const contents = page.getByRole("button", { name: "Contents", exact: true });
  test.skip(await contents.isVisible(), "the phone fallback shows every part instead");
  await lessonNav(page).locator("#nav-how-it-works").click();
  await expect(exampleRoot(page)).toHaveAttribute("data-part", "how-it-works");
  await page.goBack();
  await expect(page).toHaveURL(/\/examples\/botaneco$/);
  await expect(exampleRoot(page)).toHaveAttribute("data-part", "question");
  await expect(lessonNav(page).locator("#nav-question")).toHaveAttribute("aria-current", "location");
  await page.goForward();
  await expect(exampleRoot(page)).toHaveAttribute("data-part", "how-it-works");
});

test("phone navigation geometry and context are stable across hydration", async ({ page, requests }, info) => {
  void requests;
  test.skip(info.project.name !== "phone", "phone pre-paint layout");
  let release!: () => void;
  const scripts = new Promise<void>((resolve) => { release = resolve; });
  await page.route("**/_next/static/**/*.js", async (route) => { await scripts; await route.continue(); });
  try {
    await page.goto(`${GHGSAT}?course=physics-30&unit=p30c`, { waitUntil: "commit" });
    await expect(page.locator("#sources")).toBeAttached();
    await expect(exampleRoot(page)).toHaveAttribute("data-layout", "parts");
    await expect(page.getByRole("button", { name: "Contents", exact: true })).toBeVisible();
    await expect(lessonNav(page)).toBeHidden();
    await expect(page.getByText("Your lesson Physics 30 · Electromagnetic radiation")).toBeVisible();
    await page.evaluate(() => document.fonts.ready);
    const measure = () => page.evaluate(() => {
      const rect = (selector: string) => {
        const box = document.querySelector(selector)!.getBoundingClientRect();
        return { x: box.x, y: box.y, width: box.width, height: box.height };
      };
      return { bar: rect("[data-rail-sticky]"), title: rect("[data-example-title]"), page: document.documentElement.scrollHeight };
    });
    const before = await measure();
    release();
    await page.waitForLoadState("load");
    await expect(exampleRoot(page)).toHaveAttribute("data-navigation-ready", "");
    expect(await measure()).toEqual(before);
    await expect(page.getByText("Your lesson Physics 30 · Electromagnetic radiation")).toBeVisible();
  } finally {
    release();
  }
});
