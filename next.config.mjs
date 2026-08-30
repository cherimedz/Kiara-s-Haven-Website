const isDev = process.env.NODE_ENV === "development";

/**
 * Baseline hardening. The CSP is production-only because Turbopack's dev server
 * relies on eval() for source maps.
 */
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains",
  },
  ...(isDev
    ? []
    : [
        {
          key: "Content-Security-Policy",
          value: [
            "default-src 'self'",
            // Next.js injects inline hydration scripts.
            "script-src 'self' 'unsafe-inline'",
            // Tailwind emits inline styles.
            "style-src 'self' 'unsafe-inline'",
            "img-src 'self' data:",
            // next/font self-hosts its files, so no external font origin.
            "font-src 'self'",
            "connect-src 'self'",
            "frame-ancestors 'none'",
            "base-uri 'self'",
            "form-action 'self'",
          ].join("; "),
        },
      ]),
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [{ source: "/(.*)", headers: securityHeaders }];
  },
};

export default nextConfig;
