/* Scene illustrations for each haven card.
 *
 * The named groups (`motif-leaves`, `motif-moon`, `motif-links`, `motif-stars`)
 * exist so a haven card can move its own illustration on hover — leaves shift,
 * the moon drifts, the links open out, the stars come up. The movement lives in
 * globals.css rather than here, because it belongs to the interaction system
 * and not to the drawing. */

const s = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

/* Simba — rolling hills and wild foliage */
function SimbaScene() {
  return (
    <g>
      <path
        d="M0 78 C26 54 48 58 70 76 C88 90 104 88 120 72 C134 58 148 60 160 74 V110 H0 Z"
        fill="currentColor"
        opacity="0.18"
      />
      <path d="M0 78 C26 54 48 58 70 76 C88 90 104 88 120 72 C134 58 148 60 160 74" {...s} opacity="0.55" />
      <g {...s} className="motif-leaves">
        <path d="M126 110 V74" />
        <path d="M126 92 c-13 -2 -20 -10 -22 -23 c13 0 20 9 22 23Z" />
        <path d="M128 84 c2 -12 10 -20 23 -22 c0 13 -9 21 -23 22Z" />
        <path d="M108 110 c0 -14 -4 -22 -11 -28" />
        <path d="M102 96 c-9 -1 -14 -7 -15 -16 c9 0 14 6 15 16Z" />
      </g>
    </g>
  );
}

/* Sebastian — a quiet room: window, armchair, plant */
function SebastianScene() {
  return (
    <g {...s}>
      <path
        className="motif-moon"
        d="M44 30 A11 11 0 1 1 34.5 15 A8.8 8.8 0 0 0 44 30Z"
        opacity="0.45"
      />
      <rect x="14" y="10" width="40" height="50" rx="2" />
      <path d="M34 10 v50 M14 35 h40" opacity="0.55" />
      <path d="M10 63 h48" />
      <path d="M78 84 V64 a16 16 0 0 1 32 0 v20" />
      <path d="M70 100 h48 v-10 a5 5 0 0 0 -5 -5 h-38 a5 5 0 0 0 -5 5 z" />
      <path d="M70 92 v-9 a5 5 0 0 1 10 0 v3" />
      <path d="M118 92 v-9 a5 5 0 0 0 -10 0 v3" />
      <path d="M76 100 v9 M112 100 v9" />
      <path d="M134 110 v-24" />
      <path d="M134 94 c-11 -2 -17 -9 -18 -20 c11 0 17 8 18 20Z" />
      <path d="M136 90 c1 -10 8 -17 19 -18 c0 10 -8 17 -19 18Z" />
      <path d="M123 110 h24 l-3 -18 h-18 Z" />
    </g>
  );
}

/* Coco — two hands reaching toward one another */
function CocoScene() {
  return (
    <g {...s} className="motif-links">
      <path d="M30 106 C22 90 30 74 46 70 C54 68 60 72 62 79" />
      <path d="M130 106 C138 90 130 74 114 70 C106 68 100 72 98 79" />
      <path d="M46 70 c-5 -7 -1 -15 7 -15 c6 0 9 5 10 10" />
      <path d="M114 70 c5 -7 1 -15 -7 -15 c-6 0 -9 5 -10 10" />
      <path d="M80 50 c-4 -8 -15 -6 -15 3 c0 8 9 15 15 20 c6 -5 15 -12 15 -20 c0 -9 -11 -11 -15 -3Z" />
      <path d="M62 30 l-5 -8 M98 30 l5 -8 M80 26 v-9" opacity="0.5" />
    </g>
  );
}

/* Princess — a child reaching for a star */
function PrincessScene() {
  return (
    <g {...s}>
      <circle cx="70" cy="52" r="9" />
      <path d="M70 61 L56 96 h28 Z" />
      <path d="M62 74 L48 88" />
      <path d="M76 70 L96 46" />
      <path d="M64 96 v13 M78 96 v13" />
      <path d="M108 22 l3.6 8 8.4 0.8 -6.4 5.6 1.9 8.4 -7.5 -4.6 -7.5 4.6 1.9 -8.4 -6.4 -5.6 8.4 -0.8Z" />
      <g className="motif-stars" opacity="0.45">
        <path d="M138 62 l1.6 3.6 3.6 0.4 -2.8 2.4 0.8 3.6 -3.2 -2 -3.2 2 0.8 -3.6 -2.8 -2.4 3.6 -0.4Z" />
        <path d="M36 40 l1.6 3.6 3.6 0.4 -2.8 2.4 0.8 3.6 -3.2 -2 -3.2 2 0.8 -3.6 -2.8 -2.4 3.6 -0.4Z" />
        <path d="M146 26 l1.2 2.8 2.8 0.3 -2.2 1.9 0.6 2.8 -2.4 -1.5 -2.4 1.5 0.6 -2.8 -2.2 -1.9 2.8 -0.3Z" />
      </g>
      <path d="M28 110 h132" opacity="0.35" />
    </g>
  );
}

const scenes = {
  simba: SimbaScene,
  sebastian: SebastianScene,
  coco: CocoScene,
  princess: PrincessScene,
};

export default function HavenMotif({ haven, className = "" }) {
  const Scene = scenes[haven];
  if (!Scene) return null;
  return (
    <svg
      viewBox="0 0 160 110"
      className={className}
      preserveAspectRatio="xMaxYMax meet"
      aria-hidden="true"
    >
      <Scene />
    </svg>
  );
}
