import { Instagram, Facebook, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-mute">
        <p>{`© ${new Date().getFullYear()} Kiara's Haven (Demo Concept)`}</p>
        <div className="flex items-center gap-4 text-ink">
          <Instagram size={18} className="hover:text-accent transition-colors" />
          <Facebook size={18} className="hover:text-accent transition-colors" />
          <Mail size={18} className="hover:text-accent transition-colors" />
        </div>
      </div>
    </footer>
  );
}
