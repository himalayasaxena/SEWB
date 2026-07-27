import { GalleryPage } from '@/components/pages/GalleryPage'
import type { GalleryFullPageBlock } from '@/payload-types'

/** Renders the PHP-matched static gallery page (reference: UI-Updated/gallery.php). */
export function GalleryFullPageSection({ block }: { block: GalleryFullPageBlock }) {
  void block
  return <GalleryPage />
}
