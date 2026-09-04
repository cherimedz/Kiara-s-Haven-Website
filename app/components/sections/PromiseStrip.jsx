import Container from "@/app/components/ui/Container";
import Section from "@/app/components/ui/Section";
import SectionHeading from "@/app/components/ui/SectionHeading";
import StatRow from "@/app/components/ui/StatRow";

/**
 * Illustrative figures — this is a demo concept, so they are sample data
 * rather than reporting. Labelled in that spirit: "lives imagined", not
 * "lives saved".
 */
const stats = [
  { value: "250+", label: "Lives imagined" },
  { value: "120+", label: "Homes found" },
  { value: "300+", label: "Hands helping" },
  { value: "4", label: "Stories continued" },
];

/**
 * No card, no border, no icons. A bordered box around four numbers is what
 * makes a page read as a dashboard; here the figures sit straight on the page
 * with hairline rules between them and are given room instead of furniture.
 */
export default function PromiseStrip() {
  return (
    <Section rhythm="stats">
      <Container>
        <SectionHeading
          eyebrow="Our promise"
          title={
            <>
              Kindness today.
              <br />
              <span className="italic text-brand">Hope forever.</span>
            </>
          }
        />

        <StatRow stats={stats} accent="text-ink" />
      </Container>
    </Section>
  );
}
