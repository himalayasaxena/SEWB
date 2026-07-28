import type { ReactNode } from 'react'

import { PageBlocks } from '@/components/PageBlocks'
import { getPublishedPageBySlug } from '@/lib/cms/getPublishedPage'
import { getPublishedPosts } from '@/lib/cms/getPublishedPosts'
import type { FixedPageSlug } from '@/constants/fixedPages'

/**
 * Renders a fixed marketing page from the published CMS `pages` document when it has a layout.
 * Falls back to the static PHP-matched React tree only when CMS layout is missing/empty.
 */
export async function CmsFixedPage({
  slug,
  fallback,
}: {
  slug: FixedPageSlug
  fallback: ReactNode
}) {
  const page = await getPublishedPageBySlug(slug)
  const layout = page?.layout

  if (!layout?.length) {
    return <>{fallback}</>
  }

  const blogPosts = slug === 'blog' ? await getPublishedPosts(24) : undefined
  return <PageBlocks layout={layout} blogPosts={blogPosts} />
}
