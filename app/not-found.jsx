import Link from "next/link";

import { buildMetadata } from "@/app/lib/siteMetadata";

export const metadata = buildMetadata({
  title: "Page not found",
  description: "This page doesn't exist at Kiara's Haven.",
});

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-page text-ink">
      <h1 className="font-display font-normal text-[clamp(2.25rem,4vw,3rem)] leading-[1.05] tracking-[-0.03em] mb-4">
        Lost, but not forgotten
      </h1>
      <p className="text-[17px] leading-[1.7] text-mute mb-8">
        This page doesn&apos;t exist at Kiara&apos;s Haven.
      </p>
      <Link
        href="/"
        className="text-brand-dark font-semibold underline underline-offset-4 rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
      >
        Back home
      </Link>
    </main>
  );
}
