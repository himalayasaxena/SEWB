import { TestimonialPage } from '@/components/pages/TestimonialPage'
import { buildPageMetadata } from '@/lib/cms/buildPageMetadata'

export async function generateMetadata() {
  return buildPageMetadata('testimonial', {
    title: 'Testimonials',
    description: 'Voices from professionals and individuals using SEWB.',
  })
}

export default function Page() {
  return <TestimonialPage />
}
