import clsx from "clsx";

/**
 * Vertical rhythm.
 *
 * Space is the loudest thing on this site, so it is deliberately not uniform:
 * a section gets room in proportion to how much it matters. Everything on one
 * `padding: 96px 0` would read as a stack of boxes rather than a story with
 * pauses in it.
 *
 * Mobile compresses the scale but keeps the ordering, so the hero is still the
 * most open thing on a phone and the stats strip is still the tightest.
 *
 *   hero     80 → 112 → 160   the most air on the site
 *   story    80 → 128         major narrative moments
 *   grid     80 →  96 → 128   card collections
 *   stats    64 →  80 →  96   deliberately tighter; the numbers are the picture
 *   cta      80 → 128         a closing invitation is a big moment
 *   compact  64 →  80         supporting content between bigger beats
 *
 * `flush` drops the top padding for a section that follows a wave divider —
 * the wave has already provided the gap, and doubling it leaves a hole.
 */
const RHYTHM = {
  hero: "py-20 md:py-28 lg:py-40",
  story: "py-20 md:py-32",
  grid: "py-20 md:py-24 lg:py-32",
  stats: "py-16 md:py-20 lg:py-24",
  cta: "py-20 md:py-32",
  compact: "py-16 md:py-20",
};

const FLUSH_TOP = {
  hero: "pt-6 md:pt-10 lg:pt-14",
  story: "pt-6 md:pt-10",
  grid: "pt-6 md:pt-8 lg:pt-10",
  stats: "pt-4 md:pt-6",
  cta: "pt-6 md:pt-10",
  compact: "pt-4 md:pt-6",
};

/**
 * @param {object} props
 * @param {keyof typeof RHYTHM} [props.rhythm]
 * @param {boolean} [props.flush] Section sits directly under a wave divider.
 * @param {React.ElementType} [props.as]
 */
export default function Section({
  as: Tag = "section",
  rhythm = "compact",
  flush = false,
  className,
  children,
  ...props
}) {
  return (
    <Tag className={clsx(RHYTHM[rhythm], flush && FLUSH_TOP[rhythm], className)} {...props}>
      {children}
    </Tag>
  );
}
