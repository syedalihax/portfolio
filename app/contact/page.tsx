import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";
import { PRICING_TIERS } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Syed Ali about a website, web application, mobile app, or other software project.",
  alternates: { canonical: "/contact" },
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ plan?: string | string[] }>;
}) {
  const { plan } = await searchParams;
  const planName = Array.isArray(plan) ? plan[0] : plan;
  const selectedPlan = PRICING_TIERS.find(
    (tier) => tier.name.toLowerCase() === planName?.toLowerCase()
  );

  return <ContactSection selectedPlan={selectedPlan} headingLevel="h1" />;
}