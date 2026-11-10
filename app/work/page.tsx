import type { Metadata } from "next";
import CaseRow from "../../components/CaseRow";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import Reveal from "../../components/Reveal";
import { url } from "../../lib/site";

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

const projects = [
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
