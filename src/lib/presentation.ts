// Pack complete two-column rows at the frame's base type size. Never truncate a card.
export function pathwayPages(heights: readonly number[], capacity: number, gap = 24): number[][] {
  const pages: number[][] = [];
  let page: number[] = [];
  let used = 0;
  for (let i = 0; i < heights.length; i += 2) {
    const row = Math.max(heights[i], heights[i + 1] ?? 0);
    if (page.length && used + gap + row > capacity) {
      pages.push(page); page = []; used = 0;
    }
    used += (page.length ? gap : 0) + row;
    page.push(i);
    if (i + 1 < heights.length) page.push(i + 1);
  }
  if (page.length) pages.push(page);
  return pages;
}
