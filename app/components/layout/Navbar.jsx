"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";

import Button from "@/app/components/ui/Button";
import Container from "@/app/components/ui/Container";
import { actionHref } from "@/app/lib/actions";
import { INTERACTION } from "@/app/lib/layout";

/**
 * Five links, not every route.
 *
 * The site has six actions and four havens; putting all ten in the bar would
 * make the most important ones invisible. Sponsor and the havens stay
 * discoverable through the homepage and `/get-involved`, and "Join our family"
 * is promoted out of the list into the one CTA.
 */
const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: actionHref("adopt"), label: "Adopt" },
  { href: actionHref("volunteer"), label: "Volunteer" },
  { href: actionHref("donate"), label: "Donate" },
  { href: actionHref("impact"), label: "Impact" },
];

function LogoMark() {
  return (
    <svg viewBox="0 0 44 44" width="38" height="38" aria-hidden="true">
      <path
        d="M6 19 L22 5 L38 19 V38 H6 Z"
        fill="none"
        stroke="var(--kh-brand)"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <g fill="var(--kh-brand)">
        <ellipse cx="16.5" cy="23.5" rx="2" ry="2.7" />
        <ellipse cx="22" cy="22" rx="2" ry="2.7" />
        <ellipse cx="27.5" cy="23.5" rx="2" ry="2.7" />
        <path d="M22 26.5 c-4.2 0 -6.6 2.7 -6.6 5.2 c0 2.2 2.2 3.2 6.6 3.2 s6.6 -1 6.6 -3.2 c0 -2.5 -2.4 -5.2 -6.6 -5.2Z" />
      </g>
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* The bar starts transparent and sits on the cream. It only earns a surface
     once there is content behind it — a permanently opaque bar with a shadow
     reads as chrome bolted onto the page rather than part of it. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dressed = scrolled || open;

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,border-color,box-shadow] duration-standard ${
        dressed
          ? "bg-surface/85 backdrop-blur border-b border-line shadow-lift"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <Container as="nav" className="h-16 md:h-18 lg:h-20 flex items-center justify-between">
        <Link
          href="/"
          className={`flex items-center gap-2.5 text-ink rounded-sm ${INTERACTION.focus}`}
        >
          <LogoMark />
          <span className="font-display font-medium text-[22px] leading-[1.05] tracking-[-0.02em]">
            Kiara&apos;s Haven
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-[-0.01em] text-ink">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              {/* The underline draws itself outward from the left rather than
                  appearing all at once — the one nav interaction in the set. */}
              <Link
                href={link.href}
                className={`group relative py-2 hover:text-brand-dark transition-colors duration-fast rounded-sm ${INTERACTION.focus}`}
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className="absolute left-0 -bottom-0.5 h-px w-full origin-left scale-x-0 bg-brand transition-transform duration-standard group-hover:scale-x-100"
                />
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button href={actionHref("join-our-family")} size="sm">
            Join our family
            <ArrowRight size={15} aria-hidden="true" className={INTERACTION.arrow} />
          </Button>
        </div>

        <button
          className={`lg:hidden text-ink rounded-sm p-1 ${INTERACTION.focus}`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      {open && (
        <Container
          as="ul"
          className="lg:hidden flex flex-col gap-1 pb-6 text-sm font-medium tracking-[-0.01em] text-ink"
        >
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block py-3 hover:text-brand-dark transition-colors duration-fast rounded-sm ${INTERACTION.focus}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-3">
            <Button
              href={actionHref("join-our-family")}
              size="sm"
              onClick={() => setOpen(false)}
            >
              Join our family
              <ArrowRight size={15} aria-hidden="true" />
            </Button>
          </li>
        </Container>
      )}
    </header>
  );
}
