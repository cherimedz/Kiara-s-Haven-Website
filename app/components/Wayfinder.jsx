import { ArrowRight } from "lucide-react";
import Eyebrow from "./ui/Eyebrow";
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
    ink: "text-accent",
  },
  {
    label: "Volunteer",
    desc: "Share your time. Change a life.",
    Icon: VolunteerIcon,
    tint: "bg-tint-sage",
    dot: "bg-coco-from",
    ink: "text-coco-from",
  },
  {
    label: "Donate",
    desc: "Every act of giving creates a ripple.",
    Icon: DonateIcon,
    tint: "bg-tint-rose",
    dot: "bg-sebastian-from",
    ink: "text-sebastian-from",
  },
  {
    label: "Sponsor",
    desc: "Support their care. Be their hero.",
    Icon: SponsorIcon,
    tint: "bg-tint-ochre",
    dot: "bg-simba-from",
    ink: "text-simba-from",
  },
  {
    label: "Impact",
    desc: "See the change we create together.",
    Icon: ImpactIcon,
    tint: "bg-tint-sage",
    dot: "bg-coco-from",
    ink: "text-coco-from",
  },
  {
    label: "Join Our Family",
    desc: "Be part of a community of kind.",
    Icon: FamilyIcon,
    tint: "bg-tint-terracotta",
    dot: "bg-princess-from",
    ink: "text-princess-from",
  },
];

export default function Wayfinder() {
  return (
    <section id="wayfinder" className="bg-card px-6 pb-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-3 text-simba-from">
          <LeafDivider />
        </div>
        <Eyebrow className="text-center mb-10">What would you like to do?</Eyebrow>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {actions.map(({ label, desc, Icon, tint, dot, ink }) => (
            <div
              key={label}
              className={`rounded-2xl px-4 py-6 text-center flex flex-col items-center ${tint}`}
            >
              <Icon className={`${ink} mb-4`} />
              <h3 className="font-display font-medium text-ink text-[19px] leading-[1.1] tracking-[-0.02em] mb-2">
                {label}
              </h3>
              <p className="text-[13px] text-mute leading-[1.6] mb-5 flex-1">{desc}</p>
              <span
                className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-white ${dot}`}
              >
                <ArrowRight size={14} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
