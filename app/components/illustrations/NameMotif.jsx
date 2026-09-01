/**
 * The five animal symbols — the emotional half of the icon system.
 *
 * Lucide covers function (arrows, menu, form affordances). These cover meaning,
 * and the two sets never mix inside one element. Each mark is deliberately
 * indirect: Simba is a sunrise rather than a lion, Coco is a cluster of linked
 * nodes rather than clasped hands, so the system reads as poetry rather than as
 * clip art.
 *
 *   Kiara      house holding a paw   safety, belonging, home
 *   Simba      sun behind a hill     freedom, wildness, protection
 *   Sebastian  crescent moon         dignity, comfort, companionship
 *   Coco       linked forms          community, connection, support
 *   Princess   star                  possibility, childhood, hope
 *
 * Drawn on a 24×24 grid at 1.5 stroke so they sit optically alongside Lucide
 * at the same nominal size without matching its geometry.
 */

const s = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const motifs = {
  /* Kiara — a home with a paw inside it. Echoes the navbar logo deliberately:
     Kiara names the parent concept, so her mark is the site's own mark. */
  kiara: (
    <>
      <path d="M3.5 10.5 L12 3 L20.5 10.5 V20.5 H3.5 Z" {...s} />
      <g fill="currentColor" stroke="none">
        <ellipse cx="9.4" cy="13.6" rx="0.95" ry="1.25" />
        <ellipse cx="12" cy="12.9" rx="0.95" ry="1.25" />
        <ellipse cx="14.6" cy="13.6" rx="0.95" ry="1.25" />
        <path d="M12 15.5 c-2.1 0 -3.3 1.35 -3.3 2.6 c0 1.1 1.1 1.6 3.3 1.6 s3.3 -0.5 3.3 -1.6 c0 -1.25 -1.2 -2.6 -3.3 -2.6Z" />
      </g>
    </>
  ),

  /* Simba — a sun coming up behind a hill. Never a lion; the wildness is in the
     landscape rather than in the animal. */
  simba: (
    <>
      <path d="M7 16.6 A5 5 0 0 1 17 16.6" {...s} />
      <path d="M12 4.2 v2.2 M5.6 7 l1.5 1.6 M18.4 7 l-1.5 1.6" {...s} opacity="0.7" />
      <path d="M2.5 17.4 C6 13.4 9.4 16.2 12.4 17.6 C15.4 19 18.6 18.4 21.5 15.6" {...s} />
    </>
  ),

  /* Sebastian — the quietest mark in the set, and the only one left alone. */
  sebastian: (
    <path d="M17 15.5 A7.5 7.5 0 1 1 10.5 5 A6 6 0 0 0 17 15.5 Z" {...s} />
  ),

  /* Coco — three small forms held together by growing lines. Kept open and
     slightly uneven so it reads as a vine, not as a network diagram. */
  coco: (
    <>
      <path d="M7.6 14.6 C9.3 12.4 10.2 10.6 10.7 9" {...s} />
      <path d="M13.6 9.6 C15.2 11.1 16.3 12.3 17.2 13.2" {...s} />
      <path d="M11.2 12.2 c1.9 -0.5 3.1 0.3 3.4 2 c-1.9 0.5 -3.1 -0.3 -3.4 -2Z" {...s} opacity="0.75" />
      <circle cx="6" cy="16.2" r="2.2" {...s} />
      <circle cx="12" cy="6.8" r="2.4" {...s} />
      <circle cx="18.6" cy="14.8" r="2" {...s} />
    </>
  ),

  /* Princess — one star and one small sparkle beside it. She is the only one of
     the five still here, so her mark is the only one with something extra. */
  princess: (
    <>
      <path
        d="M10.6 3.6 l2 4.6 5 0.42 -3.8 3.28 1.14 4.88 -4.34 -2.62 -4.34 2.62 1.14 -4.88 -3.8 -3.28 5 -0.42Z"
        {...s}
      />
      <path
        d="M19.1 15.2 c0.32 1.62 0.72 2.02 2.34 2.34 c-1.62 0.32 -2.02 0.72 -2.34 2.34 c-0.32 -1.62 -0.72 -2.02 -2.34 -2.34 c1.62 -0.32 2.02 -0.72 2.34 -2.34Z"
        fill="currentColor"
        stroke="none"
        opacity="0.6"
      />
    </>
  ),
};

/**
 * @param {object} props
 * @param {import('@/app/lib/pets').PetKey} props.pet
 * @param {number} [props.size] Rendered px. 16 alongside a name, larger alone.
 */
export default function NameMotif({ pet, size = 16, className = "" }) {
  const motif = motifs[pet];
  if (!motif) return null;
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      {motif}
    </svg>
  );
}
