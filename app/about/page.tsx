import type { Metadata } from "next";
import AboutSection from "@/components/AboutSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Syed Ali's software engineering experience, skills, and technologies.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Syed Ali | Software Engineer",
    description:
      "Experience, skills, and technologies across frontend, backend, databases, and deployment.",
    url: "/about",
  },
};

export default function AboutPage() {
  return <AboutSection headingLevel="h1" />;
}