import type { Metadata } from "next";
import { url } from "../../../lib/site";

const title = "LapToPia | Syed Ali — Web Developer";
const description =
  "The LapToPia website project case study by Syed Ali, a web developer in Quetta, Pakistan.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    type: "website",
    url: `${url}/work/lapitopia`,
    title,
    description,
  },
  alternates: {
    canonical: `${url}/work/lapitopia`,
  },
};

export default function LapitopiaPage() {
  return null;
}
