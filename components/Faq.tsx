import { faqs } from "../lib/site";

export default function Faq() {
  return (
    <div>
      {faqs.map(({ question, answer }, index) => (
        <details
          key={question}
          open={index === 0}
          className="border-t border-rule py-5 last:border-b"
        >
          <summary className="cursor-pointer list-none font-display text-[1.25rem] leading-snug text-ink md:text-[1.4rem]">
            {question}
          </summary>
          <p className="mt-4 max-w-[62ch] text-body leading-relaxed text-muted">
            {answer}
          </p>
        </details>
      ))}
    </div>
  );
}
