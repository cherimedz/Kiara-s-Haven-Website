import { CheckCircle2 } from "lucide-react";

import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import Button from "@/app/components/ui/Button";
import Eyebrow from "@/app/components/ui/Eyebrow";
import LeafDivider from "@/app/components/illustrations/LeafDivider";
import * as ActionIcons from "@/app/components/illustrations/ActionIcons";
import { ACTIONS } from "@/app/lib/actions";
import { getPalette } from "@/app/lib/palette";
import { buildMetadata } from "@/app/lib/siteMetadata";

export const metadata = buildMetadata({
  title: "Get involved",
  description:
    "Six ways to help at Kiara's Haven — adopt, volunteer, donate, sponsor, follow our impact, or join the community.",
});

export default function GetInvolvedPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="px-6 pt-14 pb-10 md:pt-20">
          <div className="max-w-3xl mx-auto text-center">
            <Eyebrow className="mb-4">Get involved</Eyebrow>
            <h1 className="font-display font-normal text-ink text-[clamp(2.5rem,4.5vw,3.5rem)] leading-[1.04] tracking-[-0.035em] mb-5">
              Six ways to help.
            </h1>
            <p className="text-[18px] leading-[1.75] text-mute">
              Not everyone can adopt, and not everyone can give. There is more
              than one way to be useful to an animal who needs one.
            </p>
          </div>
        </section>

        <div className="flex justify-center text-simba-secondary">
          <LeafDivider />
        </div>

        <div className="max-w-4xl mx-auto px-6 py-12 space-y-5">
          {ACTIONS.map(({ id, label, summary, detail, points, icon, token }) => {
            const Icon = ActionIcons[icon];
            const palette = getPalette(token);

            return (
              // scroll-mt clears the sticky navbar when linked to directly.
              <section
                key={id}
                id={id}
                className={`scroll-mt-24 rounded-2xl border p-8 md:p-10 ${palette.tint} ${palette.border}`}
              >
                <Icon aria-hidden="true" className={`${palette.accent} mb-4`} />

                <h2 className="font-display font-medium text-ink text-[28px] leading-[1.1] tracking-[-0.025em] mb-2">
                  {label}
                </h2>
                <p className="font-display italic text-[18px] leading-[1.5] text-warm mb-5">
                  {summary}
                </p>
                <p className="text-[17px] leading-[1.75] text-warm mb-6">{detail}</p>

                <ul className="space-y-2.5 list-none">
                  {points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-[16px] leading-[1.6] text-warm"
                    >
                      <CheckCircle2
                        size={19}
                        aria-hidden="true"
                        className={`${palette.accent} shrink-0 mt-0.5`}
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>

        <section className="px-6 pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[17px] leading-[1.7] text-mute mb-6">
              Kiara&apos;s Haven is a demo concept, so nothing here collects real
              money or real sign-ups — but this is where each of these would begin.
            </p>
            <Button href="/#contact">Get in touch</Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
