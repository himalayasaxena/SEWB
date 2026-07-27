import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

import { verifyDraftResume, type DraftResumePayload } from '@/lib/draftResume'

/**
 * Time-limited signed link to re-enable Draft Mode after "Exit preview".
 * Query: collection, id, redirect (encoded URL path on this origin), exp (unix sec), sig (hex hmac).
 */
export async function GET(request: Request) {
  const previewSecret = process.env.PREVIEW_SECRET
  if (!previewSecret) {
    return new Response('Preview not configured', { status: 503 })
  }

  const { searchParams } = new URL(request.url)
  const collection = searchParams.get('collection') as DraftResumePayload['collection'] | null
  const id = searchParams.get('id')
  const redirectPath = searchParams.get('redirect')
  const expRaw = searchParams.get('exp')
  const sig = searchParams.get('sig')

  if (!collection || !id || !redirectPath || !expRaw || !sig) {
    return new Response('Missing parameters', { status: 400 })
  }

  if (collection !== 'pages' && collection !== 'posts') {
    return new Response('Invalid collection', { status: 400 })
  }

  const exp = Number.parseInt(expRaw, 10)
  if (!Number.isFinite(exp) || exp < Math.floor(Date.now() / 1000)) {
    return new Response('Link expired — open Preview again from Payload admin', { status: 410 })
  }

  let redirectDecoded = redirectPath
  try {
    redirectDecoded = decodeURIComponent(redirectPath)
  } catch {
    redirectDecoded = redirectPath
  }

  if (!redirectDecoded.startsWith('/')) {
    return new Response('Invalid redirect', { status: 400 })
  }

  const payload: DraftResumePayload = {
    collection,
    id,
    redirect: redirectDecoded,
    exp,
  }

  if (!verifyDraftResume(previewSecret, sig, payload)) {
    return new Response('Invalid signature', { status: 401 })
  }

  const dm = await draftMode()
  dm.enable()

  redirect(redirectDecoded)
}
