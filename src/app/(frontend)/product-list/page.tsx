import { ProductListPage } from '@/components/pages/ProductListPage'
import { buildPageMetadata } from '@/lib/cms/buildPageMetadata'

export async function generateMetadata() {
  return buildPageMetadata('product-list', {
    title: 'Products',
    description: 'SEWB products and platform modules for individuals and organisations.',
  })
}

/**
 * Full product grid UI matches production (sewb.ai/product-list / ProductListPage).
 * CMS currently only seeds hero + section intros for this slug — do not use CmsFixedPage
 * until a real product-list layout block exists.
 */
export default function Page() {
  return <ProductListPage />
}
