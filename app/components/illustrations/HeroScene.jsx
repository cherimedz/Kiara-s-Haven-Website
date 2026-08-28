export default function HeroScene({ className = "" }) {
  return (
    <svg viewBox="0 0 480 360" className={className} role="img" aria-label="Line illustration of a house with three animals sitting outside">
      <circle cx="360" cy="110" r="90" fill="var(--kh-tint-terracotta)" opacity="0.6" />
      <circle cx="120" cy="260" r="60" fill="var(--kh-tint-ochre)" opacity="0.5" />

      {/* ground */}
      <path d="M20 320 Q240 300 460 320" stroke="var(--kh-accent)" strokeWidth="2" fill="none" opacity="0.5" />

      {/* house outline */}
      <path
        d="M150 190 L260 110 L370 190 V300 H150 Z"
        fill="none"
        stroke="var(--kh-text)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M260 195 L260 300" stroke="var(--kh-text)" strokeWidth="1" opacity="0.2" />
      <circle cx="260" cy="155" r="14" fill="none" stroke="var(--kh-accent)" strokeWidth="2" />

      {/* plants */}
      <g stroke="var(--kh-coco-from)" strokeWidth="1.6" fill="none" strokeLinecap="round">
        <path d="M400 300 C400 270 415 260 420 240" />
        <path d="M410 280 C420 275 428 268 430 258" />
        <path d="M400 290 C392 282 388 272 388 262" />
        <path d="M100 305 C100 285 108 275 112 260" />
        <path d="M108 292 C116 288 122 282 124 274" />
      </g>

      {/* three animals sitting, left to right: small cat, dog, larger cat */}
      <g fill="none" stroke="var(--kh-text)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {/* small cat */}
        <path d="M196 300 L196 282 Q196 262 214 262 Q232 262 232 282 L232 300 Z" />
        <path d="M200 264 L204 250 L210 262 Z" fill="var(--kh-bg)" />
        <path d="M228 264 L224 250 L218 262 Z" fill="var(--kh-bg)" />
        <path d="M232 296 Q246 296 250 282" />

        {/* dog */}
        <path d="M236 300 L236 274 Q236 250 258 250 Q280 250 280 274 L280 300 Z" />
        <path d="M240 254 Q232 258 232 270 Q232 278 240 280" fill="var(--kh-bg)" />
        <path d="M276 254 Q284 258 284 270 Q284 278 276 280" fill="var(--kh-bg)" />

        {/* larger cat */}
        <path d="M284 300 L284 266 Q284 240 308 240 Q332 240 332 266 L332 300 Z" />
        <path d="M290 244 L296 226 L304 240 Z" fill="var(--kh-bg)" />
        <path d="M326 244 L320 226 L312 240 Z" fill="var(--kh-bg)" />
        <path d="M332 292 Q352 296 358 276 Q362 264 356 256" />
      </g>

    </svg>
  );
}
