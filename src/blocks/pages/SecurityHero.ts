import type { Block } from 'payload'

export const SecurityHero: Block = {
  slug: 'securityHero',
  interfaceName: 'SecurityHeroBlock',
  labels: { singular: 'Security — Hero', plural: 'Security Hero' },
  fields: [
    { name: 'badge', type: 'text' },
    { name: 'title', type: 'text', required: true },
    { name: 'titleHighlight', type: 'text' },
    { name: 'subtitle', type: 'textarea' },
    {
      name: 'tags',
      type: 'array',
      labels: { singular: 'Tag', plural: 'Tags' },
      fields: [
        {
          name: 'iconClass',
          type: 'text',
          admin: { description: 'Font Awesome classes, e.g. fas fa-shield-alt' },
        },
        { name: 'text', type: 'text', required: true },
      ],
    },
    { name: 'sideImage', type: 'upload', relationTo: 'media' },
  ],
}
