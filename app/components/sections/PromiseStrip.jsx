import Eyebrow from "@/app/components/ui/Eyebrow";

/**
 * Illustrative figures — this is a demo concept, so they are sample data
 * rather than reporting. Matches the shape `HavenStats` reads per haven.
 */
const stats = [
  { value: "250+", label: "Animals cared for" },
  { value: "120+", label: "Adoptions" },
  { value: "300+", label: "Volunteers" },
  { value: "20+", label: "Communities impacted" },
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
          {/* No illustration in this section by design — Lucide is reserved for
              functional UI, custom marks carry emotion, and decorative figures
              are neither. The typography is given the room instead. */}
          {stats.map(({ value, label }) => (
            <div key={label} className="px-5 text-center first:pl-0">
              {/* Statistics belong to the editorial voice, so they're set in Fraunces. */}
              <p className="font-display font-medium text-ink text-[34px] leading-none tracking-[-0.02em]">
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
