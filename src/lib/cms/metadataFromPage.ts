import type { Metadata } from 'next'

import { isNoIndexEnabled } from '@/lib/noIndexSite'
import { isUntrustedCanonicalUrl, mediaAbsoluteUrl } from '@/lib/siteBaseUrl'
import type { Page } from '@/payload-types'

type Fallback = { title: string; description?: string }

/** Merge Payload Page SEO fields into Next Metadata (slug ties admin → frontend route). */
export function metadataFromPage(page: Page | null, baseUrl: string, fallback: Fallback): Metadata {
  const title = (page?.seoTitle?.trim() || page?.title?.trim() || fallback.title).trim()
  const description = (page?.seoDescription?.trim() || fallback.description || `${fallback.title}`).trim()
  const canonicalOverride =
    !isUntrustedCanonicalUrl(page?.canonicalUrl) ? page?.canonicalUrl?.trim() : undefined
  const canonical =
    canonicalOverride ||
    (page?.slug
      ? page.slug === 'home'
        ? baseUrl
        : `${baseUrl}/${page.slug}`.replace(/([^:]\/)\/+/g, '$1')
      : undefined)

  const ogImage = mediaAbsoluteUrl(baseUrl, page?.ogImage)

  const meta: Metadata = {
    title,
    description,
    ...(canonical ? { alternates: { canonical } } : {}),
    ...(isNoIndexEnabled() || page?.noIndex ? { robots: { index: false, follow: false } } : {}),
    openGraph: {
      title,
      description,
      ...(canonical ? { url: canonical } : {}),
      ...(ogImage ? { images: [{ url: ogImage }] } : {}),
    },
    twitter: {
      card: ogImage ? 'summary_large_image' : 'summary',
      title,
      description,
      ...(ogImage ? { images: [ogImage] } : {}),
    },
  }
  return meta
}
