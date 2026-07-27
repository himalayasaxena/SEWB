import type { Block } from 'payload'

export const HomePrivacy: Block = {
  slug: 'homePrivacy',
  interfaceName: 'HomePrivacyBlock',
  labels: { singular: 'Home — Privacy & trust', plural: 'Home privacy' },
  fields: [
    { name: 'badge', type: 'text' },
    { name: 'title', type: 'text', required: true },
    { name: 'subtitle', type: 'textarea' },
    { name: 'sideImage', type: 'upload', relationTo: 'media' },
    {
      name: 'features',
      type: 'array',
      minRows: 1,
      labels: { singular: 'Feature', plural: 'Features' },
      fields: [
        { name: 'icon', type: 'upload', relationTo: 'media' },
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea' },
      ],
    },
  ],
}
