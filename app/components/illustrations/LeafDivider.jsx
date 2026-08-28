export default function LeafDivider({ className = "" }) {
  return (
    <svg
      viewBox="0 0 60 24"
      width="60"
      height="24"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M30 20 C30 14 26 10 20 8 M30 20 C30 14 34 10 40 8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M20 8 C22 6 24 5 27 5.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M40 8 C38 6 36 5 33 5.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <circle cx="30" cy="21" r="1.6" fill="currentColor" />
    </svg>
  );
}
