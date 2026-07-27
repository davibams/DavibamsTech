import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold transition-all duration-300";

  const styles = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl",

    secondary:
      "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50",
  };

  return (
    <Link
      href={href}
      className={`${base} ${styles[variant]}`}
    >
      {children}
    </Link>
  );
}