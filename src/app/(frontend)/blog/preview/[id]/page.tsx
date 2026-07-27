import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import { BlogPostView } from '@/components/blog/BlogPostView'
import { getPostDocumentByIdForPreviewRoute } from '@/lib/cms/getPublishedPosts'
import { metadataFromPost } from '@/lib/cms/metadataFromPost'
import { getSiteBaseUrl } from '@/lib/siteBaseUrl'

export async function generateMetadata(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params
  const { isEnabled } = await draftMode()
  if (!isEnabled) {
    return { title: 'Preview', robots: { index: false, follow: false } }
  }
  const post = await getPostDocumentByIdForPreviewRoute(id)
  const base = await getSiteBaseUrl()
  if (!post) return { title: 'Preview', robots: { index: false, follow: false } }
  return {
    ...metadataFromPost(post, base),
    robots: { index: false, follow: false },
  }
}

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params
  const post = await getPostDocumentByIdForPreviewRoute(id)
  if (!post) notFound()
  return <BlogPostView post={post} />
}
