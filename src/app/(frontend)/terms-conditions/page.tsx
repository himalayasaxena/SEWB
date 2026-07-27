import { TermsConditionsPage } from '@/components/pages/TermsConditionsPage'
import { buildPageMetadata } from '@/lib/cms/buildPageMetadata'

export async function generateMetadata() {
  return buildPageMetadata('terms-conditions', {
    title: 'Terms and Conditions',
    description: 'SEWB terms and conditions.',
  })
}

export default function Page() {
  return <TermsConditionsPage />
}
