/**
 * The checklist tick, drawn per haven.
 *
 * A generic tick in a green circle belongs to a form library, not to a page
 * about an animal. Each haven marks its list with something from its own
 * world instead — but they are all the same weight and the same 20px box, so a
 * list still scans as a list.
 *
 * Decorative: the list item's text carries the meaning, so these are hidden
 * from assistive technology rather than labelled.
 */

const s = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const MARKS = {
  /* Simba — a leaf, for habitat. */
  simba: (
    <>
      <path d="M4 17 C4 10 9 5 17 4 C17 12 12 17 4 17Z" {...s} />
      <path d="M4.5 16.5 C8 13 11 10.5 14.5 8.5" {...s} opacity="0.7" />
    </>
  ),
  /* Sebastian — a small crescent, the quietest mark he has. */
  sebastian: <path d="M16 13.5 A6.5 6.5 0 1 1 10.4 4 A5.2 5.2 0 0 0 16 13.5Z" {...s} />,
  /* Coco — two linked forms, for connection. */
  coco: (
    <>
      <circle cx="8" cy="10" r="3.4" {...s} />
      <circle cx="14" cy="13.5" r="3.4" {...s} />
    </>
  ),
  /* Princess — a small star. */
  princess: (
    <path
      d="M10.5 3.5 l1.9 4.3 4.7 .4 -3.6 3.1 1.1 4.6 -4.1 -2.5 -4.1 2.5 1.1 -4.6 -3.6 -3.1 4.7 -.4Z"
      {...s}
    />
  ),
  /* Kiara and anything unkeyed — a hand-drawn tick, uneven on purpose. */
  brand: <path d="M4 11.5 C6 13 7.5 15 8.8 17.5 C11 12 14 7.5 18 4.5" {...s} />,
};

/**
 * @param {object} props
 * @param {string} [props.token] Haven token; falls back to the drawn tick.
 */
export default function CheckMark({ token = "brand", className = "", size = 20 }) {
  return (
    <svg
      viewBox="0 0 21 21"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      {MARKS[token] ?? MARKS.brand}
    </svg>
  );
}
