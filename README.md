# Syed Ali — Portfolio

A personal portfolio and freelance web developer website for Syed Ali, built with Next.js 16, TypeScript, and Tailwind CSS v4.

The site presents a quiet editorial design system: paper background, hairline rules, left-aligned hierarchy, a restrained palette, and clear conversion-focused sections for work, pricing, FAQ, and contact.

## Overview

This project is a personal brand site for a remote web developer based in Quetta, Pakistan, working with clients internationally.

The site includes:
- homepage with hero, selected work, services, pricing, FAQ, and contact form
- dedicated work pages for project case studies
- about page with direct remote / international positioning
- contact form connected to Formspree
- SEO metadata, Open Graph, sitemap, robots rules, and schema markup
- AI-friendly content exposure via llms.txt and FAQ schema

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Vercel Analytics and Speed Insights

## Local setup

```bash
npm install
npm run dev
```

Then open:

```bash
http://localhost:3000
```

## Useful scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Project structure

```text
app/
  globals.css
  layout.tsx
  page.tsx
  about/page.tsx
  contact/page.tsx
  work/page.tsx
  work/easy-parking/page.tsx
  work/lapitopia/page.tsx
  sitemap.ts
  robots.ts
  opengraph-image.tsx
  not-found.tsx

components/
  Nav.tsx
  Footer.tsx
  Reveal.tsx
  CaseRow.tsx
  Faq.tsx
  ContactForm.tsx

lib/
  site.ts
  schema.ts

public/
  llms.txt
  shots/easyparking.webp
  shots/lapitopia.webp
```

## Content and brand profile

The site is designed around a specific positioning:
- one developer, not a studio or agency
- international and remote work
- fixed-fee pricing model
- direct communication, concise case studies, and low-friction contact

Important content and metadata are intentionally kept factual and readable in the DOM, which also supports AI discovery and search visibility.

## SEO and AEO notes

The app includes:
- metadataBase and per-page metadata
- Open Graph and Twitter card metadata
- canonical URLs
- robots.txt rules for AI crawlers
- sitemap entries
- structured data for Person, WebSite, ProfessionalService, and FAQPage
- llms.txt at the public root

## Deployment

The production site is deployed on Vercel and uses the domain:

```text
https://www.syedalihax.com
```

## Notes for contributors

- Follow the design system defined in the project instructions and app globals.
- Keep copy factual and specific.
- Prefer server components by default.
- Use the single motion wrapper in components/Reveal.tsx for animation.
- Do not add unnecessary dependencies or design systems.

## Related specification

The project is governed by the repo-level instructions in:

```text
.github/copilot-instructions.md
AGENTS.md
```

Those files define the visual and business constraints for this portfolio.
