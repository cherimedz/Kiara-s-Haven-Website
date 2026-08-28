export default function SimbaScene({ className = "" }) {
  return (
    <svg viewBox="0 0 200 200" className={className} role="img" aria-label="Line illustration of a sun over wild leaves">
      <circle cx="130" cy="70" r="34" fill="none" stroke="currentColor" strokeWidth="2" />
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M130 24v-10 M130 126v10 M84 70h-10 M186 70h-10" />
        <path d="M97 37l-7-7 M170 103l7 7 M97 103l-7 7 M170 37l7-7" />
      </g>
      <path
        d="M20 180c0-40 24-64 60-70 -8 30-28 52-60 70Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M40 180c4-26 20-42 44-48"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        opacity="0.6"
      />
    </svg>
  );
}
