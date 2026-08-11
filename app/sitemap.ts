import type { MetadataRoute } from 'next';
import { chefs } from '@/lib/chefs';

const BASE = 'https://chefs-of-bhutan.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: BASE, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${BASE}/chefs`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    ...chefs.map((c) => ({
      url: `${BASE}/chefs/${c.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
