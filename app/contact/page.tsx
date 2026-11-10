import type { Metadata } from "next";
import ContactForm from "../../components/ContactForm";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import Reveal from "../../components/Reveal";
import { email, phone, url, whatsappUrl } from "../../lib/site";

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
    images: [new URL("/opengraph-image", url).toString()],
  },
  alternates: {
    canonical: `${url}/contact`,
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[var(--clay)] text-[var(--ink)]">
      <Nav />

      <main>
        <section className="band-clay">
          <div className="mx-auto w-full max-w-[1360px] px-[clamp(20px,4vw,56px)] py-[clamp(88px,10vw,140px)]">
            <Reveal>
              <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
                <div className="lg:col-span-5">
                  <p className="section-label text-[rgba(16,16,16,0.7)]">Contact</p>
                  <h1 className="mt-4 font-sans text-[clamp(2.2rem,4.6vw,3.6rem)] font-semibold leading-[0.98] tracking-[-0.03em] text-[var(--ink)]">
                    Tell me what you need
                  </h1>
                  <p className="mt-5 max-w-[42ch] text-[17px] leading-7 text-[rgba(16,16,16,0.74)]">
                    Email me directly at{" "}
                    <a
                      className="underline underline-offset-4"
                      href={`mailto:${email}`}
                    >
                      {email}
                    </a>{" "}
                    or message me on{" "}
                    <a
                      className="underline underline-offset-4"
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`WhatsApp: ${phone}`}
                    >
                      WhatsApp at {phone}
                    </a>
                    , or send a short description using the form.
                  </p>
                </div>

                <div className="lg:col-span-7">
                  <ContactForm />
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
