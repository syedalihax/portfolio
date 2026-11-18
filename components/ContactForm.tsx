"use client";

import { useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { SITE_INFO, type PricingTier } from "@/lib/portfolio-data";

const PLAN_BUDGETS: Record<string, string> = {
  Starter: "$99 – $499 (Starter)",
  Standard: "$499 – $999 (Standard)",
  Premium: "$999+ (Premium / Web App)",
  Hourly: "Hourly ($10/hour)",
};

const PLAN_SERVICES: Record<string, string> = {
  Starter: "Website / Landing Page",
  Standard: "Website / Landing Page",
  Premium: "Web Application",
  Hourly: "Other",
};

interface FormErrors {
  name?: string;
  email?: string;
  service?: string;
  message?: string;
}

export default function ContactForm({
  selectedPlan,
  successHeadingLevel = "h3",
}: {
  selectedPlan?: PricingTier;
  successHeadingLevel?: "h2" | "h3";
}) {
  const SuccessHeading = successHeadingLevel;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(
    selectedPlan ? PLAN_SERVICES[selectedPlan.name] : "Website / Landing Page"
  );
  const [budget, setBudget] = useState(
    selectedPlan ? PLAN_BUDGETS[selectedPlan.name] : "$99 – $499 (Starter)"
  );
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );
  const [serverError, setServerError] = useState("");

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (!name.trim() || name.trim().length < 2) {
      next.name = "Please enter your name (at least 2 characters).";
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      next.email = "Please enter a valid email address.";
    }
    if (!service.trim()) {
      next.service = "Please select a service.";
    }
    if (!message.trim() || message.trim().length < 10) {
      next.message = "Please share a short project brief (at least 10 characters).";
    }
    return next;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setServerError("");

    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch(SITE_INFO.formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          service,
          budget,
          message: message.trim(),
        }),
      });

      if (!response.ok) {
        let detail = "Unable to send your message right now.";
        try {
          const data = (await response.json()) as {
            errors?: Array<{ message?: string }>;
          };
          if (data?.errors && data.errors[0]?.message) {
            detail = data.errors[0].message;
          }
        } catch {
          // fallback message already set
        }
        setStatus("error");
        setServerError(detail);
        return;
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
      setErrors({});
    } catch {
      setStatus("error");
      setServerError(
        "Network error while sending the form. Please use WhatsApp or email directly."
      );
    }
  };

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-2xl border border-[#CBD5E1] bg-white p-6 sm:p-8"
      >
        <div className="flex items-start gap-3">
          <CheckCircle2
            className="mt-0.5 h-6 w-6 shrink-0 text-[#2563EB]"
            aria-hidden="true"
          />
          <div>
            <SuccessHeading className="font-display text-xl font-bold text-[#14171C]">
              Inquiry received
            </SuccessHeading>
            <p className="mt-2 text-sm leading-relaxed text-[#525B6C]">
              Thank you for reaching out. Your project brief has been delivered to{" "}
              <span className="font-medium text-[#14171C]">{SITE_INFO.email}</span>
              . I&apos;ll review the scope and reply shortly.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-5 inline-flex min-h-[42px] items-center justify-center rounded-lg border border-[#E2E5EB] bg-[#F5F6F8] px-4 py-2 text-sm font-medium text-[#14171C] transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
            >
              Send another inquiry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-[#E2E5EB] bg-white p-6 sm:p-8"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact-name"
            className="block text-sm font-medium text-[#14171C]"
          >
            Your name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
            }}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            placeholder="Full name"
            className="mt-1.5 block min-h-[44px] w-full rounded-lg border border-[#E2E5EB] bg-[#F5F6F8] px-3.5 py-2.5 text-sm text-[#14171C] placeholder:text-[#7B8494] focus:border-[#2563EB] focus:bg-white focus:outline-none"
          />
          {errors.name && (
            <p id="contact-name-error" className="mt-1.5 text-xs text-[#DC2626]">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="block text-sm font-medium text-[#14171C]"
          >
            Email address
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
            }}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            placeholder="you@example.com"
            className="mt-1.5 block min-h-[44px] w-full rounded-lg border border-[#E2E5EB] bg-[#F5F6F8] px-3.5 py-2.5 text-sm text-[#14171C] placeholder:text-[#7B8494] focus:border-[#2563EB] focus:bg-white focus:outline-none"
          />
          {errors.email && (
            <p id="contact-email-error" className="mt-1.5 text-xs text-[#DC2626]">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="contact-service"
            className="block text-sm font-medium text-[#14171C]"
          >
            Service required
          </label>
          <select
            id="contact-service"
            name="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="mt-1.5 block min-h-[44px] w-full rounded-lg border border-[#E2E5EB] bg-[#F5F6F8] px-3.5 py-2.5 text-sm text-[#14171C] focus:border-[#2563EB] focus:bg-white focus:outline-none"
          >
            <option value="Website / Landing Page">Website / Landing Page</option>
            <option value="Web Application">Web Application</option>
            <option value="Mobile Application">Mobile Application</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="contact-budget"
            className="block text-sm font-medium text-[#14171C]"
          >
            Approximate budget
          </label>
          <select
            id="contact-budget"
            name="budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="mt-1.5 block min-h-[44px] w-full rounded-lg border border-[#E2E5EB] bg-[#F5F6F8] px-3.5 py-2.5 text-sm text-[#14171C] focus:border-[#2563EB] focus:bg-white focus:outline-none"
          >
            <option value="$99 – $499 (Starter)">$99 – $499 (Starter)</option>
            <option value="$499 – $999 (Standard)">$499 – $999 (Standard)</option>
            <option value="$999+ (Premium / Web App)">
              $999+ (Premium / Web App)
            </option>
            <option value="Hourly ($10/hour)">Hourly ($10/hour)</option>
            <option value="Custom Quote">Custom Quote</option>
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label
          htmlFor="contact-message"
          className="block text-sm font-medium text-[#14171C]"
        >
          Project details / brief
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          required
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
          }}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          placeholder="Tell me about your website or app goals, required features, and whether content is ready."
          className="mt-1.5 block h-32 w-full resize-none overflow-y-auto rounded-lg border border-[#E2E5EB] bg-[#F5F6F8] px-3.5 py-2.5 text-sm text-[#14171C] placeholder:text-[#7B8494] focus:border-[#2563EB] focus:bg-white focus:outline-none"
        />
        {errors.message && (
          <p id="contact-message-error" className="mt-1.5 text-xs text-[#DC2626]">
            {errors.message}
          </p>
        )}
      </div>

      {status === "error" && (
        <div
          role="alert"
          className="mt-5 flex items-start gap-2.5 rounded-lg border border-[#FECACA] bg-[#FEF2F2] p-3.5 text-xs text-[#991B1B]"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <div>
            <p className="font-medium">{serverError}</p>
            <p className="mt-1">
              You can also reach me directly via{" "}
              <a
                href={SITE_INFO.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                WhatsApp
              </a>{" "}
              or{" "}
              <a href={SITE_INFO.emailHref} className="underline">
                {SITE_INFO.email}
              </a>
              .
            </p>
          </div>
        </div>
      )}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-[#2563EB] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#1D4ED8] disabled:cursor-not-allowed disabled:opacity-65 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB]"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              <span>Sending inquiry...</span>
            </>
          ) : (
            <>
              <Send className="h-4 w-4" aria-hidden="true" />
              <span>Send Project Brief</span>
            </>
          )}
        </button>

        <p className="text-xs text-[#525B6C]">
          Prefer direct chat?{" "}
          <a
            href={SITE_INFO.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[#2563EB] hover:underline"
          >
            Message on WhatsApp
          </a>
        </p>
      </div>
    </form>
  );
}
