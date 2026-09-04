import clsx from "clsx";

import { getPalette } from "@/app/lib/palette";

/**
 * The section label — the most repeated component in the system.
 *
 *   OUR STORY
 *
 *   Five names. Five lives. One haven.
 *
 * Manrope 600, 11px, 0.16em tracking, uppercase, and never pure black.
 *
 * Terracotta by default; on a haven page it takes that haven's colour via
 * `token`. It resolves to the palette's `deep` tone rather than `primary`,
 * because at 11px the primaries don't clear 4.5:1 on cream — terracotta itself
 * is 4.01:1, which is why the default is `brand-dark`.
 *
 * @param {object} props
 * @param {string} [props.token] Haven token: simba, sebastian, coco, princess.
 */
export default function Eyebrow({ as: Tag = "p", token, className, children }) {
  return (
    <Tag
      className={clsx(
        "font-semibold text-[11px] uppercase tracking-[0.16em]",
        token ? getPalette(token).ink : "text-brand-dark",
        className
      )}
    >
      {children}
    </Tag>
  );
}
