import { createHmac, timingSafeEqual } from 'node:crypto'

/** Params signed for `/api/draft/resume` — enables draft mode without exposing PREVIEW_SECRET in static HTML. */
export type DraftResumePayload = {
  collection: 'pages' | 'posts'
  id: string
  redirect: string
  exp: number
}

export function signDraftResume(secret: string, p: DraftResumePayload): string {
  const msg = `${p.collection}:${p.id}:${p.redirect}:${p.exp}`
  return createHmac('sha256', secret).update(msg).digest('hex')
}

export function verifyDraftResume(secret: string, sig: string, p: DraftResumePayload): boolean {
  try {
    const expected = signDraftResume(secret, p)
    const a = Buffer.from(sig, 'hex')
    const b = Buffer.from(expected, 'hex')
    if (a.length !== b.length) return false
    return timingSafeEqual(a, b)
  } catch {
    return false
  }
}
