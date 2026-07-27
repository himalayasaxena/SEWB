import type { Block } from 'payload'

export const IndBenefits: Block = {
  slug: 'indBenefits',
  interfaceName: 'IndBenefitsBlock',
  labels: { singular: 'Individuals — Benefits', plural: 'Ind Benefits' },
  fields: [
    { name: 'badge', type: 'text' },
    { name: 'title', type: 'text', required: true },
    { name: 'subtitle', type: 'textarea' },
    { name: 'mainImage', type: 'upload', relationTo: 'media' },
    {
      name: 'floatingCard',
      type: 'group',
      fields: [
        { name: 'icon', type: 'upload', relationTo: 'media' },
        { name: 'title', type: 'text', required: true },
        { name: 'subtitle', type: 'text' },
      ],
    },
    {
      name: 'items',
      type: 'array',
      minRows: 1,
      labels: { singular: 'Benefit row', plural: 'Benefit rows' },
      fields: [
        { name: 'icon', type: 'upload', relationTo: 'media' },
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
      ],
    },
  ],
}
