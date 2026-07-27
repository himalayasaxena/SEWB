import { Suspense } from 'react'

import { InvitePage } from '@/components/pages/InvitePage'

export const metadata = {
  title: 'SEWB - Your Health Workspace',
  description: 'Open your SEWB invitation and launch the mobile app.',
}

export default function Page() {
  return (
    <Suspense fallback={null}>
      <InvitePage />
    </Suspense>
  )
}
