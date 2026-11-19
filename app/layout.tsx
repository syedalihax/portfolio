import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { SITE_INFO, SOCIAL_LINKS } from "@/lib/portfolio-data";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_INFO.url),
  title: {
    default: "Syed Ali Hax | Software Engineer",
    template: "%s | Syed Ali Hax",
  },
  description:
    "Portfolio of Syed Ali, a Software Engineer with 1+ years of experience building responsive websites, landing pages, full-stack web applications, and React Native mobile apps.",
  keywords: [
    "Syed Ali",
    "software engineer",
    "Next.js developer",
    "React developer",
    "React Native developer",
    "web developer",
    "Pakistan software engineer",
  ],
  authors: [{ name: SITE_INFO.name, url: SITE_INFO.url }],
  creator: SITE_INFO.name,
  publisher: SITE_INFO.name,
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
    languages: { "en-PK": "/" },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Syed Ali Hax",
    url: SITE_INFO.url,
    title: "Syed Ali Hax | Software Engineer",
    description:
      "Software engineering portfolio for responsive websites, full-stack web applications, and React Native mobile apps.",
    images: [
      {
        url: "/assets/aistudio/laptopia-1_c6c9f4c8.png",
        width: 1917,
        height: 1078,
        alt: "Selected engineering work preview from Syed Ali portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Syed Ali Hax | Software Engineer",
    description:
      "Responsive websites, full-stack applications, and React Native mobile apps.",
    images: ["/assets/aistudio/laptopia-1_c6c9f4c8.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_INFO.name,
    jobTitle: SITE_INFO.title,
    url: SITE_INFO.url,
    email: `mailto:${SITE_INFO.email}`,
    telephone: "+92-318-31-79797",
    sameAs: SOCIAL_LINKS.map((item) => item.href),
    knowsAbout: [
      "Web Development",
      "Full-Stack Web Applications",
      "React",
      "Next.js",
      "React Native",
      "Node.js",
      "MongoDB",
      "PostgreSQL",
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${SITE_INFO.name} — ${SITE_INFO.title}`,
    url: SITE_INFO.url,
    inLanguage: "en-PK",
    description:
      "Personal portfolio of Syed Ali, Software Engineer building websites, web applications, and mobile applications.",
    publisher: {
      "@type": "Person",
      name: SITE_INFO.name,
      url: SITE_INFO.url,
    },
  };

  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${dmSans.variable} ${jetBrainsMono.variable}`}
    >
      <body className="min-h-screen bg-[#F5F6F8] text-[#14171C] antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
