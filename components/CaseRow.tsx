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
}: CaseRowProps) {
  return (
    <Reveal delay={delay}>
      <article className="group border-t border-rule py-8 first:border-t-0 md:py-10">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_1.35fr] lg:items-start">
          <div className="order-2 lg:order-1">
            <p className="section-label text-muted">{number}</p>
            <h3 className="mt-4 font-display text-[clamp(2rem,2vw,2.7rem)] leading-none text-ink">
              <a href={href} className="transition-colors hover:text-accent">
                {name}
              </a>
            </h3>
            <p className="mt-4 max-w-[54ch] text-body leading-relaxed text-muted">
              {problem}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {stack.map((item) => (
                <span
                  key={item}
                  className="border border-rule px-2 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted"
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
                className="inline-flex min-h-[44px] items-center justify-center border border-ink bg-ink px-4 font-mono text-[11px] uppercase tracking-[0.12em] text-paper"
              >
                Live site ↗
              </a>
              {codeUrl ? (
                <a
                  href={codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center justify-center border border-ink bg-transparent px-4 font-mono text-[11px] uppercase tracking-[0.12em] text-ink"
                >
                  Code ↗
                </a>
              ) : null}
            </div>
          </div>

          <a
            href={href}
            aria-label={`Read the ${name} case study`}
            className="order-1 block min-w-0 overflow-hidden lg:order-2"
          >
            <Image
              src={image}
              alt={imageAlt}
              width={imageWidth}
              height={imageHeight}
              loading={number === "01" ? "eager" : "lazy"}
              className="h-auto w-full border border-rule transition-transform duration-200 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </article>
    </Reveal>
  );
}
