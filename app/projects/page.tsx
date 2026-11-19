import type { Metadata } from "next";
import ProjectsSection from "@/components/ProjectsSection";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Syed Ali's selected software projects, including e-commerce, parking management, and business websites.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Software Projects by Syed Ali",
    description:
      "E-commerce, parking management, and client website projects built with modern web technologies.",
    url: "/projects",
  },
};

export default function ProjectsPage() {
  return <ProjectsSection headingLevel="h1" />;
}