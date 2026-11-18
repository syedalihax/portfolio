# Syed Ali Portfolio

A single-page portfolio website for Syed Ali, built with Next.js, React, TypeScript, and Tailwind CSS.

## Run locally

Prerequisites: Node.js and Bun.

```bash
bun install
bun run dev
```

Open http://localhost:3000. No Gemini API key or `.env.local` file is needed. The contact form submits to the Formspree endpoint configured in `lib/portfolio-data.ts`.

## Project structure

- `app/` contains the home, projects, services, about, and contact routes, plus global styles, metadata, sitemap, and robots rules.
- `components/` contains the page sections, contact form, and project gallery.
- `lib/portfolio-data.ts` holds the portfolio copy, services, project details, pricing, contact information, and process steps.
- `public/assets/aistudio/` contains project screenshots referenced by the project gallery and social preview metadata.

## Routes

- `/` Home
- `/projects` Selected work
- `/services` Services, pricing, and process
- `/about` About and skills
- `/contact` Contact details and inquiry form

## Commands

- `bun run dev` starts the development server.
- `bun run build` creates a production build.
- `bun run start` serves the production build.
- `bun run lint` runs the TypeScript compiler check.
