import type { GlobalAfterChangeHook, GlobalConfig } from 'payload'

import { adminOnly, hiddenFromNonAdmins, isNonAdmin } from '@/access/authenticated'
import { revalidateSiteChrome } from '@/lib/cms/revalidateFrontend'

const revalidateChromeAfterChange: GlobalAfterChangeHook = ({ doc }) => {
  revalidateSiteChrome()
  return doc
}

export const Footer: GlobalConfig = {
  slug: 'footer',
  label: 'Footer Content',
  admin: {
    group: 'Website Content',
    hidden: hiddenFromNonAdmins,
  },
  access: {
    read: ({ req: { user } }) => {
      if (isNonAdmin(user)) return false
      return true
    },
    update: adminOnly,
  },
  hooks: {
    afterChange: [revalidateChromeAfterChange],
  },
  fields: [
    {
      name: 'newsletterTitle',
      type: 'textarea',
      label: 'Newsletter title',
      defaultValue: 'Turn Health Data Into Life-Saving Intelligence',
    },
    {
      name: 'newsletterPlaceholder',
      type: 'text',
      defaultValue: 'Enter your email',
    },
    {
      name: 'newsletterButtonLabel',
      type: 'text',
      defaultValue: 'Subscribe',
    },
    {
      name: 'newsletterPoints',
      type: 'array',
      labels: { singular: 'Point', plural: 'Points' },
      fields: [{ name: 'text', type: 'text', required: true }],
    },
    {
      name: 'tagline',
      type: 'textarea',
      label: 'Brand tagline',
      defaultValue:
        'SEWB is an AI-powered health intelligence platform that transforms wearable and medical data into predictive, personalized care.',
    },
    {
      name: 'columns',
      type: 'array',
      labels: { singular: 'Column', plural: 'Columns' },
      fields: [
        { name: 'title', type: 'text', required: true },
        {
          name: 'links',
          type: 'array',
          labels: { singular: 'Link', plural: 'Links' },
          fields: [
            { name: 'label', type: 'text', required: true },
            { name: 'href', type: 'text', required: true },
          ],
        },
      ],
    },
    {
      name: 'socialLinks',
      type: 'array',
      labels: { singular: 'Social link', plural: 'Social links' },
      fields: [
        { name: 'label', type: 'text' },
        { name: 'url', type: 'text', required: true },
      ],
    },
    {
      name: 'contactEmail',
      type: 'text',
      defaultValue: 'support@sewb.ai',
    },
    {
      name: 'contactAddress',
      type: 'textarea',
      defaultValue: '3 Clunies Ross Court, Eight Mile Plains, QLD 4113, Australia',
    },
    {
      name: 'copyrightText',
      type: 'text',
      defaultValue: 'Copyright © 2026 SEWB',
    },
    {
      name: 'rightsText',
      type: 'text',
      defaultValue: 'All Rights Reserved',
    },
    {
      name: 'termsLabel',
      type: 'text',
      defaultValue: 'Terms and Conditions',
    },
    {
      name: 'termsHref',
      type: 'text',
      defaultValue: '/terms-conditions',
    },
    {
      name: 'privacyLabel',
      type: 'text',
      defaultValue: 'Privacy Policy',
    },
    {
      name: 'privacyHref',
      type: 'text',
      defaultValue: '/privacy-policy',
    },
  ],
}
