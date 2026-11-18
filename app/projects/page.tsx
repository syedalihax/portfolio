import type { Metadata } from "next";
import ProjectsSection from "@/components/ProjectsSection";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Syed Ali's selected software projects, including e-commerce, parking management, and business websites.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return <ProjectsSection headingLevel="h1" />;
}