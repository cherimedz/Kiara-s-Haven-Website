const line = {
  fill: "none",
  stroke: "var(--kh-text)",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

/* almond-shaped leaf growing from (bx,by) at `angle` degrees */
function leafPath(bx, by, angle, len, width) {
  const r = (angle * Math.PI) / 180;
  const cos = Math.cos(r);
  const sin = Math.sin(r);
  const tx = bx + cos * len;
  const ty = by + sin * len;
  const px = -sin * width;
  const py = cos * width;
  const mx = bx + cos * len * 0.45;
  const my = by + sin * len * 0.45;
  return `M${bx} ${by} Q${mx + px} ${my + py} ${tx} ${ty} Q${mx - px} ${my - py} ${bx} ${by}Z`;
}

function Branch({ stem, leaves, color }) {
  return (
    <g stroke={color} strokeWidth="1.3" fill="none" strokeLinecap="round">
      <path d={stem} />
      {leaves.map(([x, y, a], i) => (
        <g key={i}>
          <path d={leafPath(x, y, a, 34, 12)} />
          <path d={leafPath(x, y, a, 34, 12)} fill={color} opacity="0.16" stroke="none" />
        </g>
      ))}
    </g>
  );
}

export default function HeroScene({ className = "" }) {
  return (
    <svg
      viewBox="0 0 520 400"
      className={className}
      role="img"
      aria-label="Line illustration of three animals sitting outside a house"
    >
      {/* soft colour fields */}
      <circle cx="398" cy="118" r="94" fill="var(--kh-tint-terracotta)" opacity="0.5" />
      <circle cx="146" cy="200" r="72" fill="var(--kh-tint-ochre)" opacity="0.42" />
      <ellipse cx="300" cy="252" rx="122" ry="88" fill="var(--kh-tint-rose)" opacity="0.24" />

      {/* leafy branches framing the house */}
      <Branch
        color="var(--kh-simba-from)"
        stem="M158 308 C142 254 128 200 120 142"
        leaves={[
          [152, 288, -160],
          [146, 262, -60],
          [139, 232, -160],
          [133, 202, -60],
          [127, 174, -155],
          [122, 150, -65],
        ]}
      />
      <Branch
        color="var(--kh-simba-from)"
        stem="M442 308 C458 254 472 200 480 142"
        leaves={[
          [448, 288, -20],
          [454, 262, -120],
          [461, 232, -20],
          [467, 202, -120],
          [473, 174, -25],
          [478, 150, -115],
        ]}
      />

      {/* house */}
      <path d="M204 304 V146 L300 62 L396 146 V304" {...line} />
      <path
        d="M291 124 c4 -6 13 -6 16 1 c3 -7 12 -7 16 -1 c0 10 -16 21 -16 21 s-16 -11 -16 -21Z"
        fill="var(--kh-accent)"
        opacity="0.85"
      />

      {/* ground */}
      <path
        d="M34 322 C124 294 202 302 262 306 C332 310 410 302 490 324"
        stroke="var(--kh-accent)"
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
        opacity="0.5"
      />

      <g transform="translate(300 305) scale(1.16) translate(-300 -305)">
      {/* small cat, from behind */}
      <g {...line}>
        <path d="M226 305 C226 278 233 263 246 263 C259 263 266 278 266 305" />
        <circle cx="246" cy="252" r="15" />
        <path d="M234 243 L232 229 L245 238" />
        <path d="M258 243 L260 229 L247 238" />
        <path d="M266 300 C282 305 292 294 290 278" />
      </g>

      {/* dog, from behind */}
      <g {...line}>
        <path d="M276 305 C276 268 285 248 302 248 C319 248 328 268 328 305" />
        <circle cx="302" cy="234" r="18" />
        <path d="M286 228 c-9 3 -12 13 -9 22 c2 5 7 6 10 3" />
        <path d="M318 228 c9 3 12 13 9 22 c-2 5 -7 6 -10 3" />
        <path d="M328 299 c12 -2 17 -12 14 -22" />
      </g>

      {/* larger cat, from behind */}
      <g {...line}>
        <path d="M334 305 C334 260 344 236 360 236 C376 236 386 260 386 305" />
        <circle cx="360" cy="222" r="17" />
        <path d="M346 212 L343 196 L358 207" />
        <path d="M374 212 L377 196 L362 207" />
        <path d="M386 298 C412 304 426 284 420 260" />
      </g>
      </g>

      {/* ground speckles */}
      <g fill="var(--kh-accent)" opacity="0.3">
        {[[112, 332], [142, 342], [178, 334], [416, 336], [448, 346], [478, 338]].map(
          ([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="1.8" />
          )
        )}
      </g>
    </svg>
  );
}
