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
  },
  alternates: {
    canonical: `${url}/work/easy-parking`,
  },
};

export default function EasyParkingPage() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="border-b border-rule">
        <Nav />
      </header>
      <main className="mx-auto w-full max-w-[1180px] px-6">
        <article>
          <Reveal>
            <header className="py-section">
              <p className="font-mono text-meta text-muted">
                Case study · 01
              </p>
              <h1 className="mt-4 font-display text-display leading-[0.98] text-ink">
                Easy-Parking
              </h1>
              <p className="mt-6 max-w-[62ch] text-body leading-relaxed text-muted">
                A parking management register for monthly members, walk-in
                parking and unpaid dues.
              </p>
            </header>
          </Reveal>

          <Reveal>
            <figure className="border-t border-rule py-8">
              <Image
                src="/shots/easyparking.webp"
                alt="Easy-Parking monthly dues interface with vehicle, billed, paid, balance and status columns."
                width={1900}
                height={950}
                sizes="(max-width: 768px) 100vw, 1100px"
                className="h-auto w-full rounded-sm"
              />
              <figcaption className="mt-3 font-mono text-meta text-muted">
                Monthly dues view · example records, not live data
              </figcaption>
            </figure>
          </Reveal>

          <div className="py-section">
            <Reveal>
              <section className="grid gap-3 border-t border-rule py-6 sm:grid-cols-[4fr_7fr] sm:gap-8">
                <h2 className="font-mono text-meta text-muted">Problem</h2>
                <p className="max-w-[62ch] text-body leading-relaxed text-ink">
                  A parking operator needs to keep track of monthly members,
                  walk-in parking and unpaid dues without losing each
                  vehicle&apos;s billing history.
                </p>
              </section>
            </Reveal>
            <Reveal delay={0.06}>
              <section className="grid gap-3 border-t border-rule py-6 sm:grid-cols-[4fr_7fr] sm:gap-8">
                <h2 className="font-mono text-meta text-muted">What I built</h2>
                <p className="max-w-[62ch] text-body leading-relaxed text-ink">
                  I built a parking register interface with views for members,
                  monthly dues, daily parking and payments. The monthly dues
                  table shows billed amounts, payments, balances and payment
                  status for each listed member.
                </p>
              </section>
            </Reveal>
            <Reveal delay={0.12}>
              <section className="grid gap-3 border-t border-rule py-6 sm:grid-cols-[4fr_7fr] sm:gap-8">
                <h2 className="font-mono text-meta text-muted">Stack</h2>
                <p className="font-mono text-meta leading-relaxed text-ink">
                  Next.js · TypeScript · Tailwind CSS
                </p>
              </section>
            </Reveal>
            <Reveal delay={0.18}>
              <section className="grid gap-3 border-y border-rule py-6 sm:grid-cols-[4fr_7fr] sm:gap-8">
                <h2 className="font-mono text-meta text-muted">Outcome</h2>
                <p className="max-w-[62ch] text-body leading-relaxed text-ink">
                  Monthly charges, payments and remaining balances can be
                  reviewed together in the dues table, with unpaid amounts
                  visible alongside each member.
                </p>
              </section>
            </Reveal>
          </div>

          <Reveal>
            <nav aria-label="Project navigation" className="pb-section">
              <a
                href="/work/lapitopia"
                className="font-mono text-meta text-ink underline decoration-rule underline-offset-4"
              >
                Next project: LapToPia
              </a>
            </nav>
          </Reveal>
        </article>
      </main>
      <Footer />
    </div>
  );
}
