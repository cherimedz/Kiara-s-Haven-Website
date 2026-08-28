import { CheckCircle2, ArrowLeft } from "lucide-react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Button from "../ui/Button";
import Eyebrow from "../ui/Eyebrow";
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
            <Eyebrow className="text-simba-from mb-4">{org.focus}</Eyebrow>
            <h1 className="font-display font-normal text-ink text-[clamp(2.75rem,5vw,4rem)] leading-[1.02] tracking-[-0.035em] mb-6">
              {org.orgName}
            </h1>
            <p className="text-[18px] leading-[1.7] text-mute max-w-md">{org.tagline}</p>
          </div>
          <SimbaScene className="w-full max-w-xs mx-auto text-simba-from" />
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16">
        <p className="text-[18px] leading-[1.75] text-mute mb-10">{org.mission}</p>

        <h2 className="font-display font-medium text-ink text-[26px] leading-[1.1] tracking-[-0.025em] mb-4">
          What we focus on
        </h2>
        <ul className="space-y-3 mb-10">
          {org.focusAreas.map((area) => (
            <li key={area} className="flex items-start gap-3 text-[17px] leading-[1.65] text-mute">
              <CheckCircle2 size={20} className="text-simba-from shrink-0 mt-0.5" />
              {area}
            </li>
          ))}
        </ul>

        <p className="font-display italic text-[17px] leading-[1.6] text-mute mb-10">
          {org.orgName} is named after {org.petName} — wild at heart, forever
          free, and one of the five real animals this whole project is built
          around.
        </p>

        <div className="flex flex-wrap gap-4">
          <Button href="/" variant="ghost">
            <ArrowLeft size={16} className="mr-2" /> Back to Kiara&apos;s Haven
          </Button>
          <Button href="/#havens" variant="simba">
            See all havens
          </Button>
        </div>
      </section>

      <Footer />
    </>
  );
}
