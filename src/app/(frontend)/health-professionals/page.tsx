import { HealthProfessionalsPage } from '@/components/pages/HealthProfessionalsPage'
import { CmsFixedPage } from '@/components/cms/CmsFixedPage'
import { buildPageMetadata } from '@/lib/cms/buildPageMetadata'

export async function generateMetadata() {
  return buildPageMetadata('health-professionals', {
    title: 'Health Professionals',
    description: 'Tools for clinicians and allied health — workflow, insights, and collaboration.',
  })
}

export default function Page() {
  return <CmsFixedPage slug="health-professionals" fallback={<HealthProfessionalsPage />} />
}
