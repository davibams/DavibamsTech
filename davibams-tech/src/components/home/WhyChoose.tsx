import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";

import { whyChoose } from "@/data/home/whyChoose";

export default function WhyChoose() {
  return (
    <Section>
      <Container>

        <SectionHeading
          eyebrow="WHY BUSINESSES CHOOSE DAVIBAMS TECH"
          title="Building Software That Moves Your Business Forward"
          description="We don't just build software—we work with you to understand your goals, recommend practical solutions, and deliver reliable systems that support your business for years to come."
        />

        <div className="grid gap-8 md:grid-cols-2">

          {whyChoose.map((item) => {

            const Icon = item.icon;

            return (

              <article
                key={item.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
              >

                <div className="mb-6 inline-flex rounded-2xl bg-blue-100 p-4 transition group-hover:bg-blue-600">
                  <Icon
                    className="text-blue-600 transition group-hover:text-white"
                    size={30}
                  />
                </div>

                <h3 className="mb-4 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="leading-8 text-slate-600">
                  {item.description}
                </p>

              </article>

            );

          })}

        </div>

      </Container>
    </Section>
  );
}