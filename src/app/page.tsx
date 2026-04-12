import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { featuredProjects, projects } from "@/data/projects";
import {
  credentials,
  education,
  experiences,
  profile,
  skillGroups
} from "@/data/resume";
import { siteConfig } from "@/data/site";

const quickStats = [
  { value: "5+", label: "years in frontend" },
  { value: "3", label: "signature case studies" },
  { value: "1", label: "clean system for adding more" }
];

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(66,240,210,0.18),_transparent_30%),radial-gradient(circle_at_85%_10%,_rgba(123,148,255,0.14),_transparent_22%),linear-gradient(180deg,#050816_0%,#090d18_45%,#070a12_100%)]" />
        <div className="absolute inset-0 bg-grid bg-[size:48px_48px] opacity-[0.06]" />
        <div className="absolute left-[8%] top-40 h-72 w-72 rounded-full bg-accent/[0.15] blur-[130px]" />
        <div className="absolute right-[12%] top-[28rem] h-72 w-72 rounded-full bg-secondary/20 blur-[140px]" />
        <div className="absolute bottom-20 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-tertiary/[0.15] blur-[170px]" />
      </div>

      <SiteHeader />

      <section className="relative mx-auto flex min-h-[calc(100vh-120px)] w-full max-w-7xl items-center px-4 pb-20 pt-16 sm:px-6 lg:px-8">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/[0.72] backdrop-blur">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_18px_rgba(66,240,210,0.8)]" />
              {siteConfig.availability}
            </div>

            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.38em] text-white/[0.55]">
                {profile.role}
              </p>
              <h1 className="max-w-4xl font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Modern interfaces with a futuristic edge and a human touch.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-white/[0.72] sm:text-xl">
                {profile.heroBlurb}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button href="#projects">Explore Projects</Button>
              <Button href={siteConfig.resumePath} target="_blank" variant="secondary">
                View Resume
              </Button>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {quickStats.map((stat, index) => (
                <Reveal delay={index * 100} key={stat.label}>
                  <Card className="rounded-[24px] p-5">
                    <p className="font-display text-3xl font-semibold text-white">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm uppercase tracking-[0.22em] text-white/[0.55]">
                      {stat.label}
                    </p>
                  </Card>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal className="relative lg:justify-self-end" delay={100}>
            <div className="relative mx-auto flex aspect-square w-full max-w-[30rem] items-center justify-center">
              <div className="absolute inset-10 rounded-full border border-white/10 bg-white/5 backdrop-blur-md" />
              <div className="absolute inset-[18%] rounded-full border border-accent/25 bg-[radial-gradient(circle,_rgba(255,255,255,0.16),_transparent_60%)] shadow-glow" />
              <div className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_40px_rgba(66,240,210,0.65)]" />
              <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 animate-orbit rounded-full bg-secondary" />
              <div className="absolute bottom-12 left-8 animate-float rounded-[28px] border border-white/10 bg-panel/90 px-5 py-4 shadow-soft backdrop-blur">
                <p className="text-xs uppercase tracking-[0.26em] text-accent/80">
                  Interface energy
                </p>
                <p className="mt-2 max-w-[14rem] text-sm leading-6 text-white/75">
                  Clean systems, playful micro-moments, and a calm shipping mindset
                  <span className="ml-1 inline-block h-4 w-2 animate-blink rounded-full bg-accent align-middle" />
                </p>
              </div>
              <div className="absolute right-4 top-10 rounded-full border border-white/10 bg-white/[0.08] px-4 py-2 text-sm text-white/[0.78] shadow-soft">
                Cute but still recruiter-safe
              </div>
              <div className="absolute right-2 top-1/2 h-16 w-16 -translate-y-1/2 animate-pulseGlow rounded-full bg-tertiary/[0.35] blur-2xl" />
              <div className="absolute bottom-16 right-10 h-6 w-6 rounded-full bg-secondary/[0.85] shadow-[0_0_30px_rgba(123,148,255,0.6)]" />
              <div className="absolute left-10 top-14 h-4 w-4 rounded-full bg-tertiary/[0.85] shadow-[0_0_24px_rgba(255,150,224,0.5)]" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8" id="about">
        <Reveal>
          <SectionHeading
            description="A recruiter-friendly overview of how I work, what I value, and the kind of product experiences I love building."
            eyebrow="About"
            title="I like interfaces that feel sharp, reliable, and quietly delightful."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal delay={100}>
            <Card className="h-full">
              <p className="text-lg leading-8 text-white/[0.76]">{profile.summary}</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                  <p className="text-xs uppercase tracking-[0.28em] text-white/50">
                    Based in
                  </p>
                  <p className="mt-2 text-lg text-white">{profile.location}</p>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                  <p className="text-xs uppercase tracking-[0.28em] text-white/50">
                    Working style
                  </p>
                  <p className="mt-2 text-lg text-white">
                    Design-aware, product-minded, delivery-focused
                  </p>
                </div>
              </div>
            </Card>
          </Reveal>

          <Reveal delay={180}>
            <Card className="h-full">
              <p className="text-xs uppercase tracking-[0.3em] text-accent/80">
                Signals
              </p>
              <div className="mt-6 space-y-4">
                {credentials.map((credential) => (
                  <div
                    className="flex items-start gap-3 rounded-[22px] border border-white/10 bg-white/5 px-4 py-4"
                    key={credential}
                  >
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-accent" />
                    <p className="text-white/[0.74]">{credential}</p>
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8" id="skills">
        <Reveal>
          <SectionHeading
            description="The mix of technologies and collaboration strengths I rely on most when shipping production work."
            eyebrow="Skills + Tools"
            title="Modern frontend craft backed by systems thinking."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal delay={index * 120} key={group.title}>
              <Card className="h-full">
                <p className="text-sm uppercase tracking-[0.3em] text-white/[0.55]">
                  {group.title}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75"
                      key={item}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8" id="experience">
        <Reveal>
          <SectionHeading
            description="Resume-backed experience, reframed for a portfolio context with a little more story and visual hierarchy."
            eyebrow="Experience"
            title="Frontend work grounded in real product delivery."
          />
        </Reveal>

        <div className="mt-10 space-y-6">
          {experiences.map((experience, index) => (
            <Reveal delay={index * 120} key={`${experience.company}-${experience.timeline}`}>
              <Card className="overflow-hidden">
                <div className="grid gap-8 lg:grid-cols-[0.32fr_0.68fr]">
                  <div className="space-y-3">
                    <p className="text-xs uppercase tracking-[0.3em] text-accent/80">
                      {experience.timeline}
                    </p>
                    <h3 className="font-display text-2xl font-semibold text-white">
                      {experience.role}
                    </h3>
                    <p className="text-white/75">{experience.company}</p>
                    <p className="text-sm text-white/[0.48]">{experience.location}</p>
                  </div>

                  <div className="space-y-5">
                    <p className="leading-7 text-white/[0.72]">{experience.summary}</p>
                    <div className="grid gap-3">
                      {experience.bullets.map((bullet) => (
                        <div
                          className="flex gap-3 rounded-[20px] border border-white/[0.08] bg-white/[0.03] px-4 py-4"
                          key={bullet}
                        >
                          <span className="mt-2 h-2 w-2 rounded-full bg-secondary" />
                          <p className="text-white/70">{bullet}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>

        {!education.length ? null : (
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {education.map((item) => (
              <Card key={`${item.institution}-${item.timeline}`}>
                <p className="text-xs uppercase tracking-[0.3em] text-accent/80">
                  {item.timeline}
                </p>
                <h3 className="mt-3 font-display text-2xl text-white">{item.credential}</h3>
                <p className="mt-2 text-white/70">{item.institution}</p>
                <p className="mt-4 text-white/[0.58]">{item.notes}</p>
              </Card>
            ))}
          </div>
        )}
      </section>

      <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8" id="projects">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading
              description="Portfolio-ready case studies shaped from real work, with a data structure that makes adding future projects straightforward."
              eyebrow="Featured Projects"
              title="A growing portfolio built to expand with new work."
            />
          </Reveal>
          <Reveal delay={120}>
            <Button href="/projects" variant="secondary">
              View All Projects
            </Button>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-6 xl:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <Reveal delay={index * 120} key={project.slug}>
              <ProjectCard featured project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10" delay={180}>
          <Card className="overflow-hidden p-0">
            <div className="border-b border-white/10 px-6 py-5">
              <p className="text-sm uppercase tracking-[0.3em] text-white/[0.55]">
                Project archive preview
              </p>
            </div>
            <div className="grid divide-y divide-white/8 md:grid-cols-3 md:divide-x md:divide-y-0">
              {projects.map((project) => (
                <div className="space-y-4 px-6 py-6" key={project.slug}>
                  <p className="text-xs uppercase tracking-[0.28em] text-accent/80">
                    {project.badge}
                  </p>
                  <h3 className="font-display text-2xl text-white">{project.title}</h3>
                  <p className="text-white/[0.66]">{project.summary}</p>
                </div>
              ))}
            </div>
          </Card>
        </Reveal>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8" id="contact">
        <Reveal>
          <Card className="relative overflow-hidden p-8 sm:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(66,240,210,0.12),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(255,150,224,0.12),_transparent_26%)]" />
            <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div className="space-y-5">
                <p className="text-xs uppercase tracking-[0.34em] text-accent/80">
                  Contact
                </p>
                <h2 className="font-display text-4xl font-semibold text-white sm:text-5xl">
                  Let&apos;s build something thoughtful and bright.
                </h2>
                <p className="max-w-2xl text-lg leading-8 text-white/[0.72]">
                  I&apos;m interested in frontend roles where craft, collaboration,
                  and product quality all matter. If that sounds like your team,
                  I&apos;d love to connect.
                </p>
              </div>

              <div className="grid gap-4">
                <Button href={`mailto:${siteConfig.email}`} variant="primary">
                  {siteConfig.email}
                </Button>
                <div className="grid gap-4 sm:grid-cols-2">
                  {siteConfig.socialLinks
                    .filter((link) => link.label !== "Email")
                    .map((link) => (
                      <Button href={link.href} key={link.label} target="_blank" variant="secondary">
                        {link.label}
                      </Button>
                    ))}
                </div>
              </div>
            </div>
          </Card>
        </Reveal>
      </section>
    </main>
  );
}
