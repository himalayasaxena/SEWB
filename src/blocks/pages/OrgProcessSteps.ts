import type { Block } from 'payload'

export const OrgProcessSteps: Block = {
  slug: 'orgProcessSteps',
  interfaceName: 'OrgProcessStepsBlock',
  labels: { singular: 'Org — Process steps', plural: 'Org Process' },
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
        { name: 'icon', type: 'upload', relationTo: 'media' },
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
      ],
    },
  ],
}
