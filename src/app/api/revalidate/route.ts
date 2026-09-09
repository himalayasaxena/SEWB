import { revalidatePath } from 'next/cache'
import { NextResponse } from 'next/server'

import { FIXED_PAGE_SLUGS } from '@/constants/fixedPages'
import { pathForPageSlug, revalidateAllMarketingPages } from '@/lib/cms/revalidateFrontend'

/**
 * On-demand cache bust for production.
 * GET /api/revalidate?secret=…&path=/about
 * GET /api/revalidate?secret=…&all=1
 *
 * Uses PREVIEW_SECRET (or REVALIDATE_SECRET if set).
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const secret = searchParams.get('secret')
  const expected = process.env.REVALIDATE_SECRET || process.env.PREVIEW_SECRET

  if (!expected || secret !== expected) {
    return NextResponse.json({ ok: false, error: 'Invalid token' }, { status: 401 })
  }

  const all = searchParams.get('all') === '1' || searchParams.get('all') === 'true'
  if (all) {
    revalidateAllMarketingPages()
    return NextResponse.json({
      ok: true,
      revalidated: ['layout', ...FIXED_PAGE_SLUGS.map(pathForPageSlug), '/blog', '/sitemap.xml'],
    })
  }

  const path = searchParams.get('path')
  if (!path || !path.startsWith('/') || path.includes('://') || path.includes('..')) {
    return NextResponse.json(
      { ok: false, error: 'Provide path=/about or all=1' },
      { status: 400 },
    )
  }

  revalidatePath(path)
  return NextResponse.json({ ok: true, revalidated: [path] })
}
