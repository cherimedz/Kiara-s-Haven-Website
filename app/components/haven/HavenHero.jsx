import Eyebrow from "@/app/components/ui/Eyebrow";
import HavenMotif from "@/app/components/illustrations/HavenMotif";
import Botanical from "@/app/components/illustrations/Botanical";
import { getPalette } from "@/app/lib/palette";

/**
 * Banner at the top of a haven page: pale haven surface, deep haven ink, and
 * that haven's own motif — the same 70/20/10 balance the homepage cards use.
 *
 * @param {object} props
 * @param {import('@/app/lib/havens').Haven} props.haven
 */
export default function HavenHero({ haven }) {
  const palette = getPalette(haven.token);

  return (
    <section
      className={`relative overflow-hidden paper-grain ${palette.hero} ${palette.ink} px-6 pt-14 pb-16 md:pt-20 md:pb-24`}
    >
      {/* Half a sprig, cropped by the left edge. Decoration enters the page
          from outside it rather than being placed inside the composition. */}
      <Botanical
        variant={haven.token}
        className="decor -left-10 -bottom-6 w-28 md:w-32 opacity-25"
      />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-[1.2fr_1fr] gap-10 items-center">
        <div>
          <Eyebrow className="mb-4">{haven.focus}</Eyebrow>
          <h1 className="font-display font-normal text-[clamp(2.75rem,5vw,4rem)] leading-[1.02] tracking-[-0.035em] mb-6">
            {haven.name}
          </h1>
          <p className="text-[18px] leading-[1.7] opacity-85 max-w-md">{haven.tagline}</p>
        </div>

        <HavenMotif
          haven={haven.token}
          className={`w-full max-w-xs mx-auto ${palette.accent} opacity-70`}
        />
      </div>
    </section>
  );
}
