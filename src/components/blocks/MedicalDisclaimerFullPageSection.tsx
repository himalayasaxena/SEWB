import { MedicalDisclaimerPage } from '@/components/pages/MedicalDisclaimerPage'
import type { MedicalDisclaimerFullPageBlock } from '@/payload-types'

/** Renders the PHP-matched static medical disclaimer page (reference: UI-Updated/medical-disclaimer.php). */
export function MedicalDisclaimerFullPageSection({
  block,
}: {
  block: MedicalDisclaimerFullPageBlock
}) {
  void block
  return <MedicalDisclaimerPage />
}
