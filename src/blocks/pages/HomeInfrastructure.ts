import type { Block } from 'payload'

const tabFields = [
  { name: 'heading', type: 'text' as const, required: true },
  { name: 'description', type: 'textarea' as const },
  {
    name: 'bullets',
    type: 'array' as const,
    labels: { singular: 'Bullet', plural: 'Bullets' },
    fields: [{ name: 'text', type: 'text' as const, required: true }],
  },
  { name: 'image', type: 'upload' as const, relationTo: 'media' as const },
  { name: 'ctaLabel', type: 'text' as const },
  { name: 'ctaHref', type: 'text' as const },
]

export const HomeInfrastructure: Block = {
  slug: 'homeInfrastructure',
  interfaceName: 'HomeInfrastructureBlock',
  labels: { singular: 'Home — Infrastructure tabs', plural: 'Home infrastructure' },
  fields: [
    { name: 'badge', type: 'text' },
    { name: 'title', type: 'text', required: true },
    { name: 'subtitle', type: 'textarea' },
    { name: 'tab1Label', type: 'text', defaultValue: 'For Individuals' },
    { name: 'tab2Label', type: 'text', defaultValue: 'For Health Professionals' },
    { name: 'tab1', type: 'group', label: 'Tab 1', fields: tabFields },
    { name: 'tab2', type: 'group', label: 'Tab 2', fields: tabFields },
  ],
}
