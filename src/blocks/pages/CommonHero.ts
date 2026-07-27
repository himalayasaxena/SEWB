import type { Block } from 'payload'

export const CommonHero: Block = {
  slug: 'commonHero',
  interfaceName: 'CommonHeroBlock',
  labels: {
    singular: 'Hero (inner)',
    plural: 'Hero sections',
  },
  fields: [
    {
      name: 'badge',
      type: 'text',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'titleHighlight',
      type: 'text',
      label: 'Highlighted span',
      admin: { description: 'Rendered inside the title with existing highlight styling.' },
    },
    {
      name: 'subtitle',
      type: 'textarea',
    },
    {
      name: 'sideImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Side image',
    },
  ],
}
