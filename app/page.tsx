import type { Metadata } from "next";
import CaseRow from "../components/CaseRow";
import ContactForm from "../components/ContactForm";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Reveal from "../components/Reveal";
import {
  email,
  offer,
  phone,
  positioning,
  projects,
  url,
  whatsappUrl,
} from "../lib/site";

const title = "Syed Ali — Web Developer";
const description =
  "Freelance web developer in Quetta. I fix broken sites and build clean one-page and multi-page websites for small businesses, with fixed price and fixed date.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    type: "website",
    url,
    title,
    description,
    images: [new URL("/opengraph-image", url).toString()],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [new URL("/opengraph-image", url).toString()],
  },
  alternates: {
    canonical: url,
  },
};

const services = [
  {
    label: "Fix",
    description:
      "I work on the exact issue you already see: a broken booking form, a mobile layout that collapses, or a page that fails to load.",
  },
  {
    label: "Build",
    description:
      "I design and build a one-page site with a clear offer, a working contact flow, and a deployment you can hand over without fuss.",
  },
  {
    label: "Build + booking",
    description:
      "I create up to five pages, add enquiry or booking logic, and polish the copy so the site reads clearly and converts.",
  },
] as const;

export default function HomePage() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="border-b border-rule bg-paper">
        <Nav />
      </header>

      <main>
        <div className="mx-auto w-full max-w-[1180px] px-6">
          <Reveal>
            <section aria-labelledby="home-title" className="py-section">
              <div className="grid gap-8 lg:grid-cols-[1.5fr_0.7fr] lg:items-end">
                <div>
                  <p className="section-label text-muted">Web developer · Quetta, PK · remote</p>
                  <h1
                    id="home-title"
                    className="mt-6 max-w-[12ch] font-display text-display leading-[0.94] tracking-[-0.04em] text-ink"
                  >
                    Websites that make people reply.
                  </h1>
                  <p className="mt-6 max-w-[56ch] text-body leading-relaxed text-muted">
                    {positioning}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href="#offer"
                      className="inline-flex min-h-[46px] items-center justify-center border border-ink bg-ink px-5 font-mono text-[11px] uppercase tracking-[0.12em] text-paper"
                    >
                      See pricing
                    </a>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[46px] items-center justify-center border border-rule bg-transparent px-5 font-mono text-[11px] uppercase tracking-[0.12em] text-ink"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
                <div className="lg:pb-3 lg:text-right">
                  <p className="section-label text-muted">Available for work</p>
                </div>
              </div>
            </section>
          </Reveal>

          <div className="border-t border-rule" />
          <div className="py-4 font-mono text-[11px] uppercase tracking-[0.12em] text-muted">
            Web developer · Quetta, PK · remote
          </div>
        </div>

        <section className="band-sand">
          <div className="mx-auto w-full max-w-[1180px] px-6 py-section">
            <Reveal>
              <h2 id="work-title" className="mb-8 font-display text-h2 text-ink">
                Selected work
              </h2>
            </Reveal>
            {projects.map((project, index) => (
              <CaseRow key={project.name} {...project} delay={index * 0.06} />
            ))}
          </div>
        </section>

        <div className="mx-auto w-full max-w-[1180px] px-6">
          <section aria-labelledby="services-title" className="py-section">
            <Reveal>
              <h2 id="services-title" className="mb-8 font-display text-h2 text-ink">
                What I do
              </h2>
            </Reveal>
            <div className="space-y-2 border-t border-rule">
              {services.map((service, index) => (
                <Reveal key={service.label} delay={index * 0.06}>
                  <div className="grid gap-3 border-b border-rule py-5 md:grid-cols-[14rem_1fr] md:gap-8">
                    <p className="section-label text-muted">{service.label}</p>
                    <p className="max-w-[62ch] text-body leading-relaxed text-muted">
                      {service.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          <section aria-labelledby="offer-title" className="py-section">
            <Reveal>
              <h2 id="offer-title" className="font-display text-h2 text-ink">
                Offer
              </h2>
              <p className="mt-4 max-w-[60ch] text-body leading-relaxed text-muted">
                These are my founding rates for clearly scoped website work.
              </p>
            </Reveal>
            <div className="mt-8 grid gap-3 border-t border-rule pt-5 md:grid-cols-3">
              <p className="section-label text-muted">01 send the URL</p>
              <p className="section-label text-muted">02 fixed quote</p>
              <p className="section-label text-muted">03 live on date</p>
            </div>
            <dl className="mt-8">
              {offer.map((tier, index) => (
                <Reveal key={tier.name} delay={index * 0.06}>
                  <div className="grid gap-4 border-t border-rule py-6 md:grid-cols-[1.2fr_0.8fr] md:items-end md:gap-8">
                    <div>
                      <dt className="text-body text-ink">{tier.name}</dt>
                      <dd className="mt-2 font-mono text-meta text-muted">
                        {tier.turnaround}
                      </dd>
                    </div>
                    <div className="md:text-right">
                      <dd className="font-display text-[2.5rem] leading-none text-ink md:text-[3.1rem]">
                        ${tier.price}
                      </dd>
                    </div>
                    <dd className="col-span-full max-w-[62ch] text-body leading-relaxed text-muted">
                      {tier.includes}
                    </dd>
                  </div>
                </Reveal>
              ))}
            </dl>
            <p className="mt-4 border-t border-rule pt-5 font-mono text-meta text-muted">
              Prices in USD, fixed. No hourly billing, no lock-in.
            </p>
          </section>

          <section aria-labelledby="faq-title" className="py-section">
            <Reveal>
              <h2 id="faq-title" className="mb-8 font-display text-h2 text-ink">
                Questions
              </h2>
            </Reveal>
            <Reveal>
              <Faq />
            </Reveal>
          </section>
        </div>

        <section className="band-ink">
          <div className="mx-auto w-full max-w-[1180px] px-6 py-section">
            <Reveal>
              <div className="grid gap-8 lg:grid-cols-[0.7fr_1.2fr] lg:items-start">
                <div>
                  <p className="section-label text-[rgba(247,246,242,0.7)]">Contact</p>
                  <h2 id="contact-title" className="mt-4 font-display text-h2 text-paper">
                    I reply within one working day.
                  </h2>
                  <div className="mt-8 space-y-3">
                    <a
                      href={`mailto:${email}`}
                      className="block font-mono text-[11px] uppercase tracking-[0.12em] text-paper underline-offset-4 hover:underline"
                    >
                      {email}
                    </a>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block font-mono text-[11px] uppercase tracking-[0.12em] text-paper underline-offset-4 hover:underline"
                      aria-label={`WhatsApp: ${phone}`}
                    >
                      WhatsApp · {phone}
                    </a>
                  </div>
                </div>
                <div>
                  <ContactForm />
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
