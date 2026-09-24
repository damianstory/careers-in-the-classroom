# Agent workflows and freshness operating test

Draft, 24 September 2026. This is an executable pilot protocol, not an implemented or scheduled system. No background monitoring is currently running.

## Workflows

1. **Discovery:** Research organizations and role evidence across course topics. Track actual local presence separately from service area, represented members, and remote relevance.
2. **News discovery:** Check selected organization newsrooms, research institutions, and sector networks; ingest user-supplied links through the same process. Find the original announcement or paper, not just a repost. Retain publication date and event date separately.
3. **Evidence maintenance:** Recheck specific claims and sources, compare meaning rather than page timestamps, expire opportunities, and route conflicts to review.
4. **Curriculum matching:** Match supported facts to course topics, then adapt selection and explanation to teacher requests. Record mappings as editorial until validated; never infer teaching order.
5. **Delivery:** Return reviewed examples immediately; assemble a sourced adaptation where supported. Uncovered topics receive an honest partial result and optional follow-up. Fresh research is not automatically publication-ready.
6. **Monthly selection:** Choose relevant additions or meaningful changes, deduplicate syndicated stories, avoid repeats, and include teaching context. No news feed is required. No weak items added to meet a quota.

These are responsibilities, not a requirement for six separate models or services. Jev or another classifier could assist ranking; provider choice should follow evaluation of quality, cost, and latency.

## Minimal evidence record

Each claim needs: organization ID; claim text/type; source URL; supporting passage; source publication date if available; retrieval date; last successful check; geographic scope; evidence status; reviewer state; next check; and superseded/expired state. Preserve prior versions. A fetch date does not make an undated claim new.

Each news item additionally needs: event date; original source; announcement/early research/demonstrated result label; relevant course topics; why it helps teaching; what remains unknown; and which organization facts, if any, it changes. A news item does not automatically overwrite an organization profile.

## Initial operating rules to test

- Check time-sensitive opportunities daily while displayed and immediately before an edition; remove at the verified deadline. Never infer eligibility.
- Check role/project claims monthly and before using them in practitioner outreach. A historical posting may remain useful as role evidence but must not imply a current vacancy.
- Check durable organization descriptions every 90 days; check curriculum sources at term boundaries and when a change is announced.
- Run news discovery weekly during the pilot, with monthly delivery. This is proposed cadence, not a configured automation.
- If a source cannot be retrieved, retain the last successful check date. Retry within a bounded budget; do not relabel the claim as verified. Hold uncertain current-status claims for review.
- Review new examples and consequential changes initially. Move toward review by exception only after measured reliability, not on the strength of model confidence alone.
- Set per-run time, source-count, and spend caps before implementation; log actual consumption. Exhausting a cap produces partial coverage, not fabricated completion.

## Baseline and simulated refresh — one working session

Start with the three examples and two news items. Build a claim ledger and record preparation/review minutes. Have a reviewer check every factual claim and proposed course mapping.

On local test copies of source material, introduce the following changes. These are controlled fixtures, not edits to real sources:

| Case | Expected behavior |
|---|---|
| Role posting disappears | Keep only dated historical role evidence; remove any current-opening implication |
| Project launch moves into the future | Update status and date; never present planned capability as operational |
| An opportunity deadline passes | Remove it from actionable results and the draft digest |
| A company changes office location | Update local-presence claim; preserve national relevance where supported |
| Two stories repeat one announcement | One event in the digest, with original source preferred |
| A source changes only formatting | No new teacher notification |
| Research remains a preprint with unknown function | Preserve uncertainty; reject “proven treatment/tool” wording |
| Source fetch fails | Do not advance verification date; record failure and bounded retry |
| Organization submission conflicts with existing evidence | Queue review; preserve provenance rather than silently replacing facts |

## Real refresh — proposed four-week trial

Revisit the same sources weekly, logging meaningful changes, noise, failures, intervention time, and cost. Prepare one monthly digest draft against saved test teacher interests. Manually inspect every selected item before any authorized delivery. No-change runs should be recorded as no change; they should not manufacture news.

## Proposed acceptance criteria

- Every published factual claim has supporting evidence; mappings and pathway suggestions are identified as interpretations where appropriate.
- Every controlled case produces its expected state; zero false claims of an active opportunity, operational future capability, or confirmed speaker.
- Reviewed examples can be retrieved immediately; measure retrieval and fresh-research latency separately once a prototype exists. No latency has been measured yet.
- After initial setup, target at most 30 minutes of human maintenance per week for this tiny collection. Record new-content creation time separately so maintenance is not understated.
- Record cost per researched example, refresh, and usable digest item; set a larger pilot budget only after measuring these.
- Review factual accuracy and teacher usefulness separately. Automated source retrieval alone is not proof of either.

Passing fixtures demonstrates handling of known cases, not production reliability. A four-week trial is required to assess drift and actual maintenance; it has not been run. Expansion also requires repeat educator use and a concrete school or organization relationship outcome for TKS.
