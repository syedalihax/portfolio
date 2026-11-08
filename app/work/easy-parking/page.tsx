import type { Metadata } from "next";
import { url } from "../../../lib/site";

const title = "Easy-Parking | Syed Ali — Web Developer";
const description =
  "The Easy-Parking website project case study by Syed Ali, a web developer in Quetta, Pakistan.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    type: "website",
    url: `${url}/work/easy-parking`,
    title,
    description,
  },
  alternates: {
    canonical: `${url}/work/easy-parking`,
  },
};

export default function EasyParkingPage() {
  return null;
}
