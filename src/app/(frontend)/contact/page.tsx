import { ContactPage } from '@/components/pages/ContactPage'
import { buildPageMetadata } from '@/lib/cms/buildPageMetadata'

export async function generateMetadata() {
  return buildPageMetadata('contact', {
    title: 'Contact SEWB',
    description: 'Office location, phone, email, and message form — SEWB support and partnerships.',
  })
}

export default function Page() {
  return <ContactPage />
}
