import { expect, test } from "./fixtures";

for (const example of [
  { slug: "wilder-institute", org: "Wilder Institute", tab: "Organization", role: "Animal care and welfare", job: "Animal Care Technician (On-Call in Strathmore, AB)", program: "Veterinary Technical Assistant", diagram: /four-stage conservation sequence/i },
  { slug: "e3-lithium", org: "E3 Lithium", tab: "Company", role: "Process engineering", job: "Intermediate Process Engineer", program: "Chemical Engineering Technology", diagram: /conceptual process flow/i },
]) {
  test(`${example.org}: story to organization, role, approved posting and pathway`, async ({ page, requests }) => {
    void requests;
    await page.goto(`/examples/${example.slug}`);
    await expect(page.getByRole("img", { name: example.diagram })).toBeVisible();
    await page.getByRole("link", { name: `Meet ${example.org}`, exact: true }).click();
    await expect(page).toHaveURL(new RegExp(`/examples/${example.slug}#company$`));
    await expect(page.getByRole("heading", { level: 2, name: example.org, exact: true })).toBeFocused();
    // One page: the organization's section lists its people; the role opens inline in Roles.
    await page.getByRole("region", { name: example.org, exact: true }).getByRole("link", { name: example.role, exact: true }).click();
    await expect(page.getByRole("heading", { name: "What might you actually do?" })).toBeVisible();
    await expect(page.getByRole("heading", { level: 2, name: example.role, exact: true })).toBeFocused();
    await page.getByRole("region", { name: "Real job examples" }).getByRole("link", { name: new RegExp(example.job.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")) }).click();
    const article = page.getByRole("article", { name: example.job });
    await expect(article).toBeVisible();
    await page.reload();
    await expect(article).toBeVisible();
    if (example.slug === "wilder-institute") {
      await expect(article.locator("p").filter({ hasText: /^Application deadline:/ })).toContainText("9 Oct 2026");
      await expect(article.getByText(/does not identify burrowing owls/)).toBeVisible();
    }
    await page.getByRole("link", { name: "See all pathways", exact: true }).click();
    await expect(page).toHaveURL(new RegExp(`/examples/${example.slug}#pathways$`));
    await expect(page.getByRole("region", { name: "Ways to prepare for this work" }).getByText(example.program, { exact: true })).toBeVisible();
    await page.getByRole("navigation", { name: "Explore this example" }).getByRole("link", { name: "Classroom story" }).click();
    await expect(page).toHaveURL(new RegExp(`/examples/${example.slug}#story$`));
    await expect(page.getByRole("heading", { level: 1 })).toBeFocused();
    await expect(page.getByRole("img", { name: example.diagram })).toBeVisible();
  });
}

test("GHGSat's approved government posting has a commercial role and a preparation route", async ({ page, requests }) => {
  void requests;
  await page.goto("/examples/ghgsat?view=roles&role=commercial-partnerships&job=ghgsat-government-business");
  await expect(page.getByRole("article", { name: "Business Development Manager (Government)" })).toBeVisible();
  // The role's own preparation route, in its "How to prepare", and in the Pathways section it filters.
  await expect(page.getByRole("region", { name: "How to prepare" }).getByText("Business Administration – Marketing", { exact: true })).toBeVisible();
  await expect(page.getByRole("region", { name: "Ways to prepare for this work" }).getByText("Business Administration – Marketing", { exact: true })).toBeVisible();
});
