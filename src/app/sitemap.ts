import type { MetadataRoute } from 'next'
import { getPayload } from 'payload'

import { isNoIndexEnabled } from '@/lib/noIndexSite'
import { getSiteBaseUrl } from '@/lib/siteBaseUrl'
import config from '@/payload.config'

const STATIC_PATHS: {
  path: string
  priority: number
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>
}[] = [
  { path: '/', priority: 1, changeFrequency: 'weekly' },
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/features', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/blog', priority: 0.85, changeFrequency: 'daily' },
  { path: '/gallery', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/product-list', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/security', priority: 0.6, changeFrequency: 'yearly' },
  { path: '/testimonial', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/organisations', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/health-professionals', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/individuals', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/privacy-policy', priority: 0.4, changeFrequency: 'yearly' },
  { path: '/terms-conditions', priority: 0.4, changeFrequency: 'yearly' },
  { path: '/medical-disclaimer', priority: 0.4, changeFrequency: 'yearly' },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  if (isNoIndexEnabled()) {
    return []
  }

  const base = await getSiteBaseUrl()

  const staticEntries: MetadataRoute.Sitemap = STATIC_PATHS.map(({ path, priority, changeFrequency }) => ({
    url: path === '/' ? base : `${base}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }))

  let postEntries: MetadataRoute.Sitemap = []
  try {
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })
    const posts = await payload.find({
      collection: 'posts',
      where: {
        _status: {
          equals: 'published',
        },
      },
      limit: 500,
      depth: 0,
      sort: '-updatedAt',
    })
    postEntries = posts.docs.map((post) => ({
      url: `${base}/blog/${post.slug}`,
      lastModified: post.updatedAt ? new Date(post.updatedAt) : new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.75,
    }))
  } catch {
    // Payload/DB unavailable — ship static routes only
  }

  return [...staticEntries, ...postEntries]
}
