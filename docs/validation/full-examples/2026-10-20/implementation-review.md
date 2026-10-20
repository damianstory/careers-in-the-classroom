# October 20 implementation review

**Ready for local review; not committed, pushed or published.** The user approved all 30 draft version-1 examples and authorized resolving the three gaps, generating illustrations and implementing examples plus Discover. The original 34 reviewed files remain unchanged; the approval and amendments are recorded separately.

## Net difference

| Content | Before | Local review version | Change |
|---|---:|---:|---:|
| Company examples | 61 | 91 | +30 |
| Discover occupations | 70 | 79 | +9 |
| Role profiles | 73 | 82 | +9 |
| Learning pathways | 72 | 78 | +6 |

All 30 examples have organization profiles, sourced local connections, classroom stories, teaching explanations, role and pathway connections, and curriculum notes. Nine existing pathways gain relevant role connections. Seventeen existing Discover occupations gain company/example contexts; the nine new occupations use permanent numbers 71–79. Existing numbers and URLs are preserved.

The batch adds RNA delivery, crop traits, water testing, wildlife release decisions, biosand learning, sport physiology, airborne imaging, radio data, energy equipment, digital fabrication, computing, company data, retail, finance and business operations. Fourteen examples populate the five verified technology/business course anchors. Employer work areas are identified as interpreted functions; this batch does not invent vacancies or add job-posting cards.

## Three resolved gaps

- **Calgary Wildlife:** the organization's release-process account supports medical clearance, behavioural assessment and release conditions. The classroom exercise compares evidence and does not teach clinical decisions. [Original account](https://www.calgarywildlife.org/post/patient-release-process).
- **CAWST:** the readable CAWST-authored 2009 biosand manual supports layer order and flow. The teaching image shows the base outlet rising to standing-water height. Attribution is retained; the illustration is not a construction plan or a guarantee of safe drinking water. [Manual](https://sswm.info/sites/default/files/reference_attachments/CAWST%202009%20Biosand%20Filter%20Manual.pdf).
- **FROG3D / Streamline Automation:** the connection uses Science 10's general science-and-technology inquiry emphasis, printed page 9. No specific unit or CTS outcome is forced onto it. [Official curriculum](https://education.alberta.ca/media/159715/science10.pdf).

Evidence and amendments: [gap resolutions](implementation-evidence/gap-resolutions.json), [resolved implementation copy](implementation-evidence/resolved-drafts.json), [approval](implementation-evidence/approval.json).

## Artwork

- 30 company-story illustrations and 30 teaching illustrations.
- Nine new Discover occupation portraits, with title areas masked until reveal.
- 30 identification logos sourced from original organization assets or an attributed company profile; logos were not generated.

All editorial artwork uses the approved graphic-novel / limited-colour screenprint direction, with fictional people and generic equipment. Landscapes retain their aspect ratios, and teaching text remains live HTML. Desktop/phone and projector checks cover the current parts layout. Contact-sheet review led to corrections for CAWST filtration, passive airborne imaging, consistent pharmaceutical batches, comparable soil experiments, Canadian co-operative accounting and energy-sector records. Image provenance and exact prompts are in `design/example-expansion-2026-10-20/`.

## Verification

- 257 unit tests passed.
- 82 focused desktop/phone end-to-end cases passed across the run and targeted rerun: all 30 new examples, all nine new Discover occupations, and technology/business course flows. Two initial test-expectation failures were corrected and rerun successfully.
- Production build, TypeScript and ESLint checks passed.
- All 34 original reviewed copy files retain their hashes. The ten held candidates and all other registry records were preserved. Pre-existing UI edits were preserved.
- BrowserOS could not create a window because no profile was available; visual and interaction checks used the project's Playwright environment. This verifies the local build, not production.

Screenshots: [desktop Discover](implementation-evidence/desktop-new-discover.png), [phone Discover](implementation-evidence/phone-new-discover.png), [phone course](implementation-evidence/phone-course.png).

## Spending and release status

This implementation made no paid Looot or direct Apify calls. The shared Looot ledger remains **US$0.015 of US$10**, with no outstanding exposure. Illustrations used the built-in image generation tool, which does not return a dollar charge; no external image API was used.

All 30 final-copy approvals are recorded. The site and new artwork still await the user's local review before any push or deployment. The existing daily research schedule and budget were not changed.

## Review the new examples

Start at [local Connections](http://localhost:3311/connections) or [Discover](http://localhost:3311/discover). The local server must be running.

| Organization | Example | Discover coverage |
|---|---|---|
| Providence Therapeutics | [How can an RNA message be delivered without being destroyed first?](http://localhost:3311/examples/providence-rna-delivery) | 50 (existing), 16 (existing) |
| Nimble Science | [Why might a stool sample miss what is happening in the small intestine?](http://localhost:3311/examples/nimble-small-intestine-sampling) | 10 (existing), 16 (existing) |
| AgGene | [How can a plant trait help a crop cope with heat or drought?](http://localhost:3311/examples/aggene-crop-traits) | None (new), 16 (existing) |
| AGAT Laboratories | [How do you know a water-test result can be trusted?](http://localhost:3311/examples/agat-trustworthy-water-results) | 16 (existing), 12 (existing) |
| Solvet / Alberta Veterinary Laboratories | [How can an animal-health product batch be made consistent?](http://localhost:3311/examples/solvet-consistent-batches) | 11 (existing), 12 (existing) |
| Calgary Wildlife Rehabilitation Society | [What evidence shows that an injured wild animal is ready for release?](http://localhost:3311/examples/calgary-wildlife-release-evidence) | 05 (existing) |
| CAWST | [How can layers of sand and living organisms help treat water?](http://localhost:3311/examples/cawst-biosand-learning) | None (new) |
| Canadian Sport Institute Alberta | [How can measurements help decide whether a training plan is working?](http://localhost:3311/examples/csi-alberta-training-evidence) | None (new) |
| ITRES Research | [What can extra colours reveal that an ordinary photograph cannot?](http://localhost:3311/examples/itres-beyond-visible-colours) | 31 (existing), 25 (existing) |
| Microhard Systems | [How do measurements get back from equipment far from a wired network?](http://localhost:3311/examples/microhard-remote-radio-data) | 31 (existing), 14 (existing) |
| SFC Energy Canada / former Simark Controls | [How can a fuel cell keep a remote battery charged?](http://localhost:3311/examples/sfc-fuel-cell-battery-support) | 13 (existing), 56 (existing) |
| SkyFire Energy | [Why can identical solar panels produce different amounts of electricity?](http://localhost:3311/examples/skyfire-solar-output) | 68 (existing), 56 (existing) |
| Westpower | [Why can a pump work well at one flow rate and poorly at another?](http://localhost:3311/examples/westpower-pump-performance) | 54 (existing), 10 (existing) |
| Engineered Power — Lithion Battery | [How can a battery keep working under heat and vibration?](http://localhost:3311/examples/engineered-power-demanding-batteries) | 15 (existing), 12 (existing) |
| Streamline Automation / FROG3D | [How can a digital shape become a physical object without losing its dimensions?](http://localhost:3311/examples/frog3d-digital-to-physical) | 47 (existing), 10 (existing) |
| Calgary Horticultural Society | [How does soil change the amount of water a garden needs?](http://localhost:3311/examples/calhort-soil-and-water) | None (new) |
| EZ-Robot | [How can a robot use a sensor reading to choose its next move?](http://localhost:3311/examples/ez-robot-sensor-decisions) | 03 (existing), 13 (existing) |
| Clio | [How can software keep the right client, matter and document connected?](http://localhost:3311/examples/clio-linked-client-records) | 03 (existing) |
| Absorb Software | [How can software decide which learning task someone should see next?](http://localhost:3311/examples/absorb-learning-rules) | 03 (existing) |
| Userful | [How do the right signals reach the right control-room screen?](http://localhost:3311/examples/userful-visual-information-routing) | 03 (existing), 14 (existing) |
| Peloton | [How can field measurements and office records stay consistent?](http://localhost:3311/examples/peloton-consistent-field-records) | 03 (existing), 14 (existing) |
| Arcobi (formerly Arcus Power) | [How do you compare electricity prices recorded at different times and places?](http://localhost:3311/examples/arcobi-comparing-power-data) | 03 (existing) |
| Athennian | [How can changing one company record update the relationships that depend on it?](http://localhost:3311/examples/athennian-company-relationships) | 03 (existing) |
| Calgary Co-op | [How can a member-owned retailer decide how much value to return to members?](http://localhost:3311/examples/calgary-coop-member-value) | None (new) |
| Olympia Financial Group | [Why might revenue and profit change at different rates?](http://localhost:3311/examples/olympia-revenue-and-profit) | None (new) |
| Boardwalk REIT | [How do occupancy, rent and operating costs change a housing business?](http://localhost:3311/examples/boardwalk-housing-operating-costs) | None (new) |
| Calgary Stampede | [How can a major event serve visitors and remain financially sustainable?](http://localhost:3311/examples/stampede-event-sustainability) | None (new) |
| Monogram Coffee | [Why offer a subscription as well as a single purchase?](http://localhost:3311/examples/monogram-coffee-subscriptions) | None (new) |
| Good Earth Coffeehouse | [What does a franchise partner get beyond a brand name?](http://localhost:3311/examples/good-earth-franchise-support) | None (new) |
| Eight Ounce Coffee | [Why would a business sell to both cafés and individual customers?](http://localhost:3311/examples/eight-ounce-wholesale-retail) | None (new), 17 (existing) |

## New Discover occupations

| Number | Occupation |
|---|---|
| 71 | [Plant biotechnology scientist](http://localhost:3311/discover?role=71&step=0) |
| 72 | [Science educator](http://localhost:3311/discover?role=72&step=0) |
| 73 | [Sport physiologist](http://localhost:3311/discover?role=73&step=0) |
| 74 | [Retail operations coordinator](http://localhost:3311/discover?role=74&step=0) |
| 75 | [Financial analyst](http://localhost:3311/discover?role=75&step=0) |
| 76 | [Event operations coordinator](http://localhost:3311/discover?role=76&step=0) |
| 77 | [Ecommerce operations coordinator](http://localhost:3311/discover?role=77&step=0) |
| 78 | [Franchise support coordinator](http://localhost:3311/discover?role=78&step=0) |
| 79 | [Procurement specialist](http://localhost:3311/discover?role=79&step=0) |
