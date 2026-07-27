import { AboutPage } from '@/components/pages/AboutPage'
import type { AboutFullPageBlock } from '@/payload-types'

/** Renders the PHP-matched static about page (reference: UI-Updated/about.php). */
export function AboutFullPageSection({
  block,
}: {
  block: AboutFullPageBlock
  instanceKey: string
}) {
  void block
  return <AboutPage />
}
