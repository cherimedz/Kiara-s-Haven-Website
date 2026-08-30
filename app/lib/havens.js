/**
 * The four community havens. Single source of truth for haven content — route
 * segments, copy, and the palette token each one is keyed to.
 *
 * `token` is the colour-token prefix declared in globals.css, so styling can be
 * derived (`--kh-${token}-soft`) instead of restated per component.
 */

/** @typedef {"simba" | "sebastian" | "coco" | "princess"} HavenToken */

/**
 * @typedef {object} Haven
 * @property {string}      slug       URL segment, also the route folder name.
 * @property {string}      name       Display name, e.g. "Simba's Haven".
 * @property {string}      petName    The real animal the haven is named after.
 * @property {string}      focus      Short category label.
 * @property {HavenToken}  token      Colour-token prefix.
 * @property {string}      tagline    One-line summary.
 * @property {string}      mission    Paragraph-length description.
 * @property {string[]}    focusAreas Bulleted areas of work.
 * @property {string}      dedication Why this haven carries this animal's name.
 */

/** @type {readonly Haven[]} */
export const HAVENS = Object.freeze([
  {
    slug: "simbas-haven",
    name: "Simba's Haven",
    petName: "Simba",
    focus: "Wildlife Conservation",
    token: "simba",
    tagline: "Protecting wild places and the creatures who call them home.",
    mission:
      "Simba's Haven focuses on preserving natural habitats, combating poaching, and protecting biodiversity. By partnering with conservation organizations, we work toward a world where wildlife can thrive undisturbed.",
    focusAreas: [
      "Habitat preservation and reforestation partnerships",
      "Anti-poaching awareness and reporting programs",
      "Biodiversity monitoring in partner regions",
    ],
    dedication: "wild at heart, forever free.",
  },
  {
    slug: "sebastians-haven",
    name: "Sebastian's Haven",
    petName: "Sebastian",
    focus: "Elder Care",
    token: "sebastian",
    tagline: "Making sure our senior community is never overlooked.",
    mission:
      "Sebastian's Haven is dedicated to ensuring senior citizens receive the care and companionship they deserve. Through home visits, community engagement, and specialized support, we address the unique needs of the elderly.",
    focusAreas: [
      "Regular home visits and companionship programs",
      "Coordination with local senior care communities",
      "Support resources for caregivers",
    ],
    dedication: "a gentle soul, always with us.",
  },
  {
    slug: "cocos-haven",
    name: "Coco's Haven",
    petName: "Coco",
    focus: "Community Support",
    token: "coco",
    tagline: "Building a community where everyone has room to rebuild.",
    mission:
      "Coco's Haven fosters a community of inclusion and hope, believing that every person facing hardship deserves the opportunity to rebuild and lead a fulfilling life, regardless of their background or circumstances.",
    focusAreas: [
      "Local outreach and basic-needs support",
      "Partnerships with community shelters",
      "Volunteer-driven mentorship programs",
    ],
    dedication: "the connector, love in action.",
  },
  {
    slug: "princess-haven",
    name: "Princess's Haven",
    petName: "Princess",
    focus: "Children's Futures",
    token: "princess",
    tagline: "Helping the next generation reach their full potential.",
    mission:
      "Princess's Haven works to create a nurturing and supportive environment where every child can thrive, aiming to break the cycle of poverty and empower the next generation to reach their full potential.",
    focusAreas: [
      "Educational access and after-school programs",
      "Family support resources",
      "Community mentorship for young people",
    ],
    dedication: "a little light with big dreams.",
  },
]);

/** Every haven slug, for route generation and validation. */
export const HAVEN_SLUGS = Object.freeze(HAVENS.map((haven) => haven.slug));

/**
 * Look up a haven by slug.
 * @param {string} slug
 * @returns {Haven | undefined} `undefined` when the slug is unknown — callers
 *   rendering a route should hand that to `notFound()`.
 */
export function getHaven(slug) {
  return HAVENS.find((haven) => haven.slug === slug);
}
