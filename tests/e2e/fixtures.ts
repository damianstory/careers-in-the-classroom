import { test as base, expect, type Request } from "@playwright/test";

// Every test records the requests the app makes. None may leave the app's own origin.
// External source links are never clicked in tests; their attributes are checked instead.
export const test = base.extend<{ requests: Request[] }>({
  requests: async ({ page, baseURL }, provide) => {
    const seen: Request[] = [];
    page.on("request", (r) => seen.push(r));
    await provide(seen);
    const origin = new URL(baseURL!).origin;
    const offOrigin = seen
      .map((r) => r.url())
      .filter((u) => !u.startsWith("data:") && !u.startsWith("blob:") && new URL(u).origin !== origin);
    expect(offOrigin, "requests to other origins").toEqual([]);
  },
});

export { expect };

export const PROBE = "privacy-probe-7f3a";

// Asserts that nothing is requested while `action` runs, and that no request carries the probe text.
// Waits for background prefetching to settle first so only requests caused by the action are counted.
export async function expectNoRequests(requests: Request[], action: () => Promise<void>) {
  const page = requests[0]?.frame().page();
  if (page) await page.waitForLoadState("networkidle");
  const before = requests.length;
  await action();
  await new Promise((r) => setTimeout(r, 300));
  // Playwright scrolls the target into view before clicking. Next.js then prefetches link targets
  // (GET with `_rsc`, or code chunks) and lazy images start loading (GET `/_next/image` for a local file).
  // Those carry only asset or link URLs, never form data; anything else during a submit is a failure.
  const isBackgroundLoad = (r: Request) => {
    if (r.method() !== "GET") return false;
    const url = new URL(r.url());
    if (url.searchParams.has("_rsc") || url.pathname.startsWith("/_next/static/")) return true;
    const src = url.searchParams.get("url") ?? "";
    return url.pathname === "/_next/image" && src.startsWith("/") && !src.startsWith("//");
  };
  const during = requests
    .slice(before)
    .filter((r) => !isBackgroundLoad(r))
    .map((r) => `${r.method()} ${r.url()}`);
  expect(during, "requests made while submitting a demo form").toEqual([]);
  expect(requests.filter((r) => r.method() !== "GET").map((r) => r.url()), "non-GET requests").toEqual([]);
  for (const r of requests) {
    expect(r.url()).not.toContain(PROBE);
    expect(r.postData() ?? "").not.toContain(PROBE);
  }
}
