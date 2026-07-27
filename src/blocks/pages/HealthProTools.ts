import type { Block } from 'payload'

export const HealthProTools: Block = {
  slug: 'healthProTools',
  interfaceName: 'HealthProToolsBlock',
  labels: { singular: 'HP — Tools grid', plural: 'HP Tools' },
  fields: [
    { name: 'badge', type: 'text' },
    { name: 'title', type: 'text', required: true },
    { name: 'subtitle', type: 'textarea' },
    { name: 'cardDecor', type: 'upload', relationTo: 'media', label: 'Card corner decor (shared)' },
    {
      name: 'cards',
      type: 'array',
      minRows: 1,
      labels: { singular: 'Tool card', plural: 'Tool cards' },
      fields: [
        { name: 'icon', type: 'upload', relationTo: 'media' },
        { name: 'pillLabel', type: 'text', label: 'Badge label (e.g. 24/7 Access)' },
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
      ],
    },
  ],
}
