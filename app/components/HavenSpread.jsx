import Link from "next/link";
import { subOrgs } from "../lib/subOrgs";
import Eyebrow from "./ui/Eyebrow";
import HavenMotif from "./illustrations/HavenMotif";
import LeafDivider from "./illustrations/LeafDivider";

const themes = {
  simba: { grad: "from-simba-from to-simba-to", art: "text-[#6E5A22]" },
  sebastian: { grad: "from-sebastian-from to-sebastian-to", art: "text-[#8E4C55]" },
  coco: { grad: "from-coco-from to-coco-to", art: "text-[#3F5E3C]" },
  princess: { grad: "from-princess-from to-princess-to", art: "text-[#9A4526]" },
};

export default function HavenSpread() {
  return (
    <section id="havens" className="px-6 pt-6 pb-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-3 text-simba-from">
          <LeafDivider />
        </div>
        <Eyebrow className="text-center mb-10">Our four havens</Eyebrow>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {subOrgs.map((org) => {
            const theme = themes[org.theme];
            return (
              <Link
                key={org.slug}
                href={`/${org.slug}`}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${theme.grad} text-white flex flex-col min-h-[290px] p-6 transition-transform duration-300 hover:-translate-y-1`}
              >
                <HavenMotif
                  haven={org.theme}
                  className={`pointer-events-none absolute right-0 bottom-0 w-[78%] h-[50%] ${theme.art} opacity-55`}
                />
                <div className="relative">
                  <p className="font-semibold text-[11px] uppercase tracking-[0.16em] opacity-90 mb-2">
                    {org.focus}
                  </p>
                  <h3 className="font-display font-medium text-[25px] leading-[1.1] tracking-[-0.02em] mb-2">
                    {org.orgName}
                  </h3>
                  <p className="text-[14px] opacity-95 leading-[1.6]">{org.tagline}</p>
                </div>
                <span className="relative mt-auto text-sm font-semibold">
                  Explore <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
