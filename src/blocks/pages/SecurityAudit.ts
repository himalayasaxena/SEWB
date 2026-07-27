import type { Block } from 'payload'

export const SecurityAudit: Block = {
  slug: 'securityAudit',
  interfaceName: 'SecurityAuditBlock',
  labels: { singular: 'Security — Audit & tracking', plural: 'Security Audit' },
  fields: [
    { name: 'badge', type: 'text' },
    { name: 'title', type: 'text', required: true },
    { name: 'subtitle', type: 'textarea' },
    { name: 'image', type: 'upload', relationTo: 'media' },
    { name: 'loggingTitle', type: 'text', required: true },
    {
      name: 'loggingItems',
      type: 'array',
      minRows: 1,
      fields: [{ name: 'text', type: 'text', required: true }],
    },
    {
      name: 'stats',
      type: 'array',
      minRows: 1,
      maxRows: 3,
      labels: { singular: 'Stat', plural: 'Stats' },
      fields: [
        { name: 'value', type: 'text', required: true },
        { name: 'label', type: 'text', required: true },
        {
          name: 'alignVariant',
          type: 'select',
          defaultValue: 'default',
          options: [
            { label: 'Default', value: 'default' },
            { label: 'Centered column', value: 'centered' },
          ],
        },
      ],
    },
    { name: 'ctaLabel', type: 'text' },
    { name: 'ctaHref', type: 'text', admin: { description: 'URL or # for placeholder.' } },
    { name: 'ctaArrowIcon', type: 'upload', relationTo: 'media' },
  ],
}
