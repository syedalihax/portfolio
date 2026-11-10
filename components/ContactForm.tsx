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
      className="w-full border-t border-white/15"
    >
      <div className="grid gap-2 border-b border-white/15 py-5">
        <label htmlFor="contact-name" className="font-mono text-[11px] uppercase tracking-[0.12em] text-[rgba(247,246,242,0.75)]">
          Your name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          minLength={2}
          required
          className="w-full border border-white/15 bg-transparent px-3 py-3 font-sans text-body text-paper placeholder:text-[rgba(247,246,242,0.55)]"
        />
      </div>
      <div className="grid gap-2 border-b border-white/15 py-5">
        <label
          htmlFor="contact-email"
          className="font-mono text-[11px] uppercase tracking-[0.12em] text-[rgba(247,246,242,0.75)]"
        >
          Email address
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="w-full border border-white/15 bg-transparent px-3 py-3 font-sans text-body text-paper placeholder:text-[rgba(247,246,242,0.55)]"
        />
      </div>
      <div className="grid gap-2 border-b border-white/15 py-5">
        <label
          htmlFor="contact-message"
          className="font-mono text-[11px] uppercase tracking-[0.12em] text-[rgba(247,246,242,0.75)]"
        >
          What do you need help with?
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          minLength={20}
          required
          className="w-full border border-white/15 bg-transparent px-3 py-3 font-sans text-body text-paper placeholder:text-[rgba(247,246,242,0.55)]"
        />
      </div>
      <p className="mt-4 text-body leading-relaxed text-[rgba(247,246,242,0.75)]">
        Name, a valid email address and a message are required before the form
        can be sent.
      </p>
      {feedback && (
        <p
          role={feedback.type === "error" ? "alert" : "status"}
          aria-live="polite"
          className={`mt-4 text-body leading-relaxed ${
            feedback.type === "success"
              ? "text-paper"
              : "text-[rgba(247,246,242,0.75)]"
          }`}
        >
          {feedback.message}
        </p>
      )}
      <button
        type="submit"
        disabled={isSending}
        className="mt-5 border border-paper bg-paper px-5 py-3 font-mono text-[11px] uppercase tracking-[0.12em] text-ink disabled:cursor-wait disabled:opacity-60"
      >
        {isSending ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
