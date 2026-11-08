# syedalihax.com

Personal site for a web developer. Next.js 16 App Router, TypeScript, **Tailwind CSS v4**,
**Framer Motion**, no backend. Editorial design: paper background, hairline rules, no shadows,
no gradients, nothing rounded past 2px.

The spec Copilot obeys is **`.github/copilot-instructions.md`**. Copilot Chat reads it
automatically on every request, so the rules never need restating.

---

## Setup

```bash
cd ~/Desktop/portfolio
npx create-next-app@latest . --ts --app --tailwind --no-eslint --no-src-dir --import-alias "@/*"
npm i framer-motion clsx
mkdir -p app/work/easy-parking app/work/lapitopia app/about app/contact components lib public/shots
code .
```

If `create-next-app` refuses because the folder is not empty, `.github/` and `README.md` are the
only things in it — move them out, scaffold, move them back.

### Screenshots — do this before batch 2

- `public/shots/easyparking.webp`
- `public/shots/lapitopia.webp`

1600px wide, webp. Without them the work section renders broken images.

---

## How to run this with Copilot

Copilot **can** work autonomously in Agent mode, but do not hand it all six steps at once — it
will write two thousand lines in one pass, skip the review points, and you will spend the next
hour debugging instead of shipping.

Run **three batches**. Paste one, let it finish, run `npm run build`, then move on.

---

## Batch 1 — foundation, tokens, SEO/AEO files

```
Read .github/copilot-instructions.md in full before writing anything. Then build only the
foundation, in this order:

1. app/globals.css — Tailwind v4 `@import "tailwindcss"` plus the @theme block from the spec,
   exactly those tokens. Nothing else.
2. lib/site.ts — name, url, email, nav array, offer (three tiers $99/$199/$499), and a faqs
   array of 5 real questions and answers about website fixes and builds, following the AEO
   rules: each answer 1-2 standalone sentences with at least one concrete fact.
3. lib/schema.ts — personSchema, websiteSchema, serviceSchema, faqSchema built from site.ts.
4. app/layout.tsx — Instrument Serif + Inter + JetBrains Mono via next/font as CSS variables,
   metadataBase, openGraph in metadata, MotionConfig reducedMotion="user", and the four JSON-LD
   scripts.
5. app/sitemap.ts, app/robots.ts (explicitly allow GPTBot, OAI-SearchBot, ClaudeBot,
   PerplexityBot, Google-Extended, Applebot-Extended, CCBot), public/llms.txt per the spec.
6. Empty placeholder page.tsx for /, /work, /work/easy-parking, /work/lapitopia, /about,
   /contact — each exporting its own metadata.

No page content yet. Report every file you created in one line each.
```

→ then `npm run build`

## Batch 2 — shell and home page

```
Continue following .github/copilot-instructions.md.

1. components/Nav.tsx — 'use client', plain mobile menu, no library beyond framer-motion.
2. components/Footer.tsx.
3. components/Reveal.tsx — 'use client', the single motion wrapper, using only the allowed
   values in the spec.
4. components/CaseRow.tsx and components/Faq.tsx.
5. app/page.tsx with the seven sections in the exact order given: hero, index rule, selected
   work, what I do, offer, FAQ from site.faqs, contact CTA.

Every animation goes through Reveal. No cards, no icons, no shadows, no gradients, no centred
text, no banned Tailwind utility. Real copy, no placeholders. Report the files changed.
```

→ then `npm run build`, then look at it with `npm run dev`

## Batch 3 — work, about, contact, audit

```
Continue following .github/copilot-instructions.md.

1. app/work/page.tsx, app/work/easy-parking/page.tsx, app/work/lapitopia/page.tsx — each with
   its own metadata, editorial layout with hairlines, stack in mono, outcome line, and the
   screenshot at /shots/easyparking.webp or /shots/lapitopia.webp via next/image.
   No invented metrics.
2. app/about/page.tsx — three first-person paragraphs, states Pakistan and remote work plainly.
3. app/contact/page.tsx plus components/ContactForm.tsx ('use client', Formspree, real labels,
   client-side validation, no libraries).

Then audit the whole project against the SEO, AEO/GEO and "Banned outright" sections of the spec.
List every violation with file and line, fix the certain ones, and report what you changed.
```

→ then `npm run build`

---

## If something looks generated

```
Re-read the "Tailwind utilities that are banned" and "Banned outright" sections of
.github/copilot-instructions.md. List every place in the current code that violates them, with
file and line, then fix them and nothing else.
```

---

## Deploy

Vercel free tier, then point `syedalihax.com` at it. The domain is parked on Hostinger
nameservers (`cosmos/nova.dns-parking.com`), apex A record `2.57.91.91`.
