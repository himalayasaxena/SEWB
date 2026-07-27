import { HomePage } from '@/components/pages/HomePage'
import { buildPageMetadata } from '@/lib/cms/buildPageMetadata'

export async function generateMetadata() {
  return buildPageMetadata('home', {
    title: 'SEWB - Global Care',
    description: 'Your digital healthcare assistant — SEWB.',
  })
}

export default function Page() {
  return <HomePage />
}
