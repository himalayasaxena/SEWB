import { TestimonialPage } from '@/components/pages/TestimonialPage'
import { CmsFixedPage } from '@/components/cms/CmsFixedPage'
import { buildPageMetadata } from '@/lib/cms/buildPageMetadata'

export async function generateMetadata() {
  return buildPageMetadata('testimonial', {
    title: 'Testimonials',
    description: 'Voices from professionals and individuals using SEWB.',
  })
}

export default function Page() {
  return <CmsFixedPage slug="testimonial" fallback={<TestimonialPage />} />
}
