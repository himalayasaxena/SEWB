import type { Block } from 'payload'

export const BlogHero: Block = {
  slug: 'blogHero',
  interfaceName: 'BlogHeroBlock',
  labels: { singular: 'Blog — Hero', plural: 'Blog Hero' },
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
          admin: { description: 'Optional FA classes, e.g. fas fa-check-circle' },
        },
        { name: 'text', type: 'text', required: true },
      ],
    },
    { name: 'sideImage', type: 'upload', relationTo: 'media' },
  ],
}
