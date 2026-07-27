import type { Metadata } from 'next'

/** When true, the public site is hidden from search engines (meta robots, robots.txt, sitemap). */
export function isNoIndexEnabled(): boolean {
  const value = process.env.NO_INDEX ?? process.env.NEXT_PUBLIC_NO_INDEX
  return value === 'true' || value === '1'
}

export const siteNoIndexRobots: NonNullable<Metadata['robots']> = {
  index: false,
  follow: false,
}

export function withSiteNoIndex(metadata: Metadata = {}): Metadata {
  if (!isNoIndexEnabled()) return metadata
  return { ...metadata, robots: siteNoIndexRobots }
}
