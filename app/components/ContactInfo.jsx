import { Heart } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="relative pl-8">
      <span
        aria-hidden="true"
        className="absolute left-0 -top-4 font-display text-6xl leading-none text-brand/35 select-none"
      >
        &ldquo;
      </span>
      <p className="font-display italic font-normal text-ink text-[19px] md:text-[21px] leading-[1.55] tracking-[-0.015em]">
        Until one has loved an animal, a part of one&apos;s soul remains
        unawakened.
      </p>
      <Heart className="text-brand mt-4" size={18} />
    </div>
  );
}
