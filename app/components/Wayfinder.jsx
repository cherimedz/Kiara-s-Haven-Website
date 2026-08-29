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

/* Level-3 surfaces: each card borrows one haven's palest tone, so the row reads
   as one family. Arrow discs use the `deep` tone to keep white arrows legible. */
const actions = [
  {
    label: "Adopt",
    desc: "Give a loving home to a friend in need.",
    Icon: AdoptIcon,
    tint: "bg-brand-soft",
    icon: "text-brand-dark",
    disc: "bg-brand-dark",
  },
  {
    label: "Volunteer",
    desc: "Share your time. Change a life.",
    Icon: VolunteerIcon,
    tint: "bg-coco-soft",
    icon: "text-coco-highlight",
    disc: "bg-coco-deep",
  },
  {
    label: "Donate",
    desc: "Every act of giving creates a ripple.",
    Icon: DonateIcon,
    tint: "bg-sebastian-soft",
    icon: "text-sebastian-primary",
    disc: "bg-sebastian-deep",
  },
  {
    label: "Sponsor",
    desc: "Support their care. Be their hero.",
    Icon: SponsorIcon,
    tint: "bg-simba-soft",
    icon: "text-simba-highlight",
    disc: "bg-simba-deep",
  },
  {
    label: "Impact",
    desc: "See the change we create together.",
    Icon: ImpactIcon,
    tint: "bg-coco-soft",
    icon: "text-coco-highlight",
    disc: "bg-coco-deep",
  },
  {
    label: "Join Our Family",
    desc: "Be part of a community of kind.",
    Icon: FamilyIcon,
    tint: "bg-princess-soft",
    icon: "text-princess-primary",
    disc: "bg-princess-deep",
  },
];

export default function Wayfinder() {
  return (
    <section id="wayfinder" className="bg-surface px-6 pb-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-3 text-simba-secondary">
          <LeafDivider />
        </div>
        <Eyebrow className="text-center mb-10">What would you like to do?</Eyebrow>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {actions.map(({ label, desc, Icon, tint, icon, disc }) => (
            <div
              key={label}
              className={`rounded-2xl px-4 py-6 text-center flex flex-col items-center ${tint}`}
            >
              <Icon className={`${icon} mb-4`} />
              <h3 className="font-display font-medium text-ink text-[19px] leading-[1.1] tracking-[-0.02em] mb-2">
                {label}
              </h3>
              <p className="text-[13px] text-warm leading-[1.6] mb-5 flex-1">{desc}</p>
              <span
                className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-white ${disc}`}
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
