import type { Block } from 'payload'

export const OrgPharmacySolutions: Block = {
  slug: 'orgPharmacySolutions',
  interfaceName: 'OrgPharmacySolutionsBlock',
  labels: { singular: 'Org — Pharmacy solutions', plural: 'Org Pharmacy' },
  fields: [
    { name: 'badge', type: 'text' },
    { name: 'title', type: 'text', required: true },
    { name: 'subtitle', type: 'textarea' },
    { name: 'sideImage', type: 'upload', relationTo: 'media' },
    {
      name: 'features',
      type: 'array',
      minRows: 1,
      labels: { singular: 'Feature', plural: 'Features' },
      fields: [
        { name: 'icon', type: 'upload', relationTo: 'media' },
        { name: 'title', type: 'text', required: true },
        { name: 'descriptionLine1', type: 'textarea', required: true },
        { name: 'descriptionLine2', type: 'textarea' },
      ],
    },
  ],
}
