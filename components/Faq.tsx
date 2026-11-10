import { faqs } from "../lib/site";

export default function Faq() {
  return (
    <div className="space-y-0 border-t border-[var(--rule)]">
      {faqs.map(({ question, answer }, index) => (
        <details
          key={question}
          open={index === 0}
          className="group border-b border-[var(--rule)] py-5"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-sans text-[1.25rem] font-medium leading-snug text-ink">
            <span>{question}</span>
            <span className="block h-3 w-3 rotate-45 border-b-2 border-r-2 border-[var(--ink)] translate-y-[-2px] transition-transform group-open:rotate-[-135deg]" aria-hidden="true" />
          </summary>
          <p className="mt-4 max-w-[62ch] text-[17px] leading-7 text-[var(--muted)]">
            {answer}
          </p>
        </details>
      ))}
    </div>
  );
}
