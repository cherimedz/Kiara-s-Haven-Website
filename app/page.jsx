import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import Hero from "@/app/components/sections/Hero";
import Wayfinder from "@/app/components/sections/Wayfinder";
import OurStory from "@/app/components/sections/OurStory";
import HavenSpread from "@/app/components/sections/HavenSpread";
import PromiseStrip from "@/app/components/sections/PromiseStrip";
import ContactSection from "@/app/components/sections/ContactSection";
import WaveDivider from "@/app/components/illustrations/WaveDivider";
import Reveal from "@/app/components/ui/Reveal";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        {/* The hero animates on load; everything below it waits to be scrolled
            to. One shared `Reveal` owns the timing so nothing drifts. */}
        <Hero />
        <Reveal>
          <Wayfinder />
        </Reveal>
        <Reveal>
          <OurStory />
        </Reveal>
        {/* Transitions back from the surface-level story section to the page. */}
        <WaveDivider fill="var(--kh-page)" />
        <Reveal>
          <HavenSpread />
        </Reveal>
        <Reveal>
          <PromiseStrip />
        </Reveal>
        <Reveal>
          <ContactSection />
        </Reveal>
      </main>

      <Footer />
    </>
  );
}
