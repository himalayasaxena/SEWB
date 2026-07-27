import type { MetadataRoute } from 'next'

import { isNoIndexEnabled } from '@/lib/noIndexSite'
import { getSiteBaseUrl } from '@/lib/siteBaseUrl'

export default async function robots(): Promise<MetadataRoute.Robots> {
  if (isNoIndexEnabled()) {
    return {
      rules: [{ userAgent: '*', disallow: '/' }],
    }
  }

  const base = await getSiteBaseUrl()
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/blog/preview/', '/preview/'],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
  }
}
