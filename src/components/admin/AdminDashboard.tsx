import type { AdminViewServerProps } from 'payload'
import { Gutter } from '@payloadcms/ui'
import { formatAdminURL } from 'payload/shared'
import {
  ArrowUpRight,
  FileText,
  Globe,
  ImageIcon,
  Mail,
  Newspaper,
  PenLine,
  Settings,
} from 'lucide-react'
import React from 'react'

type StatCard = {
  href?: string
  icon: React.ReactNode
  label: string
  value: number
}

type QuickAction = {
  description: string
  external?: boolean
  href: string
  icon: React.ReactNode
  label: string
}

type RecentItem = {
  href: string
  meta: string
  title: string
}

function adminPath(adminRoute: string, path: `/${string}` | '') {
  return formatAdminURL({ adminRoute, path })
}

function formatDate(value?: null | string) {
  if (!value) return '—'
  return new Date(value).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

function displayName(email?: string) {
  if (!email) return 'there'
  const base = email.split('@')[0] || 'there'
  return base
    .split(/[._-]+/g)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}

function StatTile({ stat }: { stat: StatCard }) {
  const content = (
    <div className="sewb-stat-tile">
      <div style={{ alignItems: 'center', color: 'var(--theme-elevation-600)', display: 'flex', gap: 8 }}>
        {stat.icon}
        <span style={{ fontSize: '0.82rem', fontWeight: 600, letterSpacing: '0.02em', textTransform: 'uppercase' }}>
          {stat.label}
        </span>
      </div>
      <div style={{ color: 'var(--theme-elevation-1000)', fontSize: '2rem', fontWeight: 700, lineHeight: 1 }}>
        {stat.value}
      </div>
    </div>
  )

  if (!stat.href) return content

  return (
    <a className="sewb-stat-link" href={stat.href}>
      {content}
    </a>
  )
}

function ActionCard({ action }: { action: QuickAction }) {
  return (
    <a
      className="sewb-action-card"
      href={action.href}
      rel={action.external ? 'noopener noreferrer' : undefined}
      target={action.external ? '_blank' : undefined}
    >
      <div style={{ alignItems: 'center', color: 'var(--theme-success-500)', display: 'flex', gap: 10 }}>
        {action.icon}
        <span style={{ fontSize: '1rem', fontWeight: 700 }}>{action.label}</span>
        <ArrowUpRight size={16} strokeWidth={2.2} style={{ marginLeft: 'auto' }} />
      </div>
      <p style={{ color: 'var(--theme-elevation-700)', fontSize: '0.92rem', lineHeight: 1.5, margin: 0 }}>
        {action.description}
      </p>
    </a>
  )
}

function RecentList({ emptyLabel, items, title }: { emptyLabel: string; items: RecentItem[]; title: string }) {
  return (
    <section
      style={{
        background: 'var(--theme-elevation-0)',
        border: '1px solid var(--theme-elevation-150)',
        borderRadius: 12,
        padding: '20px 22px',
      }}
    >
      <h2 style={{ color: 'var(--theme-elevation-1000)', fontSize: '1rem', fontWeight: 700, margin: '0 0 14px' }}>
        {title}
      </h2>
      {items.length === 0 ? (
        <p style={{ color: 'var(--theme-elevation-600)', fontSize: '0.92rem', margin: 0 }}>{emptyLabel}</p>
      ) : (
        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {items.map((item) => (
            <li
              key={item.href}
              style={{
                borderTop: '1px solid var(--theme-elevation-100)',
                padding: '12px 0',
              }}
            >
              <a
                href={item.href}
                style={{
                  alignItems: 'baseline',
                  color: 'inherit',
                  display: 'flex',
                  gap: 12,
                  justifyContent: 'space-between',
                  textDecoration: 'none',
                }}
              >
                <span style={{ color: 'var(--theme-elevation-1000)', fontWeight: 600 }}>{item.title}</span>
                <span style={{ color: 'var(--theme-elevation-600)', flexShrink: 0, fontSize: '0.82rem' }}>
                  {item.meta}
                </span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export async function AdminDashboard({ initPageResult, payload, permissions, user }: AdminViewServerProps) {
  const adminRoute = payload.config.routes.admin
  const siteUrl = (process.env.NEXT_PUBLIC_SERVER_URL || '').replace(/\/$/, '')
  const email = (user as { email?: string } | null)?.email

  const can = {
    pages: Boolean(permissions?.collections?.pages?.read),
    posts: Boolean(permissions?.collections?.posts?.read),
    media: Boolean(permissions?.collections?.media?.read),
    leads: Boolean(permissions?.collections?.['form-submissions']?.read),
    createPost: Boolean(permissions?.collections?.posts?.create),
    site: Boolean(permissions?.globals?.site?.read),
  }

  const [postsCount, pagesCount, mediaCount, leadsCount, recentPosts, recentLeads, homePage] = await Promise.all([
    can.posts
      ? payload.count({ collection: 'posts', req: initPageResult.req }).then((r) => r.totalDocs)
      : Promise.resolve(0),
    can.pages
      ? payload.count({ collection: 'pages', req: initPageResult.req }).then((r) => r.totalDocs)
      : Promise.resolve(0),
    can.media
      ? payload.count({ collection: 'media', req: initPageResult.req }).then((r) => r.totalDocs)
      : Promise.resolve(0),
    can.leads
      ? payload.count({ collection: 'form-submissions', req: initPageResult.req }).then((r) => r.totalDocs)
      : Promise.resolve(0),
    can.posts
      ? payload
          .find({
            collection: 'posts',
            limit: 5,
            req: initPageResult.req,
            sort: '-updatedAt',
          })
          .then((r) => r.docs)
      : Promise.resolve([]),
    can.leads
      ? payload
          .find({
            collection: 'form-submissions',
            limit: 5,
            req: initPageResult.req,
            sort: '-createdAt',
          })
          .then((r) => r.docs)
      : Promise.resolve([]),
    can.pages
      ? payload
          .find({
            collection: 'pages',
            limit: 1,
            req: initPageResult.req,
            where: { slug: { equals: 'home' } },
          })
          .then((r) => r.docs[0])
      : Promise.resolve(undefined),
  ])

  const stats: StatCard[] = [
    {
      href: can.posts ? adminPath(adminRoute, '/collections/posts') : undefined,
      icon: <Newspaper size={16} strokeWidth={2.2} />,
      label: 'Blog posts',
      value: postsCount,
    },
    {
      href: can.pages ? adminPath(adminRoute, '/collections/pages') : undefined,
      icon: <FileText size={16} strokeWidth={2.2} />,
      label: 'Pages',
      value: pagesCount,
    },
    {
      href: can.media ? adminPath(adminRoute, '/collections/media') : undefined,
      icon: <ImageIcon size={16} strokeWidth={2.2} />,
      label: 'Media files',
      value: mediaCount,
    },
    {
      href: can.leads ? adminPath(adminRoute, '/collections/form-submissions') : undefined,
      icon: <Mail size={16} strokeWidth={2.2} />,
      label: 'Leads',
      value: leadsCount,
    },
  ]

  const quickActions: QuickAction[] = [
    can.createPost && {
      description: 'Draft or publish a new article for the SEWB blog.',
      href: adminPath(adminRoute, '/collections/posts/create'),
      icon: <PenLine size={18} strokeWidth={2.2} />,
      label: 'Write a post',
    },
    homePage && {
      description: 'Update homepage content, SEO, and page sections.',
      href: adminPath(adminRoute, `/collections/pages/${homePage.id}`),
      icon: <FileText size={18} strokeWidth={2.2} />,
      label: 'Edit homepage',
    },
    can.site && {
      description: 'Manage site name, canonical URL, and default social image.',
      href: adminPath(adminRoute, '/globals/site'),
      icon: <Settings size={18} strokeWidth={2.2} />,
      label: 'Site settings',
    },
    siteUrl && {
      description: 'Open the public website in a new tab.',
      external: true,
      href: siteUrl,
      icon: <Globe size={18} strokeWidth={2.2} />,
      label: 'View live site',
    },
  ].filter(Boolean) as QuickAction[]

  const postItems: RecentItem[] = recentPosts.map((post) => ({
    href: adminPath(adminRoute, `/collections/posts/${post.id}`),
    meta: formatDate(post.updatedAt),
    title: typeof post.title === 'string' && post.title.trim() ? post.title : 'Untitled post',
  }))

  const leadItems: RecentItem[] = recentLeads.map((lead) => ({
    href: adminPath(adminRoute, `/collections/form-submissions/${lead.id}`),
    meta: formatDate(lead.createdAt),
    title:
      (typeof lead.name === 'string' && lead.name.trim()) ||
      (typeof lead.email === 'string' && lead.email.trim()) ||
      'New lead',
  }))

  return (
    <Gutter className="dashboard">
      <style>{`
        .sewb-stat-tile {
          background: var(--theme-elevation-50);
          border: 1px solid var(--theme-elevation-150);
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          min-height: 112px;
          padding: 18px 20px;
          transition: border-color 0.15s ease, transform 0.15s ease;
        }
        .sewb-stat-link {
          color: inherit;
          display: block;
          text-decoration: none;
        }
        .sewb-stat-link:hover .sewb-stat-tile {
          border-color: var(--theme-elevation-300);
          transform: translateY(-1px);
        }
        .sewb-action-card {
          background: var(--theme-elevation-0);
          border: 1px solid var(--theme-elevation-150);
          border-radius: 12px;
          color: inherit;
          display: flex;
          flex-direction: column;
          gap: 10px;
          min-height: 132px;
          padding: 18px 20px;
          text-decoration: none;
          transition: border-color 0.15s ease, box-shadow 0.15s ease;
        }
        .sewb-action-card:hover {
          border-color: var(--theme-elevation-300);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
        }
      `}</style>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 28, paddingBottom: 32 }}>
        <header
          style={{
            background:
              'linear-gradient(135deg, var(--theme-elevation-50) 0%, var(--theme-elevation-100) 55%, var(--theme-elevation-50) 100%)',
            border: '1px solid var(--theme-elevation-150)',
            borderRadius: 16,
            padding: '28px 30px',
          }}
        >
          <p
            style={{
              color: 'var(--theme-elevation-600)',
              fontSize: '0.82rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              margin: '0 0 8px',
              textTransform: 'uppercase',
            }}
          >
            SEWB Content Studio
          </p>
          <h1 style={{ color: 'var(--theme-elevation-1000)', fontSize: '1.85rem', fontWeight: 700, margin: '0 0 10px' }}>
            Welcome back, {displayName(email)}
          </h1>
          <p style={{ color: 'var(--theme-elevation-700)', fontSize: '1rem', lineHeight: 1.55, margin: 0, maxWidth: 680 }}>
            Your overview of published content, incoming leads, and shortcuts to the tasks you reach for most often.
          </p>
        </header>

        <section>
          <h2 style={{ color: 'var(--theme-elevation-900)', fontSize: '0.95rem', fontWeight: 700, margin: '0 0 14px' }}>
            At a glance
          </h2>
          <div
            style={{
              display: 'grid',
              gap: 14,
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            }}
          >
            {stats.map((stat) => (
              <StatTile key={stat.label} stat={stat} />
            ))}
          </div>
        </section>

        {quickActions.length > 0 && (
          <section>
            <h2 style={{ color: 'var(--theme-elevation-900)', fontSize: '0.95rem', fontWeight: 700, margin: '0 0 14px' }}>
              Quick actions
            </h2>
            <div
              style={{
                display: 'grid',
                gap: 14,
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              }}
            >
              {quickActions.map((action) => (
                <ActionCard key={action.label} action={action} />
              ))}
            </div>
          </section>
        )}

        <section
          style={{
            display: 'grid',
            gap: 16,
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          }}
        >
          {can.posts && (
            <RecentList
              emptyLabel="No blog posts yet. Create your first article to see it here."
              items={postItems}
              title="Recently updated posts"
            />
          )}
          {can.leads && (
            <RecentList
              emptyLabel="No contact form submissions yet."
              items={leadItems}
              title="Recent leads"
            />
          )}
        </section>
      </div>
    </Gutter>
  )
}
