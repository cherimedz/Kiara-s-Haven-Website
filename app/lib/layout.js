/**
 * Shared layout literals — the geometry equivalent of `lib/palette.js`.
 *
 * Card padding and radius are decided by how much weight a surface carries,
 * not by which section it happens to live in. Three tiers is fewer than most
 * sites carry, and that is the point: the shapes should read as one family.
 *
 * Written out in full rather than composed at runtime, for the same reason the
 * palette is — Tailwind discovers classes by scanning source text.
 */

/**
 * @typedef {object} CardTier
 * @property {string} shape  Radius plus padding.
 * @property {string} radius Radius alone, when padding is handled elsewhere.
 */

/** @type {Readonly<Record<"haven" | "action" | "small", CardTier>>} */
export const CARD = Object.freeze({
  /* Haven cards and other editorial surfaces. 28px radius. */
  haven: { shape: "rounded-xl p-8 md:p-10", radius: "rounded-xl" },
  /* Action cards and general information. 20px radius, 28px padding. */
  action: { shape: "rounded-lg p-7", radius: "rounded-lg" },
  /* Used sparingly, where a full card would be too much furniture. */
  small: { shape: "rounded-md p-4 md:p-5", radius: "rounded-md" },
});

/**
 * Reading widths. Prose never runs the full shell — see the container tokens
 * in globals.css for why.
 */
export const MEASURE = Object.freeze({
  narrow: "max-w-measure-narrow",
  base: "max-w-measure",
  wide: "max-w-measure-wide",
  hero: "max-w-hero",
  heading: "max-w-heading",
  description: "max-w-description",
});

/**
 * The label → heading → description → content rhythm that opens most sections.
 * Repeating it exactly is what makes it read as a system rather than a habit.
 */
export const HEADING_RHYTHM = Object.freeze({
  label: "mb-4",
  heading: "mb-5 md:mb-6",
  description: "mb-10 md:mb-14",
});

/**
 * Interaction language. Every interactive element in the system moves the same
 * way and at the same speed; see the duration tokens in globals.css.
 *
 *   link    colour shifts, any arrow slides right
 *   button  fill darkens, lifts 1px
 *   card    lifts 4px, border picks up the accent
 *
 * Arrows inside a `link`/`card` are marked with `group-hover:translate-x-1`,
 * which is why these all establish a `group`.
 */
export const INTERACTION = Object.freeze({
  link: "group inline-flex items-center gap-2 transition-colors duration-fast",
  button: "transition-[background-color,transform] duration-fast hover:-translate-y-px",
  card: "group transition-[transform,border-color,box-shadow] duration-standard hover:-translate-y-1",
  arrow: "transition-transform duration-fast group-hover:translate-x-1",
  focus:
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
});
