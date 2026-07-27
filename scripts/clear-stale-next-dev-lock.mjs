#!/usr/bin/env node
/**
 * Next.js 16 writes `.next/dev/lock` while `next dev` runs. If the process dies without
 * clearing it (closed terminal, SIGKILL), the next `npm run dev` fails with
 * "Another next dev server is already running." Remove the lock only when the PID is gone.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const lockPath = path.join(root, '.next', 'dev', 'lock')

if (!fs.existsSync(lockPath)) {
  process.exit(0)
}

try {
  const raw = fs.readFileSync(lockPath, 'utf8')
  const lock = JSON.parse(raw)
  const pid = typeof lock.pid === 'number' ? lock.pid : null
  if (pid != null) {
    try {
      process.kill(pid, 0)
      console.error(
        `[next dev] Another dev server is running (PID ${pid}, port ${lock.port ?? '?'}).\n` +
          `Stop it first: kill ${pid}\n` +
          `Or if that PID is wrong: rm -f .next/dev/lock`,
      )
      process.exit(1)
    } catch (e) {
      const err = /** @type {NodeJS.ErrnoException} */ (e)
      if (err.code === 'ESRCH') {
        fs.unlinkSync(lockPath)
        console.warn('[next dev] Removed stale .next/dev/lock (process no longer exists).')
      } else {
        throw e
      }
    }
  } else {
    fs.unlinkSync(lockPath)
    console.warn('[next dev] Removed invalid .next/dev/lock.')
  }
} catch (e) {
  console.warn('[next dev] Could not read lock file; deleting.', e)
  try {
    fs.unlinkSync(lockPath)
  } catch {
    /* ignore */
  }
}
