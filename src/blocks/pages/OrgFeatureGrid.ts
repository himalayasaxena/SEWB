import type { Block } from 'payload'

export const OrgFeatureGrid: Block = {
  slug: 'orgFeatureGrid',
  interfaceName: 'OrgFeatureGridBlock',
  labels: { singular: 'Org — Feature pipeline', plural: 'Org Features' },
  fields: [
    { name: 'badge', type: 'text' },
    { name: 'titlePrefix', type: 'text', required: true },
    { name: 'titleSpan', type: 'text' },
    { name: 'subtitle', type: 'textarea' },
    {
      name: 'cards',
      type: 'array',
      minRows: 1,
      labels: { singular: 'Pipeline card', plural: 'Pipeline cards' },
      fields: [
        { name: 'stepIcon', type: 'upload', relationTo: 'media' },
        {
          name: 'stepDecoration',
          type: 'select',
          defaultValue: 'none',
          options: [
            { label: 'None', value: 'none' },
            { label: 'Tick badge + image', value: 'tick' },
            { label: 'Dot badge', value: 'dot' },
          ],
        },
        { name: 'tickImage', type: 'upload', relationTo: 'media' },
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
        { name: 'timeIcon', type: 'upload', relationTo: 'media' },
        { name: 'timeText', type: 'text', required: true },
        {
          name: 'statusVariant',
          type: 'select',
          required: true,
          options: [
            { label: 'Completed', value: 'completed' },
            { label: 'In Progress', value: 'progress' },
            { label: 'Pending', value: 'pending' },
          ],
        },
        { name: 'statusLabel', type: 'text', required: true },
        {
          name: 'detailLines',
          type: 'array',
          minRows: 1,
          fields: [{ name: 'text', type: 'text', required: true }],
        },
      ],
    },
  ],
}
