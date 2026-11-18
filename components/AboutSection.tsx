import { SITE_INFO, TECH_GROUPS } from "@/lib/portfolio-data";
import Image from "next/image";
import type { IconType } from "react-icons";
import {
  SiHtml5,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiVercel,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const TECH_GROUP_STYLES: Record<
  string,
  { icon: IconType; iconClass: string; chipClass: string }
> = {
  Frontend: {
    icon: SiHtml5,
    iconClass: "bg-[#FDEBE7] text-[#E34F26]",
    chipClass: "border-[#D6E4FF]",
  },
  Mobile: {
    icon: SiReact,
    iconClass: "bg-[#E6F8FC] text-[#149ECA]",
    chipClass: "border-[#C6EBDD]",
  },
  Backend: {
    icon: SiNodedotjs,
    iconClass: "bg-[#EAF4E7] text-[#43853D]",
    chipClass: "border-[#F8D8BD]",
  },
  "Databases & Backend Platforms": {
    icon: SiMongodb,
    iconClass: "bg-[#EAF5E8] text-[#47A248]",
    chipClass: "border-[#C8E6E8]",
  },
  "Development Tool": {
    icon: VscVscode,
    iconClass: "bg-[#E8F4FC] text-[#007ACC]",
    chipClass: "border-[#F0E0A7]",
  },
  "Deployment Platforms": {
    icon: SiVercel,
    iconClass: "bg-[#EEEEEE] text-[#111111]",
    chipClass: "border-[#DDD4F8]",
  },
};

export default function AboutSection({
  headingLevel = "h2",
}: {
  headingLevel?: "h1" | "h2";
}) {
  const Heading = headingLevel;
  const SkillsHeading = headingLevel === "h1" ? "h2" : "h3";
  const TechnologyHeading = headingLevel === "h1" ? "h3" : "h4";

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="mx-auto max-w-6xl border-t border-[#E2E5EB] px-6 py-20 sm:py-24"
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="order-1 lg:col-span-5">
          <Heading
            id="about-heading"
            className="mt-3 font-display text-3xl font-bold tracking-tight text-[#14171C] sm:text-4xl"
          >
            Practical engineering from interface to deployment.
          </Heading>
          <p className="mt-5 text-base leading-relaxed text-[#525B6C]">
            I&apos;m {SITE_INFO.name}, a software engineer with{" "}
            {SITE_INFO.experience} working across frontend interfaces, backend APIs,
            databases, and production deployment to build dependable digital products.
          </p>
          <p className="mt-4 text-base leading-relaxed text-[#525B6C]">
            My focus is straightforward problem-solving: clean code structure,
            responsive layouts that hold up on real phones and desktops, and interfaces
            that non-technical owners and operators can actually use without friction.
          </p>
        </div>

        <figure className="order-2 mx-auto flex h-[320px] w-full max-w-[340px] items-end justify-center sm:h-[360px] sm:max-w-[380px] lg:hidden">
          <Image
            src="/profile-photo.png"
            alt={`${SITE_INFO.name}, software engineer`}
            width={500}
            height={499}
            loading={headingLevel === "h1" ? "eager" : "lazy"}
            sizes="(max-width: 640px) 340px, 380px"
            className="h-full w-full object-contain object-bottom"
          />
        </figure>

        <div className="order-3 lg:order-2 lg:col-span-7">
          <div>
            <SkillsHeading className="font-display text-xl font-semibold text-[#14171C]">
              Skills &amp; Technologies
            </SkillsHeading>
            <p className="mt-2 text-sm text-[#525B6C]">
              Tools and technologies I work with across the product stack.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {TECH_GROUPS.map((group, index) => {
              const style = TECH_GROUP_STYLES[group.category];
              const Icon = style.icon;

              return (
                <article
                  key={group.category}
                  style={{ animationDelay: `${index * 70}ms` }}
                  className="skill-card-reveal rounded-lg border border-[#E2E5EB] bg-white p-4 shadow-sm transition-[transform,box-shadow,border-color] duration-200 ease-out hover:border-[#C8D1DE] hover:shadow-md hover:shadow-[#14171C]/10 motion-safe:hover:-translate-y-1 motion-reduce:transition-none sm:p-5"
                >
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${style.iconClass}`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <TechnologyHeading className="font-display text-sm font-semibold text-[#14171C]">
                        {group.category}
                      </TechnologyHeading>
                      <p className="mt-0.5 font-mono text-[11px] text-[#687386]">
                        {group.items.length} {group.items.length === 1 ? "technology" : "technologies"}
                      </p>
                    </div>
                  </div>

                  <ul
                    aria-label={`${group.category} technologies`}
                    className="mt-4 flex flex-wrap gap-2"
                  >
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className={`rounded-md border bg-[#F8FAFC] px-2.5 py-1 text-xs leading-5 text-[#293241] ${style.chipClass}`}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
