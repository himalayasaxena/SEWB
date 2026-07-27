import type { CollectionBeforeValidateHook, CollectionConfig } from 'payload'

import { adminOnly, hiddenFromNonAdmins, isAdmin, isNonAdmin, isStaff, selfOrAdminAccess } from '@/access/authenticated'
import { displayNameFromEmail } from '@/lib/cms/userAuthor'

import { rolesFieldAccess } from './users/profileFieldAccess'

const fillDisplayNameFromEmail: CollectionBeforeValidateHook = ({ data }) => {
  if (!data) return data
  const next = { ...data }
  const displayName = typeof next.displayName === 'string' ? next.displayName.trim() : ''
  const email = typeof next.email === 'string' ? next.email.trim() : ''
  if (!displayName && email) {
    next.displayName = displayNameFromEmail(email)
  }
  return next
}

export const Users: CollectionConfig = {
  slug: 'users',
  labels: {
    singular: 'User',
    plural: 'Users',
  },
  admin: {
    group: 'User Management',
    hidden: ({ user }) => isNonAdmin(user),
    useAsTitle: 'displayName',
    defaultColumns: ['displayName', 'email', 'roles', 'updatedAt'],
    description: 'CMS accounts double as blog writers — set display name, photo, bio, and social links when creating users.',
  },
  auth: true,
  hooks: {
    beforeValidate: [fillDisplayNameFromEmail],
  },
  access: {
    admin: ({ req }) => isStaff(req.user),
    read: ({ req }) => {
      const user = req.user
      if (!user) return false
      if (isAdmin(user)) return true
      return { id: { equals: user.id } }
    },
    create: ({ req }) => isAdmin(req.user),
    update: selfOrAdminAccess,
    delete: ({ req }) => isAdmin(req.user),
  },
  fields: [
    {
      name: 'displayName',
      type: 'text',
      label: 'Display name',
      required: true,
      admin: {
        description: 'Public name on the blog. Auto-filled from email if left empty.',
      },
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
      label: 'Profile photo',
      admin: {
        position: 'sidebar',
        description: 'Circular avatar on blog writer sections (recommended: square image).',
      },
    },
    {
      name: 'bio',
      type: 'textarea',
      label: 'Short bio',
      admin: {
        description: 'Brief description shown in blog writer sections.',
      },
    },
    {
      name: 'socialLinks',
      type: 'group',
      label: 'Social profiles',
      fields: [
        { name: 'facebook', type: 'text', label: 'Facebook URL' },
        { name: 'twitter', type: 'text', label: 'Twitter / X URL' },
        { name: 'instagram', type: 'text', label: 'Instagram URL' },
        { name: 'linkedin', type: 'text', label: 'LinkedIn URL' },
      ],
    },
    {
      name: 'roles',
      type: 'select',
      hasMany: true,
      required: true,
      defaultValue: ['editor'],
      saveToJWT: true,
      access: rolesFieldAccess,
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Editor', value: 'editor' },
      ],
      admin: {
        position: 'sidebar',
        description: 'Editors can manage blog posts and leads only.',
      },
    },
  ],
}
