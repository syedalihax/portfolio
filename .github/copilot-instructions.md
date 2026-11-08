# Copilot Instructions — syedalihax.com

A personal site for **Syed Ali**, a web developer in Quetta, Pakistan, working remotely with
clients internationally. It has one job: make a stranger trust him enough to reply to an email.

Read this file before every suggestion. It is the spec. Do not invent outside it.

---

## The thing we are escaping

Every AI-generated portfolio looks identical: near-black page, purple-to-blue gradient headline,
glassmorphic cards, pill buttons with drop shadows, a centred hero, "Hi, I'm ____", a 3-column
grid of icons, and the words *innovative*, *seamless*, *elevate*, *empower*, *solutions*.

**Never produce any of that.** If a suggestion resembles it, throw the suggestion away.

The target is **quiet editorial**: paper background, hairline rules, large left-aligned type,
asymmetry, no shadows, no gradients, nothing rounded beyond 2px.

---

## Stack — non-negotiable

- **Next.js 16, App Router, TypeScript.** Read `AGENTS.md` first; Next 16 differs from 15.
- **React Server Components by default.** `'use client'` only on leaves that need the browser.
- **Framer Motion** for the small amount of motion. No GSAP, no Lenis, no Locomotive,
  no scroll-jacking. GSAP is only correct if scroll-linked pinning comes back — it is not now.
- **Styling: Tailwind CSS v4**, configured through `@theme` in `app/globals.css`. No separate
  `tailwind.config.js` (v4 does not need one), no styled-components, no CSS-in-JS runtime.
- **No component library.** No shadcn/ui, no Radix, no MUI, no Chakra, no Headless UI — they are
  exactly where AI-generated sites get their look. Small helpers only: `clsx`.
- **No backend.** Contact form posts to Formspree from the client.
- **No icon library** except inline SVG you write yourself.

## Deploy

Vercel free tier on `syedalihax.com`. Do **not** set `output: 'export'`.

---

## File structure — exactly this

```
app/
├── layout.tsx
├── page.tsx
├── globals.css
├── work/page.tsx
├── work/easy-parking/page.tsx
├── work/lapitopia/page.tsx
├── about/page.tsx
├── contact/page.tsx
├── sitemap.ts
├── robots.ts
├── opengraph-image.tsx
└── not-found.tsx
components/
├── Nav.tsx            'use client'  mobile menu
├── Footer.tsx
├── Reveal.tsx         'use client'  framer-motion wrapper
├── CaseRow.tsx
├── Faq.tsx
└── ContactForm.tsx    'use client'
lib/
├── site.ts            name, url, email, nav, offer, faqs
└── schema.ts          JSON-LD builders
public/
├── llms.txt
└── shots/easyparking.webp
    shots/lapitopia.webp
```

---

## Design tokens (`app/globals.css`, Tailwind v4 `@theme`)

```css
@import "tailwindcss";

@theme {
  --color-paper:  #F7F6F2;
  --color-ink:    #16150F;
  --color-muted:  #6B6A62;
  --color-rule:   #DCD8CE;
  --color-accent: #1B4D3E;

  --font-display: var(--font-instrument-serif), Georgia, serif;
  --font-sans:    var(--font-inter), system-ui, sans-serif;
  --font-mono:    var(--font-jetbrains-mono), monospace;

  --text-display: clamp(2.6rem, 6.2vw, 5.6rem);
  --text-h2:      clamp(1.7rem, 3.2vw, 2.6rem);
  --text-body:    clamp(1rem, 0.96rem + 0.2vw, 1.1rem);
  --text-meta:    0.78rem;

  --spacing-section: clamp(4.5rem, 10vh, 8rem);
}
```

Use tokens through utilities: `bg-paper text-ink border-rule text-muted text-accent`,
`font-display text-display`, `font-mono text-meta`, `py-section`.
Container: `mx-auto w-full max-w-[1180px] px-6`.

### Tailwind utilities that are banned — they are what makes a site look generated

`rounded-lg` `rounded-xl` `rounded-2xl` `rounded-3xl` `rounded-full` (max allowed: `rounded-sm`) ·
`shadow-*` `drop-shadow-*` · `bg-gradient-*` `from-*` `via-*` `to-*` · `backdrop-blur-*` ·
`ring-*` used as a glow · `animate-pulse` `animate-bounce` · `hover:scale-*` ·
`bg-gray-*` `text-gray-*` (`--color-*` tokens only) · `dark:` anything.

**Fonts** via `next/font/google`, exposed as CSS variables:
**Instrument Serif** (display, headings) · **Inter** (body) · **JetBrains Mono** (metadata,
numbers, labels, prices).

**Rules that make it look designed rather than generated:**

- Background is `--paper`. Text is `--ink`. **No dark mode**, no `prefers-color-scheme` block.
- **No box-shadows anywhere.** Separation comes from `1px solid var(--rule)` hairlines only.
- **No border-radius above 2px.** Inputs and images get 2px, nothing else.
- **No gradients.** Not on text, not on backgrounds, not on borders.
- Headings are **left-aligned, ragged right, sentence case**, and may wrap tight and uneven.
- Body copy is capped at `62ch` and never centred.
- Horizontal hairlines separate sections; they span the full container width.
- Asymmetry is wanted: text column left, metadata column right, roughly 7fr / 4fr.
- `--accent` appears at most **three times on the entire site** — one link hover, one rule under
  the current nav item, and the price. Nowhere else.
- **No emoji. No icons in cards. No "trusted by" logo strips. No fake testimonials.**
- Numbers, dates, versions and labels are always mono and never bold.

---

## Section order (`/`)

1. **Hero** — name at `--display`, one line of positioning beneath it, then a single mono line
   with location and availability. No image, no button, no scroll arrow.
2. **Index rule** — a full-width hairline, then a mono strip: `Web developer · Quetta, PK · remote`.
3. **Selected work** — the two real projects as `CaseRow` entries: number, name, one-line
   problem, stack in mono, outcome. Screenshot on the right, text left, hairline between rows.
4. **What I do** — three short paragraphs, **not** cards, **not** icons. Each begins with a mono
   label on the left and prose on the right.
5. **Offer** — three prices in a plain table layout with hairlines: $99 fix / $199 build /
   $499 build-plus. Mono prices. One sentence above explaining the founding rate.
6. **FAQ** — 5 real questions with 2 to 3 sentence answers. This section is also the AEO payload.
7. **Contact** — email link plus the Formspree form.

### `/work`, `/work/easy-parking`, `/work/lapitopia`
Each case study: what the product is, what was built, the stack, and what changed. **No invented
metrics** — where a number is unknown use a `data-placeholder` attribute and state the
qualitative outcome.

### `/about`
Three first-person paragraphs, max. Say plainly that he is in Pakistan and works remotely across
time zones. Do not hide it, do not apologise for it.

---

## Motion — Framer Motion, and nothing else

Create one component, `components/Reveal.tsx`. Everything animated goes through it.

```tsx
// allowed values only
initial={{ opacity: 0, y: 12 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, margin: '-80px' }}
transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay }}
```

Rules:

- **No springs.** No `type: 'spring'`, no bounce, no overshoot.
- **No `useScroll`, no `useTransform`, no parallax, no sticky scroll sections.** The scrub idea
  is parked.
- Stagger children by `delay: i * 0.06`, never more.
- `once: true` everywhere — content must not re-animate when scrolled back.
- Wrap the app in `<MotionConfig reducedMotion="user">` inside `layout.tsx`.
- Animate only opacity and transform, never layout properties.

---

## SEO — per page

- Every page exports `metadata: Metadata` with a unique `title`, `description`, `openGraph`,
  `alternates.canonical`.
- `layout.tsx` sets `metadataBase: new URL('https://syedalihax.com')`.
- Semantic landmarks: `<header> <nav> <main> <article> <section> <footer>`. **One `<h1>` per page.**
- `app/sitemap.ts` lists all five routes with `changeFrequency` and `priority`.
- `app/opengraph-image.tsx` renders a 1200x630 image with `ImageResponse`.
- Descriptive `alt` on every image; empty `alt` only for decoration.
- Images use `next/image` with explicit width/height.

## AEO / GEO — being quotable by AI assistants

Implement all of it.

**1. `lib/schema.ts`** builds and exports these JSON-LD objects, injected in `layout.tsx`:

- `Person` — name, jobTitle, url, email, address (Quetta, PK), knowsAbout (real skills only)
- `WebSite` — name, url, inLanguage
- `ProfessionalService` — name, description, areaServed `Worldwide`, serviceType
- `FAQPage` — built from the same `faqs` array the FAQ section renders

**2. Rules for the FAQ answers** — these are what an assistant quotes:

- Each answer is 1 to 2 complete sentences that stand alone without the question.
- Each answer contains at least one concrete fact: a price, a turnaround, a stack, a location.
- Never write an answer a competitor's site could also truthfully claim.
- No marketing adjectives. No "we". First person singular.

**3. `public/llms.txt`** — plain markdown served at the root:

```
# Syed Ali — Web Developer

> One sentence describing exactly what he does and for whom.

## About
Two factual sentences: location, remote, what he builds.

## Services
- Website fix — $99 USD — what it includes, turnaround
- Website build — $199 USD — what it includes, turnaround
- Website build plus — $499 USD — what it includes, turnaround

## Work
- Easy-Parking — one line. URL.
- LapToPia — one line. URL.

## Contact
hello@syedalihax.com
https://syedalihax.com/contact
```

**4. `app/robots.ts`** explicitly allows the AI crawlers rather than leaving it implicit:
`GPTBot`, `OAI-SearchBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`, `Applebot-Extended`,
`CCBot` — each with `allow: '/'`.

**5. Every factual claim must be readable as text in the DOM.** Nothing that exists only inside an
image or a client-rendered block. Assistants read HTML.

---

## Copy rules

- Title: **Web Developer**. Never "digital agency", never "solutions", never "we".
- Scope is international and remote. Do not name one country as the market.
- First person singular throughout. One person, not a team.
- No invented years of experience, no invented client counts, no invented testimonials.
- No lorem ipsum, no `Jane Doe`, no placeholder text of any kind.
- Positioning line is one sentence, under 14 words, and specific.

---

## Layout invariants — these have already broken the site once

- **Never `overflow-x: hidden` on `body`.** It creates a scroll container and breaks `sticky`.
  Use `overflow-x: clip` on `html`.
- **Never `scroll-behavior: smooth` on `html`.** It fights every programmatic scroll.
- Never an empty `sameAs: []` in JSON-LD — omit it or fill it with real URLs.
- `layout.tsx` metadata must include `openGraph`; pages must not be the only place it exists.

---

## When asked to build something

1. TypeScript, typed props, no `any` without an explanatory comment.
2. Server Component unless browser APIs are needed; then `'use client'` at the leaf.
3. Styles are Tailwind utilities built from theme tokens: `bg-paper text-ink border-rule
   text-muted font-display text-display font-mono text-meta py-section`. No hardcoded hex outside
   `globals.css`. No `style={{}}` except for values Tailwind genuinely cannot express.
4. Say which files changed and why, one line each.
5. Touch only the files the request names. When a request covers several files, finish and report
   before starting the next group — do not open a second group mid-task.

## Banned outright

`box-shadow` · `border-radius` over 2px · any gradient · `whileHover={{ scale }}` ·
spring transitions · `useScroll` · parallax · three-column icon cards · "Get in touch" ·
"Let's work together" · "Hi, I'm" · gradient text · dark mode · emoji in UI.
