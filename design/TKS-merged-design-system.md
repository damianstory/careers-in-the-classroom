# TKS Life × TKS Brand — Merged Design System

Design tokens for the High Agency Fund site. Built from three sources:

1. **TKS Life, measured** (`https://www.tks.life/`) — read from the live logged-in app on 2026-09-01
   with `designlang` v12.21.0. Pages read: `/profile`, `/explore`, `/braindates`, `/playbooks`.
   Raw extraction: `extract-TKS-Life-DESIGN.md`.
2. **TKS Life, official** — the design principles doc from the TKS Life platform developers,
   received 2026-09-01. Kept verbatim as `official-TKS-Life-DESIGN.md`.
3. **TKS brand guidelines** — the official `tks-brand` skill.

Precedence when they disagree: **brand guidelines win**, then the official TKS Life doc, then the
measurement. Every conflict is listed below with the reason.

**Revision 2 (2026-09-01):** reconciled against the official TKS Life doc. Section 14 lists what
changed. Short version: nothing major. The measurement was right about the things that matter,
missed a few tokens that never appeared on the pages read, and the official doc confirmed two
decisions this document had already made.

---

## 1. What was measured

The app scored **grade A**, WCAG **100%** (zero failing contrast pairs), 18 colours, 1 font family,
9 type sizes. Stack is **shadcn/ui on Tailwind**, light-only. Material reads **flat**.

Section roles found on `/profile`, in reading order:

`nav → testimonial ×3 → content → feature-grid → hero → testimonials → content ×3 → cta`

---

## 2. Conflicts and how they resolve

### 2.1 Font — Geist vs PP Neue Montreal

TKS Life uses **Geist** and nothing else. The official doc confirms it: "Geist is the product
typeface." The brand guidelines name **PP Neue Montreal** as the workhorse and warn against
substituting lookalike fonts.

**Resolution:** split by job.

- **Display and headings** → PP Neue Montreal. This is the brand voice on the page.
- **UI and body** → Geist. TKS Life is a shipped TKS product and set this precedent for product UI.

This is the one judgment call in this document. If you want a single font instead, use
PP Neue Montreal everywhere and drop Geist. Say the word and I will rewrite the stacks.

### 2.2 Shadows — soft depth vs flat

Measured: TKS Life uses large soft shadows on some cards, for example `0 18px 44px rgba(20, 38, 25, 0.2)`.
Official doc: "build hierarchy with spacing, type, hairline borders, and gentle tint changes
**before** adding shadow"; "avoid decorative gradients, heavy shadows"; "add stronger shadow only
for hover, overlays, or elevated focus." Brand: **flat only, no drop shadows**, as an explicit rule.

**Resolution:** brand wins, and the official doc mostly agrees. Surfaces are flat at rest: border
plus a slight surface shift. For overlays and dialogs, use what the official doc prescribes, a
lightly blurred, subdued backdrop. That gives depth without a drop shadow. The measured shadow
values stay in the appendix for reference only. Do not ship them.

### 2.3 Purple `#261c45`

The measurement found a deep purple-navy `#261c45` used for brand text on the login and profile
pages. It is not in the TKS palette. **The official TKS Life palette does not list it either.**
It is most likely a legacy or component-local value, not part of the design language.

**Resolution:** drop it. Confirmed by both the brand guidelines and the official doc.

### 2.4 Two greens one step apart

| Source | Deep green |
|---|---|
| Measured and official TKS Life | `#357636` |
| Brand guidelines (green shade 2) | `#367533` |

They are imperceptibly different. **Resolution:** use the brand value `#367533`. If this site
ever shares components with TKS Life, switching to `#357636` costs nothing.

### 2.5 What already agreed

| TKS Life | TKS brand | Gap |
|---|---|---|
| `#231F20` ink | `#231F20` ink | Identical |
| `#51B04C` action green (official doc) | `#51B04C` primary green | Identical |
| `#357636` deep green | `#367533` green shade 2 | Imperceptible |

The app is sitting on the TKS green ramp. The merge is a nudge, not a rebuild.

---

## 3. Colour

### Brand ramp (authoritative)

| Token | Hex | Use for |
|---|---|---|
| `green-tint-1` | `#C5E5C3` | Subtle backgrounds, borders, pixel-motif blocks |
| `green-tint-2` | `#A8D8A6` | Backgrounds, secondary fills |
| `green-tint-3` | `#8BCA88` | Accents, motif blocks |
| `green-tint-4` | `#6EBD6A` | Accents |
| `green` | `#51B04C` | **The brand colour.** Primary actions, progress, focus rings, links, success |
| `green-shade-1` | `#44933F` | Hover states, secondary emphasis |
| `green-shade-2` | `#367533` | Green text, active labels, accent body copy |
| `green-shade-3` | `#295826` | Headings on light, table header fills |
| `green-shade-4` | `#1B3B19` | Dark text accents, dark backgrounds |
| `ink` | `#231F20` | Primary text, high-contrast actions. Never `#000000` |
| `white` | `#FFFFFF` | Surfaces, text on dark fills |

### App roles (structure from TKS Life, values reconciled)

| Role | Hex | Source and note |
|---|---|---|
| `bg` | `#FFFFFF` | Surface: cards, forms, primary workspace |
| `bg-warm` | `#FAF9F7` | Warm canvas: alternate page and section backgrounds. Carries the app's feel |
| `bg-subtle` | `#F9FAFB` | Measured; cool grey step. Use sparingly |
| `bg-accent` | `#F2F8F1` | **Official green wash.** Selected states, supportive callouts, soft section backgrounds |
| `bg-accent-strong` | `#E8F5E7` | Brand derived tint. Alternating rows, pill fills, where `#F2F8F1` is too faint |
| `text` | `#231F20` | Ink |
| `text-body` | `#514D4E` | **Official.** Descriptions and supporting copy |
| `text-muted` | `#7C7879` | Metadata, placeholders, secondary icons |
| `text-subtle` | `#B8BCBA` | Measured; disabled and tertiary |
| `text-accent` | `#367533` | Green text, links, active labels |
| `border` | `#E4E2E2` | Cards, dividers, quiet structure |
| `border-green` | `#CFE3CC` | **Official.** Soft action and input boundaries, focus adjacent |
| `destructive` | `#DC2626` | **Official, semantic only.** Errors and destructive actions. The one colour outside the brand ramp; permitted because errors must not be green |

Rules from the official doc, kept: green means momentum. Do not flood a screen with it. Keep
destructive, warning, and informational colours semantically distinct. Never communicate status
through colour alone.

Contrast rules: white or `#C5E5C3` text on `#295826` / `#1B3B19`. Ink text on white or light tints.
Never primary green text on a light green fill.

---

## 4. Typography

### Stacks

```css
--font-display: "PP Neue Montreal", "Helvetica Neue", Arial, sans-serif;
--font-ui: "Geist", "PP Neue Montreal", "Helvetica Neue", Arial, sans-serif;
```

For anything leaving TKS as an editable file, swap PP Neue Montreal for Arial.

### Scale

| Token | Size | Weight | Line-height | Role |
|---|---|---|---|---|
| `display` | 72px | 500 | 72px (1.0) | Hero headline |
| `h1` | 36px | 600 | 44px | Page title |
| `h2` | 30px | 600 | 36px | Section head |
| `h3` | 20px | 600 | 28px | Subsection |
| `h4` | 18px | 600 | 28px | Card title |
| `body` | 16px | 400 | 24px | Default body |
| `body-sm` | 14px | 400 | 20px | Dense UI, table cells |
| `caption` | 13px | 500 | 18px | Metadata. Official floor: 12 to 13px, never smaller for essential info |
| `micro` | 12px | 500 | 16px | Badges, timestamps only |

Rules from the official doc, kept:

- Sentence case for headings, labels, and actions.
- Headings compact, semibold, plainly worded. Type creates hierarchy before boxes do.
- Regular, medium, semibold. Bold signals real emphasis.
- **Eyebrow labels:** uppercase with tracking, sparingly, to orient a section. Never to carry a message.
- Keep paragraphs reasonably narrow, especially in dialogs and instructional flows.

The display line-height of exactly 1.0 is measured from the app. Keep it.

---

## 5. Spacing

**8px rhythm, 4px adjustments for compact relationships.** (Official doc. The measurement's
"base 4" was the same thing seen from below.)

```
4  8  12  16  24  32  48  56  64  80  120
```

Section rhythm on `/profile` runs `48 / 56 / 64 / 80 / 120`. Component-internal spacing runs
`24 / 32 / 48`. Group related things closely; separate changes in meaning generously.

**Page spine:** a stable maximum content width. Do not stretch content across large displays.

Whitespace is part of the brand. Do not fill it.

---

## 6. Shape

| Token | Radius | Use for |
|---|---|---|
| `radius-sm` | 8px | Inputs and compact controls. (Official. Measured 6px was a legacy value) |
| `radius-md` | 12px | Buttons, dropdowns, small cards |
| `radius-lg` | 16px | Cards and contained sections |
| `radius-xl` | 22px | Feature panels, hero blocks |
| `radius-2xl` | 28px | Prominent dialogs and special moments |
| `radius-full` | 9999px | Tags, statuses, avatars, compact toggles |

Rounded corners are part of the voice, but not every element should become a floating pill.

---

## 7. Depth

**Flat at rest. No drop shadows, no gradients.** Brand rule, and the official doc's default.

Build depth with these, in order of strength:

1. Background step — `#FFFFFF` → `#FAF9F7` → `#F2F8F1`
2. A 0.5 to 1px border in `#E4E2E2` (or `#CFE3CC` for soft action boundaries)
3. A green-ramp fill for the element that should sit "on top"
4. **Dialogs and overlays:** a lightly blurred, subdued backdrop under a bright rounded surface

---

## 8. Motion

Measured from the live app, matching the official doc's guidance.

```css
--duration-fast: 150ms;   /* everyday feedback: colour, opacity, position */
--duration-slow: 500ms;   /* entrances and meaningful moments */
--ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
--ease-out:      cubic-bezier(0, 0, 0.2, 1);
```

- Gentle spring or bounce only for celebrations. Keep celebrations proportional.
- No perpetual animation unless it conveys an active state.
- Keep layout shifts small and predictable. Respect `prefers-reduced-motion`.
- If removing an animation makes an interaction harder to understand, keep it. If it only makes
  the interface busier, remove it.

---

## 9. Components

Measured anatomy from `/profile`: 39 buttons (outline variant, sizes `md` and `xs`), 5 cards
(size `lg`), plus navigation, dropdowns, badges, avatars and tooltips. Library is shadcn/ui.

**Buttons** — one visually dominant next action per view. Primary is **ink or action green
according to context** (official doc). Secondary actions are outlined, neutral, or text. Destructive
actions sit away from the primary path and require confirmation. Hover on green goes to `#44933F`.

**Cards** — one coherent object or decision per card. `radius-lg`, white or `#FAF9F7` fill,
1px `#E4E2E2` border, no shadow. Full card clickable only when it has one destination. No cards
inside cards.

**Forms** — labels above fields; helper and error text close to the field. Ask only for what the
current step needs. Preserve entered information when validation or a request fails. Explain
requirements before submit.

**Dialogs** — one title, one purpose, an obvious close. Blurred subdued backdrop, bright rounded
surface (`radius-2xl`). Long or multi-context work goes to a full page.

**Badges and tags** — `radius-full`, `#F2F8F1` or `#E8F5E7` fill, `#367533` text.

**Icons** — **Lucide**, stroke weight and size matched within an interaction group. Labels with
unfamiliar icons. Icon-only controls get accessible names.

**Empty and locked states** — say why; show the next useful action; calm treatment. Guidance,
not an error.

**Theme** — light only.

**Touch** — comfortable target sizes on touch screens even when the visual control is compact.

---

## 10. Voice

Brand: direct and punchy. Short sentences. Strong verbs. Ambitious without hype-words.
Official TKS Life: write like a thoughtful coach. Direct, warm, specific.

These agree. In practice:

- Lead with the action or outcome. Short labels, concrete verbs: "Add project," "Keep going."
- Everyday language over platform terminology.
- Explain requirements before a user submits, not only after they fail.
- Empty states offer a next step.
- No hype, no scolding, no vague encouragement.
- Reuse the named TKS mindsets where they fit naturally.
- No mid-sentence em dashes in running prose.

---

## 11. Paste-ready tokens

```css
:root {
  /* Green ramp */
  --green-tint-1: #C5E5C3;
  --green-tint-2: #A8D8A6;
  --green-tint-3: #8BCA88;
  --green-tint-4: #6EBD6A;
  --green:         #51B04C;
  --green-shade-1: #44933F;
  --green-shade-2: #367533;
  --green-shade-3: #295826;
  --green-shade-4: #1B3B19;

  /* Neutrals */
  --ink:   #231F20;
  --white: #FFFFFF;

  /* Surfaces */
  --bg:               #FFFFFF;
  --bg-warm:          #FAF9F7;
  --bg-subtle:        #F9FAFB;
  --bg-accent:        #F2F8F1;
  --bg-accent-strong: #E8F5E7;
  --border:           #E4E2E2;
  --border-green:     #CFE3CC;

  /* Text */
  --text:        #231F20;
  --text-body:   #514D4E;
  --text-muted:  #7C7879;
  --text-subtle: #B8BCBA;
  --text-accent: #367533;

  /* Semantic */
  --destructive: #DC2626;

  /* Type */
  --font-display: "PP Neue Montreal", "Helvetica Neue", Arial, sans-serif;
  --font-ui: "Geist", "PP Neue Montreal", "Helvetica Neue", Arial, sans-serif;

  --text-display: 72px;
  --text-h1: 36px;
  --text-h2: 30px;
  --text-h3: 20px;
  --text-h4: 18px;
  --text-body-size: 16px;
  --text-body-sm: 14px;
  --text-caption: 13px;
  --text-micro: 12px;

  /* Spacing (8px rhythm, 4px adjustments) */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-14: 56px;
  --space-16: 64px;
  --space-20: 80px;
  --space-30: 120px;

  /* Shape */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 22px;
  --radius-2xl: 28px;
  --radius-full: 9999px;

  /* Motion */
  --duration-fast: 150ms;
  --duration-slow: 500ms;
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
}
```

### Tailwind

```js
// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        green: {
          50: '#F2F8F1', 75: '#E8F5E7', 100: '#C5E5C3', 200: '#A8D8A6', 300: '#8BCA88',
          400: '#6EBD6A', 500: '#51B04C', 600: '#44933F', 700: '#367533',
          800: '#295826', 900: '#1B3B19',
        },
        ink: '#231F20',
        body: '#514D4E',
        muted: '#7C7879',
        subtle: '#B8BCBA',
        surface: { DEFAULT: '#FFFFFF', warm: '#FAF9F7', subtle: '#F9FAFB', accent: '#F2F8F1' },
        line: { DEFAULT: '#E4E2E2', green: '#CFE3CC' },
        destructive: '#DC2626',
      },
      fontFamily: {
        display: ['"PP Neue Montreal"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        ui: ['Geist', '"PP Neue Montreal"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      fontSize: {
        display: ['72px', { lineHeight: '72px', fontWeight: '500' }],
        h1: ['36px', { lineHeight: '44px', fontWeight: '600' }],
        h2: ['30px', { lineHeight: '36px', fontWeight: '600' }],
        h3: ['20px', { lineHeight: '28px', fontWeight: '600' }],
        h4: ['18px', { lineHeight: '28px', fontWeight: '600' }],
        body: ['16px', { lineHeight: '24px' }],
        'body-sm': ['14px', { lineHeight: '20px' }],
        caption: ['13px', { lineHeight: '18px', fontWeight: '500' }],
        micro: ['12px', { lineHeight: '16px', fontWeight: '500' }],
      },
      borderRadius: { sm: '8px', md: '12px', lg: '16px', xl: '22px', '2xl': '28px', full: '9999px' },
      spacing: { 14: '56px', 30: '120px' },
      transitionDuration: { fast: '150ms', slow: '500ms' },
      transitionTimingFunction: {
        standard: 'cubic-bezier(0.4, 0, 0.2, 1)',
        out: 'cubic-bezier(0, 0, 0.2, 1)',
      },
      boxShadow: { none: 'none' },
    },
  },
}
```

---

## 12. Do and don't

**Do**

- Use the warm canvas `#FAF9F7`. It is what makes TKS Life feel less clinical than plain white.
- Keep the display line-height at 1.0.
- One dominant next action per view. Primary is ink or green by context.
- Sentence case headings, kept short. Eyebrow labels only to orient.
- Design loading, empty, error, disabled, locked, saving, saved, and completed states. A happy
  path with missing edge states is not finished.
- Let layouts breathe. Let the work be the loudest thing.

**Don't**

- No drop shadows or gradients. Flat at rest; blurred backdrop for overlays.
- No colours outside the ramp, except `#DC2626` for errors. The purple `#261c45` is out.
- Never `#000000` for text. Use `#231F20`.
- Don't put green text on a light green fill. Don't flood a screen with green.
- Don't make essential information smaller than 12px.
- No mid-sentence em dashes in prose.

---

## 13. Principles from the TKS Life team

The official doc's twelve principles, kept as the review lens for this site. Full text in
`official-TKS-Life-DESIGN.md`.

1. Make ambition feel approachable.
2. Let the work be the loudest thing.
3. Green means momentum.
4. Use compact, confident typography.
5. Build with soft structure.
6. Make actions obvious and states complete.
7. Treat progress as a story.
8. Put people and real work at the center.
9. Use motion as feedback and delight.
10. Design mobile as the same product.
11. Accessibility is part of the visual system.
12. Write like a thoughtful coach.

Every screen should help a student answer three questions fast: Where am I? What matters here?
What can I do next?

**Review checklist** (before calling a screen finished):

- Is the main task obvious within a few seconds?
- Is there one clear next action?
- Does the hierarchy still work without colour or shadow?
- Does green have a specific meaning everywhere it appears?
- Are all interaction states accounted for?
- Does the layout work on a narrow phone and a wide desktop?
- Can it be used with a keyboard and understood without colour alone?
- Does the copy sound direct, warm, and specific?
- Does the screen feel like TKS, or like a generic dashboard?
- Is every decorative detail earning its place?

When in doubt, choose the option that is calmer, clearer, warmer, and closer to the student's
real work.

---

## 14. What the official doc changed (revision 2)

| Item | Before (measured) | After (official) | Size of change |
|---|---|---|---|
| Purple `#261c45` | Found, dropped by brand rule | Not in the official palette either | Confirms the drop |
| Action green | Not captured (no solid buttons on pages read) | `#51B04C`, identical to brand | Confirms the merge |
| Green wash | `#E8F5E7` (brand derived) | `#F2F8F1` official; `#E8F5E7` kept as strong variant | Small |
| Body text colour | `#514D4E` seen as "dark grey" | Named role: descriptions and supporting copy | Small |
| Green border | Not captured | `#CFE3CC` for soft action and input boundaries | New token |
| Destructive | Not captured | `#DC2626`, semantic only | New token, one exception to the ramp |
| Input radius | 6px | 8px | Small |
| Dialog radius | 22px max | 22 to 28px | Small |
| Spacing | "base 4" | 8px rhythm, 4px adjustments | Wording |
| Shadows | Measured soft shadows; merged said none | Flat at rest; blurred backdrop for overlays | Resolves the conflict inside brand rules |
| Primary button | Green | Ink or green by context | Nuance |
| Metadata size | 11 to 12px | 12 to 13px floor | Small |
| Icons | Not captured | Lucide | New |
| Theme | Assumed | Light only | Confirms |
| Principles and checklist | None | Twelve principles, review checklist | New section 13 |

Nothing changed the font split, the ramp, the ink, the warm canvas, the card anatomy, or the
motion tokens. The extraction held up.

---

## Appendix — app values NOT carried over

Recorded for reference. These are measured from TKS Life but fail a brand rule.

| Value | Where the app uses it | Why it is out |
|---|---|---|
| `#261c45` | Brand text | Outside the palette; not in the official doc |
| `0 18px 44px rgba(20,38,25,0.2)` | Card elevation | Drop shadow |
| `0 18px 34px rgba(35,31,32,0.1)` | Panel elevation | Drop shadow |
| `18px 20px 36px rgba(35,31,32,0.14)` | Offset elevation | Drop shadow |
| `0 1px 2px rgba(0,0,0,0.05)` | Input border-glow | Drop shadow |

---

*Sources: `designlang` v12.21.0 run against a logged-in snapshot of TKS Life on 2026-09-01;*
*`official-TKS-Life-DESIGN.md` from the TKS Life platform developers; TKS `tks-brand` skill guidelines.*
