# Working in this repo

## This is NOT the Next.js you know

Next.js 16 with Turbopack. APIs, conventions, and file structure may differ from
your training data. Read the relevant guide in `node_modules/next/dist/docs/`
before writing routing, metadata, or font code.

## JavaScript only, no TypeScript

Write `.jsx` for components and `.js` for logic. No `.ts`/`.tsx`, no type
annotations, no `tsconfig.json`. Types are documented with JSDoc instead, which
gives editor hints without a compile step.

Path alias `@/*` resolves from the project root via `jsconfig.json`, so imports
read `@/app/components/ui/Button`. Prefer it over `../../` chains.

## Where things live

```
app/
├── lib/                 Data and shared logic. No JSX.
│   ├── havens.js        The four havens — content + palette token.
│   ├── pets.js          The five animals (Kiara has no haven).
│   ├── actions.js       The six wayfinder actions.
│   ├── palette.js       Palette token → utility classes.
│   └── siteMetadata.js  Title/description helpers.
├── components/
│   ├── layout/          Navbar, Footer — present on every page.
│   ├── sections/        Homepage sections, top to bottom.
│   ├── haven/           The shared haven page template.
│   ├── ui/              Small reusable primitives.
│   └── illustrations/   Hand-coded SVG. No raster assets anywhere.
└── <slug>/page.jsx      Thin route files; content comes from lib/havens.js.
```

## Design system

Five things govern the look; don't freelance around them.

**Colour** — every value is a CSS custom property in `globals.css`. Never write a
hex code in a component. The palette follows 70/20/10: cream and ink dominate, a
haven colour carries about 20%, terracotta accents about 10%. Scarcity is what
makes terracotta mean something.

Surfaces are levelled: `page` → `surface` → `linen` → haven `soft`. Ink is
tiered: `ink` → `warm` → `mute` → `subtle`. Prefer a `line` border over a shadow.

**Type** — Fraunces (`font-display`) carries emotion; Manrope (the body default)
carries information. Only two families. Italic Fraunces is reserved for the
emotional line and nothing else. Buttons are sentence case and never serif.

**Illustration** — all SVG, drawn inline, themed through palette tokens rather
than hard-coded fills. Fur colours in `PetPortrait` are the one exception: those
are artwork, not theme.

The direction is *handmade sanctuary*: a storybook and a family keepsake, not a
cartoon animal site. Fine, slightly uneven brown linework on cream, drawn at
1.0–1.5 stroke and never at a mechanical vector weight. Decorative artwork
strokes `--kh-draw` (#6B4D3B), never black, at 0.25–0.55 opacity so it sits
behind the content. The `.decor` class in `globals.css` carries that default.

*The five symbols* live in `NameMotif` — Kiara a house holding a paw, Simba a
sunrise behind a hill, Sebastian a crescent moon, Coco three linked forms,
Princess a star. Each is deliberately indirect; Simba is never drawn as a lion.

*The botanicals* live in `Botanical`, one per animal: Kiara garden wildflowers,
Simba tall grass and broad leaves, Sebastian sparse delicate flowers, Coco
twining vines, Princess sprouts and star-petalled flowers. Same drawing style,
different vegetation — that is how a page says which haven it is without the
illustration style changing. `leaf.js` holds the shared curve geometry.

*Placement* follows four rules, and they matter more than the drawings do:

1. Never decorate every empty space. Cream is part of the identity.
2. Decoration enters from a page edge; it is never dropped into the middle.
3. Never centre a decorative illustration — that reads as a stock asset.
4. Let it be cropped. Half a branch implies the page continues past the frame.

The stats strips carry no illustration at all, on purpose: the numbers are the
picture, and they are set in Fraunces because they belong to the editorial
voice. `PromiseStrip` used Lucide icons there and no longer does.

**Icons** — one library, one job. Lucide covers *function*: arrows, menu, close,
form affordances. The hand-drawn marks cover *emotion*: haven identity,
decoration, the five animals. Don't mix them inside one element, and don't reach
for Lucide because a decorative slot looks empty.

**Motion** — slow and alive, "a quiet garden moving in the wind". One component
owns it: `ui/Reveal`, a CSS scroll-driven fade behind an `@supports` query.

It is CSS rather than a motion library for a specific reason. A JS reveal has to
render hidden and un-hide after hydration, so the server HTML ships
`opacity: 0` and the page is blank without JavaScript, in a screenshot, or in
print. Here the resting state is visible and the animation is purely additive:
no scroll-timeline support, reduced motion, an unscrollable page, or print, and
the visitor just gets the finished page. Verify that property before replacing
it — `curl` a route and grep for `opacity:0`; there should be none.

No bouncing, spinning, confetti, or fast parallax.

## Components

**The governing rule: functional components stay clean, emotional ones get
personality.** Navigation, buttons, forms and information cards are quiet and
consistent. Haven cards, story blocks, quotes and anything carrying an animal's
identity are where the illustration and the warmth go. Mixing the two is what
makes a site look like a template wearing a costume.

**Layout** — `ui/Container` (the one 1280px shell, 16/20/32/48 padding) and
`ui/Section` (vertical rhythm by emotional weight: hero, story, grid, stats,
cta, compact; `flush` when a wave divider already provided the gap). Don't
hand-roll `max-w-* mx-auto px-*` again.

**Actions** — `ui/Button`, three styles only: `primary`, `secondary`, `text`.
Haven-token variants are `primary` in a haven's colour. Pills, 48/52/56px tall,
and the only round shapes in the system.

**Typography** — `ui/Eyebrow` (the section label; pass `token` on a haven page
and it takes that haven's colour), `ui/SectionHeading` (label → heading →
description, **left-aligned by default** — centre is for genuine emotional
moments, not for every section), `ui/QuoteBlock` (used sparingly; it stops being
a moment if it happens three times).

**Cards** — tiers live in `lib/layout.js` as `CARD.haven` / `CARD.action` /
`CARD.small`. Haven cards lead with the illustration, then the name.

**Information** — `ui/StatRow` puts figures in an editorial row with hairline
rules. Do not put statistics in a bordered card; that is what makes a page read
as a dashboard. `illustrations/CheckMark` is the checklist tick, drawn per haven
— but only on haven pages. Actions get the plain drawn tick, because a crescent
moon bulleting a line about veterinary bills is a haven mark on the wrong page.

**Forms** — `ui/Field` plus its exported `CONTROL` class. Real visible labels,
never floating ones: a floating label disappears exactly when the person is most
likely to have forgotten what the field wanted.

**Interaction** — one vocabulary, in `INTERACTION` in `lib/layout.js`, on three
speeds declared as utilities in globals.css: `duration-fast` (180ms, controls),
`duration-standard` (300ms, surfaces), `duration-art` (650ms, illustration).
Links shift colour and slide their arrow; buttons darken and lift 1px; cards
lift 4px and take an accent border; nav underlines draw themselves. Never write
a raw `duration-300`.

Tailwind v4 has no `--duration-*` theme namespace, which is why those three are
`@utility` rules rather than theme tokens. Radii **do** have one, so
`--radius-sm/md/lg/xl` override Tailwind's defaults: `rounded-xl` is 28px here,
not 12px. Check the token before assuming a Tailwind default.

**Two traps this codebase has already hit:**

*Grid items default to `min-width: auto`.* A horizontally-scrolling row inside a
grid column will widen the column instead of scrolling, and an ancestor's
`overflow-hidden` then silently eats the overflow. `min-w-0` on the column is
what makes the scroll real — see `OurStory`.

*An SVG box whose ratio doesn't match its viewBox* scales the artwork to one
axis and anchors it, stranding filled shapes' straight edges mid-card. Match the
ratio (`aspect-[16/11]` for `HavenMotif`) or fade the edge with a mask.

## Two rules worth stating

**Tailwind classes must be literal.** `text-${token}-deep` compiles to nothing —
the scanner reads source text, not runtime values. That is why `lib/palette.js`
spells every class out. Add new combinations there, not inline.

**Check contrast before shipping a colour pairing.** Small text needs 4.5:1.
Several pairings that looked fine were failing: terracotta on cream is 4.01:1 at
11px, which is why `Eyebrow` uses `brand-dark`.

## Verifying

```bash
npm run lint     # must be clean
npm run build    # must pass; all routes are static
npm run dev      # then check the homepage and at least one haven page
```

Nothing in the served HTML should start invisible:

```bash
curl -s localhost:3000/simbas-haven | grep -c 'opacity:0'   # must be 0
```
