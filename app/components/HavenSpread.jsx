import Link from "next/link";
import { subOrgs } from "../lib/subOrgs";
import Eyebrow from "./ui/Eyebrow";
import HavenMotif from "./illustrations/HavenMotif";
import LeafDivider from "./illustrations/LeafDivider";

/* 70/20/10: the card is a pale haven surface (20%), the ink and motif carry the
   haven's identity (10%). Gradients are atmospheric, close to imperceptible. */
const themes = {
  simba: {
    surface: "bg-gradient-to-b from-simba-soft to-simba-secondary/55",
    border: "border-simba-secondary/45",
    ink: "text-simba-deep",
    art: "text-simba-deep",
  },
  sebastian: {
    surface: "bg-gradient-to-b from-sebastian-soft to-sebastian-secondary/70",
    border: "border-sebastian-secondary/50",
    ink: "text-sebastian-deep",
    art: "text-sebastian-deep",
  },
  coco: {
    surface: "bg-gradient-to-b from-coco-soft to-coco-secondary/65",
    border: "border-coco-secondary/50",
    ink: "text-coco-deep",
    art: "text-coco-deep",
  },
  princess: {
    surface: "bg-gradient-to-b from-princess-soft to-princess-secondary/70",
    border: "border-princess-secondary/50",
    ink: "text-princess-deep",
    art: "text-princess-deep",
  },
};

export default function HavenSpread() {
  return (
    <section id="havens" className="px-6 pt-6 pb-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-3 text-simba-secondary">
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
                className={`group relative overflow-hidden rounded-2xl border ${theme.border} ${theme.surface} ${theme.ink} flex flex-col min-h-[290px] p-6 transition-transform duration-300 hover:-translate-y-1`}
              >
                <HavenMotif
                  haven={org.theme}
                  className={`pointer-events-none absolute right-0 bottom-0 w-[78%] h-[50%] ${theme.art} opacity-35`}
                />
                <div className="relative">
                  <p className="font-semibold text-[11px] uppercase tracking-[0.16em] opacity-80 mb-2">
                    {org.focus}
                  </p>
                  <h3 className="font-display font-medium text-[25px] leading-[1.1] tracking-[-0.02em] mb-2">
                    {org.orgName}
                  </h3>
                  <p className="text-[14px] leading-[1.6] opacity-85">{org.tagline}</p>
                </div>
                <span className="relative mt-auto text-sm font-semibold">
                  Explore{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
