import { CheckCircle2, ArrowLeft } from "lucide-react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Button from "../ui/Button";
import SimbaScene from "../illustrations/SimbaScene";
import { getSubOrg } from "../../lib/subOrgs";

export default function SimbaHavenPage() {
  const org = getSubOrg("simbas-haven");

  return (
    <>
      <Navbar />

      <section className="px-6 pt-14 pb-16 md:pt-20 md:pb-24 bg-gradient-to-br from-simba-from/25 to-simba-to/25">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1.2fr_1fr] gap-10 items-center">
          <div>
            <p className="uppercase tracking-[0.2em] text-sm text-simba-from font-semibold mb-4">
              {org.focus}
            </p>
            <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl font-semibold text-ink leading-[1.05] mb-6">
              {org.orgName}
            </h1>
            <p className="text-lg text-mute max-w-md">{org.tagline}</p>
          </div>
          <SimbaScene className="w-full max-w-xs mx-auto text-simba-from" />
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16">
        <p className="text-mute text-lg leading-relaxed mb-10">{org.mission}</p>

        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-ink mb-4">
          What We Focus On
        </h2>
        <ul className="space-y-3 mb-10">
          {org.focusAreas.map((area) => (
            <li key={area} className="flex items-start gap-3 text-mute">
              <CheckCircle2 size={20} className="text-simba-from shrink-0 mt-0.5" />
              {area}
            </li>
          ))}
        </ul>

        <p className="text-sm text-mute mb-10 italic">
          {org.orgName} is named after {org.petName} — wild at heart, forever
          free, and one of the five real animals this whole project is built
          around.
        </p>

        <div className="flex flex-wrap gap-4">
          <Button href="/" variant="ghost">
            <ArrowLeft size={16} className="mr-2" /> Back to Kiara&apos;s Haven
          </Button>
          <Button href="/#havens" variant="simba">
            See All Havens
          </Button>
        </div>
      </section>

      <Footer />
    </>
  );
}
