import { ProductListPage } from '@/components/pages/ProductListPage'
import { CmsFixedPage } from '@/components/cms/CmsFixedPage'
import { buildPageMetadata } from '@/lib/cms/buildPageMetadata'

export async function generateMetadata() {
  return buildPageMetadata('product-list', {
    title: 'Products',
    description: 'SEWB products and platform modules for individuals and organisations.',
  })
}

export default function Page() {
  return <CmsFixedPage slug="product-list" fallback={<ProductListPage />} />
}
