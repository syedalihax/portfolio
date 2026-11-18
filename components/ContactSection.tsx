import { Mail, MessageSquare, Phone } from "lucide-react";
import { SITE_INFO, type PricingTier } from "@/lib/portfolio-data";
import ContactForm from "./ContactForm";

export default function ContactSection({
  selectedPlan,
  headingLevel = "h2",
}: {
  selectedPlan?: PricingTier;
  headingLevel?: "h1" | "h2";
}) {
  const Heading = headingLevel;

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="mx-auto max-w-6xl border-t border-[#E2E5EB] px-6 py-20 sm:py-24"
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <Heading
            id="contact-heading"
            className="mt-3 font-display text-3xl font-bold tracking-tight text-[#14171C] sm:text-4xl"
          >
            Let&apos;s discuss your website or application.
          </Heading>
          <p className="mt-4 text-base leading-relaxed text-[#525B6C]">
            Send your requirements through the inquiry form or reach out directly via
            WhatsApp, phone, or email.
          </p>

          <div className="mt-8 space-y-3">
            <a
              href={SITE_INFO.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[56px] items-center gap-4 rounded-xl border border-[#E2E5EB] bg-white/95 p-4 transition-colors hover:border-[#2563EB] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
            >
              <MessageSquare
                className="h-5 w-5 shrink-0 text-[#2563EB]"
                aria-hidden="true"
              />
              <div>
                <p className="font-mono text-xs text-[#525B6C]">WhatsApp</p>
                <p className="text-sm font-semibold text-[#14171C]">
                  {SITE_INFO.phoneDisplay}
                </p>
              </div>
            </a>

            <a
              href={SITE_INFO.phoneHref}
              className="flex min-h-[56px] items-center gap-4 rounded-xl border border-[#E2E5EB] bg-white/95 p-4 transition-colors hover:border-[#2563EB] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
            >
              <Phone className="h-5 w-5 shrink-0 text-[#2563EB]" aria-hidden="true" />
              <div>
                <p className="font-mono text-xs text-[#525B6C]">Phone</p>
                <p className="text-sm font-semibold text-[#14171C]">
                  {SITE_INFO.phoneDisplay}
                </p>
              </div>
            </a>

            <a
              href={SITE_INFO.emailHref}
              className="flex min-h-[56px] items-center gap-4 rounded-xl border border-[#E2E5EB] bg-white/95 p-4 transition-colors hover:border-[#2563EB] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
            >
              <Mail className="h-5 w-5 shrink-0 text-[#2563EB]" aria-hidden="true" />
              <div>
                <p className="font-mono text-xs text-[#525B6C]">Email</p>
                <p className="text-sm font-semibold text-[#14171C]">
                  {SITE_INFO.email}
                </p>
              </div>
            </a>
          </div>
        </div>

        <div className="lg:col-span-7">
          <ContactForm
            selectedPlan={selectedPlan}
            successHeadingLevel={headingLevel === "h1" ? "h2" : "h3"}
          />
        </div>
      </div>
    </section>
  );
}
