# Local review — 19 October approved examples

The approved batch is implemented locally in the current parts/rail layout. No commit, push or deployment was performed. The original reviewed versions remain in `approved-copy-v1.json`; the user instruction and scope are in `implementation-approval.json`. Generated artwork is ready for human review on the site.

## Net difference

| Content | Before | Local version | Added |
| --- | ---: | ---: | ---: |
| Classroom examples | 46 | 61 | 15 |
| Discover occupation cards | 57 | 70 | 13 |
| Saved job examples | 17 | 21 | 4 |

The batch adds 13 detailed occupation profiles, 13 preparation routes, four extensions to existing routes, 28 company/role Discover connections, 15 story scenes, 15 teaching diagrams and 13 Discover portraits. Original identification graphics were added for all 15 organizations. The original 57 card numbers and URLs, 17 saved jobs and all existing pathway rationales are preserved. Existing occupations gain new company contexts instead of duplicate cards. New role search links and browsing categories are included.

## Review each company

Use the rail/Contents control to review the question, teaching story, work, ways in, organization and sources. Discover links open the reveal; select Guess to check the picture without its title.

| Local example | Discover cards | Approved new job card |
| --- | --- | --- |
| [Clynch Prosthetics & Orthotics](http://localhost:3311/examples/clynch-prosthetics) | [58](http://localhost:3311/discover?role=58&step=1), [59](http://localhost:3311/discover?role=59&step=1) | No new saved posting |
| [Westech Industrial](http://localhost:3311/examples/westech-industrial) | [13](http://localhost:3311/discover?role=13&step=1), [14](http://localhost:3311/discover?role=14&step=1) | No new saved posting |
| [Alberta Cheese Company / Franco’s (Gay Lea)](http://localhost:3311/examples/alberta-cheese) | [45](http://localhost:3311/discover?role=45&step=1), [12](http://localhost:3311/discover?role=12&step=1) | No new saved posting |
| [Mountain View Printing](http://localhost:3311/examples/mountain-view-printing) | [60](http://localhost:3311/discover?role=60&step=1), [61](http://localhost:3311/discover?role=61&step=1) | [Digital Press Operator](http://localhost:3311/examples/mountain-view-printing?role=work-printing-press&job=CGY-087-J1#who) |
| [Calgary Metal Recycling](http://localhost:3311/examples/calgary-metal-recycling) | [62](http://localhost:3311/discover?role=62&step=1), [17](http://localhost:3311/discover?role=17&step=1) | No new saved posting |
| [Aeromag — Calgary YYC station](http://localhost:3311/examples/aeromag-calgary) | [63](http://localhost:3311/discover?role=63&step=1) | [Seasonal Deicing Technician](http://localhost:3311/examples/aeromag-calgary?role=work-aircraft-deicing&job=CGY-089-J1#who) |
| [Lux Windows & Doors](http://localhost:3311/examples/lux-windows) | [64](http://localhost:3311/discover?role=64&step=1), [11](http://localhost:3311/discover?role=11&step=1) | No new saved posting |
| [MAGNA Engineering](http://localhost:3311/examples/magna-engineering) | [37](http://localhost:3311/discover?role=37&step=1), [28](http://localhost:3311/discover?role=28&step=1) | [Intermediate Stormwater Engineer](http://localhost:3311/examples/magna-engineering?role=work-water-resource-planning&job=CGY-091-J1#who) |
| [Canadian Blood Services — Calgary operations](http://localhost:3311/examples/canadian-blood-services-calgary) | [65](http://localhost:3311/discover?role=65&step=1), [66](http://localhost:3311/discover?role=66&step=1) | No new saved posting |
| [Enerflex](http://localhost:3311/examples/enerflex) | [10](http://localhost:3311/discover?role=10&step=1), [54](http://localhost:3311/discover?role=54&step=1) | No new saved posting |
| [Spartan Controls](http://localhost:3311/examples/spartan-controls) | [67](http://localhost:3311/discover?role=67&step=1), [13](http://localhost:3311/discover?role=13&step=1) | No new saved posting |
| [Canada Malting — Calgary malt house](http://localhost:3311/examples/canada-malting) | [08](http://localhost:3311/discover?role=08&step=1), [16](http://localhost:3311/discover?role=16&step=1) | No new saved posting |
| [PTW Energy Services — Calgary panel shop](http://localhost:3311/examples/ptw-panel-shop) | [68](http://localhost:3311/discover?role=68&step=1), [13](http://localhost:3311/discover?role=13&step=1), [12](http://localhost:3311/discover?role=12&step=1) | No new saved posting |
| [Marlow Design](http://localhost:3311/examples/marlow-design) | [69](http://localhost:3311/discover?role=69&step=1) | [Jewellery Designer (Full-Time)](http://localhost:3311/examples/marlow-design?role=work-jewellery-design&job=CGY-098-J1#who) |
| [ABC Bees / Apiaries and Bees for Communities](http://localhost:3311/examples/abc-bees) | [70](http://localhost:3311/discover?role=70&step=1) | No new saved posting |

## Source limits retained

- Westech and Marlow remain Science 10 inquiry examples without forced unit matches. Physics applications cite performance standards without relabelling them as the program of studies.
- Prosthetic fabrication and clinical certification, and laboratory assistant and medical laboratory technologist routes, remain distinct. BCIT’s closed 2026 intake is explicit; broader Canadian routes are identified by location.
- PTW’s panel-shop evidence is dated 2023. Lux’s factory city and Marlow’s casting location are not invented. No Calgary deicing recycling plant is implied.
- Canada Malting shows steeping, germination and kilning, not fermentation. Blood-component storage is differentiated. Managed honey-bee work is not claimed to improve native-pollinator conservation.
- All four original role pages were rechecked and their captured text was unchanged. Three retain a dated accepting-application invitation; MAGNA remains an employer role example with current availability unknown. Seniority and capture dates are preserved.

## Verification and artwork

214 unit tests, type check, lint and the production build passed. Across the production browser runs, 65 checks passed with 21 expected device-specific skips; no unresolved failures remain. The checks cover every new example on desktop and phone, projector/diagram rendering, Discover guessing/reveal and all 420 content states at three widths. Manual desktop/phone visual checks are in `output/playwright/oct19-*`. See `implementation-validation.json` for logs and the two resolved test-harness limits.

All 43 selected illustrations were visually checked. Five teaching images were corrected for scientific/source clarity; superseded originals and exact edit prompts are preserved. The [artwork record](../../../../design/example-expansion-2026-10-19/README.md) links the original files and contact sheets. People and equipment are fictional, and every image has appropriate alt text.

## Workflow and cost

The coverage registry now includes the 61 locally featured examples, with history preserved. The five held company proposals remain held. The separate five Monday maintenance job cards remain pending and were not added. No additional Looot or Apify calls were paid for during implementation: recurring Looot spending remains US$0.01 of the US$10 weekly cap, with no outstanding reservation. Artwork used the built-in image generator; it supplies no dollar receipt, so no image-generation dollar cost is inferred.

Next: review the local pages and artwork. Publication remains a separate authorized step.
