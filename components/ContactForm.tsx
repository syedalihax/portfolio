"use client";

const formspreeEndpoint = "https://formspree.io/f/REPLACE_WITH_FORM_ID";

export default function ContactForm() {
  return (
    <form
      action={formspreeEndpoint}
      method="POST"
      className="max-w-[62ch] border-t border-rule"
    >
      <div className="grid gap-2 border-b border-rule py-5">
        <label htmlFor="contact-name" className="font-mono text-meta text-ink">
          Your name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          minLength={2}
          required
          className="w-full rounded-sm border border-rule bg-paper px-3 py-3 text-body text-ink"
        />
      </div>
      <div className="grid gap-2 border-b border-rule py-5">
        <label
          htmlFor="contact-email"
          className="font-mono text-meta text-ink"
        >
          Email address
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="w-full rounded-sm border border-rule bg-paper px-3 py-3 text-body text-ink"
        />
      </div>
      <div className="grid gap-2 border-b border-rule py-5">
        <label
          htmlFor="contact-message"
          className="font-mono text-meta text-ink"
        >
          What do you need help with?
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          minLength={20}
          required
          className="w-full rounded-sm border border-rule bg-paper px-3 py-3 text-body text-ink"
        />
      </div>
      <p className="mt-4 text-body leading-relaxed text-muted">
        Name, a valid email address and a message are required before the form
        can be sent.
      </p>
      <button
        type="submit"
        className="mt-5 border border-ink px-5 py-3 font-mono text-meta text-ink"
      >
        Send message
      </button>
    </form>
  );
}
