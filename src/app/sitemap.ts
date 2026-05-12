import { MetadataRoute } from 'next';

const BASE_URL = 'https://www.shilpaskitchen.in';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const productPages = [
    'farshi-puri',
    'limbu-gathiya',
    'butter-chakri',
    'papad-pauva',
    'chakri',
    'gathiya',
    'thepla',
    'sev',
    'methi-para',
    'shakkar-para',
  ];

  return [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    ...productPages.map((slug) => ({
      url: `${BASE_URL}/products/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    {
      url: `${BASE_URL}/#about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/#contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];
}
