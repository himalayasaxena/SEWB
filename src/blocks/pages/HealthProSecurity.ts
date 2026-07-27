import type { Block } from 'payload'

export const HealthProSecurity: Block = {
  slug: 'healthProSecurity',
  interfaceName: 'HealthProSecurityBlock',
  labels: { singular: 'HP — Security', plural: 'HP Security' },
  fields: [
    { name: 'badge', type: 'text' },
    { name: 'title', type: 'text', required: true },
    { name: 'subtitle', type: 'textarea' },
    {
      name: 'cards',
      type: 'array',
      minRows: 1,
      labels: { singular: 'Security card', plural: 'Security cards' },
      fields: [
        { name: 'icon', type: 'upload', relationTo: 'media' },
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
      ],
    },
  ],
}
