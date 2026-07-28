import { IndividualsPage } from '@/components/pages/IndividualsPage'
import { CmsFixedPage } from '@/components/cms/CmsFixedPage'
import { buildPageMetadata } from '@/lib/cms/buildPageMetadata'

export async function generateMetadata() {
  return buildPageMetadata('individuals', {
    title: 'For Individuals',
    description: 'Personal health journeys — guidance, records, and continuity of care.',
  })
}

export default function Page() {
  return <CmsFixedPage slug="individuals" fallback={<IndividualsPage />} />
}
