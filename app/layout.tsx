import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { MotionConfig } from "framer-motion";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import {
  faqSchema,
  personSchema,
  serviceSchema,
  websiteSchema,
} from "../lib/schema";
import { name, url } from "../lib/site";
import "./globals.css";

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const title = "Syed Ali — websites for small business, fixed price";
const description =
  "Freelance web developer in Quetta. Fixes broken sites and builds one- to five-page websites, fixed price and fixed date. Easy-Parking and LapToPia are live.";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  openGraph: {
    type: "website",
    url,
    title,
    description,
    siteName: `${name} — Web Developer`,
    images: [new URL("/opengraph-image", url).toString()],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [new URL("/opengraph-image", url).toString()],
  },
  alternates: {
    canonical: url,
  },
};

const schemas = [personSchema, websiteSchema, serviceSchema, faqSchema];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable}`}
    >
      <body>
        {schemas.map((schema) => (
          <script
            key={schema["@type"]}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
            }}
          />
        ))}
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
