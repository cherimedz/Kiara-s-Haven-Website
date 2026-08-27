export default function Footer() {
  return (
    <footer className="bg-ink text-white/80 py-10 px-6 text-center">
      <p className="font-[family-name:var(--font-heading)] text-lg text-white mb-2">
        Kiara&apos;s Haven
      </p>
      <p className="text-sm max-w-xl mx-auto">
        A fictional demo project built to showcase modern web development —
        not a real organization. Named with love after a very real cat.
      </p>
      <p className="text-xs mt-4 text-white/50">
        {`© ${new Date().getFullYear()} Kiara's Haven — concept project.`}
      </p>
    </footer>
  );
}
