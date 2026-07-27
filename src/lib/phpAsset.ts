/** Map legacy `assets/...` or `./assets/...` paths to Next public URLs. */
export function phpAsset(src: string): string {
  const s = src.trim()
  if (s.startsWith('/')) return s
  return `/${s.replace(/^\.\//, '')}`
}
