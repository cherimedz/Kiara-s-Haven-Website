import Link from "next/link";

import Eyebrow from "@/app/components/ui/Eyebrow";
import HavenMotif from "@/app/components/illustrations/HavenMotif";
import { HAVENS } from "@/app/lib/havens";
import { getPalette } from "@/app/lib/palette";

/**
 * The other three havens — so each page is a room in the same house rather than
 * a dead end that only leads back to the homepage.
 *
 * @param {object} props
 * @param {import('@/app/lib/havens').Haven} props.haven The current haven, excluded.
 */
export default function HavenSiblings({ haven }) {
  const siblings = HAVENS.filter((candidate) => candidate.slug !== haven.slug);

  return (
    <section className="px-6 pb-16">
      <div className="max-w-4xl mx-auto">
        <Eyebrow as="h2" className="text-center mb-8">
          The other havens
        </Eyebrow>

        <ul className="grid sm:grid-cols-3 gap-4 list-none">
          {siblings.map((sibling) => {
            const palette = getPalette(sibling.token);

            return (
              <li key={sibling.slug} className="flex">
                <Link
                  href={`/${sibling.slug}`}
                  className={`group relative overflow-hidden w-full rounded-2xl border p-5 min-h-[150px] flex flex-col transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${palette.card} ${palette.border} ${palette.ink}`}
                >
                  <HavenMotif
                    haven={sibling.token}
                    className="pointer-events-none absolute right-0 bottom-0 w-[70%] h-[48%] opacity-30"
                  />
                  <p className="relative font-semibold text-[10px] uppercase tracking-[0.16em] opacity-80 mb-1.5">
                    {sibling.focus}
                  </p>
                  <h3 className="relative font-display font-medium text-[19px] leading-[1.1] tracking-[-0.02em]">
                    {sibling.name}
                  </h3>
                  <span className="relative mt-auto text-sm font-semibold">
                    Explore{" "}
                    <span className="inline-block transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
