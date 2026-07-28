'use client'

import { useEffect } from 'react'

/** Mirrors inline script from UI/about.php for impact tabs. */
export function AboutImpactScript({ instanceKey }: { instanceKey?: string } = {}) {
  useEffect(() => {
    const id = (base: string) => (instanceKey ? `${base}-${instanceKey}` : base)
    const root = instanceKey
      ? document.getElementById(id('aboutImpactSection'))
      : document.querySelector('.about-impact-section')
    const scope: ParentNode = root ?? document

    const impactTabs = scope.querySelectorAll('.about-impact-tab')
    const impactTitle = document.getElementById(id('aboutImpactTitle'))
    const impactCopy = document.getElementById(id('aboutImpactCopy'))
    const impactName = document.getElementById(id('aboutImpactName'))
    const impactRole = document.getElementById(id('aboutImpactRole'))
    const impactStatLabel = document.getElementById(id('aboutImpactStatLabel'))
    const impactStatValue = document.getElementById(id('aboutImpactStatValue'))
    const impactBottom = document.getElementById(id('aboutImpactBottom'))
    const impactLink = document.getElementById(id('aboutImpactLink')) as HTMLAnchorElement | null
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
  }, [instanceKey])

  return null
}
