import { SERVICES } from "@/lib/portfolio-data";

export default function ServicesSection({
  headingLevel = "h2",
}: {
  headingLevel?: "h1" | "h2";
}) {
  const Heading = headingLevel;
  const ServiceHeading = headingLevel === "h1" ? "h2" : "h3";

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="mx-auto max-w-6xl border-t border-[#E2E5EB] px-6 py-20 sm:py-24"
    >
      <div className="max-w-2xl">
        <Heading
          id="services-heading"
          className="mt-3 font-display text-3xl font-bold tracking-tight text-[#14171C] sm:text-4xl"
        >
          What I build for businesses and product teams.
        </Heading>
        <p className="mt-4 text-base leading-relaxed text-[#525B6C]">
          Every engagement is scoped clearly around your goals. Features such as
          authentication, dashboards, or admin panels are quoted and included based on
          confirmed requirements.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {SERVICES.map((service) => (
          <article
            key={service.number}
            className="flex flex-col justify-between rounded-2xl border border-[#E2E5EB] bg-white/95 p-6 sm:p-7"
          >
            <div>
              <p className="font-mono text-xs font-medium text-[#2563EB] tabular-nums">
                {service.number}
              </p>
              <ServiceHeading className="mt-3 font-display text-xl font-bold text-[#14171C]">
                {service.title}
              </ServiceHeading>
              <p className="mt-3 text-sm leading-relaxed text-[#525B6C]">
                {service.description}
              </p>

              <ul className="mt-5 space-y-2.5 border-t border-[#E2E5EB] pt-5 text-sm text-[#14171C]">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2563EB]"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-6 border-t border-[#E2E5EB] pt-4 text-xs leading-relaxed text-[#525B6C]">
              {service.scopeNote}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
