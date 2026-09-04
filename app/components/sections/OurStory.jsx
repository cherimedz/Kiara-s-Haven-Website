import Button from "@/app/components/ui/Button";
import Eyebrow from "@/app/components/ui/Eyebrow";
import StoryAnimals from "@/app/components/sections/StoryAnimals";
import Botanical from "@/app/components/illustrations/Botanical";
import Container from "@/app/components/ui/Container";
import Section from "@/app/components/ui/Section";
import { HEADING_RHYTHM, MEASURE } from "@/app/lib/layout";

/** The personal story behind the project, with a portrait for each animal. */
export default function OurStory() {
  return (
    <Section
      id="about"
      rhythm="story"
      flush
      className="relative overflow-hidden bg-surface paper-grain"
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

      <Container className="relative grid lg:grid-cols-12 gap-10 lg:gap-6 items-center">
        {/* Five columns of story against seven of portraits — the asymmetry is
            the point; an even split would read as a template. */}
        <div className="lg:col-span-5">
          <Eyebrow className={HEADING_RHYTHM.label}>Our story</Eyebrow>

          <h2 className={`font-display font-normal text-ink text-[clamp(2.25rem,3.4vw,2.75rem)] leading-[1.08] tracking-[-0.025em] ${HEADING_RHYTHM.heading}`}>
            Five names. Five lives.
            <br />
            <span className="italic text-brand">One haven.</span>
          </h2>

          <p className={`text-[17px] leading-[1.7] text-mute mb-4 ${MEASURE.narrow}`}>
            Kiara, Simba, Sebastian, Coco, and Princess are real. Four of them
            have crossed the rainbow bridge, but their love lives on.
          </p>
          <p className={`text-[17px] leading-[1.7] text-mute mb-10 ${MEASURE.narrow}`}>
            This haven is our way of turning their memory into meaning for every
            animal who still needs us.
          </p>

          <Button href="#havens" variant="secondary" size="sm">
            Meet their havens ♡
          </Button>
        </div>

        {/* `min-w-0` is load-bearing: a grid item defaults to `min-width: auto`,
            so without it this column widens to fit the portrait row instead of
            letting the row scroll — and the section's `overflow-hidden` then
            clips the last three animals away entirely on a phone. */}
        <div className="lg:col-span-7 min-w-0">
          <StoryAnimals />
        </div>

      </Container>
    </Section>
  );
}
