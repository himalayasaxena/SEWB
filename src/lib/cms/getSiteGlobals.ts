import { getPayload } from 'payload'

import { logCmsError } from '@/lib/cms/logCmsError'
import type { Footer, Header, Site } from '@/payload-types'
import config from '@/payload.config'

/**
 * Public marketing chrome / site settings.
 * Header/Footer/Site `read` denies non-admin users, so Local API must override
 * access — otherwise logged-in editors browsing the site get empty/default chrome.
 */
async function payloadClient() {
  const payloadConfig = await config
  return getPayload({ config: payloadConfig })
}

export async function getSiteGlobal(depth = 0): Promise<Site | null> {
  try {
    const payload = await payloadClient()
    return (await payload.findGlobal({
      slug: 'site',
      depth,
      overrideAccess: true,
    })) as Site
  } catch (error) {
    logCmsError('getSiteGlobal failed — metadata may use env/fallback', error, { depth })
    return null
  }
}

export async function getHeaderGlobal(): Promise<Header | null> {
  try {
    const payload = await payloadClient()
    return (await payload.findGlobal({
      slug: 'header',
      overrideAccess: true,
    })) as Header
  } catch (error) {
    logCmsError('getHeaderGlobal failed — layout may use default navigation', error)
    return null
  }
}

export async function getFooterGlobal(): Promise<Footer | null> {
  try {
    const payload = await payloadClient()
    return (await payload.findGlobal({
      slug: 'footer',
      overrideAccess: true,
    })) as Footer
  } catch (error) {
    logCmsError('getFooterGlobal failed — layout may use default footer', error)
    return null
  }
}
