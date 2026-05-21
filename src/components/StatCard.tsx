import { ArrowRight, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

type Accent = "primary" | "orange" | "emerald";

interface StatCardProps {
  title: string;
  icon: LucideIcon;
  accent: Accent;
  children: ReactNode;
  actionLabel: string;
  onAction?: () => void;
}

const iconBg: Record<Accent, string> = {
  primary: "bg-primary/15 text-secondary ring-1 ring-primary/30",
  orange: "bg-orange-50 text-orange-600 ring-1 ring-orange-200",
  emerald: "bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200",
};

const linkColor: Record<Accent, string> = {
  primary: "text-secondary hover:text-secondary/70",
  orange: "text-orange-600 hover:text-orange-700",
  emerald: "text-emerald-600 hover:text-emerald-700",
};

const hoverRing: Record<Accent, string> = {
  primary: "hover:ring-primary/40",
  orange: "hover:ring-orange-300",
  emerald: "hover:ring-emerald-300",
};

function StatCard({
  title,
  icon: Icon,
  accent,
  children,
  actionLabel,
  onAction,
}: StatCardProps) {
  return (
    <div
      className={`group flex flex-col rounded-xl bg-tertiary p-5 ring-1 ring-gray-100 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5 ${hoverRing[accent]}`}
    >
      <div className="flex items-start justify-between">
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-lg ${iconBg[accent]}`}
        >
          <Icon className="h-5 w-5" strokeWidth={2.25} />
        </div>
      </div>

      <div className="mt-4 flex-1">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-gray-500">
          {title}
        </div>
        <div className="mt-1.5">{children}</div>
      </div>

      <div className="mt-4 border-t border-gray-100 pt-3">
        <button
          type="button"
          onClick={onAction}
          className={`inline-flex items-center gap-1.5 text-xs font-semibold transition-colors ${linkColor[accent]}`}
        >
          {actionLabel}
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </div>
  );
}

export default StatCard;
