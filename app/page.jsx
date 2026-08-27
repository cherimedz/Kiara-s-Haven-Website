import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SectionCarousel from "./components/SectionCarousel";
import AboutUs from "./components/AboutUs";
import MissionVision from "./components/MissionVision";
import ManyFaces from "./components/ManyFaces";
import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";
import SectionHeading from "./components/ui/SectionHeading";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SectionCarousel />
      <AboutUs />
      <MissionVision />
      <ManyFaces />
      <section id="contact" className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <SectionHeading eyebrow="Contact" title="Get in Touch With Us" />
          <div className="grid md:grid-cols-2 gap-6">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
