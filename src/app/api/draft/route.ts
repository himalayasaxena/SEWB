import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

/**
 * Enables Next.js Draft Mode after validating PREVIEW_SECRET, then redirects to the target URL.
 * Use from Payload admin Preview / Live Preview: /api/draft?secret=…&slug=post-slug OR &path=/about
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const secret = searchParams.get('secret')
  const previewSecret = process.env.PREVIEW_SECRET

  if (!previewSecret || secret !== previewSecret) {
    return new Response('Invalid token', { status: 401 })
  }

  const dm = await draftMode()
  dm.enable()

  const collection = searchParams.get('collection')
  const docId = searchParams.get('id')
  if (collection === 'posts' && docId) {
    redirect(`/blog/preview/${docId}`)
  }
  if (collection === 'pages' && docId) {
    redirect(`/preview/pages/${docId}`)
  }

  const slug = searchParams.get('slug')
  const path = searchParams.get('path')

  if (slug) {
    redirect(`/blog/${slug}`)
  }
  if (path && path.startsWith('/')) {
    redirect(path)
  }
  redirect('/')
}
