import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-projects-gradient">
      <section className="mx-auto max-w-7xl px-4 pb-20 pt-24 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              description="Every project here is driven by structured content, so adding new portfolio entries later stays lightweight and predictable."
              eyebrow="Project Archive"
              title="Case studies designed to grow with your career."
            />
            <Button href="/" variant="secondary">
              Back Home
            </Button>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 xl:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal delay={index * 90} key={project.slug}>
              <ProjectCard featured={project.featured} project={project} />
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
