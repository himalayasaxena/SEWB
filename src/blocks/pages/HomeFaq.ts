import type { Block } from 'payload'

export const HomeFaq: Block = {
  slug: 'homeFaq',
  interfaceName: 'HomeFaqBlock',
  labels: { singular: 'Home — FAQ accordion', plural: 'Home FAQ' },
  fields: [
    { name: 'heading', type: 'text', defaultValue: 'FAQs', required: true },
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
