'use client'

import { useEffect } from 'react'

/** Mirrors inline script from UI/about.php for impact tabs. */
export function AboutImpactScript() {
  useEffect(() => {
    const impactTabs = document.querySelectorAll('.about-impact-tab')
    const impactTitle = document.getElementById('aboutImpactTitle')
    const impactCopy = document.getElementById('aboutImpactCopy')
    const impactName = document.getElementById('aboutImpactName')
    const impactRole = document.getElementById('aboutImpactRole')
    const impactStatLabel = document.getElementById('aboutImpactStatLabel')
    const impactStatValue = document.getElementById('aboutImpactStatValue')
    const impactBottom = document.getElementById('aboutImpactBottom')
    const impactLink = document.getElementById('aboutImpactLink') as HTMLAnchorElement | null
    if (!impactTabs.length || !impactTitle || !impactCopy) {
      return
    }
    impactTabs.forEach((tab) => {
      tab.addEventListener('click', function (this: HTMLElement) {
        impactTabs.forEach((button) => {
          button.classList.remove('active')
          button.setAttribute('aria-selected', 'false')
        })
        this.classList.add('active')
        this.setAttribute('aria-selected', 'true')
        impactTitle.textContent = this.dataset.impactTitle || ''
        impactCopy.textContent = this.dataset.impactCopy || ''
        if (impactName) impactName.textContent = this.dataset.impactName || ''
        if (impactRole) impactRole.textContent = this.dataset.impactRole || ''
        if (impactStatLabel) impactStatLabel.textContent = this.dataset.impactStatLabel || ''
        if (impactStatValue) impactStatValue.textContent = this.dataset.impactStatValue || ''
        if (impactBottom) impactBottom.textContent = this.dataset.impactBottom || ''
        if (impactLink) impactLink.href = this.dataset.impactLink || 'javascript:;'
      })
    })
  }, [])

  return null
}
