import type { Page } from '../src/payload-types.js'

type PageLayout = NonNullable<Page['layout']>

/** Matches `BlogIndexPage.tsx` / blog.php hero + listing labels. */
export async function buildBlogSeedBlocks(
  ensureMediaId: (publicRelativePath: string) => Promise<string | undefined>,
): Promise<PageLayout> {
  const heroImg = await ensureMediaId('assets/img/blog/blog-bc.webp')
  const shape = await ensureMediaId('assets/img/blog/blog-shape.webp')

  const layout: PageLayout = [
    {
      blockType: 'blogHero',
      badge: 'Latest Healthcare Insights',
      title: 'Healthcare',
      titleHighlight: 'Insights & Updates',
      subtitle:
        'Discover the latest news, medical advice, and industry trends to stay informed and healthy.',
      ...(heroImg ? { sideImage: heroImg } : {}),
      tags: [
        { iconClass: 'fas fa-check-circle', text: 'Expert Advice' },
        { iconClass: 'fas fa-check-circle', text: 'Health Tips' },
        { iconClass: 'fas fa-check-circle', text: 'Industry News' },
      ],
    },
    {
      blockType: 'blogIndexFeed',
      featuredTag: 'Featured',
      featuredSubtitle: 'This Month',
      popularTag: 'Popular',
      popularSubtitle: 'Posts',
      recentTag: 'Recently',
      recentSubtitle: 'Posted',
      ...(shape ? { decorativeImage: shape } : {}),
    },
  ]

  return layout
}
