import type { Block } from 'payload'

export const HealthProPatientControl: Block = {
  slug: 'healthProPatientControl',
  interfaceName: 'HealthProPatientControlBlock',
  labels: { singular: 'HP — Individual control', plural: 'HP Patient control' },
  fields: [
    { name: 'badge', type: 'text' },
    {
      name: 'titleBeforeHighlight',
      type: 'text',
      required: true,
      admin: { description: 'Title text before the pink gradient span.' },
    },
    {
      name: 'titleHighlight',
      type: 'text',
      admin: { description: 'Rendered with highlight-pink gradient styling.' },
    },
    { name: 'subtitle', type: 'textarea' },
    { name: 'columnImage', type: 'upload', relationTo: 'media' },
    {
      name: 'features',
      type: 'array',
      minRows: 1,
      labels: { singular: 'Feature row', plural: 'Feature rows' },
      fields: [
        { name: 'icon', type: 'upload', relationTo: 'media' },
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
      ],
    },
  ],
}
