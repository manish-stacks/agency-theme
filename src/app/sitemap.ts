import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { SITE } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/services", "/projects", "/clients", "/news", "/contact"].map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));
  const projectRoutes = projects.map((p) => ({
    url: `${SITE.url}/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));
  return [...routes, ...projectRoutes];
}
