import type { Block } from 'payload'

export const IndVoices: Block = {
  slug: 'indVoices',
  interfaceName: 'IndVoicesBlock',
  labels: { singular: 'Individuals — Voices', plural: 'Ind Voices' },
  fields: [
    { name: 'backgroundShapeImage', type: 'upload', relationTo: 'media' },
    { name: 'testimonialStarIcon', type: 'upload', relationTo: 'media', label: 'Rating star (repeated 5×)' },
    { name: 'badge', type: 'text' },
    { name: 'titleBeforeHighlight', type: 'text', required: true },
    { name: 'titleHighlight', type: 'text' },
    { name: 'subtitle', type: 'textarea' },
    {
      name: 'stats',
      type: 'array',
      minRows: 1,
      labels: { singular: 'Stat', plural: 'Stats' },
      fields: [
        { name: 'value', type: 'text', required: true },
        { name: 'label', type: 'text', required: true },
      ],
    },
    {
      name: 'testimonials',
      type: 'array',
      minRows: 1,
      labels: { singular: 'Testimonial', plural: 'Testimonials' },
      fields: [
        { name: 'avatar', type: 'upload', relationTo: 'media' },
        { name: 'quote', type: 'textarea', required: true },
        { name: 'name', type: 'text', required: true },
        { name: 'specialty', type: 'text', required: true },
      ],
    },
  ],
}
