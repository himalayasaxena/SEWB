import { TermsConditionsPage } from '@/components/pages/TermsConditionsPage'
import { buildPageMetadata } from '@/lib/cms/buildPageMetadata'

export async function generateMetadata() {
  return buildPageMetadata('terms-conditions', {
    title: 'Terms and Conditions',
    description: 'SEWB terms and conditions.',
  })
}

/**
 * Full legal copy lives in TermsConditionsPage. CMS only has hero + sectionIntro stubs —
 * do not use CmsFixedPage until a real terms layout block exists.
 */
export default function Page() {
  return <TermsConditionsPage />
}
