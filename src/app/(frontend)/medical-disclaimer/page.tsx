import { MedicalDisclaimerPage } from '@/components/pages/MedicalDisclaimerPage'
import { buildPageMetadata } from '@/lib/cms/buildPageMetadata'

export async function generateMetadata() {
  return buildPageMetadata('medical-disclaimer', {
    title: 'Medical Disclaimer',
    description: 'Important information about medical information and AI-assisted guidance on SEWB.',
  })
}

export default function Page() {
  return <MedicalDisclaimerPage />
}
