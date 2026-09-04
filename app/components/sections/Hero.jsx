import Button from "@/app/components/ui/Button";
import { actionHref } from "@/app/lib/actions";
import Eyebrow from "@/app/components/ui/Eyebrow";
import HeroScene from "@/app/components/illustrations/HeroScene";
import WaveDivider from "@/app/components/illustrations/WaveDivider";
import Botanical from "@/app/components/illustrations/Botanical";
import Reveal from "@/app/components/ui/Reveal";
import Container from "@/app/components/ui/Container";
import Section from "@/app/components/ui/Section";
import { HEADING_RHYTHM, MEASURE } from "@/app/lib/layout";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Kiara's own vegetation, growing in from the bottom-left and cropped by
          the edge — the homepage belongs to the parent haven, not to one of
          the four. */}
      <Botanical
        variant="kiara"
        className="decor -left-8 bottom-0 hidden md:block w-24 lg:w-28 opacity-25"
      />

      <Section rhythm="hero" as="div" className="relative pb-4 md:pb-6 lg:min-h-[760px] lg:flex lg:items-center">
        <Container className="grid md:grid-cols-12 gap-5 md:gap-5 lg:gap-6 items-center">
          <Reveal className="md:col-span-6">
            <Eyebrow className={HEADING_RHYTHM.label}>A home for paws. A future for all.</Eyebrow>

            <h1 className={`font-display font-normal text-ink text-[clamp(2.75rem,4.4vw,3.5rem)] leading-[1.02] tracking-[-0.035em] ${MEASURE.hero} ${HEADING_RHYTHM.heading}`}>
              A little more kindness,
              <br />
              <span className="italic text-brand">for every kind of life.</span>
            </h1>

            <p className={`text-[17px] leading-[1.7] text-mute mb-10 ${MEASURE.narrow}`}>
              Kiara&apos;s Haven is a fictional concept for a digitalized animal
              adoption center — built on love, memory, and the belief that every
              life deserves a safe home.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button href={actionHref("adopt")}>Adopt a friend 🐾</Button>
              <Button href={actionHref("join-our-family")} variant="secondary">
                Join our family
              </Button>
            </div>
          </Reveal>

          <Reveal className="md:col-span-6 flex flex-col md:flex-row md:items-end gap-1">
            <HeroScene className="w-full md:flex-1 min-w-0 h-auto" />
            <p className="font-display italic text-[15px] leading-[1.5] text-mute text-center md:text-left md:w-32 md:shrink-0 md:mb-12">
              In memory of five souls who made this all possible. ♡
            </p>
          </Reveal>
        </Container>
      </Section>

      <WaveDivider fill="var(--kh-surface)" />
    </section>
  );
}
