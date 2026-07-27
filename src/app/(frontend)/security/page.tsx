import { SecurityPage } from '@/components/pages/SecurityPage'
import { buildPageMetadata } from '@/lib/cms/buildPageMetadata'

export async function generateMetadata() {
  return buildPageMetadata('security', {
    title: 'Security & Privacy',
    description: 'How SEWB protects health data — encryption, compliance, and operational safeguards.',
  })
}

export default function Page() {
  return <SecurityPage />
}
