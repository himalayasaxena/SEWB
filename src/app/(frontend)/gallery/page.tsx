import { GalleryPage } from '@/components/pages/GalleryPage'
import { CmsFixedPage } from '@/components/cms/CmsFixedPage'
import { buildPageMetadata } from '@/lib/cms/buildPageMetadata'

export async function generateMetadata() {
  return buildPageMetadata('gallery', {
    title: 'Gallery',
    description: 'Visual highlights from the SEWB platform and community.',
  })
}

export default function Page() {
  return <CmsFixedPage slug="gallery" fallback={<GalleryPage />} />
}
