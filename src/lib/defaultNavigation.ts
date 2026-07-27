/** Fallback nav when Payload Header global is empty (paths match PHP → Next routes). */
export type NavLink = {
  label: string
  href: string
  highlight?: boolean
}

export const defaultNavigation: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Features', href: '/features' },
  { label: 'Health Professionals', href: '/health-professionals' },
  { label: 'Individuals', href: '/individuals' },
  { label: 'Organisations', href: '/organisations' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
  { label: 'Login', href: 'javascript:;', highlight: true },
]

function normalizeNavHref(href: string): string {
  const base = href.split('?')[0] || '/'
  if (base.length > 1 && base.endsWith('/')) return base.slice(0, -1)
  return base || '/'
}

/** CMS nav wins for known items; missing defaults (e.g. Blog) are always restored. */
export function resolveNavigation(cmsNav: unknown): NavLink[] {
  const cms: NavLink[] = []
  if (Array.isArray(cmsNav)) {
    for (const item of cmsNav) {
      if (!item || typeof item.label !== 'string' || typeof item.href !== 'string') continue
      cms.push({
        label: item.label,
        href: item.href,
        highlight: Boolean(item.highlight),
      })
    }
  }
  if (!cms.length) return defaultNavigation

  const byHref = new Map(cms.map((item) => [normalizeNavHref(item.href), item]))
  const merged: NavLink[] = []

  for (const def of defaultNavigation) {
    merged.push(byHref.get(normalizeNavHref(def.href)) ?? def)
    byHref.delete(normalizeNavHref(def.href))
  }

  if (byHref.size) {
    const extras = [...byHref.values()]
    const loginIndex = merged.findIndex((item) => normalizeNavHref(item.href) === 'javascript:;')
    if (loginIndex >= 0) merged.splice(loginIndex, 0, ...extras)
    else merged.push(...extras)
  }

  return merged
}
