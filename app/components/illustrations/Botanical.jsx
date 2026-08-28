/* Delicate leafy branch used in page margins and behind the hero house. */
export default function Botanical({ className = "", flip = false }) {
  return (
    <svg
      viewBox="0 0 80 200"
      className={className}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
      aria-hidden="true"
    >
      <g fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
        <path d="M40 198 C40 150 34 108 22 62 C18 44 16 26 18 8" />
        {[
          [26, 168, 1],
          [32, 140, -1],
          [24, 118, 1],
          [28, 94, -1],
          [21, 72, 1],
          [24, 50, -1],
          [18, 30, 1],
        ].map(([x, y, dir], i) => (
          <g key={i}>
            <path d={`M${x} ${y} c${12 * dir} -4 ${18 * dir} -12 ${19 * dir} -22`} />
            <path
              d={`M${x} ${y} c${4 * dir} -10 ${12 * dir} -17 ${19 * dir} -22 c${-9 * dir} 1 ${-16 * dir} 8 ${-19 * dir} 22Z`}
              fill="currentColor"
              opacity="0.14"
              stroke="none"
            />
          </g>
        ))}
      </g>
    </svg>
  );
}
