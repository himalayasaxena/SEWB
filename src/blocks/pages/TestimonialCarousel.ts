import type { Block } from 'payload'

export const TestimonialCarousel: Block = {
  slug: 'testimonialCarousel',
  interfaceName: 'TestimonialCarouselBlock',
  labels: { singular: 'Testimonials — Carousel', plural: 'Testimonial Carousels' },
  fields: [
    {
      name: 'variant',
      type: 'select',
      required: true,
      defaultValue: 'patients',
      options: [
        { label: 'Individual stories (first section)', value: 'patients' },
        { label: 'Health Professional stories (second section)', value: 'professionals' },
      ],
    },
    { name: 'ratingStarIcon', type: 'upload', relationTo: 'media', label: 'Star icon (×5)' },
    { name: 'badge', type: 'text' },
    { name: 'heading', type: 'textarea', required: true },
    {
      name: 'items',
      type: 'array',
      minRows: 1,
      labels: { singular: 'Quote card', plural: 'Quote cards' },
      fields: [
        { name: 'avatar', type: 'upload', relationTo: 'media' },
        { name: 'quote', type: 'textarea', required: true },
        { name: 'name', type: 'text', required: true },
        { name: 'specialty', type: 'text', required: true },
      ],
    },
  ],
}
