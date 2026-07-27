'use server'

import { headers } from 'next/headers'
import { getPayload } from 'payload'

import { rateLimitIp } from '@/lib/rateLimitIp'
import config from '@/payload.config'

export type ContactActionState = {
  ok?: boolean
  error?: string
}

async function clientIp(): Promise<string> {
  const h = await headers()
  const xf = h.get('x-forwarded-for')
  if (xf) {
    return xf.split(',')[0]?.trim() || 'unknown'
  }
  return h.get('x-real-ip') || 'unknown'
}

export async function submitContact(
  _prev: ContactActionState | null,
  formData: FormData,
): Promise<ContactActionState> {
  const trap = formData.get('website')
  if (trap != null && String(trap).trim() !== '') {
    return { ok: true }
  }

  const ip = await clientIp()
  if (!rateLimitIp(ip)) {
    return { error: 'Too many submissions from this address. Please try again later.' }
  }

  const name = String(formData.get('name') ?? '').trim()
  const street = String(formData.get('street') ?? '').trim()
  const city = String(formData.get('city') ?? '').trim()
  const postCode = String(formData.get('postCode') ?? '').trim()
  const phone = String(formData.get('phone') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()

  if (!name || !street || !phone || !email) {
    return { error: 'Please fill in all required fields.' }
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  if (!emailOk) {
    return { error: 'Please enter a valid email address.' }
  }

  try {
    const payloadConfig = await config
    const payload = await getPayload({ config: payloadConfig })
    await payload.create({
      collection: 'form-submissions',
      data: {
        form: 'contact',
        name,
        street,
        city: city || undefined,
        postCode: postCode || undefined,
        phone,
        email,
        message: message || undefined,
      },
      overrideAccess: true,
    })
    return { ok: true }
  } catch {
    return { error: 'Something went wrong. Please try again later.' }
  }
}
