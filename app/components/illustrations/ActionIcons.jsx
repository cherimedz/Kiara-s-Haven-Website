const common = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function AdoptIcon(props) {
  return (
    <svg viewBox="0 0 28 28" width="28" height="28" {...props}>
      <path d="M14 4 L24 13 V23 H4 V13 Z" {...common} />
      <circle cx="11.5" cy="17" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="16.5" cy="17" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="14" cy="14.5" r="1.4" fill="currentColor" stroke="none" />
      <path d="M11 20.5c0-1.7 1.3-3 3-3s3 1.3 3 3" {...common} />
    </svg>
  );
}

export function VolunteerIcon(props) {
  return (
    <svg viewBox="0 0 28 28" width="28" height="28" {...props}>
      <path
        d="M14 21c-4-2.7-8-5.6-8-9.6a4.3 4.3 0 0 1 8-2.1 4.3 4.3 0 0 1 8 2.1c0 4-4 6.9-8 9.6Z"
        {...common}
      />
      <path d="M6 15h4l1.5-2.5L13 17l1.5-3.5L16 15h6" {...common} />
    </svg>
  );
}

export function DonateIcon(props) {
  return (
    <svg viewBox="0 0 28 28" width="28" height="28" {...props}>
      <path
        d="M14 22c-4-2.8-9-6.4-9-11.2A4.8 4.8 0 0 1 14 8.4a4.8 4.8 0 0 1 9 2.4C23 15.6 18 19.2 14 22Z"
        {...common}
      />
    </svg>
  );
}

export function SponsorIcon(props) {
  return (
    <svg viewBox="0 0 28 28" width="28" height="28" {...props}>
      <path
        d="M14 4.5 16.7 10l6 .8-4.4 4.1 1.1 6-5.4-2.9-5.4 2.9 1.1-6-4.4-4.1 6-.8Z"
        {...common}
      />
    </svg>
  );
}

export function ImpactIcon(props) {
  return (
    <svg viewBox="0 0 28 28" width="28" height="28" {...props}>
      <path d="M14 23V13" {...common} />
      <path
        d="M14 13c0-4.5-3-7-7-7 0 4.5 3 7 7 7Z"
        {...common}
      />
      <path
        d="M14 15c0-3.6 2.4-5.6 5.6-5.6 0 3.6-2.4 5.6-5.6 5.6Z"
        {...common}
      />
    </svg>
  );
}

export function FamilyIcon(props) {
  return (
    <svg viewBox="0 0 28 28" width="28" height="28" {...props}>
      <circle cx="9" cy="10" r="2.6" {...common} />
      <circle cx="19" cy="10" r="2.6" {...common} />
      <circle cx="14" cy="8" r="2.2" {...common} />
      <path d="M4 22c0-3.3 2.2-5.4 5-5.4s5 2.1 5 5.4" {...common} />
      <path d="M14 22c0-3.3 2.2-5.4 5-5.4s5 2.1 5 5.4" {...common} />
    </svg>
  );
}
