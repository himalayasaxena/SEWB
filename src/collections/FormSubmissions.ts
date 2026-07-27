import type { CollectionConfig } from 'payload'

import { staffAccess } from '@/access/authenticated'

export const FormSubmissions: CollectionConfig = {
  slug: 'form-submissions',
  labels: {
    singular: 'Lead',
    plural: 'Leads',
  },
  admin: {
    group: 'Leads',
    useAsTitle: 'email',
    defaultColumns: ['form', 'email', 'createdAt'],
    components: {
      views: {
        edit: {
          default: {
            Component: '@/components/admin/LeadReadOnlyView#LeadReadOnlyView',
            tab: {
              condition: () => false,
            },
          },
          api: {
            tab: {
              condition: () => false,
            },
          },
        },
      },
    },
  },
  access: {
    read: staffAccess,
    create: () => false,
    update: () => false,
    delete: staffAccess,
  },
  fields: [
    {
      name: 'form',
      type: 'select',
      required: true,
      options: [{ label: 'Contact', value: 'contact' }],
      defaultValue: 'contact',
    },
    {
      name: 'name',
      type: 'text',
      label: 'Contact name',
    },
    {
      name: 'street',
      type: 'text',
    },
    {
      name: 'city',
      type: 'text',
    },
    {
      name: 'postCode',
      type: 'text',
      label: 'Post code',
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Phone',
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'message',
      type: 'textarea',
    },
  ],
}
