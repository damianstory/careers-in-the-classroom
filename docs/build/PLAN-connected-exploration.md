# CitC connected exploration: GHGSat build plan (increment 2)

Prepared 25 September 2026. Status: **UNDER CROSS-REVIEW (claudex-loop). Build is authorized by the user once the plan is aligned.**

Host/coordinator: Claude Code (Opus 5.5). Plan reviewer: Codex (GPT-6 Astra, medium). Builder: Claude (host). Final inspector: fresh Codex session.

This plan was authored by an earlier agent as a review handoff, then brought into this loop by the user. The user decisions below are settled and are not up for reviewer relitigation; technical defaults are negotiable.

Workspace: `/Users/damianmatheson/Desktop/Claude Code/CitC`. All relative paths resolve against that directory.

## User decisions (settled)

The user felt the existing MVP was too thin to show convincingly. They want a teacher to connect an actual course/unit to a real organization's work, then naturally explore the organization, roles, learning routes, real job examples, and eventually practitioner recordings. They want meaningful internal explanations plus useful outbound links.

Four ChatGPT Images mockups are in `design/exploration-2026-09-25/` (`01-classroom-story.png`, `02-company-panel.png`, `03-role-exploration.png`, `04-pathways-job-examples.png`, canvas `index.html`). The user agrees with the overall direction and wants the experience to remain connected rather than feel like unrelated pages.

Latest decisions, which take precedence over mockup details:

- Leave the classroom-story direction as shown. Explain that its visual is illustrative and connects real work to the unit. It supports a teacher's conversation; it is not a substitute lesson plan. Validate the level of explanation with teachers rather than enlarging this into curriculum development now.
- Make **roles**, **job examples**, and **learning pathways** clearly different. A university program must not sit beneath a short job list as filler. The fourth mockup mixes these; correct that in implementation.
- Match the rest of the existing site. The images establish information hierarchy and connected exploration, not a replacement global design system.
- GHGSat is the bounded first build; Wilder Institute and E3 Lithium keep their current template. Expanding them is a later scope decision.

The PNGs include illustrative imagery and content. Do not convert rendered text into verified facts or treat generated imagery as authentic GHGSat equipment, program photography, branding, or job postings. The opening image's schematic still needs scientific review before classroom use, including unambiguous direction of reflected light. Use authentic permitted assets or clearly identified, reviewed schematics in the build.

## Existing artifacts (read, do not recreate)

1. `docs/validation/README.md`: product intent and teacher journey.
2. `docs/validation/calgary-examples.md`: original research and evidence.
3. `docs/validation/freshness-operating-test.md`: existing evidence-maintenance proposal.
4. `docs/validation/educator-interview-guide.md`: teacher validation procedure.
5. `docs/build/PLAN.md`, `docs/build/PLAN-REVIEW-LOG.md`: original approved app plan and reviews. This plan is the next increment; it does not rewrite that historical plan.
6. `README.md`: current run commands, real versus simulated features, limitations.
7. `design/TKS-merged-design-system.md`, `src/styles/tokens.css`, `src/styles/globals.css`: current visual authority.
8. `design/prototype-v1/Main.dc.html`, `MobileExample.dc.html`, `MobileSearch.dc.html`: previous approved desktop/mobile references.
9. `design/exploration-2026-09-25/`: new mockups plus `image-prompts.md`, `refinement-prompt.md`.

## Current application facts

- Next.js 16.3.6 App Router, React 19, TypeScript, plain CSS Modules. Reuse the stack; no new UI library or state-management package.
- Examples live at `src/app/examples/[slug]/page.tsx` (server component, one template for all three), client actions in `ExampleParts.tsx`, styles in `example.module.css`.
- `src/content/types.ts` embeds small `roles`/`pathways` arrays in `Example`. There is no organization profile or job-example entity.
- `src/lib/search.ts` validates and serializes course/unit/free-topic context. `exampleContext` supplies the matching label and back link. Preserve those rules.
- `PageDialogContext` in `src/components/dialogs/DialogProvider.tsx` sets signup/speaker context. Detail exploration must not silently change the requested organization to a related employer or lose the selected unit.
- `SiteHeader.tsx`, `SiteHeader.module.css`, `app/layout.tsx` supply the shared header, demo banner, footer and dialogs.
- `SourceLink.tsx` implements deliberate outbound navigation without passing search context.
- Evidence tests currently require the original fixed checked date. New content needs actual review dates; change date assertions deliberately, not by relabeling untouched old records.
- Most app files are untracked, alongside modified tracked files. This is pre-existing user work. Hashes of protected docs were recorded before the build; never clean/reset the tree.
- Follow AGENTS.md: read applicable bundled Next docs in `node_modules/next/dist/docs/` before writing code.

## Build plan

### 1. Deliver one complete GHGSat journey

Keep `/examples/ghgsat` as the entry and context owner. Extend it with connected views; do not require a teacher to jump between independent company and career directory pages.

First increment includes:

- Short classroom story, reviewed illustrative diagram, discussion prompt, brief optional teacher notes, and inspectable sources.
- Organization exploration with curated explanation, authentic logo if available for intended use, local connection, sourced size range when available, website/careers links, and links into roles.
- Three useful role profiles as a research target, starting from documented GHGSat work areas.
- A separate learning-pathways view with a few genuinely relevant routes and direct program/resource links.
- A separate job-examples view targeting 3–5 dated postings across at least two employers, if supportable.
- Clear local versus broader relevance, preservation of search context, mobile layout, keyboard access, and verified return navigation.

Counts are research targets, not permission to invent or pad. Report any shortfall and missing evidence; do not claim the demonstration complete if a required branch is empty without reviewer acceptance.

Keep Wilder and E3 working with their existing content/template. Other employers used in job examples need basic attributable employer information, not full company profiles.

Defer: standalone organization/role directories, accounts/database/CMS, scraping, automated freshness checks, bulk LinkedIn extraction, recording ingestion, presentation mode, slide exports, student accounts, deployment and outbound messaging. The mockups' "Present" control is not a commitment.

### 2. Content distinction

| Content | Question it answers | Where it belongs |
| --- | --- | --- |
| Role or work-area profile | What does this kind of work involve? | Roles list/detail |
| Job example | How did a particular employer describe a particular position? | Job examples |
| Learning pathway | What could help someone prepare for related work? | Learning pathways |
| Organization profile | What does this organization do and why? | Company panel |

Keep "Roles documented at GHGSat" distinct from "Related work elsewhere." If a source only names a work area, label it as such; do not silently turn it into a verified job title or Calgary vacancy.

Within "Explore next steps", use clearly labeled sibling views: **Learning pathways** and **Job examples**. Clicking a role's corresponding action selects the correct view with that role's context retained.

A job tab renders job records only, regardless of whether there are zero, two, or twenty. A pathway tab renders pathways only. A text link can invite the user to switch tabs; a university program card cannot be inserted into the jobs list. No automatic switch/fill when inventory is short. Both views have explicit empty states.

UCalgary engineering physics is a candidate pathway for the instruments/engineering side. Do not imply it is a direct requirement for atmospheric science. Every role–pathway relationship needs a rationale supported by research.

### 3. Adapt the mockups to the existing visual system

Retain global Search / Explore Calgary / Get involved navigation, speaker/signup actions, prototype banner and footer. Teacher notes belong inside the example. Do not copy the image-only header over the site header.

Reuse existing display/body typography, warm background, white bordered cards, pale green washes, dark ink primary buttons, outline secondary buttons, evidence tags, icons, focus styling, spacing and breakpoints. Tokens: 1200px content spine, 48px desktop and 16px mobile gutters; card radius 16px, button radius 12px. Do not adopt the PNGs' incidental gradients, heavier heading weight, blue badges or inconsistent logo treatment.

Add a persistent lesson context strip and contextual example navigation inside the existing page container. Labels: Classroom story / Company / Roles / Explore next steps. These are freely navigable sections, not mandatory numbered steps or completion tracking.

At roomy desktop widths, company details appear beside a compact, still-useful classroom story. Where this would create three cramped columns, collapse the local navigation into a compact row and prioritize readable content. Respect the existing spine.

On phones, show one content area at a time, with a compact course/example breadcrumb and visible return control. No squeezed side panel, no horizontal scrolling. Content before ancillary actions. No permanent second global sidebar elsewhere on the site.

### 4. Navigation and interaction

Query state on the existing example URL:

- Existing context: `course`, `unit`, optional `topic`, unchanged.
- `view=story|company|roles|pathways|jobs` (default story).
- Optional validated `role=<role-id>` on roles/pathways/jobs.
- Optional validated `job=<job-id>` only on jobs.
- Optional `scope=all|local|broader` for relevant collections, default all.

Example: `/examples/ghgsat?course=physics-30&unit=p30c&view=jobs&role=atmospheric-science`.

One small typed parser/serializer. Every visible exploration state survives reload and a copied link. Validate roles and jobs against the selected example and each other. Unknown view → story; unknown role/job → its valid collection, no crash. Unknown example remains 404.

Use Next Link/router navigation on this route with scroll preservation where appropriate, reading server searchParams and passing validated values into a focused client exploration shell. Preserve the mounted shell across query changes. Verify against bundled docs; flag if native History API would materially simplify. No parallel/intercepting routes.

User-initiated view, role, job and meaningful filter changes have predictable Back/Forward. Close/back controls navigate to explicit in-app parent destinations. Browser Back remains distinct from "Back to lesson".

Opening the company panel retains the original lesson position for return. Ephemeral scroll/focus bookmarks in component memory only. On return, restore the originating control if present, otherwise focus the relevant view heading. New view selection focuses its heading without a disruptive jump.

Inline company panel is a labeled non-modal section: no focus trap, no aria-modal. On narrow screens it becomes the single content view with explicit back navigation. Real signup/speaker dialogs keep using the native modal.

Keep the valid search-derived label throughout. Direct visits without a valid search show general course fit and return to Explore; they must not claim the teacher selected a unit. "Back to results" uses only the original validated search context.

### 5. Content model

Reviewed local TypeScript content. No database.

Optional enriched-content reference on `Example` so other examples keep rendering. New entities in separate modules with stable IDs:

- Organization: name, plain-language description, problem, offering/beneficiaries, headquarters and local connection as separate claims, optional sourced/dated size range, logo/media metadata, website/careers links.
- Role profile: ID, title/work-area label, general explanation, tasks/outputs, collaborators, classroom connection, linked pathway and posting IDs.
- Organization-role link: organization ID, role ID, whether evidence establishes a work area or an actual job title, location if verified, dated evidence. General role explanations and company-specific claims must not share an undifferentiated evidence badge.
- Pathway: provider, route type, location, what is learned, relevance to specific roles, official URL, evidence/date. Entry requirements only when verified; no implied endorsement.
- Job example: original title, employer identity, role IDs, location/work arrangement if specified, experience level if supported, source URL, capture date, publication date if available, paraphrased duties/skills, brief permitted excerpts, current status evidence.
- Classroom story: short explanation steps, media with alt/caption/provenance, discussion question, limited optional notes, evidence refs.
- Evidence/source records: extend existing Evidenced/Source with actual checked dates; the freshness document is the authority.

Sources resolve in the entity's declared scope. Prefer a shared source registry for the new collection; never accidentally resolve the same source ID across unrelated entities.

Reusable roles link explicitly to companies, jobs and routes. No generic graph engine.

Saved jobs: separate immutable captured example from mutable live status. Capture date is not proof of availability. Missing URL or failed fetch → status unknown unless closure verified. Display "Historical job example — not a current vacancy" when appropriate; "active" requires a recent successful check.

Structured summary and brief attributed excerpts. No scraped personal profiles. No runtime fetching of job boards.

### 6. Curate content before wiring polished UI

Research GHGSat official about/product/contact/careers sources, original employer postings, official program pages. Starting links:

- https://www.ghgsat.com/contact/
- https://www.ghgsat.com/technology/
- https://www.ghgsat.com/technology/satellite-constellation/
- https://apply.workable.com/ghgsat/
- https://schulich.ucalgary.ca/departments-centres/departments-and-programs-overview/engineering-physics

Recheck them when building. LinkedIn only as a supplementary lead. Output: source inventory, entity records, asset/provenance list, explicit gaps.

Classroom caption: "An illustrative connection between this unit and real work. Use it to support your classroom discussion." No lesson plan, assessment, or syllabus-alignment claim.

Diagram science review: methane is invisible; sunlight reaches the surface and reflected light is measured by the sensor; no instrument-emitted laser; absorption does not remove all light at those wavelengths.

Authentic company assets where appropriate; otherwise show the company name cleanly. No generated logo/imagery as authentic. Store approved assets locally with provenance and alt text.

Future recordings: conceptual links only. No empty media-library UI, fake interviews or embeds. Existing request-a-conversation action remains.

### 7. Preserve operating contracts

README and original PLAN remain authoritative for demo/privacy behavior. No new third-party automatic image loads, logo APIs, analytics, video players, fonts or job fetches. SourceLink for all outbound links; no course/topic state in outbound URLs/referrers.

The enriched example stays a free preview; no signup walls between story, organization, roles and pathways. Existing news gating and demo signup/speaker behavior remain. No new persistent browser state.

Preserve source access, non-endorsement wording, editorial course-fit status and local-role uncertainty. Do not silently remove existing recent development, practitioner question, source ledger or course-fit info when reorganizing GHGSat; they may move.

### 8. File-level sequence

| Order | Files | Deliverable |
| --- | --- | --- |
| 1 | New research record `docs/build/content-ghgsat-research.md` | Verified content and asset inventory, explicit gaps; validation docs unchanged |
| 2 | `src/content/types.ts`, new `organizations.ts`, `roles.ts`, `pathways.ts`, `job-examples.ts`, `example-details.ts`, exports in `index.ts`; enrichment ref in `examples.ts` | Stable entity records with evidence links |
| 3 | New `src/lib/example-navigation.ts`; reuse `src/lib/search.ts` | Typed view/selection state with search-context round trips |
| 4 | `src/app/examples/[slug]/page.tsx`; new `ExampleExplorer.tsx` + scoped CSS Module | Server lookup plus one connected shell for enriched examples; legacy fallback for others |
| 5 | View components under the example route: ClassroomStory, OrganizationPanel, RoleExplorer, LearningPathways, JobExamples | Views using existing shared UI classes |
| 6 | `public/images/...`, page CSS, `ExampleParts.tsx` as needed | Imagery, teacher-notes disclosure, responsive layout, focus behavior |
| 7 | `tests/unit/content.test.ts`, new navigation tests; `tests/e2e/journeys.spec.ts`, `regressions.spec.ts`, `a11y.spec.ts` | Content integrity and interaction coverage |
| 8 | `README.md`, new `docs/build/VERIFICATION-connected-exploration.md` | Supported behavior, gaps, test and visual evidence |

Component names are responsibility boundaries, not one file per card. No global-header replacement, broad CSS reset, dependency upgrade, database migration or deployment config.

Bundled docs to read first (relative to `node_modules/next/dist/docs/`): `01-app/01-getting-started/04-linking-and-navigating.md`, `01-app/03-api-reference/02-components/link.md`, `01-app/03-api-reference/04-functions/use-router.md`, `01-app/03-api-reference/04-functions/use-search-params.md`. Server searchParams is async; client useSearchParams has prerender/Suspense considerations.

### 9. Acceptance and verification

Content:
- Company explanation and each company-role/locality claim have appropriate evidence.
- Size is a dated range or unknown, never guessed.
- Every role–pathway and role–job link is valid and justified.
- Jobs and pathways cannot appear as each other's list items, including zero/short-list states.
- Job availability and historical capture are separate.
- No invented jobs, people, recordings, endorsements, equipment photos, or current vacancies.
- Evidence-kind meanings unchanged. Fixed-date tests accept valid actual dates without weakening evidence resolution.

Interaction:
- Physics search → story → company → role → jobs → pathways → story → original results keeps course/unit.
- Repeat with another supported course; test invalid context, copied deep link, reload, Back/Forward, invalid role/job IDs.
- Switching role clears incompatible job; narrowed filter cannot leave a stale hidden selection visible.
- Job empty state stays on jobs. A two-item list remains two jobs. Engineering Physics appears only under pathways.
- Speaker/signup context remains the original example and teaching context.
- Company close restores lesson position/focus; direct-link close has a safe in-app destination.
- Keyboard, visible focus, heading announcements, reduced motion. Dialogs keep focus behavior; inline panels do not trap focus.
- New external links use SourceLink; automatic requests stay same-origin.

Visual:
- Compare home/search/Explore and enriched example at 1440px and 390px; check 960/1120px and 320px minimum.
- No horizontal overflow or three-column squeeze.
- Typography, header, buttons, evidence tags and surfaces stay recognizable.
- Diagram readable at classroom projection scale.

Proof commands (host runs after build): `npm run lint`, `npm run typecheck`, `npm test`, `npm run test:e2e` (builds for its server), `npm run test:privacy-dev` as appropriate. Compare protected validation-doc hashes against the recorded start state.

Teacher validation remains the existing interview process. "Skim in ~2 minutes, discuss 5–10 minutes" is a hypothesis. Observe whether teachers understand roles vs pathways and can return to the lesson.
