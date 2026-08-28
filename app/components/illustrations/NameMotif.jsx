const s = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const motifs = {
  /* Kiara — home */
  kiara: (
    <>
      <path d="M4 10 L12 3 L20 10 V20 H4 Z" {...s} />
      <path d="M9.5 20 v-5 h5 v5" {...s} />
    </>
  ),
  /* Simba — leaf */
  simba: (
    <>
      <path d="M5 19 C5 11 11 5 19 5 C19 13 13 19 5 19 Z" {...s} />
      <path d="M5 19 C9 15 13 12 17 10" {...s} />
    </>
  ),
  /* Sebastian — crescent moon */
  sebastian: (
    <path d="M17 15.5 A7.5 7.5 0 1 1 10.5 5 A6 6 0 0 0 17 15.5 Z" {...s} />
  ),
  /* Coco — community */
  coco: (
    <>
      <circle cx="7" cy="9" r="2.6" {...s} />
      <circle cx="17" cy="9" r="2.6" {...s} />
      <path d="M3 19 c0-2.6 1.8-4.2 4-4.2 s4 1.6 4 4.2" {...s} />
      <path d="M13 19 c0-2.6 1.8-4.2 4-4.2 s4 1.6 4 4.2" {...s} />
    </>
  ),
  /* Princess — little sun */
  princess: (
    <>
      <circle cx="12" cy="12" r="4.4" {...s} />
      <path d="M12 3.5 v2 M12 18.5 v2 M3.5 12 h2 M18.5 12 h2" {...s} />
      <path d="M6 6 l1.5 1.5 M18 18 l-1.5-1.5 M18 6 l-1.5 1.5 M6 18 l1.5-1.5" {...s} />
    </>
  ),
};

export default function NameMotif({ pet, className = "" }) {
  const motif = motifs[pet];
  if (!motif) return null;
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" className={className} aria-hidden="true">
      {motif}
    </svg>
  );
}
