import type { Media } from '@/payload-types'

/** Resolved media URL for SSR (Payload upload or API path). */
export function mediaUrl(media: string | Media | null | undefined): string {
  if (!media || typeof media === 'string') {
    return typeof media === 'string' ? media : ''
  }
  return media.url || ''
}
