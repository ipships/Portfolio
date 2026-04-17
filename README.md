# Ipshu Portfolio

Personal portfolio built with `Next.js`, `TypeScript`, and `Tailwind CSS`, designed for static deployment on GitHub Pages.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- React
- Static export for GitHub Pages

## Local Development

1. Install Node.js 20 or newer.
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Build the static export:

```bash
npm run build
```

The static site will be generated in `out/`.

## Content Editing

### Update profile and resume-backed content

Edit:

- `src/data/site.ts`
- `src/data/resume.ts`

### Add a new project

1. Open `src/data/projects.ts`
2. Add a new object to the `projects` array
3. Choose a unique `slug`
4. Set `featured: true` if you want it highlighted on the homepage
5. Add links if you have a live demo or repo

Each project automatically gets:

- a card on `/projects`
- a statically generated detail page at `/projects/[slug]`
- optional homepage visibility when featured

## Resume Asset

Replace the PDF at `public/resume/Ipshu-Dhakal-Resume.pdf` whenever you update your resume.

## GitHub Pages Deployment

The repo includes a GitHub Actions workflow at `.github/workflows/deploy.yml`.

To deploy:

1. Push this project to a GitHub repository
   - Use `ipships.github.io` if you want the site at `https://ipships.github.io/`
   - Use a repo like `portfolio` if you want the site at `https://ipships.github.io/portfolio/`
2. In GitHub, enable Pages and set the source to `GitHub Actions`
3. Push to `main`

The workflow builds the static export and publishes it automatically.

## Notes

- `next.config.mjs` automatically sets `basePath` and `assetPrefix` during GitHub Actions builds for project repos.
- If the repository name ends with `.github.io`, it is treated as a root user site and no GitHub Pages base path is added.
- If you later move to a custom domain or different hosting setup, you can override the base path with `NEXT_PUBLIC_BASE_PATH`.
