# Discover accompanies each classroom example

Discover is the classroom occupation-guessing experience, not the daily company-discovery research process. Include it in full-example research, review and authorized implementation. Company screening still produces proposals, not automatic cards or publications.

Read the application's current Discover schema and builder alongside examples, organization-role evidence and learning pathways. Currently these are `src/content/discover.ts`, `src/lib/discover-cards.ts`, `src/lib/discover.ts` and `src/app/discover/`. Do not assume adding a role elsewhere adds it to Discover: the original nine cards are explicitly selected.

## Research and review

- Reconcile every featured example and its related work against Discover. Distinguish a distinct kind of work from another company doing similar work. Shared occupations can link to multiple examples without creating repetitive guessing cards. Resolve equivalent role IDs deliberately; do not merge merely because names resemble each other.
- Each full-example packet includes a Discover section: existing card to extend, proposed new card, or explicit deferral with a reason and next action. For each new card propose the occupation title, clue that does not reveal the answer, exact organization/example/role link, sourced concrete tasks, classroom connection, an appropriate supported pathway and rationale, optional saved job and status, and an illustration brief/alt text. Preserve evidence distinctions; an inferred work area is not a confirmed employee title. A live vacancy is not required.
- Use approved source-backed work and existing role/pathway records wherever suitable. Seek additional sources only for actual gaps; the same free-first and shared Looot budget rules apply.
- Make the full example and Discover proposal reviewable together, with stable IDs/versions and user decisions. Preserve prior approved copy and unchanged holds. Follow explicit implementation authorization in the conversation; do not silently treat proposal approval as approval of unseen card copy or artwork.

## Authorized implementation

Include the example, Discover copy, eligible role/pathway links, artwork and review records in the same implementation batch. Give existing Discover cards additional example connections when the work overlaps; add a new card for a distinct occupation with adequate evidence. If a card is deferred, record why, the missing requirement and the next action. Report partial coverage as partial.

Preserve existing opaque card numbers and shared URLs; never renumber 01–09. Allocate permanent new numbers without relying on collection order. The current guessing state is keyed by role ID, so repeated cards for the same role require an explicit identity change; avoid duplicate role IDs in a deck. Review equivalent IDs before expanding the deck.

Follow the repo's image direction and Discover's actual portrait/guess/reveal presentation. Each picture must depict that card's work and its clue, and not reveal the answer before reveal. Do not stretch/crop a landscape company scene into a portrait or reuse it for a different occupation without visual review. Generic fictional people/equipment are not proof of actual employees or facilities. Generate appropriate artwork when needed; retain exact prompts, provenance and descriptive alt text. Update the job-empty state truthfully where no verified saved posting exists.

Run `npm test` before completing the batch. The Discover coverage test requires every featured example and company-linked role to appear exactly once in the deck (including explicit role aliases); a silently omitted new role must fail validation. Validate source/role/pathway/asset links, unique persistent numbers, subject counts, URL state, no-repeat rounds and legacy shared links. Check desktop, mobile and projector readability, guess/reveal image masking, image failures and the larger deck's loading behaviour. Read checks from the current collection rather than freezing the count at nine. Full-suite loops may grow with the deck; retain meaningful coverage.

The batch report includes before/after Discover card counts, newly represented work, existing cards extended, example coverage and explicit deferrals. A batch is not described as fully integrated while Discover is silently omitted. Release follows the user's actual approval.
