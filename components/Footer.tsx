import { FaLinkedin } from "react-icons/fa6";
import {
  SiFacebook,
  SiGithub,
  SiInstagram,
  SiWhatsapp,
} from "react-icons/si";
import Link from "next/link";
import { NAV_LINKS, SITE_INFO, SOCIAL_LINKS } from "@/lib/portfolio-data";

const SOCIAL_ICONS = {
  GitHub: SiGithub,
  LinkedIn: FaLinkedin,
  Instagram: SiInstagram,
  Facebook: SiFacebook,
} as const;

const SOCIAL_COLORS = {
  GitHub: "#181717",
  LinkedIn: "#0A66C2",
  Instagram: "#E4405F",
  Facebook: "#0866FF",
} as const;

export default function Footer() {
  const year = new Date().getFullYear();
  const brandName = `${SITE_INFO.name} Hax`;

  return (
    <footer className="border-t border-[#E2E5EB] bg-white/95">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-display text-lg font-bold text-[#14171C]">
              {brandName}
            </p>
            <p className="mt-1 font-mono text-xs text-[#525B6C]">
              {SITE_INFO.title}
              <span aria-hidden="true" className="mx-2">
                ·
              </span>
              {SITE_INFO.experience}
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#525B6C]">
              Building responsive websites, landing pages, full-stack web
              applications, and React Native mobile apps.
            </p>
          </div>

          <div className="md:col-span-3">
            <h2 className="font-mono text-xs font-semibold text-[#14171C]">
              Quick Links
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-[#525B6C]">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-[#14171C]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h2 className="font-mono text-xs font-semibold text-[#14171C]">
              Contact &amp; Social
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-[#525B6C]">
              <li>
                <a
                  href={SITE_INFO.emailHref}
                  className="transition-colors hover:text-[#14171C]"
                >
                  {SITE_INFO.email}
                </a>
              </li>
              <li>
                <a
                  href={SITE_INFO.phoneHref}
                  className="transition-colors hover:text-[#14171C]"
                >
                  {SITE_INFO.phoneDisplay}
                </a>
              </li>
            </ul>

            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href={SITE_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Syed Ali on WhatsApp"
                title="WhatsApp"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#E2E5EB] bg-white transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
                style={{ color: "#25D366" }}
              >
                <SiWhatsapp size={20} aria-hidden="true" />
              </a>
              {SOCIAL_LINKS.map((social) => {
                if (social.label === "Website") return null;

                const Icon = SOCIAL_ICONS[social.label];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.ariaLabel}
                    title={social.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#E2E5EB] bg-white transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
                    style={{ color: SOCIAL_COLORS[social.label] }}
                  >
                    <Icon size={20} aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-[#E2E5EB] pt-6 text-xs text-[#525B6C] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {brandName}. All rights reserved.
          </p>
          <p className="font-mono">{SITE_INFO.handle}</p>
        </div>
      </div>
    </footer>
  );
}
