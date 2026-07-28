import { PrivacyPolicyPage } from '@/components/pages/PrivacyPolicyPage'
import { CmsFixedPage } from '@/components/cms/CmsFixedPage'
import { buildPageMetadata } from '@/lib/cms/buildPageMetadata'

export async function generateMetadata() {
  return buildPageMetadata('privacy-policy', {
    title: 'Privacy Policy',
    description: 'SEWB privacy policy.',
  })
}

export default function Page() {
  return <CmsFixedPage slug="privacy-policy" fallback={<PrivacyPolicyPage />} />
}
