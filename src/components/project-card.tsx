import Link from "next/link";

import { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { ProjectCover } from "./project-cover";
import { Card } from "./ui/card";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <Card
      className={cn(
        "group flex h-full flex-col gap-5 transition duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-panel-strong/90",
        featured ? "lg:p-8" : ""
      )}
    >
      <ProjectCover
        accent={project.accent}
        badge={project.badge}
        label={project.coverLabel}
      />

      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.28em] text-text-muted">
            <span>{project.role}</span>
            <span className="h-1 w-1 rounded-full bg-line/20" />
            <span>{project.timeline}</span>
          </div>
          <h3 className="font-display text-2xl font-semibold text-text">
            {project.title}
          </h3>
          <p className="leading-7 text-text-soft">{project.summary}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              className="rounded-full border border-line/10 bg-surface px-3 py-1 text-xs text-text-soft"
              key={item}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-auto flex items-center justify-between gap-3 pt-2">
        <p className="text-sm text-accent/80">{project.highlights[0]}</p>
        <Link
          className="rounded-full border border-line/10 px-4 py-2 text-sm text-text transition hover:border-accent/40 hover:bg-surface"
          href={`/projects/${project.slug}`}
        >
          View Project
        </Link>
      </div>
    </Card>
  );
}
