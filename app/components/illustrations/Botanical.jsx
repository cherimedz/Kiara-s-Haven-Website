import { flowerPaths, leafPath } from "@/app/components/illustrations/leaf";

/**
 * Marginal botanical linework — the thread that runs through every page.
 *
 * One drawing style, five vegetations. Changing which plants grow in a margin
 * is how a page signals which haven you are in, without the illustration style
 * itself changing; that is what keeps the five reading as one family.
 *
 *   kiara      home-garden — wildflowers, rounded leaves, short branches
 *   simba      wild        — tall grass, broad leaves, climbing growth
 *   sebastian  quiet       — thin branches, sparse delicate flowers
 *   coco       growing     — twining vines, clusters of leaves
 *   princess   playful     — sprouts, star-petalled flowers, scattered dots
 *
 * Everything is bottom-anchored in a tall 80×200 box, because these are meant
 * to enter from a page edge and be cropped rather than to float in free space.
 */

/* Thin, organic, and slightly uneven — never a mechanical vector weight. */
const stem = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.3,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const hair = { ...stem, strokeWidth: 1 };

/** A leaf drawn twice: once as outline, once as a faint fill for a little body. */
function Leaf({ x, y, angle, len, width, fill = 0.14 }) {
  const d = leafPath(x, y, angle, len, width);
  return (
    <>
      <path d={d} {...stem} />
      <path d={d} fill="currentColor" opacity={fill} stroke="none" />
    </>
  );
}

function Flower({ cx, cy, r, petals = 5, rotate = 0, fill = 0.16 }) {
  return (
    <g>
      {flowerPaths(cx, cy, r, petals, rotate).map((d, i) => (
        <g key={i}>
          <path d={d} {...hair} />
          <path d={d} fill="currentColor" opacity={fill} stroke="none" />
        </g>
      ))}
      <circle cx={cx} cy={cy} r={r * 0.2} fill="currentColor" opacity="0.5" />
    </g>
  );
}

/* Kiara — a garden that someone planted on purpose and then let be. */
function KiaraSprig() {
  return (
    <g>
      <path d="M40 198 C40 152 35 114 26 70 C22 52 20 34 22 16" {...stem} />
      <path d="M33 132 C40 120 46 110 50 96" {...hair} />
      <path d="M29 90 C22 80 17 70 15 58" {...hair} />
      <Leaf x={36} y={158} angle={-30} len={26} width={11} />
      <Leaf x={33} y={132} angle={-152} len={24} width={10} />
      <Leaf x={30} y={108} angle={-28} len={25} width={11} />
      <Leaf x={27} y={84} angle={-150} len={22} width={9} />
      <Flower cx={50} cy={96} r={9} rotate={-14} />
      <Flower cx={15} cy={58} r={7.5} rotate={22} />
      <Flower cx={22} cy={16} r={10} rotate={-6} />
    </g>
  );
}

/* Simba — nothing tended this. Tall grass with broad leaves pushing through. */
function SimbaSprig() {
  return (
    <g>
      {[
        [18, -34, 118],
        [28, -18, 158],
        [38, -6, 176],
        [48, 14, 150],
        [58, 30, 112],
        [66, 44, 82],
      ].map(([x, drift, height], i) => (
        <path
          key={i}
          d={`M${x} 200 C${x + drift * 0.3} ${200 - height * 0.5} ${x + drift * 0.7} ${200 - height * 0.8} ${x + drift} ${200 - height}`}
          {...stem}
        />
      ))}
      <Leaf x={34} y={168} angle={-155} len={38} width={15} />
      <Leaf x={44} y={140} angle={-22} len={36} width={14} />
      <Leaf x={32} y={112} angle={-158} len={32} width={13} />
      <path d="M46 106 C56 92 54 74 42 62 C36 56 34 48 36 40" {...hair} />
      <Leaf x={40} y={54} angle={-40} len={22} width={8} />
    </g>
  );
}

/* Sebastian — the sparsest of the five. Room to breathe is the point. */
function SebastianSprig() {
  return (
    <g>
      <path d="M42 198 C42 150 38 108 30 62 C27 44 26 28 28 12" {...hair} />
      <path d="M36 140 C46 132 54 122 58 108" {...hair} />
      <path d="M32 92 C24 84 19 74 18 62" {...hair} />
      <Leaf x={39} y={166} angle={-38} len={19} width={6} fill={0.1} />
      <Leaf x={33} y={116} angle={-146} len={17} width={5.5} fill={0.1} />
      <Flower cx={58} cy={108} r={7} petals={6} rotate={12} fill={0.12} />
      <Flower cx={18} cy={62} r={6} petals={6} rotate={-20} fill={0.12} />
      <Flower cx={28} cy={12} r={8} petals={6} rotate={4} fill={0.12} />
    </g>
  );
}

/* Coco — two vines that grew separately and ended up holding on to each other. */
function CocoSprig() {
  return (
    <g>
      <path d="M30 198 C34 160 26 130 32 96 C36 72 32 48 24 22" {...stem} />
      <path d="M56 198 C50 162 60 132 52 98 C46 74 50 48 60 22" {...stem} />
      <path d="M32 96 C40 90 46 92 52 98" {...hair} />
      <path d="M31 148 C40 142 48 146 53 152" {...hair} opacity="0.7" />
      {[
        [33, 170, -32, 1],
        [55, 172, -148, 1],
        [30, 122, -150, 1],
        [54, 124, -30, 1],
        [28, 66, -142, 1],
        [56, 68, -38, 1],
      ].map(([x, y, a], i) => (
        <g key={i}>
          <Leaf x={x} y={y} angle={a} len={20} width={8} />
          <Leaf x={x} y={y} angle={a + 34} len={15} width={6} />
        </g>
      ))}
      <Leaf x={24} y={22} angle={-96} len={18} width={7} />
      <Leaf x={60} y={22} angle={-84} len={18} width={7} />
    </g>
  );
}

/* Princess — sprouting, uneven, and a bit pleased with itself. */
function PrincessSprig() {
  return (
    <g>
      <path d="M38 198 C38 168 34 148 30 124" {...stem} />
      <path d="M30 124 C28 106 32 92 40 78" {...stem} />
      <path d="M52 198 C54 174 58 158 62 142" {...hair} />
      <path d="M22 198 C20 178 16 164 12 150" {...hair} />
      <Leaf x={35} y={172} angle={-28} len={20} width={9} />
      <Leaf x={32} y={144} angle={-152} len={18} width={8} />
      <Flower cx={40} cy={78} r={11} rotate={-10} />
      <Flower cx={62} cy={142} r={8} rotate={30} />
      <Flower cx={12} cy={150} r={7} rotate={-42} />
      <g fill="currentColor" opacity="0.45">
        {[
          [56, 108, 2],
          [20, 108, 1.6],
          [66, 176, 1.4],
          [14, 178, 1.8],
          [48, 52, 1.6],
        ].map(([x, y, r], i) => (
          <circle key={i} cx={x} cy={y} r={r} />
        ))}
      </g>
      <path d="M50 46 l1.5 3.4 3.4 0.3 -2.6 2.2 0.8 3.4 -3.1 -1.9 -3.1 1.9 0.8 -3.4 -2.6 -2.2 3.4 -0.3Z" {...hair} />
    </g>
  );
}

const SPRIGS = {
  kiara: KiaraSprig,
  simba: SimbaSprig,
  sebastian: SebastianSprig,
  coco: CocoSprig,
  princess: PrincessSprig,
};

/**
 * @param {object} props
 * @param {keyof typeof SPRIGS} [props.variant] Which haven's vegetation to grow.
 * @param {boolean} [props.flip] Mirror horizontally, for the opposite margin.
 */
export default function Botanical({ variant = "kiara", className = "", flip = false }) {
  const Sprig = SPRIGS[variant] ?? SPRIGS.kiara;
  return (
    <svg
      viewBox="0 0 80 200"
      className={className}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
      aria-hidden="true"
    >
      <Sprig />
    </svg>
  );
}
