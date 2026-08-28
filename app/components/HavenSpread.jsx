import Link from "next/link";
import { subOrgs } from "../lib/subOrgs";
import HavenMotif from "./illustrations/HavenMotif";

const gradients = {
  simba: "from-simba-from to-simba-to",
  sebastian: "from-sebastian-from to-sebastian-to",
  coco: "from-coco-from to-coco-to",
  princess: "from-princess-from to-princess-to",
};

export default function HavenSpread() {
  return (
    <section id="havens" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <p className="text-center uppercase tracking-[0.2em] text-sm text-accent font-medium mb-3">
          Our Havens
        </p>
        <h2 className="text-center font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-semibold text-ink mb-10">
          Our Four Havens
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {subOrgs.map((org) => (
            <Link
              key={org.slug}
              href={`/${org.slug}`}
              className={`relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br ${gradients[org.theme]} text-white flex flex-col justify-between min-h-[220px]`}
            >
              <div>
                <p className="text-xs uppercase tracking-wide opacity-90 mb-2">{org.focus}</p>
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold mb-2">
                  {org.orgName}
                </h3>
                <p className="text-sm opacity-95">{org.tagline}</p>
              </div>
              <div className="flex items-end justify-between mt-6">
                <span className="text-sm font-medium">Explore →</span>
                <HavenMotif haven={org.theme} className="w-14 h-14 opacity-40" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
