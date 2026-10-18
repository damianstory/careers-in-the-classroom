// Checks for logo files served from public/images/logos. They are served as files (never inlined),
// but a downloaded SVG can still carry script or pull in outside content, so each one is parsed tag by tag.

const BANNED_ELEMENTS = new Set(["script", "foreignobject", "iframe", "object", "embed"]);
const TAG = /<\s*([A-Za-z][\w:.-]*)((?:\s+[^\s=/>]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s"'=<>`]+))?)*)\s*\/?\s*>/g;
const ATTR = /([^\s=/>]+)(?:\s*=\s*("[^"]*"|'[^']*'|[^\s"'=<>`]+))?/g;

// Values are checked as an XML parser will read them: with character references decoded.
function decodeXml(s: string) {
  return s
    .replace(/&#x([0-9a-f]+);?/gi, (_, h: string) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);?/g, (_, d: string) => String.fromCodePoint(Number(d)))
    .replace(/&(lt|gt|quot|apos|amp);/g, (_, n: string) => ({ lt: "<", gt: ">", quot: '"', apos: "'", amp: "&" })[n]!);
}

function unquote(v: string | undefined) {
  if (v === undefined) return "";
  return decodeXml(/^["']/.test(v) ? v.slice(1, -1) : v);
}

function badCss(raw: string) {
  const css = decodeXml(raw.replace(/<!\[CDATA\[|\]\]>/g, "")).replace(/\/\*[\s\S]*?\*\//g, "");
  // CSS escapes can spell url( or @import in ways a pattern can't follow, so any escape is refused.
  // url() may only point inside the file (url(#id)); @import always fetches.
  return css.includes("\\") || /@import/i.test(css) || /url\(\s*(?!['"]?#)/i.test(css);
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
    const seen = new Set<string>();
    for (const a of m[2].matchAll(ATTR)) {
      // Well-formed XML: every value quoted, no name twice.
      if (!a[2] || !/^["']/.test(a[2])) problems.push(`unquoted attribute ${a[1]} on <${m[1]}>`);
      if (seen.has(a[1])) problems.push(`duplicate attribute ${a[1]} on <${m[1]}>`);
      seen.add(a[1]);
      const attr = a[1].toLowerCase();
      const value = unquote(a[2]);
      const local = attr.split(":").pop()!;
      if (local.startsWith("on")) problems.push(`event attribute ${a[1]}`);
      if (local === "href" && !value.trim().startsWith("#")) problems.push(`external ${a[1]}="${value}"`);
      if (attr === "style" && badCss(value)) problems.push(`style attribute "${value}"`);
    }
  }
  if (parsed !== opened) problems.push("unparsed tag");
  if (/<!ENTITY/i.test(svg)) problems.push("entity declaration");
  problems.push(...structureProblems(svg));
  return problems;
}

// The XML around the tags: only a leading XML declaration is allowed (no stylesheet instructions or
// DOCTYPE), and every element must close in order, so nothing hides in malformed markup.
function structureProblems(svg: string): string[] {
  const problems: string[] = [];
  const body = svg.trim().replace(/^<\?xml\s[^?]*\?>/, "");
  const stack: string[] = [];
  let roots = 0;
  // Style element text is gathered by the same walk that skips comments, so a "</style>" inside a
  // comment can't end it early. Matched by local name, so a prefix (<svg:style>) can't hide one.
  let css = "";
  let end = 0;
  const inStyle = () => /^(?:[\w.-]+:)?style$/i.test(stack.at(-1) ?? "");
  for (const m of body.matchAll(/<!--[\s\S]*?-->|<!\[CDATA\[[\s\S]*?\]\]>|<\?[\s\S]*?\?>|<![^>]*>|<\/\s*([^\s>]+)\s*>|<\s*([A-Za-z][\w:.-]*)(?:"[^"]*"|'[^']*'|[^'">])*?(\/)?>/g)) {
    const token = m[0];
    if (inStyle()) css += body.slice(end, m.index);
    end = m.index + token.length;
    if (stack.length === 0 && roots > 0 && !token.startsWith("<!--")) problems.push(`content after the root: ${token.slice(0, 40)}`);
    if (token.startsWith("<?")) problems.push(`processing instruction ${token.slice(0, 40)}`);
    // No CDATA: the logos have none, and refusing it keeps the style text check simple.
    else if (token.startsWith("<![CDATA[")) problems.push("CDATA section");
    else if (token.startsWith("<!") && !token.startsWith("<!--")) problems.push(`declaration ${token.slice(0, 40)}`);
    else if (m[1] !== undefined) {
      if (stack.pop() !== m[1]) problems.push(`mismatched </${m[1]}>`);
    } else if (m[2] !== undefined) {
      if (stack.length === 0) roots++;
      if (!m[3]) stack.push(m[2]);
    }
    if (m[1] !== undefined && /^(?:[\w.-]+:)?style$/i.test(m[1])) {
      if (badCss(css)) problems.push("style element with outside reference");
      css = "";
    }
  }
  // Exactly one root element, with nothing but comments and whitespace after it.
  if (roots !== 1) problems.push(`${roots} root elements`);
  const tail = body.slice(body.search(/<\/\s*(?:[\w.-]+:)?svg\s*>\s*(?:<!--[\s\S]*?-->\s*)*$/));
  if (!/^<\/\s*(?:[\w.-]+:)?svg\s*>(?:\s|<!--[\s\S]*?-->)*$/.test(tail)) problems.push("text or markup after </svg>");
  if (stack.length) problems.push(`unclosed <${stack.join("> <")}>`);
  if (!/^<\s*svg\b/i.test(body.replace(/^(?:\s|<!--[\s\S]*?-->)*/, ""))) problems.push("does not start with <svg>");
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
