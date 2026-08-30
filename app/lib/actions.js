/**
 * The six ways to get involved, shown in the homepage wayfinder.
 *
 * Each borrows a palette token so the row reads as one family with the havens
 * rather than introducing a seventh unrelated set of colours. `icon` names an
 * export of components/illustrations/ActionIcons.
 */

/** @type {readonly {label: string, description: string, icon: string, token: string}[]} */
export const ACTIONS = Object.freeze([
  {
    label: "Adopt",
    description: "Give a loving home to a friend in need.",
    icon: "AdoptIcon",
    token: "brand",
  },
  {
    label: "Volunteer",
    description: "Share your time. Change a life.",
    icon: "VolunteerIcon",
    token: "coco",
  },
  {
    label: "Donate",
    description: "Every act of giving creates a ripple.",
    icon: "DonateIcon",
    token: "sebastian",
  },
  {
    label: "Sponsor",
    description: "Support their care. Be their hero.",
    icon: "SponsorIcon",
    token: "simba",
  },
  {
    label: "Impact",
    description: "See the change we create together.",
    icon: "ImpactIcon",
    token: "coco",
  },
  {
    label: "Join Our Family",
    description: "Be part of a community of kind.",
    icon: "FamilyIcon",
    token: "princess",
  },
]);
