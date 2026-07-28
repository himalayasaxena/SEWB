import { PrivacyPolicyPage } from '@/components/pages/PrivacyPolicyPage'
import { buildPageMetadata } from '@/lib/cms/buildPageMetadata'

export async function generateMetadata() {
  return buildPageMetadata('privacy-policy', {
    title: 'Privacy Policy',
    description: 'SEWB privacy policy.',
  })
}

/**
 * Full legal copy lives in PrivacyPolicyPage. CMS only has hero + sectionIntro stubs —
 * do not use CmsFixedPage until a real privacy layout block exists.
 */
export default function Page() {
  return <PrivacyPolicyPage />
}
