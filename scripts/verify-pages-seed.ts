/**
 * Verifies fixed Pages exist in DB with expected SEO, hero/banner, and section intro blocks.
 * Run: `npm run verify:pages` (from `cms/`)
 */
import 'dotenv/config'

import { getPayload } from 'payload'

import type { BannerSliderBlock, CommonHeroBlock, Media, Page } from '../src/payload-types.js'
import { FIXED_PAGE_SEEDS, FIXED_PAGE_SLUGS } from '../src/constants/fixedPages.js'
import { HOME_BANNER_SLIDES, PAGE_SECTION_INTROS } from '../src/constants/fixedPageLayouts.js'
import config from '../src/payload.config.js'

function norm(s: string | null | undefined): string {
  return (s ?? '').trim()
}

function isPopulatedMedia(v: string | Media | null | undefined): v is Media {
  return typeof v === 'object' && v !== null && 'id' in v
}

function mediaSummary(v: string | Media | null | undefined): { id: string; filename?: string } {
  if (!v) return { id: '(none)' }
  const id = typeof v === 'string' ? v : v.id
  const filename = isPopulatedMedia(v) ? v.filename ?? undefined : undefined
  return { id, ...(filename ? { filename } : {}) }
}

async function main() {
  const payload = await getPayload({ config })
  const missing: string[] = []
  const issues: string[] = []
  const ok: { slug: string; lead: string }[] = []

  for (const slug of FIXED_PAGE_SLUGS) {
    const seed = FIXED_PAGE_SEEDS.find((s) => s.slug === slug)
    if (!seed) {
      issues.push(`${slug}: no seed definition`)
      continue
    }

    const res = await payload.find({
      collection: 'pages',
      where: { slug: { equals: slug } },
      limit: 1,
      depth: 2,
      overrideAccess: true,
    })

    const doc = res.docs[0] as Page | undefined
    if (!doc) {
      missing.push(slug)
      continue
    }

    if (doc.title !== seed.title) issues.push(`${slug}: title DB="${doc.title}" seed="${seed.title}"`)
    if (doc.seoTitle !== seed.seoTitle) issues.push(`${slug}: seoTitle mismatch`)
    if (doc.seoDescription !== seed.seoDescription) issues.push(`${slug}: seoDescription mismatch`)
    if (doc._status && doc._status !== 'published') {
      issues.push(`${slug}: _status="${doc._status}" (expected published)`)
    }

    const layout = doc.layout
    if (!Array.isArray(layout) || layout.length === 0) {
      issues.push(`${slug}: layout empty`)
      continue
    }

    const expectedIntros =
      slug === 'about' ||
      slug === 'contact' ||
      slug === 'features' ||
      slug === 'health-professionals' ||
      slug === 'individuals' ||
      slug === 'organisations' ||
      slug === 'medical-disclaimer' ||
      slug === 'security' ||
      slug === 'blog' ||
      slug === 'testimonial' ||
      slug === 'gallery'
        ? 0
        : (PAGE_SECTION_INTROS[slug]?.length ?? 0)
    const introCount = layout.filter((b) => b.blockType === 'sectionIntro').length
    if (introCount !== expectedIntros) {
      issues.push(`${slug}: sectionIntro blocks ${introCount}, expected ${expectedIntros}`)
    }

    if (slug === 'home') {
      const first = layout[0]
      const homeBlocks = [
        'bannerSlider',
        'homeInfrastructure',
        'homeHighlights',
        'homePrivacy',
        'homeAppDownload',
        'homeFaq',
      ] as const
      const types = layout.map((b) => b.blockType)
      for (const t of homeBlocks) {
        if (!types.includes(t)) issues.push(`${slug}: missing layout block "${t}"`)
      }
      if (layout.length !== homeBlocks.length) {
        issues.push(`${slug}: layout length ${layout.length}, expected ${homeBlocks.length} (full homepage CMS)`)
      }

      if (first.blockType === 'bannerSlider') {
        const bs = first as BannerSliderBlock
        const n = bs.slides?.length ?? 0
        if (n !== HOME_BANNER_SLIDES.length) {
          issues.push(`${slug}: banner slides ${n}, expected ${HOME_BANNER_SLIDES.length}`)
        }
        const bg = bs.slides?.[0]?.backgroundImage
        const m = mediaSummary(bg)
        ok.push({ slug, lead: `full CMS home · banner slide1 id=${m.id}${m.filename ? ` file=${m.filename}` : ''}` })
      } else if (first.blockType === 'commonHero') {
        const hero = first as CommonHeroBlock
        if (hero.badge !== seed.hero.badge) issues.push(`${slug}: hero.badge mismatch`)
        if (hero.title !== seed.hero.title) issues.push(`${slug}: hero.title mismatch`)
        if (norm(hero.titleHighlight) !== norm(seed.hero.titleHighlight)) {
          issues.push(`${slug}: hero.titleHighlight mismatch`)
        }
        if (hero.subtitle !== seed.hero.subtitle) issues.push(`${slug}: hero.subtitle mismatch`)
        const img = hero.sideImage
        const m = mediaSummary(img)
        ok.push({ slug, lead: `commonHero sideImage id=${m.id}${m.filename ? ` file=${m.filename}` : ''}` })
        if (!img) issues.push(`${slug}: sideImage missing (fallback hero)`)
      } else {
        issues.push(`${slug}: first block "${first.blockType}", expected bannerSlider or commonHero`)
      }
      continue
    }

    if (slug === 'about') {
      const types = layout.map((b) => b.blockType)
      if (!types.includes('aboutFullPage')) {
        issues.push('about: missing aboutFullPage block')
      }
      ok.push({ slug, lead: `about layout blocks=${types.join(',')}` })
      continue
    }

    if (slug === 'contact') {
      const types = layout.map((b) => b.blockType)
      if (!types.includes('contactFullPage')) {
        issues.push('contact: missing contactFullPage block')
      }
      if (layout.length !== 1) {
        issues.push(`contact: layout length ${layout.length}, expected 1 (full contact CMS)`)
      }
      ok.push({ slug, lead: `contact layout blocks=${types.join(',')}` })
      continue
    }

    if (slug === 'features') {
      const types = layout.map((b) => b.blockType)
      if (!types.includes('featuresFullPage')) {
        issues.push('features: missing featuresFullPage block')
      }
      if (layout.length !== 1) {
        issues.push(`features: layout length ${layout.length}, expected 1 (full features CMS)`)
      }
      ok.push({ slug, lead: `features layout blocks=${types.join(',')}` })
      continue
    }

    if (slug === 'medical-disclaimer') {
      const types = layout.map((b) => b.blockType)
      if (layout.length !== 1) {
        issues.push(`medical-disclaimer: layout length ${layout.length}, expected 1 (full-page CMS)`)
      }
      if (layout[0]?.blockType !== 'medicalDisclaimerFullPage') {
        issues.push(
          `medical-disclaimer: first block is "${layout[0]?.blockType}", expected medicalDisclaimerFullPage`,
        )
      }
      ok.push({ slug, lead: `medical-disclaimer layout blocks=${types.join(',')}` })
      continue
    }

    if (slug === 'blog') {
      const blogOrder = ['blogHero', 'blogIndexFeed'] as const
      const types = layout.map((b) => b.blockType)
      if (layout.length !== blogOrder.length) {
        issues.push(`blog: layout length ${layout.length}, expected ${blogOrder.length} (blog index CMS)`)
      }
      for (let i = 0; i < blogOrder.length; i++) {
        const exp = blogOrder[i]
        if (layout[i]?.blockType !== exp) {
          issues.push(`blog: block index ${i} is "${layout[i]?.blockType}", expected "${exp}"`)
        }
      }
      ok.push({ slug, lead: `blog blocks=${types.join(',')}` })
      continue
    }

    if (slug === 'testimonial') {
      const tmOrder = ['testimonialHero', 'testimonialCarousel', 'testimonialCarousel'] as const
      const types = layout.map((b) => b.blockType)
      if (layout.length !== tmOrder.length) {
        issues.push(`testimonial: layout length ${layout.length}, expected ${tmOrder.length} (testimonial CMS)`)
      }
      for (let i = 0; i < tmOrder.length; i++) {
        const exp = tmOrder[i]
        if (layout[i]?.blockType !== exp) {
          issues.push(`testimonial: block index ${i} is "${layout[i]?.blockType}", expected "${exp}"`)
        }
      }
      ok.push({ slug, lead: `testimonial blocks=${types.join(',')}` })
      continue
    }

    if (slug === 'gallery') {
      const types = layout.map((b) => b.blockType)
      if (layout.length !== 1) {
        issues.push(`gallery: layout length ${layout.length}, expected 1 (full gallery CMS)`)
      }
      if (layout[0]?.blockType !== 'galleryFullPage') {
        issues.push(`gallery: first block is "${layout[0]?.blockType}", expected galleryFullPage`)
      }
      ok.push({ slug, lead: `gallery layout blocks=${types.join(',')}` })
      continue
    }

    if (slug === 'security') {
      const secOrder = [
        'securityHero',
        'securitySafety',
        'securityArchitecture',
        'securityThreat',
        'securityBackup',
        'securityAudit',
        'securityAppCta',
        'securityFaq',
      ] as const
      const types = layout.map((b) => b.blockType)
      if (layout.length !== secOrder.length) {
        issues.push(`security: layout length ${layout.length}, expected ${secOrder.length} (multi-block CMS)`)
      }
      for (let i = 0; i < secOrder.length; i++) {
        const exp = secOrder[i]
        if (layout[i]?.blockType !== exp) {
          issues.push(`security: block index ${i} is "${layout[i]?.blockType}", expected "${exp}"`)
        }
      }
      ok.push({ slug, lead: `security blocks=${types.join(',')}` })
      continue
    }

    if (slug === 'individuals') {
      const indOrder = [
        'indHero',
        'indTools',
        'indProcessShowcase',
        'indBenefits',
        'indSimpleSteps',
        'indAiSearch',
        'indAllInOne',
        'indVoices',
        'indFaq',
      ] as const
      const types = layout.map((b) => b.blockType)
      if (layout.length !== indOrder.length) {
        issues.push(`individuals: layout length ${layout.length}, expected ${indOrder.length} (multi-block CMS)`)
      }
      for (let i = 0; i < indOrder.length; i++) {
        const exp = indOrder[i]
        if (layout[i]?.blockType !== exp) {
          issues.push(`individuals: block index ${i} is "${layout[i]?.blockType}", expected "${exp}"`)
        }
      }
      ok.push({ slug, lead: `individuals blocks=${types.join(',')}` })
      continue
    }

    if (slug === 'health-professionals') {
      const hpOrder = [
        'healthProHero',
        'healthProTools',
        'healthProBenefits',
        'healthProOnboarding',
        'healthProSecurity',
        'healthProPatientControl',
        'healthProAppCta',
        'healthProFaq',
      ] as const
      const types = layout.map((b) => b.blockType)
      if (layout.length !== hpOrder.length) {
        issues.push(
          `health-professionals: layout length ${layout.length}, expected ${hpOrder.length} (multi-block CMS)`,
        )
      }
      for (let i = 0; i < hpOrder.length; i++) {
        const exp = hpOrder[i]
        if (layout[i]?.blockType !== exp) {
          issues.push(
            `health-professionals: block index ${i} is "${layout[i]?.blockType}", expected "${exp}"`,
          )
        }
      }
      ok.push({ slug, lead: `health-professionals blocks=${types.join(',')}` })
      continue
    }

    if (slug === 'organisations') {
      const orgOrder = [
        'orgHero',
        'orgLabSolutions',
        'orgPharmacySolutions',
        'orgProcessSteps',
        'orgSecureReports',
        'orgFeatureGrid',
        'orgAppCta',
        'orgEnterpriseDashboard',
        'orgFaq',
      ] as const
      const types = layout.map((b) => b.blockType)
      if (layout.length !== orgOrder.length) {
        issues.push(`organisations: layout length ${layout.length}, expected ${orgOrder.length} (multi-block CMS)`)
      }
      for (let i = 0; i < orgOrder.length; i++) {
        const exp = orgOrder[i]
        if (layout[i]?.blockType !== exp) {
          issues.push(`organisations: block index ${i} is "${layout[i]?.blockType}", expected "${exp}"`)
        }
      }
      ok.push({ slug, lead: `organisations blocks=${types.join(',')}` })
      continue
    }

    const first = layout[0]
    if (first.blockType !== 'commonHero') {
      issues.push(`${slug}: first block is "${first.blockType}", expected commonHero`)
      continue
    }

    const hero = first as CommonHeroBlock
    if (hero.badge !== seed.hero.badge) issues.push(`${slug}: hero.badge mismatch`)
    if (hero.title !== seed.hero.title) issues.push(`${slug}: hero.title mismatch`)
    if (norm(hero.titleHighlight) !== norm(seed.hero.titleHighlight)) {
      issues.push(`${slug}: hero.titleHighlight mismatch`)
    }
    if (hero.subtitle !== seed.hero.subtitle) issues.push(`${slug}: hero.subtitle mismatch`)

    const img = hero.sideImage
    if (!img) {
      issues.push(`${slug}: sideImage missing (seed expects ${seed.hero.imagePublicPath})`)
    }
    const m = mediaSummary(img)
    ok.push({ slug, lead: `commonHero sideImage id=${m.id}${m.filename ? ` file=${m.filename}` : ''}` })
  }

  const all = await payload.find({ collection: 'pages', limit: 300, overrideAccess: true })
  const slugSet = new Set<string>(FIXED_PAGE_SLUGS as unknown as string[])
  const slugCounts = new Map<string, number>()
  const noSlug: string[] = []
  for (const d of all.docs) {
    const s = typeof d.slug === 'string' ? d.slug : ''
    if (!s) {
      noSlug.push(String((d as { id?: string }).id ?? '?'))
      continue
    }
    slugCounts.set(s, (slugCounts.get(s) ?? 0) + 1)
  }
  const duplicateSlugs = [...slugCounts.entries()].filter(([, c]) => c > 1).map(([s]) => s)
  const unexpected = all.docs.filter((d) => d.slug && !slugSet.has(String(d.slug)))

  console.log('--- Pages seed verification ---')
  console.log(`Expected slugs: ${FIXED_PAGE_SLUGS.length}`)
  console.log(`DB pages total: ${all.docs.length}`)
  if (noSlug.length) {
    console.log(`WARNING Page docs without slug (ids): ${noSlug.join(', ')}`)
  }
  if (duplicateSlugs.length) {
    console.log(`WARNING duplicate slug rows (same slug, multiple docs): ${duplicateSlugs.join(', ')}`)
  }
  if (missing.length) console.log(`MISSING slugs: ${missing.join(', ')}`)
  if (issues.length) {
    console.log('Issues:')
    for (const i of issues) console.log(`  - ${i}`)
  } else {
    console.log('Field checks: OK (SEO + hero/banner + sectionIntro counts)')
  }
  if (unexpected.length) {
    console.log(`Unexpected extra Page documents: ${unexpected.map((d) => d.slug).join(', ')}`)
  } else {
    console.log('No extra Page slugs beyond fixed list.')
  }

  console.log('\nLead block / hero media:')
  for (const row of ok) {
    console.log(`  ${row.slug}: ${row.lead}`)
  }

  const exitCode = missing.length || issues.length ? 1 : 0
  process.exit(exitCode)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
