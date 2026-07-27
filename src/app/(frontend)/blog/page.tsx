import BlogIndexPage from '@/components/blog/BlogIndexPage'
import { buildPageMetadata } from '@/lib/cms/buildPageMetadata'

export async function generateMetadata() {
  return buildPageMetadata('blog', {
    title: 'Blog',
    description: 'Healthcare insights, news, and SEWB updates.',
  })
}

export default async function Page() {
  return <BlogIndexPage />
}
