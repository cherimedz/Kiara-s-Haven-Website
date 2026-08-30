/**
 * Maps each palette token to the utility classes that express it.
 *
 * Every class is written out in full and never interpolated (`text-${t}-deep`),
 * because Tailwind discovers classes by scanning source text — a constructed
 * name compiles to nothing. Centralising the literals here is what stops the
 * same "simba means moss" knowledge from being restated in every component.
 *
 * Colour values themselves live in globals.css; this file only names them.
 */

/**
 * @typedef {object} PaletteEntry
 * @property {string} tint    Level-3 surface, flat.
 * @property {string} card    Level-3 surface with a gradient toward `secondary`.
 * @property {string} hero    Barely-there gradient for large atmospheric blocks.
 * @property {string} border  Hairline, in place of a shadow.
 * @property {string} ink     Deep tone — body text on a tinted surface.
 * @property {string} accent  Primary tone — icons and small marks.
 * @property {string} disc    Deep fill for circles carrying white glyphs.
 */

/** @type {Readonly<Record<string, PaletteEntry>>} */
export const PALETTE = Object.freeze({
  brand: {
    tint: "bg-brand-soft",
    card: "bg-gradient-to-b from-brand-soft to-brand/40",
    hero: "bg-gradient-to-br from-brand-soft to-brand-soft",
    border: "border-brand/30",
    ink: "text-warm",
    accent: "text-brand-dark",
    disc: "bg-brand-dark",
  },
  simba: {
    tint: "bg-simba-soft",
    card: "bg-gradient-to-b from-simba-soft to-simba-secondary/55",
    hero: "bg-gradient-to-br from-simba-soft to-simba-wash",
    border: "border-simba-secondary/45",
    ink: "text-simba-deep",
    accent: "text-simba-primary",
    disc: "bg-simba-deep",
  },
  sebastian: {
    tint: "bg-sebastian-soft",
    card: "bg-gradient-to-b from-sebastian-soft to-sebastian-secondary/70",
    hero: "bg-gradient-to-br from-sebastian-soft to-sebastian-wash",
    border: "border-sebastian-secondary/50",
    ink: "text-sebastian-deep",
    accent: "text-sebastian-primary",
    disc: "bg-sebastian-deep",
  },
  coco: {
    tint: "bg-coco-soft",
    card: "bg-gradient-to-b from-coco-soft to-coco-secondary/65",
    hero: "bg-gradient-to-br from-coco-soft to-coco-wash",
    border: "border-coco-secondary/50",
    ink: "text-coco-deep",
    accent: "text-coco-highlight",
    disc: "bg-coco-deep",
  },
  princess: {
    tint: "bg-princess-soft",
    card: "bg-gradient-to-b from-princess-soft to-princess-secondary/70",
    hero: "bg-gradient-to-br from-princess-soft to-princess-wash",
    border: "border-princess-secondary/50",
    ink: "text-princess-deep",
    accent: "text-princess-primary",
    disc: "bg-princess-deep",
  },
});

/**
 * Resolve a palette entry, falling back to the brand so an unknown token
 * degrades to a styled element rather than an unstyled one.
 * @param {string} token
 * @returns {PaletteEntry}
 */
export function getPalette(token) {
  return PALETTE[token] ?? PALETTE.brand;
}

/**
 * CSS custom-property references, for SVG fills that can't take a utility class.
 * @param {string} token
 */
export function paletteVars(token) {
  return {
    soft: `var(--kh-${token}-soft)`,
    primary: `var(--kh-${token}-primary)`,
  };
}
