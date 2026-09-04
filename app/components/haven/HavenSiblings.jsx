import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Eyebrow from "@/app/components/ui/Eyebrow";
import HavenMotif from "@/app/components/illustrations/HavenMotif";
import { HAVENS } from "@/app/lib/havens";
import Container from "@/app/components/ui/Container";
import Section from "@/app/components/ui/Section";
import { CARD, INTERACTION } from "@/app/lib/layout";
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
    <Section rhythm="compact">
      <Container>
        <Eyebrow as="h2" token={haven.token} className="mb-10">
          The other havens
        </Eyebrow>

        <ul className="grid sm:grid-cols-3 gap-4 md:gap-5 lg:gap-6 list-none">
          {siblings.map((sibling) => {
            const palette = getPalette(sibling.token);

            return (
              <li key={sibling.slug} className="flex">
                <Link
                  href={`/${sibling.slug}`}
                  className={`relative overflow-hidden w-full border min-h-[180px] flex flex-col hover:shadow-lift ${CARD.action.shape} ${INTERACTION.card} ${INTERACTION.focus} ${palette.card} ${palette.border} ${palette.ink}`}
                >
                  <HavenMotif
                    haven={sibling.token}
                    className={`pointer-events-none absolute right-0 bottom-0 w-[64%] aspect-[16/11] opacity-30 [mask-image:linear-gradient(to_right,transparent,#000_45%)] [-webkit-mask-image:linear-gradient(to_right,transparent,#000_45%)]`}
                  />
                  <p className="relative font-semibold text-[10px] uppercase tracking-[0.16em] opacity-80 mb-1.5">
                    {sibling.focus}
                  </p>
                  <h3 className="relative font-display font-medium text-[19px] leading-[1.1] tracking-[-0.02em]">
                    {sibling.name}
                  </h3>
                  <span className="relative mt-auto pt-5 inline-flex items-center gap-2 text-sm font-semibold">
                    Explore
                    <ArrowRight size={16} aria-hidden="true" className={INTERACTION.arrow} />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
