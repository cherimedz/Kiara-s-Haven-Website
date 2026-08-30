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

Three documents govern the look; don't freelance around them.

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
