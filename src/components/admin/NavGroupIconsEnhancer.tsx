'use client'

import { useEffect } from 'react'
import { Briefcase, FileText, Newspaper, Users } from 'lucide-react'
import { createRoot } from 'react-dom/client'
import type { ComponentType } from 'react'

const iconByGroup: Record<string, ComponentType<{ size?: number; strokeWidth?: number }>> = {
  'Website Content': FileText,
  Blog: Newspaper,
  'User Management': Users,
  Leads: Briefcase,
}

export function NavGroupIconsEnhancer() {
  useEffect(() => {
    const applyIcons = () => {
      const labels = document.querySelectorAll<HTMLElement>('.nav-group__label')
      labels.forEach((labelEl) => {
        const text = labelEl.textContent?.trim() || ''
        const Icon = iconByGroup[text]
        if (!Icon || labelEl.dataset.iconified === 'true') return

        labelEl.style.display = 'inline-flex'
        labelEl.style.alignItems = 'center'
        labelEl.style.gap = '8px'

        const iconMount = document.createElement('span')
        iconMount.setAttribute('aria-hidden', 'true')
        iconMount.style.display = 'inline-flex'
        iconMount.style.lineHeight = '1'
        labelEl.prepend(iconMount)

        createRoot(iconMount).render(<Icon size={14} strokeWidth={2} />)
        labelEl.dataset.iconified = 'true'
      })
    }

    applyIcons()
    const observer = new MutationObserver(applyIcons)
    observer.observe(document.body, { childList: true, subtree: true })
    return () => observer.disconnect()
  }, [])

  return null
}
