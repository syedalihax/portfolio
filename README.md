# syedalihax.com — personal portfolio

Static single-page portfolio. Vanilla HTML/CSS/JS, no build step, no backend.

The spec Copilot follows lives in **`.github/copilot-instructions.md`** — Copilot Chat reads it
automatically on every request, so you do not need to repeat the rules in your prompts.

---

## Setup (once)

```bash
cd ~/Desktop/portfolio
git init
code .
```

In VS Code: open Copilot Chat (`Ctrl+Alt+I`), sign in with the GitHub account that has Copilot.

---

## Build order — paste these prompts one at a time

Run them **in this exact order**, and let Copilot finish each before starting the next.
After each one, tell me what it wrote and I will review before you continue.

### 1. Skeleton + tokens
```
Read .github/copilot-instructions.md. Create index.html with the full semantic skeleton
for all 7 sections (empty content is fine for now), assets/styles.css with the design
tokens and base/reset styles exactly as specified, and assets/main.js with an empty
module that just awaits the frames manifest. No section content yet.
```

### 2. Hero
```
Build the hero section only, per the spec: full-viewport sticky stage, canvas element,
name heading using --step-3, the positioning line, and a thin frame-loading progress bar.
Include the prefers-reduced-motion poster fallback in the markup. Styles and behaviour
for the hero only — do not touch other sections.
```

### 3. The scrubber
```
Implement the scroll-scrubbed canvas in assets/main.js exactly per the "Hero scrubber"
section of the spec. Load assets/frames/manifest.json, follow all 10 numbered requirements,
including the lerp smoothing, the concurrency-limited preloader, the lastDrawn guard,
and the mobile frame-set switch at 820px. Add a temporary console.warn if the manifest
is missing so the page still renders.
```

### 4. Proof + Work
```
Build the Proof strip and the Work section: two case studies, Easy-Parking and LapToPia.
Each gets a screenshot slot (assets/shots/easyparking.webp and lapitopia.webp), a one-line
problem, what was built, the stack as mono tags, and an outcome line. Do not invent numbers —
leave data-placeholder attributes where a real metric is needed.
```

### 5. Offer
```
Build the Offer section: "Website Fix — $149 AUD" with the price in mono at large size,
a plain list of exactly what is included (speed, mobile layout, SSL, Google Business Profile,
analytics), the turnaround, and one CTA that scrolls to contact. Use --accent at most once here.
```

### 6. About + Contact + Footer
```
Build About (max 3 first-person paragraphs, mention Pakistan and the timezone benefit per the
copy rules), Contact (mailto hello@syedalihax.com plus a Formspree form with real labels for
name, email, website URL, message), and the Footer.
```

### 7. Audit pass
```
Audit the whole site against the Performance budget and Accessibility sections of the spec.
List every violation you find with its file and line, and fix only the ones you are certain
about. Report what you changed.
```

---

## Frames (my job, not Copilot's)

When the Google Flow video is ready:

```bash
python tools/extract-frames.py hero.mp4
```

Writes `assets/frames/desktop/` (120 frames, 1600x900), `assets/frames/mobile/` (60 frames,
720x405), a poster, and `manifest.json`. It prints a budget check — desktop must stay under
12 MB, mobile under 2 MB. If over, lower `--desktop-q` or `--desktop-count`.

The source video wants: **4–8 seconds, smooth continuous motion, no cuts, no text burned in.**

---

## Deploy

GitHub Pages or Vercel, both free with HTTPS on a custom domain.

```bash
git add . && git commit -m "initial" && git push
```

Then point `syedalihax.com` at the host. DNS is currently on Hostinger nameservers
(`cosmos/nova.dns-parking.com`) and the domain is still parked on `2.57.91.91`.
