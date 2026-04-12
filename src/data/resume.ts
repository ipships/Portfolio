export type SocialLink = {
  label: string;
  href: string;
};

export type Profile = {
  name: string;
  role: string;
  summary: string;
  location: string;
  email: string;
  phone: string;
  availability: string;
  heroBlurb: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  location: string;
  timeline: string;
  summary: string;
  bullets: string[];
};

export type EducationItem = {
  institution: string;
  credential: string;
  timeline: string;
  notes: string;
};

export const profile: Profile = {
  name: "Ipshu Dhakal",
  role: "Front End Engineer",
  summary:
    "Frontend Engineer with 5+ years of experience building modern SaaS interfaces, internal tools, and design-system-driven product experiences with React, Next.js, TypeScript, and thoughtful UX.",
  location: "Oklahoma City, OK",
  email: "ipshu.dh@gmail.com",
  phone: "(405) 919-1446",
  availability: "Open to impactful frontend, design-system, and product engineering roles.",
  heroBlurb:
    "I build polished interfaces that feel fast, clear, and human. My sweet spot is turning messy product needs into scalable frontend systems with just enough delight."
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "AngularJS",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "Sass",
      "Tailwind CSS"
    ]
  },
  {
    title: "Systems & Tools",
    items: [
      "Node.js",
      "MongoDB",
      "GitLab",
      "Jira",
      "Figma",
      "CI/CD",
      "Lucide React",
      "Ant Design",
      "Semantic UI"
    ]
  },
  {
    title: "Working Style",
    items: [
      "Design systems",
      "Responsive UX",
      "REST APIs",
      "GraphQL",
      "Role-based access",
      "Agile delivery",
      "Scrum Master"
    ]
  }
];

export const experiences: ExperienceItem[] = [
  {
    company: "Crawford & Company (WeGoLook)",
    role: "Frontend Engineer",
    location: "Atlanta, Georgia",
    timeline: "January 2022 - Present",
    summary:
      "Leading frontend work across client-facing products, internal tools, and shared UI foundations for a complex operations-heavy platform.",
    bullets: [
      "Built and shipped frontend initiatives with React, Next.js, and TypeScript for both external and internal products.",
      "Created and maintained reusable UI foundations using shadcn/ui patterns, Lucide React, and existing component ecosystems.",
      "Built a consolidated Next.js platform for user management, account tooling, and core operational workflows.",
      "Partnered with backend engineers to integrate REST and GraphQL endpoints across product surfaces.",
      "Implemented role-based access experiences that supported core business operations.",
      "Worked with Node.js and MongoDB for debugging, feature support, and cross-stack collaboration.",
      "Supported GitLab CI/CD workflows and dev-to-deploy processes.",
      "Translated high-fidelity Figma designs into production-ready, responsive interfaces.",
      "Facilitated agile ceremonies and cross-functional collaboration as a Certified Scrum Master."
    ]
  },
  {
    company: "WeGoLook",
    role: "Frontend Developer",
    location: "Remote",
    timeline: "July 2019 - January 2022",
    summary:
      "Built and iterated on an operations platform focused on workflow visibility, media handling, and reliable day-to-day business tooling.",
    bullets: [
      "Built and maintained platform features using AngularJS, HTML, Sass, and JavaScript.",
      "Fixed bugs, delivered new features, and supported QA and release processes.",
      "Worked on photo editing and upload tooling tied to media-heavy workflows.",
      "Integrated tools and services including Pintura, AWS MediaConvert, and Amazon S3."
    ]
  }
];

export const education: EducationItem[] = [];

export const credentials = [
  "Certified Scrum Master",
  "5+ years building production frontend experiences",
  "Strong cross-functional collaboration across product, design, engineering, and support"
];
