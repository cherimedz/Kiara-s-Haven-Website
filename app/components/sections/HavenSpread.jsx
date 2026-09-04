import Link from "next/link";
import { ArrowRight } from "lucide-react";

import SectionHeading from "@/app/components/ui/SectionHeading";
import HavenMotif from "@/app/components/illustrations/HavenMotif";
import LeafDivider from "@/app/components/illustrations/LeafDivider";
import Container from "@/app/components/ui/Container";
import Section from "@/app/components/ui/Section";
import { HAVENS } from "@/app/lib/havens";
import { CARD, INTERACTION } from "@/app/lib/layout";
import { getPalette } from "@/app/lib/palette";

/**
 * Column spans on the twelve-column desktop grid: 7/5, then 5/7.
 *
 * A four-up row of identical cards reads as a template, and these are meant to
 * read as four chapters. Keyed by token rather than by index so the layout
 * survives someone reordering `HAVENS`.
 */
const SPAN = Object.freeze({
  simba: "lg:col-span-7",
  sebastian: "lg:col-span-5",
  coco: "lg:col-span-5",
  princess: "lg:col-span-7",
});

/** Homepage grid linking to each of the four havens. */
export default function HavenSpread() {
  return (
    <Section id="havens" rhythm="grid" flush>
      <Container>
        <div className="flex justify-center mb-3 text-simba-secondary">
          <LeafDivider />
        </div>
        <SectionHeading
          eyebrow="Our havens"
          title={
            <>
              Four different stories.
              <br />
              <span className="italic text-brand">One shared kindness.</span>
            </>
          }
          subtitle="Every haven began with a life that changed ours."
        />

        <ul className="grid sm:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-5 lg:gap-6 list-none">
          {HAVENS.map((haven) => {
            const palette = getPalette(haven.token);

            return (
              <li key={haven.slug} className={`flex ${SPAN[haven.token] ?? "lg:col-span-6"}`}>
                <Link
                  href={`/${haven.slug}`}
                  className={`w-full overflow-hidden border flex flex-col min-h-[320px] lg:min-h-[360px] hover:shadow-lift ${CARD.haven.shape} ${INTERACTION.card} ${INTERACTION.focus} ${palette.card} ${palette.border} ${palette.ink}`}
                >
                  {/* The illustration comes first: a haven card should read as a
                      window into somewhere before it reads as a label. The box
                      ratio matches the motif viewBox (16:11) — a mismatched box
                      makes the artwork scale to one axis and anchor right, which
                      strands the filled shapes' straight edges mid-card. */}
                  <div className="relative h-28 lg:h-32 mb-7 flex items-end justify-end overflow-hidden">
                    <HavenMotif
                      haven={haven.token}
                      className="pointer-events-none h-full aspect-[16/11] opacity-40 [mask-image:linear-gradient(to_right,transparent,#000_45%)] [-webkit-mask-image:linear-gradient(to_right,transparent,#000_45%)]"
                    />
                  </div>

                  <p className="font-semibold text-[11px] uppercase tracking-[0.16em] opacity-80 mb-2">
                    {haven.focus}
                  </p>
                  <h3 className="font-display font-medium text-[26px] lg:text-[29px] leading-[1.08] tracking-[-0.02em] mb-3">
                    {haven.name}
                  </h3>
                  <p className="text-[15px] leading-[1.6] opacity-85 max-w-measure-narrow">
                    {haven.tagline}
                  </p>

                  <span className="mt-auto pt-7 inline-flex items-center gap-2 text-sm font-semibold">
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
