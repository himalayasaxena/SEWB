import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import type { Media } from '../src/payload-types.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
export const cmsRoot = path.join(__dirname, '..')
export const publicDir = path.join(cmsRoot, 'public')

export function seedMediaAlt(publicRelativePath: string): string {
  return `SEWB seed · ${publicRelativePath}`
}

export async function ensureMediaId(
  payload: { find: Function; create: Function },
  publicRelativePath: string,
  pathCache: Map<string, string>,
): Promise<string | undefined> {
  if (pathCache.has(publicRelativePath)) {
    return pathCache.get(publicRelativePath)
  }

  const abs = path.join(publicDir, publicRelativePath)
  if (!fs.existsSync(abs)) {
    console.warn(`[seed] Missing public file, skip: ${publicRelativePath}`)
    return undefined
  }

  const alt = seedMediaAlt(publicRelativePath)
  const existing = await payload.find({
    collection: 'media',
    where: { alt: { equals: alt } },
    limit: 1,
    overrideAccess: true,
  })
  const first = existing.docs[0] as Media | undefined
  if (first?.id) {
    pathCache.set(publicRelativePath, first.id)
    return first.id
  }

  const created = await payload.create({
    collection: 'media',
    data: { alt },
    filePath: abs,
    overrideAccess: true,
  })
  pathCache.set(publicRelativePath, created.id)
  return created.id
}

export async function ensureMediaFromBuffer(
  payload: { find: Function; create: Function },
  alt: string,
  filePath: string,
  pathCache: Map<string, string>,
): Promise<string | undefined> {
  if (pathCache.has(alt)) {
    return pathCache.get(alt)
  }

  const existing = await payload.find({
    collection: 'media',
    where: { alt: { equals: alt } },
    limit: 1,
    overrideAccess: true,
  })
  const first = existing.docs[0] as Media | undefined
  if (first?.id) {
    pathCache.set(alt, first.id)
    return first.id
  }

  const created = await payload.create({
    collection: 'media',
    data: { alt },
    filePath,
    overrideAccess: true,
  })
  pathCache.set(alt, created.id)
  return created.id
}
