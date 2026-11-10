import { faqs } from "../lib/site";

export default function Faq() {
  return (
    <div className="border-t border-rule">
      {faqs.map(({ question, answer }, index) => (
        <details
          key={question}
          open={index === 0}
          className="border-b border-rule py-5"
        >
          <summary className="cursor-pointer list-none font-display text-[1.3rem] leading-snug text-ink md:text-[1.5rem]">
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
