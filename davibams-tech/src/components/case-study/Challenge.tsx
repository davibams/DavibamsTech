import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";

interface ChallengeProps {
  challenge: string;
}

export default function Challenge({
  challenge,
}: ChallengeProps) {
  return (
    <Section className="bg-slate-50">

      <Container>

        <SectionHeading
          eyebrow="THE CHALLENGE"
          title="The Problem We Needed To Solve"
          description="Every successful software solution starts with understanding the real problem behind the request."
        />


        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">

          <p className="text-lg leading-9 text-slate-600">
            {challenge}
          </p>

        </div>


      </Container>

    </Section>
  );
}