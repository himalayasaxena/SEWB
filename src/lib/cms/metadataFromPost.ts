import type { Metadata } from 'next'

import { isNoIndexEnabled } from '@/lib/noIndexSite'
import { mediaAbsoluteUrl } from '@/lib/siteBaseUrl'
import type { Post } from '@/payload-types'

export function metadataFromPost(post: Post, baseUrl: string): Metadata {
  const fallbackTitle = 'Blog Post'
  const title = (post.seoTitle?.trim() || post.title?.trim() || fallbackTitle).trim()
  const description = (post.seoDescription?.trim() || post.excerpt?.trim() || title).trim()
  const canonical = `${baseUrl}/blog/${post.slug || ''}`
  const ogImage = mediaAbsoluteUrl(baseUrl, post.ogImage) || mediaAbsoluteUrl(baseUrl, post.featuredImage)

  return {
    title,
    description,
    alternates: { canonical },
    ...(isNoIndexEnabled() || post.noIndex ? { robots: { index: false, follow: false } } : {}),
    openGraph: {
      title,
      description,
      url: canonical,
      type: 'article',
      ...(ogImage ? { images: [{ url: ogImage }] } : {}),
    },
    twitter: {
      card: ogImage ? 'summary_large_image' : 'summary',
      title,
      description,
      ...(ogImage ? { images: [ogImage] } : {}),
    },
  }
}
