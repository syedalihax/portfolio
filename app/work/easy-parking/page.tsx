import type { Metadata } from "next";
import Image from "next/image";
import Footer from "../../../components/Footer";
import Nav from "../../../components/Nav";
import Reveal from "../../../components/Reveal";
import { url } from "../../../lib/site";

const title = "Easy-Parking | Syed Ali — Web Developer";
const description =
  "A parking management interface for monthly members, walk-in parking and unpaid dues, built by Syed Ali.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    type: "website",
    url: `${url}/work/easy-parking`,
    title,
    description,
    images: [new URL("/opengraph-image", url).toString()],
  },
  alternates: {
    canonical: `${url}/work/easy-parking`,
  },
};

export default function EasyParkingPage() {
  return (
    <div className="min-h-screen bg-[var(--paper)] text-[var(--ink)]">
      <Nav />

      <main>
        <section className="band-paper">
          <div className="mx-auto w-full max-w-[1360px] px-[clamp(20px,4vw,56px)] py-[clamp(88px,10vw,140px)]">
            <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <p className="section-label text-[var(--muted)]">Case study · 01</p>
                <h1 className="mt-4 font-sans text-[clamp(3.2rem,8vw,6.4rem)] font-semibold leading-[0.92] tracking-[-0.045em] text-[var(--ink)]">
                  Easy-Parking
                </h1>
                <p className="mt-6 max-w-[62ch] text-[17px] leading-7 text-[var(--muted)]">
                  A parking management register for monthly members, walk-in
                  parking and unpaid dues.
                </p>
              </div>

              <div className="lg:col-span-5 lg:justify-self-end">
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://easy-parking-management.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center justify-center border border-[var(--ink)] bg-[var(--ink)] px-4 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--paper)]"
                  >
                    Live site ↗
                  </a>
                  <a
                    href="https://github.com/syedalihax/Easy-Parking"
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

        <section className="band-forest">
          <div className="mx-auto w-full max-w-[1360px] px-[clamp(20px,4vw,56px)] py-8">
            <Reveal>
              <figure>
                <Image
                  src="/shots/easyparking.webp"
                  alt="Easy-Parking monthly dues interface with vehicle, billed, paid, balance and status columns."
                  width={1900}
                  height={950}
                  sizes="(max-width: 768px) 100vw, 1360px"
                  className="h-auto w-full border border-[var(--rule-inv)] rounded-[2px]"
                />
              </figure>
            </Reveal>
          </div>
        </section>

        <section className="band-paper">
          <div className="mx-auto w-full max-w-[1360px] px-[clamp(20px,4vw,56px)] py-[clamp(88px,10vw,140px)]">
            <div className="grid gap-6 lg:grid-cols-12">
              <div className="lg:col-span-7 lg:col-start-3">
                <Reveal>
                  <section className="grid gap-4 border-t border-[var(--rule)] py-6 md:grid-cols-[10rem_1fr] md:gap-8">
                    <h2 className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--muted)]">Problem</h2>
                    <p className="text-[17px] leading-7 text-[var(--ink)]">
                      Parking operators tracked monthly members, walk-ins and unpaid
                      dues on paper. I needed one system that kept each vehicle&apos;s
                      billing history and balances accurate.
                    </p>
                  </section>
                </Reveal>
                <Reveal delay={0.06}>
                  <section className="grid gap-4 border-t border-[var(--rule)] py-6 md:grid-cols-[10rem_1fr] md:gap-8">
                    <h2 className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--muted)]">What I built</h2>
                    <p className="text-[17px] leading-7 text-[var(--ink)]">
                      I built a dues register for monthly members, daily parking and
                      payments. It groups vehicle data, charges, balances and status
                      in one workflow.
                    </p>
                  </section>
                </Reveal>
                <Reveal delay={0.12}>
                  <section className="grid gap-4 border-t border-[var(--rule)] py-6 md:grid-cols-[10rem_1fr] md:gap-8">
                    <h2 className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--muted)]">Decision</h2>
                    <p className="text-[17px] leading-7 text-[var(--ink)]">
                      I kept the rate card tied to each vehicle type, so a rate
                      change never overwrites past records. That kept historical
                      billing accurate and easy to audit.
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
                  href="/work/lapitopia"
                  className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--ink)] underline underline-offset-4"
                >
                  Next project: LapToPia
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
