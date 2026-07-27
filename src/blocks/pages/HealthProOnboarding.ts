import type { Block } from 'payload'

export const HealthProOnboarding: Block = {
  slug: 'healthProOnboarding',
  interfaceName: 'HealthProOnboardingBlock',
  labels: { singular: 'HP — Onboarding steps', plural: 'HP Onboarding' },
  fields: [
    { name: 'badge', type: 'text' },
    { name: 'title', type: 'text', required: true },
    { name: 'subtitle', type: 'textarea' },
    {
      name: 'steps',
      type: 'array',
      minRows: 1,
      labels: { singular: 'Step', plural: 'Steps' },
      fields: [
        { name: 'stepNumberImage', type: 'upload', relationTo: 'media' },
        { name: 'icon', type: 'upload', relationTo: 'media' },
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
      ],
    },
  ],
}
