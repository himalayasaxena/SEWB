import { FeaturesPage } from '@/components/pages/FeaturesPage'
import { CmsFixedPage } from '@/components/cms/CmsFixedPage'
import { buildPageMetadata } from '@/lib/cms/buildPageMetadata'

export async function generateMetadata() {
  return buildPageMetadata('features', {
    title: 'Features',
    description: 'Explore SEWB platform features for individuals, professionals, and organisations.',
  })
}

export default function Page() {
  return <CmsFixedPage slug="features" fallback={<FeaturesPage />} />
}
