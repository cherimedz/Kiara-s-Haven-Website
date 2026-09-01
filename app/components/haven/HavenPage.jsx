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

        <section className="bg-surface px-6 pt-4 pb-16">
          <div className="max-w-3xl mx-auto">
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
          </div>
        </section>

        {/* Surface → back to the page ground. */}
        <WaveDivider fill="var(--kh-page)" />

        <HavenStats haven={haven} />
        <HavenDedication haven={haven} />
        <HavenHelp haven={haven} />
        <HavenSiblings haven={haven} />

        <section className="relative overflow-hidden px-6 pb-20">
          <Botanical
            aria-hidden="true"
            className="pointer-events-none absolute -left-6 bottom-0 w-20 md:w-24 text-coco-primary opacity-25"
          />
          <Botanical
            flip
            aria-hidden="true"
            className="pointer-events-none absolute -right-6 bottom-0 w-20 md:w-24 text-coco-primary opacity-25"
          />

          <div className="relative max-w-2xl mx-auto text-center">
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
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
