import type { Block } from 'payload'

export const HealthProHero: Block = {
  slug: 'healthProHero',
  interfaceName: 'HealthProHeroBlock',
  labels: { singular: 'HP — Hero', plural: 'HP Hero' },
  fields: [
    { name: 'badge', type: 'text' },
    { name: 'titleLine1', type: 'text', required: true },
    { name: 'titleHighlight', type: 'text' },
    { name: 'subtitle', type: 'textarea' },
    {
      name: 'tags',
      type: 'array',
      labels: { singular: 'Tag', plural: 'Tags' },
      fields: [{ name: 'text', type: 'text', required: true }],
    },
    { name: 'image', type: 'upload', relationTo: 'media' },
  ],
}
