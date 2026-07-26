/* eslint-disable react/no-unescaped-entities */
import { CheckCircle2 } from "lucide-react";

import Button from "@/components/shared/Button";
import Container from "@/components/shared/Container";
import Section from "@/components/shared/Section";

const highlights = [
  "Custom Software",
  "Business Websites",
  "Mobile Applications",
  "Long-Term Support",
];

export default function Hero() {
  return (
    <Section className="bg-gradient-to-b from-white via-slate-50 to-white">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <div>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
              SOFTWARE ENGINEERING • WEB • MOBILE
            </p>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              We Build Custom Software That Solves Real Business Problems.
            </h1>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              Whether you're launching a startup,
              modernising your business, or improving internal
              operations, Davibams Tech designs and builds
              custom software solutions tailored to your goals.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Button href="/#contact">
                Start Your Project
              </Button>

              <Button
                href="/projects"
                variant="secondary"
              >
                View Case Studies
              </Button>

            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">

              {highlights.map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    className="text-blue-600"
                    size={20}
                  />

                  <span className="font-medium text-slate-700">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>

          {/* Right */}

          <div className="relative">

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">

              <div className="space-y-6">

                <div className="rounded-2xl border p-5">
                  <h3 className="font-semibold">
                    Business Dashboard
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    Analytics, reports, users and workflow.
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <h3 className="font-semibold">
                    Professional Website
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    Designed to build credibility and generate leads.
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <h3 className="font-semibold">
                    Mobile Application
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    Built for Android and iOS using Flutter.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </Container>
    </Section>
  );
}