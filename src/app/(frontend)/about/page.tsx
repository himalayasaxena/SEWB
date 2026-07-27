import { AboutPage } from '@/components/pages/AboutPage'
import { buildPageMetadata } from '@/lib/cms/buildPageMetadata'

export async function generateMetadata() {
  return buildPageMetadata('about', {
    title: 'About SEWB',
    description: 'Mission, vision, leadership, and platform impact — SEWB connects individuals with verified health professionals.',
  })
}

export default function Page() {
  return <AboutPage />
}
