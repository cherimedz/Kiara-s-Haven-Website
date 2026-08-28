import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-bg text-ink">
      <h1 className="font-display font-normal text-[clamp(2.25rem,4vw,3rem)] leading-[1.05] tracking-[-0.03em] mb-4">
        Lost, but not forgotten
      </h1>
      <p className="text-mute mb-8">This page doesn&apos;t exist at Kiara&apos;s Haven.</p>
      <Link href="/" className="text-accent underline">
        Back home
      </Link>
    </div>
  );
}
