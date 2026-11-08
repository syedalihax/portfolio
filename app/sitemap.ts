import type { MetadataRoute } from "next";
import { url } from "../lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url, changeFrequency: "monthly", priority: 1 },
    { url: `${url}/work`, changeFrequency: "monthly", priority: 0.8 },
    {
      url: `${url}/work/easy-parking`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${url}/work/lapitopia`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    { url: `${url}/about`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${url}/contact`, changeFrequency: "monthly", priority: 0.6 },
  ];
}
