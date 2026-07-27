import { FeaturesPage } from '@/components/pages/FeaturesPage'
import { buildPageMetadata } from '@/lib/cms/buildPageMetadata'

export async function generateMetadata() {
  return buildPageMetadata('features', {
    title: 'Platform Features',
    description: 'Capabilities that power SEWB — AI intelligence, security, devices, and care workflows.',
  })
}

export default function Page() {
  return <FeaturesPage />
}
