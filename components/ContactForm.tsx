"use client";

import { useState, type FormEvent } from "react";
import { formspreeEndpoint } from "../lib/site";

export default function ContactForm() {
  const [isSending, setIsSending] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSending) return;

    const form = event.currentTarget;
    setIsSending(true);
    setFeedback(null);

    try {
      const response = await fetch(
        `https://formspree.io/f/${formspreeEndpoint}`,
        {
          method: "POST",
          body: new FormData(form),
          headers: { Accept: "application/json" },
        },
      );

      if (!response.ok) {
        throw new Error(`Formspree returned status ${response.status}`);
      }

      form.reset();
      setFeedback({
        type: "success",
        message: "Your message has been sent. I reply within one working day.",
      });
    } catch (error) {
      if (!(error instanceof Error)) throw error;

      setFeedback({
        type: "error",
        message:
          "Your message could not be sent. Please email me directly instead.",
      });
    } finally {
      setIsSending(false);
    }
  }

  return (
    <form
      action={`https://formspree.io/f/${formspreeEndpoint}`}
      method="POST"
      onSubmit={handleSubmit}
      className="w-full"
    >
      <div className="grid gap-2 border-b border-[rgba(16,16,16,0.35)] py-4">
        <label
          htmlFor="contact-name"
          className="font-mono text-[13px] uppercase tracking-[0.14em] text-[rgba(16,16,16,0.75)]"
        >
          Your name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          minLength={2}
          required
          className="h-[56px] w-full border border-[rgba(16,16,16,0.35)] bg-transparent px-3 font-sans text-[17px] text-ink placeholder:text-[rgba(16,16,16,0.5)]"
        />
      </div>
      <div className="grid gap-2 border-b border-[rgba(16,16,16,0.35)] py-4">
        <label
          htmlFor="contact-email"
          className="font-mono text-[13px] uppercase tracking-[0.14em] text-[rgba(16,16,16,0.75)]"
        >
          Email address
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="h-[56px] w-full border border-[rgba(16,16,16,0.35)] bg-transparent px-3 font-sans text-[17px] text-ink placeholder:text-[rgba(16,16,16,0.5)]"
        />
      </div>
      <div className="grid gap-2 border-b border-[rgba(16,16,16,0.35)] py-4">
        <label
          htmlFor="contact-message"
          className="font-mono text-[13px] uppercase tracking-[0.14em] text-[rgba(16,16,16,0.75)]"
        >
          What do you need help with?
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          minLength={20}
          required
          className="w-full border border-[rgba(16,16,16,0.35)] bg-transparent px-3 py-3 font-sans text-[17px] text-ink placeholder:text-[rgba(16,16,16,0.5)]"
        />
      </div>
      <p className="mt-4 text-[17px] leading-7 text-[rgba(16,16,16,0.72)]">
        Name, a valid email address and a message are required before the form
        can be sent.
      </p>
      {feedback && (
        <p
          role={feedback.type === "error" ? "alert" : "status"}
          aria-live="polite"
          className={`mt-4 text-[17px] leading-7 ${
            feedback.type === "success" ? "text-ink" : "text-[rgba(16,16,16,0.72)]"
          }`}
        >
          {feedback.message}
        </p>
      )}
      <button
        type="submit"
        disabled={isSending}
        className="mt-5 inline-flex min-h-[44px] items-center justify-center border border-[var(--ink)] bg-[var(--ink)] px-5 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--paper)] disabled:cursor-wait disabled:opacity-60"
      >
        {isSending ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
