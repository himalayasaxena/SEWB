import type { Block } from 'payload'

export const ContactFullPage: Block = {
  slug: 'contactFullPage',
  interfaceName: 'ContactFullPageBlock',
  labels: { singular: 'Contact — Full page', plural: 'Contact full page' },
  fields: [
    {
      name: 'hero',
      type: 'group',
      required: true,
      fields: [
        { name: 'badge', type: 'text' },
        { name: 'titleLine1', type: 'text', required: true },
        { name: 'titleHighlight', type: 'text' },
        { name: 'subtitle', type: 'textarea' },
        {
          name: 'tags',
          type: 'array',
          labels: { singular: 'Tag', plural: 'Tags' },
          fields: [{ name: 'text', type: 'text', required: true }],
        },
        { name: 'image', type: 'upload', relationTo: 'media' },
      ],
    },
    {
      name: 'intro',
      type: 'group',
      required: true,
      fields: [
        { name: 'badge', type: 'text' },
        { name: 'title', type: 'text', required: true },
        { name: 'subtitle', type: 'textarea' },
      ],
    },
    {
      name: 'officeCard',
      type: 'group',
      required: true,
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'address', type: 'textarea', required: true },
        { name: 'icon', type: 'upload', relationTo: 'media' },
      ],
    },
    {
      name: 'reachCard',
      type: 'group',
      required: true,
      fields: [
        { name: 'icon', type: 'upload', relationTo: 'media' },
        { name: 'emailTitle', type: 'text', required: true },
        { name: 'email', type: 'text', required: true },
        { name: 'phoneTitle', type: 'text', required: true },
        { name: 'phone', type: 'text', required: true },
      ],
    },
    {
      name: 'social',
      type: 'group',
      required: true,
      fields: [
        { name: 'title', type: 'text', required: true },
        {
          name: 'links',
          type: 'array',
          minRows: 1,
          labels: { singular: 'Social link', plural: 'Social links' },
          fields: [
            { name: 'href', type: 'text', required: true },
            { name: 'label', type: 'text', required: true },
            { name: 'icon', type: 'upload', relationTo: 'media' },
          ],
        },
      ],
    },
    {
      name: 'form',
      type: 'group',
      required: true,
      fields: [{ name: 'title', type: 'text', required: true }],
    },
    {
      name: 'map',
      type: 'group',
      required: true,
      fields: [
        { name: 'badge', type: 'text' },
        { name: 'title', type: 'text', required: true },
        { name: 'subtitle', type: 'textarea' },
        { name: 'embedUrl', type: 'text', required: true },
      ],
    },
  ],
}
