"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
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
    <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
      <path
        d="M16 4 L28 15 V28 H4 V15 Z"
        fill="none"
        stroke="var(--kh-accent)"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="20" r="1.4" fill="var(--kh-accent)" />
      <circle cx="20" cy="20" r="1.4" fill="var(--kh-accent)" />
      <circle cx="16" cy="17" r="1.4" fill="var(--kh-accent)" />
      <path d="M12.5 24c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5" fill="none" stroke="var(--kh-accent)" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-bg/95 backdrop-blur border-b border-line">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 font-[family-name:var(--font-heading)] text-lg font-semibold text-ink">
          <LogoMark />
          Kiara&apos;s Haven
        </Link>

        <ul className="hidden lg:flex items-center gap-7 text-sm font-medium text-ink">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link href={link.href} className="hover:text-accent transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button href="/#contact" size="sm">
            Donate
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
        <ul className="lg:hidden flex flex-col gap-1 px-6 pb-4 text-sm font-medium text-ink">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 hover:text-accent transition-colors"
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
