import type { Block } from 'payload'

export const BannerSlider: Block = {
  slug: 'bannerSlider',
  interfaceName: 'BannerSliderBlock',
  labels: {
    singular: 'Banner slider',
    plural: 'Banner sliders',
  },
  fields: [
    {
      name: 'slides',
      type: 'array',
      minRows: 1,
      labels: {
        singular: 'Slide',
        plural: 'Slides',
      },
      fields: [
        {
          name: 'backgroundImage',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'pretitle',
          type: 'text',
          label: 'Pre-title',
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'subtitle',
          type: 'textarea',
        },
        {
          name: 'primaryCta',
          type: 'group',
          label: 'Primary button',
          fields: [
            { name: 'label', type: 'text' },
            { name: 'href', type: 'text' },
          ],
        },
        {
          name: 'secondaryCta',
          type: 'group',
          label: 'Secondary button',
          fields: [
            { name: 'label', type: 'text' },
            { name: 'href', type: 'text' },
          ],
        },
      ],
    },
  ],
}
