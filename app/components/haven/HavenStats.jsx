import Eyebrow from "@/app/components/ui/Eyebrow";
import { getPalette } from "@/app/lib/palette";

/**
 * Per-haven figures, mirroring the homepage promise strip so a haven page
 * carries the same rhythm. Numbers are set in Fraunces — they belong to the
 * editorial voice rather than to a dashboard.
 *
 * @param {object} props
 * @param {import('@/app/lib/havens').Haven} props.haven
 */
export default function HavenStats({ haven }) {
  const palette = getPalette(haven.token);

  return (
    <section className="px-6 pb-4">
      <div className="max-w-4xl mx-auto bg-surface rounded-2xl border border-line px-8 py-9 grid md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-8 items-center">
        <div>
          <Eyebrow className="mb-3">Where it goes</Eyebrow>
          <h2 className="font-display font-normal text-ink text-[26px] leading-[1.15] tracking-[-0.025em]">
            Small numbers,
            <br />
            counted honestly.
          </h2>
        </div>

        <dl className="grid grid-cols-3 divide-x divide-line">
          {haven.stats.map(({ value, label }) => (
            <div key={label} className="px-4 text-center first:pl-0">
              <dt className="sr-only">{label}</dt>
              <dd>
                <span
                  className={`block font-display font-medium text-[30px] leading-none tracking-[-0.02em] ${palette.accent}`}
                >
                  {value}
                </span>
                <span className="block text-[13px] text-mute mt-2 leading-[1.5]">
                  {label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
