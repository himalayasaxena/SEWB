import { getCategoryPostCounts, getTopAuthors } from '@/lib/cms/getBlogSidebarData'
import { getRelatedPosts } from '@/lib/cms/getPublishedPosts'
import { getPayload } from 'payload'

import type { Category, Post } from '@/payload-types'
import config from '@/payload.config'

import { BlogPostLiveClient } from './BlogPostLiveClient'

async function getCategories(): Promise<Category[]> {
  try {
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })
    const res = await payload.find({ collection: 'categories', limit: 100, sort: 'title' })
    return res.docs as Category[]
  } catch {
    return []
  }
}

export async function BlogPostView({ post }: { post: Post }) {
  const [related, categories, topAuthors, categoryCounts] = await Promise.all([
    getRelatedPosts(post.id, 4),
    getCategories(),
    getTopAuthors(3),
    getCategoryPostCounts(),
  ])

  return (
    <BlogPostLiveClient
      initialPost={post}
      relatedPosts={related}
      categories={categories}
      topAuthors={topAuthors.map(({ editor }) => editor)}
      categoryCounts={categoryCounts}
    />
  )
}
