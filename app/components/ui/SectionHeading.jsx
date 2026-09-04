import clsx from "clsx";

import Eyebrow from "@/app/components/ui/Eyebrow";
import { HEADING_RHYTHM, MEASURE } from "@/app/lib/layout";

/**
 * The editorial heading block — label, heading, description.
 *
 *   OUR HAVENS
 *
 *   Four different stories.
 *   One shared kindness.
 *
 *   Every haven began with a life that changed ours.
 *
 * Left-aligned by default. Centring every heading is what makes a page read as
 * a brochure; centre is reserved here for genuine emotional moments, and has
 * to be asked for.
 *
 * The heading and description carry their own measures (700 / 620) rather than
 * inheriting the section's, so a heading breaks where it was meant to.
 *
 * @param {object} props
 * @param {string}  [props.eyebrow]
 * @param {string}  [props.token]     Haven token, colours the label.
 * @param {"left" | "center"} [props.align]
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  token,
  align = "left",
  className,
}) {
  const centered = align === "center";

  return (
    <div
      className={clsx(HEADING_RHYTHM.description, centered && "text-center", className)}
    >
      {eyebrow && (
        <Eyebrow token={token} className={HEADING_RHYTHM.label}>
          {eyebrow}
        </Eyebrow>
      )}

      <h2
        className={clsx(
          "font-display font-normal text-ink text-[clamp(2.25rem,3.4vw,2.75rem)] leading-[1.08] tracking-[-0.025em]",
          MEASURE.heading,
          centered && "mx-auto",
          subtitle && HEADING_RHYTHM.heading
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={clsx(
            "text-[17px] leading-[1.7] text-mute",
            MEASURE.description,
            centered && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
