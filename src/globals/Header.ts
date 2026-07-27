import type { GlobalConfig } from 'payload'

import { adminOnly, hiddenFromNonAdmins, isNonAdmin } from '@/access/authenticated'

export const Header: GlobalConfig = {
  slug: 'header',
  label: 'Header Menu',
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
      name: 'navigation',
      type: 'array',
      label: 'Navigation menu',
      labels: { singular: 'Navigation item', plural: 'Navigation items' },
      admin: {
        description: 'Main header menu. Example: Home, About, Features.',
      },
      fields: [
        { name: 'label', type: 'text', label: 'Menu label', required: true },
        { name: 'href', type: 'text', label: 'URL / Path', required: true },
        {
          name: 'highlight',
          type: 'checkbox',
          label: 'Use login button style',
          defaultValue: false,
        },
      ],
    },
  ],
}
