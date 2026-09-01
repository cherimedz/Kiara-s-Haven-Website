/**
 * The six ways to get involved.
 *
 * Each is a real anchored section on `/get-involved`, so the wayfinder cards
 * and the navigation both have a distinct destination rather than six labels
 * pointing at the same place.
 *
 * Each borrows a palette token so the set reads as one family with the havens
 * rather than introducing a seventh unrelated set of colours. `icon` names an
 * export of components/illustrations/ActionIcons.
 */

/**
 * @typedef {object} Action
 * @property {string}   id          Anchor on /get-involved.
 * @property {string}   label       Display name, used in nav and cards.
 * @property {string}   summary     One line, shown on the wayfinder card.
 * @property {string}   detail      Paragraph shown on the destination page.
 * @property {string[]} points      What this actually involves.
 * @property {string}   icon        Export name from ActionIcons.
 * @property {string}   token       Palette token.
 */

/** @type {readonly Action[]} */
export const ACTIONS = Object.freeze([
  {
    id: "adopt",
    label: "Adopt",
    summary: "Give a loving home to a friend in need.",
    detail:
      "Adoption starts with a conversation, not a form. We match each animal to the household that suits them — their pace, their temperament, and the care they need — so the first home is the last one.",
    points: [
      "Meet the animals currently looking for a home",
      "Talk through what daily care actually involves",
      "Follow-up support for the first six months",
    ],
    icon: "AdoptIcon",
    token: "brand",
  },
  {
    id: "volunteer",
    label: "Volunteer",
    summary: "Share your time. Change a life.",
    detail:
      "Most of the work here is unglamorous and completely essential — walking, feeding, cleaning, sitting quietly with an animal who is still learning that people can be kind. Any amount of time helps.",
    points: [
      "Weekend care shifts, no experience needed",
      "Foster placements for animals in recovery",
      "Help at adoption days and community events",
    ],
    icon: "VolunteerIcon",
    token: "coco",
  },
  {
    id: "donate",
    label: "Donate",
    summary: "Every act of giving creates a ripple.",
    detail:
      "Donations cover the things that don't make good photographs: veterinary bills, medication, heating through winter, and the food bill that never stops. Small recurring gifts help most, because they let us plan.",
    points: [
      "One-off gifts go straight to medical care",
      "Monthly giving funds day-to-day running costs",
      "In-kind donations of food, bedding, and crates",
    ],
    icon: "DonateIcon",
    token: "sebastian",
  },
  {
    id: "sponsor",
    label: "Sponsor",
    summary: "Support their care. Be their hero.",
    detail:
      "Some animals wait longer than others — the older ones, the shy ones, the ones with ongoing conditions. Sponsoring covers one animal's care while they wait for the right home, however long that takes.",
    points: [
      "Choose an animal and cover their monthly costs",
      "Regular updates on how they're doing",
      "Sponsorship continues until they're adopted",
    ],
    icon: "SponsorIcon",
    token: "simba",
  },
  {
    id: "impact",
    label: "Impact",
    summary: "See the change we create together.",
    detail:
      "We publish what we do and what it costs, because trust is built on specifics rather than slogans. This is a demo concept, so the figures shown across this site are illustrative rather than real.",
    points: [
      "Where donations go, broken down by category",
      "Adoption and return rates, published honestly",
      "What we got wrong and what changed as a result",
    ],
    icon: "ImpactIcon",
    token: "coco",
  },
  {
    id: "join-our-family",
    label: "Join Our Family",
    summary: "Be part of a community of kind.",
    detail:
      "Beyond adopting or giving, there's a wider community here — people who share what they know, turn up when there's a crisis, and keep an eye on the animals in their own neighbourhood.",
    points: [
      "Community updates, sent when there's something to say",
      "Local networks for lost and found animals",
      "Skills exchange — vets, trainers, drivers, builders",
    ],
    icon: "FamilyIcon",
    token: "princess",
  },
]);

/**
 * Path to an action's section on the get-involved page.
 * @param {string} id
 */
export function actionHref(id) {
  return `/get-involved#${id}`;
}

/**
 * Look up an action by id.
 * @param {string} id
 * @returns {Action | undefined}
 */
export function getAction(id) {
  return ACTIONS.find((action) => action.id === id);
}
