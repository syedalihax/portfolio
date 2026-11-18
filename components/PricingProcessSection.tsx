import { ArrowDown, ArrowRight } from "lucide-react";
import { PRICING_TIERS, PROCESS_STEPS } from "@/lib/portfolio-data";
import Link from "next/link";

export default function PricingProcessSection() {
  return (
    <>
      <section
        id="pricing"
        aria-labelledby="pricing-heading"
        className="mx-auto max-w-6xl border-t border-[#E2E5EB] px-6 py-20 sm:py-24"
      >
        <div className="max-w-2xl">
          <h2
            id="pricing-heading"
            className="mt-3 font-display text-3xl font-bold tracking-tight text-[#14171C] sm:text-4xl"
          >
            Transparent starting prices.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#525B6C]">
            Displayed amounts are starting prices, not flat unlimited packages.
            Final pricing depends on page count, feature complexity, integrations,
            content readiness, and delivery requirements.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PRICING_TIERS.map((tier) => (
            <article
              key={tier.name}
              className={`flex flex-col justify-between rounded-2xl border p-6 shadow-sm transition-[transform,box-shadow] duration-200 ease-out hover:shadow-md hover:shadow-[#14171C]/10 motion-safe:hover:-translate-y-1 motion-reduce:transition-none ${
                tier.name === "Premium"
                  ? "border-2 border-[#B08A3E] bg-white hover:border-[#8F6C28]"
                  : tier.name === "Hourly"
                    ? "border-2 border-[#3D8B60] bg-white/95 hover:border-[#2D704B]"
                    : tier.highlighted
                      ? "border-[#2563EB] bg-white"
                      : "border-[#E2E5EB] bg-white/95"
              }`}
            >
              <div>
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-display text-lg font-bold text-[#14171C]">
                    {tier.name}
                  </h3>
                  <span className="font-mono text-xs text-[#525B6C]">
                    {tier.priceLabel}
                  </span>
                </div>

                <p className="mt-3 font-display text-3xl font-bold tracking-tight text-[#14171C] tabular-nums">
                  {tier.priceAmount}
                </p>

                <p className="mt-3 text-sm leading-relaxed text-[#525B6C]">
                  {tier.positioning}
                </p>

                <ul className="mt-5 space-y-2 border-t border-[#E2E5EB] pt-5 text-xs leading-relaxed text-[#14171C]">
                  {tier.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2">
                      <span
                        aria-hidden="true"
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2563EB]"
                      />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-2">
                <Link
                  href={`/contact?plan=${encodeURIComponent(tier.name.toLowerCase())}`}
                  className={`inline-flex min-h-[42px] w-full items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] ${
                    tier.highlighted
                      ? "bg-[#2563EB] text-white hover:bg-[#1D4ED8]"
                      : tier.name === "Premium"
                        ? "border border-[#B08A3E] bg-[#F5F6F8] text-[#14171C] hover:border-[#8F6C28] hover:bg-white hover:text-[#14171C]"
                        : tier.name === "Hourly"
                          ? "border border-[#3D8B60] bg-[#F5F6F8] text-[#14171C] hover:border-[#2D704B] hover:bg-white hover:text-[#14171C]"
                          : "border border-[#2563EB] bg-[#F5F6F8] text-[#14171C] hover:border-[#1D4ED8] hover:bg-white hover:text-[#2563EB]"
                  }`}
                >
                  Request a Quote
                </Link>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 text-xs leading-relaxed text-[#525B6C]">
          Before starting any fixed-price project, we agree in writing on included
          pages and features, revision scope, delivery schedule, client-provided
          assets, hosting/deployment responsibilities, and post-launch support. Mobile
          applications, complex e-commerce platforms, payment gateways, and large
          dashboards require a custom quote. The $10/hr figure reflects Syed
          Ali&apos;s introductory hourly rate.
        </p>
      </section>

      <section
        id="process"
        aria-labelledby="process-heading"
        className="mx-auto max-w-6xl border-t border-[#E2E5EB] px-6 py-20 sm:py-24"
      >
        <div className="max-w-2xl">
          <h2
            id="process-heading"
            className="mt-3 font-display text-3xl font-bold tracking-tight text-[#14171C] sm:text-4xl"
          >
            How we go from idea to live deployment.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#525B6C]">
            Timelines are confirmed once requirements and scope are clear.
          </p>
        </div>

        <ol className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
          {PROCESS_STEPS.map((item, index) => (
            <li
              key={item.step}
              className="relative rounded-2xl border border-[#E2E5EB] bg-white/95 p-6"
            >
              <span className="font-mono text-xs font-semibold text-[#2563EB] tabular-nums">
                {item.step}
              </span>
              <h3 className="mt-3 font-display text-base font-bold text-[#14171C]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#525B6C]">
                {item.description}
              </p>
              {index < PROCESS_STEPS.length - 1 && (
                <>
                  <ArrowDown
                    aria-hidden="true"
                    className="absolute -bottom-5 left-1/2 z-10 h-4 w-4 -translate-x-1/2 text-[#2563EB] md:hidden"
                  />
                  <ArrowRight
                    aria-hidden="true"
                    className="absolute -right-5 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 text-[#2563EB] lg:block"
                  />
                </>
              )}
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
