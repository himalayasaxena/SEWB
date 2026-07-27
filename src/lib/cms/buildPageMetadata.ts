import type { Metadata } from 'next'

import { getSiteBaseUrl } from '@/lib/siteBaseUrl'

import { getPublishedPageBySlug } from './getPublishedPage'
import { metadataFromPage } from './metadataFromPage'

export async function buildPageMetadata(
  slug: string,
  fallback: { title: string; description?: string },
): Promise<Metadata> {
  const base = await getSiteBaseUrl()
  const page = await getPublishedPageBySlug(slug)
  return metadataFromPage(page, base, fallback)
}
