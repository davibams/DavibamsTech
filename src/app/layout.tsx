import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Davibams Tech Solutions",
    template: "%s | Davibams Tech Solutions",
  },
  description:
    "Davibams Tech Solutions builds custom software, websites and mobile applications that help businesses grow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />

        <main>{children}</main>

        <Footer />
        <a href="https://wa.me/2347013177039" aria-label="Chat with Davibams Tech Solutions on WhatsApp" className="fixed bottom-4 right-4 z-40 rounded-full bg-emerald-700 px-5 py-3 text-sm font-bold text-white shadow-lg">WhatsApp</a>
      </body>
    </html>
  );
}