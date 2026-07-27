import { getPayload } from 'payload'

import type { Media } from '@/payload-types'
import config from '@/payload.config'

export function envFallbackBase(): string {
  return (process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000').replace(/\/$/, '')
}

function normalizeBaseUrl(u: string): string {
  const t = u.trim().replace(/\/$/, '')
  if (!t) return ''
  try {
    void new URL(t)
    return t
  } catch {
    return ''
  }
}

/** Ignore seeded/dev canonical overrides (e.g. http://localhost:3000 from local CMS). */
export function isUntrustedCanonicalUrl(url: string | undefined | null): boolean {
  const raw = typeof url === 'string' ? url.trim() : ''
  if (!raw) return true
  try {
    const { hostname } = new URL(raw)
    return hostname === 'localhost' || hostname === '127.0.0.1'
  } catch {
    return true
  }
}

/** Prefer CMS global `siteUrl`; otherwise env/public URL (no trailing slash). */
export function canonicalBaseFromSiteUrl(siteUrl: string | undefined | null): string {
  const raw = typeof siteUrl === 'string' ? siteUrl : ''
  if (!isUntrustedCanonicalUrl(raw)) {
    const normalized = normalizeBaseUrl(raw)
    if (normalized) return normalized
  }
  return envFallbackBase()
}

/** Apex canonical base (no trailing slash) for sitemap, robots, and metadataBase. */
export async function getSiteBaseUrl(): Promise<string> {
  const fallback = envFallbackBase()
  try {
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })
    const site = await payload.findGlobal({ slug: 'site' })
    const raw = typeof site.siteUrl === 'string' ? site.siteUrl : ''
    if (!isUntrustedCanonicalUrl(raw)) {
      const normalized = normalizeBaseUrl(raw)
      if (normalized) return normalized
    }
  } catch {
    // DB unavailable (e.g. static export probe) — use env
  }
  return fallback
}

/** Absolute URL for a Media doc or uploaded relation; returns undefined if not resolvable. */
export function mediaAbsoluteUrl(
  base: string,
  media: string | Media | null | undefined,
): string | undefined {
  if (!media || typeof media === 'string') return undefined
  const u = media.url
  if (typeof u !== 'string' || !u) return undefined
  if (u.startsWith('http://') || u.startsWith('https://')) return u
  if (u.startsWith('/')) return `${base}${u}`
  return `${base}/${u}`
}
