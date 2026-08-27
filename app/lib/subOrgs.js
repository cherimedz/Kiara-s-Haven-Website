export const subOrgs = [
  {
    slug: "simbas-haven",
    orgName: "Simba's Haven",
    petName: "Simba",
    focus: "Wildlife Conservation",
    theme: "simba",
    tagline: "Protecting wild places and the creatures who call them home.",
    mission:
      "Simba's Haven focuses on preserving natural habitats, combating poaching, and protecting biodiversity. By partnering with conservation organizations, we work toward a world where wildlife can thrive undisturbed.",
    focusAreas: [
      "Habitat preservation and reforestation partnerships",
      "Anti-poaching awareness and reporting programs",
      "Biodiversity monitoring in partner regions",
    ],
  },
  {
    slug: "sebastians-haven",
    orgName: "Sebastian's Haven",
    petName: "Sebastian",
    focus: "Elder Care",
    theme: "sebastian",
    tagline: "Making sure our senior community is never overlooked.",
    mission:
      "Sebastian's Haven is dedicated to ensuring senior citizens receive the care and companionship they deserve. Through home visits, community engagement, and specialized support, we address the unique needs of the elderly.",
    focusAreas: [
      "Regular home visits and companionship programs",
      "Coordination with local senior care communities",
      "Support resources for caregivers",
    ],
  },
  {
    slug: "cocos-haven",
    orgName: "Coco's Haven",
    petName: "Coco",
    focus: "Community Support",
    theme: "coco",
    tagline: "Building a community where everyone has room to rebuild.",
    mission:
      "Coco's Haven fosters a community of inclusion and hope, believing that every person facing hardship deserves the opportunity to rebuild and lead a fulfilling life, regardless of their background or circumstances.",
    focusAreas: [
      "Local outreach and basic-needs support",
      "Partnerships with community shelters",
      "Volunteer-driven mentorship programs",
    ],
  },
  {
    slug: "princess-haven",
    orgName: "Princess's Haven",
    petName: "Princess",
    focus: "Children's Futures",
    theme: "princess",
    tagline: "Helping the next generation reach their full potential.",
    mission:
      "Princess's Haven works to create a nurturing and supportive environment where every child can thrive, aiming to break the cycle of poverty and empower the next generation to reach their full potential.",
    focusAreas: [
      "Educational access and after-school programs",
      "Family support resources",
      "Community mentorship for young people",
    ],
  },
];

export function getSubOrg(slug) {
  return subOrgs.find((org) => org.slug === slug);
}
