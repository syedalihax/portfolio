import Image from "next/image";
import Reveal from "./Reveal";

type CaseRowProps = {
  number: string;
  name: string;
  href: string;
  problem: string;
  stack: readonly string[];
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  liveUrl: string;
  codeUrl?: string;
  delay?: number;
  reverse?: boolean;
  headingLevel?: "h2" | "h3";
};

export default function CaseRow({
  number,
  name,
  href,
  problem,
  stack,
  image,
  imageAlt,
  imageWidth,
  imageHeight,
  liveUrl,
  codeUrl,
  delay = 0,
  reverse = false,
  headingLevel = "h3",
}: CaseRowProps) {
  const Heading = headingLevel;

  return (
    <Reveal delay={delay}>
      <article className="group border-t border-[var(--rule)] py-8 first:border-t-0 md:py-10">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
          <div className={`lg:col-span-5 ${reverse ? "lg:order-2" : "lg:order-1"}`}>
            <p className="section-label text-[var(--muted-inv)]">{number}</p>
            <Heading className="mt-4 font-sans text-[clamp(1.8rem,2vw,2.4rem)] font-semibold tracking-[-0.03em] text-[var(--paper)]">
              <a href={href} className="hover:text-[var(--paper)]/80">
                {name}
              </a>
            </Heading>
            <p className="mt-4 max-w-[52ch] text-[17px] leading-7 text-[var(--muted-inv)]">
              {problem}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {stack.map((item) => (
                <span
                  key={item}
                  className="border border-[var(--rule-inv)] px-2 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--muted-inv)]"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center justify-center border border-[var(--paper)] bg-[var(--paper)] px-4 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--ink)]"
              >
                Live site ↗
              </a>
              {codeUrl ? (
                <a
                  href={codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center justify-center border border-[var(--paper)] bg-transparent px-4 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--paper)]"
                >
                  Code ↗
                </a>
              ) : null}
            </div>
          </div>

          <a
            href={href}
            aria-label={`Read the ${name} case study`}
            className={`block overflow-hidden lg:col-span-7 ${reverse ? "lg:order-1" : "lg:order-2"}`}
          >
            <Image
              src={image}
              alt={imageAlt}
              width={imageWidth}
              height={imageHeight}
              loading={number === "01" ? "eager" : "lazy"}
              className="h-auto w-full border border-[var(--rule-inv)] rounded-[2px] transition-transform duration-200 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </article>
    </Reveal>
  );
}
