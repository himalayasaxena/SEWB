import type { Block } from 'payload'

export const BlogIndexFeed: Block = {
  slug: 'blogIndexFeed',
  interfaceName: 'BlogIndexFeedBlock',
  labels: { singular: 'Blog — Listing', plural: 'Blog listing' },
  fields: [
    {
      name: 'featuredTag',
      type: 'text',
      defaultValue: 'Featured',
      admin: { description: 'Left column badge (featured area).' },
    },
    {
      name: 'featuredSubtitle',
      type: 'text',
      defaultValue: 'This Month',
    },
    {
      name: 'popularTag',
      type: 'text',
      defaultValue: 'Popular',
    },
    {
      name: 'popularSubtitle',
      type: 'text',
      defaultValue: 'Posts',
    },
    {
      name: 'recentTag',
      type: 'text',
      defaultValue: 'Recently',
    },
    {
      name: 'recentSubtitle',
      type: 'text',
      defaultValue: 'Posted',
    },
    {
      name: 'decorativeImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Shape decoration',
      admin: { description: 'Optional decorative asset beside “Recently Posted” (defaults to site asset).' },
    },
  ],
}
