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
  url,
  whatsappUrl,
} from "../lib/site";

const title = "Syed Ali — websites for small business, fixed price";
const description =
  "Freelance web developer in Quetta. Fixes broken sites and builds one- to five-page websites, fixed price and fixed date. Easy-Parking and LapToPia are live.";

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

const work = [
  {
    number: "01",
    name: "Easy-Parking",
    href: "/work/easy-parking",
    problem:
      "Parking operators need one register for monthly members, walk-ins and unpaid dues.",
    stack: "Next.js · TypeScript · Tailwind CSS",
    outcome:
      "The interface presents each vehicle's monthly dues, payments and balance in one view.",
    image: "/shots/easyparking.webp",
    imageAlt:
      "Easy-Parking monthly dues screen showing vehicle billing, payments and balances.",
    imageWidth: 1900,
    imageHeight: 950,
  },
  {
    number: "02",
    name: "LapToPia",
    href: "/work/lapitopia",
    problem:
      "Hardware buyers need one place to browse laptops, PCs, servers and miners.",
    stack: "Next.js · TypeScript · Tailwind CSS",
    outcome:
      "The storefront organizes complete computer systems and product categories for browsing.",
    image: "/shots/lapitopia.webp",
    imageAlt:
      "LapToPia hardware storefront featuring computer systems and product categories.",
    imageWidth: 1917,
    imageHeight: 1078,
  },
] as const;

const services = [
  {
    label: "Audit",
    description:
      "I check a live site for the issue you are already seeing, then repair the root cause and ship it quickly.",
  },
  {
    label: "Build",
    description:
      "I make a one-page site with a hero, services, contact form and Google Business Profile, then deploy and hand it over.",
  },
  {
    label: "Build + booking",
    description:
      "I make up to five pages with a booking or enquiry flow and a copywriting pass, then deploy and hand it over.",
  },
] as const;

export default function HomePage() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="border-b border-rule">
        <Nav />
      </header>
      <main className="mx-auto w-full max-w-[1180px] px-6">
        <Reveal>
          <section
            aria-labelledby="home-title"
            className="py-[calc(var(--spacing-section)/2)]"
          >
            <p className="font-mono text-meta uppercase tracking-[0.18em] text-muted">
              Syed Ali — web developer · Quetta, Pakistan
            </p>
            <h1
              id="home-title"
              className="mt-6 max-w-[12ch] font-display text-display leading-[0.98] text-ink"
            >
              Websites small businesses can actually run.
            </h1>
            <p className="mt-6 max-w-[54ch] text-[1.15rem] leading-relaxed text-ink">
              {positioning}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#offer"
                className="inline-flex items-center justify-center bg-ink px-5 py-3 font-mono text-meta text-paper underline-offset-4 transition-colors hover:text-ink"
              >
                See pricing
              </a>
              <a
                href={whatsappUrl}
                className="inline-flex items-center justify-center font-mono text-meta text-ink underline decoration-rule underline-offset-4"
              >
                WhatsApp me
              </a>
            </div>
            <p className="mt-4 font-mono text-meta text-muted">
              Easy-Parking and LapToPia are both live — built end to end.
            </p>
          </section>
        </Reveal>

        <section
          aria-labelledby="work-title"
          className="py-[calc(var(--spacing-section)/2)]"
        >
          <Reveal>
            <h2
              id="work-title"
              className="mb-8 font-display text-h2 text-ink"
            >
              Selected work
            </h2>
          </Reveal>
          {work.map((project, index) => (
            <CaseRow
              key={project.name}
              {...project}
              delay={index * 0.06}
            />
          ))}
          <div className="border-t border-rule" />
        </section>

        <section
          aria-labelledby="services-title"
          className="py-[calc(var(--spacing-section)/2)]"
        >
          <Reveal>
            <h2
              id="services-title"
              className="mb-8 font-display text-h2 text-ink"
            >
              What I do
            </h2>
          </Reveal>
          {services.map((service, index) => (
            <Reveal key={service.label} delay={index * 0.06}>
              <div className="grid gap-3 border-t border-rule py-5 sm:grid-cols-[4fr_7fr] sm:gap-8">
                <p className="font-mono text-meta text-muted">
                  {service.label}
                </p>
                <p className="max-w-[62ch] text-body leading-relaxed text-ink">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-rule" />
        </section>

        <section
          aria-labelledby="offer-title"
          className="py-[calc(var(--spacing-section)/2)]"
        >
          <Reveal>
            <h2
              id="offer-title"
              className="font-display text-h2 text-ink"
            >
              Offer
            </h2>
            <p className="mt-4 max-w-[62ch] text-body leading-relaxed text-muted">
              These are my founding rates for clearly scoped website work.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-3 border-t border-rule pt-5 md:grid-cols-3">
            <p className="font-mono text-meta text-muted">01 Send the URL</p>
            <p className="font-mono text-meta text-muted">
              02 Fixed quote in one day
            </p>
            <p className="font-mono text-meta text-muted">
              03 Live on the agreed date
            </p>
          </div>
          <dl className="mt-8">
            {offer.map((tier, index) => (
              <Reveal key={tier.name} delay={index * 0.06}>
                <div className="grid gap-4 border-t border-rule py-6 md:grid-cols-[1.2fr_1fr] md:items-end md:gap-8">
                  <div>
                    <dt className="text-body text-ink">{tier.name}</dt>
                    <dd className="mt-2 font-mono text-meta text-muted">
                      {tier.turnaround}
                    </dd>
                  </div>
                  <div className="md:text-right">
                    <dd className="font-display text-[2.5rem] leading-none text-ink md:text-[3.25rem]">
                      ${tier.price}
                    </dd>
                  </div>
                  <dd className="col-span-full max-w-[62ch] text-body leading-relaxed text-muted">
                    {tier.includes}
                  </dd>
                </div>
              </Reveal>
            ))}
            <div className="border-t border-rule" />
          </dl>
          <p className="mt-4 font-mono text-meta text-muted">
            Prices in USD, fixed. No hourly billing, no lock-in.
          </p>
        </section>

        <section
          aria-labelledby="faq-title"
          className="py-[calc(var(--spacing-section)/2)]"
        >
          <Reveal>
            <h2 id="faq-title" className="mb-8 font-display text-h2 text-ink">
              Questions
            </h2>
          </Reveal>
          <Reveal>
            <Faq />
          </Reveal>
        </section>

        <Reveal>
          <section
            aria-labelledby="contact-title"
            className="border-t border-rule py-[calc(var(--spacing-section)/2)]"
          >
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-4">
                <h2
                  id="contact-title"
                  className="font-display text-[2.4rem] leading-none text-ink md:text-[2.8rem]"
                >
                  Contact
                </h2>
                <p className="mt-4 max-w-[62ch] text-body leading-relaxed text-muted">
                  I reply within one working day.
                </p>
                <a
                  href={`mailto:${email}`}
                  className="mt-5 inline-block font-mono text-meta text-ink underline decoration-rule underline-offset-4"
                >
                  {email}
                </a>
                <a
                  href={whatsappUrl}
                  className="mt-3 block font-mono text-meta text-ink underline decoration-rule underline-offset-4"
                  aria-label={`WhatsApp: ${phone}`}
                >
                  WhatsApp · {phone}
                </a>
              </div>
              <div className="lg:col-span-6 lg:col-start-6">
                <div
                  data-testimonial="placeholder"
                  aria-label="Testimonial placeholder"
                  className="mb-8 border-t border-rule pb-6"
                  aria-hidden="true"
                />
                <ContactForm />
              </div>
            </div>
          </section>
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}
