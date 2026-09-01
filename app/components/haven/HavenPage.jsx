import { ArrowLeft, CheckCircle2 } from "lucide-react";

import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import Button from "@/app/components/ui/Button";
import Eyebrow from "@/app/components/ui/Eyebrow";
import HavenHero from "@/app/components/haven/HavenHero";
import HavenStats from "@/app/components/haven/HavenStats";
import HavenDedication from "@/app/components/haven/HavenDedication";
import HavenHelp from "@/app/components/haven/HavenHelp";
import HavenSiblings from "@/app/components/haven/HavenSiblings";
import Botanical from "@/app/components/illustrations/Botanical";
import Reveal from "@/app/components/ui/Reveal";
import WaveDivider from "@/app/components/illustrations/WaveDivider";
import { getPalette } from "@/app/lib/palette";

/**
 * The template every haven page renders. One template rather than one per
 * haven, so copy, type scale, and section order can't drift between them.
 *
 * The section rhythm deliberately mirrors the homepage — wave transitions, leaf
 * dividers, a stats strip, and a closing invitation — so a haven reads as
 * another room in the same house rather than a plainer sub-page.
 *
 * @param {object} props
 * @param {import('@/app/lib/havens').Haven} props.haven
 */
export default function HavenPage({ haven }) {
  const palette = getPalette(haven.token);

  return (
    <>
      <Navbar />

      <main>
        <HavenHero haven={haven} />
        {/* Hero surface → the surface-level mission section. */}
        <WaveDivider fill="var(--kh-surface)" />

        <section className="relative overflow-hidden bg-surface paper-grain px-6 pt-4 pb-16">
          {/* Enters from the right edge and is cropped by it — the garden is
              meant to continue past the viewport rather than sit inside it. */}
          <Botanical
            variant={haven.token}
            className="decor -right-8 top-8 hidden lg:block w-24 opacity-25"
          />

          <Reveal className="max-w-3xl mx-auto">
            <Eyebrow className="mb-4">Our mission</Eyebrow>
            <p className="text-[18px] leading-[1.75] text-mute mb-10">{haven.mission}</p>

            <h2 className="font-display font-medium text-ink text-[26px] leading-[1.1] tracking-[-0.025em] mb-4">
              What we focus on
            </h2>
            <ul className="space-y-3 list-none">
              {haven.focusAreas.map((area) => (
                <li
                  key={area}
                  className="flex items-start gap-3 text-[17px] leading-[1.65] text-mute"
                >
                  <CheckCircle2
                    size={20}
                    aria-hidden="true"
                    className={`${palette.accent} shrink-0 mt-0.5`}
                  />
                  {area}
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        {/* Surface → back to the page ground. */}
        <WaveDivider fill="var(--kh-page)" />

        <Reveal>
          <HavenStats haven={haven} />
        </Reveal>
        <Reveal>
          <HavenDedication haven={haven} />
        </Reveal>
        <Reveal>
          <HavenHelp haven={haven} />
        </Reveal>
        <Reveal>
          <HavenSiblings haven={haven} />
        </Reveal>

        <section className="relative overflow-hidden px-6 pb-20">
          {/* Margin ornaments, in this haven's own vegetation rather than a
              fixed one — the closing line is the last thing read, so it should
              still be recognisably this haven. */}
          <Botanical
            variant={haven.token}
            className="decor -left-7 bottom-0 w-20 md:w-24 opacity-25"
          />
          <Botanical
            flip
            variant={haven.token}
            className="decor -right-7 bottom-0 w-20 md:w-24 opacity-25"
          />

          <Reveal className="relative max-w-2xl mx-auto text-center">
            <p className="font-display italic text-[19px] leading-[1.55] text-mute mb-7">
              Every haven here started with one animal who mattered to us.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button href="/" variant="ghost">
                <ArrowLeft size={16} aria-hidden="true" className="mr-2" />
                Back to Kiara&apos;s Haven
              </Button>
              <Button href="/#contact" variant={haven.token}>
                Get in touch
              </Button>
            </div>
          </Reveal>
        </section>
      </main>

      <Footer />
    </>
  );
}
