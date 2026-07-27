import type { Block } from 'payload'

export const MedicalDisclaimerFullPage: Block = {
  slug: 'medicalDisclaimerFullPage',
  interfaceName: 'MedicalDisclaimerFullPageBlock',
  labels: { singular: 'Medical Disclaimer — Full page', plural: 'Medical Disclaimer page' },
  fields: [
    {
      name: 'hero',
      type: 'group',
      required: true,
      fields: [
        { name: 'badge', type: 'text' },
        { name: 'title', type: 'text', required: true },
        { name: 'titleHighlight', type: 'text' },
        { name: 'subtitle', type: 'textarea' },
        { name: 'sideImage', type: 'upload', relationTo: 'media' },
      ],
    },
    { name: 'sectionGlowImage', type: 'upload', relationTo: 'media', label: 'Disclaimer section glow (background)' },
    {
      name: 'cards',
      type: 'array',
      minRows: 1,
      labels: { singular: 'Statement card', plural: 'Statement cards' },
      fields: [
        {
          name: 'variant',
          type: 'select',
          defaultValue: 'default',
          options: [
            { label: 'Default', value: 'default' },
            { label: 'Important (accent)', value: 'important' },
          ],
        },
        { name: 'icon', type: 'upload', relationTo: 'media' },
        { name: 'heading', type: 'text', required: true },
        {
          name: 'paragraphs',
          type: 'array',
          minRows: 1,
          fields: [{ name: 'text', type: 'textarea', required: true }],
        },
      ],
    },
    {
      name: 'quote',
      type: 'group',
      fields: [
        { name: 'line1', type: 'textarea', required: true },
        { name: 'line2Lead', type: 'text' },
        { name: 'line2Bold', type: 'text' },
        { name: 'line2Trail', type: 'text', admin: { description: 'Optional text after the bold span.' } },
      ],
    },
  ],
}
