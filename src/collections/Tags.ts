import type { CollectionConfig } from 'payload'

import { staffAccess } from '@/access/authenticated'

export const Tags: CollectionConfig = {
  slug: 'tags',
  labels: {
    singular: 'Blog tag',
    plural: 'Blog tags',
  },
  admin: {
    group: 'Blog',
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
    description: 'Manage tags used for filtering and SEO of blog posts.',
  },
  access: {
    read: () => true,
    create: staffAccess,
    update: staffAccess,
    delete: staffAccess,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      admin: { description: 'URL segment for /blog/tag/[slug]' },
    },
  ],
}
