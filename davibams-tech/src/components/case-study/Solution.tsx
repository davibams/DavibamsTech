import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";

interface SolutionProps {
  solution: string;
}

export default function Solution({
  solution,
}: SolutionProps) {
  return (
    <Section>

      <Container>

        <SectionHeading
          eyebrow="THE SOLUTION"
          title="How We Built The Solution"
          description="A practical approach focused on solving the user's needs with reliable technology."
        />


        <div className="mx-auto max-w-4xl rounded-3xl bg-slate-900 p-10 text-white">

          <p className="text-lg leading-9 text-slate-300">
            {solution}
          </p>

        </div>


      </Container>

    </Section>
  );
}