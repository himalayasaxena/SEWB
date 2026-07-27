import type { Block } from 'payload'

export const IndProcessShowcase: Block = {
  slug: 'indProcessShowcase',
  interfaceName: 'IndProcessShowcaseBlock',
  labels: { singular: 'Individuals — Process journey', plural: 'Ind Process' },
  fields: [
    { name: 'badge', type: 'text' },
    { name: 'titleBeforeHighlight', type: 'text', required: true },
    { name: 'titleHighlight', type: 'text' },
    { name: 'subtitle', type: 'textarea' },
    {
      name: 'steps',
      type: 'array',
      minRows: 1,
      labels: { singular: 'Step', plural: 'Steps' },
      fields: [
        { name: 'image', type: 'upload', relationTo: 'media' },
        { name: 'title', type: 'text', required: true },
      ],
    },
  ],
}
