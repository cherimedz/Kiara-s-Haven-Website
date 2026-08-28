import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Wayfinder from "./components/Wayfinder";
import OurStory from "./components/OurStory";
import HavenSpread from "./components/HavenSpread";
import PromiseStrip from "./components/PromiseStrip";
import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Wayfinder />
      <OurStory />
      <HavenSpread />
      <PromiseStrip />
      <section id="contact" className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <p className="text-center uppercase tracking-[0.2em] text-sm text-accent font-medium mb-3">
            Let&apos;s Stay Connected
          </p>
          <h2 className="text-center font-[family-name:var(--font-heading)] text-3xl md:text-4xl font-semibold text-ink mb-2">
            Leave something kind behind.
          </h2>
          <p className="text-center text-mute mb-10">We&apos;d love to hear from you.</p>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
