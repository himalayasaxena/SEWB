import type { CollectionConfig } from 'payload'

import { staffAccess } from '@/access/authenticated'
import {
  burstWebsiteCacheAfterChange,
  burstWebsiteCacheAfterDelete,
} from '@/lib/cms/revalidateFrontend'

export const Categories: CollectionConfig = {
  slug: 'categories',
  labels: {
    singular: 'Blog category',
    plural: 'Blog categories',
  },
  admin: {
    group: 'Blog',
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
    description: 'Manage blog categories used to classify posts.',
  },
  access: {
    read: () => true,
    create: staffAccess,
    update: staffAccess,
    delete: staffAccess,
  },
  hooks: {
    afterChange: [burstWebsiteCacheAfterChange],
    afterDelete: [burstWebsiteCacheAfterDelete],
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
      admin: { description: 'URL segment for /blog/category/[slug]' },
    },
  ],
}
