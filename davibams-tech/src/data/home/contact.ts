import {
  MessageCircle,
  Mail,
  Phone,
} from "lucide-react";

export const contactMethods = [
  {
    icon: MessageCircle,
    title: "Chat on WhatsApp",
    description:
      "The fastest way to discuss your project or ask questions.",
    value: "+234 701 317 7039",
    href: "https://wa.me/2347013177039?text=Hello%20Davibams%20Tech,%20I'm%20interested%20in%20building%20a%20software%20solution.",
  },
  {
    icon: Mail,
    title: "Send an Email",
    description:
      "Share your project requirements and we'll get back to you.",
    value: "davibams@gmail.com",
    href: "mailto:davibams@gmail.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    description:
      "Prefer a phone conversation? We'd be happy to speak with you.",
    value: "+234 701 317 7039",
    href: "tel:+2347013177039",
  },
];