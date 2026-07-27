import type { Block } from 'payload'

export const HealthProBenefits: Block = {
  slug: 'healthProBenefits',
  interfaceName: 'HealthProBenefitsBlock',
  labels: { singular: 'HP — Benefits', plural: 'HP Benefits' },
  fields: [
    { name: 'badge', type: 'text' },
    { name: 'title', type: 'text', required: true },
    { name: 'subtitle', type: 'textarea' },
    {
      name: 'cards',
      type: 'array',
      minRows: 1,
      labels: { singular: 'Benefit card', plural: 'Benefit cards' },
      fields: [
        { name: 'image', type: 'upload', relationTo: 'media' },
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
      ],
    },
  ],
}
