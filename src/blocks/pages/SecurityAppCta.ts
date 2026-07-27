import type { Block } from 'payload'

export const SecurityAppCta: Block = {
  slug: 'securityAppCta',
  interfaceName: 'SecurityAppCtaBlock',
  labels: { singular: 'Security — App CTA', plural: 'Security App CTA' },
  fields: [
    { name: 'badge', type: 'text' },
    { name: 'title', type: 'textarea', required: true },
    {
      name: 'bullets',
      type: 'array',
      minRows: 1,
      fields: [{ name: 'text', type: 'text', required: true }],
    },
    { name: 'mockupImage', type: 'upload', relationTo: 'media' },
  ],
}
