import { draftMode } from 'next/headers'

import { DraftPreviewBarClient } from './DraftPreviewBarClient'

/** Only shows "Exit preview" on `/preview/...` routes when Draft Mode is active. */
export async function DraftPreviewBar() {
  const { isEnabled } = await draftMode()
  return <DraftPreviewBarClient isDraftEnabled={isEnabled} />
}
