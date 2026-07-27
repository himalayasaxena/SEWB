'use client'

import { useLivePreview } from '@payloadcms/live-preview-react'

import type { Page, Post } from '@/payload-types'

import { PageBlocks } from '@/components/PageBlocks'

/**
 * Live Preview for Payload **Pages** from `layout` blocks (bannerSlider, commonHero, sectionIntro).
 * **Home (`slug === home`)** uses `/preview/pages/[id]` with the full `HomePage` template instead — same as production `/`.
 */
export function PageLivePreviewClient({
  initialPage,
  blogPosts,
}: {
  initialPage: Page
  /** Pass for `/blog` so `blogIndexFeed` can render in this client shell. */
  blogPosts?: Post[]
}) {
  const serverURL = (process.env.NEXT_PUBLIC_SERVER_URL || '').replace(/\/$/, '') || 'http://localhost:3000'

  const { data: page } = useLivePreview<Page>({
    initialData: initialPage,
    serverURL,
    depth: 2,
  })

  return (
    <article className="custom-container container-fluid py-5">
      <header className="mb-4 border-bottom pb-3">
        <p className="text-muted small mb-1">Live preview</p>
        <h1 className="h2">{page.title}</h1>
        <p className="small mb-0">
          Slug: <code>{page.slug}</code>
        </p>
      </header>
      {page.layout?.length ? (
        <PageBlocks layout={page.layout} blogPosts={blogPosts} />
      ) : (
        <p className="text-muted">
          No layout blocks yet — add sections in the admin, or edit SEO fields in the sidebar. Static marketing templates
          (e.g. About) stay in code until you migrate content into blocks.
        </p>
      )}
    </article>
  )
}
