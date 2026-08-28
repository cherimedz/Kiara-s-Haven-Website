const pets = {
  kiara: { species: "cat", face: "#e3a06b", ear: "#c1592f", frame: "var(--kh-accent)" },
  simba: { species: "dog", face: "#e0b96a", ear: "#a97a2e", frame: "var(--kh-simba-from)" },
  sebastian: { species: "dog", face: "#f2ebe0", ear: "#d9c8b4", frame: "var(--kh-sebastian-from)" },
  coco: { species: "cat", face: "#3a2a20", ear: "#2a1d16", frame: "var(--kh-coco-from)", markings: "#f2ebe0" },
  princess: { species: "cat", face: "#e7b98a", ear: "#d99a63", frame: "var(--kh-princess-from)" },
};

function CatFace({ face, ear, markings }) {
  return (
    <g>
      <path d="M22 30 L30 10 L38 28 Z" fill={ear} />
      <path d="M58 30 L50 10 L42 28 Z" fill={ear} />
      <ellipse cx="40" cy="46" rx="24" ry="22" fill={face} />
      {markings && <path d="M40 24 C48 26 54 34 54 46 C54 54 48 60 40 61 Z" fill={markings} opacity="0.9" />}
      <circle cx="32" cy="44" r="2.6" fill="#241a12" />
      <circle cx="48" cy="44" r="2.6" fill="#241a12" />
      <path d="M40 50 l-2.5 3h5Z" fill="#241a12" />
      <path d="M40 54 q-4 3 -8 1.5 M40 54 q4 3 8 1.5" stroke="#241a12" strokeWidth="1.2" fill="none" strokeLinecap="round" />
    </g>
  );
}

function DogFace({ face, ear }) {
  return (
    <g>
      <path d="M18 28 C14 40 16 52 24 56 L26 34 Z" fill={ear} />
      <path d="M62 28 C66 40 64 52 56 56 L54 34 Z" fill={ear} />
      <ellipse cx="40" cy="48" rx="23" ry="21" fill={face} />
      <ellipse cx="40" cy="56" rx="10" ry="8" fill={face} opacity="0.85" />
      <circle cx="33" cy="44" r="2.6" fill="#241a12" />
      <circle cx="47" cy="44" r="2.6" fill="#241a12" />
      <ellipse cx="40" cy="54" rx="3.4" ry="2.6" fill="#241a12" />
      <path d="M40 57 q-4 3 -7 1 M40 57 q4 3 7 1" stroke="#241a12" strokeWidth="1.2" fill="none" strokeLinecap="round" />
    </g>
  );
}

export default function PetPortrait({ pet }) {
  const config = pets[pet];
  if (!config) return null;

  return (
    <svg viewBox="0 0 80 96" width="100%" height="100%" role="img" aria-label={`Illustrated portrait of ${pet}`}>
      <ellipse cx="40" cy="48" rx="38" ry="46" fill={config.frame} opacity="0.18" />
      <ellipse cx="40" cy="48" rx="32" ry="40" fill={config.frame} opacity="0.12" />
      {config.species === "cat" ? (
        <CatFace face={config.face} ear={config.ear} markings={config.markings} />
      ) : (
        <DogFace face={config.face} ear={config.ear} />
      )}
    </svg>
  );
}
