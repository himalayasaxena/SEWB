import type { Media, Post, User } from '@/payload-types'

import { isStaff } from '@/access/authenticated'

export type UserSocialLinks = {
  facebook?: string | null
  twitter?: string | null
  instagram?: string | null
  linkedin?: string | null
}

export function isStaffUser(user: User): boolean {
  return isStaff(user)
}

/** @deprecated Use isStaffUser */
export const isEditorUser = isStaffUser

export function displayNameFromEmail(email: string): string {
  const base = email.split('@')[0] || 'Editor'
  return base
    .split(/[._-]+/g)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}

export function editorDisplayName(user: User): string {
  if (typeof user.displayName === 'string' && user.displayName.trim()) {
    return user.displayName.trim()
  }
  if (typeof user.email === 'string' && user.email.trim()) {
    return displayNameFromEmail(user.email)
  }
  return 'SEWB Editor'
}

export function editorFromPost(post: Post): User | null {
  const author = post.author
  if (!author || typeof author === 'string') return null
  return author
}

export function editorPhotoUrl(
  user: User,
  fallback = '/assets/img/icons/profile2.webp',
): string {
  const photo = user.photo
  if (!photo || typeof photo === 'string') return fallback
  if (typeof (photo as Media).url === 'string' && (photo as Media).url) {
    return (photo as Media).url as string
  }
  return fallback
}

export function editorSocialLinks(user: User): UserSocialLinks {
  return user.socialLinks ?? {}
}
