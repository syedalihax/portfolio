import type { Metadata } from "next";
import PricingProcessSection from "@/components/PricingProcessSection";
import ServicesSection from "@/components/ServicesSection";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "Review Syed Ali's website, web application, and mobile app services, starting prices, and project process.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesSection headingLevel="h1" />
      <PricingProcessSection />
    </>
  );
}