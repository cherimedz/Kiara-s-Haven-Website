import { PawPrint, Heart, Users, Sprout } from "lucide-react";
import Eyebrow from "./ui/Eyebrow";

const stats = [
  { icon: PawPrint, value: "250+", label: "Animals cared for" },
  { icon: Heart, value: "120+", label: "Adoptions" },
  { icon: Users, value: "300+", label: "Volunteers" },
  { icon: Sprout, value: "20+", label: "Communities impacted" },
];

export default function PromiseStrip() {
  return (
    <section className="px-6 pb-8">
      <div className="max-w-6xl mx-auto bg-surface rounded-2xl border border-line px-8 py-9 grid md:grid-cols-[minmax(0,0.9fr)_minmax(0,2fr)] gap-8 items-center">
        <div>
          <Eyebrow className="mb-3">Our promise</Eyebrow>
          <h3 className="font-display font-normal text-ink text-[28px] leading-[1.15] tracking-[-0.025em]">
            Kindness today.
            <br />
            Hope forever. <span className="text-brand">♡</span>
          </h3>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-line">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="px-5 text-center first:pl-0">
              <Icon className="text-brand mx-auto mb-2" size={22} strokeWidth={1.6} />
              {/* Statistics belong to the editorial voice, so they're set in Fraunces. */}
              <p className="font-display font-medium text-ink text-[30px] leading-none tracking-[-0.02em]">
                {value}
              </p>
              <p className="text-[13px] text-mute mt-2 leading-[1.5]">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
