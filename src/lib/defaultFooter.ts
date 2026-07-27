import type { Footer as FooterGlobal } from '@/payload-types'

export const defaultFooterColumns: NonNullable<FooterGlobal['columns']> = [
  {
    title: 'Product',
    links: [
      { label: 'For Health Professionals', href: '/health-professionals' },
      { label: 'For Individuals', href: '/individuals' },
      { label: 'For Organisations', href: '/organisations' },
      { label: 'Medical Disclaimer', href: '/medical-disclaimer' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Contact us', href: '/contact' },
      { label: 'Security', href: '/security' },
    ],
  },
]

export const defaultFooterSocialLinks: NonNullable<FooterGlobal['socialLinks']> = [
  { label: 'facebook', url: 'javascript:;' },
  { label: 'twitter', url: 'javascript:;' },
  { label: 'instagram', url: 'javascript:;' },
  { label: 'linkedin', url: 'javascript:;' },
  { label: 'youtube', url: 'javascript:;' },
]

export const defaultNewsletterPoints = [
  'Continuous Tracking',
  'Early Risk Alerts',
  'AI Guidance',
  'Connected Care',
  'Smart Insights',
]
