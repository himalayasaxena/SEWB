import { PrivacyPolicyPage } from '@/components/pages/PrivacyPolicyPage'
import { buildPageMetadata } from '@/lib/cms/buildPageMetadata'

export async function generateMetadata() {
  return buildPageMetadata('privacy-policy', {
    title: 'Privacy Policy',
    description: 'SEWB privacy policy.',
  })
}

export default function Page() {
  return <PrivacyPolicyPage />
}
