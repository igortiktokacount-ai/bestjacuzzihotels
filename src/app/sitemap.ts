import { MetadataRoute } from "next";
import { cities } from "@/data/cities";
import { blogPosts } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://bestjacuzzihotels.com";

  const cityPages = cities.map((city) => ({
    url: `${baseUrl}/hotels-with-jacuzzi-in/${city.slug}`,
    lastModified: new Date("2026-03-17"),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
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
      url: `${baseUrl}/blog`,
      lastModified: new Date("2026-03-17"),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...blogPages,
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
