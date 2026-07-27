import type { Block } from 'payload'

export const HomeHighlights: Block = {
  slug: 'homeHighlights',
  interfaceName: 'HomeHighlightsBlock',
  labels: { singular: 'Home — AI highlights', plural: 'Home highlights' },
  fields: [
    { name: 'badge', type: 'text' },
    { name: 'title', type: 'text', required: true },
    { name: 'subtitle', type: 'textarea' },
    {
      name: 'items',
      type: 'array',
      minRows: 1,
      labels: { singular: 'Highlight card', plural: 'Highlight cards' },
      fields: [
        { name: 'icon', type: 'upload', relationTo: 'media' },
        { name: 'titleTop', type: 'text', required: true },
        { name: 'titleBottom', type: 'text' },
        { name: 'description', type: 'textarea' },
      ],
    },
  ],
}
