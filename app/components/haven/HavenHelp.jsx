import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Eyebrow from "@/app/components/ui/Eyebrow";
import LeafDivider from "@/app/components/illustrations/LeafDivider";
import * as ActionIcons from "@/app/components/illustrations/ActionIcons";
import { actionHref, getAction } from "@/app/lib/actions";
import { getPalette } from "@/app/lib/palette";

/**
 * The ways this particular haven most needs help, drawn from its `helpWith`
 * list so each page points somewhere specific rather than repeating all six.
 *
 * @param {object} props
 * @param {import('@/app/lib/havens').Haven} props.haven
 */
export default function HavenHelp({ haven }) {
  const actions = haven.helpWith.map(getAction).filter(Boolean);
  if (actions.length === 0) return null;

  return (
    <section className="px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center mb-3 text-simba-secondary">
          <LeafDivider />
        </div>
        <Eyebrow as="h2" className="text-center mb-10">
          How you can help here
        </Eyebrow>

        <ul className="grid sm:grid-cols-3 gap-4 list-none">
          {actions.map(({ id, label, summary, icon, token }) => {
            const Icon = ActionIcons[icon];
            const palette = getPalette(token);

            return (
              <li key={id} className="flex">
                <Link
                  href={actionHref(id)}
                  className={`group w-full rounded-2xl border p-6 flex flex-col transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${palette.tint} ${palette.border}`}
                >
                  <Icon aria-hidden="true" className={`${palette.accent} mb-4`} />
                  <h3 className="font-display font-medium text-ink text-[20px] leading-[1.1] tracking-[-0.02em] mb-2">
                    {label}
                  </h3>
                  <p className="text-[14px] leading-[1.6] text-warm mb-5 flex-1">{summary}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-warm">
                    Read more
                    <ArrowRight
                      size={15}
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-1"
                    />
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
