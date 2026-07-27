import type { ContactFullPageBlock, Page } from '../src/payload-types.js'

type PageLayout = NonNullable<Page['layout']>

export async function buildContactSeedBlocks(
  ensureMediaId: (publicRelativePath: string) => Promise<string | undefined>,
): Promise<PageLayout> {
  const heroImage = await ensureMediaId('assets/img/banner/contact-hero-v3.png')
  const officeIcon = await ensureMediaId('assets/img/contact/location.png')
  const mailIcon = await ensureMediaId('assets/img/contact/mail.png')
  const fb = await ensureMediaId('assets/img/icons/facebook2.png')
  const tw = await ensureMediaId('assets/img/icons/twitter2.png')
  const ig = await ensureMediaId('assets/img/icons/instagram2.png')
  const li = await ensureMediaId('assets/img/icons/linkedin2.png')
  const yt = await ensureMediaId('assets/img/icons/youtube2.png')

  const contact: ContactFullPageBlock = {
    blockType: 'contactFullPage',
    hero: {
      badge: '24/7 Support Available',
      titleLine1: 'Get in Touch',
      titleHighlight: 'With Us',
      subtitle:
        'We are here to help. Reach out to us for any inquiries, support, or partnership opportunities. Our team is ready to assist you.',
      tags: [{ text: 'Fast Response' }, { text: 'Global Support' }, { text: 'Assured Help' }],
      ...(heroImage ? { image: heroImage } : {}),
    },
    intro: {
      badge: 'GET IN TOUCH',
      title: "We're Here to Help",
      subtitle:
        'We’d love to hear from you! Whether you have a question, feedback, or want to learn more about what we offer, feel free to reach out. Our team is always ready to assist you.',
    },
    officeCard: {
      title: 'Visit Our Office',
      address: '3 Clunies Ross Court, Eight Mile Plains,\nQLD 4113, Australia',
      ...(officeIcon ? { icon: officeIcon } : {}),
    },
    reachCard: {
      ...(mailIcon ? { icon: mailIcon } : {}),
      emailTitle: 'Email Us',
      email: 'Support@sewb.ai',
      phoneTitle: 'Phone Number',
      phone: '+61 07 3473 1700',
    },
    social: {
      title: 'Follow Us',
      links: [
        { href: '#', label: 'Facebook', ...(fb ? { icon: fb } : {}) },
        { href: '#', label: 'Twitter', ...(tw ? { icon: tw } : {}) },
        { href: '#', label: 'Instagram', ...(ig ? { icon: ig } : {}) },
        { href: '#', label: 'LinkedIn', ...(li ? { icon: li } : {}) },
        { href: '#', label: 'YouTube', ...(yt ? { icon: yt } : {}) },
      ],
    },
    form: {
      title: 'Send us a message',
    },
    map: {
      badge: 'Find Us on the Map',
      title: 'Find our office location and get easy directions',
      subtitle:
        'Locate our office easily using the map below. Visit us for direct assistance or reach out if you need help finding our location.',
      embedUrl:
        'https://www.google.com/maps?q=SEWB+AI,+3+Clunies+Ross+Court,+Eight+Mile+Plains+QLD+4113,+Australia&output=embed',
    },
  }

  return [contact]
}
