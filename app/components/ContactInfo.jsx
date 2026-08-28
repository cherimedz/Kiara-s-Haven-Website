import { Heart } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="flex flex-col justify-center h-full text-right">
      <p className="font-[family-name:var(--font-heading)] italic text-xl text-ink leading-relaxed mb-4">
        &quot;Until one has loved an animal, a part of one&apos;s soul remains
        unawakened.&quot;
      </p>
      <div className="flex justify-end">
        <Heart className="text-accent" size={20} />
      </div>
    </div>
  );
}
