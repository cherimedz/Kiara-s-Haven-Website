"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Heart } from "lucide-react";
import Button from "./ui/Button";

const navLinks = [
  { href: "/#wayfinder", label: "Adopt" },
  { href: "/#wayfinder", label: "Volunteer" },
  { href: "/#wayfinder", label: "Donate" },
  { href: "/#wayfinder", label: "Sponsor" },
  { href: "/#wayfinder", label: "Impact" },
  { href: "/#wayfinder", label: "Join Our Family" },
];

function LogoMark() {
  return (
    <svg viewBox="0 0 44 44" width="40" height="40" aria-hidden="true">
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

  return (
    <header className="sticky top-0 z-50 bg-page/95 backdrop-blur border-b border-line">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5 text-ink">
          <LogoMark />
          <span className="font-display font-medium text-[19px] leading-[1.1] tracking-[-0.02em]">
            Kiara&apos;s
            <br />
            Haven
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-7 text-sm font-medium tracking-[-0.01em] text-ink">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link href={link.href} className="hover:text-brand transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button href="/#contact" size="sm">
            <Heart size={15} className="mr-2" /> Donate
          </Button>
        </div>

        <button
          className="lg:hidden text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <ul className="lg:hidden flex flex-col gap-1 px-6 pb-4 text-sm font-medium tracking-[-0.01em] text-ink">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 hover:text-brand transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <Button href="/#contact" size="sm" onClick={() => setOpen(false)}>
              Donate
            </Button>
          </li>
        </ul>
      )}
    </header>
  );
}
