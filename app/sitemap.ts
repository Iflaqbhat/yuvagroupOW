import type { MetadataRoute } from 'next';
import { projects } from '@/data/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://yuvagroup.in';
  const staticRoutes = [
    '', '/about', '/projects', '/ongoing-projects', '/completed-projects',
    '/amenities', '/gallery', '/careers', '/contact', '/schedule-visit', '/privacy', '/terms',
  ].map((r) => ({
    url: `${base}${r}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: r === '' ? 1 : 0.7,
  }));
  const projectRoutes = projects.map((p) => ({
    url: `${base}/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));
  return [...staticRoutes, ...projectRoutes];
}
