import type { MetadataRoute } from "next";
import { SITE_INFO } from "@/lib/portfolio-data";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/*?plan=*"],
    },
    sitemap: `${SITE_INFO.url}/sitemap.xml`,
    host: SITE_INFO.url,
  };
}
