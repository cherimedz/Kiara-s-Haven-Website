import NameMotif from "@/app/components/illustrations/NameMotif";

/**
 * The pull-quote beside the contact form.
 *
 * No quotation-mark glyph. A 60px decorative " was the loudest thing in this
 * column and it was saying nothing; the italic Fraunces already reads as a
 * quote. Kiara's mark closes it instead.
 */
export default function ContactInfo() {
  return (
    <figure className="border-l border-brand/30 pl-8">
      <blockquote className="font-display italic font-normal text-ink text-[19px] md:text-[21px] leading-[1.55] tracking-[-0.015em]">
        Until one has loved an animal, a part of one&apos;s soul remains
        unawakened.
      </blockquote>
      <figcaption className="mt-5">
        <NameMotif pet="kiara" size={20} className="text-brand" />
      </figcaption>
    </figure>
  );
}
