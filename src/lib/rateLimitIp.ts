/** Simple per-process IP rate limit (fine for single-instance / Docker web × 1). */
const WINDOW_MS = 15 * 60 * 1000
const MAX_REQUESTS = 20

type Entry = { count: number; windowStart: number }

const buckets = new Map<string, Entry>()

export function rateLimitIp(ip: string): boolean {
  const now = Date.now()
  let e = buckets.get(ip)
  if (!e || now - e.windowStart > WINDOW_MS) {
    e = { count: 1, windowStart: now }
    buckets.set(ip, e)
    return true
  }
  if (e.count >= MAX_REQUESTS) {
    return false
  }
  e.count += 1
  return true
}
