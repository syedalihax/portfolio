# syedalihax.com — personal portfolio (Next.js)

Multi-page portfolio. Next.js 15 App Router, TypeScript, CSS Modules, no backend.
The hero is a scroll-scrubbed canvas frame sequence.

The spec Copilot follows lives in **`.github/copilot-instructions.md`** — Copilot Chat reads it
automatically on every request, so constraints never need restating in prompts.

---

## Setup (once)

```bash
cd ~/Desktop/portfolio
npx create-next-app@latest . --ts --app --no-tailwind --no-eslint --no-src-dir --import-alias "@/*"
mkdir -p app/work/easy-parking app/work/lapitopia app/about app/contact \
         components lib public/frames public/shots
code .
```

Copilot Chat: `Ctrl+Alt+I`, signed in, **Agent** mode selected (the dropdown next to the input).

If `create-next-app` refuses because the directory is not empty, it is only because of
`.github/`, `tools/` and `README.md` — move them out, scaffold, move them back.

---

## Build order — one prompt at a time

Run these **in order**. After each, stop and report what Copilot changed; the agent reviews before
the next prompt. Skipping the review gate is how a portfolio becomes 4000 lines of wrong.

### 1. Scaffold
```
Read .github/copilot-instructions.md. Create app/globals.css with the design tokens and reset,
app/layout.tsx with Inter + JetBrains Mono via next/font, metadataBase, Person JSON-LD, Nav and
Footer, app/sitemap.ts and app/robots.ts, and lib/site.ts with the shared constants.
Create empty placeholder page.tsx files for all 5 routes. No section content yet.
```

### 2. Nav + Footer
```
Build components/Nav.tsx ('use client' for the mobile menu) and components/Footer.tsx per the spec.
Nav links: Work, About, Contact. Include the hello@syedalihax.com link in the footer. Styles in
co-located CSS modules using tokens only.
```

### 3. Hero
```
Build components/HeroScrubber.tsx as specified in the "Hero scrubber" section — all 11 numbered
requirements, 'use client', TypeScript, cleanup in the useEffect return. Wire it into app/page.tsx
with the name heading at --step-3 and the positioning line. Do not build the other home sections.
```

### 4. Home sections
```
Complete app/page.tsx: proof strip, selected work (the two CaseStudyCards), the $149 offer block,
and the closing CTA to /contact. Add components/CaseStudyCard.tsx and components/Section.tsx.
Do not touch the hero or any other route.
```

### 5. Work pages
```
Build app/work/page.tsx and both case studies at app/work/easy-parking/page.tsx and
app/work/lapitopia/page.tsx, each with its own metadata export. Real content only — leave
data-placeholder attributes where a metric is genuinely unknown, never invent numbers.
```

### 6. About + Contact
```
Build app/about/page.tsx and app/contact/page.tsx with unique metadata. Contact page gets
components/ContactForm.tsx ('use client') posting to Formspree with client-side validation and
real labels. About is max 3 first-person paragraphs per the copy rules.
```

### 7. Audit
```
Audit the whole project against the Performance budget, Accessibility and SEO rules in the spec.
List every violation with file and line. Fix only what you are certain about and report what changed.
```

---

## Frames (agent's job, not Copilot's)

When the Google Flow clip is ready:

```bash
python tools/extract-frames.py hero.mp4
```

Writes `public/frames/desktop/` (120 @ 1600x900), `public/frames/mobile/` (60 @ 720x405),
`public/frames/poster.webp`, and `manifest.json`. Prints a budget check — desktop must stay under
12 MB, mobile under 2 MB. Over budget: lower `--desktop-q` first, only then the frame count.

Source clip: **4–8 seconds, continuous motion, no cuts, no burned-in text, 16:9, dark background.**

---

## Deploy

Vercel free tier, then point `syedalihax.com` at it. Do **not** set `output: 'export'` — it breaks
`next/image`. Every route is statically generated, so delivery is still static at the edge.

Domain DNS currently sits on Hostinger nameservers (`cosmos/nova.dns-parking.com`) and the apex is
parked on `2.57.91.91`.
