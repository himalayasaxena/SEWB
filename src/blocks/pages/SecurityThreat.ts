import type { Block } from 'payload'

export const SecurityThreat: Block = {
  slug: 'securityThreat',
  interfaceName: 'SecurityThreatBlock',
  labels: { singular: 'Security — Threat detection', plural: 'Security Threat' },
  fields: [
    { name: 'badge', type: 'text' },
    { name: 'title', type: 'text', required: true },
    { name: 'subtitle', type: 'textarea' },
    { name: 'backgroundImage', type: 'upload', relationTo: 'media' },
    { name: 'centerImage', type: 'upload', relationTo: 'media' },
    { name: 'alertIcon', type: 'upload', relationTo: 'media' },
    { name: 'alertTitle', type: 'text' },
    { name: 'alertSubtitle', type: 'text' },
    {
      name: 'items',
      type: 'array',
      minRows: 1,
      labels: { singular: 'Threat item', plural: 'Threat items' },
      fields: [
        { name: 'icon', type: 'upload', relationTo: 'media' },
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
      ],
    },
  ],
}
