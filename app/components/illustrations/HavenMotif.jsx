const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

function PlantMotif(props) {
  return (
    <svg viewBox="0 0 90 90" {...props}>
      <path d="M45 80 V40" {...stroke} />
      <path d="M45 50 C45 35 55 30 65 28 C63 40 55 48 45 50Z" {...stroke} />
      <path d="M45 60 C45 48 37 42 28 40 C29 52 36 58 45 60Z" {...stroke} />
      <path d="M20 80 H70" {...stroke} opacity="0.6" />
    </svg>
  );
}

function WindowChairMotif(props) {
  return (
    <svg viewBox="0 0 90 90" {...props}>
      <rect x="14" y="14" width="28" height="34" rx="2" {...stroke} />
      <path d="M28 14 V48 M14 31 H42" {...stroke} opacity="0.7" />
      <path d="M52 80 V56 h20 v24" {...stroke} />
      <path d="M52 56 v-16 a10 10 0 0 1 20 0 v16" {...stroke} />
      <path d="M48 80 h28" {...stroke} />
    </svg>
  );
}

function ConnectedHandsMotif(props) {
  return (
    <svg viewBox="0 0 90 90" {...props}>
      <circle cx="30" cy="35" r="14" {...stroke} />
      <circle cx="60" cy="35" r="14" {...stroke} />
      <circle cx="45" cy="60" r="14" {...stroke} />
      <path d="M38 42 L52 52 M52 42 L38 52" {...stroke} opacity="0.7" />
    </svg>
  );
}

function StarReachMotif(props) {
  return (
    <svg viewBox="0 0 90 90" {...props}>
      <path d="M45 78 V56 M45 56 c0 -14 8 -18 8 -30" {...stroke} />
      <circle cx="45" cy="50" r="10" {...stroke} />
      <path
        d="M63 20 l2.5 6 6 0.5 -4.5 4 1.3 6 -5.3 -3.2 -5.3 3.2 1.3 -6 -4.5 -4 6 -0.5Z"
        {...stroke}
      />
    </svg>
  );
}

const motifs = {
  simba: PlantMotif,
  sebastian: WindowChairMotif,
  coco: ConnectedHandsMotif,
  princess: StarReachMotif,
};

export default function HavenMotif({ haven, className = "" }) {
  const Motif = motifs[haven];
  if (!Motif) return null;
  return <Motif className={className} />;
}
