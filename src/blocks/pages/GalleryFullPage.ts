import type { Block } from 'payload'

export const GalleryFullPage: Block = {
  slug: 'galleryFullPage',
  interfaceName: 'GalleryFullPageBlock',
  labels: { singular: 'Gallery — Full page', plural: 'Gallery full page' },
  fields: [
    {
      name: 'hero',
      type: 'group',
      required: true,
      fields: [
        { name: 'badge', type: 'text' },
        { name: 'titlePrefix', type: 'text', required: true },
        { name: 'titleHighlight', type: 'text' },
        { name: 'titleSuffix', type: 'text' },
        { name: 'subtitle', type: 'textarea' },
        { name: 'image', type: 'upload', relationTo: 'media' },
      ],
    },
    {
      name: 'gallery',
      type: 'group',
      required: true,
      fields: [
        { name: 'shapeImage', type: 'upload', relationTo: 'media' },
        { name: 'badge', type: 'text' },
        { name: 'title', type: 'text', required: true },
        { name: 'subtitle', type: 'textarea' },
        { name: 'locationIcon', type: 'upload', relationTo: 'media' },
        { name: 'clockIcon', type: 'upload', relationTo: 'media' },
        {
          name: 'cards',
          type: 'array',
          minRows: 1,
          fields: [
            { name: 'image', type: 'upload', relationTo: 'media' },
            { name: 'imageAlt', type: 'text' },
            { name: 'tag', type: 'text' },
            { name: 'title', type: 'text', required: true },
            { name: 'location', type: 'text' },
            { name: 'dateTime', type: 'text' },
            { name: 'description', type: 'textarea' },
          ],
        },
      ],
    },
  ],
}
