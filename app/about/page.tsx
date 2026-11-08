import type { Metadata } from "next";
import { url } from "../../lib/site";

const title = "About | Syed Ali — Web Developer";
const description =
  "About Syed Ali, a web developer based in Quetta, Pakistan, working remotely across time zones.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    type: "website",
    url: `${url}/about`,
    title,
    description,
  },
  alternates: {
    canonical: `${url}/about`,
  },
};

export default function AboutPage() {
  return null;
}
