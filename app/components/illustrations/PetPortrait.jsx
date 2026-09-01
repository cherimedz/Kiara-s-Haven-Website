/* Each pet is drawn individually — front-facing, shoulders-up, inside an arch
   frame. Fur colours are literal because they are artwork rather than theme;
   the frame and sprigs come from that animal's palette token. */

import { PETS } from "@/app/lib/pets";
import { paletteVars } from "@/app/lib/palette";

function Eyes({ y = 56, dx = 11, color = "#2E241C", cx = 50 }) {
  return (
    <g>
      <ellipse cx={cx - dx} cy={y} rx="4.2" ry="4.6" fill={color} />
      <ellipse cx={cx + dx} cy={y} rx="4.2" ry="4.6" fill={color} />
      <circle cx={cx - dx + 1.5} cy={y - 1.6} r="1.3" fill="#fff" opacity="0.9" />
      <circle cx={cx + dx + 1.5} cy={y - 1.6} r="1.3" fill="#fff" opacity="0.9" />
    </g>
  );
}

function Whiskers({ y = 70 }) {
  return (
    <g stroke="#2E241C" strokeWidth="0.7" opacity="0.35" strokeLinecap="round">
      <path d={`M38 ${y} L24 ${y - 3}`} />
      <path d={`M38 ${y + 2.5} L24 ${y + 3}`} />
      <path d={`M62 ${y} L76 ${y - 3}`} />
      <path d={`M62 ${y + 2.5} L76 ${y + 3}`} />
    </g>
  );
}

function Kiara() {
  return (
    <g>
      <path d="M22 68 C22 96 30 118 50 118 C70 118 78 96 78 68Z" fill="#9C7A52" />
      <path d="M40 92 C40 108 44 118 50 118 C56 118 60 108 60 92Z" fill="#E4D3B8" />
      <path d="M26 46 L28 20 L45 34Z" fill="#9C7A52" />
      <path d="M74 46 L72 20 L55 34Z" fill="#9C7A52" />
      <path d="M31 41 L32 27 L42 36Z" fill="#D9A9A0" />
      <path d="M69 41 L68 27 L58 36Z" fill="#D9A9A0" />
      <ellipse cx="50" cy="58" rx="28" ry="26" fill="#A8825A" />
      <g fill="#6E5335" opacity="0.55">
        <path d="M50 32 L47 44 L53 44Z" />
        <path d="M40 34 L39 45 L44 43Z" />
        <path d="M60 34 L61 45 L56 43Z" />
      </g>
      <ellipse cx="50" cy="70" rx="13" ry="10" fill="#E4D3B8" />
      <Eyes y={56} dx={11} />
      <path d="M50 66 l-3 3.4h6Z" fill="#C4756B" />
      <path d="M50 70 q-4.5 4 -8.5 1.4 M50 70 q4.5 4 8.5 1.4" stroke="#2E241C" strokeWidth="1.1" fill="none" strokeLinecap="round" />
      <Whiskers y={70} />
    </g>
  );
}

function Simba() {
  return (
    <g>
      <path d="M24 72 C24 98 32 118 50 118 C68 118 76 98 76 72Z" fill="#D6A96E" />
      <path d="M41 94 C41 108 45 118 50 118 C55 118 59 108 59 94Z" fill="#EFDCBC" />
      <path d="M22 44 C13 52 12 76 20 88 C26 94 30 88 30 76Z" fill="#B5854A" />
      <path d="M78 44 C87 52 88 76 80 88 C74 94 70 88 70 76Z" fill="#B5854A" />
      <ellipse cx="50" cy="56" rx="27" ry="25" fill="#DDB47A" />
      <path d="M50 30 C44 34 42 40 43 46 L57 46 C58 40 56 34 50 30Z" fill="#EFDCBC" opacity="0.55" />
      <ellipse cx="50" cy="72" rx="14" ry="11" fill="#EFDCBC" />
      <Eyes y={55} dx={11} />
      <ellipse cx="50" cy="67" rx="4.4" ry="3.4" fill="#2E241C" />
      <path d="M50 71 v3.5" stroke="#2E241C" strokeWidth="1.1" strokeLinecap="round" />
      <path d="M50 74.5 q-5 4 -9 0.5 M50 74.5 q5 4 9 0.5" stroke="#2E241C" strokeWidth="1.1" fill="none" strokeLinecap="round" />
    </g>
  );
}

function Sebastian() {
  return (
    <g>
      <path d="M22 74 C22 100 30 118 50 118 C70 118 78 100 78 74Z" fill="#F3EADC" />
      <g fill="#F7F1E6">
        <circle cx="26" cy="52" r="13" />
        <circle cx="74" cy="52" r="13" />
        <circle cx="22" cy="68" r="11" />
        <circle cx="78" cy="68" r="11" />
        <circle cx="30" cy="34" r="11" />
        <circle cx="70" cy="34" r="11" />
        <circle cx="50" cy="28" r="12" />
      </g>
      <ellipse cx="50" cy="56" rx="26" ry="24" fill="#FBF6EC" />
      <g fill="#E6DACA" opacity="0.7">
        <circle cx="28" cy="46" r="7" />
        <circle cx="72" cy="46" r="7" />
        <circle cx="26" cy="62" r="6" />
        <circle cx="74" cy="62" r="6" />
      </g>
      <ellipse cx="50" cy="70" rx="13" ry="10" fill="#FFFDF8" />
      <Eyes y={56} dx={10.5} />
      <ellipse cx="50" cy="66" rx="4" ry="3.2" fill="#2E241C" />
      <path d="M50 70 q-4.5 3.6 -8 0.6 M50 70 q4.5 3.6 8 0.6" stroke="#2E241C" strokeWidth="1.1" fill="none" strokeLinecap="round" />
    </g>
  );
}

function Coco() {
  return (
    <g>
      <path d="M22 68 C22 96 30 118 50 118 C70 118 78 96 78 68Z" fill="#2E2723" />
      <path d="M39 90 C38 106 43 118 50 118 C57 118 62 106 61 90Z" fill="#F4EFE4" />
      <path d="M26 46 L28 20 L45 34Z" fill="#2E2723" />
      <path d="M74 46 L72 20 L55 34Z" fill="#2E2723" />
      <path d="M31 41 L32 28 L42 36Z" fill="#B98D86" />
      <path d="M69 41 L68 28 L58 36Z" fill="#B98D86" />
      <ellipse cx="50" cy="58" rx="28" ry="26" fill="#332C27" />
      <path d="M50 34 C43 44 41 56 43 66 C46 74 54 74 57 66 C59 56 57 44 50 34Z" fill="#F4EFE4" />
      <ellipse cx="50" cy="70" rx="12.5" ry="9.5" fill="#F4EFE4" />
      <Eyes y={56} dx={11} color="#1C1714" />
      <path d="M50 66 l-3 3.2h6Z" fill="#C48078" />
      <path d="M50 69.5 q-4.5 4 -8.5 1.4 M50 69.5 q4.5 4 8.5 1.4" stroke="#1C1714" strokeWidth="1.1" fill="none" strokeLinecap="round" />
      <Whiskers y={70} />
    </g>
  );
}

function Princess() {
  return (
    <g>
      <path d="M22 68 C22 96 30 118 50 118 C70 118 78 96 78 68Z" fill="#E2BC93" />
      <path d="M40 92 C40 108 44 118 50 118 C56 118 60 108 60 92Z" fill="#F6EBDA" />
      <path d="M26 46 L28 20 L45 34Z" fill="#E2BC93" />
      <path d="M74 46 L72 20 L55 34Z" fill="#E2BC93" />
      <path d="M31 41 L32 27 L42 36Z" fill="#E5AFA6" />
      <path d="M69 41 L68 27 L58 36Z" fill="#E5AFA6" />
      <ellipse cx="50" cy="58" rx="28" ry="26" fill="#EDCBA4" />
      <g fill="#D2A171" opacity="0.5">
        <path d="M50 32 L47 43 L53 43Z" />
        <path d="M40 34 L39 44 L44 42Z" />
        <path d="M60 34 L61 44 L56 42Z" />
      </g>
      <ellipse cx="50" cy="70" rx="13" ry="10" fill="#F9F0E2" />
      <Eyes y={56} dx={11} />
      <path d="M50 66 l-3 3.4h6Z" fill="#CE8279" />
      <path d="M50 70 q-4.5 4 -8.5 1.4 M50 70 q4.5 4 8.5 1.4" stroke="#2E241C" strokeWidth="1.1" fill="none" strokeLinecap="round" />
      <Whiskers y={70} />
    </g>
  );
}

/** Artwork for each animal, keyed by `PetKey`. Colours come from the palette. */
const ARTWORK = {
  kiara: Kiara,
  simba: Simba,
  sebastian: Sebastian,
  coco: Coco,
  princess: Princess,
};

/**
 * Frames. Five hand-drawn arches rather than one arch reused five times — an
 * exact repeat reads as a template, and the irregularity is what makes the row
 * of portraits feel drawn rather than generated. Each silhouette leans toward
 * that animal's meaning: Sebastian's is the lowest and softest, Simba's the
 * tallest and least symmetrical, Princess's the narrowest and most upright.
 *
 * All five are cubic curves, not arcs, so no two shoulders match exactly.
 */
const FRAMES = {
  kiara: "M9 120 V56 C9 31 26 14 50 14 C74 14 92 32 92 57 V120 Z",
  simba: "M7 120 V60 C7 30 24 10 49 11 C76 12 94 34 92 60 V120 Z",
  sebastian: "M10 120 V62 C10 40 26 22 50 22 C75 22 90 39 90 63 V120 Z",
  coco: "M5 120 V58 C4 33 24 16 50 16 C77 16 95 36 94 61 V120 Z",
  princess: "M13 120 V54 C13 27 28 12 51 12 C72 12 87 26 87 50 V120 Z",
};

/* A few sprigs at the base of the frame, in that animal's own vegetation —
   the same idea as `Botanical`, at the scale a portrait can carry. */
const SPRIG_TIPS = {
  kiara: <g><circle cx="24" cy="100" r="1.7" /><circle cx="76" cy="100" r="1.7" /></g>,
  simba: <g fill="none"><path d="M20 112 C19 105 19 100 21 96" /><path d="M80 112 C81 105 81 100 79 96" /></g>,
  sebastian: null,
  coco: <g fill="none"><path d="M26 110 C32 108 38 109 42 113" /><path d="M74 110 C68 108 62 109 58 113" /></g>,
  princess: <g><circle cx="27" cy="98" r="1.5" /><circle cx="73" cy="98" r="1.5" /><circle cx="50" cy="116" r="1.3" /></g>,
};

function Sprigs({ pet, color }) {
  return (
    <g stroke={color} strokeWidth="1.1" fill={color} strokeLinecap="round" opacity="0.75">
      <g fill="none">
        <path d="M18 108 C24 104 30 106 34 112" />
        <path d="M22 106 c-1 -3 0 -5 2 -6 M28 107 c0 -3 1 -5 4 -6" />
        <path d="M82 108 C76 104 70 106 66 112" />
        <path d="M78 106 c1 -3 0 -5 -2 -6 M72 107 c0 -3 -1 -5 -4 -6" />
      </g>
      {SPRIG_TIPS[pet]}
    </g>
  );
}

/**
 * Portrait of one animal, framed in an arch on that animal's palette.
 *
 * @param {object}  props
 * @param {import('@/app/lib/pets').PetKey} props.pet   Selects the artwork.
 * @param {string} [props.name]  Display name for the accessible label.
 */
export default function PetPortrait({ pet, name }) {
  const Art = ARTWORK[pet];
  if (!Art) return null;

  const petMeta = PETS.find((candidate) => candidate.key === pet);
  const { soft, primary } = paletteVars(petMeta?.token ?? "brand");
  const frame = FRAMES[pet];

  return (
    <svg
      viewBox="0 0 100 120"
      width="100%"
      height="100%"
      role="img"
      aria-label={`Illustrated portrait of ${name ?? pet}`}
    >
      <defs>
        <clipPath id={`arch-${pet}`}>
          <path d={frame} />
        </clipPath>
      </defs>
      <path d={frame} fill={soft} />
      <g clipPath={`url(#arch-${pet})`}>
        <g transform="translate(7.5 20) scale(0.85)">
          <Art />
        </g>
      </g>
      <path d={frame} fill="none" stroke={primary} strokeWidth="1.2" opacity="0.35" />
      <Sprigs pet={pet} color={primary} />
    </svg>
  );
}
