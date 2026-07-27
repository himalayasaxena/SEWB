/**
 * Verifies top-level `<section className="...">` roots match between the legacy
 * `IndividualsPage.tsx` template and the CMS block sections (same order = same CSS hooks).
 *
 * Run from `cms/`: `npm run verify:individuals-css`
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const cmsRoot = path.join(__dirname, '..')

function sectionRootsFromSource(tsx: string): string[] {
  const re = /<section\s+className="([^"]+)"/g
  const out: string[] = []
  let m: RegExpExecArray | null
  while ((m = re.exec(tsx)) !== null) {
    out.push(m[1])
  }
  return out
}

const cmsSectionFiles = [
  'IndHeroSection.tsx',
  'IndToolsSection.tsx',
  'IndProcessShowcaseSection.tsx',
  'IndBenefitsSection.tsx',
  'IndSimpleStepsSection.tsx',
  'IndAiSearchSection.tsx',
  'IndAllInOneSection.tsx',
  'IndVoicesSection.tsx',
  'IndFaqSection.tsx',
]

function main() {
  const staticPage = fs.readFileSync(
    path.join(cmsRoot, 'src/components/pages/IndividualsPage.tsx'),
    'utf8',
  )
  const fromStatic = sectionRootsFromSource(staticPage)

  const fromCms = cmsSectionFiles.map((file) => {
    const p = path.join(cmsRoot, 'src/components/blocks', file)
    const src = fs.readFileSync(p, 'utf8')
    const m = src.match(/<section\s+className="([^"]+)"/)
    if (!m) {
      throw new Error(`No <section className="..."> found in ${file}`)
    }
    return m[1]
  })

  console.log('--- Individuals CSS section roots ---')
  console.log(`Static template sections: ${fromStatic.length}`)
  console.log(`CMS block sections:       ${fromCms.length}`)

  let ok = true
  if (fromStatic.length !== fromCms.length) {
    console.error(`Mismatch: count ${fromStatic.length} vs ${fromCms.length}`)
    ok = false
  }

  const n = Math.max(fromStatic.length, fromCms.length)
  for (let i = 0; i < n; i++) {
    const a = fromStatic[i]
    const b = fromCms[i]
    if (a !== b) {
      console.error(`  [${i}] static: "${a ?? '(missing)'}"`)
      console.error(`       cms:    "${b ?? '(missing)'}"`)
      ok = false
    } else {
      console.log(`  [${i}] OK · ${a}`)
    }
  }

  if (!ok) {
    console.error('\nverify-individuals-css: FAILED')
    process.exit(1)
  }
  console.log('\nverify-individuals-css: OK (section roots match in order)')
}

main()
