import type { CollectionConfig } from 'payload'

import { adminOnly, hiddenFromNonAdmins, staffAccess } from '@/access/authenticated'
import {
  burstWebsiteCacheAfterChange,
  burstWebsiteCacheAfterDelete,
} from '@/lib/cms/revalidateFrontend'

export const Media: CollectionConfig = {
  slug: 'media',
  labels: {
    singular: 'Media item',
    plural: 'Media library',
  },
  admin: {
    group: 'Website Content',
    hidden: hiddenFromNonAdmins,
    useAsTitle: 'alt',
    description: 'Upload images and PDFs used across pages, blog, and globals.',
  },
  access: {
    read: () => true,
    create: staffAccess,
    update: staffAccess,
    delete: adminOnly,
  },
  hooks: {
    afterChange: [burstWebsiteCacheAfterChange],
    afterDelete: [burstWebsiteCacheAfterDelete],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: {
    staticDir: 'media',
    mimeTypes: ['image/*', 'application/pdf'],
  },
}
