/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";

export default function CTA() {
  return (
    <Section className="bg-blue-600">

      <Container>

        <div className="rounded-3xl text-center text-white">

          <h2 className="text-4xl font-extrabold tracking-tight">
            Have a Project Idea?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Whether you need a business website, custom software,
            mobile application, or an AI-powered solution, let's
            discuss how we can turn your idea into a reliable product.
          </p>


          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link
              href="/#contact"
              className="rounded-xl bg-white px-7 py-3 font-semibold text-blue-600 transition hover:bg-blue-50"
            >
              Start Your Project
            </Link>


            <a
              href="https://wa.me/2347013177039"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white px-7 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Chat on WhatsApp
            </a>

          </div>


        </div>

      </Container>

    </Section>
  );
}