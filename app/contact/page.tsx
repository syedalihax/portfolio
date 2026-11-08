import type { Metadata } from "next";
import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import Reveal from "../../components/Reveal";
import { email, url } from "../../lib/site";

const title = "Contact | Syed Ali — Web Developer";
const description =
  "Contact Syed Ali about a website fix or build. Email hello@syedalihax.com or send a project enquiry.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    type: "website",
    url: `${url}/contact`,
    title,
    description,
  },
  alternates: {
    canonical: `${url}/contact`,
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="border-b border-rule">
        <Nav />
      </header>
      <main className="mx-auto w-full max-w-[1180px] px-6">
        <Reveal>
          <section aria-labelledby="contact-title" className="py-section">
            <p className="font-mono text-meta text-muted">Contact</p>
            <h1
              id="contact-title"
              className="mt-4 font-display text-display leading-[0.98] text-ink"
            >
              Tell me what you need
            </h1>
            <p className="mt-6 max-w-[62ch] text-body leading-relaxed text-muted">
              Email me directly at{" "}
              <a className="text-ink underline decoration-rule underline-offset-4" href={`mailto:${email}`}>
                {email}
              </a>{" "}
              or send a short description using the form.
            </p>
          </section>
        </Reveal>
        <Reveal>
          <section aria-label="Project enquiry" className="pb-section">
            <ContactForm />
          </section>
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}
