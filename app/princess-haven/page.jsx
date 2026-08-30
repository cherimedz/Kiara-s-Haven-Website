import { notFound } from "next/navigation";

import HavenPage from "@/app/components/haven/HavenPage";
import { getHaven } from "@/app/lib/havens";
import { buildMetadata } from "@/app/lib/siteMetadata";

const SLUG = "princess-haven";

export function generateMetadata() {
  const haven = getHaven(SLUG);
  if (!haven) return buildMetadata({ title: "Not found" });

  return buildMetadata({ title: haven.name, description: haven.tagline });
}

export default function Page() {
  const haven = getHaven(SLUG);
  if (!haven) notFound();

  return <HavenPage haven={haven} />;
}
