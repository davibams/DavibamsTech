import { CheckCircle2 } from "lucide-react";

interface HighlightBadgeProps {
  text: string;
}

export default function HighlightBadge({
  text,
}: HighlightBadgeProps) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
      <CheckCircle2
        size={18}
        className="text-green-600"
      />

      <span className="text-sm font-medium text-slate-700">
        {text}
      </span>
    </div>
  );
}