import type { Block } from 'payload'

export const SecurityBackup: Block = {
  slug: 'securityBackup',
  interfaceName: 'SecurityBackupBlock',
  labels: { singular: 'Security — Backup & recovery', plural: 'Security Backup' },
  fields: [
    { name: 'badge', type: 'text' },
    { name: 'title', type: 'text', required: true },
    { name: 'subtitle', type: 'textarea' },
    {
      name: 'steps',
      type: 'array',
      minRows: 1,
      maxRows: 4,
      labels: { singular: 'Step', plural: 'Steps' },
      fields: [
        { name: 'icon', type: 'upload', relationTo: 'media' },
        { name: 'stepBadge', type: 'text', defaultValue: '1' },
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
        {
          name: 'layoutVariant',
          type: 'select',
          defaultValue: 'default',
          options: [
            { label: 'Default', value: 'default' },
            { label: 'Item down (offset)', value: 'itemDown' },
          ],
        },
      ],
    },
  ],
}
