import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import Eyebrow from "./ui/Eyebrow";
import Botanical from "./illustrations/Botanical";
import WaveDivider from "./illustrations/WaveDivider";

export default function ContactSection() {
  return (
    <>
      <WaveDivider fill="var(--kh-tint-terracotta)" />
      <section id="contact" className="relative bg-tint-terracotta px-6 pt-4 pb-16 overflow-hidden">
        <Botanical className="pointer-events-none absolute -left-4 bottom-0 w-24 md:w-32 text-coco-from opacity-40" />
        <Botanical
          flip
          className="pointer-events-none absolute -right-4 bottom-0 w-24 md:w-32 text-coco-from opacity-40"
        />

        <div className="relative max-w-4xl mx-auto grid md:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <div>
            <Eyebrow className="mb-3">Let&apos;s stay connected</Eyebrow>
            <h2 className="font-display font-normal text-ink text-[clamp(2rem,3vw,2.5rem)] leading-[1.08] tracking-[-0.025em] mb-3">
              Leave something
              <br />
              kind behind.
            </h2>
            <p className="text-[17px] leading-[1.7] text-mute mb-6">
              We&apos;d love to hear from you.
            </p>
            <ContactForm />
          </div>

          <ContactInfo />
        </div>
      </section>
    </>
  );
}
