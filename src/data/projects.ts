export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  slug: string;
  summary: string;
  role: string;
  timeline: string;
  stack: string[];
  featured: boolean;
  badge: string;
  coverLabel: string;
  accent: string;
  problem: string;
  approach: string;
  highlights: string[];
  outcomes: string[];
  cuteMoment: string;
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    title: "Unified Operations Console",
    slug: "unified-operations-console",
    summary:
      "A consolidated Next.js internal platform for account tools, user management, and high-frequency business workflows.",
    role: "Frontend Engineer",
    timeline: "2022 - Present",
    stack: ["Next.js", "TypeScript", "React", "Tailwind CSS", "REST APIs", "GraphQL"],
    featured: true,
    badge: "Internal Product",
    coverLabel: "Ops Console",
    accent: "from-accent/80 via-secondary/70 to-tertiary/80",
    problem:
      "Teams were juggling fragmented tools and duplicated flows, which increased maintenance cost and slowed down operations.",
    approach:
      "I helped shape a cleaner internal platform in Next.js, designed reusable UI patterns, and partnered across backend and product to centralize workflows into a faster, more maintainable surface.",
    highlights: [
      "Consolidated multiple operational tasks into one modern interface.",
      "Designed clearer permissions-aware experiences for different user roles.",
      "Created reusable patterns that made future feature work faster."
    ],
    outcomes: [
      "Reduced interface fragmentation for internal teams.",
      "Improved maintainability by moving work into a shared platform.",
      "Created a stronger base for future account and user-management tools."
    ],
    cuteMoment:
      "A tiny orbital indicator in this portfolio represents the calm-under-pressure energy I bring to operations tooling.",
    links: []
  },
  {
    title: "Component Library Refresh",
    slug: "component-library-refresh",
    summary:
      "A reusable UI foundation that blended shadcn/ui-style ergonomics with existing design systems and production constraints.",
    role: "Frontend Engineer",
    timeline: "2022 - Present",
    stack: ["React", "TypeScript", "shadcn/ui patterns", "Lucide React", "Figma"],
    featured: true,
    badge: "Design System",
    coverLabel: "UI System",
    accent: "from-[#7cf7c4]/80 via-[#92b8ff]/70 to-[#ff9fd8]/80",
    problem:
      "The product surface needed better consistency across teams without forcing a rigid one-size-fits-all component approach.",
    approach:
      "I created and maintained reusable building blocks, aligned engineering and design expectations, and translated high-fidelity concepts into flexible, production-ready UI patterns.",
    highlights: [
      "Built shared components that sped up implementation across features.",
      "Balanced custom needs with third-party systems like Ant Design and Semantic UI.",
      "Kept accessibility and visual consistency in view while moving quickly."
    ],
    outcomes: [
      "Improved consistency across experiences.",
      "Reduced repeated UI work during feature delivery.",
      "Made design handoff smoother and more predictable."
    ],
    cuteMoment:
      "The softer rounded corners and glow details in this portfolio nod to the warmth I like to add to system-heavy interfaces.",
    links: []
  },
  {
    title: "Media Workflow Toolkit",
    slug: "media-workflow-toolkit",
    summary:
      "Enhancements for photo editing, upload, and media-processing workflows in a platform handling image-heavy operations.",
    role: "Frontend Developer",
    timeline: "2019 - 2022",
    stack: ["AngularJS", "JavaScript", "Sass", "Pintura", "AWS MediaConvert", "Amazon S3"],
    featured: false,
    badge: "Workflow UX",
    coverLabel: "Media Flow",
    accent: "from-[#ffd47c]/80 via-[#ff8ca8]/70 to-[#92b8ff]/80",
    problem:
      "Media-heavy workflows can become frustrating quickly when editing, upload, and processing steps feel fragile or slow.",
    approach:
      "I supported and expanded workflow tools that handled editing and uploads, while helping stabilize the experience and improve day-to-day reliability.",
    highlights: [
      "Worked inside an established AngularJS platform while shipping improvements.",
      "Supported bug fixes, QA, and dependable feature iteration.",
      "Integrated specialized media tooling into business workflows."
    ],
    outcomes: [
      "Improved reliability for image-related workflows.",
      "Helped teams move faster through editing and upload tasks.",
      "Built practical experience balancing legacy frontend with evolving product needs."
    ],
    cuteMoment:
      "The floating spark accents on this site borrow from the idea of media assets moving through a friendly pipeline.",
    links: []
  }
];

export const featuredProjects = projects.filter((project) => project.featured);
