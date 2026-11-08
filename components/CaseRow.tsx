import Image from "next/image";
import Reveal from "./Reveal";

type CaseRowProps = {
  number: string;
  name: string;
  href: string;
  problem: string;
  stack: string;
  outcome: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  delay?: number;
};

export default function CaseRow({
  number,
  name,
  href,
  problem,
  stack,
  outcome,
  image,
  imageAlt,
  imageWidth,
  imageHeight,
  delay = 0,
}: CaseRowProps) {
  return (
    <Reveal delay={delay}>
      <article className="grid grid-cols-1 items-start gap-8 border-t border-rule py-8 md:grid-cols-[7fr_4fr] md:gap-12 md:py-10">
        <div className="grid gap-5 sm:grid-cols-[3rem_minmax(0,1fr)]">
          <p className="font-mono text-meta text-muted">{number}</p>
          <div>
            <h3 className="font-display text-h2 text-ink">
              <a href={href}>{name}</a>
            </h3>
            <p className="mt-4 max-w-[62ch] text-body leading-relaxed text-muted">
              {problem}
            </p>
            <p className="mt-5 font-mono text-meta text-muted">{stack}</p>
            <p className="mt-4 max-w-[62ch] text-body leading-relaxed text-ink">
              {outcome}
            </p>
          </div>
        </div>
        <a href={href} aria-label={`Read the ${name} case study`}>
          <Image
            src={image}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
            className="h-auto w-full rounded-sm"
          />
        </a>
      </article>
    </Reveal>
  );
}
