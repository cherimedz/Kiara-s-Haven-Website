import CheckMark from "@/app/components/illustrations/CheckMark";

import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import Button from "@/app/components/ui/Button";
import Eyebrow from "@/app/components/ui/Eyebrow";
import Container from "@/app/components/ui/Container";
import Section from "@/app/components/ui/Section";
import { CARD, HEADING_RHYTHM, MEASURE } from "@/app/lib/layout";
import LeafDivider from "@/app/components/illustrations/LeafDivider";
import ChapterNav from "@/app/components/sections/ChapterNav";
import * as ActionIcons from "@/app/components/illustrations/ActionIcons";
import { ACTIONS } from "@/app/lib/actions";
import { getPalette } from "@/app/lib/palette";
import { buildMetadata } from "@/app/lib/siteMetadata";

export const metadata = buildMetadata({
  title: "Get involved",
  description:
    "Six ways to help at Kiara's Haven — adopt, volunteer, donate, sponsor, follow our impact, or join the community.",
});

export default function GetInvolvedPage() {
  return (
    <>
      <Navbar />

      <main>
        <Section rhythm="hero" className="pb-10 md:pb-12">
          <Container className={`text-center ${MEASURE.wide}`}>
            <Eyebrow className={HEADING_RHYTHM.label}>Get involved</Eyebrow>
            <h1 className={`font-display font-normal text-ink text-[clamp(2.5rem,4.5vw,3.5rem)] leading-[1.04] tracking-[-0.035em] ${HEADING_RHYTHM.heading}`}>
              Six ways to help.
            </h1>
            <p className="text-[18px] leading-[1.75] text-mute">
              Not everyone can adopt, and not everyone can give. There is more
              than one way to be useful to an animal who needs one.
            </p>
          </Container>
        </Section>

        <div className="flex justify-center text-simba-secondary pb-10">
          <LeafDivider />
        </div>

        <ChapterNav />

        <Container className="py-16 md:py-24 space-y-5 md:space-y-6">
          {ACTIONS.map(({ id, label, summary, detail, points, icon, token }) => {
            const Icon = ActionIcons[icon];
            const palette = getPalette(token);

            return (
              // scroll-mt clears the sticky navbar when linked to directly.
              <section
                key={id}
                id={id}
                className={`scroll-mt-40 border ${CARD.haven.shape} ${palette.tint} ${palette.border}`}
              >
                <Icon aria-hidden="true" className={`${palette.accent} mb-5`} />

                <h2 className="font-display font-medium text-ink text-[28px] leading-[1.1] tracking-[-0.025em] mb-3">
                  {label}
                </h2>
                <p className="font-display italic text-[18px] leading-[1.5] text-warm mb-5">
                  {summary}
                </p>
                <p className={`text-[17px] leading-[1.75] text-warm mb-8 ${MEASURE.wide}`}>
                  {detail}
                </p>

                <ul className="space-y-2.5 list-none">
                  {points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-[16px] leading-[1.6] text-warm"
                    >
                      {/* The plain drawn tick, not a haven symbol. These are
                          actions, not havens — a crescent moon bulleting a line
                          about veterinary bills only reads as a haven mark that
                          wandered onto the wrong page. */}
                      <CheckMark className={`${palette.accent} shrink-0 mt-0.5`} />
                      {point}
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </Container>

        <Section rhythm="cta" className="pt-0">
          <Container className={`text-center ${MEASURE.base}`}>
            <p className="text-[17px] leading-[1.7] text-mute mb-10">
              Kiara&apos;s Haven is a demo concept, so nothing here collects real
              money or real sign-ups — but this is where each of these would begin.
            </p>
            <Button href="/#contact">Get in touch</Button>
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  );
}
