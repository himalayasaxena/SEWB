/**
 * Upserts the fixed marketing Pages (SEO + layout blocks: banner / common hero + section intros).
 * Run from repo `cms/`: `npm run seed:pages`
 *
 * Requires MongoDB + `.env` (DATABASE_URL, PAYLOAD_SECRET).
 */
import 'dotenv/config'

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { getPayload } from 'payload'

import type { BannerSliderBlock, CommonHeroBlock, Media, Page, SectionIntroBlock } from '../src/payload-types.js'
import { FIXED_PAGE_SEEDS } from '../src/constants/fixedPages.js'
import {
  HOME_BANNER_SLIDES,
  PAGE_SECTION_INTROS,
  type BannerSlideSeed,
} from '../src/constants/fixedPageLayouts.js'
import config from '../src/payload.config.js'
import { buildAboutSeedBlocks } from './aboutSeedLayout.js'
import { buildContactSeedBlocks } from './contactSeedLayout.js'
import { buildFeaturesSeedBlocks } from './featuresSeedLayout.js'
import { buildHealthProfessionalsSeedBlocks } from './healthProfessionalsSeedLayout.js'
import { buildIndividualsSeedBlocks } from './individualsSeedLayout.js'
import { buildOrganisationsSeedBlocks } from './organisationsSeedLayout.js'
import { buildMedicalDisclaimerSeedBlocks } from './medicalDisclaimerSeedLayout.js'
import { buildSecuritySeedBlocks } from './securitySeedLayout.js'
import { buildBlogSeedBlocks } from './blogSeedLayout.js'
import { buildTestimonialSeedBlocks } from './testimonialSeedLayout.js'
import { buildGallerySeedBlocks } from './gallerySeedLayout.js'
import { buildHomeSeedBlocks } from './homeSeedLayout.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const cmsRoot = path.join(__dirname, '..')
const publicDir = path.join(cmsRoot, 'public')

function seedMediaAlt(publicRelativePath: string): string {
  return `SEWB seed · ${publicRelativePath}`
}

async function ensureMediaId(
  payload: Awaited<ReturnType<typeof getPayload>>,
  publicRelativePath: string,
  pathCache: Map<string, string>,
): Promise<string | undefined> {
  if (pathCache.has(publicRelativePath)) {
    return pathCache.get(publicRelativePath)
  }

  const abs = path.join(publicDir, publicRelativePath)
  if (!fs.existsSync(abs)) {
    console.warn(`[seed:pages] Missing public file, skip image: ${publicRelativePath}`)
    return undefined
  }

  const alt = seedMediaAlt(publicRelativePath)
  const existing = await payload.find({
    collection: 'media',
    where: { alt: { equals: alt } },
    limit: 1,
    overrideAccess: true,
  })
  const first = existing.docs[0] as Media | undefined
  if (first?.id) {
    pathCache.set(publicRelativePath, first.id)
    return first.id
  }

  const created = await payload.create({
    collection: 'media',
    data: { alt },
    filePath: abs,
    overrideAccess: true,
  })
  pathCache.set(publicRelativePath, created.id)
  return created.id
}

async function buildBannerSliderBlock(
  payload: Awaited<ReturnType<typeof getPayload>>,
  slides: BannerSlideSeed[],
  pathCache: Map<string, string>,
): Promise<BannerSliderBlock | null> {
  const built: NonNullable<BannerSliderBlock['slides']> = []

  for (const s of slides) {
    const mid = await ensureMediaId(payload, s.imagePublicPath, pathCache)
    if (!mid) continue
    built.push({
      backgroundImage: mid,
      ...(s.pretitle ? { pretitle: s.pretitle } : {}),
      title: s.title,
      ...(s.subtitle ? { subtitle: s.subtitle } : {}),
      ...(s.primaryCta ? { primaryCta: s.primaryCta } : {}),
      ...(s.secondaryCta ? { secondaryCta: s.secondaryCta } : {}),
    })
  }

  if (built.length === 0) return null
  return { blockType: 'bannerSlider', slides: built }
}

type PageLayout = NonNullable<Page['layout']>

async function buildLayout(
  payload: Awaited<ReturnType<typeof getPayload>>,
  slug: string,
  hero: (typeof FIXED_PAGE_SEEDS)[number]['hero'],
  pathCache: Map<string, string>,
): Promise<PageLayout> {
  const layout: PageLayout = []

  if (slug === 'home') {
    const banner = await buildBannerSliderBlock(payload, HOME_BANNER_SLIDES, pathCache)
    if (banner) layout.push(banner)
    else {
      const mediaId = await ensureMediaId(payload, hero.imagePublicPath, pathCache)
      const heroBlock: CommonHeroBlock = {
        blockType: 'commonHero',
        badge: hero.badge,
        title: hero.title,
        ...(hero.titleHighlight ? { titleHighlight: hero.titleHighlight } : {}),
        subtitle: hero.subtitle,
        ...(mediaId ? { sideImage: mediaId } : {}),
      }
      layout.push(heroBlock)
    }
    const ensurePath = (publicRelativePath: string) =>
      ensureMediaId(payload, publicRelativePath, pathCache)
    const homeBody = await buildHomeSeedBlocks(ensurePath)
    for (const b of homeBody) layout.push(b)
  } else if (slug === 'about') {
    const ensurePath = (publicRelativePath: string) =>
      ensureMediaId(payload, publicRelativePath, pathCache)
    const aboutBody = await buildAboutSeedBlocks(ensurePath)
    for (const b of aboutBody) layout.push(b)
  } else if (slug === 'contact') {
    const ensurePath = (publicRelativePath: string) =>
      ensureMediaId(payload, publicRelativePath, pathCache)
    const contactBody = await buildContactSeedBlocks(ensurePath)
    for (const b of contactBody) layout.push(b)
  } else if (slug === 'features') {
    const ensurePath = (publicRelativePath: string) =>
      ensureMediaId(payload, publicRelativePath, pathCache)
    const featuresBody = await buildFeaturesSeedBlocks(ensurePath)
    for (const b of featuresBody) layout.push(b)
  } else if (slug === 'health-professionals') {
    const ensurePath = (publicRelativePath: string) =>
      ensureMediaId(payload, publicRelativePath, pathCache)
    const hpBody = await buildHealthProfessionalsSeedBlocks(ensurePath)
    for (const b of hpBody) layout.push(b)
  } else if (slug === 'individuals') {
    const ensurePath = (publicRelativePath: string) =>
      ensureMediaId(payload, publicRelativePath, pathCache)
    const indBody = await buildIndividualsSeedBlocks(ensurePath)
    for (const b of indBody) layout.push(b)
  } else if (slug === 'organisations') {
    const ensurePath = (publicRelativePath: string) =>
      ensureMediaId(payload, publicRelativePath, pathCache)
    const orgBody = await buildOrganisationsSeedBlocks(ensurePath)
    for (const b of orgBody) layout.push(b)
  } else if (slug === 'medical-disclaimer') {
    const ensurePath = (publicRelativePath: string) =>
      ensureMediaId(payload, publicRelativePath, pathCache)
    const mdBody = await buildMedicalDisclaimerSeedBlocks(ensurePath)
    for (const b of mdBody) layout.push(b)
  } else if (slug === 'security') {
    const ensurePath = (publicRelativePath: string) =>
      ensureMediaId(payload, publicRelativePath, pathCache)
    const secBody = await buildSecuritySeedBlocks(ensurePath)
    for (const b of secBody) layout.push(b)
  } else if (slug === 'blog') {
    const ensurePath = (publicRelativePath: string) =>
      ensureMediaId(payload, publicRelativePath, pathCache)
    const blogBody = await buildBlogSeedBlocks(ensurePath)
    for (const b of blogBody) layout.push(b)
  } else if (slug === 'testimonial') {
    const ensurePath = (publicRelativePath: string) =>
      ensureMediaId(payload, publicRelativePath, pathCache)
    const tmBody = await buildTestimonialSeedBlocks(ensurePath)
    for (const b of tmBody) layout.push(b)
  } else if (slug === 'gallery') {
    const ensurePath = (publicRelativePath: string) =>
      ensureMediaId(payload, publicRelativePath, pathCache)
    const galBody = await buildGallerySeedBlocks(ensurePath)
    for (const b of galBody) layout.push(b)
  } else if (slug === 'privacy-policy' || slug === 'terms-conditions') {
    // Full legal copy lives in static page components; CMS only stores SEO fields.
    return layout
  } else {
    const mediaId = await ensureMediaId(payload, hero.imagePublicPath, pathCache)
    const heroBlock: CommonHeroBlock = {
      blockType: 'commonHero',
      badge: hero.badge,
      title: hero.title,
      ...(hero.titleHighlight ? { titleHighlight: hero.titleHighlight } : {}),
      subtitle: hero.subtitle,
      ...(mediaId ? { sideImage: mediaId } : {}),
    }
    layout.push(heroBlock)
  }

  const intros =
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
      ? []
      : (PAGE_SECTION_INTROS[slug as keyof typeof PAGE_SECTION_INTROS] ?? [])
  for (const intro of intros) {
    const introBlock: SectionIntroBlock = {
      blockType: 'sectionIntro',
      ...(intro.badge ? { badge: intro.badge } : {}),
      title: intro.title,
      ...(intro.subtitle ? { subtitle: intro.subtitle } : {}),
    }
    layout.push(introBlock)
  }

  return layout
}

async function main() {
  const payload = await getPayload({ config })
  const pathCache = new Map<string, string>()

  for (const seed of FIXED_PAGE_SEEDS) {
    const layout = await buildLayout(payload, seed.slug, seed.hero, pathCache)

    const existing = await payload.find({
      collection: 'pages',
      where: { slug: { equals: seed.slug } },
      limit: 1,
      overrideAccess: true,
    })

    const data = {
      title: seed.title,
      slug: seed.slug,
      layout,
      seoTitle: seed.seoTitle,
      seoDescription: seed.seoDescription,
      _status: 'published' as const,
    }

    if (existing.docs[0]) {
      await payload.update({
        collection: 'pages',
        id: existing.docs[0].id,
        data,
        overrideAccess: true,
      })
      console.log(`[seed:pages] Updated “${seed.slug}” (${layout.length} blocks)`)
    } else {
      await payload.create({
        collection: 'pages',
        data,
        overrideAccess: true,
      })
      console.log(`[seed:pages] Created “${seed.slug}” (${layout.length} blocks)`)
    }
  }

  console.log('[seed:pages] Done.')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
