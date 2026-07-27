import { getPayload } from 'payload'

import { editorDisplayName, editorFromPost, isStaffUser } from '@/lib/cms/userAuthor'
import type { Category, Post, User } from '@/payload-types'
import config from '@/payload.config'

export type CategoryWithCount = {
  category: Category
  count: number
}

export type EditorWithCount = {
  editor: User
  count: number
}

function categoryId(value: string | Category): string {
  return typeof value === 'string' ? value : value.id
}

export async function getCategoryPostCounts(): Promise<CategoryWithCount[]> {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const [categoryRes, postRes] = await Promise.all([
    payload.find({ collection: 'categories', limit: 100, sort: 'title' }),
    payload.find({
      collection: 'posts',
      where: { _status: { equals: 'published' } },
      limit: 500,
      depth: 0,
    }),
  ])

  const counts = new Map<string, number>()
  for (const post of postRes.docs) {
    for (const cat of post.categories ?? []) {
      const id = categoryId(cat)
      counts.set(id, (counts.get(id) ?? 0) + 1)
    }
  }

  return (categoryRes.docs as Category[])
    .map((category) => ({ category, count: counts.get(category.id) ?? 0 }))
    .filter((row) => row.count > 0)
    .sort((a, b) => b.count - a.count || a.category.title.localeCompare(b.category.title))
}

/** Users who have published at least one post, ranked by post count. */
export async function getTopAuthors(limit = 3): Promise<EditorWithCount[]> {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const postRes = await payload.find({
    collection: 'posts',
    where: { _status: { equals: 'published' } },
    limit: 500,
    depth: 2,
  })

  const byEditor = new Map<string, EditorWithCount>()
  for (const post of postRes.docs as Post[]) {
    const editor = editorFromPost(post)
    if (!editor || !isStaffUser(editor)) continue
    const existing = byEditor.get(editor.id)
    if (existing) existing.count += 1
    else byEditor.set(editor.id, { editor, count: 1 })
  }

  return [...byEditor.values()]
    .sort((a, b) => b.count - a.count || editorDisplayName(a.editor).localeCompare(editorDisplayName(b.editor)))
    .slice(0, limit)
}

export type AuthorWithCount = EditorWithCount

/** @deprecated Use getTopAuthors */
export const getTopEditors = getTopAuthors
