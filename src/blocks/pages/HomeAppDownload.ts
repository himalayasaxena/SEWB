import type { Block } from 'payload'

export const HomeAppDownload: Block = {
  slug: 'homeAppDownload',
  interfaceName: 'HomeAppDownloadBlock',
  labels: { singular: 'Home — App download', plural: 'Home app section' },
  fields: [
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Decorative background (optional)',
    },
    { name: 'badge', type: 'text' },
    {
      name: 'titleLine1',
      type: 'text',
      required: true,
      label: 'Title line 1',
    },
    {
      name: 'titleLine2',
      type: 'text',
      label: 'Title line 2',
    },
    {
      name: 'paragraphs',
      type: 'array',
      minRows: 1,
      labels: { singular: 'Paragraph', plural: 'Paragraphs' },
      fields: [{ name: 'text', type: 'textarea', required: true }],
    },
    {
      name: 'emphasisLine',
      type: 'text',
      label: 'Bold closing line (e.g. Get the app)',
    },
    { name: 'mockupImage', type: 'upload', relationTo: 'media' },
    {
      name: 'secondaryMockupImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Secondary decorative mockup (optional)',
    },
  ],
}
