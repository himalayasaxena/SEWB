import React from 'react'
import { ClipboardList } from 'lucide-react'

type LeadDoc = {
  id: number | string
  form?: string | null
  name?: string | null
  email?: string | null
  phone?: string | null
  street?: string | null
  city?: string | null
  postCode?: string | null
  message?: string | null
  createdAt?: string | null
}

function Row({ label, value }: { label: string; value?: null | string }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '180px minmax(0, 1fr)',
        gap: 12,
        padding: '10px 0',
        borderBottom: '1px solid var(--theme-elevation-100)',
      }}
    >
      <div style={{ color: 'var(--theme-elevation-600)', fontWeight: 600 }}>{label}</div>
      <div style={{ color: 'var(--theme-elevation-900)', overflowWrap: 'anywhere' }}>{value?.trim() || '-'}</div>
    </div>
  )
}

export async function LeadReadOnlyView({
  doc,
  routeSegments,
  payload,
}: {
  doc?: { id?: number | string } | null
  routeSegments?: string[]
  payload: {
    findByID: (args: { collection: string; id: number | string; depth?: number }) => Promise<LeadDoc>
  }
}) {
  const resolvedId = doc?.id ?? routeSegments?.[0]

  const id =
    typeof resolvedId === 'string' || typeof resolvedId === 'number' ? resolvedId : undefined

  if (!id) return <div style={{ padding: 12 }}>Lead not found.</div>

  const lead = await payload.findByID({
    collection: 'form-submissions',
    id,
    depth: 0,
  })

  return (
    <div style={{ maxWidth: 960, width: '100%', margin: '0 auto', display: 'grid', gap: 16 }}>
      <section
        style={{
          border: '1px solid var(--theme-elevation-150)',
          borderRadius: 10,
          padding: 16,
          borderLeft: '3px solid var(--theme-success-500)',
        }}
      >
        <h3
          style={{
            margin: '0 0 8px 0',
            fontSize: 18,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <ClipboardList size={18} strokeWidth={2} aria-hidden />
          Lead Summary
        </h3>
        <Row label="Form Type" value={lead.form} />
        <Row label="Submitted On" value={lead.createdAt ? new Date(lead.createdAt).toLocaleString() : '-'} />
      </section>

      <section
        style={{
          border: '1px solid var(--theme-elevation-150)',
          borderRadius: 10,
          padding: '18px 16px 14px',
          marginTop: 4,
        }}
      >
        <h3 style={{ margin: '0 0 12px 0', fontSize: 18 }}>Contact Details</h3>
        <Row label="Name" value={lead.name} />
        <Row label="Email" value={lead.email} />
        <Row label="Phone" value={lead.phone} />
      </section>

      <section style={{ border: '1px solid var(--theme-elevation-150)', borderRadius: 10, padding: 16 }}>
        <h3 style={{ margin: '0 0 8px 0', fontSize: 18 }}>Address</h3>
        <Row label="Street" value={lead.street} />
        <Row label="City" value={lead.city} />
        <Row label="Post code" value={lead.postCode} />
      </section>

      <section style={{ border: '1px solid var(--theme-elevation-150)', borderRadius: 10, padding: 16 }}>
        <h3 style={{ margin: '0 0 8px 0', fontSize: 18 }}>Message</h3>
        <div
          style={{
            whiteSpace: 'pre-wrap',
            lineHeight: 1.6,
            color: 'var(--theme-elevation-900)',
            border: '1px solid var(--theme-elevation-100)',
            borderRadius: 8,
            padding: 12,
            backgroundColor: 'var(--theme-elevation-0)',
          }}
        >
          {lead.message?.trim() || '-'}
        </div>
      </section>
    </div>
  )
}
