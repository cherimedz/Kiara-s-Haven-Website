import Link from "next/link";

import Eyebrow from "@/app/components/ui/Eyebrow";
import HavenMotif from "@/app/components/illustrations/HavenMotif";
import LeafDivider from "@/app/components/illustrations/LeafDivider";
import { HAVENS } from "@/app/lib/havens";
import { getPalette } from "@/app/lib/palette";

/** Homepage grid linking to each of the four havens. */
export default function HavenSpread() {
  return (
    <section id="havens" className="px-6 pt-6 pb-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-3 text-simba-secondary">
          <LeafDivider />
        </div>
        <Eyebrow as="h2" className="text-center mb-10">
          Our four havens
        </Eyebrow>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 list-none">
          {HAVENS.map((haven) => {
            const palette = getPalette(haven.token);

            return (
              <li key={haven.slug} className="flex">
                <Link
                  href={`/${haven.slug}`}
                  className={`group relative w-full overflow-hidden rounded-2xl border p-6 flex flex-col min-h-[290px] transition-transform duration-300 hover:-translate-y-1 ${palette.card} ${palette.border} ${palette.ink}`}
                >
                  <HavenMotif
                    haven={haven.token}
                    className="pointer-events-none absolute right-0 bottom-0 w-[78%] h-[50%] opacity-35"
                  />

                  <div className="relative">
                    <p className="font-semibold text-[11px] uppercase tracking-[0.16em] opacity-80 mb-2">
                      {haven.focus}
                    </p>
                    <h3 className="font-display font-medium text-[25px] leading-[1.1] tracking-[-0.02em] mb-2">
                      {haven.name}
                    </h3>
                    <p className="text-[14px] leading-[1.6] opacity-85">{haven.tagline}</p>
                  </div>

                  <span className="relative mt-auto text-sm font-semibold">
                    Explore{" "}
                    <span
                      aria-hidden="true"
                      className="inline-block transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
