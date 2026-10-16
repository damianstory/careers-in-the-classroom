import { selectionQuery, type View } from "./example-navigation";

export interface SelectionNavigation {
  path: string;
  query: string;
  part: View;
  row: boolean;
}

// The clicked fragment is navigation intent, not something to infer from the old URL
// while Next restores a cached page or commits the new selection.
let pending: SelectionNavigation | undefined;

export function rememberSelection(url: URL, part: View, row: boolean) {
  pending = { path: url.pathname, query: selectionQuery(url.searchParams), part, row };
}

export function pendingSelection(path: string, query: string) {
  return pending?.path === path && pending.query === query ? pending : undefined;
}

export function takeSelection(path: string, query: string) {
  const navigation = pendingSelection(path, query);
  if (navigation) pending = undefined;
  return navigation;
}

export function clearSelection() {
  pending = undefined;
}
