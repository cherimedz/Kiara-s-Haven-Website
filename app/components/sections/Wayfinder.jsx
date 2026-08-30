import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Eyebrow from "@/app/components/ui/Eyebrow";
import LeafDivider from "@/app/components/illustrations/LeafDivider";
import * as ActionIcons from "@/app/components/illustrations/ActionIcons";
import { ACTIONS, actionHref } from "@/app/lib/actions";
import { getPalette } from "@/app/lib/palette";

/**
 * "What would you like to do?" — the six entry points into the site.
 *
 * Each card is a link rather than a styled box: the arrow disc reads as a
 * control, so the whole card has to behave like one.
 */
export default function Wayfinder() {
  return (
    <section id="wayfinder" className="bg-surface px-6 pb-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-3 text-simba-secondary">
          <LeafDivider />
        </div>
        <Eyebrow as="h2" className="text-center mb-10">
          What would you like to do?
        </Eyebrow>

        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 list-none">
          {ACTIONS.map(({ id, label, summary, icon, token }) => {
            const Icon = ActionIcons[icon];
            const palette = getPalette(token);

            return (
              <li key={id} className="flex">
                <Link
                  href={actionHref(id)}
                  className={`group w-full rounded-2xl px-4 py-6 text-center flex flex-col items-center transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${palette.tint}`}
                >
                  <Icon aria-hidden="true" className={`${palette.accent} mb-4`} />

                  <h3 className="font-display font-medium text-ink text-[19px] leading-[1.1] tracking-[-0.02em] mb-2">
                    {label}
                  </h3>
                  <p className="text-[13px] text-warm leading-[1.6] mb-5 flex-1">{summary}</p>

                  <span
                    aria-hidden="true"
                    className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-white transition-transform group-hover:scale-110 ${palette.disc}`}
                  >
                    <ArrowRight size={14} />
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
