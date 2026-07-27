import { OrganisationsPage } from '@/components/pages/OrganisationsPage'
import { buildPageMetadata } from '@/lib/cms/buildPageMetadata'

export async function generateMetadata() {
  return buildPageMetadata('organisations', {
    title: 'For Organisations',
    description: 'SEWB for hospitals, clinics, labs, and enterprise healthcare teams.',
  })
}

export default function Page() {
  return <OrganisationsPage />
}
