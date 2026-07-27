import type { Block } from 'payload'

export const HealthProAppCta: Block = {
  slug: 'healthProAppCta',
  interfaceName: 'HealthProAppCtaBlock',
  labels: { singular: 'HP — App CTA', plural: 'HP App CTA' },
  fields: [
    { name: 'badge', type: 'text' },
    { name: 'title', type: 'text', required: true },
    { name: 'subtitle', type: 'textarea' },
    {
      name: 'bullets',
      type: 'array',
      minRows: 1,
      labels: { singular: 'Bullet', plural: 'Bullets' },
      fields: [{ name: 'text', type: 'text', required: true }],
    },
    { name: 'mockupImage', type: 'upload', relationTo: 'media' },
  ],
}
