import React from 'react'
import { FileStack, Newspaper, Users, Inbox } from 'lucide-react'

const sections = [
  { label: 'Website Content', Icon: FileStack },
  { label: 'Blog', Icon: Newspaper },
  { label: 'User Management', Icon: Users },
  { label: 'Leads', Icon: Inbox },
]

export function NavSectionIcons() {
  return (
    <div
      style={{
        marginBottom: 12,
        paddingBottom: 10,
        borderBottom: '1px solid var(--theme-elevation-100)',
        display: 'grid',
        gap: 6,
      }}
    >
      {sections.map(({ label, Icon }) => (
        <div
          key={label}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            color: 'var(--theme-elevation-700)',
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: '0.01em',
          }}
        >
          <Icon size={14} strokeWidth={2} aria-hidden />
          <span>{label}</span>
        </div>
      ))}
    </div>
  )
}
