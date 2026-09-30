import { expect, test } from "./fixtures";

// Connected exploration of an enriched example (GHGSat): story, company, roles (with job examples), pathways,
// one after another on one page (docs/build/PLAN-b2-one-page.md). Sections are reached by #fragment;
// role and job are the selection, in the query.
const P30 = "course=physics-30&unit=p30c";
const lessonNav = (page: import("@playwright/test").Page) => page.getByRole("navigation", { name: "Explore this example" });
const section = (page: import("@playwright/test").Page, name: string) => page.getByRole("region", { name, exact: true });

test("physics example → story → company → role → job → pathways → story → results keeps the unit", async ({ page, requests }) => {
  void requests;
  await page.goto(`/examples/ghgsat?${P30}`);
  await expect(page.getByRole("heading", { level: 1, name: "How can you find an invisible gas from space?" })).toBeVisible();
  await expect(page.getByText("Your lesson Physics 30 · Electromagnetic radiation")).toBeVisible();

  await page.getByRole("link", { name: "Meet GHGSat" }).click();
  await expect(page).toHaveURL(new RegExp(`${P30}#company$`));
  await expect(page.getByRole("heading", { level: 2, name: "GHGSat", exact: true })).toBeFocused();

  await section(page, "GHGSat").getByRole("link", { name: "Atmospheric science and remote sensing" }).click();
  await expect(page).toHaveURL(/\?course=physics-30&unit=p30c&role=atmospheric-science#roles$/);
  await expect(page.getByRole("heading", { level: 2, name: "Atmospheric science and remote sensing" })).toBeFocused();

  await page.getByRole("link", { name: /Remote Emissions Scientist/ }).click();
  await expect(page).toHaveURL(new RegExp(`${P30}&role=atmospheric-science&job=ghgsat-emissions-scientist#roles$`));
  await expect(page.getByRole("article", { name: "Remote Emissions Scientist" })).toBeVisible();

  await page.getByRole("link", { name: "See all pathways" }).click();
  await expect(page).toHaveURL(new RegExp(`${P30}#pathways$`));
  await expect(page.getByRole("heading", { level: 2, name: "Ways to prepare for this work" })).toBeInViewport();
  await expect(page.getByText("Earth Sciences major (BSc)")).toBeVisible();

  await lessonNav(page).getByRole("link", { name: "Classroom story" }).click();
  await expect(page).toHaveURL(new RegExp(`/examples/ghgsat\\?${P30}#story$`));
  await expect(page.getByRole("heading", { level: 1 })).toBeFocused();
  await page.getByRole("link", { name: "Back to results" }).click();
  await expect(page).toHaveURL(new RegExp(`/\\?${P30}#library$`));
});

test("another supported course keeps its own label through the exploration", async ({ page, requests }) => {
  void requests;
  await page.goto("/examples/ghgsat?course=science-30&unit=s30c&view=company");
  await expect(page.getByText("Your lesson Science 30 · Electromagnetic energy")).toBeVisible();
  await lessonNav(page).getByRole("link", { name: "Classroom story" }).click();
  await expect(page).toHaveURL(/\/examples\/ghgsat\?course=science-30&unit=s30c#story$/);
  await expect(page.getByText("Why this matches Science 30 · Electromagnetic energy")).toBeVisible();
});

test("an invalid search context is never claimed or carried along", async ({ page, requests }) => {
  void requests;
  await page.goto("/examples/ghgsat?course=physics-30&unit=zzz&view=roles");
  await expect(page.getByText("Your lesson")).toHaveCount(0);
  await expect(page.getByRole("link", { name: "All examples" })).toHaveAttribute("href", "/");
  await expect(lessonNav(page).getByRole("link", { name: "Company" })).toHaveAttribute("href", "/examples/ghgsat#company");
});

test("a copied deep link survives reload, and Back/Forward follow the selection", async ({ page, requests }) => {
  void requests;
  const url = `/examples/ghgsat?${P30}&view=roles&role=satellite-engineering&job=muon-calibration-scientist`;
  await page.goto(url);
  const detail = page.getByRole("article", { name: "Senior Instrument Scientist, Calibration Testing" });
  await expect(detail).toBeVisible();
  await page.reload();
  await expect(detail).toBeVisible();
  await page.getByRole("link", { name: /Senior Instrument Scientist/, expanded: true }).click();
  await expect(page).toHaveURL(/role=satellite-engineering#roles$/);
  await expect(detail).toHaveCount(0);
  await page.goBack();
  await expect(detail).toBeVisible();
  await page.goForward();
  await expect(detail).toHaveCount(0);
});

test("unknown views, roles and jobs fall back without inventing anything", async ({ page, requests }) => {
  void requests;
  await page.goto(`/examples/ghgsat?${P30}&view=roles&role=astronaut&job=made-up`);
  await expect(page.getByRole("heading", { level: 2, name: "Roles documented at GHGSat" })).toBeVisible();
  await expect(page.getByRole("article")).toHaveCount(0);
  await page.goto(`/examples/ghgsat?${P30}&view=roles&role=software-data&job=muon-calibration-scientist`);
  await expect(page.getByRole("heading", { level: 2, name: "Software and data" })).toBeVisible();
  await expect(page.getByRole("article")).toHaveCount(0);
  await page.goto(`/examples/ghgsat?${P30}&view=nonsense`);
  await expect(page.getByRole("heading", { level: 1, name: "How can you find an invisible gas from space?" })).toBeVisible();
  expect((await page.goto("/examples/not-an-example?view=jobs"))!.status()).toBe(404);
});

test("switching role clears a job that no longer matches", async ({ page, requests }) => {
  void requests;
  await page.goto(`/examples/ghgsat?${P30}&view=roles&role=satellite-engineering&job=muon-calibration-scientist`);
  await page.getByRole("navigation", { name: "Other roles" }).getByRole("link", { name: "Software and data" }).click();
  await expect(page).toHaveURL(new RegExp(`${P30}&role=software-data#roles$`));
  await expect(page.getByRole("article")).toHaveCount(0);
});

test("links saved before jobs moved into roles still open the posting", async ({ page, requests }) => {
  void requests;
  await page.goto(`/examples/ghgsat?${P30}&view=jobs&role=satellite-engineering&job=muon-calibration-scientist`);
  await expect(page.getByRole("heading", { level: 2, name: "Satellite and instrument engineering" })).toBeVisible();
  await expect(page.getByRole("article", { name: "Senior Instrument Scientist, Calibration Testing" })).toBeVisible();
});

test("jobs and pathways never stand in for each other", async ({ page, requests }) => {
  void requests;
  // A role's job list holds only postings; its pathways are named separately, never as job cards.
  await page.goto(`/examples/ghgsat?${P30}&view=roles&role=satellite-engineering`);
  const jobs = page.getByRole("region", { name: "Real job examples" });
  await expect(jobs.getByRole("link")).toHaveCount(1);
  await expect(jobs.getByText("Engineering Physics (BSc)")).toHaveCount(0);

  await page.goto(`/examples/ghgsat?${P30}&view=roles&role=software-data`);
  await expect(page.getByRole("region", { name: "Real job examples" }).getByRole("link", { name: /Developer/ })).toHaveCount(2);

  // On one page the role's jobs sit in Roles; the Pathways section still lists programs only.
  await page.goto(`/examples/ghgsat?${P30}&view=pathways&role=satellite-engineering`);
  const pathways = section(page, "Ways to prepare for this work");
  await expect(pathways.getByText("Engineering Physics (BSc)")).toBeVisible();
  await expect(pathways.getByText("Senior Instrument Scientist")).toHaveCount(0);
});

test("speaker requests keep the original example and lesson while viewing another employer", async ({ page, requests }, info) => {
  void requests;
  await page.goto(`/examples/ghgsat?${P30}&view=roles&role=satellite-engineering&job=muon-calibration-scientist`);
  const header = page.getByRole("banner");
  if (info.project.name === "phone") await header.getByRole("button", { name: "Menu" }).click();
  await header.getByRole("button", { name: "Request a speaker" }).click();
  const dialog = page.getByRole("dialog", { name: "Request a practitioner conversation" });
  await expect(dialog.getByLabel("Topic")).toHaveValue("Physics 30 · Electromagnetic radiation");
  await expect(dialog.getByText("Related example:")).toContainText("GHGSat");
  await expect(dialog.getByText("Muon Space")).toHaveCount(0);
});

// One page: the rail's "Classroom story" is a section move like the others (the story heading takes
// focus). The old "return restores the control that left the story" bookmark belonged to separate views.
test("the rail leads back to the story from a copied section link", async ({ page, requests }) => {
  void requests;
  await page.goto(`/examples/ghgsat?${P30}&view=company`);
  const story = lessonNav(page).getByRole("link", { name: "Classroom story" });
  await expect(story).toHaveAttribute("href", `/examples/ghgsat?${P30}#story`);
  await story.click();
  await expect(page).toHaveURL(new RegExp(`/examples/ghgsat\\?${P30}#story$`));
  await expect(page.getByRole("heading", { level: 1, name: "How can you find an invisible gas from space?" })).toBeFocused();
  await expect(page.getByRole("heading", { level: 1 })).toBeInViewport();
});

test("the company panel is an inline section, not a modal", async ({ page, requests }) => {
  void requests;
  await page.goto(`/examples/ghgsat?${P30}&view=company`);
  await expect(section(page, "GHGSat")).toBeVisible();
  await expect(page.locator("[aria-modal]")).toHaveCount(0);
});

test("new outbound links pass no search context", async ({ page, requests }) => {
  void requests;
  for (const view of ["", "&view=company", "&view=roles&role=atmospheric-science", "&view=pathways", "&view=roles&role=software-data&job=ghgsat-backend-developer"]) {
    await page.goto(`/examples/ghgsat?${P30}${view}`);
    const links = page.locator("main a[target=_blank]");
    expect(await links.count()).toBeGreaterThan(0);
    for (const a of await links.all()) {
      await expect(a).toHaveAttribute("rel", "noopener noreferrer");
      await expect(a).toHaveAttribute("referrerpolicy", "no-referrer");
      expect(await a.getAttribute("href")).not.toMatch(/course=|unit=|topic=/);
    }
  }
});

test("direct visits never claim a selected unit, and copied postings say so", async ({ page, requests }) => {
  void requests;
  await page.goto("/examples/ghgsat?view=roles&role=atmospheric-science");
  await expect(page.getByText(/your unit|your lesson/i)).toHaveCount(0);
  await page.goto("/examples/ghgsat?view=roles&role=atmospheric-science&job=ghgsat-emissions-scientist");
  await expect(page.getByText(/your unit|your lesson/i)).toHaveCount(0);
  const article = page.getByRole("article", { name: "Remote Emissions Scientist" });
  await expect(article.getByRole("link", { name: /Posting copy on Talent\.com/ })).toBeVisible();
  await expect(article.getByRole("link", { name: /Original posting/ })).toHaveCount(0);
});

test("the top of the story shows the class fit, or every fit and a way to pick a class", async ({ page, requests }) => {
  void requests;
  await page.goto(`/examples/ghgsat?${P30}`);
  await expect(page.getByText("Why this matches Physics 30 · Electromagnetic radiation")).toBeVisible();
  await expect(page.getByRole("link", { name: "Pick your class" })).toHaveCount(0);
  await expect(page.getByRole("heading", { level: 2, name: "Use it in class" })).toBeVisible();

  await page.goto("/examples/ghgsat");
  // Every course fit is listed as a plain row (course · topic), never styled as an evidence tag.
  const fits = page.getByRole("list", { name: "Courses this fits" });
  await expect(fits.getByRole("listitem")).toHaveText([
    "Physics 30 · Electromagnetic radiation",
    "Science 30 · Electromagnetic energy and environmental topics",
    "Science 10 · Global energy systems, as a broader introduction",
  ]);
  await expect(fits.locator(".tag")).toHaveCount(0);
  await expect(page.getByRole("link", { name: "Pick your class" })).toHaveAttribute("href", "/#library");
});

test("one checked date on every view, with the evidence table closed", async ({ page, requests }) => {
  void requests;
  const urls = [
    `/examples/ghgsat?${P30}`,
    `/examples/ghgsat?${P30}&view=company`,
    `/examples/ghgsat?${P30}&view=roles`,
    `/examples/ghgsat?${P30}&view=roles&role=software-data`,
    `/examples/ghgsat?${P30}&view=pathways`,
    "/examples/wilder-institute",
    "/examples/wilder-institute?view=roles",
    "/examples/e3-lithium?view=pathways",
  ];
  for (const url of urls) {
    await page.goto(url);
    await expect(page.locator("main").getByText(/checked \d/i), url).toHaveCount(1);
    await expect(page.locator("[data-checked]"), url).toHaveText(/^Sources checked \d/);
    await expect(page.locator("details", { hasText: "What we know, and how" }), url).not.toHaveAttribute("open", "");
  }
});

test("new company profiles survive reload and reject another example's role", async ({ page, requests }) => {
  void requests;
  for (const [slug, org, label] of [["wilder-institute", "Wilder Institute", "Organization"], ["e3-lithium", "E3 Lithium", "Company"]]) {
    await page.goto(`/examples/${slug}?view=company`);
    await page.reload();
    await expect(lessonNav(page).getByRole("link", { name: label })).toHaveAttribute("aria-current", "location");
    await expect(page.getByRole("heading", { level: 2, name: org, exact: true })).toBeVisible();
    await page.goto(`/examples/${slug}?view=roles&role=atmospheric-science&job=ghgsat-emissions-scientist`);
    await expect(page.getByRole("heading", { level: 2, name: `Roles documented at ${org}` })).toBeVisible();
    await expect(page.getByRole("article")).toHaveCount(0);
  }
});

test("course tags are neutral and link chips carry an arrow", async ({ page, requests }) => {
  void requests;
  await page.goto(`/examples/ghgsat?${P30}`);
  // The teaser names the roles as a plain list: no evidence-coloured tags.
  const teaser = page.getByRole("region", { name: "Keep going" });
  await expect(teaser.getByRole("listitem")).toHaveText([
    "Atmospheric science and remote sensing",
    "Satellite and instrument engineering",
    "Software and data",
    "Business development and partnerships",
  ]);
  await expect(teaser.locator(".tag:not(.tag-neutral)")).toHaveCount(0);
  await page.goto(`/examples/ghgsat?${P30}&view=pathways`);
  const chip = page.locator("main a.tag").first();
  await expect(chip).toHaveClass(/tag-neutral/);
  await expect(chip.locator("svg")).toHaveCount(1);
  await page.goto(`/examples/ghgsat?${P30}&view=roles&role=software-data`);
  for (const a of await page.getByRole("navigation", { name: "Other roles" }).getByRole("link").all()) {
    await expect(a.locator("svg")).toHaveCount(1);
  }
});

test("pathway cards distinguish programs from employer requirements", async ({ page, requests }) => {
  void requests;
  await page.goto("/examples/e3-lithium?view=pathways");
  await expect(page.getByText("Chemical Engineering Technology", { exact: true })).toBeVisible();
  await expect(page.getByText(/does not replace a posting’s engineering-degree requirement/)).toBeVisible();
  await expect(page.getByText(/not a requirement/)).toHaveCount(1);
});
