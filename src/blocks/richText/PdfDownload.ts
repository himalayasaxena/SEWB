import type { Block } from 'payload'

export const PdfDownload: Block = {
  slug: 'pdfDownload',
  interfaceName: 'PdfDownloadBlock',
  labels: {
    singular: 'PDF download',
    plural: 'PDF downloads',
  },
  fields: [
    {
      name: 'file',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'PDF file',
    },
    {
      name: 'label',
      type: 'text',
      required: true,
      label: 'Link label',
    },
  ],
}
