import type { Metadata } from "next";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import PricingProcessSection from "@/components/PricingProcessSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";

export const metadata: Metadata = {
  title: "Software Engineer Portfolio",
  description:
    "Meet Syed Ali, a software engineer building responsive websites, web applications, and React Native mobile apps.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Syed Ali Hax | Software Engineer Portfolio",
    description:
      "Explore selected web, full-stack, and React Native projects by Syed Ali.",
    url: "/",
  },
  twitter: {
    title: "Syed Ali Hax | Software Engineer Portfolio",
    description:
      "Explore selected web, full-stack, and React Native projects by Syed Ali.",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <PricingProcessSection />
      <ContactSection />
    </>
  );
}
