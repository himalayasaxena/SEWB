import type { CollectionBeforeChangeHook, CollectionBeforeValidateHook, CollectionConfig } from 'payload'

import { pageLayoutBlocks } from '@/blocks/pages'
import { adminOnly, authenticatedAdmin, hiddenFromNonAdmins, isNonAdmin } from '@/access/authenticated'
import { seoMetaEditorField } from '@/fields/seo'

const lockSlugOnUpdate: CollectionBeforeChangeHook = ({ data, originalDoc }) => {
  if (originalDoc && typeof originalDoc.slug === 'string') {
    return { ...data, slug: originalDoc.slug }
  }
  return data
}

const fillSeoDefaults: CollectionBeforeValidateHook = ({ data }) => {
  if (!data) return data

  const next = { ...data }
  const title = typeof next.title === 'string' ? next.title.trim() : ''
  const slug = typeof next.slug === 'string' ? next.slug.trim() : ''

  const seoTitle = typeof next.seoTitle === 'string' ? next.seoTitle.trim() : ''
  if (!seoTitle && title) {
    next.seoTitle = title
  }

  const seoDescription = typeof next.seoDescription === 'string' ? next.seoDescription.trim() : ''
  if (!seoDescription && title) {
    next.seoDescription = title
  }

  const canonicalUrl = typeof next.canonicalUrl === 'string' ? next.canonicalUrl.trim() : ''
  if (!canonicalUrl && slug) {
    const base = (process.env.NEXT_PUBLIC_SERVER_URL || '').replace(/\/$/, '')
    const path = slug === 'home' || slug === '' ? '/' : `/${slug}`
    next.canonicalUrl = base ? `${base}${path}` : path
  }

  return next
}

const pagesAutosaveEnabled = process.env.PAGES_AUTOSAVE === 'true'

export const Pages: CollectionConfig = {
  slug: 'pages',
  labels: {
    singular: 'Page',
    plural: 'Pages',
  },
  admin: {
    group: 'Website Content',
    hidden: hiddenFromNonAdmins,
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
    preview: (doc) => {
      const base = (process.env.NEXT_PUBLIC_SERVER_URL || '').replace(/\/$/, '')
      const secret = process.env.PREVIEW_SECRET
      const id = doc?.id != null ? String(doc.id) : ''
      const slug = typeof doc?.slug === 'string' ? doc.slug : ''
      const path = slug === 'home' || slug === '' ? '/' : `/${slug}`
      if (!secret || !id) {
        return `${base}${path}`
      }
      const q = new URLSearchParams({ secret, collection: 'pages', id })
      return `${base}/api/draft?${q.toString()}`
    },
  },
  access: {
    read: ({ req: { user } }) => {
      if (isNonAdmin(user)) return false
      return true
    },
    /** Fixed routes only — new marketing URLs are not created via admin. */
    create: () => false,
    update: adminOnly,
    delete: authenticatedAdmin,
  },
  hooks: {
    beforeValidate: [fillSeoDefaults],
    beforeChange: [lockSlugOnUpdate],
  },
  versions: {
    drafts: {
      /** Disabled by default. Set `PAGES_AUTOSAVE=true` to re-enable editor autosave. */
      autosave:
        pagesAutosaveEnabled ?
          {
            interval: 400,
          }
        : false,
    },
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
        readOnly: true,
        description:
          'Fixed route key — cannot be changed. Use "home" for the homepage. URLs have no leading/trailing slash.',
      },
    },
    {
      name: 'layout',
      type: 'blocks',
      label: 'Page sections',
      blocks: pageLayoutBlocks,
      minRows: 0,
      admin: {
        description:
          'Optional block sections. Static marketing pages can use SEO fields only; editors create a Page per route slug (e.g. about, contact) for metadata.',
      },
    },
    seoMetaEditorField({ includeCanonical: true }),
  ],
}
