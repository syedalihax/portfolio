import type { Metadata } from "next";
import { url } from "../../lib/site";

const title = "Contact | Syed Ali — Web Developer";
const description =
  "Contact Syed Ali about a website fix or build. He works remotely from Quetta, Pakistan.";

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
  return null;
}
