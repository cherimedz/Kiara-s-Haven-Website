import SectionHeading from "./ui/SectionHeading";
import SubOrgCard from "./SubOrgCard";
import { subOrgs } from "../lib/subOrgs";

export default function ManyFaces() {
  return (
    <section id="many-faces" className="bg-card px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          eyebrow="Our Havens"
          title="The Many Faces of Kiara's Haven"
          subtitle="Four community-focused offshoots, each one named after a real member of the family."
        />
        <div className="grid sm:grid-cols-2 gap-6">
          {subOrgs.map((org) => (
            <SubOrgCard key={org.slug} org={org} />
          ))}
        </div>
      </div>
    </section>
  );
}
