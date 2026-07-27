import type { Block } from 'payload'

export const OrgAppCta: Block = {
  slug: 'orgAppCta',
  interfaceName: 'OrgAppCtaBlock',
  labels: { singular: 'Org — App CTA', plural: 'Org App CTA' },
  fields: [
    { name: 'backgroundImage', type: 'upload', relationTo: 'media' },
    { name: 'badge', type: 'text' },
    { name: 'title', type: 'textarea', required: true },
    {
      name: 'bullets',
      type: 'array',
      minRows: 1,
      labels: { singular: 'Bullet', plural: 'Bullets' },
      fields: [{ name: 'title', type: 'text', required: true }],
    },
    { name: 'mockupImage', type: 'upload', relationTo: 'media' },
  ],
}
