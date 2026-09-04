import Eyebrow from "@/app/components/ui/Eyebrow";
import PetPortrait from "@/app/components/illustrations/PetPortrait";
import NameMotif from "@/app/components/illustrations/NameMotif";
import Botanical from "@/app/components/illustrations/Botanical";
import Container from "@/app/components/ui/Container";
import Section from "@/app/components/ui/Section";
import { HEADING_RHYTHM, MEASURE } from "@/app/lib/layout";
import { getPalette } from "@/app/lib/palette";
import { getPet } from "@/app/lib/pets";

/**
 * Why the haven carries this name, with the animal's portrait.
 *
 * Deliberately phrased in the present tense where the animal is still alive —
 * the copy lives in `havens.js` per haven rather than being generated, so no
 * one gets written about in the past tense by accident.
 *
 * @param {object} props
 * @param {import('@/app/lib/havens').Haven} props.haven
 */
export default function HavenDedication({ haven }) {
  const palette = getPalette(haven.token);
  const pet = getPet(haven.token);

  return (
    <Section rhythm="story" className={`relative overflow-hidden paper-grain ${palette.tint}`}>
      <Botanical
        flip
        variant={haven.token}
        className="decor -right-9 -top-8 hidden sm:block w-24 md:w-28 opacity-25"
      />

      <Container className="relative grid sm:grid-cols-[auto_1fr] gap-8 sm:gap-10 lg:gap-12 items-center">
        <div className="w-40 md:w-44 mx-auto sm:mx-0 shrink-0">
          <PetPortrait pet={haven.token} />
        </div>

        <div>
          <Eyebrow token={haven.token} className={HEADING_RHYTHM.label}>
            The name behind the haven
          </Eyebrow>

          <h2 className="font-display font-normal text-ink text-[clamp(1.75rem,2.6vw,2.15rem)] leading-[1.12] tracking-[-0.025em] mb-5 flex items-center gap-2.5">
            {pet?.name ?? haven.petName}
            <NameMotif pet={haven.token} size={22} className={palette.accent} />
          </h2>

          <p className="font-display italic text-[18px] leading-[1.55] text-warm mb-4">
            {haven.dedication}
          </p>
          <p className={`text-[17px] leading-[1.75] text-warm ${MEASURE.wide}`}>
            {haven.remembering}
          </p>
        </div>
      </Container>
    </Section>
  );
}
