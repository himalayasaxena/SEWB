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
    {
      name: 'appStoreLabel',
      type: 'text',
      label: 'App Store button label',
      defaultValue: 'Download on the App Store',
      admin: {
        description: 'Leave the App Store URL empty to hide this button. Store links open in a new tab.',
      },
    },
    {
      name: 'appStoreUrl',
      type: 'text',
      label: 'App Store URL',
    },
    {
      name: 'playStoreLabel',
      type: 'text',
      label: 'Google Play button label',
      defaultValue: 'Get it on Google Play',
      admin: {
        description: 'Leave the Google Play URL empty to hide this button. Store links open in a new tab.',
      },
    },
    {
      name: 'playStoreUrl',
      type: 'text',
      label: 'Google Play URL',
    },
    { name: 'mockupImage', type: 'upload', relationTo: 'media', label: 'App mockup' },
  ],
}
