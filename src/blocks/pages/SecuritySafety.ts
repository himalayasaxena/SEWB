import type { Block } from 'payload'

export const SecuritySafety: Block = {
  slug: 'securitySafety',
  interfaceName: 'SecuritySafetyBlock',
  labels: { singular: 'Security — End-to-end safety', plural: 'Security Safety' },
  fields: [
    { name: 'badge', type: 'text' },
    { name: 'title', type: 'text', required: true },
    { name: 'subtitle', type: 'textarea' },
    { name: 'mainImage', type: 'upload', relationTo: 'media' },
    { name: 'dnaOverlayImage', type: 'upload', relationTo: 'media' },
    { name: 'shieldBgImage', type: 'upload', relationTo: 'media' },
    { name: 'shieldIconImage', type: 'upload', relationTo: 'media' },
    { name: 'tagIconImage', type: 'upload', relationTo: 'media' },
    { name: 'tagHeading', type: 'text' },
    { name: 'tagSubheading', type: 'text' },
    {
      name: 'features',
      type: 'array',
      minRows: 1,
      labels: { singular: 'Feature', plural: 'Features' },
      fields: [
        { name: 'icon', type: 'upload', relationTo: 'media' },
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
      ],
    },
  ],
}
