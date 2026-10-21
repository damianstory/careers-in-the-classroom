# Approved Alexandria amendments — implementation

20 October 2026. User approved ALX-BF-01 through ALX-BF-08, version 1, and explicitly requested commit and push to main. The original reviewed wording remains in `amendments-v1.json`; `decisions.json` records approval separately.

## Applied

- ISL, Spartan Controls and SkyFire: expanded company descriptions with the exact approved project context and citations.
- Botaneco, Nanalysis, Nimble Science and E3 Lithium: added the exact approved technical/study/process context to the specified lesson steps with dated source records.
- WaterSMART: replaced the local-connection copy and repaired both rendered team-source URLs. The former source was https://watersmartsolutions.ca/our-team/, checked 17 October 2026. It now resolves through https://www.hazenandsawyer.com/ca/people/claire-jackson, checked 20 October 2026. The City of Calgary project source remains. This note preserves the superseded URL as provenance.

No new clinical/regulatory claims, live-job claims, pathway qualifications, curriculum claims or artwork were added. The four prior evidence follow-ups remain on hold. Nimble's Mitacs source remains a historical research lead, not a current internship or evidence for the participant study.

## Discover

Before/after: 91 examples and 79 Discover cards. Existing company-linked occupations retain their numbers, artwork, clues, pathways and URLs. Their company descriptions and source evidence use the shared updated records. No new occupations were approved in this amendment packet.

Verification exposed one pre-existing exception in E3's details: `laboratory-analysis` is supported through saved jobs, lacks an organization-role evidence link, and is not represented by the current Discover builder. This remains an explicit follow-up for a separately reviewed link/alias decision; it is not claimed as newly integrated. E3's process engineering and operations cards remain connected. See `implementation-verification.json` for each amended example's role/card mapping.

## Validation

- All eight fields equal their exact approved version-1 copy; every cited source ID resolves.
- 257 unit tests across 17 files passed, including content/source and Discover coverage checks.
- Production build passed, including TypeScript checking.
- Browser checks confirmed all eight amended passages visible under Company or How it works in the local production build.
- ISL Company view at 390 × 844 had no horizontal overflow.
- No paid collection calls during implementation. Backfill remains 60/200 Firecrawl credits.

This report records local implementation and verification. Git remote verification is reported in the conversation; a successful push alone does not establish Vercel deployment success.
