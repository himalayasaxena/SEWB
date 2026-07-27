import { draftMode } from 'next/headers'
import { getPayload } from 'payload'

import type { Page } from '@/payload-types'
import config from '@/payload.config'

/** Published CMS Page by slug, or latest draft when Draft Mode is enabled via /api/draft. */
export async function getPublishedPageBySlug(slug: string): Promise<Page | null> {
  try {
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })
    const { isEnabled: preview } = await draftMode()

    if (preview) {
      const res = await payload.find({
        collection: 'pages',
        where: { slug: { equals: slug } },
        draft: true,
        limit: 1,
        depth: 2,
        overrideAccess: true,
      })
      return (res.docs[0] as Page | undefined) ?? null
    }

    const res = await payload.find({
      collection: 'pages',
      where: {
        and: [{ slug: { equals: slug } }, { _status: { equals: 'published' } }],
      },
      limit: 1,
      depth: 2,
    })
    return (res.docs[0] as Page | undefined) ?? null
  } catch {
    return null
  }
}

/** Draft-mode preview route only (`/preview/pages/[id]`). Returns null if Draft Mode is off. */
export async function getPageDocumentByIdForPreviewRoute(id: string): Promise<Page | null> {
  const { isEnabled } = await draftMode()
  if (!isEnabled) return null
  try {
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })
    const doc = await payload.findByID({
      collection: 'pages',
      id,
      draft: true,
      depth: 2,
      overrideAccess: true,
    })
    return doc as Page
  } catch {
    return null
  }
}
