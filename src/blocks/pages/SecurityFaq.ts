import type { Block } from 'payload'

export const SecurityFaq: Block = {
  slug: 'securityFaq',
  interfaceName: 'SecurityFaqBlock',
  labels: { singular: 'Security — FAQ', plural: 'Security FAQ' },
  fields: [
    { name: 'heading', type: 'text', defaultValue: 'FAQs' },
    {
      name: 'items',
      type: 'array',
      minRows: 1,
      fields: [
        { name: 'question', type: 'text', required: true },
        { name: 'answer', type: 'textarea', required: true },
      ],
    },
  ],
}
