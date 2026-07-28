import { PageBlocks } from '@/components/PageBlocks'
import { HomePage } from '@/components/pages/HomePage'
import { buildPageMetadata } from '@/lib/cms/buildPageMetadata'
import { getPublishedPageBySlug } from '@/lib/cms/getPublishedPage'
import { isFullCmsHomeLayout } from '@/lib/cms/isFullCmsHomeLayout'

export async function generateMetadata() {
  return buildPageMetadata('home', {
    title: 'SEWB - Global Care',
    description: 'Your digital healthcare assistant — SEWB.',
  })
}

export default async function Page() {
  const page = await getPublishedPageBySlug('home')
  const layout = page?.layout ?? null

  if (layout && isFullCmsHomeLayout(layout)) {
    return <PageBlocks layout={layout} />
  }

  return <HomePage />
}
