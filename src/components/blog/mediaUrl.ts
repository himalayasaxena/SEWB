import type { Media } from '@/payload-types'

/** Strip absolute media URLs so images work on any public domain after deploy. */
function normalizeMediaPath(url: string): string | null {
  if (url.startsWith('/api/media/')) return url
  if (url.startsWith('http://') || url.startsWith('https://')) {
    try {
      const path = new URL(url).pathname
      if (path.startsWith('/api/media/')) return path
    } catch {
      return null
    }
  }
  return null
}

/** Public URL for an uploaded media relation (fallback image if missing). */
export function mediaPublicUrl(image: string | Media | null | undefined, fallback = '/assets/img/blog/1.webp'): string {
  if (!image || typeof image === 'string') return fallback
  if (typeof image.url === 'string' && image.url.length > 0) {
    return normalizeMediaPath(image.url) ?? image.url
  }
  return fallback
}

export function formatPostDate(iso?: string | null): string {
  if (!iso) return ''
  try {
    return new Intl.DateTimeFormat('en-AU', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(iso))
  } catch {
    return iso
  }
}
