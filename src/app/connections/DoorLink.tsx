"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { announceFilterNavigation, type LibraryFilter } from "@/lib/library-filter";

// A door link that tells the console it is navigating, so an edit the console is still waiting to
// apply cannot replace the door's destination. `to` is the filter the link opens, or null for a
// door without the console.
export function DoorLink({ to, ...props }: ComponentProps<typeof Link> & { to: LibraryFilter | null }) {
  return <Link {...props} onNavigate={() => announceFilterNavigation(to)} />;
}
