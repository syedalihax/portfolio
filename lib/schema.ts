import { email, faqs, name, url } from "./site";

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name,
  jobTitle: "Web Developer",
  url,
  email,
  image: `${url}/photos/syed-ali.webp`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Quetta",
    addressCountry: "PK",
  },
  knowsAbout: [
    "Web development",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: `${name} — Web Developer`,
  url,
  inLanguage: "en",
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: `${name} — Web Developer`,
  description:
    "Website fixes and builds by Syed Ali, a web developer based in Quetta, Pakistan, working remotely worldwide.",
  areaServed: "Worldwide",
  serviceType: ["Website fixes", "Website builds"],
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
};
