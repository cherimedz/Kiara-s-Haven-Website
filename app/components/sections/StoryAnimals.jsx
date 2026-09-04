import PetPortrait from "@/app/components/illustrations/PetPortrait";
import NameMotif from "@/app/components/illustrations/NameMotif";
import { PETS } from "@/app/lib/pets";
import { getPalette } from "@/app/lib/palette";

/**
 * The five animals, composed rather than gridded.
 *
 * A neat 5-across row of identical tiles reads as a product page. These are the
 * reason the project exists, so the row is staggered and slightly overlapped —
 * uneven the way a page of family photographs is uneven. Kiara sits highest
 * because she names the whole thing.
 *
 * On small screens it becomes a horizontal scroll: a story you move through,
 * rather than five columns crushed to thumbnail size. The scroll snaps so it
 * still feels deliberate.
 *
 * Note: no living/passed status is printed under a portrait. The taglines in
 * `lib/pets.js` are the author's own words about their own animals, and that is
 * the right place for anything that personal to be decided.
 */

/** Vertical offsets, largest screens only — the whole point is that they differ. */
const OFFSET = {
  kiara: "lg:-translate-y-6",
  simba: "lg:translate-y-6",
  sebastian: "lg:translate-y-0",
  coco: "lg:translate-y-10",
  princess: "lg:translate-y-2",
};

export default function StoryAnimals() {
  return (
    <ul
      className="
        flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4
        -mx-4 px-4 min-[420px]:-mx-5 min-[420px]:px-5
        sm:mx-0 sm:px-0 sm:grid sm:grid-cols-3 sm:gap-x-5 sm:gap-y-10
        lg:flex lg:overflow-visible lg:pb-0 lg:gap-3 lg:items-start
        list-none
      "
    >
      {PETS.map((pet) => (
        <li
          key={pet.key}
          className={`
            shrink-0 w-36 snap-center text-center
            sm:w-auto sm:shrink lg:flex-1 lg:min-w-0
            ${OFFSET[pet.key] ?? ""}
          `}
        >
          <PetPortrait pet={pet.key} name={pet.name} />

          <p className="mt-4 flex items-center justify-center gap-1.5 font-display font-medium text-ink text-[19px] tracking-[-0.02em]">
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
  );
}
