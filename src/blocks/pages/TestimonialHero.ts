import type { Block } from 'payload'

export const TestimonialHero: Block = {
  slug: 'testimonialHero',
  interfaceName: 'TestimonialHeroBlock',
  labels: { singular: 'Testimonials — Hero', plural: 'Testimonial Hero' },
  fields: [
    { name: 'badge', type: 'text' },
    { name: 'titleLine1', type: 'text', required: true },
    { name: 'titleHighlight', type: 'text' },
    { name: 'titleLine2', type: 'text', admin: { description: 'Text after the highlighted span (e.g. “From Our Users”).' } },
    { name: 'subtitle', type: 'textarea' },
    { name: 'sideImage', type: 'upload', relationTo: 'media' },
  ],
}
