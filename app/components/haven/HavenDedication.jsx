import Eyebrow from "@/app/components/ui/Eyebrow";
import PetPortrait from "@/app/components/illustrations/PetPortrait";
import NameMotif from "@/app/components/illustrations/NameMotif";
import Botanical from "@/app/components/illustrations/Botanical";
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
    <section className={`relative overflow-hidden paper-grain ${palette.tint} px-6 py-16`}>
      <Botanical
        flip
        variant={haven.token}
        className="decor -right-9 -top-8 hidden sm:block w-24 md:w-28 opacity-25"
      />

      <div className="relative max-w-4xl mx-auto grid sm:grid-cols-[auto_1fr] gap-8 sm:gap-10 items-center">
        <div className="w-36 mx-auto sm:mx-0 shrink-0">
          <PetPortrait pet={haven.token} />
        </div>

        <div>
          <Eyebrow className="mb-3">The name behind the haven</Eyebrow>

          <h2 className="font-display font-normal text-ink text-[clamp(1.75rem,2.6vw,2.15rem)] leading-[1.12] tracking-[-0.025em] mb-4 flex items-center gap-2.5">
            {pet?.name ?? haven.petName}
            <NameMotif pet={haven.token} size={22} className={palette.accent} />
          </h2>

          <p className="font-display italic text-[18px] leading-[1.55] text-warm mb-4">
            {haven.dedication}
          </p>
          <p className="text-[17px] leading-[1.75] text-warm">{haven.remembering}</p>
        </div>
      </div>
    </section>
  );
}
