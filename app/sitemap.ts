import type { MetadataRoute } from "next";
import { SITE_INFO } from "@/lib/portfolio-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return ["", "/projects", "/services", "/about", "/contact"].map((route) => ({
    url: `${SITE_INFO.url}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
