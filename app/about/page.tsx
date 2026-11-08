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
  },
  alternates: {
    canonical: `${url}/about`,
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="border-b border-rule">
        <Nav />
      </header>
      <main className="mx-auto w-full max-w-[1180px] px-6">
        <article>
          <Reveal>
            <header className="py-section">
              <p className="font-mono text-meta text-muted">About</p>
              <h1 className="mt-4 font-display text-display leading-[0.98] text-ink">
                How I work
              </h1>
            </header>
          </Reveal>
          <div className="grid grid-cols-1 gap-8 pb-section md:grid-cols-12">
            <div className="md:col-span-7">
              <Reveal>
                <p className="border-t border-rule py-6 text-body leading-relaxed text-ink">
                  I fix existing websites and build small-business sites with
                  Next.js, TypeScript and Tailwind CSS, then deploy them and
                  hand over the repository.
                </p>
              </Reveal>
              <Reveal delay={0.06}>
                <p className="border-t border-rule py-6 text-body leading-relaxed text-ink">
                  I am based in Quetta, Pakistan, and work remotely with clients
                  across time zones. I reply within one working day.
                </p>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="border-y border-rule py-6 text-body leading-relaxed text-ink">
                  I agree on the scope in writing before I start, quote a fixed
                  price for that scope, and do not require a retainer.
                </p>
              </Reveal>
            </div>
            <div className="md:col-start-9 md:col-span-4">
              <Image
                src="/photos/syed-ali.webp"
                width={900}
                height={1448}
                sizes="(max-width: 768px) 100vw, 380px"
                alt="Syed Ali, web developer, photographed at a window"
                className="h-auto w-full rounded-sm border border-rule grayscale-[0.15] contrast-[1.02]"
              />
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
