import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";

interface OverviewProps {
  description: string;
  challenge: string;
  solution: string;
}

export default function Overview({
  description,
  challenge,
  solution,
}: OverviewProps) {
  return (
    <Section>
      <Container>

        <SectionHeading
          eyebrow="PROJECT OVERVIEW"
          title="Understanding the Solution"
          description="A closer look at the goal, problem, and approach behind this project."
        />


        <div className="grid gap-8 md:grid-cols-3">

          <article className="rounded-3xl border border-slate-200 bg-white p-8">

            <h3 className="mb-4 text-xl font-bold text-slate-900">
              About The Project
            </h3>

            <p className="leading-8 text-slate-600">
              {description}
            </p>

          </article>


          <article className="rounded-3xl border border-slate-200 bg-white p-8">

            <h3 className="mb-4 text-xl font-bold text-slate-900">
              The Challenge
            </h3>

            <p className="leading-8 text-slate-600">
              {challenge}
            </p>

          </article>


          <article className="rounded-3xl border border-slate-200 bg-white p-8">

            <h3 className="mb-4 text-xl font-bold text-slate-900">
              Our Approach
            </h3>

            <p className="leading-8 text-slate-600">
              {solution}
            </p>

          </article>


        </div>

      </Container>
    </Section>
  );
}