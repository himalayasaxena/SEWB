import type { Block } from 'payload'

export const IndSimpleSteps: Block = {
  slug: 'indSimpleSteps',
  interfaceName: 'IndSimpleStepsBlock',
  labels: { singular: 'Individuals — 3 steps', plural: 'Ind Steps' },
  fields: [
    { name: 'badge', type: 'text' },
    { name: 'title', type: 'text', required: true },
    { name: 'subtitle', type: 'textarea' },
    {
      name: 'steps',
      type: 'array',
      minRows: 1,
      labels: { singular: 'Step', plural: 'Steps' },
      fields: [
        { name: 'stepNumberImage', type: 'upload', relationTo: 'media' },
        { name: 'stepNumberImageClass', type: 'text', admin: { description: 'e.g. one — applied to first step img' } },
        { name: 'icon', type: 'upload', relationTo: 'media' },
        { name: 'iconWidth', type: 'number' },
        { name: 'iconHeight', type: 'number' },
        { name: 'title', type: 'text', required: true },
        { name: 'descriptionLine1', type: 'text', required: true },
        { name: 'descriptionLine2', type: 'text' },
      ],
    },
  ],
}
