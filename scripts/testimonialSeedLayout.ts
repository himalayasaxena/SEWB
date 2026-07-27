import type { Page } from '../src/payload-types.js'

type PageLayout = NonNullable<Page['layout']>

/** Matches `TestimonialPage.tsx` / testimonial.php */
export async function buildTestimonialSeedBlocks(
  ensureMediaId: (publicRelativePath: string) => Promise<string | undefined>,
): Promise<PageLayout> {
  const heroImg = await ensureMediaId('assets/img/testimonial/12.png')
  const star = await ensureMediaId('assets/img/icons/rating.png')

  const t1 = await ensureMediaId('assets/img/testimonial/1.webp')
  const t2 = await ensureMediaId('assets/img/testimonial/2.webp')
  const t3 = await ensureMediaId('assets/img/testimonial/3.webp')
  const t4 = await ensureMediaId('assets/img/testimonial/4.webp')
  const t5 = await ensureMediaId('assets/img/testimonial/5.webp')
  const t6 = await ensureMediaId('assets/img/testimonial/6.webp')

  const layout: PageLayout = [
    {
      blockType: 'testimonialHero',
      badge: 'Success Stories',
      titleLine1: 'Real',
      titleHighlight: 'Experiences',
      titleLine2: 'From Our Users',
      subtitle:
        'Discover how SEWB AI is transforming healthcare journeys for individuals and health professionals around the world.',
      ...(heroImg ? { sideImage: heroImg } : {}),
    },
    {
      blockType: 'testimonialCarousel',
      variant: 'patients',
      ...(star ? { ratingStarIcon: star } : {}),
      badge: 'individual Stories',
      heading: 'REAL EXPERIENCES FROM PEOPLE WHO FOUND THE CARE THEY NEEDED.',
      items: [
        {
          ...(t1 ? { avatar: t1 } : {}),
          quote:
            '"The platform helped me understand my symptoms and connect with the right Health Professional within minutes. It made the whole process simple and stress-free."',
          name: 'Emily Rodriguez',
          specialty: 'Pediatric Care',
        },
        {
          ...(t2 ? { avatar: t2 } : {}),
          quote:
            '"Uploading my lab reports and getting a Health Professional\'s explanation online saved me multiple hospital\n visits."',
          name: 'Sarah Mitchell',
          specialty: 'Skin Allergy',
        },
        {
          ...(t3 ? { avatar: t3 } : {}),
          quote:
            '"James regularly needs medical consultations for blood pressure management. Through the platform, he now schedules follow-up consultations with his Health Professional and receives prescriptions digitally."',
          name: 'James Peterson',
          specialty: 'Annual Checkup',
        },
        {
          ...(t1 ? { avatar: t1 } : {}),
          quote:
            '"The platform helped me understand my symptoms and connect with the right Health Professional within minutes. It made the whole process simple and stress-free."',
          name: 'Emily Rodriguez',
          specialty: 'Pediatric Care',
        },
      ],
    },
    {
      blockType: 'testimonialCarousel',
      variant: 'professionals',
      ...(star ? { ratingStarIcon: star } : {}),
      badge: 'Health Professional Stories',
      heading:
        "HEALTHCARE PROFESSIONALS SHARE HOW THEY'RE USING THE PLATFORM TO DELIVER BETTER CARE.",
      items: [
        {
          ...(t4 ? { avatar: t4 } : {}),
          quote:
            '"The platform allows me to connect with individuals easily and review their reports before consultations, which improves the quality of care."',
          name: 'Emily Rodriguez',
          specialty: 'Pediatric Care',
        },
        {
          ...(t5 ? { avatar: t5 } : {}),
          quote:
            '"individuals come to consultations better prepared, which allows us to focus on diagnosis and treatment rather than collecting basic information."',
          name: 'Sarah Mitchell',
          specialty: 'Skin Allergy',
        },
        {
          ...(t6 ? { avatar: t6 } : {}),
          quote: '"Digital consultations and report sharing help me manage chronic individuals more effectively."',
          name: 'James Peterson',
          specialty: 'Annual Checkup',
        },
        {
          ...(t4 ? { avatar: t4 } : {}),
          quote:
            '"The platform allows me to connect with individuals easily and review their reports before consultations, which improves the quality of care."',
          name: 'Emily Rodriguez',
          specialty: 'Pediatric Care',
        },
      ],
    },
  ]

  return layout
}
