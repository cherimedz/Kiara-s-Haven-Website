import SectionHeading from "./ui/SectionHeading";

export default function AboutUs() {
  return (
    <section id="about" className="bg-card px-6 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <SectionHeading eyebrow="About Us" title="Where This Idea Came From" />
        <p className="text-mute text-lg leading-relaxed mb-6">
          Kiara&apos;s Haven is a concept for a digitalized animal adoption
          center — built here as a demo project, not a real organization.
          It imagines a place with a heartfelt mission: to save and help
          every animal in need, leaving no one behind.
        </p>
        <p className="text-mute text-lg leading-relaxed">
          The four community havens it inspired — Simba&apos;s, Sebastian&apos;s,
          Coco&apos;s, and Princess&apos;s — are all named after real cats and
          dogs from my own family. Kiara and Princess are still here with me
          today; the others live on in this project.
        </p>
      </div>
    </section>
  );
}
