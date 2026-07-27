import type { Block } from 'payload'

export const OrgSecureReports: Block = {
  slug: 'orgSecureReports',
  interfaceName: 'OrgSecureReportsBlock',
  labels: { singular: 'Org — Secure reports', plural: 'Org Secure' },
  fields: [
    { name: 'badge', type: 'text' },
    { name: 'title', type: 'text', required: true },
    { name: 'subtitle', type: 'textarea' },
    {
      name: 'features',
      type: 'array',
      minRows: 1,
      labels: { singular: 'Feature row', plural: 'Feature rows' },
      fields: [
        {
          name: 'iconLayout',
          type: 'select',
          defaultValue: 'default',
          options: [
            { label: 'Default icon', value: 'default' },
            { label: 'AI nested icon box', value: 'aiBox' },
          ],
        },
        { name: 'icon', type: 'upload', relationTo: 'media' },
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
      ],
    },
    { name: 'mockupImage', type: 'upload', relationTo: 'media' },
  ],
}
