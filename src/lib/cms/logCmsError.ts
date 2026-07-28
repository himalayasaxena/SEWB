/**
 * Log CMS Local API failures that otherwise fall back silently
 * (null page → static layout, null globals → default chrome).
 */
export function logCmsError(
  context: string,
  error: unknown,
  details?: Record<string, unknown>,
): void {
  const message = error instanceof Error ? error.message : String(error)
  console.error(`[cms] ${context}: ${message}`, {
    ...details,
    ...(error instanceof Error ? { stack: error.stack } : { error }),
  })
}
