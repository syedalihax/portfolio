import type { Metadata } from "next";
import AboutSection from "@/components/AboutSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Syed Ali's software engineering experience, skills, and technologies.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <AboutSection headingLevel="h1" />;
}