import Eyebrow from "@/app/components/ui/Eyebrow";
import HavenMotif from "@/app/components/illustrations/HavenMotif";
import Botanical from "@/app/components/illustrations/Botanical";
import Container from "@/app/components/ui/Container";
import Section from "@/app/components/ui/Section";
import { HEADING_RHYTHM, MEASURE } from "@/app/lib/layout";
import { getPalette } from "@/app/lib/palette";

/**
 * Banner at the top of a haven page: pale haven surface, deep haven ink, and
 * that haven's own motif — the same 70/20/10 balance the homepage cards use.
 *
 * @param {object} props
 * @param {import('@/app/lib/havens').Haven} props.haven
 */
export default function HavenHero({ haven }) {
  const palette = getPalette(haven.token);

  return (
    <Section
      rhythm="hero"
      className={`relative overflow-hidden paper-grain ${palette.hero} ${palette.ink}`}
    >
      {/* Half a sprig, cropped by the left edge. Decoration enters the page
          from outside it rather than being placed inside the composition. */}
      <Botanical
        variant={haven.token}
        className="decor -left-10 -bottom-6 w-28 md:w-32 opacity-25"
      />

      <Container className="relative grid lg:grid-cols-12 gap-10 lg:gap-6 items-center">
        <div className="lg:col-span-7">
          <Eyebrow token={haven.token} className={HEADING_RHYTHM.label}>
            {haven.focus}
          </Eyebrow>
          <h1
            className={`font-display font-normal text-[clamp(2.75rem,5vw,4rem)] leading-[1.02] tracking-[-0.035em] ${MEASURE.hero} ${HEADING_RHYTHM.heading}`}
          >
            {haven.name}
          </h1>
          <p className={`text-[18px] leading-[1.7] opacity-85 ${MEASURE.narrow}`}>
            {haven.tagline}
          </p>
        </div>

        <HavenMotif
          haven={haven.token}
          className={`lg:col-span-5 w-full max-w-xs mx-auto ${palette.accent} opacity-70`}
        />
      </Container>
    </Section>
  );
}
