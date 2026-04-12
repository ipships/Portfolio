import { cn } from "@/lib/utils";

type ProjectCoverProps = {
  label: string;
  badge: string;
  accent: string;
};

export function ProjectCover({ label, badge, accent }: ProjectCoverProps) {
  return (
    <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#050816] p-6">
      <div className={cn("absolute inset-0 bg-gradient-to-br opacity-80", accent)} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.24),_transparent_35%),linear-gradient(180deg,rgba(9,13,24,0.08),rgba(9,13,24,0.86))]" />
      <div className="absolute -left-4 top-6 h-20 w-20 rounded-full border border-white/[0.15] bg-white/[0.10] blur-xl" />
      <div className="absolute bottom-4 right-4 h-12 w-12 rounded-full border border-white/[0.15] bg-accent/30 blur-lg" />
      <div className="relative flex min-h-48 flex-col justify-between">
        <span className="w-fit rounded-full border border-white/[0.15] bg-black/20 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-white/80">
          {badge}
        </span>
        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-white/70">Case study</p>
          <h3 className="font-display text-3xl font-semibold text-white">{label}</h3>
        </div>
      </div>
    </div>
  );
}
