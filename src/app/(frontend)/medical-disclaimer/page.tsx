import { MedicalDisclaimerPage } from '@/components/pages/MedicalDisclaimerPage'
import { CmsFixedPage } from '@/components/cms/CmsFixedPage'
import { buildPageMetadata } from '@/lib/cms/buildPageMetadata'

export async function generateMetadata() {
  return buildPageMetadata('medical-disclaimer', {
    title: 'Medical Disclaimer',
    description: 'Important medical disclaimer information for SEWB services.',
  })
}

export default function Page() {
  return <CmsFixedPage slug="medical-disclaimer" fallback={<MedicalDisclaimerPage />} />
}
