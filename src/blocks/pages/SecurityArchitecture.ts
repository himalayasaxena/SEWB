import type { Block } from 'payload'

export const SecurityArchitecture: Block = {
  slug: 'securityArchitecture',
  interfaceName: 'SecurityArchitectureBlock',
  labels: { singular: 'Security — Architecture', plural: 'Security Architecture' },
  fields: [
    { name: 'badge', type: 'text' },
    { name: 'title', type: 'text', required: true },
    { name: 'subtitle', type: 'textarea' },
    {
      name: 'items',
      type: 'array',
      minRows: 1,
      labels: { singular: 'Item', plural: 'Items' },
      fields: [
        { name: 'icon', type: 'upload', relationTo: 'media' },
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
      ],
    },
    { name: 'sideImage', type: 'upload', relationTo: 'media' },
  ],
}
