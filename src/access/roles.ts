import type { Access, PayloadRequest } from 'payload'

export type PayloadUser = {
  id?: string
  roles?: string[]
}

export function userRoles(user: unknown): string[] {
  if (!user || typeof user !== 'object') return []
  const roles = (user as PayloadUser).roles
  return Array.isArray(roles) ? roles : []
}

export function isAdmin(user: unknown): boolean {
  return userRoles(user).includes('admin')
}

export function isEditor(user: unknown): boolean {
  return userRoles(user).includes('editor')
}

/** Any logged-in CMS user who is not an admin (editors and legacy users without admin role). */
export function isNonAdmin(user: unknown): boolean {
  return Boolean(user) && !isAdmin(user)
}

/** @deprecated Use isNonAdmin */
export const isEditorOnly = isNonAdmin

export function isStaff(user: unknown): boolean {
  return isAdmin(user) || isEditor(user)
}

/** Hide website settings, pages, media library, and user management from non-admins. */
export const hiddenFromNonAdmins = ({ user }: { user: unknown }): boolean => isNonAdmin(user)

/** @deprecated Use hiddenFromNonAdmins */
export const hiddenFromEditors = hiddenFromNonAdmins

export const authenticated: Access = ({ req: { user } }) => Boolean(user)

/** Blog posts, categories, tags, leads, and blog settings for admins and editors. */
export const staffAccess: Access = ({ req: { user } }) => isStaff(user)

/** @deprecated Use staffAccess */
export const editorOrAdmin: Access = staffAccess

export const adminOnly: Access = ({ req: { user } }) => isAdmin(user)

export const authenticatedAdmin: Access = adminOnly

/** Who may log into /admin — admins and editors only. */
export const adminPanelAccess: Access = ({ req: { user } }) => isStaff(user)

export function selfOrAdminAccess({ id, req }: { id?: string | number; req: PayloadRequest }): boolean {
  const user = req.user
  if (!user) return false
  if (isAdmin(user)) return true
  return String(user.id) === String(id)
}
