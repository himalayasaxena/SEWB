const INTERNAL_HOSTS = new Set(['sewb.ai', 'www.sewb.ai', 'localhost', '127.0.0.1'])

/** Same-site path, hash, or query. Stays in the current tab. */
export function isInternalAppPath(href: string): boolean {
  const value = href.trim()
  return value.startsWith('/') || value.startsWith('#') || value.startsWith('?')
}

/** http(s) URL on a different host. mailto and tel stay with the device. */
export function isExternalHref(href: string | null | undefined): boolean {
  const value = href?.trim() ?? ''
  if (!/^https?:\/\//i.test(value)) return false
  try {
    const url = new URL(value)
    const host = url.hostname.toLowerCase()
    if (INTERNAL_HOSTS.has(host)) return false
    const envBase = process.env.NEXT_PUBLIC_SERVER_URL
    if (envBase) {
      try {
        if (new URL(envBase).hostname.toLowerCase() === host) return false
      } catch {
        /* ignore an invalid public URL */
      }
    }
    return url.protocol === 'http:' || url.protocol === 'https:'
  } catch {
    return false
  }
}

/** New-tab attributes for an external URL. Empty for internal, mailto, and tel links. */
export function externalAnchorProps(href: string | null | undefined): {
  target?: '_blank'
  rel?: 'noopener noreferrer'
} {
  if (!isExternalHref(href)) return {}
  return { target: '_blank', rel: 'noopener noreferrer' }
}

export function mailtoHref(email: string): string {
  return `mailto:${email.trim()}`
}

/** Keep a leading + and digits so "+61 07 3473 1700" becomes tel:+610734731700. */
export function telHref(phone: string): string {
  return `tel:${phone.replace(/[^\d+]/g, '')}`
}

export function mapsSearchUrl(address: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address.trim())}`
}
