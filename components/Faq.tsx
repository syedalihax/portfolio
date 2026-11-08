import { faqs } from "../lib/site";

export default function Faq() {
  return (
    <div>
      {faqs.map(({ question, answer }) => (
        <details
          key={question}
          className="border-t border-rule py-5 last:border-b"
        >
          <summary className="cursor-pointer font-display text-h2 text-ink">
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
