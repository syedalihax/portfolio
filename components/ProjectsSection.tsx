import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/portfolio-data";
import ProjectGallery from "./ProjectGallery";

export default function ProjectsSection({
  headingLevel = "h2",
}: {
  headingLevel?: "h1" | "h2";
}) {
  const Heading = headingLevel;
  const ProjectHeading = headingLevel === "h1" ? "h2" : "h3";
  const DetailHeading = headingLevel === "h1" ? "h3" : "h4";

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="mx-auto max-w-6xl border-t border-[#E2E5EB] px-6 py-20 sm:py-24"
    >
      <div className="max-w-2xl">
        <Heading
          id="work-heading"
          className="mt-3 font-display text-3xl font-bold tracking-tight text-[#14171C] sm:text-4xl"
        >
          Completed projects you can inspect live.
        </Heading>
        <p className="mt-4 text-base leading-relaxed text-[#525B6C]">
          Three builds spanning full-stack e-commerce, operational parking software,
          and a live local-business website—with clear labels distinguishing concept
          builds from real-client work.
        </p>
      </div>

      <div className="mt-12 space-y-10">
        {PROJECTS.map((project, index) => (
          <article
            key={project.id}
            className="rounded-2xl border border-[#E2E5EB] bg-white/95 p-6 sm:p-8"
          >
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
              <div className="order-2 lg:order-1 lg:col-span-6">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs text-[#525B6C] tabular-nums">
                  <span className="font-semibold text-[#2563EB]">
                    0{index + 1}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{project.categoryLabel}</span>
                  <span aria-hidden="true">·</span>
                  <span>{project.buildDuration}</span>
                </div>

                <ProjectHeading className="mt-2 font-display text-2xl font-bold tracking-tight text-[#14171C] sm:text-3xl">
                  {project.title}
                </ProjectHeading>

                <p className="mt-1.5 text-xs font-medium text-[#525B6C]">
                  {project.clientStatusNote}
                </p>

                <p className="mt-4 text-sm leading-relaxed text-[#525B6C] sm:text-base">
                  {project.summary}
                </p>

                <div className="mt-5 space-y-4 border-t border-[#E2E5EB] pt-5">
                  <div>
                    <DetailHeading className="font-mono text-xs font-semibold text-[#14171C]">
                      {project.highlightsLabel}
                    </DetailHeading>
                    <ul className="mt-2 space-y-1.5 text-sm text-[#525B6C]">
                      {project.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span
                            aria-hidden="true"
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2563EB]"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {project.secondaryHighlights && project.secondaryHighlightsLabel && (
                    <div>
                      <DetailHeading className="font-mono text-xs font-semibold text-[#14171C]">
                        {project.secondaryHighlightsLabel}
                      </DetailHeading>
                      <ul className="mt-2 space-y-1.5 text-sm text-[#525B6C]">
                        {project.secondaryHighlights.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span
                              aria-hidden="true"
                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#14171C]"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="mt-5 border-t border-[#E2E5EB] pt-4">
                  <p className="font-mono text-xs text-[#525B6C]">
                    <span className="font-semibold text-[#14171C]">Stack: </span>
                    {project.techStack.join(" · ")}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-[#525B6C]">
                    {project.footnote}
                  </p>
                </div>

                <div className="mt-6">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.title} live project`}
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-[#E2E5EB] bg-[#F5F6F8] px-4 py-2.5 text-sm font-medium text-[#14171C] transition-colors hover:border-[#2563EB] hover:bg-white hover:text-[#2563EB] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
                  >
                    <span>Visit Live</span>
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="order-1 lg:order-2 lg:col-span-6">
                <ProjectGallery
                  projectTitle={project.title}
                  screenshots={project.screenshots}
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
