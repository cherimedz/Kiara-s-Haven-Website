import { Instagram, Facebook, Mail } from "lucide-react";

import Botanical from "@/app/components/illustrations/Botanical";
import { SITE_NAME } from "@/app/lib/siteMetadata";

/**
 * Placeholder destinations. This is a demo concept, so they point at the page
 * itself rather than impersonating accounts that don't exist — but they are
 * real controls, because anything with a hover state should be operable.
 */
const SOCIAL_LINKS = [
  { label: "Instagram", href: "#", Icon: Instagram },
  { label: "Facebook", href: "#", Icon: Facebook },
  { label: "Email us", href: "#contact", Icon: Mail },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line px-6 py-6">
      {/* Cropped hard by the footer's own height, which is the point: the
          garden carries on past the bottom of the page. */}
      <Botanical
        variant="kiara"
        className="decor -left-8 -bottom-10 w-20 opacity-20"
      />
      <Botanical
        flip
        variant="simba"
        className="decor -right-8 -bottom-10 w-20 opacity-20"
      />

      <div className="relative max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-mute">
        <p>{`© ${new Date().getFullYear()} ${SITE_NAME} (Demo Concept)`}</p>

        <ul className="flex items-center gap-2 list-none">
          {SOCIAL_LINKS.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                className="inline-flex p-2 rounded-lg text-ink hover:text-brand transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              >
                <Icon size={18} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
