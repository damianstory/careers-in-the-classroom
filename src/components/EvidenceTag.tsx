import type { EvidenceKind } from "@/content";

// One visual meaning per evidence kind, everywhere in the app.
export function EvidenceTag({ kind, children }: { kind: EvidenceKind; children: React.ReactNode }) {
  const cls = kind === "stated" ? "tag" : `tag tag-${kind}`;
  return <span className={cls} data-evidence={kind}>{children}</span>;
}

export const evidenceLegend =
  "Solid green: the organization states it. Outlined: seen in a dated source. Dashed: our interpretation, not yet researched, or announced but not yet real.";
