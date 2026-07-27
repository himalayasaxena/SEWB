import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Categories } from './collections/Categories'
import { Tags } from './collections/Tags'
import { Posts } from './collections/Posts'
import { Pages } from './collections/Pages'
import { FormSubmissions } from './collections/FormSubmissions'
import { Site } from './globals/Site'
import { Header } from './globals/Header'
import { Footer } from './globals/Footer'
import { BlogSettings } from './globals/BlogSettings'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: ' - SEWB Admin',
    },
    components: {
      graphics: {
        Logo: '@/components/admin/Branding#AdminLogo',
        Icon: '@/components/admin/Branding#AdminIcon',
      },
      beforeNavLinks: ['@/components/admin/NavGroupIconsEnhancer#NavGroupIconsEnhancer'],
      afterNavLinks: ['@/components/admin/LogoutNavItem#LogoutNavItem'],
      views: {
        dashboard: {
          Component: '@/components/admin/AdminDashboard#AdminDashboard',
        },
      },
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
    livePreview: {
      collections: ['posts', 'pages'],
      /**
       * One-to-one with the document being edited: `/api/draft` enables Draft Mode, then redirects to
       * `/blog/preview/[id]` or `/preview/pages/[id]`. The front-end uses `useLivePreview` for real-time updates.
       */
      url: ({ collectionConfig, data }) => {
        const base = (process.env.NEXT_PUBLIC_SERVER_URL || '').replace(/\/$/, '')
        const secret = process.env.PREVIEW_SECRET
        if (!base || !secret || !collectionConfig?.slug) {
          return base || '/'
        }
        const id = data?.id != null ? String(data.id) : ''
        if (!id) {
          return `${base}/`
        }
        const q = new URLSearchParams({ secret, collection: collectionConfig.slug, id })
        return `${base}/api/draft?${q.toString()}`
      },
    },
  },
  collections: [Pages, Media, Posts, Categories, Tags, Users, FormSubmissions],
  globals: [Site, Header, Footer, BlogSettings],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URL || process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [],
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || process.env.NEXT_PUBLIC_SERVER_URL,
})
