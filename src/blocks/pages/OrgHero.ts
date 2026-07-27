import type { Block } from 'payload'

export const OrgHero: Block = {
  slug: 'orgHero',
  interfaceName: 'OrgHeroBlock',
  labels: { singular: 'Organisations — Hero', plural: 'Org Hero' },
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
