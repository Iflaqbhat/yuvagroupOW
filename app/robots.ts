// File purpose: SEO helper: generates robots.txt so search engines can crawl the site.
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: '/api/' },
    sitemap: 'https://yuvagroup.in/sitemap.xml',
  };
}
