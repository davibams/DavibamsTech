/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";
import Button from "@/components/shared/Button";

import { contactMethods } from "@/data/home/contact";

export default function Contact() {
  return (
    <Section id="contact" className="bg-slate-900 text-white">
      <Container>
        <SectionHeading
          eyebrow="LET'S BUILD SOMETHING GREAT"
          title="Ready to Discuss Your Project?"
          description="Whether you need a business website, a custom software solution, an AI-powered application, or a mobile app, we'd love to hear about your idea."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {contactMethods.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href={item.href}
                className="rounded-3xl border border-slate-700 bg-slate-800 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:bg-slate-800/90"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-blue-600 p-4">
                  <Icon size={28} className="text-white" />
                </div>

                <h3 className="mb-3 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mb-5 text-slate-300 leading-7">
                  {item.description}
                </p>

                <span className="font-semibold text-blue-400">
                  {item.value}
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mt-16 rounded-3xl bg-blue-600 p-10 text-center">
          <h3 className="text-3xl font-bold">
            Have an idea but not sure where to start?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-blue-100 leading-8">
            Let's have a conversation about your goals. We'll help you
            identify the right solution and outline the next steps.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="https://wa.me/2347013177039">
              Chat on WhatsApp
            </Button>

            <Button
              href="mailto:davibams@gmail.com"
              variant="secondary"
            >
              Send an Email
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}