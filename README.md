# Kiara's Haven

A modernized rebuild of my debut web project — a concept animal-adoption-center
site and the four community havens it inspired. This is a demo/portfolio
project, not a real organization.

## What changed

The original (2024) was a single Bootstrap page with hotlinked stock photos,
inflated placeholder stats, and four "Many Faces" sub-org links that pointed
to pages that never existed. It's preserved as-is in [`legacy/`](./legacy).

This rebuild:
- Is a real multi-page **Next.js 16 / React 19 / Tailwind 4** app, plain JS/JSX.
- Implements the four sub-org pages (Simba's, Sebastian's, Coco's, Princess's
  Haven) that the original only linked to.
- Drops the hotlinked stock images and inflated fake statistics in favor of
  honest, clearly-illustrative content and a CSS-gradient-driven design system.
- Replaces ~10 near-duplicate `.btn-*` CSS classes with a single themeable
  `Button` component.

## The name

Kiara's Haven — and its four havens, Simba's, Sebastian's, Coco's, and
Princess's — are named after real cats and dogs from my own family. Kiara and
Princess are still here today.

## Running locally

```bash
npm install
npm run dev
```

## Stack

Next.js 16, React 19, Tailwind CSS 4, Framer Motion, lucide-react.
