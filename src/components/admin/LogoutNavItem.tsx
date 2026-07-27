import React from 'react'
import { LogOut } from 'lucide-react'

export function LogoutNavItem() {
  return (
    <a
      href="/admin/logout"
      style={{
        display: 'block',
        marginTop: 12,
        padding: '8px 10px',
        border: '1px solid var(--theme-elevation-150)',
        borderRadius: 8,
        textDecoration: 'none',
        color: 'var(--theme-elevation-900)',
        fontWeight: 500,
      }}
    >
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
        <LogOut size={15} strokeWidth={2} aria-hidden />
        Logout
      </span>
    </a>
  )
}
