import Button from "./ui/Button";
import PetPortrait from "./illustrations/PetPortrait";

const pets = [
  { key: "kiara", name: "Kiara", tagline: "Our heart. Our home.", frame: "bg-tint-terracotta" },
  { key: "simba", name: "Simba", tagline: "Wild at heart. Forever free.", frame: "bg-tint-ochre" },
  { key: "sebastian", name: "Sebastian", tagline: "Gentle soul. Always with us.", frame: "bg-tint-rose" },
  { key: "coco", name: "Coco", tagline: "The connector. Love in action.", frame: "bg-tint-sage" },
  { key: "princess", name: "Princess", tagline: "Little light. Big dreams.", frame: "bg-tint-terracotta" },
];

export default function OurStory() {
  return (
    <section id="about" className="bg-card px-6 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_1.4fr] gap-12 items-center">
        <div>
          <p className="uppercase tracking-[0.2em] text-sm text-accent font-medium mb-4">
            Our Story
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-semibold text-ink mb-6">
            Five names. Five lives. <span className="italic text-accent">One haven.</span>
          </h2>
          <p className="text-mute leading-relaxed mb-4">
            Kiara, Simba, Sebastian, Coco, and Princess are real. Four of
            them have crossed the rainbow bridge, but their love lives on.
          </p>
          <p className="text-mute leading-relaxed mb-8">
            This haven is our way of turning their memory into meaning for
            every animal who still needs us.
          </p>
          <Button href="#havens" variant="ghost">
            Read our story ♡
          </Button>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
          {pets.map((pet) => (
            <div key={pet.key} className="text-center">
              <div className={`aspect-[4/5] rounded-[999px] overflow-hidden ${pet.frame} mb-3`}>
                <PetPortrait pet={pet.key} />
              </div>
              <p className="font-[family-name:var(--font-heading)] font-semibold text-ink">
                {pet.name}
              </p>
              <p className="text-xs text-mute leading-snug">{pet.tagline}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
