import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import {
  courses,
  exampleDetails,
  examples,
  getExample,
  getJob,
  getNews,
  getOrganization,
  getOrganizationRole,
  getPathway,
  getPreparedSearch,
  getRoleProfile,
  jobExamples,
  learningPathways,
  news,
  organizationRoles,
  organizations,
  preparedSearches,
  registry,
  roleProfiles,
  units,
} from "@/content";
import type { Claim, Evidenced, JobExample, Source } from "@/content";
import { jobStatusLabel } from "@/lib/job-status";
import { pngSize, svgProblems, svgViewBox } from "./logo-files";

function checkEvidence(item: Evidenced, sources: Source[], where: string) {
  const ids = new Set(sources.map((s) => s.id));
  if (item.kind === "unresearched") {
    expect(item.sourceIds, `${where} is unresearched and must have no sources`).toEqual([]);
    return;
  }
  expect(item.sourceIds.length, `${where} needs at least one supporting source`).toBeGreaterThan(0);
  for (const id of item.sourceIds) expect(ids.has(id), `${where} cites unknown source "${id}"`).toBe(true);
}

describe("examples", () => {
  it.each(examples.map((e) => [e.slug, e] as const))("%s has valid, claim-level sources", (_, e) => {
    const ids = e.sources.map((s) => s.id);
    expect(new Set(ids).size, "source ids are unique").toBe(ids.length);
    for (const s of e.sources) expect(s.url).toMatch(/^https:\/\//);
    expect(e.checkedOn).toMatch(/^\d{4}-\d{2}-\d{2}$/);

    e.ledger.forEach((row, i) => checkEvidence(row, e.sources, `${e.slug} ledger[${i}]`));
    e.roles.forEach((row, i) => checkEvidence(row, e.sources, `${e.slug} roles[${i}]`));
    e.pathways.forEach((row, i) => checkEvidence(row, e.sources, `${e.slug} pathways[${i}]`));
    checkEvidence({ kind: "stated", sourceIds: e.localSourceIds }, e.sources, `${e.slug} local connection`);
    checkEvidence({ kind: "interpreted", sourceIds: e.courseFitSourceIds }, e.sources, `${e.slug} course fit`);
    if (e.newsId) expect(getNews(e.newsId)).toBeDefined();
  });


});

describe("news", () => {
  it.each(news.map((n) => [n.id, n] as const))("%s has a status and a resolving source", (_, n) => {
    expect(["announcement", "early-research", "demonstrated"]).toContain(n.statusKind);
    checkEvidence(n, n.sources, n.id);
    for (const s of n.sources) expect(s.url).toMatch(/^https:\/\//);
  });
});

describe("curriculum", () => {
  it("links every unit to a real course and every prepared search to real content", () => {
    const courseIds = new Set(courses.map((c) => c.id));
    for (const u of units) {
      expect(courseIds.has(u.courseId)).toBe(true);
      if (u.preparedSearchId) expect(getPreparedSearch(u.preparedSearchId)?.courseId).toBe(u.courseId);
    }
    for (const p of preparedSearches) {
      for (const r of p.results) {
        if ("exampleSlug" in r) expect(getExample(r.exampleSlug)).toBeDefined();
        else expect(getNews(r.newsId)).toBeDefined();
      }
    }
  });
});

// Connected exploration: records cite the shared registry only, with actual check dates.
describe("connected exploration content", () => {
  const ISO = /^\d{4}-\d{2}-\d{2}$/;
  const inRegistry = (item: Evidenced, where: string) => checkEvidence(item, registry, where);
  const claim = (c: Claim, where: string) => {
    expect(c.text.length, `${where} has text`).toBeGreaterThan(0);
    inRegistry(c, where);
  };

  it("has a registry with unique ids, https links and real check dates", () => {
    const ids = registry.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const s of registry) {
      expect(s.url).toMatch(/^https:\/\//);
      expect(s.checkedOn).toMatch(ISO);
    }
    // Registry ids never shadow an example's own source ids, so no citation resolves in the wrong scope.
    const exampleIds = new Set(examples.flatMap((e) => e.sources.map((s) => s.id)));
    for (const id of ids) expect(exampleIds.has(id), `registry id "${id}" also used by an example`).toBe(false);
  });

  it("links every enriched example to real records", () => {
    for (const d of exampleDetails) {
      const e = getExample(d.exampleSlug);
      expect(e?.detailsId).toBe(d.id);
      expect(getOrganization(d.organizationId)).toBeDefined();
      for (const id of d.roleIds) {
        expect(getRoleProfile(id), id).toBeDefined();
        const documented = getOrganizationRole(d.organizationId, id);
        const relatedJob = d.jobIds.map(getJob).some((j) => j?.roleIds.includes(id));
        expect(Boolean(documented) || relatedJob, `evidence for ${id} in ${d.exampleSlug}`).toBe(true);
      }
      for (const id of d.pathwayIds) expect(getPathway(id), id).toBeDefined();
      for (const id of d.jobIds) expect(getJob(id), id).toBeDefined();
      d.story.steps.forEach((s, i) => claim(s, `${d.id} story step ${i}`));
      expect(d.story.diagramAlt.length).toBeGreaterThan(40);
      expect(d.checkedOn).toMatch(ISO);
    }
  });

  it("gives every organization claim its own evidence, and never guesses size", () => {
    for (const o of organizations) {
      for (const k of ["description", "problem", "offering", "beneficiaries", "headquarters", "localConnection"] as const) {
        claim(o[k], `${o.id} ${k}`);
      }
      if (o.size) claim(o.size, `${o.id} size`);
      expect(registry.some((s) => s.id === o.websiteSourceId)).toBe(true);
      if (o.careersSourceId) expect(registry.some((s) => s.id === o.careersSourceId)).toBe(true);
    }
  });

  it("gives every organization its own logo file, recorded with its source and date", () => {
    for (const o of organizations) {
      const logo = o.logo;
      expect(logo, `${o.id} logo`).toBeDefined();
      if (!logo) continue;
      expect(logo.alt, o.id).toMatch(/\S logo$/);
      expect(logo.src, o.id).toBe(`/images/logos/${o.id}.${logo.src.endsWith(".png") ? "png" : "svg"}`);
      expect(logo.sourceUrl).toMatch(/^https:\/\//);
      expect(logo.retrieved).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      const file = join(process.cwd(), "public", logo.src);
      if (logo.src.endsWith(".svg")) {
        const svg = readFileSync(file, "utf8");
        expect(svgProblems(svg), logo.src).toEqual([]);
        const box = svgViewBox(svg);
        expect(box, `${logo.src} viewBox`).toBeDefined();
        const ratio = box![2] / box![3];
        expect(Math.abs(logo.width / logo.height - ratio) / ratio, `${logo.src} aspect ratio`).toBeLessThanOrEqual(0.02);
      } else {
        const bytes = readFileSync(file);
        expect(pngSize(bytes), `${logo.src} is a PNG`).toEqual({ width: logo.width, height: logo.height });
        expect(bytes.length, `${logo.src} size`).toBeLessThanOrEqual(50_000);
      }
    }
  });

  it("rejects SVG markup that could run script or load outside content", () => {
    const wrap = (inner: string) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10">${inner}</svg>`;
    expect(svgProblems(wrap('<path d="M0 0h10v10z" fill="#123"/><use href="#a"/>'))).toEqual([]);
    for (const bad of [
      "<script>alert(1)</script>",
      '<g onload = "alert(1)"/>',
      "<g ONCLICK='x()'/>",
      "<rect onmouseover=x() />",
      "<foreignObject><div/></foreignObject>",
      "<iframe/>",
      "<embed/>",
      '<image href="https://example.com/a.png"/>',
      "<use href='https://example.com/a.svg#x'/>",
      '<use href="//example.com/a.svg#x"/>',
      '<use xlink:href="data:image/svg+xml,x"/>',
      '<rect style="fill:url(https://example.com/x)"/>',
      "<style>@import url(x.css);</style>",
      "<style>.a{fill:url('//example.com/p')}</style>",
      '<rect style="fill:u&#114;l(https://example.com/x.svg#g)"/>',
      '<rect style="fill:&#x75;rl(//example.com/x)"/>',
      "<svg:style>.a{fill:url(https://example.com/x)}</svg:style>",
      "<style><![CDATA[@import 'x.css';]]></style>",
      "<style>.a{fill:\\75 rl(https://example.com/x)}</style>",
      '<use href="&#x68;ttps://example.com/a.svg#x"/>',
    ]) {
      expect(svgProblems(wrap(bad)), bad).not.toEqual([]);
    }
    expect(svgProblems(wrap('<rect style="fill:url(#g)"/>'))).toEqual([]);
    expect(svgProblems(wrap("<style>.a{fill:url(#g)}</style><rect class='a'/>"))).toEqual([]);
    expect(svgProblems('<?xml version="1.0" encoding="UTF-8"?>' + wrap("<g><path d='M0 0'/></g>"))).toEqual([]);
    for (const bad of [
      '<?xml-stylesheet type="text/css" href="https://example.com/logo.css"?>' + wrap(""),
      '<!DOCTYPE svg [<!ENTITY x "y">]>' + wrap(""),
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"><g></svg>',
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"></g></svg>',
      wrap("") + "<script/>",
      wrap("") + "<g/>",
      wrap("") + "trailing text",
      wrap("<style><![CDATA[/* </style> */ @import url(https://example.com/x.css);]]></style>"),
      wrap("<style><!-- </style> -->@import 'https://example.com/x.css';</style>"),
      wrap('<path fill=red d="M0 0h10v10H0z"/>'),
      wrap('<path fill="red" fill="blue"/>'),
      wrap("<rect hidden/>"),
      wrap("<style>.a{fill:#000}<!-- c -->.b{fill:url(https://example.com/x)}</style>"),
    ]) {
      expect(svgProblems(bad), bad).not.toEqual([]);
    }
  });

  it("reads PNG dimensions only from real PNG files", () => {
    const png = new Uint8Array([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, 1, 44, 0, 0, 0, 50]);
    expect(pngSize(png)).toEqual({ width: 300, height: 50 });
    expect(pngSize(new TextEncoder().encode("<svg xmlns='http://www.w3.org/2000/svg'/>........"))).toBeUndefined();
  });

  it("says what each organization-role link establishes", () => {
    for (const l of organizationRoles) {
      inRegistry(l, `${l.organizationId}/${l.roleId}`);
      expect(["work-area", "job-title", "related-work"]).toContain(l.establishes);
      if (l.establishes === "work-area") expect(l.label).toMatch(/work area/i);
      expect(getRoleProfile(l.roleId)).toBeDefined();
    }
  });

  it("gives each role at least one pathway and keeps every role link valid", () => {
    for (const r of roleProfiles) {
      expect(learningPathways.some((p) => p.roleRationale.some((w) => w.roleId === r.id)), `${r.id} pathway`).toBe(true);
    }
    for (const p of learningPathways) {
      inRegistry(p, p.id);
      expect(registry.some((s) => s.id === p.urlSourceId)).toBe(true);
      expect(p.roleRationale.length).toBeGreaterThan(0);
      for (const w of p.roleRationale) {
        expect(getRoleProfile(w.roleId), `${p.id} → ${w.roleId}`).toBeDefined();
        expect(w.why.length, `${p.id} rationale for ${w.roleId}`).toBeGreaterThan(20);
      }
    }
    for (const j of jobExamples) {
      expect(j.roleIds.length).toBeGreaterThan(0);
      for (const id of j.roleIds) expect(getRoleProfile(id), `${j.id} → ${id}`).toBeDefined();
    }
  });

  it("keeps jobs and pathways as separate collections", () => {
    const jobIds = new Set(jobExamples.map((j) => j.id));
    for (const p of learningPathways) expect(jobIds.has(p.id)).toBe(false);
    for (const d of exampleDetails) {
      for (const id of d.jobIds) expect(getPathway(id), `${id} listed as a job`).toBeUndefined();
      for (const id of d.pathwayIds) expect(getJob(id), `${id} listed as a pathway`).toBeUndefined();
    }
    expect(getPathway("ucalgary-engineering-physics")).toBeDefined();
  });

  it("records each job as a dated, attributable capture, separate from its live status", () => {
    const employers = new Set(jobExamples.map((j) => j.employer));
    expect(employers.size, "job examples come from at least two employers").toBeGreaterThanOrEqual(2);
    for (const j of jobExamples) {
      inRegistry(j, j.id);
      claim(j.employerNote, `${j.id} employer`);
      expect(registry.some((s) => s.id === j.postingSourceId)).toBe(true);
      expect(j.capturedOn).toMatch(ISO);
      expect(j.status.checkedOn).toMatch(ISO);
      if (j.publishedOn) expect(j.publishedOn <= j.capturedOn).toBe(true);
      if (j.excerpt) expect(j.excerpt.split(/\s+/).length, `${j.id} excerpt stays brief`).toBeLessThanOrEqual(15);
    }
  });
});

describe("job status labels", () => {
  const base = jobExamples[0];
  const job = (status: JobExample["status"]): JobExample => ({ ...base, status });

  it("calls a posting open only after a recent successful check", () => {
    expect(jobStatusLabel(job({ kind: "open", checkedOn: "2026-09-25", note: "" }), "2026-10-10")).toMatch(/Accepting applications when checked 25 Sep 2026/);
    expect(jobStatusLabel(job({ kind: "open", checkedOn: "2026-09-25", note: "" }), "2026-12-01")).toBe("Historical job example — not a current vacancy");
  });

  it("never turns an unknown status into a closure", () => {
    expect(jobStatusLabel(job({ kind: "unknown", checkedOn: "2026-09-25", note: "" }), "2026-09-25")).toBe("Historical job example — not a current vacancy");
    expect(jobStatusLabel(job({ kind: "closed", checkedOn: "2026-09-25", note: "" }), "2026-09-25")).toMatch(/^Closed when checked/);
  });
});
