"use client";

import { useMemo, useSyncExternalStore } from "react";

// Only two things are ever kept, in sessionStorage (cleared when the tab closes):
// the demo signup flag and the list of searches with no prepared match.
const SIGNED_UP = "citc.signedUp";
const UNMATCHED = "citc.unmatched";

export interface Unmatched {
  course: string;
  label: string;
}

// Used when sessionStorage is blocked, so the demo still behaves consistently in this page.
const memory = new Map<string, string>();
const listeners = new Set<() => void>();
const emit = () => listeners.forEach((l) => l());

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function read(key: string): string | null {
  if (memory.has(key)) return memory.get(key)!;
  try {
    return window.sessionStorage.getItem(key);
  } catch {
    return null;
  }
}

function write(key: string, value: string) {
  try {
    window.sessionStorage.setItem(key, value);
    memory.delete(key);
  } catch {
    memory.set(key, value);
  }
  emit();
}

export function useSignedUp(): boolean {
  return useSyncExternalStore(subscribe, () => read(SIGNED_UP) === "1", () => false);
}

export const markSignedUp = () => write(SIGNED_UP, "1");

export function useUnmatched(): Unmatched[] {
  const raw = useSyncExternalStore(subscribe, () => read(UNMATCHED), () => null);
  return useMemo(() => {
    try {
      const list = raw ? JSON.parse(raw) : [];
      return Array.isArray(list) ? list : [];
    } catch {
      return [];
    }
  }, [raw]);
}

export function addUnmatched(item: Unmatched) {
  let list: Unmatched[] = [];
  try {
    list = JSON.parse(read(UNMATCHED) ?? "[]");
  } catch {}
  const last = list[list.length - 1];
  if (last && last.course === item.course && last.label === item.label) return;
  write(UNMATCHED, JSON.stringify([...list, item].slice(-20)));
}
