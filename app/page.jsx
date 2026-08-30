import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import Hero from "@/app/components/sections/Hero";
import Wayfinder from "@/app/components/sections/Wayfinder";
import OurStory from "@/app/components/sections/OurStory";
import HavenSpread from "@/app/components/sections/HavenSpread";
import PromiseStrip from "@/app/components/sections/PromiseStrip";
import ContactSection from "@/app/components/sections/ContactSection";
import WaveDivider from "@/app/components/illustrations/WaveDivider";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Wayfinder />
        <OurStory />
        {/* Transitions back from the surface-level story section to the page. */}
        <WaveDivider fill="var(--kh-page)" />
        <HavenSpread />
        <PromiseStrip />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
