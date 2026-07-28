import { ContactPage } from '@/components/pages/ContactPage'
import { CmsFixedPage } from '@/components/cms/CmsFixedPage'
import { buildPageMetadata } from '@/lib/cms/buildPageMetadata'

export async function generateMetadata() {
  return buildPageMetadata('contact', {
    title: 'Contact',
    description: 'Get in touch with the SEWB team.',
  })
}

export default function Page() {
  return <CmsFixedPage slug="contact" fallback={<ContactPage />} />
}
