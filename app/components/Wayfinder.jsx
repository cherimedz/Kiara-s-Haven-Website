import { ArrowRight } from "lucide-react";
import LeafDivider from "./illustrations/LeafDivider";
import {
  AdoptIcon,
  VolunteerIcon,
  DonateIcon,
  SponsorIcon,
  ImpactIcon,
  FamilyIcon,
} from "./illustrations/ActionIcons";

const actions = [
  {
    label: "Adopt",
    desc: "Give a loving home to a friend in need.",
    Icon: AdoptIcon,
    tint: "bg-tint-terracotta",
    dot: "bg-accent",
  },
  {
    label: "Volunteer",
    desc: "Share your time. Change a life.",
    Icon: VolunteerIcon,
    tint: "bg-tint-sage",
    dot: "bg-coco-from",
  },
  {
    label: "Donate",
    desc: "Every act of giving creates a ripple.",
    Icon: DonateIcon,
    tint: "bg-tint-rose",
    dot: "bg-sebastian-from",
  },
  {
    label: "Sponsor",
    desc: "Support their care. Be their hero.",
    Icon: SponsorIcon,
    tint: "bg-tint-ochre",
    dot: "bg-simba-from",
  },
  {
    label: "Impact",
    desc: "See the change we create together.",
    Icon: ImpactIcon,
    tint: "bg-tint-sage",
    dot: "bg-coco-from",
  },
  {
    label: "Join Our Family",
    desc: "Be part of a community of kind.",
    Icon: FamilyIcon,
    tint: "bg-tint-terracotta",
    dot: "bg-princess-from",
  },
];

export default function Wayfinder() {
  return (
    <section id="wayfinder" className="px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-4 text-accent">
          <LeafDivider />
        </div>
        <p className="text-center uppercase tracking-[0.2em] text-sm text-accent font-medium mb-10">
          What Would You Like to Do?
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {actions.map(({ label, desc, Icon, tint, dot }) => (
            <div key={label} className={`rounded-2xl p-6 ${tint}`}>
              <Icon className="text-ink mb-4" />
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-ink mb-1">
                {label}
              </h3>
              <p className="text-sm text-mute mb-5">{desc}</p>
              <span
                className={`inline-flex items-center justify-center w-9 h-9 rounded-full text-white ${dot}`}
              >
                <ArrowRight size={16} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
