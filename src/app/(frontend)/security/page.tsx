import { SecurityPage } from '@/components/pages/SecurityPage'
import { CmsFixedPage } from '@/components/cms/CmsFixedPage'
import { buildPageMetadata } from '@/lib/cms/buildPageMetadata'

export async function generateMetadata() {
  return buildPageMetadata('security', {
    title: 'Security & Privacy',
    description: 'How SEWB protects health data — encryption, compliance, and operational safeguards.',
  })
}

export default function Page() {
  return <CmsFixedPage slug="security" fallback={<SecurityPage />} />
}
