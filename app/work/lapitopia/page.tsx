import type { Metadata } from "next";
import Image from "next/image";
import Footer from "../../../components/Footer";
import Nav from "../../../components/Nav";
import Reveal from "../../../components/Reveal";
import { url } from "../../../lib/site";

const title = "LapToPia | Syed Ali — Web Developer";
const description =
  "A hardware storefront for laptops, PCs, servers and miners, built by Syed Ali.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    type: "website",
    url: `${url}/work/lapitopia`,
    title,
    description,
    images: [new URL("/opengraph-image", url).toString()],
  },
  alternates: {
    canonical: `${url}/work/lapitopia`,
  },
};

export default function LapitopiaPage() {
  return (
    <div className="min-h-screen bg-[var(--sand)] text-[var(--ink)]">
      <Nav />

      <main>
        <section className="band-sand">
          <div className="mx-auto w-full max-w-[1360px] px-[clamp(20px,4vw,56px)] py-[clamp(88px,10vw,140px)]">
            <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <p className="section-label text-[var(--muted)]">Case study · 02</p>
                <h1 className="mt-4 font-sans text-[clamp(3.2rem,8vw,6.4rem)] font-semibold leading-[0.92] tracking-[-0.045em] text-[var(--ink)]">
                  LapToPia
                </h1>
                <p className="mt-6 max-w-[62ch] text-[17px] leading-7 text-[var(--muted)]">
                  A hardware storefront featuring laptops, PCs, servers and
                  mining systems.
                </p>
              </div>

              <div className="lg:col-span-5 lg:justify-self-end">
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://laptopia-p.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center justify-center border border-[var(--ink)] bg-[var(--ink)] px-4 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--paper)]"
                  >
                    Live site ↗
                  </a>
                  <a
                    href="https://github.com/syedalihax/LapToPia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center justify-center border border-[var(--ink)] bg-transparent px-4 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--ink)]"
                  >
                    Code ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="band-clay">
          <div className="mx-auto w-full max-w-[1360px] px-[clamp(20px,4vw,56px)] py-8">
            <Reveal>
              <figure>
                <Image
                  src="/shots/lapitopia.webp"
                  alt="LapToPia hardware storefront with product search and a featured computer systems banner."
                  width={1917}
                  height={1078}
                  sizes="(max-width: 768px) 100vw, 1360px"
                  className="h-auto w-full border border-[rgba(16,16,16,0.25)] rounded-[2px]"
                />
              </figure>
            </Reveal>
          </div>
        </section>

        <section className="band-sand">
          <div className="mx-auto w-full max-w-[1360px] px-[clamp(20px,4vw,56px)] py-[clamp(88px,10vw,140px)]">
            <div className="grid gap-6 lg:grid-cols-12">
              <div className="lg:col-span-7 lg:col-start-3">
                <Reveal>
                  <section className="grid gap-4 border-t border-[var(--rule)] py-6 md:grid-cols-[10rem_1fr] md:gap-8">
                    <h2 className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--muted)]">Problem</h2>
                    <p className="text-[17px] leading-7 text-[var(--ink)]">
                      Shoppers looking for laptops, PCs, servers and miners needed a
                      storefront that was easy to browse and trust. I needed clear
                      categories and a direct path to support.
                    </p>
                  </section>
                </Reveal>
                <Reveal delay={0.06}>
                  <section className="grid gap-4 border-t border-[var(--rule)] py-6 md:grid-cols-[10rem_1fr] md:gap-8">
                    <h2 className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--muted)]">What I built</h2>
                    <p className="text-[17px] leading-7 text-[var(--ink)]">
                      I built a storefront with product discovery, category
                      navigation, featured systems and direct support contact. The
                      catalogue feeds into a simple checkout and order admin flow.
                    </p>
                  </section>
                </Reveal>
                <Reveal delay={0.12}>
                  <section className="grid gap-4 border-t border-[var(--rule)] py-6 md:grid-cols-[10rem_1fr] md:gap-8">
                    <h2 className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--muted)]">Decision</h2>
                    <p className="text-[17px] leading-7 text-[var(--ink)]">
                      I chose a search-first, category-led layout so customers could
                      compare hardware quickly without losing context. It kept the
                      catalogue simple enough to shop in a hurry.
                    </p>
                  </section>
                </Reveal>
                <Reveal delay={0.18}>
                  <section className="grid gap-4 border-y border-[var(--rule)] py-6 md:grid-cols-[10rem_1fr] md:gap-8">
                    <h2 className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--muted)]">Stack</h2>
                    <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--ink)]">
                      Next.js · TypeScript · Tailwind CSS
                    </p>
                  </section>
                </Reveal>
              </div>
            </div>

            <Reveal>
              <nav aria-label="Project navigation" className="mt-10">
                <a
                  href="/work/easy-parking"
                  className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--ink)] underline underline-offset-4"
                >
                  Next project: Easy-Parking
                </a>
              </nav>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
