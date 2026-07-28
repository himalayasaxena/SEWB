import { draftMode } from 'next/headers'
import { getPayload } from 'payload'

import { logCmsError } from '@/lib/cms/logCmsError'
import type { Post } from '@/payload-types'
import config from '@/payload.config'

export async function getPublishedPosts(limit = 50): Promise<Post[]> {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const res = await payload.find({
    collection: 'posts',
    where: { _status: { equals: 'published' } },
    sort: '-publishedAt',
    limit,
    depth: 2,
  })
  return res.docs as Post[]
}

/** Published post, or latest draft when Next Draft Mode is enabled (after visiting /api/draft with PREVIEW_SECRET). */
export async function getPostBySlug(slug: string): Promise<Post | null> {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { isEnabled: preview } = await draftMode()

  if (preview) {
    const res = await payload.find({
      collection: 'posts',
      where: { slug: { equals: slug } },
      draft: true,
      limit: 1,
      depth: 2,
      overrideAccess: true,
    })
    return (res.docs[0] as Post | undefined) ?? null
  }

  const res = await payload.find({
    collection: 'posts',
    where: {
      and: [{ slug: { equals: slug } }, { _status: { equals: 'published' } }],
    },
    limit: 1,
    depth: 2,
  })
  return (res.docs[0] as Post | undefined) ?? null
}

/** Draft-mode preview route only (`/blog/preview/[id]`). Returns null if Draft Mode is off. */
export async function getPostDocumentByIdForPreviewRoute(id: string): Promise<Post | null> {
  const { isEnabled } = await draftMode()
  if (!isEnabled) return null
  try {
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })
    const doc = await payload.findByID({
      collection: 'posts',
      id,
      draft: true,
      depth: 2,
      overrideAccess: true,
    })
    return doc as Post
  } catch (error) {
    logCmsError('getPostDocumentByIdForPreviewRoute failed', error, { id })
    return null
  }
}

export async function getRelatedPosts(excludeId: string, limit = 4): Promise<Post[]> {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const res = await payload.find({
    collection: 'posts',
    where: {
      and: [{ id: { not_equals: excludeId } }, { _status: { equals: 'published' } }],
    },
    sort: '-publishedAt',
    limit,
    depth: 2,
  })
  return res.docs as Post[]
}
