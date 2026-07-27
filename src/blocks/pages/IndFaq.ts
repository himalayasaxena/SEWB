import type { Block } from 'payload'

export const IndFaq: Block = {
  slug: 'indFaq',
  interfaceName: 'IndFaqBlock',
  labels: { singular: 'Individuals — FAQ', plural: 'Ind FAQ' },
  fields: [
    { name: 'heading', type: 'text', defaultValue: 'FAQs' },
    {
      name: 'items',
      type: 'array',
      minRows: 1,
      labels: { singular: 'FAQ item', plural: 'FAQ items' },
      fields: [
        { name: 'question', type: 'text', required: true },
        { name: 'answer', type: 'textarea', required: true },
      ],
    },
  ],
}
