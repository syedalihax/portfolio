import type { Metadata } from "next";
import CaseRow from "../../components/CaseRow";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import Reveal from "../../components/Reveal";
import { projects, url } from "../../lib/site";

const title = "Work | Syed Ali — Web Developer";
const description =
  "Selected website projects by Syed Ali, a web developer working remotely from Quetta, Pakistan.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    type: "website",
    url: `${url}/work`,
    title,
    description,
    images: [new URL("/opengraph-image", url).toString()],
  },
  alternates: {
    canonical: `${url}/work`,
  },
};

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-[var(--paper)] text-[var(--ink)]">
      <Nav />

      <main>
        <section className="band-paper">
          <div className="mx-auto w-full max-w-[1360px] px-[clamp(20px,4vw,56px)] py-[clamp(88px,10vw,140px)]">
            <Reveal>
              <div className="grid gap-5 lg:grid-cols-12">
                <div className="lg:col-span-2">
                  <p className="section-label text-[var(--muted)]">Selected projects</p>
                </div>
                <div className="lg:col-span-10">
                  <h1 className="font-sans text-[clamp(3.2rem,8vw,6.4rem)] font-semibold leading-[0.92] tracking-[-0.045em] text-[var(--ink)]">
                    Work
                  </h1>
                  <p className="mt-6 max-w-[62ch] text-[17px] leading-7 text-[var(--muted)]">
                    Website projects built around the records and products people
                    need to find.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <div className="mx-auto w-full max-w-[1360px] px-[clamp(20px,4vw,56px)] pb-[clamp(88px,10vw,140px)]">
          {projects.map((project, index) => (
            <section
              key={project.name}
              className={index % 2 === 0 ? "band-paper" : "band-sand"}
            >
              <div className="mx-auto w-full max-w-[1360px] py-[clamp(56px,7vw,90px)]">
                <CaseRow
                  {...project}
                  delay={index * 0.06}
                  reverse={index === 1}
                  headingLevel="h2"
                  theme="light"
                />
              </div>
            </section>
          ))}
        </div>

        <section className="band-clay">
          <div className="mx-auto w-full max-w-[1360px] px-[clamp(20px,4vw,56px)] py-[clamp(88px,10vw,140px)]">
            <a
              href="/contact"
              className="inline-flex min-h-[46px] items-center justify-center border border-[var(--ink)] bg-[var(--ink)] px-5 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--paper)]"
            >
              Start a project
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
