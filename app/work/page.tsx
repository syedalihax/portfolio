import type { Metadata } from "next";
import { url } from "../../lib/site";

const title = "Work | Syed Ali — Web Developer";
const description =
  "Selected website projects by Syed Ali, a web developer working remotely from Quetta, Pakistan.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    type: "website",
    url: `${url}/work`,
    title,
    description,
  },
  alternates: {
    canonical: `${url}/work`,
  },
};

export default function WorkPage() {
  return null;
}
