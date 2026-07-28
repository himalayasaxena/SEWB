import type { Page } from '@/payload-types'

/** True when the Page layout includes seeded/home CMS section blocks (not banner-only). */
export function isFullCmsHomeLayout(layout: Page['layout']): boolean {
  if (!layout?.length) return false
  return layout.some(
    (b) =>
      b.blockType === 'homeInfrastructure' ||
      b.blockType === 'homeFaq' ||
      b.blockType === 'homeHighlights' ||
      b.blockType === 'homePrivacy' ||
      b.blockType === 'homeAppDownload',
  )
}
