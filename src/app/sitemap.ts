import { MetadataRoute } from "next";
import { cities } from "@/data/cities";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://bestjacuzzihotels.com";

  const cityPages = cities.map((city) => ({
    url: `${baseUrl}/hotels-with-jacuzzi-in/${city.slug}`,
    lastModified: new Date("2026-03-17"),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-03-17"),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...cityPages,
    {
      url: `${baseUrl}/about`,
      lastModified: new Date("2026-03-17"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date("2026-03-17"),
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
