import type { Block } from 'payload'

export const IndAllInOne: Block = {
  slug: 'indAllInOne',
  interfaceName: 'IndAllInOneBlock',
  labels: { singular: 'Individuals — All-in-one', plural: 'Ind All-in-one' },
  fields: [
    { name: 'badge', type: 'text' },
    { name: 'title', type: 'textarea', required: true },
    { name: 'subtitle', type: 'textarea' },
    { name: 'sideImage', type: 'upload', relationTo: 'media' },
    {
      name: 'cards',
      type: 'array',
      minRows: 1,
      labels: { singular: 'Service card', plural: 'Service cards' },
      fields: [
        { name: 'decorImage', type: 'upload', relationTo: 'media' },
        { name: 'icon', type: 'upload', relationTo: 'media' },
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
        {
          name: 'listItems',
          type: 'array',
          minRows: 1,
          fields: [{ name: 'text', type: 'text', required: true }],
        },
        { name: 'learnMoreHref', type: 'text', required: true },
        { name: 'learnMoreArrowImage', type: 'upload', relationTo: 'media' },
      ],
    },
  ],
}
