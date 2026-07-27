import { ComponentPropsWithoutRef } from "react";

interface SectionProps extends ComponentPropsWithoutRef<"section"> {
  children: React.ReactNode;
}

export default function Section({
  children,
  className = "",
  ...props
}: SectionProps) {
  return (
    <section
      className={`py-24 ${className}`}
      {...props}
    >
      {children}
    </section>
  );
}