import type { GlobalConfig } from 'payload'

import { adminOnly, hiddenFromNonAdmins, isNonAdmin } from '@/access/authenticated'

export const Site: GlobalConfig = {
  slug: 'site',
  label: 'Site Settings',
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
  fields: [
    {
      name: 'siteName',
      type: 'text',
      label: 'Site name',
      required: true,
      admin: { description: 'Used in browser title templates and Open Graph site name.' },
    },
    {
      name: 'siteUrl',
      type: 'text',
      label: 'Canonical site URL',
      required: true,
      admin: { description: 'https://yourdomain.com (apex, no trailing slash)' },
    },
    {
      name: 'defaultOgImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Default OG image',
      admin: { description: 'Fallback social share image for pages/posts without a specific OG image.' },
    },
    {
      name: 'organization',
      type: 'group',
      label: 'Organization (JSON-LD)',
      admin: { description: 'Structured data used for SEO rich results.' },
      fields: [
        { name: 'name', type: 'text', label: 'Organization name' },
        { name: 'logo', type: 'upload', relationTo: 'media', label: 'Organization logo' },
        {
          name: 'sameAs',
          type: 'array',
          label: 'Social profile URLs',
          labels: { singular: 'Profile URL', plural: 'Profile URLs' },
          fields: [{ name: 'url', type: 'text', label: 'URL', required: true }],
        },
      ],
    },
  ],
}
