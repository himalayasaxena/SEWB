import type { Block } from 'payload'

export const OrgLabSolutions: Block = {
  slug: 'orgLabSolutions',
  interfaceName: 'OrgLabSolutionsBlock',
  labels: { singular: 'Org — Lab solutions', plural: 'Org Lab' },
  fields: [
    { name: 'badge', type: 'text' },
    { name: 'title', type: 'text', required: true },
    { name: 'subtitle', type: 'textarea' },
    {
      name: 'cards',
      type: 'array',
      minRows: 1,
      labels: { singular: 'Card', plural: 'Cards' },
      fields: [
        { name: 'icon', type: 'upload', relationTo: 'media' },
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
      ],
    },
  ],
}
