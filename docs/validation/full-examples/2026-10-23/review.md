# 19 approved companies — local integration

23 October 2026. All 19 candidates scoring 8 or higher in the 22 October screening packet are integrated in the local CitC app. The public site has not been deployed.

## Authorization and scope

The user instructed: “All right, let’s start the process of adding them to the site. Assume that they’re all approved.” This authorizes the full research and implementation work captured here; it is not a record of the user separately reviewing every new sentence or illustration. See [authorization.json](authorization.json).

The original dated screening packet remains unchanged. The cumulative company ledger marks these 19 as implemented locally. Its other 227 company records, including the 21 held candidates from the screening batch, are unchanged. Prior uncommitted implementation work is preserved.

## Integrated content

| Item | Before | After |
|---|---:|---:|
| Classroom examples | 114 | 133 |
| Role profiles | 85 | 86 |
| Learning pathways | 79 | 81 |
| Discover cards | 82 | 83 |

Each new company has its own sourced example, classroom activity, curriculum connection, organization record, original identification logo, story illustration and teaching schematic. There are 38 landscape illustrations and one new portrait. No new saved job vacancy is asserted.

Final subject allocation is 7 science examples, 7 technology examples and 5 business examples. Spark’s robotics example is placed in Technology after its CSE1240 connection was researched; this differs from its provisional Science screening label.

| Company | Full example | Discover cards |
|---|---|---|
| BioAro | [How does a genomics laboratory check whether a result can be trusted?](drafts/bioaro-checking-genomic-results.md) | #16 Laboratory technician |
| NanosTech | [How can a catalyst change the route from a raw material to a useful product?](drafts/nanostech-catalyst-pathways.md) | #07 Process Engineer, #16 Laboratory technician |
| EPT Clean Oil | [What can an oil sample tell us about a machine before it fails?](drafts/ept-oil-condition-evidence.md) | #16 Laboratory technician |
| OptiSeis Solutions | [How can you collect useful seismic information while disturbing less land?](drafts/optiseis-survey-tradeoffs.md) | #83 Geophysicist |
| Absolute Imaging | [How do you recover a useful underground signal from noisy measurements?](drafts/absolute-imaging-signal-and-noise.md) | #03 Software Developer, #83 Geophysicist |
| Allnorth — Calgary operations | [How does a sensor reading become a control decision in an industrial system?](drafts/allnorth-sensor-to-control.md) | #13 Instrumentation technician |
| TELUS Spark Science Centre | [How can one robot arm create different experiences of motion?](drafts/spark-programming-motion.md) | #72 Science educator |
| OzoneBio | [How can wood waste become a starting material for making nylon?](drafts/ozonebio-wood-to-materials.md) | #07 Process Engineer, #16 Laboratory technician |
| Launchcode | [How can an app turn a messy scheduling problem into clear decisions?](drafts/launchcode-scheduling-rules.md) | #03 Software Developer |
| Dakota Analytics | [Why can joining two useful datasets still produce a wrong answer?](drafts/dakota-checking-data-joins.md) | #03 Software Developer |
| VistaVu Solutions | [How can an order, inventory record and invoice stay connected?](drafts/vistavu-order-records.md) | #03 Software Developer, #14 Technical support specialist |
| Robots & Pencils | [How does a team decide whether an app solves the problem it was built for?](drafts/robots-pencils-testing-user-needs.md) | #03 Software Developer |
| Vog by Novus Tech Group | [How can an event app help a visitor choose what to do next?](drafts/vog-event-app-decisions.md) | #03 Software Developer |
| StellarAlgo | [How can a team recognize the same fan across different ticket records?](drafts/stellaralgo-fan-records.md) | #03 Software Developer |
| Made by Marcus | [When would a seasonal shop be a better choice than a year-round location?](drafts/made-by-marcus-seasonal-value.md) | #74 Retail operations coordinator |
| Calgary Farmers' Market | [How can a market choose a mix of vendors that gives people a reason to return?](drafts/calgary-market-vendor-mix.md) | #74 Retail operations coordinator |
| Crave Cupcakes | [When does adding a cafe strengthen a bakery's customer value?](drafts/crave-cafe-customer-value.md) | #41 Production baker, #74 Retail operations coordinator |
| FYidoctors — Calgary clinics | [How can a clinic organize a service around different patient needs?](drafts/fyidoctors-service-coordination.md) | #19 Medical office assistant |
| PBA Group | [When might an empty office building become a useful hotel?](drafts/pba-office-to-hotel.md) | #81 Business adviser |

Discover #83 adds Geophysicist, anchored to OptiSeis, with Absolute Imaging as another related example. All prior card numbers and selections remain unchanged. Every new organization-role connection has exactly one card context and a supported pathway. No work area is deferred. Exact mappings and overlapping subject counts are in [integration.json](integration.json).

## Evidence decisions

- Clinical laboratory examples use fictional data and explicitly distinguish introductory laboratory preparation from qualification for the senior or regulated role.
- Company-wide capabilities are not automatically attributed to a Calgary project or facility.
- Spark is the operator and educator; BEC Robotics is credited with making the ride. Its workshop source is a past event.
- OzoneBio’s current published pathway concerns lignin-derived material, catalytic processing and adipic acid for nylon. No unsupported biodegradation or measured emissions claim is included.
- StellarAlgo’s Flames case is dated 2021–22, reported in 2022. Synthetic purchaser records do not stand for all attendees.
- Vog’s acquisition by Novus is explicit. The record does not assume the same legal entity or team continued unchanged.
- Market vendors are separate businesses. FYidoctors’ example concerns documented clinic services, not an assumed Calgary lens factory.
- Allnorth uses an explicit Science 10 cross-unit measurement connection, without inventing an exact outcome.

Original-page captures, URLs, dates and hashes are recorded in [source-manifest.json](source-manifest.json). Pages retrieved through web after a blocked direct request are separately identified in [web-source-notes.json](web-source-notes.json). Previously captured official curriculum documents were hash-checked; original source-check dates were retained, rather than claiming a new successful network fetch. See [curriculum-sources.json](curriculum-sources.json). No paid research or contact-enrichment service was used. Image-generation charges were not exposed by the tool.

## Artwork and logos

See [asset provenance](../../../../design/example-expansion-2026-10-23/README.md), [generation receipts](../../../../design/example-expansion-2026-10-23/generation-record.json) and [logo records](logo-records.json). All artwork depicts fictional people and generic equipment. No green caption strips were added; live teaching text provides the explanations.

The visual review corrected Made by Marcus’s initially ambiguous winter-workshop imagery to show ice-cream making, and replaced OptiSeis’s initial marine-acquisition depiction with a land-survey comparison. All final illustrations were inspected. White original logos use dark plates. StellarAlgo’s original historical wordmark was extracted from its own press-release PDF because its current homepage was inaccessible; it is not claimed to be the latest brand mark.

## Validation

All 305 unit tests (19 files), type checking, lint and the production build passed. All 78 scoped browser tests passed at 1440×900 and 390×844. They exercise every new example’s sections, teaching diagrams and desktop projector; story/logo loading; no horizontal overflow or off-origin requests; and Discover #83’s guess/reveal and supported pathway. Desktop and phone screenshots were visually reviewed. Detailed results are in [validation.json](validation.json) and implementation-evidence/.

## Publication

Local implementation only. No commit, push, PR or deployment was performed. Existing dirty work predating this batch remains in the checkout.
