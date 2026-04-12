import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ProjectCover } from "@/components/project-cover";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export async function generateMetadata({
  params
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} | Ipshu Dhakal`,
    description: project.summary
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(123,148,255,0.16),_transparent_22%),linear-gradient(180deg,#050816_0%,#090d18_100%)]">
      <section className="mx-auto max-w-6xl px-4 pb-20 pt-20 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/[0.74] transition hover:bg-white/[0.06] hover:text-white"
            href="/projects"
          >
            Back to Projects
          </Link>
          <div className="flex flex-wrap gap-3">
            <Button href="/" variant="ghost">
              Home
            </Button>
            <Button href="/#contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div className="space-y-7">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.32em] text-accent/80">
                {project.badge}
              </p>
              <h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                {project.title}
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-white/[0.72]">
                {project.summary}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {project.stack.map((item) => (
                <span
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/[0.74]"
                  key={item}
                >
                  {item}
                </span>
              ))}
            </div>

            <ProjectCover
              accent={project.accent}
              badge={project.badge}
              label={project.coverLabel}
            />
          </div>

          <div className="grid gap-6">
            <Card>
              <p className="text-xs uppercase tracking-[0.28em] text-white/50">Role</p>
              <p className="mt-3 text-xl text-white">{project.role}</p>
              <p className="mt-1 text-white/[0.58]">{project.timeline}</p>
            </Card>
            <Card>
              <p className="text-xs uppercase tracking-[0.28em] text-white/50">Problem</p>
              <p className="mt-3 leading-7 text-white/[0.74]">{project.problem}</p>
            </Card>
            <Card>
              <p className="text-xs uppercase tracking-[0.28em] text-white/50">Approach</p>
              <p className="mt-3 leading-7 text-white/[0.74]">{project.approach}</p>
            </Card>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Card>
            <p className="text-xs uppercase tracking-[0.28em] text-accent/80">
              Key features
            </p>
            <div className="mt-5 space-y-3">
              {project.highlights.map((item) => (
                <div
                  className="rounded-[20px] border border-white/[0.08] bg-white/[0.03] px-4 py-4 text-white/[0.72]"
                  key={item}
                >
                  {item}
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <p className="text-xs uppercase tracking-[0.28em] text-accent/80">Outcomes</p>
            <div className="mt-5 space-y-3">
              {project.outcomes.map((item) => (
                <div
                  className="rounded-[20px] border border-white/[0.08] bg-white/[0.03] px-4 py-4 text-white/[0.72]"
                  key={item}
                >
                  {item}
                </div>
              ))}
            </div>
          </Card>
        </div>

        <Card className="mt-6">
          <p className="text-xs uppercase tracking-[0.28em] text-tertiary/80">Tiny charm</p>
          <p className="mt-3 leading-7 text-white/[0.74]">{project.cuteMoment}</p>
        </Card>

        {!project.links.length ? null : (
          <div className="mt-6 flex flex-wrap gap-4">
            {project.links.map((link) => (
              <Button href={link.href} key={link.href} target="_blank" variant="secondary">
                {link.label}
              </Button>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
