import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Wayfinder from "./components/Wayfinder";
import OurStory from "./components/OurStory";
import HavenSpread from "./components/HavenSpread";
import PromiseStrip from "./components/PromiseStrip";
import ContactSection from "./components/ContactSection";
import WaveDivider from "./components/illustrations/WaveDivider";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Wayfinder />
      <OurStory />
      <WaveDivider fill="var(--kh-page)" />
      <HavenSpread />
      <PromiseStrip />
      <ContactSection />
      <Footer />
    </>
  );
}
