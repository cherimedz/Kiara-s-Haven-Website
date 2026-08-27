import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PageHero from "./ui/PageHero";
import Button from "./ui/Button";

export default function SubOrgPage({ org }) {
  return (
    <>
      <Navbar />
      <PageHero
        theme={org.theme}
        focus={org.focus}
        orgName={org.orgName}
        tagline={org.tagline}
      />
      <section className="max-w-3xl mx-auto px-6 py-16">
        <p className="text-mute text-lg leading-relaxed mb-10">{org.mission}</p>

        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold mb-4">
          What We Focus On
        </h2>
        <ul className="space-y-3 mb-10">
          {org.focusAreas.map((area) => (
            <li key={area} className="flex items-start gap-3 text-mute">
              <CheckCircle2 size={20} className="text-accent shrink-0 mt-0.5" />
              {area}
            </li>
          ))}
        </ul>

        <p className="text-sm text-mute mb-10 italic">
          {org.orgName} is named after {org.petName}, a real member of the family
          this whole project is built around — part of the Kiara&apos;s Haven concept.
        </p>

        <div className="flex gap-4">
          <Button href="/" variant="ghost">
            <ArrowLeft size={16} className="mr-2" /> Back to Kiara&apos;s Haven
          </Button>
          <Button href="/#many-faces" variant={org.theme}>
            See All Havens
          </Button>
        </div>
      </section>
      <Footer />
    </>
  );
}
