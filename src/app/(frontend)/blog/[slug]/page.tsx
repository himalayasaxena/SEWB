import { notFound } from 'next/navigation'

import { BlogPostView } from '@/components/blog/BlogPostView'
import { getPostBySlug } from '@/lib/cms/getPublishedPosts'
import { metadataFromPost } from '@/lib/cms/metadataFromPost'
import { getSiteBaseUrl } from '@/lib/siteBaseUrl'

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params
  const post = await getPostBySlug(slug)
  const base = await getSiteBaseUrl()
  if (!post) return { title: 'Article' }
  return metadataFromPost(post, base)
}

export default async function Page(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params
  const post = await getPostBySlug(slug)
  if (!post) notFound()
  return <BlogPostView post={post} />
}
