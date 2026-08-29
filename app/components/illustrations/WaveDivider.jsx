/* Organic section transition. `fill` is the colour of the section BELOW the wave. */
export default function WaveDivider({ fill = "var(--kh-surface)", flip = false, className = "" }) {
  return (
    <div className={`w-full leading-[0] ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        className={`w-full h-[60px] md:h-[90px] ${flip ? "rotate-180" : ""}`}
      >
        <path
          d="M0 46 C180 6 340 4 520 30 C700 56 860 78 1040 66 C1180 57 1320 30 1440 14 V90 H0 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
