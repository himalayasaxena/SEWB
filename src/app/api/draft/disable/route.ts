import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

/** Clears Draft Mode (exit preview). Optional query ?path=/foo to land somewhere specific. */
export async function GET(request: Request) {
  const dm = await draftMode()
  dm.disable()

  const { searchParams } = new URL(request.url)
  const path = searchParams.get('path')
  if (path && path.startsWith('/')) {
    redirect(path)
  }
  redirect('/')
}
