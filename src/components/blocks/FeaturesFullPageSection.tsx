import { FeaturesPage } from '@/components/pages/FeaturesPage'
import type { FeaturesFullPageBlock } from '@/payload-types'

/** Renders the PHP-matched static features page (reference: UI-Updated/features.php). */
export function FeaturesFullPageSection({
  block,
}: {
  block: FeaturesFullPageBlock
  instanceKey: string
}) {
  void block
  return <FeaturesPage />
}
