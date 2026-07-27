import type { Block } from 'payload'

export const EmbedYoutube: Block = {
  slug: 'embedYoutube',
  interfaceName: 'EmbedYoutubeBlock',
  labels: {
    singular: 'YouTube embed',
    plural: 'YouTube embeds',
  },
  fields: [
    {
      name: 'url',
      type: 'text',
      required: true,
      label: 'Video URL',
    },
  ],
}
