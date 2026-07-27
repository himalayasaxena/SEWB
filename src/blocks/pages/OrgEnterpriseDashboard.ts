import type { Block } from 'payload'

export const OrgEnterpriseDashboard: Block = {
  slug: 'orgEnterpriseDashboard',
  interfaceName: 'OrgEnterpriseDashboardBlock',
  labels: { singular: 'Org — Enterprise dashboard', plural: 'Org Dashboard' },
  fields: [
    { name: 'badge', type: 'text' },
    { name: 'title', type: 'text', required: true },
    { name: 'subtitle', type: 'textarea' },
    { name: 'dashboardImage', type: 'upload', relationTo: 'media' },
    { name: 'quickInsightsBadge', type: 'upload', relationTo: 'media' },
    { name: 'aiInsightsBadge', type: 'upload', relationTo: 'media' },
  ],
}
