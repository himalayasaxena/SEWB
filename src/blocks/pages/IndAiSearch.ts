import type { Block, Field } from 'payload'

const doctorFields: Field[] = [
  { name: 'photo', type: 'upload', relationTo: 'media' },
  { name: 'name', type: 'text', required: true },
  { name: 'specialty', type: 'text', required: true },
  { name: 'ratingScore', type: 'text', required: true },
  { name: 'ratingCount', type: 'text', required: true },
  { name: 'experienceText', type: 'text', required: true },
  { name: 'availabilityText', type: 'text', required: true },
  { name: 'nextAvailableTime', type: 'text', required: true },
  { name: 'bookHref', type: 'text', required: true },
]

export const IndAiSearch: Block = {
  slug: 'indAiSearch',
  interfaceName: 'IndAiSearchBlock',
  labels: { singular: 'Individuals — AI search', plural: 'Ind AI search' },
  fields: [
    { name: 'metaRatingIcon', type: 'upload', relationTo: 'media', label: 'Star icon (doctor cards)' },
    { name: 'metaPremiumIcon', type: 'upload', relationTo: 'media', label: 'Experience icon' },
    { name: 'metaClockIcon', type: 'upload', relationTo: 'media', label: 'Availability icon' },
    { name: 'badge', type: 'text' },
    { name: 'title', type: 'text', required: true },
    { name: 'subtitle', type: 'textarea' },
    { name: 'symptomInputIcon', type: 'upload', relationTo: 'media' },
    { name: 'locationInputIcon', type: 'upload', relationTo: 'media' },
    { name: 'symptomPlaceholder', type: 'text', required: true },
    { name: 'locationPlaceholder', type: 'text', required: true },
    { name: 'searchButtonLabel', type: 'text', defaultValue: 'Search' },
    {
      name: 'tabs',
      type: 'array',
      minRows: 1,
      labels: { singular: 'Filter tab', plural: 'Filter tabs' },
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'paneId', type: 'text', required: true },
        { name: 'defaultActive', type: 'checkbox', defaultValue: false },
      ],
    },
    {
      name: 'panes',
      type: 'array',
      minRows: 1,
      labels: { singular: 'Tab pane', plural: 'Tab panes' },
      fields: [
        { name: 'paneId', type: 'text', required: true },
        {
          name: 'columnClass',
          type: 'text',
          admin: {
            description: 'Bootstrap cols per card, e.g. col-lg-4 col-sm-6',
          },
        },
        {
          name: 'doctors',
          type: 'array',
          minRows: 1,
          labels: { singular: 'Doctor card', plural: 'Doctor cards' },
          fields: doctorFields,
        },
      ],
    },
  ],
}
