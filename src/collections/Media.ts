import type { CollectionConfig } from 'payload'

import { adminOnly, hiddenFromNonAdmins, staffAccess } from '@/access/authenticated'

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
