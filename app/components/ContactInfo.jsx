import { MapPin, Mail, Heart } from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-accent to-[#e0a978] text-white p-8 space-y-4">
      <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold mb-2">
        Get in Touch
      </h3>
      <p className="flex items-center gap-3 text-sm">
        <MapPin size={18} /> A fictional address, for a fictional haven
      </p>
      <p className="flex items-center gap-3 text-sm">
        <Mail size={18} /> hello@kiarashaven.example
      </p>
      <p className="flex items-center gap-3 text-sm pt-2 border-t border-white/20 mt-4">
        <Heart size={18} /> Built as a portfolio demo project
      </p>
    </div>
  );
}
