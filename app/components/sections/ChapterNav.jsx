import Link from "next/link";

import Container from "@/app/components/ui/Container";
import { ACTIONS } from "@/app/lib/actions";
import { INTERACTION } from "@/app/lib/layout";

/**
 * The six actions as a chapter index.
 *
 * Deliberately links-to-sections rather than true tabs. Tabs would hide five of
 * the six chapters until JavaScript ran, which breaks the deep links the navbar
 * and every action card rely on (`/get-involved#donate`), and puts the content
 * behind a script for anyone who doesn't get one. This is the same navigation
 * with none of that: every chapter is in the page, and the index moves you
 * through it.
 *
 * Styled as a book's contents — a rule that draws itself under the word — so it
 * reads as chapters rather than as a row of toolbar buttons.
 */
export default function ChapterNav() {
  return (
    <nav aria-label="Ways to help" className="sticky top-16 md:top-18 lg:top-20 z-40">
      <div className="bg-page/90 backdrop-blur border-y border-line">
        <Container>
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2 py-4 list-none">
            {ACTIONS.map(({ id, label }) => (
              <li key={id}>
                <Link
                  href={`#${id}`}
                  className={`group relative block py-1 font-semibold text-[11px] uppercase tracking-[0.16em] text-mute hover:text-brand-dark transition-colors duration-fast rounded-sm ${INTERACTION.focus}`}
                >
                  {label}
                  <span
                    aria-hidden="true"
                    className="absolute left-0 -bottom-0.5 h-px w-full origin-left scale-x-0 bg-brand transition-transform duration-standard group-hover:scale-x-100"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </nav>
  );
}
