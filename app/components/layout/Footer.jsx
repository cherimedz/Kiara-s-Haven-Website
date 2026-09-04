import Link from "next/link";
import { Instagram, Github, ArrowRight } from "lucide-react";

import Botanical from "@/app/components/illustrations/Botanical";
import Container from "@/app/components/ui/Container";
import Button from "@/app/components/ui/Button";
import Field, { CONTROL } from "@/app/components/ui/Field";
import { HAVENS } from "@/app/lib/havens";
import { INTERACTION, MEASURE } from "@/app/lib/layout";
import { SITE_NAME } from "@/app/lib/siteMetadata";

/**
 * The last page of the story, not a sitemap.
 *
 * No Company / Services / Legal / Support columns — this site has none of those
 * things, and inventing them would be the fastest way to make a personal
 * project read like a template. It closes the way the site opened: a line of
 * Fraunces, one invitation, and the acknowledgement that all of this came from
 * five real animals.
 *
 * Destinations are real routes or `#`; nothing here impersonates an account
 * that doesn't exist.
 */
const SOCIAL_LINKS = [
  { label: "Instagram", href: "#", Icon: Instagram },
  { label: "GitHub", href: "https://github.com/cherimedz", Icon: Github },
];

const ABOUT_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Get involved", href: "/get-involved" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-surface paper-grain">
      <Botanical variant="kiara" className="decor -left-8 bottom-0 w-20 opacity-20" />
      <Botanical flip variant="simba" className="decor -right-8 bottom-0 w-20 opacity-20" />

      <Container className="relative py-16 md:py-20">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-6">
          <div className="lg:col-span-7">
            <p className="font-semibold text-[11px] uppercase tracking-[0.16em] text-brand-dark mb-4">
              Let&apos;s stay connected
            </p>
            <p
              className={`font-display font-normal text-ink text-[clamp(1.75rem,2.8vw,2.25rem)] leading-[1.12] tracking-[-0.025em] ${MEASURE.narrow}`}
            >
              A little more kindness,
              <br />
              <span className="italic text-brand">for every kind of life.</span>
            </p>

            {/* Demo concept: this collects nothing and goes nowhere. */}
            <form
              className="mt-8 flex flex-col sm:flex-row sm:items-end gap-3 max-w-measure"
              action="/#contact"
            >
              <Field id="footer-email" label="Email address" className="flex-1">
                <input
                  id="footer-email"
                  type="email"
                  placeholder="you@example.com"
                  className={`${CONTROL} h-13`}
                />
              </Field>
              <Button type="submit" className="shrink-0">
                Join
                <ArrowRight size={16} aria-hidden="true" className={INTERACTION.arrow} />
              </Button>
            </form>
          </div>

          <nav className="lg:col-span-5 grid grid-cols-2 gap-8 lg:justify-items-end">
            <div>
              <p className="font-display font-medium text-ink text-[17px] mb-4">
                {SITE_NAME}
              </p>
              <ul className="space-y-2.5 list-none text-sm text-mute">
                {ABOUT_LINKS.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className={`hover:text-brand-dark transition-colors duration-fast rounded-sm ${INTERACTION.focus}`}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-display font-medium text-ink text-[17px] mb-4">Our havens</p>
              <ul className="space-y-2.5 list-none text-sm text-mute">
                {HAVENS.map((haven) => (
                  <li key={haven.slug}>
                    <Link
                      href={`/${haven.slug}`}
                      className={`hover:text-brand-dark transition-colors duration-fast rounded-sm ${INTERACTION.focus}`}
                    >
                      {haven.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        <hr className="border-0 border-t border-line my-12" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-mute">
          {/* The most important line in the footer. */}
          <p className="text-center sm:text-left">
            Made as a fictional concept, inspired by five real lives.
            <span className="block text-subtle mt-1">
              {`© ${new Date().getFullYear()} ${SITE_NAME}`}
            </span>
          </p>

          <ul className="flex items-center gap-2 list-none">
            {SOCIAL_LINKS.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  className={`inline-flex items-center justify-center w-11 h-11 rounded-full text-ink hover:text-brand hover:bg-linen transition-colors duration-fast ${INTERACTION.focus}`}
                >
                  <Icon size={18} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
