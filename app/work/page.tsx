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
    <div className="min-h-screen bg-paper text-ink">
      <header className="border-b border-rule">
        <Nav />
      </header>
      <main className="mx-auto w-full max-w-[1180px] px-6">
        <Reveal>
          <section aria-labelledby="work-title" className="py-section">
            <p className="font-mono text-meta text-muted">Selected projects</p>
            <h1
              id="work-title"
              className="mt-4 font-display text-display leading-[0.98] text-ink"
            >
              Work
            </h1>
            <p className="mt-6 max-w-[62ch] text-body leading-relaxed text-muted">
              Website projects built around the records and products people
              need to find.
            </p>
          </section>
        </Reveal>
        <section aria-label="Selected projects" className="pb-section">
          {projects.map((project, index) => (
            <CaseRow
              key={project.name}
              {...project}
              delay={index * 0.06}
            />
          ))}
          <div className="border-t border-rule" />
        </section>
      </main>
      <Footer />
    </div>
  );
}
