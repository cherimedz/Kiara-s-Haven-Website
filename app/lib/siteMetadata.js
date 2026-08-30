/** Site-wide metadata constants and helpers. */

export const SITE_NAME = "Kiara's Haven";

export const SITE_DESCRIPTION =
  "A concept animal-adoption-center site, and the community havens it inspired — a demo project, not a real organization.";

/**
 * Build page metadata with a consistent title suffix.
 * @param {object}  page
 * @param {string}  page.title        Page-specific title.
 * @param {string} [page.description] Falls back to the site description.
 * @returns {import('next').Metadata}
 */
export function buildMetadata({ title, description = SITE_DESCRIPTION }) {
  return {
    title: `${title} — ${SITE_NAME}`,
    description,
  };
}
