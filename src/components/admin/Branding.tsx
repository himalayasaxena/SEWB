import React from 'react'
import { Activity, Shield } from 'lucide-react'

export function AdminLogo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <Shield size={18} strokeWidth={2.1} aria-hidden />
      <div
        style={{
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          fontSize: '1.35rem',
          fontWeight: 700,
          letterSpacing: '0.01em',
          lineHeight: 1.1,
          color: 'var(--theme-elevation-1000)',
        }}
      >
        SEWB Login
      </div>
    </div>
  )
}

export function AdminIcon() {
  return (
    <div
      style={{
        width: 28,
        height: 28,
        borderRadius: 7,
        border: '1px solid var(--theme-elevation-200)',
        display: 'grid',
        placeItems: 'center',
        fontSize: 12,
        fontWeight: 700,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        color: 'var(--theme-elevation-1000)',
      }}
    >
      <Activity size={15} strokeWidth={2.2} aria-hidden />
    </div>
  )
}
