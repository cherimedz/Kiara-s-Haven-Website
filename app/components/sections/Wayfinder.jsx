import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Container from "@/app/components/ui/Container";
import Section from "@/app/components/ui/Section";
import SectionHeading from "@/app/components/ui/SectionHeading";
import { ACTIONS, actionHref } from "@/app/lib/actions";
import { CARD, INTERACTION } from "@/app/lib/layout";
import { getPalette } from "@/app/lib/palette";

/**
 * "What would you like to do?" — the six entry points into the site.
 *
 * Numbered navigation tiles rather than six identical icon cards. The numerals
 * give the row an editorial rhythm and, unlike six illustrated icons, they
 * don't compete with the artwork elsewhere on the page — this is a functional
 * component, so it stays clean and lets the emotional ones carry personality.
 *
 * Each tile is a link rather than a styled box: the arrow reads as a control,
 * so the whole card has to behave like one.
 */
export default function Wayfinder() {
  return (
    <Section id="wayfinder" rhythm="grid" flush className="bg-surface">
      <Container>
        <SectionHeading
          eyebrow="What would you like to do?"
          title="Six ways in."
          subtitle="Not everyone can adopt, and not everyone can give. There is more than one way to be useful to an animal who needs one."
        />

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6 list-none">
          {ACTIONS.map(({ id, label, summary, token }, index) => {
            const palette = getPalette(token);

            return (
              <li key={id} className="flex">
                <Link
                  href={actionHref(id)}
                  className={`w-full bg-surface border border-line flex flex-col hover:border-brand hover:shadow-lift ${CARD.action.shape} ${INTERACTION.card} ${INTERACTION.focus}`}
                >
                  {/* Quiet numerals, not a badge — the rhythm comes from the
                      sequence, not from decorating each one. */}
                  <span
                    aria-hidden="true"
                    className={`font-display text-[15px] tracking-[0.08em] mb-6 ${palette.accent}`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="font-display font-medium text-ink text-[22px] leading-[1.1] tracking-[-0.02em] mb-2">
                    {label}
                  </h3>
                  <p className="text-[15px] text-mute leading-[1.6] mb-8 flex-1">{summary}</p>

                  <ArrowRight
                    size={18}
                    aria-hidden="true"
                    className={`${palette.accent} self-end ${INTERACTION.arrow}`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
