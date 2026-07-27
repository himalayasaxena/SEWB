import type { Block } from 'payload'

export const IndTools: Block = {
  slug: 'indTools',
  interfaceName: 'IndToolsBlock',
  labels: { singular: 'Individuals — Tools', plural: 'Ind Tools' },
  fields: [
    { name: 'badge', type: 'text' },
    { name: 'title', type: 'text', required: true },
    { name: 'subtitle', type: 'textarea' },
    {
      name: 'cards',
      type: 'array',
      minRows: 1,
      labels: { singular: 'Tool card', plural: 'Tool cards' },
      fields: [
        { name: 'icon', type: 'upload', relationTo: 'media' },
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
      ],
    },
  ],
}
