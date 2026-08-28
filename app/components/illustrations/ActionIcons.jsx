const s = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

/* Adopt — a home with a paw inside */
export function AdoptIcon(props) {
  return (
    <svg viewBox="0 0 40 40" width="40" height="40" {...props}>
      <path d="M6 19 L20 7 L34 19 V34 H6 Z" {...s} />
      <g fill="currentColor">
        <ellipse cx="16" cy="23.5" rx="1.7" ry="2.2" />
        <ellipse cx="20" cy="22.3" rx="1.7" ry="2.2" />
        <ellipse cx="24" cy="23.5" rx="1.7" ry="2.2" />
      </g>
      <path d="M20 26.5 c-3.2 0 -5 2 -5 3.8 c0 1.6 1.6 2.4 5 2.4 s5 -0.8 5 -2.4 c0 -1.8 -1.8 -3.8 -5 -3.8Z" {...s} />
    </svg>
  );
}

/* Volunteer — an open hand holding a heart */
export function VolunteerIcon(props) {
  return (
    <svg viewBox="0 0 40 40" width="40" height="40" {...props}>
      <path
        d="M20 18 c-1.6 -3 -6.4 -2.6 -6.4 1.4 c0 2.9 3.7 5.4 6.4 7.2 c2.7 -1.8 6.4 -4.3 6.4 -7.2 c0 -4 -4.8 -4.4 -6.4 -1.4Z"
        {...s}
      />
      <path d="M6 28 c5 -3 9 -3 13 -1" {...s} />
      <path d="M19 27 c4 -1 8 -0.5 11 1.6 c2 1.3 3.4 2.8 4 4.4" {...s} />
      <path d="M6 28 c-1 1.6 -1 3.4 0 5" {...s} opacity="0.6" />
    </svg>
  );
}

/* Donate — a heart */
export function DonateIcon(props) {
  return (
    <svg viewBox="0 0 40 40" width="40" height="40" {...props}>
      <path
        d="M20 32 C13 26.5 6 21.5 6 15.6 A6.6 6.6 0 0 1 20 12 A6.6 6.6 0 0 1 34 15.6 C34 21.5 27 26.5 20 32Z"
        {...s}
      />
    </svg>
  );
}

/* Sponsor — a star */
export function SponsorIcon(props) {
  return (
    <svg viewBox="0 0 40 40" width="40" height="40" {...props}>
      <path
        d="M20 7 L24.6 16.4 L35 17.9 L27.5 25.2 L29.3 35.5 L20 30.6 L10.7 35.5 L12.5 25.2 L5 17.9 L15.4 16.4Z"
        {...s}
      />
    </svg>
  );
}

/* Impact — a growing sprout */
export function ImpactIcon(props) {
  return (
    <svg viewBox="0 0 40 40" width="40" height="40" {...props}>
      <path d="M20 34 V17" {...s} />
      <path d="M20 20 c0 -6.6 -4.6 -10.4 -11 -11 c0 6.6 4.6 10.4 11 11Z" {...s} />
      <path d="M20 22 c0 -5.6 3.9 -8.9 9.4 -9.4 c0 5.6 -3.9 8.9 -9.4 9.4Z" {...s} />
      <path d="M13 34 h14" {...s} opacity="0.55" />
    </svg>
  );
}

/* Join Our Family — three figures */
export function FamilyIcon(props) {
  return (
    <svg viewBox="0 0 40 40" width="40" height="40" {...props}>
      <circle cx="12" cy="14" r="3.4" {...s} />
      <circle cx="28" cy="14" r="3.4" {...s} />
      <circle cx="20" cy="11" r="3" {...s} />
      <path d="M5 30 c0 -4 3.1 -6.6 7 -6.6 s7 2.6 7 6.6" {...s} />
      <path d="M21 30 c0 -4 3.1 -6.6 7 -6.6 s7 2.6 7 6.6" {...s} />
      <path d="M14 33 c0 -4.4 2.7 -7.2 6 -7.2 s6 2.8 6 7.2" {...s} />
    </svg>
  );
}
