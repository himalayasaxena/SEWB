import { revalidatePath } from 'next/cache'
import type {
  CollectionAfterChangeHook,
  CollectionAfterDeleteHook,
  GlobalAfterChangeHook,
} from 'payload'

import { FIXED_PAGE_SLUGS } from '@/constants/fixedPages'
import { logCmsError } from '@/lib/cms/logCmsError'

/** Public URL path for a fixed Pages collection slug (`home` → `/`). */
export function pathForPageSlug(slug: string): string {
  const trimmed = slug.trim().replace(/^\/+|\/+$/g, '')
  if (!trimmed || trimmed === 'home') return '/'
  return `/${trimmed}`
}

function safeRevalidatePath(path: string, type?: 'page' | 'layout') {
  try {
    if (type) {
      revalidatePath(path, type)
    } else {
      revalidatePath(path)
    }
  } catch (error) {
    logCmsError('revalidatePath failed', error, { path, type })
  }
}

/**
 * Global cache bust for the whole public website.
 * Call this from any Payload afterChange / afterDelete (pages, posts, media, globals, etc.).
 */
export function burstWebsiteCache(): void {
  // Layout wraps every frontend route (header/footer/metadata).
  safeRevalidatePath('/', 'layout')

  for (const slug of FIXED_PAGE_SLUGS) {
    safeRevalidatePath(pathForPageSlug(slug))
  }

  safeRevalidatePath('/blog')
  safeRevalidatePath('/sitemap.xml')
  safeRevalidatePath('/robots.txt')
}

/** @deprecated Prefer `burstWebsiteCache` — kept as an alias for older call sites. */
export const revalidateAllMarketingPages = burstWebsiteCache

/** Payload collection hooks — any create/update/delete bursts the whole site. */
export const burstWebsiteCacheAfterChange: CollectionAfterChangeHook = ({ doc }) => {
  burstWebsiteCache()
  return doc
}

export const burstWebsiteCacheAfterDelete: CollectionAfterDeleteHook = ({ doc }) => {
  burstWebsiteCache()
  return doc
}

/** Payload global hooks — any save bursts the whole site. */
export const burstWebsiteCacheAfterGlobalChange: GlobalAfterChangeHook = ({ doc }) => {
  burstWebsiteCache()
  return doc
}
