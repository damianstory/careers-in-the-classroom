# 21 October implementation review

The 23 approved v1 drafts are implemented locally for review. Nothing has been committed, pushed or deployed in this step. The original research packet and reviewed versions remain preserved; `implementation-approval.json` and `review-decisions.json` record the later approval.

## Net difference

- Examples: 91 → 114 (10 science, 7 technology and 6 business additions).
- Discover: 79 → 82 permanent cards. Cards 80–82 cover pipeline inspection, business advice and accounting assurance. Fourteen existing occupations gain relevant company/example connections; earlier card numbers and shared links are unchanged.
- Artwork: 23 story images, 23 teaching diagrams and 3 Discover portraits. Originals, superseded versions and selected receipts are in `design/example-expansion-2026-10-21/generation-record.json`.
- Official identification logos: 23, sourced from employer websites. White marks use the existing dark plate.
- Approved shared role explanations and the Geoscience pathway refresh are included. Interpreted work remains distinct from verified job titles and vacancies. No new current-vacancy cards are asserted.

## Review locally

Use [Connections](http://localhost:3311/) or the individual pages below. The current parts layout is preserved. Story and teaching artwork retain full aspect ratio and the existing 680px desktop cap.

New Discover cards: [80 — Pipeline inspection technician](http://localhost:3311/discover?role=80&step=0), [81 — Business adviser](http://localhost:3311/discover?role=81&step=0), [82 — Assurance accountant](http://localhost:3311/discover?role=82&step=0).

## Evidence boundaries and explicit deferrals

- Keep Amazon's company connection to evidenced warehousing work; specific controls/maintenance occupations remain deferred.
- atVenu's unverified QA vacancy is not presented as an open job. No vacancy is inferred from an evergreen interest form or empty paid search result.
- McElhanney's Science 10 measurement connection remains cross-unit; no exact unit mapping is invented.
- Company-wide headcounts/headquarters remain unverified where the approved research did not establish them. Paid profile conflicts were not imported.
- The unrelated Wilder amendment and the 17 unselected candidates retain their previous decisions.

## Existing examples and paid-source use

The workflow now applies value-led paid checks to existing examples as well as new candidates. The 91-example opportunity queue is content/coverage triage, not 91 completed research refreshes. Prioritize concrete gaps, including E3's laboratory/Discover evidence and Providence's delivery mechanism, then rotate incomplete checks. New claims return as exact sourced amendments for review. The schedule and approval gates are unchanged.

## Data costs

The preceding full-draft research used US$0.0148 through Looot and 10 direct Firecrawl credits. Implementation added six native Firecrawl basic branding scrapes, each at **1 credit**: BGC, Trufla, Convverge, MNP, Precision and ATCO. Each recovered an official logo location after ordinary retrieval proved ineffective. An initial connector-validation rejection cost 0 and was corrected before execution; no unknown paid request was retried.

Current weekly totals: **US$0.0298 / US$10 Looot** (Firecrawl provider US$0.0200, CompanyEnrich US$0.0098) and **16 / 200 direct Firecrawl credits**. Both have zero outstanding reservations. Firecrawl balance verified at 852 credits after the six calls. The separate backfill remains 60 / 200. No top-ups or direct Apify calls. Image generation is separate; its billing is not reported by the image tool and is not included in these data-source totals.

## Verification

See `implementation-validation.json` for final check results and `implementation-evidence/` for desktop and phone screenshots. The visual pass corrected inaccurate equipment/process scenes, avoided unsupported numerical claims, and checked hands/props. Discover titles are placed wholly within the existing top cover before Reveal.

Presentation-only edits to internal draft language are recorded in `presentation-adjustments.json`. Scientific teaching sequences and model limits retain the approved wording.

## Example links

| Example | Area | Classroom question |
| --- | --- | --- |
| [Earthmaster Environmental](http://localhost:3311/examples/earthmaster-roadside-restoration) | Biology | How would you tell whether replacing lawn with native plants is helping an ecosystem? |
| [Thurber Engineering](http://localhost:3311/examples/thurber-testing-the-ground) | Physics | Why test the ground before deciding what a foundation can support? |
| [BGC Engineering](http://localhost:3311/examples/bgc-landfill-water-pathways) | Biology | How can a closed landfill keep affecting the water around it? |
| [McElhanney](http://localhost:3311/examples/mcelhanney-measuring-landscapes) | Physics | How can measurements turn a real landscape into a useful 3D map? |
| [ALS Canada — Calgary environmental laboratory](http://localhost:3311/examples/als-checking-trace-chemicals) | Chemistry | How can a laboratory distinguish a trace chemical from a misleading signal? |
| [InnoTech Alberta — Calgary research](http://localhost:3311/examples/innotech-identifying-carbon-materials) | Chemistry | How can scientists tell whether two carbon materials have different structures? |
| [Pure Technologies / Xylem](http://localhost:3311/examples/pure-technologies-listening-for-leaks) | Physics | How could listening inside a water pipe help locate a leak without digging it up? |
| [Calfrac Well Services](http://localhost:3311/examples/calfrac-fluid-test-conditions) | Chemistry | How would you test whether a fluid behaves differently under different conditions? |
| [Trican Well Service](http://localhost:3311/examples/trican-cement-barrier-testing) | Chemistry | How can you test whether a cement barrier will keep fluids separated? |
| [CES Energy Solutions](http://localhost:3311/examples/ces-fluid-formulation-evidence) | Chemistry | How can a small change in a formulation change how a fluid performs? |
| [Chata.ai](http://localhost:3311/examples/chata-questions-to-queries) | Technology | What must a computer understand before it can answer a question about a database? |
| [Aimsio](http://localhost:3311/examples/aimsio-field-ticket-to-invoice) | Technology | How can a field record become an invoice without being entered twice? |
| [atVenu](http://localhost:3311/examples/atvenu-concert-inventory) | Technology | How can a concert team know which shirt sizes are left at each stand? |
| [Trufla Technology](http://localhost:3311/examples/trufla-client-record-rules) | Technology | How can a self-service form give someone the right information without mixing up their records? |
| [Convverge](http://localhost:3311/examples/convverge-clinic-reporting-workflow) | Technology | How can a reporting portal collect the right records from the right people? |
| [Validere](http://localhost:3311/examples/validere-measurement-records) | Technology | Why must a measurement stay connected to its equipment, time and location? |
| [Amazon — Calgary YYC4](http://localhost:3311/examples/amazon-yyc4-robot-decisions) | Technology | How does a warehouse robot decide where to move a container next? |
| [ATB Financial — Calgary Entrepreneur Centre](http://localhost:3311/examples/atb-testing-business-ideas) | Business | What evidence would help decide whether a business idea can work? |
| [PrairieSky Royalty](http://localhost:3311/examples/prairiesky-royalty-revenue) | Business | How can a company earn revenue from resources without drilling the wells itself? |
| [Trail Appliances — Calgary](http://localhost:3311/examples/trail-appliances-customer-value) | Business | Why is selling an appliance only one part of delivering value to a customer? |
| [MNP — Calgary](http://localhost:3311/examples/mnp-financial-evidence) | Business | How can checking evidence make a set of financial statements more trustworthy? |
| [ATCO](http://localhost:3311/examples/atco-segment-comparisons) | Business | How can one company's total results hide differences between its businesses? |
| [Precision Drilling](http://localhost:3311/examples/precision-utilization-and-revenue) | Business | Why can more busy days change revenue even when a daily price barely changes? |
