import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SITE_INFO } from "@/lib/portfolio-data";

export default function HeroSection() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 pb-20 pt-16 sm:pb-28 sm:pt-24 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)] lg:items-start lg:gap-10 lg:pb-36 lg:pt-28 xl:px-4"
    >
      <div className="max-w-2xl rounded-2xl bg-[#F5F6F8]/90 p-6 sm:p-8 lg:bg-transparent lg:p-0">
        <p className="font-mono text-xs font-medium tracking-wide text-[#525B6C]">
          {SITE_INFO.title}
          <span aria-hidden="true" className="mx-2 text-[#94A3B8]">
            ·
          </span>
          {SITE_INFO.experience}
        </p>

        <h1
          id="hero-heading"
          className="mt-4 font-display text-4xl font-bold leading-[1.08] tracking-tight text-[#14171C] sm:text-5xl lg:text-[3.5rem]"
        >
          I build digital experiences that work beautifully everywhere.
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-[#525B6C] sm:text-lg">
          I&apos;m <strong className="font-semibold text-[#14171C]">{SITE_INFO.name}</strong>, a
          software engineer with {SITE_INFO.experience} building responsive websites,
          web applications, and React Native mobile applications — from focused landing
          pages to full-stack digital products.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-[#2563EB] px-6 py-3 text-sm font-medium text-white whitespace-nowrap transition-colors duration-150 hover:bg-[#1D4ED8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
          >
            <span>Let&apos;s Work Together</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>

          <Link
            href="/projects"
            className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-[#E2E5EB] bg-white px-6 py-3 text-sm font-medium text-[#14171C] whitespace-nowrap transition-colors duration-150 hover:border-[#CBD2DC] hover:bg-[#F8FAFC] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
          >
            Explore My Work
          </Link>
        </div>

      </div>

      <figure className="mx-auto flex h-[300px] w-full max-w-[340px] items-end justify-center sm:h-[380px] sm:max-w-[400px] lg:h-[500px] lg:max-w-[460px]">
        <Image
          src="/profile-photo.png"
          alt={`${SITE_INFO.name}, software engineer`}
          width={500}
          height={499}
          priority
          sizes="(max-width: 640px) 340px, (max-width: 1024px) 400px, 460px"
          className="h-full w-full object-contain object-bottom"
        />
      </figure>

      <dl className="grid grid-cols-1 gap-4 border-t border-[#E2E5EB] pt-6 sm:grid-cols-3 sm:gap-6 lg:col-start-1">
        <div>
          <dt className="font-mono text-xs text-[#525B6C]">Websites</dt>
          <dd className="mt-1 text-sm font-medium text-[#14171C]">
            Landing pages &amp; business sites
          </dd>
        </div>
        <div>
          <dt className="font-mono text-xs text-[#525B6C]">Web Applications</dt>
          <dd className="mt-1 text-sm font-medium text-[#14171C]">
            Full-stack products &amp; dashboards
          </dd>
        </div>
        <div>
          <dt className="font-mono text-xs text-[#525B6C]">Mobile Apps</dt>
          <dd className="mt-1 text-sm font-medium text-[#14171C]">
            Cross-platform React Native
          </dd>
        </div>
      </dl>
    </section>
  );
}
