import { act, createElement, type ReactNode } from 'react'
import { createRoot } from 'react-dom/client'
import { describe, expect, it } from 'vitest'

import { SiteFooter } from '@/components/SiteFooter'
import { ContactFullPageSection } from '@/components/blocks/ContactFullPageSection'
import { HomeAppDownloadSection } from '@/components/blocks/HomeAppDownloadSection'
import {
  externalAnchorProps,
  isExternalHref,
  mailtoHref,
  mapsSearchUrl,
  telHref,
} from '@/lib/linkTargets'

async function mount(node: ReactNode) {
  const el = document.createElement('div')
  document.body.appendChild(el)
  const root = createRoot(el)
  await act(async () => {
    root.render(node)
  })
  return el
}

describe('link targets', () => {
  it('builds mailto and tel links from admin text', () => {
    expect(mailtoHref(' Support@sewb.ai ')).toBe('mailto:Support@sewb.ai')
    expect(telHref('+61 07 3473 1700')).toBe('tel:+610734731700')
  })

  it('opens off-site http links in a new tab and leaves site routes alone', () => {
    expect(externalAnchorProps('https://maps.google.com/maps?q=SEWB')).toEqual({
      target: '_blank',
      rel: 'noopener noreferrer',
    })
    expect(externalAnchorProps('/contact')).toEqual({})
    expect(externalAnchorProps('mailto:support@sewb.ai')).toEqual({})
    expect(externalAnchorProps('tel:+610734731700')).toEqual({})
    expect(isExternalHref('https://sewb.ai/about')).toBe(false)
    expect(isExternalHref('javascript:;')).toBe(false)
  })

  it('turns an office address into a Google Maps search', () => {
    expect(mapsSearchUrl('3 Clunies Ross Court, Eight Mile Plains')).toBe(
      'https://www.google.com/maps/search/?api=1&query=3%20Clunies%20Ross%20Court%2C%20Eight%20Mile%20Plains',
    )
  })

  it('renders contact email and phone as device links in the same tab', async () => {
    const view = await mount(
      createElement(ContactFullPageSection, {
        block: {
          blockType: 'contactFullPage',
          hero: { titleLine1: 'Contact' },
          intro: { title: 'Intro' },
          officeCard: { title: 'Office', address: 'Address' },
          reachCard: {
            emailTitle: 'Email Us',
            email: 'Support@sewb.ai',
            phoneTitle: 'Phone Number',
            phone: '+61 07 3473 1700',
          },
          social: { title: 'Follow' },
          form: { title: 'Form' },
          map: { title: 'Map', embedUrl: 'https://maps.google.com' },
        },
      }),
    )
    const email = view.querySelector('a[href="mailto:Support@sewb.ai"]')
    const phone = view.querySelector('a[href="tel:+610734731700"]')
    expect(email?.getAttribute('href')).toBe('mailto:Support@sewb.ai')
    expect(phone?.getAttribute('href')).toBe('tel:+610734731700')
    expect(email?.getAttribute('target')).toBeNull()
    expect(phone?.getAttribute('target')).toBeNull()
  })

  it('opens the footer map and other external urls in a new tab', async () => {
    const view = await mount(
      createElement(SiteFooter, {
        footer: {
          id: 'footer',
          contactAddress: '3 Clunies Ross Court',
          contactMapUrl: 'https://maps.apple.com/?q=SEWB',
          socialLinks: [{ label: 'facebook', url: 'https://facebook.com/sewb' }],
          columns: [
            {
              title: 'Company',
              links: [
                { label: 'About', href: '/about' },
                { label: 'Map', href: 'https://maps.google.com' },
              ],
            },
          ],
        },
      }),
    )
    const address = view.querySelector('a[href="https://maps.apple.com/?q=SEWB"]')
    expect(address?.getAttribute('href')).toBe('https://maps.apple.com/?q=SEWB')
    expect(address?.getAttribute('target')).toBe('_blank')
    expect(address?.getAttribute('rel')).toBe('noopener noreferrer')
    expect(view.querySelector('a[href="/about"]')?.getAttribute('target')).toBeNull()
    expect(view.querySelector('a[href="https://maps.google.com"]')?.getAttribute('target')).toBe('_blank')
    expect(view.querySelector('a[href="https://facebook.com/sewb"]')?.getAttribute('target')).toBe('_blank')
  })

  it('shows home store buttons only when a label and URL are saved', async () => {
    const hidden = await mount(
      createElement(HomeAppDownloadSection, {
        block: {
          blockType: 'homeAppDownload',
          titleLine1: 'Get the app',
          appStoreLabel: 'Download on the App Store',
          playStoreLabel: 'Get it on Google Play',
        },
      }),
    )
    expect(hidden.querySelector('a.primary-btn')).toBeNull()

    const shown = await mount(
      createElement(HomeAppDownloadSection, {
        block: {
          blockType: 'homeAppDownload',
          titleLine1: 'Get the app',
          appStoreLabel: 'Download on the App Store',
          appStoreUrl: 'https://apps.apple.com/app/id1',
          playStoreLabel: 'Get it on Google Play',
          playStoreUrl: 'https://play.google.com/store/apps/details?id=ai.sewb',
        },
      }),
    )
    const apple = shown.querySelector('a[href="https://apps.apple.com/app/id1"]')
    const google = shown.querySelector(
      'a[href="https://play.google.com/store/apps/details?id=ai.sewb"]',
    )
    expect(apple?.textContent).toBe('Download on the App Store')
    expect(google?.textContent).toBe('Get it on Google Play')
    expect(apple?.getAttribute('target')).toBe('_blank')
    expect(google?.getAttribute('target')).toBe('_blank')
  })
})
