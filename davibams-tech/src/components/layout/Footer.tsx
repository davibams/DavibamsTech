import Link from "next/link";

import Container from "@/components/shared/Container";
import Logo from "@/components/shared/Logo";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Logo dark />

            <p className="mt-4 leading-7">
              Building reliable software solutions for businesses,
              organizations, and startups through modern web, mobile,
              and AI technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-5 text-lg font-semibold text-white">
              Quick Links
            </h4>

            <ul className="space-y-3">
              <li>
                <Link href="#services" className="hover:text-white transition">
                  Services
                </Link>
              </li>

              <li>
                <Link href="#projects" className="hover:text-white transition">
                  Projects
                </Link>
              </li>

              <li>
                <Link href="#contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-5 text-lg font-semibold text-white">
              Services
            </h4>

            <ul className="space-y-3">
              <li>Custom Software</li>
              <li>Web Applications</li>
              <li>AI Solutions</li>
              <li>Mobile Apps</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 text-lg font-semibold text-white">
              Contact
            </h4>

            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/2347013177039"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  WhatsApp
                </a>
              </li>

              <li>
                <a
                  href="mailto:davibams@gmail.com"
                  className="hover:text-white transition"
                >
                  davibams@gmail.com
                </a>
              </li>

              <li>
                <a
                  href="tel:+2347013177039"
                  className="hover:text-white transition"
                >
                  +234 701 317 7039
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 py-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Davibams Tech. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}