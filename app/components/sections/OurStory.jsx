import Button from "@/app/components/ui/Button";
import Eyebrow from "@/app/components/ui/Eyebrow";
import PetPortrait from "@/app/components/illustrations/PetPortrait";
import NameMotif from "@/app/components/illustrations/NameMotif";
import Botanical from "@/app/components/illustrations/Botanical";
import { PETS } from "@/app/lib/pets";
import { getPalette } from "@/app/lib/palette";

/** The personal story behind the project, with a portrait for each animal. */
export default function OurStory() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-surface paper-grain px-6 pt-8 pb-20"
    >
      {/* This is the emotional reveal of the site, so it gets the fullest
          decoration: branches entering from both edges to frame the row of
          portraits. Every other section is quieter than this one. */}
      <Botanical
        variant="coco"
        className="decor -left-10 top-10 hidden lg:block w-24 opacity-25"
      />
      <Botanical
        flip
        variant="princess"
        className="decor -right-10 bottom-4 hidden lg:block w-24 opacity-25"
      />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-[1fr_1.35fr] gap-10 items-center">
        <div>
          <Eyebrow className="mb-4">Our story</Eyebrow>

          <h2 className="font-display font-normal text-ink text-[clamp(2.25rem,3.4vw,2.75rem)] leading-[1.08] tracking-[-0.025em] mb-6">
            Five names. Five lives.
            <br />
            <span className="italic text-brand">One haven.</span>
          </h2>

          <p className="text-[17px] leading-[1.7] text-mute mb-4">
            Kiara, Simba, Sebastian, Coco, and Princess are real. Four of them
            have crossed the rainbow bridge, but their love lives on.
          </p>
          <p className="text-[17px] leading-[1.7] text-mute mb-8">
            This haven is our way of turning their memory into meaning for every
            animal who still needs us.
          </p>

          <Button href="#havens" variant="ghost" size="sm">
            Meet their havens ♡
          </Button>
        </div>

        <ul className="grid grid-cols-3 sm:grid-cols-5 gap-x-4 gap-y-6 list-none">
          {PETS.map((pet) => (
            <li key={pet.key} className="text-center">
              <PetPortrait pet={pet.key} name={pet.name} />

              <p className="mt-3 flex items-center justify-center gap-1.5 font-display font-medium text-ink text-[19px] tracking-[-0.02em]">
                {pet.name}
                <NameMotif pet={pet.key} className={getPalette(pet.token).accent} />
              </p>

              {pet.tagline.map((line) => (
                <span key={line} className="block text-[13px] text-mute leading-[1.5]">
                  {line}
                </span>
              ))}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
