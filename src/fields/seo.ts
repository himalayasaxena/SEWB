import type { Field } from 'payload'

type SeoMetaEditorOptions = {
  /** Show optional canonical URL override (pages only). */
  includeCanonical?: boolean
  /** Collapsed by default in the admin sidebar. */
  initCollapsed?: boolean
}

function seoInputFields(includeCanonical: boolean): Field[] {
  const fields: Field[] = [
    {
      name: 'seoTitle',
      type: 'text',
      label: 'SEO title',
      admin: {
        description: 'Shown in browser tabs and search results. Aim for ~60 characters.',
      },
    },
    {
      name: 'seoDescription',
      type: 'textarea',
      label: 'Meta description',
      admin: {
        description: 'Short summary for Google and social shares. Aim for ~150–160 characters.',
      },
    },
  ]

  if (includeCanonical) {
    fields.push({
      name: 'canonicalUrl',
      type: 'text',
      label: 'Canonical URL',
      admin: {
        description: 'Optional full URL override. Leave blank to use the default page URL.',
      },
    })
  }

  fields.push(
    {
      name: 'noIndex',
      type: 'checkbox',
      label: 'Hide from search engines',
      defaultValue: false,
      admin: {
        description: 'Adds noindex/nofollow so this URL is not indexed.',
      },
    },
    {
      name: 'ogImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Social share image',
      admin: {
        description: 'Open Graph / Twitter card image. Falls back to the featured image on blog posts.',
      },
    },
  )

  return fields
}

/** Flat SEO fields (legacy). Prefer `seoMetaEditorField` in collections. */
export const seoFields: Field[] = seoInputFields(true)

/**
 * Sidebar SEO metadata editor for Pages and Blog posts.
 * Fields stay at the document root (seoTitle, seoDescription, etc.).
 */
export function seoMetaEditorField({
  includeCanonical = true,
  initCollapsed = false,
}: SeoMetaEditorOptions = {}): Field {
  return {
    type: 'collapsible',
    label: 'SEO metadata',
    admin: {
      position: 'sidebar',
      initCollapsed,
      description: 'Search engine title, description, indexing, and social preview image.',
    },
    fields: seoInputFields(includeCanonical),
  }
}
