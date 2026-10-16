import { afterEach, describe, expect, it } from "vitest";
import { selectionQuery } from "@/lib/example-navigation";
import { clearSelection, pendingSelection, rememberSelection, takeSelection } from "@/lib/example-selection";

const path = "/examples/ghgsat";
const context = "course=physics-30&unit=p30c";
const key = (query: string) => selectionQuery(new URLSearchParams(query));
const url = (query: string, hash: string) => new URL(`${path}?${query}#${hash}`, "https://example.test");

afterEach(clearSelection);

describe("selection navigation intent", () => {
  it("retains Ways in while the old role and posting still render", () => {
    rememberSelection(url(context, "ways-in"), "ways-in", false);
    expect(takeSelection(path, key(`${context}&role=atmospheric-science&job=ghgsat-emissions-scientist`))).toBeUndefined();
    // Layout can reveal the clicked part before the passive effect consumes it,
    // even when a cached response commits before its fragment is observable.
    expect(pendingSelection(path, key(context))?.part).toBe("ways-in");
    expect(pendingSelection(path, key(context))?.part).toBe("ways-in");
    expect(takeSelection(path, key(context))).toMatchObject({ part: "ways-in", row: false });
    expect(takeSelection(path, key(context))).toBeUndefined();
  });

  it("matches the destination's context and pathname, not merely its role", () => {
    rememberSelection(url(`${context}&role=satellite-engineering`, "who"), "who", false);
    expect(takeSelection(path, key("role=satellite-engineering"))).toBeUndefined();
    expect(takeSelection("/examples/e3-lithium", key(`${context}&role=satellite-engineering`))).toBeUndefined();
    expect(takeSelection(path, key(`role=satellite-engineering&unit=p30c&course=physics-30`))?.part).toBe("who");
  });

  it("retains the posting-row exception only for the corresponding navigation", () => {
    const selected = `${context}&role=atmospheric-science&job=ghgsat-emissions-scientist`;
    rememberSelection(url(selected, "who"), "who", true);
    expect(takeSelection(path, key(selected))?.row).toBe(true);
    rememberSelection(url(context, "ways-in"), "ways-in", false);
    expect(takeSelection(path, key(context))?.row).toBe(false);
  });

  it("uses the latest click and discards its intent on browser history traversal", () => {
    rememberSelection(url(`${context}&role=satellite-engineering`, "who"), "who", false);
    rememberSelection(url(context, "ways-in"), "ways-in", false);
    expect(takeSelection(path, key(`${context}&role=satellite-engineering`))).toBeUndefined();
    expect(pendingSelection(path, key(context))?.part).toBe("ways-in");
    clearSelection();
    expect(takeSelection(path, key(context))).toBeUndefined();
  });
});
