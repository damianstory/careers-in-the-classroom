// Frame mode: on laptops and desktops each card is a fixed frame that fits the window. Nothing
// scrolls; long content is paged (PagedPanel). Must match the frame media query in explore.module.css.
export const FRAME_QUERY = "(min-width: 1024px) and (min-height: 640px)";

/** Fired on window to open a role's tab: { role, tab }. ExploreFocus uses it when the teacher returns from a posting. */
export const ROLE_TAB_EVENT = "explore:role-tab";

/** Fired on the example root when a paged panel's content or size changed, so the fit is checked again. */
export const FIT_EVENT = "explore:fit";

export function framed(root: HTMLElement | null): boolean {
  return !!root && root.dataset.frame !== undefined && root.dataset.layout === "parts" && root.dataset.fit !== "flow" && window.matchMedia(FRAME_QUERY).matches;
}

const rendered = (el: Element) => el.getClientRects().length > 0;

// Visually hidden text (sr-only) and closed popovers are not content to fit.
export const offStage = (el: Element) => !!el.closest(".sr-only, [popover], details:not([open]) > :not(summary)");

// A paged window clips when anything inside it does not lie wholly within its height: an unbreakable
// block taller than the window, or content pushed below it. Pages differ only horizontally.
export function windowClips(win: HTMLElement): boolean {
  if (!rendered(win)) return false;
  const box = win.getBoundingClientRect();
  for (const el of win.querySelectorAll<HTMLElement>("*")) {
    if (offStage(el) || !rendered(el)) continue;
    const r = el.getBoundingClientRect();
    if (r.height === 0) continue;
    if (r.top < box.top - 1 || r.bottom > box.bottom + 1) return true;
  }
  return false;
}
