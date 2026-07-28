import BlogIndexPage from '@/components/blog/BlogIndexPage'
import { CmsFixedPage } from '@/components/cms/CmsFixedPage'
import { buildPageMetadata } from '@/lib/cms/buildPageMetadata'

export async function generateMetadata() {
  return buildPageMetadata('blog', {
    title: 'Blog',
    description: 'Healthcare insights, news, and SEWB updates.',
  })
}

export default function Page() {
  return <CmsFixedPage slug="blog" fallback={<BlogIndexPage />} />
}
