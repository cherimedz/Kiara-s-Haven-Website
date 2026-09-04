import ContactForm from "@/app/components/sections/ContactForm";
import ContactInfo from "@/app/components/sections/ContactInfo";
import Eyebrow from "@/app/components/ui/Eyebrow";
import Botanical from "@/app/components/illustrations/Botanical";
import WaveDivider from "@/app/components/illustrations/WaveDivider";
import Container from "@/app/components/ui/Container";
import Section from "@/app/components/ui/Section";
import { HEADING_RHYTHM } from "@/app/lib/layout";

/** Closing section: contact form, pull-quote, and margin botanicals. */
export default function ContactSection() {
  return (
    <>
      <WaveDivider fill="var(--kh-brand-soft)" />
      <Section id="contact" rhythm="cta" flush className="relative bg-brand-soft overflow-hidden">
        <Botanical className="pointer-events-none absolute -left-4 bottom-0 w-24 md:w-32 text-coco-primary opacity-40" />
        <Botanical
          flip
          className="pointer-events-none absolute -right-4 bottom-0 w-24 md:w-32 text-coco-primary opacity-40"
        />

        <Container className="relative grid lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          <div className="lg:col-span-7">
            {/* On the brand-soft surface even brand-dark only reaches 4.08:1,
                so this label steps up to warm ink (7:1). */}
            <Eyebrow className={`text-warm ${HEADING_RHYTHM.label}`}>Let&apos;s stay connected</Eyebrow>
            <h2 className="font-display font-normal text-ink text-[clamp(2rem,3vw,2.5rem)] leading-[1.08] tracking-[-0.025em] mb-3">
              Leave something
              <br />
              kind behind.
            </h2>
            <p className="text-[17px] leading-[1.7] text-warm mb-10">
              We&apos;d love to hear from you.
            </p>
            <ContactForm />
          </div>

          <div className="lg:col-span-5">
            <ContactInfo />
          </div>
        </Container>
      </Section>
    </>
  );
}
