/**
 * The five real animals the project is named after. Four lend their names to a
 * haven; Kiara names the parent concept and so has no haven of her own.
 *
 * Kept separate from `havens.js` because the sets differ in size and purpose:
 * this drives the "Our Story" portraits, that drives routing and page content.
 */

/** @typedef {"kiara" | "simba" | "sebastian" | "coco" | "princess"} PetKey */

/**
 * @typedef {object} Pet
 * @property {PetKey}   key      Identifier, also selects the portrait artwork.
 * @property {string}   name     Display name.
 * @property {string}   token    Colour-token prefix from globals.css.
 * @property {string[]} tagline  Short lines, rendered one per row.
 */

/** @type {readonly Pet[]} */
export const PETS = Object.freeze([
  {
    key: "kiara",
    name: "Kiara",
    token: "brand",
    tagline: ["Our heart. Our home."],
  },
  {
    key: "simba",
    name: "Simba",
    token: "simba",
    tagline: ["Wild at heart.", "Forever free."],
  },
  {
    key: "sebastian",
    name: "Sebastian",
    token: "sebastian",
    tagline: ["Gentle soul.", "Always with us."],
  },
  {
    key: "coco",
    name: "Coco",
    token: "coco",
    tagline: ["The connector.", "Love in action."],
  },
  {
    key: "princess",
    name: "Princess",
    token: "princess",
    tagline: ["Little light.", "Big dreams."],
  },
]);
