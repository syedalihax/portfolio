import type { Metadata } from "next";
import Image from "next/image";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import Reveal from "../../components/Reveal";
import { url } from "../../lib/site";

const title = "About | Syed Ali — Web Developer";
const description =
  "Syed Ali builds and fixes websites, working remotely from Quetta, Pakistan, across time zones.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    type: "website",
    url: `${url}/about`,
    title,
    description,
    images: [new URL("/opengraph-image", url).toString()],
  },
  alternates: {
    canonical: `${url}/about`,
  },
};

const processSteps = [
  "I scope the issue or build before the first line of code.",
  "I quote a fixed price and date before I start.",
  "I ship the site and deploy it on the agreed date.",
  "I hand over the repo so it remains easy to maintain.",
] as const;

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--paper)] text-[var(--ink)]">
      <Nav />

      <main>
        <section className="band-paper">
          <div className="mx-auto w-full max-w-[1360px] px-[clamp(20px,4vw,56px)] py-[clamp(88px,10vw,140px)]">
            <Reveal>
              <div className="grid gap-5 lg:grid-cols-12 lg:items-end">
                <div className="lg:col-span-2">
                  <p className="section-label text-[var(--muted)]">About</p>
                </div>
                <div className="lg:col-span-10">
                  <h1 className="font-sans text-[clamp(3.2rem,8vw,6.4rem)] font-semibold leading-[0.92] tracking-[-0.045em] text-[var(--ink)]">
                    How I work
                  </h1>
                </div>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <Reveal>
                  <p className="border-t border-[var(--rule)] py-6 text-[17px] leading-7 text-[var(--ink)]">
                    I fix existing websites and build small-business sites with
                    Next.js, TypeScript and Tailwind CSS, then deploy them and
                    hand over the repository.
                  </p>
                </Reveal>
                <Reveal delay={0.06}>
                  <p className="border-t border-[var(--rule)] py-6 text-[17px] leading-7 text-[var(--ink)]">
                    I am based in Quetta, Pakistan, and work remotely with clients
                    across time zones. I reply within one working day.
                  </p>
                </Reveal>
                <Reveal delay={0.12}>
                  <p className="border-t border-[var(--rule)] py-6 text-[17px] leading-7 text-[var(--ink)]">
                    I agree on the scope in writing before I start, quote a fixed
                    price for that scope, and do not require a retainer.
                  </p>
                </Reveal>

                <div className="mt-8 grid gap-4 border-t border-[var(--rule)] pt-5 md:grid-cols-3">
                  <div>
                    <p className="section-label text-[var(--muted)]">Location</p>
                    <p className="mt-2 font-mono text-[18px] text-[var(--ink)]">Quetta, PK</p>
                  </div>
                  <div>
                    <p className="section-label text-[var(--muted)]">Remote</p>
                    <p className="mt-2 font-mono text-[18px] text-[var(--ink)]">Worldwide</p>
                  </div>
                  <div>
                    <p className="section-label text-[var(--muted)]">Scope</p>
                    <p className="mt-2 font-mono text-[18px] text-[var(--ink)]">Fixed price</p>
                  </div>
                </div>

                <div className="mt-12">
                  <p className="section-label text-[var(--muted)]">How I work</p>
                  <div className="mt-4 border-t border-[var(--rule)]">
                    {processSteps.map((step, index) => (
                      <div
                        key={step}
                        className="grid gap-4 border-b border-[var(--rule)] py-4 md:grid-cols-[3rem_1fr] md:items-start"
                      >
                        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--muted)]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <p className="text-[17px] leading-7 text-[var(--ink)]">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 lg:col-start-9">
                <Image
                  src="/photos/syed-ali.webp"
                  width={900}
                  height={1448}
                  sizes="(max-width: 768px) 100vw, 420px"
                  alt="Syed Ali, web developer, photographed at a window"
                  className="h-auto w-full max-w-[420px] border border-[var(--rule)] rounded-[2px]"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
