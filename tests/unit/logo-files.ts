// Checks for logo files served from public/images/logos. They are served as files (never inlined),
// but a downloaded SVG can still carry script or pull in outside content, so each one is parsed tag by tag.

const BANNED_ELEMENTS = new Set(["script", "foreignobject", "iframe", "object", "embed"]);
const TAG = /<\s*([A-Za-z][\w:.-]*)((?:\s+[^\s=/>]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s"'=<>`]+))?)*)\s*\/?\s*>/g;
const ATTR = /([^\s=/>]+)(?:\s*=\s*("[^"]*"|'[^']*'|[^\s"'=<>`]+))?/g;

function unquote(v: string | undefined) {
  if (v === undefined) return "";
  return /^["']/.test(v) ? v.slice(1, -1) : v;
}

function badCss(css: string) {
  // url() may only point inside the file (url(#id)); @import always fetches.
  return /@import/i.test(css) || /url\(\s*(?!['"]?#)/i.test(css);
}

/** Problems found in an SVG's markup; empty when the file is safe to serve. */
export function svgProblems(svg: string): string[] {
  const problems: string[] = [];
  // Anything that looks like a tag but doesn't parse as one is suspect.
  const opened = (svg.match(/<\s*[A-Za-z]/g) ?? []).length;
  let parsed = 0;
  for (const m of svg.matchAll(TAG)) {
    parsed++;
    const name = m[1].toLowerCase().split(":").pop()!;
    if (BANNED_ELEMENTS.has(name)) problems.push(`element <${m[1]}>`);
    for (const a of m[2].matchAll(ATTR)) {
      const attr = a[1].toLowerCase();
      const value = unquote(a[2]);
      const local = attr.split(":").pop()!;
      if (local.startsWith("on")) problems.push(`event attribute ${a[1]}`);
      if (local === "href" && !value.trim().startsWith("#")) problems.push(`external ${a[1]}="${value}"`);
      if (attr === "style" && badCss(value)) problems.push(`style attribute "${value}"`);
    }
  }
  if (parsed !== opened) problems.push("unparsed tag");
  for (const m of svg.matchAll(/<style[^>]*>([\s\S]*?)<\/style\s*>/gi)) if (badCss(m[1])) problems.push("style element with outside reference");
  if (/<!ENTITY/i.test(svg)) problems.push("entity declaration");
  return problems;
}

export function svgViewBox(svg: string): [number, number, number, number] | undefined {
  const m = svg.match(/<svg\b[^>]*\sviewBox\s*=\s*["']([^"']+)["']/i);
  const n = m?.[1].trim().split(/[\s,]+/).map(Number);
  return n && n.length === 4 && n.every(Number.isFinite) ? (n as [number, number, number, number]) : undefined;
}

const PNG_SIGNATURE = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];

/** Width and height from a PNG's IHDR chunk, or undefined if the bytes aren't a PNG. */
export function pngSize(bytes: Uint8Array): { width: number; height: number } | undefined {
  if (bytes.length < 24 || PNG_SIGNATURE.some((b, i) => bytes[i] !== b)) return undefined;
  if (String.fromCharCode(...bytes.slice(12, 16)) !== "IHDR") return undefined;
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  return { width: view.getUint32(16), height: view.getUint32(20) };
}
