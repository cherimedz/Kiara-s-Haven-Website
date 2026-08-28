import { PawPrint, Heart, Users, Sprout } from "lucide-react";

const stats = [
  { icon: PawPrint, value: "250+", label: "Animals cared for" },
  { icon: Heart, value: "120+", label: "Adoptions" },
  { icon: Users, value: "300+", label: "Volunteers" },
  { icon: Sprout, value: "20+", label: "Communities impacted" },
];

export default function PromiseStrip() {
  return (
    <section className="px-6 py-4">
      <div className="max-w-6xl mx-auto bg-card rounded-2xl border border-line p-8 md:p-10 grid md:grid-cols-[1fr_auto] gap-8 items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-accent font-medium mb-2">
            Our Promise
          </p>
          <h3 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-ink">
            Kindness today. Hope forever. <span className="text-accent">♡</span>
          </h3>
        </div>

        <div className="flex flex-wrap gap-8">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-3">
              <Icon className="text-accent" size={22} />
              <div>
                <p className="font-[family-name:var(--font-heading)] text-xl font-semibold text-ink leading-none">
                  {value}
                </p>
                <p className="text-xs text-mute mt-1 whitespace-nowrap">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
