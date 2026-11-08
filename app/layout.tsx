import type { Metadata } from "next";
import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import { MotionConfig } from "framer-motion";
import {
  faqSchema,
  personSchema,
  serviceSchema,
  websiteSchema,
} from "../lib/schema";
import { name, url } from "../lib/site";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: "Web Developer | Syed Ali",
  description:
    "Syed Ali is a web developer in Quetta, Pakistan, building and fixing websites remotely for clients worldwide.",
  openGraph: {
    type: "website",
    url,
    title: "Web Developer | Syed Ali",
    description:
      "Website fixes and builds by Syed Ali, working remotely from Quetta, Pakistan.",
    siteName: `${name} — Web Developer`,
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
      className={`${instrumentSerif.variable} ${inter.variable} ${jetBrainsMono.variable}`}
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
      </body>
    </html>
  );
}
