'use client'

import { usePathname } from 'next/navigation'

function isPreviewPath(pathname: string): boolean {
  return pathname.startsWith('/preview/') || pathname.startsWith('/blog/preview/')
}

export function DraftPreviewBarClient({ isDraftEnabled }: { isDraftEnabled: boolean }) {
  const pathname = usePathname()
  const previewPath = isPreviewPath(pathname || '/')

  if (!isDraftEnabled || !previewPath) return null

  return (
    <div
      className="bg-dark text-white py-2 px-3 text-center small"
      style={{ position: 'sticky', top: 0, zIndex: 1080 }}
      role="status"
    >
      Draft preview — showing unpublished changes.{' '}
      <a href="/api/draft/disable" className="text-white fw-semibold text-decoration-underline">
        Exit preview
      </a>
    </div>
  )
}
