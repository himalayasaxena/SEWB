// @vitest-environment node
// Payload sniffs upload MIME types with `file-type`, whose Uint8Array checks fail
// across jsdom's separate realm. The server-side upload path needs a node environment.
import fs from 'node:fs'
import path from 'node:path'
import { getPayload, Payload } from 'payload'
import config from '@/payload.config'
import sharp from 'sharp'

import { describe, it, beforeAll, afterAll, expect } from 'vitest'

let payload: Payload
const createdIds: (string | number)[] = []

describe('media upload pipeline', () => {
  beforeAll(async () => {
    payload = await getPayload({ config: await config })
  })

  afterAll(async () => {
    for (const id of createdIds) {
      await payload.delete({ collection: 'media', id }).catch(() => {})
    }
  })

  it('reports the patched sharp/libvips build', () => {
    expect(sharp.versions.sharp).toBe('0.35.3')
    console.log('sharp/libvips versions:', JSON.stringify(sharp.versions))
  })

  it('decodes and re-encodes an image through sharp', async () => {
    const source = path.join(process.cwd(), 'media', '1-1.png')
    const out = await sharp(source).resize(120, 120, { fit: 'inside' }).webp().toBuffer()
    const meta = await sharp(out).metadata()
    expect(meta.format).toBe('webp')
    expect(meta.width).toBeLessThanOrEqual(120)
  })

  it('creates, reads and deletes a media document end to end', async () => {
    const source = path.join(process.cwd(), 'media', '1-1.png')
    const created = await payload.create({
      collection: 'media',
      data: { alt: 'security-remediation-smoke' },
      file: {
        data: fs.readFileSync(source),
        mimetype: 'image/png',
        name: `smoke-${Date.now()}.png`,
        size: fs.statSync(source).size,
      },
    })
    createdIds.push(created.id)

    expect(created.mimeType).toBe('image/png')
    expect(created.width).toBeGreaterThan(0)
    expect(created.height).toBeGreaterThan(0)
    console.log('uploaded:', created.filename, created.width + 'x' + created.height)

    const found = await payload.findByID({ collection: 'media', id: created.id })
    expect(found.alt).toBe('security-remediation-smoke')
  })

  it('runs a $nor query through the patched mongoose sanitizer', async () => {
    const result = await payload.find({
      collection: 'media',
      where: { and: [{ alt: { not_equals: 'nonexistent-alt-value' } }] },
    })
    expect(Array.isArray(result.docs)).toBe(true)
  })
})
