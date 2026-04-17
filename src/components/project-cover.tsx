import { cn } from "@/lib/utils";

type ProjectCoverProps = {
  label: string;
  badge: string;
  accent: string;
};

export function ProjectCover({ label, badge, accent }: ProjectCoverProps) {
  return (
    <div className="relative overflow-hidden rounded-[24px] border border-line/10 bg-panel-strong p-6">
      <div className={cn("absolute inset-0 bg-gradient-to-br opacity-80", accent)} />
      <div className="absolute inset-0 bg-cover-overlay" />
      <div className="absolute -left-4 top-6 h-20 w-20 rounded-full border border-line/15 bg-surface-strong/70 blur-xl" />
      <div className="absolute bottom-4 right-4 h-12 w-12 rounded-full border border-line/15 bg-accent/30 blur-lg" />
      <div className="relative flex min-h-48 flex-col justify-between">
        <span className="w-fit rounded-full border border-line/15 bg-panel/40 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-text-soft">
          {badge}
        </span>
        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-text-soft">Case study</p>
          <h3 className="font-display text-3xl font-semibold text-text">{label}</h3>
        </div>
      </div>
    </div>
  );
}
