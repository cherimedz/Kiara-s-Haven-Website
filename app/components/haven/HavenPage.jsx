import { ArrowLeft, CheckCircle2 } from "lucide-react";

import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import Button from "@/app/components/ui/Button";
import HavenHero from "@/app/components/haven/HavenHero";
import { getPalette } from "@/app/lib/palette";

/**
 * The template every haven page renders. One template rather than one per
 * haven, so copy and type scale can't drift between them.
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

        <section className="max-w-3xl mx-auto px-6 py-16">
          <p className="text-[18px] leading-[1.75] text-mute mb-10">{haven.mission}</p>

          <h2 className="font-display font-medium text-ink text-[26px] leading-[1.1] tracking-[-0.025em] mb-4">
            What we focus on
          </h2>
          <ul className="space-y-3 mb-10">
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

          <p className="font-display italic text-[17px] leading-[1.6] text-mute mb-10">
            {haven.name} is named after {haven.petName} — {haven.dedication} One of
            the five real animals this whole project is built around.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button href="/" variant="ghost">
              <ArrowLeft size={16} aria-hidden="true" className="mr-2" />
              Back to Kiara&apos;s Haven
            </Button>
            <Button href="/#havens" variant={haven.token}>
              See all havens
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
