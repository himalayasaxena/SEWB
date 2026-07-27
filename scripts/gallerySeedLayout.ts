import type { Page } from '../src/payload-types.js'

type PageLayout = NonNullable<Page['layout']>

/** Matches `GalleryPage.tsx` / gallery.php */
export async function buildGallerySeedBlocks(
  ensureMediaId: (publicRelativePath: string) => Promise<string | undefined>,
): Promise<PageLayout> {
  const g1 = await ensureMediaId('assets/img/gallery/1.webp')
  const g2 = await ensureMediaId('assets/img/gallery/2.webp')
  const g3 = await ensureMediaId('assets/img/gallery/3.webp')
  const g4 = await ensureMediaId('assets/img/gallery/4.webp')
  const g5 = await ensureMediaId('assets/img/gallery/5.webp')
  const g6 = await ensureMediaId('assets/img/gallery/6.webp')
  const shape = await ensureMediaId('assets/img/blog/blog-shape.webp')
  const locIcon = await ensureMediaId('assets/img/icons/location2.png')
  const clockIcon = await ensureMediaId('assets/img/icons/c-clock.png')

  const layout: PageLayout = [
    {
      blockType: 'galleryFullPage',
      hero: {
        badge: 'Visual Highlights',
        titlePrefix: 'Explore Our',
        titleHighlight: 'Gallery',
        titleSuffix: 'of Care',
        subtitle:
          'Take a closer look at how we bring healthcare and technology together. From individual care moments to advanced digital solutions.',
        ...(g1 ? { image: g1 } : {}),
      },
      gallery: {
        ...(shape ? { shapeImage: shape } : {}),
        badge: 'Visual Highlights',
        title: 'Explore Our Gallery of Care & Innovation',
        subtitle:
          'Take a closer look at how we bring healthcare and technology together. From individual care moments to advanced digital solutions, our gallery showcases the real impact of our platform. Every image reflects our commitment to making healthcare smarter, faster, and more accessible for everyone.',
        ...(locIcon ? { locationIcon: locIcon } : {}),
        ...(clockIcon ? { clockIcon } : {}),
        cards: [
          {
            ...(g1 ? { image: g1 } : {}),
            imageAlt: 'Milestone Highlights',
            tag: 'Achievements',
            title: 'Milestone Highlights',
            location: 'San Jose, CA',
            dateTime: '10 Jan 2026 · 11:00 AM',
            description: 'Key accomplishments that reflect our growth and success.',
          },
          {
            ...(g2 ? { image: g2 } : {}),
            imageAlt: 'Team Moments',
            tag: 'Memories',
            title: 'Team Moments',
            location: 'San Jose, CA',
            dateTime: '18 Jan 2026 · 5:30 PM',
            description: 'Capturing meaningful moments shared by our team.',
          },
          {
            ...(g3 ? { image: g3 } : {}),
            imageAlt: 'Smart Office Setup',
            tag: 'Infrastructure',
            title: 'Smart Office Setup',
            location: 'San Jose, CA',
            dateTime: '02 Feb 2026 · 10:15 AM',
            description: 'A modern workspace built for productivity and innovation.',
          },
          {
            ...(g4 ? { image: g4 } : {}),
            imageAlt: 'Collaborative Environment',
            tag: 'Work Culture',
            title: 'Collaborative Environment',
            location: 'San Jose, CA',
            dateTime: '14 Feb 2026 · 3:45 PM',
            description: 'Encouraging teamwork through open and dynamic spaces.',
          },
          {
            ...(g5 ? { image: g5 } : {}),
            imageAlt: 'Corporate Gatherings',
            tag: 'Events',
            title: 'Corporate Gatherings',
            location: 'San Jose, CA',
            dateTime: '01 Mar 2026 · 6:20 PM',
            description: 'Bringing people together through engaging company events.',
          },
          {
            ...(g6 ? { image: g6 } : {}),
            imageAlt: 'Creative Workflows',
            tag: 'Innovation',
            title: 'Creative Workflows',
            location: 'San Jose, CA',
            dateTime: '12 Mar 2026 · 12:10 PM',
            description: 'Streamlined processes designed for smarter execution.',
          },
        ],
      },
    },
  ]

  return layout
}
