'use client'

import { useLivePreview } from '@payloadcms/live-preview-react'

import type { Page } from '@/payload-types'

import { PageBlocks } from '@/components/PageBlocks'
import { HomePageBanner } from '@/components/pages/HomePageBanner'
import { HomePageMain } from '@/components/pages/HomePageMain'
import { isFullCmsHomeLayout } from '@/lib/cms/isFullCmsHomeLayout'

/**
 * Entire homepage from CMS `layout` (banner + all home blocks) with live postMessage updates.
 */
export function HomePageLivePreview({ initialPage }: { initialPage: Page }) {
  const serverURL = (process.env.NEXT_PUBLIC_SERVER_URL || '').replace(/\/$/, '') || 'http://localhost:3000'

  const { data: page } = useLivePreview<Page>({
    initialData: initialPage,
    serverURL,
    depth: 2,
  })

  const layout = page.layout ?? []
  const useCms = isFullCmsHomeLayout(layout)

  return (
    <>
      <div className="border-bottom bg-dark text-white py-2 px-3 small text-center" role="status">
        <strong>Live preview</strong>
        <span className="ms-2 opacity-75">{page.title}</span>
        {page.seoTitle ? <span className="ms-2 opacity-75">· {page.seoTitle}</span> : null}
      </div>

      {useCms && layout.length > 0 ?
        <PageBlocks layout={layout} />
      : <>
          <HomePageBanner />
          <HomePageMain />
        </>
      }
    </>
  )
}
