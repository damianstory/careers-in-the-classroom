import { choosePart } from "./example-helpers";
import { expect, test } from "./fixtures";

test("role details show repeated introductory text once and retain distinct explanations", async ({ page, requests }) => {
  void requests;
  await page.goto("/examples/botaneco?role=work-food#who");
  const repeated = "Investigate how ingredients behave in a product. This work connects a material’s composition to properties such as texture, stability or performance in a mixture.";
  await expect(page.locator("#who").getByText(repeated, { exact: true })).toHaveCount(1);
  await expect(page.getByRole("heading", { name: "What might you actually do?" })).toBeVisible();

  await page.goto("/examples/ghgsat?role=atmospheric-science#who");
  await expect(page.locator("#who").getByText("Turn light measurements into an explanation of what is in the air.", { exact: true })).toBeVisible();
  await expect(page.locator("#who").getByText(/^Atmospheric and remote sensing scientists/)).toBeVisible();
});

for (const example of [
  { slug: "wilder-institute", org: "Wilder Institute", tab: "Organization", role: "Animal care and welfare", job: "Animal Care Technician (On-Call in Strathmore, AB)", program: "Veterinary Technical Assistant", diagram: /four-stage conservation sequence/i },
  { slug: "e3-lithium", org: "E3 Lithium", tab: "Company", role: "Process engineering", job: "Intermediate Process Engineer", program: "Chemical Engineering Technology", diagram: /conceptual process flow/i },
]) {
  test(`${example.org}: story to organization, role, approved posting and pathway`, async ({ page, requests }) => {
    void requests;
    await page.goto(`/examples/${example.slug}`);
    await choosePart(page, "How it works");
    await expect(page.getByRole("img", { name: example.diagram })).toBeVisible();
    await choosePart(page, `About ${example.org}`);
    await expect(page).toHaveURL(new RegExp(`/examples/${example.slug}#about$`));
    await expect(page.getByRole("heading", { level: 2, name: `About ${example.org}`, exact: true })).toBeFocused();
    // About links to the role overview; selecting a role keeps Who visible.
    await page.locator("#about").getByRole("link", { name: "Who does this work", exact: true }).click();
    await page.locator("#who").getByRole("link", { name: example.role, exact: true }).click();
    await expect(page.getByRole("heading", { name: "What might you actually do?" })).toBeVisible();
    await expect(page.locator("#who-title")).toBeFocused();
    await page.getByRole("region", { name: "Saved job examples" }).getByRole("link", { name: new RegExp(example.job.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")) }).click();
    const article = page.getByRole("article", { name: example.job });
    await expect(article).toBeVisible();
    await page.reload();
    await expect(article).toBeVisible();
    if (example.slug === "wilder-institute") {
      await expect(article.locator("p").filter({ hasText: /^Application deadline:/ })).toContainText("9 Oct 2026");
      await expect(article.getByText(/does not identify burrowing owls/)).toBeVisible();
    }
    await page.getByRole("link", { name: "See all pathways", exact: true }).click();
    await expect(page).toHaveURL(new RegExp(`/examples/${example.slug}#ways-in$`));
    await expect(page.getByRole("region", { name: "Ways in" }).getByText(example.program, { exact: true })).toBeVisible();
    await choosePart(page, "The question");
    await expect(page).toHaveURL(new RegExp(`/examples/${example.slug}#question$`));
    await expect(page.getByRole("heading", { level: 1 })).toBeFocused();
    await choosePart(page, "How it works");
    await expect(page.getByRole("img", { name: example.diagram })).toBeVisible();
  });
}

test("GHGSat's approved government posting has a commercial role and a preparation route", async ({ page, requests }) => {
  void requests;
  await page.goto("/examples/ghgsat?view=roles&role=commercial-partnerships&job=ghgsat-government-business");
  await expect(page.getByRole("article", { name: "Business Development Manager (Government)" })).toBeVisible();
  // The role's own preparation route, in its "How to prepare", and in the Pathways section it filters.
  await expect(page.getByRole("region", { name: "How to prepare" }).getByText("Business Administration – Marketing", { exact: true })).toBeVisible();
  await choosePart(page, "Ways in");
  await expect(page.getByRole("region", { name: "Ways in" }).getByText("Business Administration – Marketing", { exact: true })).toBeVisible();
});

test("approved related postings are reachable without implying featured-employer affiliation", async ({ page, requests }) => {
  void requests;
  await page.goto("/examples/e3-lithium?role=laboratory-analysis&job=agat-water-lab-technician#who");
  const lab = page.getByRole("article", { name: "Laboratory Technician C - Water Lab" });
  await expect(lab).toBeVisible();
  await expect(lab.getByText("Historical job example — not a current vacancy", { exact: true })).toBeVisible();
  await expect(page.locator("#about").getByRole("link", { name: "Laboratory analysis and quality control", exact: true })).toHaveCount(0);
  await page.reload();
  await expect(lab).toBeVisible();
  await page.goto("/examples/wilder-institute?role=conservation-research&job=enmas-environmental-technician#who");
  await expect(page.getByRole("article", { name: "Environmental Technician", exact: true })).toBeVisible();
});
