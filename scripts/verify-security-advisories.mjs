#!/usr/bin/env node
/**
 * Asserts that every package named in the July 2026 pre-production vulnerability
 * report resolves at or above its fixed version — including nested copies, which
 * a top-level `npm ls` would miss. Most of these are transitive and pinned exactly
 * by Next.js and Payload, so a passing `package.json` says nothing on its own.
 *
 * Run alongside `npm audit --omit=dev --audit-level=high`; this script catches the
 * advisories the npm database does not carry (fast-uri, immutable, js-yaml, ws).
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')

/** @type {{ name: string, min: string, advisories: string }[]} */
const REQUIREMENTS = [
  { name: 'fast-uri', min: '3.1.5', advisories: 'CVE-2026-18446, CVE-2026-13676, CVE-2026-16221' },
  { name: 'immutable', min: '4.3.9', advisories: 'CVE-2026-59879, CVE-2026-59880' },
  { name: 'js-yaml', min: '4.3.1', advisories: 'CVE-2026-59870, CVE-2026-59869, CVE-2026-53550' },
  { name: 'mongoose', min: '8.24.1', advisories: 'CVE-2026-42334, GHSA-664h-wqgq-64gw' },
  { name: 'next', min: '16.2.11', advisories: 'CVE-2026-64641..64649' },
  { name: 'postcss', min: '8.5.18', advisories: 'CVE-2026-45623, GHSA-r28c-9q8g-f849, CVE-2026-41305' },
  { name: 'sharp', min: '0.35.0', advisories: 'GHSA-f88m-g3jw-g9cj' },
  { name: 'undici', min: '7.29.0', advisories: 'CVE-2026-13697, CVE-2026-14643, CVE-2026-15157, CVE-2026-16728, CVE-2026-16729' },
  { name: 'uuid', min: '11.1.1', advisories: 'CVE-2026-41907' },
  { name: 'ws', min: '8.21.0', advisories: 'CVE-2026-48779, CVE-2026-45736' },
  { name: 'esbuild', min: '0.28.1', advisories: 'GHSA-g7r4-m6w7-qqqr' },
  { name: 'vitest', min: '4.1.0', advisories: 'GHSA-2r6h-8mf9-6hjj (found during remediation)' },
]

const compare = (a, b) => {
  const pa = a.split(/[.-]/)
  const pb = b.split(/[.-]/)
  for (let i = 0; i < 3; i++) {
    const diff = Number(pa[i] ?? 0) - Number(pb[i] ?? 0)
    if (diff !== 0) return diff
  }
  return 0
}

/** @returns {Map<string, Set<string>>} package name -> every version present on disk */
const collectInstalledVersions = (names) => {
  const wanted = new Set(names)
  const found = new Map(names.map((n) => [n, new Set()]))

  const visitPackage = (dir, name, depth) => {
    // Only bare names can match: `@payloadcms/next` is not `next`.
    if (name !== null && wanted.has(name)) {
      try {
        const { version } = JSON.parse(fs.readFileSync(path.join(dir, 'package.json'), 'utf8'))
        found.get(name).add(version)
      } catch {
        /* not a readable package; ignore */
      }
    }
    const nested = path.join(dir, 'node_modules')
    if (fs.existsSync(nested)) walk(nested, depth + 1)
  }

  const walk = (nodeModulesDir, depth) => {
    if (depth > 8) return
    let entries
    try {
      entries = fs.readdirSync(nodeModulesDir, { withFileTypes: true })
    } catch {
      return
    }
    for (const entry of entries) {
      if (!entry.isDirectory() || entry.name === '.bin') continue
      const full = path.join(nodeModulesDir, entry.name)
      if (!entry.name.startsWith('@')) {
        visitPackage(full, entry.name, depth)
        continue
      }
      // A scope directory: its children are scoped packages, which can never
      // match a bare requirement name.
      let scoped = []
      try {
        scoped = fs.readdirSync(full, { withFileTypes: true })
      } catch {
        continue
      }
      for (const child of scoped) {
        if (child.isDirectory()) visitPackage(path.join(full, child.name), null, depth)
      }
    }
  }

  walk(path.join(root, 'node_modules'), 0)
  return found
}

const installed = collectInstalledVersions(REQUIREMENTS.map((r) => r.name))
const failures = []

console.log('Package'.padEnd(12) + 'Required'.padEnd(11) + 'Installed'.padEnd(20) + 'Status')
console.log('-'.repeat(64))

for (const { name, min, advisories } of REQUIREMENTS) {
  const versions = [...installed.get(name)].sort(compare)
  if (versions.length === 0) {
    console.log(name.padEnd(12) + `>=${min}`.padEnd(11) + 'not installed'.padEnd(20) + 'SKIP')
    continue
  }
  const outdated = versions.filter((v) => compare(v, min) < 0)
  const status = outdated.length === 0 ? 'OK' : `FAIL (${outdated.join(', ')})`
  console.log(name.padEnd(12) + `>=${min}`.padEnd(11) + versions.join(', ').padEnd(20) + status)
  if (outdated.length > 0) failures.push(`${name} ${outdated.join(', ')} < ${min} — ${advisories}`)
}

console.log('-'.repeat(64))

if (failures.length > 0) {
  console.error(`\n${failures.length} package(s) below their fixed version:`)
  for (const f of failures) console.error(`  - ${f}`)
  console.error('\nCheck the "overrides" block in package.json; Next.js and Payload pin')
  console.error('several of these exactly, so a plain upgrade will not move them.')
  process.exit(1)
}

console.log('\nAll remediated packages are at or above their fixed versions.')
