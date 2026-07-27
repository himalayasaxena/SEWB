import { ContactPage } from '@/components/pages/ContactPage'
import type { ContactFullPageBlock } from '@/payload-types'

/** Renders the PHP-matched static contact page (reference: UI-Updated/contact.php). */
export function ContactFullPageSection({ block }: { block: ContactFullPageBlock }) {
  void block
  return <ContactPage />
}
