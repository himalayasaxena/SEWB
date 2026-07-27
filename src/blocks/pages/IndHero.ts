import type { Block } from 'payload'

export const IndHero: Block = {
  slug: 'indHero',
  interfaceName: 'IndHeroBlock',
  labels: { singular: 'Individuals — Hero', plural: 'Ind Hero' },
  fields: [
    { name: 'badge', type: 'text' },
    { name: 'titleHighlight', type: 'text', required: true },
    { name: 'titleRest', type: 'text', required: true },
    { name: 'subtitle', type: 'textarea' },
    { name: 'image', type: 'upload', relationTo: 'media' },
  ],
}
