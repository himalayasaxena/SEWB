import Link from 'next/link'
import type { ReactNode } from 'react'

import { externalAnchorProps, isInternalAppPath } from '@/lib/linkTargets'

type HrefProps = {
  href: string
  className?: string
  id?: string
  children: ReactNode
}

/** Internal paths stay in this tab. External http(s) URLs open in a new tab. */
export function Href({ href, className, id, children }: HrefProps) {
  const external = externalAnchorProps(href)
  if (external.target || !isInternalAppPath(href)) {
    return (
      <a href={href} id={id} className={className} {...external}>
        {children}
      </a>
    )
  }
  return (
    <Link href={href} id={id} className={className}>
      {children}
    </Link>
  )
}
