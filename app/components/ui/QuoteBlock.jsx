import clsx from "clsx";

import NameMotif from "@/app/components/illustrations/NameMotif";
import Container from "@/app/components/ui/Container";
import { MEASURE } from "@/app/lib/layout";
import { getPalette } from "@/app/lib/palette";

/**
 * A breathing moment between sections.
 *
 * Large italic Fraunces on linen, with a lot of air around it and no quotation
 * -mark graphic — the type is doing the work, and a giant decorative glyph
 * would be the loudest thing on the page. A small animal symbol sits under the
 * line instead, so even the pauses belong to one of the five.
 *
 * Used sparingly. It stops being a moment if it happens three times.
 *
 * @param {object} props
 * @param {string} [props.pet]    Which symbol closes the quote.
 * @param {string} [props.cite]   Optional attribution.
 */
export default function QuoteBlock({ children, pet = "kiara", cite, className }) {
  const token = pet === "kiara" ? "brand" : pet;

  return (
    <aside className={clsx("bg-linen py-16 md:py-20", className)}>
      <Container>
        <figure className={clsx("mx-auto text-center", MEASURE.heading)}>
          <blockquote className="font-display italic font-normal text-ink text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.28] tracking-[-0.02em]">
            {children}
          </blockquote>

          <figcaption className="mt-8 flex flex-col items-center gap-3">
            <NameMotif pet={pet} size={22} className={getPalette(token).accent} />
            {cite && (
              <span className="text-[13px] uppercase tracking-[0.16em] font-semibold text-mute">
                {cite}
              </span>
            )}
          </figcaption>
        </figure>
      </Container>
    </aside>
  );
}
