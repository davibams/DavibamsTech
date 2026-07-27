interface BadgeProps {
  children: React.ReactNode;
}

export default function Badge({
  children,
}: BadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
      {children}
    </span>
  );
}