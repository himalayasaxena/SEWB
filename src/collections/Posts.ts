import type { CollectionBeforeValidateHook, CollectionConfig } from 'payload'
import { lexicalEditor, BlocksFeature } from '@payloadcms/richtext-lexical'

import { EmbedYoutube } from '@/blocks/richText/EmbedYoutube'
import { DiagnosticTestTabs } from '@/blocks/richText/DiagnosticTestTabs'
import { ImageGallery } from '@/blocks/richText/ImageGallery'
import { PdfDownload } from '@/blocks/richText/PdfDownload'
import { adminOnly, hiddenFromNonAdmins, staffAccess } from '@/access/authenticated'
import { seoMetaEditorField } from '@/fields/seo'

function toSlug(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

const fillSlugAndAuthor: CollectionBeforeValidateHook = async ({ data, req, operation }) => {
  if (!data) return data

  const next = { ...data }

  const title = typeof next.title === 'string' ? next.title : ''
  const slug = typeof next.slug === 'string' ? next.slug : ''
  if (!slug && title.trim()) {
    next.slug = toSlug(title)
  }

  if (!next.author && operation === 'create' && req.user?.id) {
    next.author = req.user.id
  }

  if (!next.publishedAt) {
    next.publishedAt = new Date().toISOString()
  }

  const seoTitle = typeof next.seoTitle === 'string' ? next.seoTitle.trim() : ''
  if (!seoTitle && title.trim()) {
    next.seoTitle = title.trim()
  }

  const excerpt = typeof next.excerpt === 'string' ? next.excerpt.trim() : ''
  const seoDescription = typeof next.seoDescription === 'string' ? next.seoDescription.trim() : ''
  if (!seoDescription) {
    next.seoDescription = excerpt || title.trim()
  }

  const canonicalUrl = typeof next.canonicalUrl === 'string' ? next.canonicalUrl.trim() : ''
  const finalSlug = typeof next.slug === 'string' ? next.slug.trim() : ''
  if (!canonicalUrl && finalSlug) {
    const base = (process.env.NEXT_PUBLIC_SERVER_URL || '').replace(/\/$/, '')
    next.canonicalUrl = base ? `${base}/blog/${finalSlug}` : `/blog/${finalSlug}`
  }

  return next
}

export const Posts: CollectionConfig = {
  slug: 'posts',
  labels: {
    singular: 'Blog post',
    plural: 'Blog',
  },
  defaultPopulate: {
    categories: true,
    tags: true,
    author: true,
    featuredImage: true,
  },
  admin: {
    group: 'Blog',
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'publishedAt', 'updatedAt'],
    preview: (doc) => {
      const base = (process.env.NEXT_PUBLIC_SERVER_URL || '').replace(/\/$/, '')
      const secret = process.env.PREVIEW_SECRET
      const id = doc?.id != null ? String(doc.id) : ''
      const slug = typeof doc?.slug === 'string' ? doc.slug : ''
      if (!secret || !id) {
        return `${base}/blog/${slug}`
      }
      const q = new URLSearchParams({ secret, collection: 'posts', id })
      return `${base}/api/draft?${q.toString()}`
    },
  },
  access: {
    read: () => true,
    create: staffAccess,
    update: staffAccess,
    delete: staffAccess,
  },
  versions: {
    drafts: {
      autosave: {
        interval: 400,
      },
    },
  },
  hooks: {
    beforeValidate: [fillSlugAndAuthor],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      admin: {
        description: 'Auto-generated from title. You can still edit if needed.',
      },
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
        condition: () => false,
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Featured',
      defaultValue: false,
    },
    {
      name: 'commentsEnabled',
      type: 'checkbox',
      label: 'Enable Disqus',
      defaultValue: true,
    },
    {
      name: 'excerpt',
      type: 'textarea',
      label: 'Excerpt',
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
      admin: {
        description: 'Auto-filled from the logged-in user. Profile (name, photo, bio) is managed on the user account.',
        condition: () => false,
      },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'categories',
          type: 'relationship',
          relationTo: 'categories',
          hasMany: true,
          admin: {
            width: '50%',
          },
        },
        {
          name: 'tags',
          type: 'relationship',
          relationTo: 'tags',
          hasMany: true,
          admin: {
            width: '50%',
          },
        },
      ],
    },
    {
      name: 'body',
      type: 'richText',
      required: true,
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => {
          const filteredDefaults = defaultFeatures.filter((feature) => {
            const key =
              typeof feature === 'object' && feature && 'key' in feature ? String(feature.key) : ''
            return key !== 'checklist' && key !== 'relationship'
          })

          return [
            ...filteredDefaults,
            BlocksFeature({
              blocks: [EmbedYoutube, ImageGallery, PdfDownload, DiagnosticTestTabs],
            }),
          ]
        },
      }),
    },
    seoMetaEditorField({ includeCanonical: false }),
  ],
}
