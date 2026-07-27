import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import { HomePageLivePreview } from '@/components/cms/HomePageLivePreview'
import { PageLivePreviewClient } from '@/components/cms/PageLivePreviewClient'
import { getPageDocumentByIdForPreviewRoute } from '@/lib/cms/getPublishedPage'
import { getPublishedPosts } from '@/lib/cms/getPublishedPosts'

export async function generateMetadata(props: { params: Promise<{ id: string }> }) {
  const { isEnabled } = await draftMode()
  if (!isEnabled) {
    return { title: 'Preview', robots: { index: false, follow: false } }
  }
  const { id } = await props.params
  const page = await getPageDocumentByIdForPreviewRoute(id)
  if (!page) return { title: 'Preview', robots: { index: false, follow: false } }
  return {
    title: page.title,
    robots: { index: false, follow: false },
  }
}

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params
  const page = await getPageDocumentByIdForPreviewRoute(id)
  if (!page) notFound()

  const blogPosts = page.slug === 'blog' ? await getPublishedPosts(24) : undefined

  /** Banner + CMS blocks update live via `useLivePreview`; body matches production `HomePageMain`. */
  if (page.slug === 'home') {
    return <HomePageLivePreview initialPage={page} />
  }

  return <PageLivePreviewClient initialPage={page} blogPosts={blogPosts} />
}
