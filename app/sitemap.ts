import type { MetadataRoute } from "next";
import { SITE_INFO } from "@/lib/portfolio-data";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/projects", "/services", "/about", "/contact"].map((route) => ({
    url: `${SITE_INFO.url}${route}`,
    lastModified: new Date("2026-11-18"),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
