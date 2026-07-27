import type { GlobalConfig } from 'payload'

import { staffAccess } from '@/access/authenticated'

export const BlogSettings: GlobalConfig = {
  slug: 'blog-settings',
  label: 'Blog Settings',
  admin: {
    group: 'Blog',
  },
  access: {
    read: () => true,
    update: staffAccess,
  },
  fields: [
    {
      name: 'postsPerPage',
      type: 'number',
      defaultValue: 10,
      min: 1,
      required: true,
    },
    {
      name: 'featuredPosts',
      type: 'relationship',
      relationTo: 'posts',
      hasMany: true,
      label: 'Featured posts',
      admin: { description: 'Shown prominently on /blog per frontend logic.' },
    },
  ],
}
