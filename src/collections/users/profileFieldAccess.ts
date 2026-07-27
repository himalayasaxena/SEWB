import type { FieldAccess } from 'payload'

import { isAdmin } from '@/access/authenticated'

export const rolesFieldAccess: {
  create: FieldAccess
  read: FieldAccess
  update: FieldAccess
} = {
  read: () => true,
  create: ({ req }) => isAdmin(req.user),
  update: ({ req }) => isAdmin(req.user),
}
