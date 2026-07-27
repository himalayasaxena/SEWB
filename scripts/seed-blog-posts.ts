/**
 * Seeds sample blog posts with categories, tags, user authors, images, and rich-text blocks.
 * Run from repo `cms/`:
 *   DATABASE_URL=mongodb://127.0.0.1:27017/payload npm run seed:blog
 */
import 'dotenv/config'

import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'

import { getPayload } from 'payload'
import { buildShowcaseBody, buildSimpleBody } from './lexicalBlogBody.js'
import { ensureMediaFromBuffer, ensureMediaId } from './seedMedia.js'
import config from '../src/payload.config.js'

const CATEGORY_SEEDS = [
  { title: 'Wellness', slug: 'wellness' },
  { title: 'Technology', slug: 'technology' },
  { title: 'Clinical Insights', slug: 'clinical-insights' },
  { title: 'Patient Stories', slug: 'patient-stories' },
] as const

const TAG_SEEDS = [
  { title: 'AI', slug: 'ai' },
  { title: 'Wearables', slug: 'wearables' },
  { title: 'Diabetes', slug: 'diabetes' },
  { title: 'Prevention', slug: 'prevention' },
  { title: 'Telehealth', slug: 'telehealth' },
  { title: 'Privacy', slug: 'privacy' },
] as const

const EDITOR_SEEDS = [
  {
    email: 'priya.sharma@sewb.ai',
    password: 'ChangeMe123!',
    displayName: 'Dr. Priya Sharma',
    bio: 'Digital health researcher focused on wearable analytics and preventive care pathways.',
    photoPath: 'assets/img/blog/profile.webp',
    socialLinks: {
      facebook: 'https://facebook.com/',
      twitter: 'https://twitter.com/',
      instagram: 'https://instagram.com/',
    },
  },
  {
    email: 'james.okonkwo@sewb.ai',
    password: 'ChangeMe123!',
    displayName: 'James Okonkwo',
    bio: 'Health technology writer covering AI adoption in hospitals and primary care.',
    photoPath: 'assets/img/doctors/1.webp',
    socialLinks: {
      facebook: 'https://facebook.com/',
      linkedin: 'https://linkedin.com/',
    },
  },
  {
    email: 'elena.martinez@sewb.ai',
    password: 'ChangeMe123!',
    displayName: 'Elena Martinez',
    bio: 'Patient advocate and SEWB community lead sharing real-world care journeys.',
    photoPath: 'assets/img/team/Abhishek.webp',
    socialLinks: {
      twitter: 'https://twitter.com/',
      instagram: 'https://instagram.com/',
    },
  },
] as const

type PostSeed = {
  slug: string
  title: string
  excerpt: string
  seoTitle: string
  seoDescription: string
  featured: boolean
  featuredImagePath: string
  authorEmail: string
  categorySlugs: string[]
  tagSlugs: string[]
  publishedDaysAgo: number
  showcase?: boolean
  bodyParagraphs?: string[]
}

const POST_SEEDS: PostSeed[] = [
  {
    slug: 'wearable-data-preventive-healthcare',
    title: 'How Wearable Data Powers Preventive Healthcare',
    excerpt:
      'From heart-rate variability to sleep staging, connected devices are reshaping how we detect risk early and stay ahead of chronic conditions.',
    seoTitle: 'How Wearable Data Powers Preventive Healthcare | SEWB Blog',
    seoDescription:
      'Explore how wearable signals become actionable health insights with SEWB — trends, alerts, and clinician-ready summaries.',
    featured: true,
    featuredImagePath: 'assets/img/blog/b1.webp',
    authorEmail: 'priya.sharma@sewb.ai',
    categorySlugs: ['technology', 'wellness'],
    tagSlugs: ['wearables', 'prevention', 'ai'],
    publishedDaysAgo: 2,
    showcase: true,
  },
  {
    slug: 'blood-glucose-monitoring-at-home',
    title: 'Understanding Blood Glucose Monitoring at Home',
    excerpt:
      'A practical guide to choosing between fingerstick checks, continuous glucose monitors, and structured lab follow-ups.',
    seoTitle: 'Blood Glucose Monitoring at Home | SEWB Blog',
    seoDescription:
      'Learn how home glucose monitoring works, what HbA1c adds, and when to involve your care team.',
    featured: false,
    featuredImagePath: 'assets/img/blog/b2.webp',
    authorEmail: 'priya.sharma@sewb.ai',
    categorySlugs: ['clinical-insights'],
    tagSlugs: ['diabetes', 'prevention'],
    publishedDaysAgo: 5,
    bodyParagraphs: [
      'Home glucose monitoring helps people with diabetes or prediabetes track how meals, activity, and medication affect daily readings.',
      'Pairing spot checks with periodic HbA1c labs gives both immediate feedback and a longer-term picture of glucose control.',
      'SEWB consolidates device readings, manual entries, and lab PDFs so patterns are easier to review before appointments.',
    ],
  },
  {
    slug: 'ai-transforming-patient-engagement',
    title: '5 Ways AI Is Transforming Patient Engagement',
    excerpt:
      'Intelligent triage, personalised education, and proactive outreach are moving care conversations beyond the clinic visit.',
    seoTitle: '5 Ways AI Is Transforming Patient Engagement | SEWB Blog',
    seoDescription:
      'Five practical ways AI improves patient engagement — from symptom guidance to follow-up reminders.',
    featured: true,
    featuredImagePath: 'assets/img/blog/b3.webp',
    authorEmail: 'james.okonkwo@sewb.ai',
    categorySlugs: ['technology'],
    tagSlugs: ['ai', 'telehealth'],
    publishedDaysAgo: 8,
    bodyParagraphs: [
      'AI-assisted intake can summarise symptoms and suggest next steps while keeping clinicians in the loop for decisions.',
      'Personalised content adapts to a person’s conditions, language, and reading level — improving comprehension and adherence.',
      'Automated check-ins after discharge or new prescriptions catch gaps early without adding staff burden.',
      'Analytics highlight cohorts that need outreach, so teams focus time where it matters most.',
      'Transparent audit trails help organisations explain recommendations and maintain trust.',
    ],
  },
  {
    slug: 'trust-in-digital-health-platforms',
    title: 'Building Trust in Digital Health Platforms',
    excerpt:
      'Security architecture, consent controls, and clear medical boundaries are table stakes for modern health apps.',
    seoTitle: 'Building Trust in Digital Health Platforms | SEWB Blog',
    seoDescription:
      'What patients and clinicians should expect from trustworthy digital health platforms — privacy, transparency, and safety.',
    featured: false,
    featuredImagePath: 'assets/img/blog/b4.webp',
    authorEmail: 'james.okonkwo@sewb.ai',
    categorySlugs: ['wellness'],
    tagSlugs: ['privacy', 'telehealth'],
    publishedDaysAgo: 12,
    bodyParagraphs: [
      'Trust starts with encryption in transit and at rest, role-based access, and logging that supports compliance reviews.',
      'Users should always know what data is collected, who can see it, and how to export or delete it.',
      'Digital tools must state their limits clearly — especially where AI suggestions support, but never replace, licensed care.',
    ],
  },
  {
    slug: 'connected-care-workflows-for-clinicians',
    title: "A Clinician's Guide to Connected Care Workflows",
    excerpt:
      'How to integrate wearable feeds, patient messages, and structured summaries into everyday practice without extra charting burden.',
    seoTitle: "Connected Care Workflows for Clinicians | SEWB Blog",
    seoDescription:
      'Practical workflow tips for clinicians adopting connected care — triage, documentation, and team coordination.',
    featured: false,
    featuredImagePath: 'assets/img/blog/1.webp',
    authorEmail: 'priya.sharma@sewb.ai',
    categorySlugs: ['clinical-insights'],
    tagSlugs: ['telehealth', 'wearables'],
    publishedDaysAgo: 16,
    bodyParagraphs: [
      'Start with one condition or clinic day to pilot connected summaries before rolling out broadly.',
      'Use consistent templates so nurses and physicians see the same trend highlights and flagged readings.',
      'Close the loop by documenting which remote signals triggered outreach or medication adjustments.',
    ],
  },
  {
    slug: 'proactive-personal-health-future',
    title: 'From Reactive to Proactive: The Future of Personal Health',
    excerpt:
      'Individuals are no longer waiting for annual visits to understand their health — continuous data makes prevention daily.',
    seoTitle: 'The Future of Proactive Personal Health | SEWB Blog',
    seoDescription:
      'Why proactive personal health is replacing reactive care — and what individuals can do today.',
    featured: false,
    featuredImagePath: 'assets/img/blog/2.webp',
    authorEmail: 'elena.martinez@sewb.ai',
    categorySlugs: ['patient-stories', 'wellness'],
    tagSlugs: ['prevention', 'wearables'],
    publishedDaysAgo: 20,
    bodyParagraphs: [
      'Maria began tracking sleep and activity after a prediabetes diagnosis. Trend alerts helped her adjust habits before her next HbA1c rose further.',
      'Her clinician received a concise summary before the follow-up visit, turning a 15-minute slot into a focused action plan.',
      'Stories like Maria’s show why personal health platforms must be simple, secure, and connected to real care teams.',
    ],
  },
]

function daysAgoIso(days: number): string {
  const date = new Date()
  date.setDate(date.getDate() - days)
  return date.toISOString()
}

async function ensureTaxonomy<T extends { title: string; slug: string }>(
  payload: Awaited<ReturnType<typeof getPayload>>,
  collection: 'categories' | 'tags',
  seeds: readonly T[],
): Promise<Map<string, string>> {
  const map = new Map<string, string>()

  for (const seed of seeds) {
    const existing = await payload.find({
      collection,
      where: { slug: { equals: seed.slug } },
      limit: 1,
      overrideAccess: true,
    })

    if (existing.docs[0]?.id) {
      map.set(seed.slug, String(existing.docs[0].id))
      continue
    }

    const created = await payload.create({
      collection,
      data: seed,
      overrideAccess: true,
    })
    map.set(seed.slug, String(created.id))
    const label = collection === 'categories' ? 'category' : 'tag'
    console.log(`[seed:blog] Created ${label} “${seed.title}”`)
  }

  return map
}

async function ensureEditors(
  payload: Awaited<ReturnType<typeof getPayload>>,
  pathCache: Map<string, string>,
): Promise<Map<string, string>> {
  const map = new Map<string, string>()

  for (const seed of EDITOR_SEEDS) {
    const existing = await payload.find({
      collection: 'users',
      where: { email: { equals: seed.email } },
      limit: 1,
      overrideAccess: true,
    })

    const photoId = await ensureMediaId(payload, seed.photoPath, pathCache)
    const data = {
      email: seed.email,
      displayName: seed.displayName,
      bio: seed.bio,
      roles: ['editor'] as const,
      socialLinks: seed.socialLinks,
      ...(photoId ? { photo: photoId } : {}),
    }

    if (existing.docs[0]?.id) {
      await payload.update({
        collection: 'users',
        id: existing.docs[0].id,
        data,
        overrideAccess: true,
      })
      map.set(seed.email, String(existing.docs[0].id))
      continue
    }

    const created = await payload.create({
      collection: 'users',
      data: {
        ...data,
        password: seed.password,
      },
      overrideAccess: true,
    })
    map.set(seed.email, String(created.id))
    console.log(`[seed:blog] Created editor “${seed.displayName}”`)
  }

  return map
}

async function ensureSamplePdf(
  payload: Awaited<ReturnType<typeof getPayload>>,
  pathCache: Map<string, string>,
): Promise<string | undefined> {
  const alt = 'SEWB seed · sample-health-guide.pdf'
  const tmpPath = path.join(os.tmpdir(), 'sewb-sample-health-guide.pdf')
  const pdf = `%PDF-1.4
1 0 obj<</Type/Catalog/Pages 2 0 R>>endobj
2 0 obj<</Type/Pages/Kids[3 0 R]/Count 1>>endobj
3 0 obj<</Type/Page/MediaBox[0 0 612 792]/Parent 2 0 R/Contents 4 0 R/Resources<</Font<</F1 5 0 R>>>>>>endobj
4 0 obj<</Length 44>>stream
BT /F1 18 Tf 72 720 Td (SEWB Health Guide) Tj ET
endstream endobj
5 0 obj<</Type/Font/Subtype/Type1/BaseFont/Helvetica>>endobj
xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000052 00000 n 
0000000101 00000 n 
0000000224 00000 n 
0000000316 00000 n 
trailer<</Size 6/Root 1 0 R>>
startxref
393
%%EOF`
  fs.writeFileSync(tmpPath, pdf)
  return ensureMediaFromBuffer(payload, alt, tmpPath, pathCache)
}

async function buildPostBody(
  payload: Awaited<ReturnType<typeof getPayload>>,
  seed: PostSeed,
  pathCache: Map<string, string>,
) {
  if (seed.showcase) {
    const galleryIds = (
      await Promise.all(
        ['assets/img/blog/3.webp', 'assets/img/blog/4.webp', 'assets/img/blog/5.webp', 'assets/img/blog/6.webp'].map(
          (imagePath) => ensureMediaId(payload, imagePath, pathCache),
        ),
      )
    ).filter((id): id is string => Boolean(id))

    const pdfId = await ensureSamplePdf(payload, pathCache)
    if (!pdfId || galleryIds.length < 2) {
      console.warn(`[seed:blog] Showcase assets missing for “${seed.slug}”, using simple body`)
      return buildSimpleBody(seed.bodyParagraphs ?? [seed.excerpt])
    }

    return buildShowcaseBody({
      intro: seed.excerpt,
      youtubeUrl: 'https://www.youtube.com/watch?v=4hj1NLbNasE',
      galleryImageIds: galleryIds,
      galleryCaption: 'Screens and moments from the SEWB connected-care experience.',
      pdfFileId: pdfId,
      pdfLabel: 'Download the SEWB preventive health guide (PDF)',
    })
  }

  return buildSimpleBody(seed.bodyParagraphs ?? [seed.excerpt])
}

async function main() {
  const payload = await getPayload({ config })
  const pathCache = new Map<string, string>()

  const categories = await ensureTaxonomy(payload, 'categories', CATEGORY_SEEDS)
  const tags = await ensureTaxonomy(payload, 'tags', TAG_SEEDS)
  const editors = await ensureEditors(payload, pathCache)

  const createdPostIds: string[] = []

  for (const seed of POST_SEEDS) {
    const featuredImageId = await ensureMediaId(payload, seed.featuredImagePath, pathCache)
    const authorId = editors.get(seed.authorEmail)
    const body = await buildPostBody(payload, seed, pathCache)

    const data = {
      title: seed.title,
      slug: seed.slug,
      excerpt: seed.excerpt,
      seoTitle: seed.seoTitle,
      seoDescription: seed.seoDescription,
      featured: seed.featured,
      commentsEnabled: true,
      publishedAt: daysAgoIso(seed.publishedDaysAgo),
      featuredImage: featuredImageId,
      author: authorId,
      categories: seed.categorySlugs.map((slug) => categories.get(slug)).filter(Boolean),
      tags: seed.tagSlugs.map((slug) => tags.get(slug)).filter(Boolean),
      body,
      _status: 'published' as const,
    }

    const existing = await payload.find({
      collection: 'posts',
      where: { slug: { equals: seed.slug } },
      limit: 1,
      overrideAccess: true,
    })

    let postId: string
    if (existing.docs[0]) {
      await payload.update({
        collection: 'posts',
        id: existing.docs[0].id,
        data,
        overrideAccess: true,
      })
      postId = String(existing.docs[0].id)
      console.log(`[seed:blog] Updated post “${seed.title}”`)
    } else {
      const created = await payload.create({
        collection: 'posts',
        data,
        overrideAccess: true,
      })
      postId = String(created.id)
      console.log(`[seed:blog] Created post “${seed.title}”`)
    }

    createdPostIds.push(postId)
  }

  const featuredPostIds = POST_SEEDS.filter((seed) => seed.featured)
    .map((seed) => {
      const index = POST_SEEDS.indexOf(seed)
      return createdPostIds[index]
    })
    .filter(Boolean)

  await payload.updateGlobal({
    slug: 'blog-settings',
    data: {
      postsPerPage: 10,
      featuredPosts: featuredPostIds,
    },
    overrideAccess: true,
  })

  const count = await payload.find({
    collection: 'posts',
    limit: 0,
    overrideAccess: true,
  })

  console.log(`[seed:blog] Done. ${count.totalDocs} posts in database.`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
