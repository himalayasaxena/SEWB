import 'dotenv/config'

import { getPayload } from 'payload'

import { defaultNavigation } from '../src/lib/defaultNavigation.js'
import { defaultFooterColumns, defaultFooterSocialLinks, defaultNewsletterPoints } from '../src/lib/defaultFooter.js'
import config from '../src/payload.config.js'

async function main() {
  const payload = await getPayload({ config })

  await payload.updateGlobal({
    slug: 'site',
    data: {
      siteName: 'SEWB - Global Care',
      siteUrl: (process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000').replace(/\/$/, ''),
    },
    overrideAccess: true,
  })

  await payload.updateGlobal({
    slug: 'header',
    data: {
      navigation: defaultNavigation.map((item) => ({
        label: item.label,
        href: item.href,
        ...(item.highlight ? { highlight: true } : {}),
      })),
    },
    overrideAccess: true,
  })

  await payload.updateGlobal({
    slug: 'footer',
    data: {
      newsletterTitle: 'Turn Health Data Into Life-Saving Intelligence',
      newsletterPlaceholder: 'Enter your email',
      newsletterButtonLabel: 'Subscribe',
      newsletterPoints: defaultNewsletterPoints.map((text) => ({ text })),
      tagline:
        'SEWB is an AI-powered health intelligence platform that transforms wearable and medical data into predictive, personalized care.',
      columns: defaultFooterColumns.map((col) => ({
        title: col.title,
        links: (col.links ?? []).map((link) => ({ label: link.label, href: link.href })),
      })),
      socialLinks: defaultFooterSocialLinks.map((s) => ({ label: s.label, url: s.url })),
      contactEmail: 'support@sewb.ai',
      contactAddress: '3 Clunies Ross Court, Eight Mile Plains, QLD 4113, Australia',
      copyrightText: 'Copyright © 2026 SEWB',
      rightsText: 'All Rights Reserved',
      termsLabel: 'Terms and Conditions',
      termsHref: '/terms-conditions',
      privacyLabel: 'Privacy Policy',
      privacyHref: '/privacy-policy',
    },
    overrideAccess: true,
  })

  console.log('[seed:shell] Site, Header, and Footer globals updated.')
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
