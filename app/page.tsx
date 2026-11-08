import type { Metadata } from "next";
import CaseRow from "../components/CaseRow";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Reveal from "../components/Reveal";
import {
  availability,
  email,
  faqs,
  location,
  name,
  offer,
  positioning,
  url,
} from "../lib/site";

const title = "Web Developer | Syed Ali";
const description =
  "Syed Ali fixes and builds websites for small businesses, working remotely from Quetta, Pakistan.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    type: "website",
    url,
    title,
    description,
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
    label: "Fix",
    description:
      "I repair one specific issue in an existing website, from a broken enquiry form to a page that will not load.",
  },
  {
    label: "Build",
    description:
      "I make a one-page site with a hero, services, contact form and Google Business Profile, then deploy and hand it over.",
  },
  {
    label: "Build plus",
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
            className="pt-16 pb-section"
          >
            <h1
              id="home-title"
              className="font-display text-display leading-[0.98] text-ink"
            >
              {name}
            </h1>
            <p className="mt-6 max-w-[62ch] text-body leading-relaxed text-ink">
              {positioning}
            </p>
            <p className="mt-4 font-mono text-meta text-muted">
              {location} · {availability}
            </p>
          </section>
        </Reveal>

        <section
          aria-labelledby="work-title"
          className="py-section"
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

        <section aria-labelledby="services-title" className="py-section">
          <Reveal>
            <h2
              id="services-title"
              className="mb-8 font-display text-h2 text-ink"
            >
              What I do
            </h2>
          </Reveal>
          <div>
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
          </div>
        </section>

        <section aria-labelledby="offer-title" className="py-section">
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
          <dl className="mt-8">
            {offer.map((tier, index) => (
              <Reveal key={tier.name} delay={index * 0.06}>
                <div className="grid grid-cols-2 gap-x-6 gap-y-3 border-t border-rule py-5 md:grid-cols-[1fr_2fr_1fr_auto] md:items-start md:gap-8">
                  <dt className="font-display text-h2 text-ink">
                    {tier.name}
                  </dt>
                  <dd className="font-mono text-meta text-accent md:col-start-4 md:row-start-1">
                    ${tier.price} USD
                  </dd>
                  <dd className="col-span-2 max-w-[62ch] text-body leading-relaxed text-muted md:col-span-1 md:col-start-2 md:row-start-1">
                    {tier.includes}
                  </dd>
                  <dd className="font-mono text-meta text-muted md:col-start-3 md:row-start-1">
                    <span className="md:hidden">Turnaround · </span>
                    {tier.turnaround}
                  </dd>
                </div>
              </Reveal>
            ))}
            <div className="border-t border-rule" />
          </dl>
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

        <Reveal>
          <section
            aria-labelledby="contact-title"
            className="border-t border-rule py-section"
          >
            <h2 id="contact-title" className="font-display text-h2 text-ink">
              Contact
            </h2>
            <p className="mt-4 max-w-[62ch] text-body leading-relaxed text-muted">
              For a website fix or build, email me.
            </p>
            <a
              href={`mailto:${email}`}
              className="mt-5 inline-block font-mono text-meta text-ink"
            >
              {email}
            </a>
          </section>
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}
