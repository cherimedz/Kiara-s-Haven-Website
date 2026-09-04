import Container from "@/app/components/ui/Container";
import Section from "@/app/components/ui/Section";
import SectionHeading from "@/app/components/ui/SectionHeading";
import StatRow from "@/app/components/ui/StatRow";
import { getPalette } from "@/app/lib/palette";

/**
 * Per-haven figures, in the same editorial row the homepage uses — so a haven
 * page carries the homepage's rhythm rather than inventing its own.
 *
 * @param {object} props
 * @param {import('@/app/lib/havens').Haven} props.haven
 */
export default function HavenStats({ haven }) {
  const palette = getPalette(haven.token);

  return (
    <Section rhythm="stats">
      <Container>
        <SectionHeading
          eyebrow="Where it goes"
          token={haven.token}
          title={
            <>
              Small numbers,
              <br />
              counted honestly.
            </>
          }
        />

        {/* Three figures rather than four, so the columns stay even. */}
        <StatRow stats={haven.stats} accent={palette.accent} className="lg:grid-cols-3" />
      </Container>
    </Section>
  );
}
