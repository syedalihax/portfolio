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
  },
  alternates: {
    canonical: `${url}/work/lapitopia`,
  },
};

export default function LapitopiaPage() {
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
                Case study · 02
              </p>
              <h1 className="mt-4 font-display text-display leading-[0.98] text-ink">
                LapToPia
              </h1>
              <p className="mt-6 max-w-[62ch] text-body leading-relaxed text-muted">
                A hardware storefront featuring laptops, PCs, servers and
                mining systems.
              </p>
            </header>
          </Reveal>

          <Reveal>
            <figure className="border-t border-rule py-8">
              <Image
                src="/shots/lapitopia.webp"
                alt="LapToPia hardware storefront with product search and a featured computer systems banner."
                width={1917}
                height={1078}
                sizes="(max-width: 768px) 100vw, 1100px"
                className="h-auto w-full rounded-sm"
              />
              <figcaption className="mt-3 font-mono text-meta text-muted">
                LapToPia storefront
              </figcaption>
            </figure>
          </Reveal>

          <div className="py-section">
            <Reveal>
              <section className="grid gap-3 border-t border-rule py-6 sm:grid-cols-[4fr_7fr] sm:gap-8">
                <h2 className="font-mono text-meta text-muted">Problem</h2>
                <p className="max-w-[62ch] text-body leading-relaxed text-ink">
                  People looking for computer hardware need to browse product
                  types including laptops, PCs, servers and miners in one
                  storefront.
                </p>
              </section>
            </Reveal>
            <Reveal delay={0.06}>
              <section className="grid gap-3 border-t border-rule py-6 sm:grid-cols-[4fr_7fr] sm:gap-8">
                <h2 className="font-mono text-meta text-muted">What I built</h2>
                <p className="max-w-[62ch] text-body leading-relaxed text-ink">
                  I built a storefront with product search, category
                  navigation, support contact information and a featured
                  computer-systems section. The page introduces laptops, PCs,
                  servers and mining systems as the main product groups.
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
                  Visitors can search for products and navigate from the
                  storefront to the featured hardware categories.
                </p>
              </section>
            </Reveal>
          </div>

          <Reveal>
            <nav aria-label="Project navigation" className="pb-section">
              <a
                href="/work/easy-parking"
                className="font-mono text-meta text-ink underline decoration-rule underline-offset-4"
              >
                Next project: Easy-Parking
              </a>
            </nav>
          </Reveal>
        </article>
      </main>
      <Footer />
    </div>
  );
}
