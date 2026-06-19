import { MetadataRoute } from 'next'

const BASE_URL = 'https://arasue.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/forge',
    '/forge/portfolio',
    '/forge/pricing',
    '/forge/services',
    '/forge/contact',
    '/labs',
    '/labs/shop',
    '/labs/story',
    '/labs/contact',
    '/media',
    '/media/work',
    '/media/creators',
    '/media/contact',
    '/protection',
    '/about',
    '/contact',
    '/investors',
    '/newsroom',
    '/workshop'
  ]

  return routes.map((route) => ({
    url: `${BASE_URL}/en${route}`,
    lastModified: new Date(),
    alternates: {
      languages: {
        en: `${BASE_URL}/en${route}`,
        es: `${BASE_URL}/es${route}`,
      },
    },
  }))
}
