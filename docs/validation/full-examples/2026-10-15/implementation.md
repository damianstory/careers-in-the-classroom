# Calgary expansion implementation — 15 October 2026

Damian approved all 15 full-copy drafts and authorized resolving the curriculum/Calgary gaps and implementing illustrations. All 15 are now integrated in the local application. No deployment, commit or push was performed.

## Net difference

| Content | Before | Added | Result |
| --- | --- | --- | --- |
| Featured company examples | 3 | 15 | 18 |
| New organization profiles | — | 15 | All new examples have Company content |
| Company-to-role connections | — | 45 | Three per new example, using 22 shared role profiles |
| Learning routes | — | 15 distinct programs | 45 company-to-pathway connections |
| Posting examples | Existing approved collection | 2 | Eguana historical PDF and FTG/FLYHT employer-page example; neither asserted open |
| Illustrations | Existing three examples | 30 | 15 editorial scenes and 15 static teaching diagrams |

Companies: Botaneco, Nanalysis, Exergy Solutions, Livestock Water Recycling, Avmax, Northern RNA, AERIUM Analytics, GeologicAI, Tangent Design Engineering, Foremost, Carbonova, Summit Lithium Technologies, VEERUM, Eguana Technologies and FTG Aerospace Calgary.

## Resolved gates

- Curriculum: source-checked course/unit fits are recorded in `curriculum-resolution.json`. These are editorial teaching connections, not claims of curriculum endorsement or exact outcome equivalence. VEERUM is a Science 10 cross-unit inquiry/measurement example; it is not assigned an unsupported subject unit. NMR is explicitly an extension beyond required course treatment.
- Calgary: Foremost's rendered Calgary North facility page confirms multidisciplinary engineering and manufacturing capabilities including off-road vehicles. The copy does not assign a specific vehicle model to that facility. Other examples retain the distinction between Calgary offices/R&D and deployments or manufacturing elsewhere.
- Role evidence: related work is labelled separately from documented employer work. FTG's meteorology connection is downstream work, not a claim that FTG employs meteorologists. Shared learning pathways display only rationales for roles in the current example.
- Images: all 30 assets were visually inspected, compressed and saved locally. Prompts and superseded generations are preserved under `design/example-expansion-2026-10-15/`. AERIUM stage 3 follows Damian's correction: one visible arm holding binoculars and a tally thought bubble; the stray hand and clipboard are removed. Charts are illustrative, not measured company results.
- Approvals: full-copy decisions and local implementation status were reconciled in the dated discovery packet and cumulative company-discovery ledger. Deferred proposals remain unchanged.

## Verification

- Lint, TypeScript and optimized production build passed.
- 114 unit tests passed, including all 15 approved slugs, local artwork, role-to-pathway coverage and non-open historical job status.
- Production browser checks passed for all 15 new pages at 1440px and 390px (30 page/viewport combinations), with Company, Roles and Pathways sections, decoded images and no horizontal overflow.
- All 45 new role selections expose relevant pathways. No browser page errors were recorded.
- Representative desktop/phone screenshots and machine-readable results are in `implementation-evidence/`. The browser script is preserved there and runs from the repository root after a production build.

## Cost and boundaries

This implementation/gap-resolution pass used free source access and no paid Looot or direct Apify calls: additional research-provider cost $0. The preceding research packet recorded $0.025 Looot usage against the shared $10 weekly cap. Image-generation dollar pricing is not exposed by the generation tool and is not included in that research-provider figure.

No new live-vacancy claims, unsupported company logos, invented employer hiring requirements, or automatic publication were added. The current application contains the changes locally; production publication remains separate.
