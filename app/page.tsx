import type { Metadata } from "next";
import Image from "next/image";
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
    <div className="min-h-screen bg-[var(--paper)] text-[var(--ink)]">
      <Nav />

      <main>
        <section className="band-paper">
          <div className="mx-auto w-full max-w-[1360px] px-[clamp(20px,4vw,56px)] py-[clamp(88px,10vw,140px)]">
            <Reveal>
              <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
                <div className="lg:col-span-7">
                  <p className="section-label text-[var(--muted)]">
                    WEB DEVELOPER — QUETTA, PK — REMOTE
                  </p>
                  <h1
                    id="home-title"
                    className="mt-6 max-w-[11ch] font-sans text-[clamp(3.2rem,8vw,6.4rem)] font-semibold leading-[0.92] tracking-[-0.045em] text-[var(--ink)]"
                  >
                    Websites that make people reply.
                  </h1>
                  <p className="mt-6 max-w-[54ch] text-[17px] leading-7 text-[var(--muted)]">
                    {positioning}
                  </p>
                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <a
                      href="#offer"
                      className="inline-flex min-h-[46px] items-center justify-center border border-[var(--ink)] bg-[var(--ink)] px-5 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--paper)]"
                    >
                      See pricing
                    </a>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center justify-center border border-[#25D366] bg-[#25D366] px-4 font-mono text-[11px] uppercase tracking-[0.14em] text-[#0f1f18]"
                    >
                      WhatsApp ↗
                    </a>
                    <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--muted)]">
                      Replies within one working day
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 lg:flex lg:justify-end">
                  <div className="w-full max-w-[420px]">
                    <Image
                      src="/photos/syed-ali.webp"
                      alt="Portrait of Syed Ali, web developer"
                      width={900}
                      height={900}
                      priority
                      className="h-auto w-full border border-[var(--rule)] bg-[var(--paper)]"
                    />
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="mt-12 border-t border-[var(--rule)] pt-4">
              <div className="grid gap-6 md:grid-cols-3">
                <div>
                  <p className="section-label text-[var(--muted)]">Products</p>
                  <p className="mt-2 font-mono text-[18px] text-[var(--ink)]">2 shipped</p>
                </div>
                <div>
                  <p className="section-label text-[var(--muted)]">Pricing</p>
                  <p className="mt-2 font-mono text-[18px] text-[var(--ink)]">Fixed price</p>
                </div>
                <div>
                  <p className="section-label text-[var(--muted)]">Response</p>
                  <p className="mt-2 font-mono text-[18px] text-[var(--ink)]">One working day</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="band-forest">
          <div className="mx-auto w-full max-w-[1360px] px-[clamp(20px,4vw,56px)] py-[clamp(88px,10vw,140px)]">
            <Reveal>
              <div className="grid gap-4 lg:grid-cols-12 lg:items-end">
                <div className="lg:col-span-2">
                  <p className="section-label text-[var(--muted-inv)]">01</p>
                </div>
                <div className="lg:col-span-7">
                  <h2 className="font-sans text-[clamp(2.2rem,4.6vw,3.6rem)] font-semibold leading-[0.98] tracking-[-0.03em] text-[var(--paper)]">
                    Selected work
                  </h2>
                </div>
                <div className="lg:col-span-3 lg:text-right">
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--muted-inv)]">
                    Recent builds
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="mt-6">
              {projects.map((project, index) => (
                <CaseRow
                  key={project.name}
                  {...project}
                  delay={index * 0.06}
                  reverse={index === 1}
                  headingLevel="h3"
                />
              ))}
            </div>
          </div>
        </section>

        <section className="band-sand">
          <div className="mx-auto w-full max-w-[1360px] px-[clamp(20px,4vw,56px)] py-[clamp(88px,10vw,140px)]">
            <Reveal>
              <div className="grid gap-4 lg:grid-cols-12 lg:items-end">
                <div className="lg:col-span-2">
                  <p className="section-label text-[var(--muted)]">02</p>
                </div>
                <div className="lg:col-span-7">
                  <h2 className="font-sans text-[clamp(2.2rem,4.6vw,3.6rem)] font-semibold leading-[0.98] tracking-[-0.03em] text-[var(--ink)]">
                    What I do
                  </h2>
                </div>
              </div>
            </Reveal>

            <div className="mt-8 space-y-0 border-t border-[var(--rule)]">
              {services.map((service, index) => (
                <Reveal key={service.label} delay={index * 0.06}>
                  <div className="grid gap-4 border-b border-[var(--rule)] py-5 transition-colors hover:bg-[rgba(16,16,16,0.03)] md:grid-cols-[9rem_1fr_10rem] md:items-start md:gap-8">
                    <p className="section-label text-[var(--muted)]">{String(index + 1).padStart(2, "0")}</p>
                    <div>
                      <h3 className="font-sans text-[clamp(1.4rem,2vw,1.9rem)] font-semibold tracking-[-0.03em] text-[var(--ink)]">
                        {service.label}
                      </h3>
                      <p className="mt-2 max-w-[62ch] text-[17px] leading-7 text-[var(--muted)]">
                        {service.description}
                      </p>
                    </div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--muted)] md:text-right">
                      {service.label === "Audit" ? "$99" : service.label === "Build" ? "$199" : "$499"}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="offer" className="band-paper">
          <div className="mx-auto w-full max-w-[1360px] px-[clamp(20px,4vw,56px)] py-[clamp(88px,10vw,140px)]">
            <Reveal>
              <div className="grid gap-4 lg:grid-cols-12 lg:items-end">
                <div className="lg:col-span-2">
                  <p className="section-label text-[var(--muted)]">03</p>
                </div>
                <div className="lg:col-span-7">
                  <h2 className="font-sans text-[clamp(2.2rem,4.6vw,3.6rem)] font-semibold leading-[0.98] tracking-[-0.03em] text-[var(--ink)]">
                    Offer
                  </h2>
                </div>
              </div>
              <p className="mt-5 max-w-[52ch] text-[17px] leading-7 text-[var(--muted)]">
                These are my founding rates for clearly scoped website work.
              </p>
            </Reveal>

            <dl className="mt-10 space-y-0 border-t border-[var(--rule)]">
              {offer.map((tier, index) => (
                <Reveal key={tier.name} delay={index * 0.06}>
                  <div className="grid gap-5 border-b border-[var(--rule)] py-6 md:grid-cols-[1.2fr_0.8fr] md:items-end md:gap-8">
                    <div>
                      <dt className="font-sans text-[clamp(1.4rem,2vw,1.9rem)] font-semibold tracking-[-0.03em] text-[var(--ink)]">
                        {tier.name}
                      </dt>
                      <dd className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--muted)]">
                        {tier.turnaround}
                      </dd>
                    </div>
                    <div className="md:text-right">
                      <dd className="font-sans text-[clamp(2.8rem,5vw,4.4rem)] font-medium tracking-[-0.04em] text-[var(--ink)]">
                        ${tier.price}
                      </dd>
                    </div>
                    <dd className="col-span-full max-w-[62ch] text-[17px] leading-7 text-[var(--muted)]">
                      {tier.includes}
                    </dd>
                  </div>
                </Reveal>
              ))}
            </dl>

            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--muted)]">
              Prices in USD, fixed. No hourly billing, no lock-in.
            </p>
          </div>
        </section>

        <section className="band-sand">
          <div className="mx-auto w-full max-w-[1360px] px-[clamp(20px,4vw,56px)] py-[clamp(88px,10vw,140px)]">
            <Reveal>
              <div className="grid gap-8 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <p className="section-label text-[var(--muted)]">04</p>
                  <h2 className="mt-4 font-sans text-[clamp(2.2rem,4.6vw,3.6rem)] font-semibold leading-[0.98] tracking-[-0.03em] text-[var(--ink)]">
                    Questions
                  </h2>
                </div>
                <div className="lg:col-span-8">
                  <Faq />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="band-clay">
          <div className="mx-auto w-full max-w-[1360px] px-[clamp(20px,4vw,56px)] py-[clamp(88px,10vw,140px)]">
            <Reveal>
              <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
                <div className="lg:col-span-5">
                  <p className="section-label text-[rgba(16,16,16,0.7)]">05</p>
                  <h2 className="mt-4 font-sans text-[clamp(2.2rem,4.6vw,3.6rem)] font-semibold leading-[0.98] tracking-[-0.03em] text-[var(--ink)]">
                    Tell me what you need
                  </h2>
                  <p className="mt-5 max-w-[42ch] text-[17px] leading-7 text-[rgba(16,16,16,0.74)]">
                    I reply within one working day.
                  </p>
                  <div className="mt-8 space-y-3">
                    <a
                      href={`mailto:${email}`}
                      className="block font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--ink)]"
                    >
                      {email}
                    </a>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`WhatsApp: ${phone}`}
                      className="block font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--ink)]"
                    >
                      WhatsApp · {phone}
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-7">
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
