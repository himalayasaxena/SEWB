import type { AboutFullPageBlock, Page } from '../src/payload-types.js'

type PageLayout = NonNullable<Page['layout']>

export async function buildAboutSeedBlocks(
  ensureMediaId: (publicRelativePath: string) => Promise<string | undefined>,
): Promise<PageLayout> {
  const heroImage = await ensureMediaId('assets/img/about/wellness-hero.png')
  const journeyLeft = await ensureMediaId('assets/img/about/person.webp')
  const journeyCenter = await ensureMediaId('assets/img/about/group3.webp')
  const journeyRight = await ensureMediaId('assets/img/about/group2.webp')
  const whyImage = await ensureMediaId('assets/img/why/1.png')

  const impactNetwork = await ensureMediaId('assets/img/about/diamond.png')
  const impactBase = await ensureMediaId('assets/img/about/doctorbg.webp')
  const impactDoctor = await ensureMediaId('assets/img/about/doctormain.webp')
  const impactAvatar = await ensureMediaId('assets/img/about/doctorimg.png')
  const impactChat = await ensureMediaId('assets/img/about/chat.png')
  const impactBar = await ensureMediaId('assets/img/about/barchat.png')
  const impactCircle = await ensureMediaId('assets/img/about/circleimg.png')

  const founderAbhishek = await ensureMediaId('assets/img/team/Abhishek.webp')
  const founderSachin = await ensureMediaId('assets/img/team/Sachin.webp')
  const founderMarianne = await ensureMediaId('assets/img/team/Marianne.webp')

  const about: AboutFullPageBlock = {
    blockType: 'aboutFullPage',
    hero: {
      badge: 'About SEWB AI',
      titleHighlight: 'AI-Powered Healthcare',
      titleRest: 'for a Smarter Future',
      subtitle:
        'Our mission is to make healthcare smarter, faster, and more accessible by integrating AI-driven insights with professional medical expertise.',
      tags: [{ text: 'Smarter Care' }, { text: 'Faster Access' }, { text: 'Expert Insights' }],
      ...(heroImage ? { image: heroImage } : {}),
    },
    journey: {
      badge: 'ABOUT SEWB',
      titlePrefix: 'Simplifying the Healthcare',
      titleHighlight: 'Journey',
      subtitle:
        'SEWB is a digital healthcare marketplace that connects individuals with verified Health Professionals, laboratory services, pharmacies, and medical guidance in one unified platform. Many people struggle to identify the right Health Professional, understand medical reports, or manage prescriptions across different services. Our platform brings Health Professionals, lab reports, pharmacies, and medical guidance together in one place, helping individuals find the right care quickly and confidently. The platform was built to simplify the healthcare journey for individuals.',
      ...(journeyLeft ? { leftImage: journeyLeft } : {}),
      ...(journeyCenter ? { centerImage: journeyCenter } : {}),
      ...(journeyRight ? { rightImage: journeyRight } : {}),
      missionLabel: 'MISSION',
      missionText:
        'Our mission is to simplify healthcare access by making it easier for people to find the right medical guidance at the right time. Through a secure digital platform, we connect individuals with verified Health Professionals, intelligent health insights, laboratory services, and pharmacy support. By bringing these essential healthcare services together in one place, we aim to reduce confusion, save time, and help individuals make informed decisions about their health with confidence.',
      visionLabel: 'VISION',
      visionText:
        'Our vision is to create an intelligent digital healthcare ecosystem where individuals, Health Professionals, organisations, and pharmacies are seamlessly connected through technology. By combining advanced AI with trusted medical expertise, we aim to make healthcare more accessible, efficient, and personalized, empowering people to make better health decisions anytime and anywhere.',
    },
    why: {
      badge: 'WHY SEWB',
      titlePrefix: 'From Reactive Treatment to',
      titleHighlight: 'Predictive Intelligence',
      subtitle:
        'SEWB evolves the medical experience from reactive treatment to proactive wellness. By centralizing fragmented data—from clinical scans to real-time wearable metrics—SEWB creates a 360-degree biological profile that empowers you to own your health narrative.',
      ...(whyImage ? { image: whyImage } : {}),
    },
    impact: {
      badge: 'PLATFORM IMPACT',
      title: 'OUR GROWING HEALTHCARE IMPACT',
      subtitle:
        'Our impact is reflected in the number of individuals helped, Health Professionals onboarded, and medical reports processed every day.',
      tabs: [
        {
          label: 'Individuals Served',
          title: 'WELL BEINGS SERVED',
          copy:
            'Thousands of individuals rely on the platform to find care faster, connect with the right specialists, and manage their healthcare journey with confidence. From first guidance to continued support, the platform helps people get timely access to trusted healthcare.',
          name: 'Sarah Walker',
          role: 'Care Support',
          statLabel: 'individuals Served',
          statValue: '1.2M',
          bottom: 'Daily Care Access',
          defaultActive: false,
        },
        {
          label: 'Health Professionals Registered',
          title: 'DOCTORS REGISTERED',
          copy:
            'A growing network of qualified and verified doctors across multiple specialties, ensuring individuals can easily connect with trusted medical professionals. Our platform supports seamless doctor discovery and consultation, helping individuals receive the right care from the right experts.',
          name: 'Amanda Young',
          role: 'Expert Doctor',
          statLabel: 'Trusted Doctors',
          statValue: '245k',
          bottom: 'Verified Doctors',
          defaultActive: true,
        },
      ],
      ...(impactNetwork ? { networkImage: impactNetwork } : {}),
      ...(impactBase ? { baseImage: impactBase } : {}),
      ...(impactDoctor ? { doctorImage: impactDoctor } : {}),
      ...(impactAvatar ? { avatarImage: impactAvatar } : {}),
      ...(impactChat ? { chatImage: impactChat } : {}),
      ...(impactBar ? { barChartImage: impactBar } : {}),
      ...(impactCircle ? { circleImage: impactCircle } : {}),
      linkLabel: 'View More',
      linkHref: '#',
    },
    founders: {
      badge: 'MEET THE FOUNDERS',
      titlePrefix: 'THE PEOPLE BUILDING THE FUTURE OF',
      titleHighlight: 'HEALTHCARE',
      subtitle:
        'The passionate team behind the platform, bringing expertise in healthcare, technology, and innovation. Committed to building a smarter and more accessible healthcare experience for everyone.',
      members: [
        {
          ...(founderAbhishek ? { image: founderAbhishek } : {}),
          name: 'Abhishek Sharma',
          role: 'Co-founder and Director',
          linkedin: '#',
          twitter: '#',
          emailHref: '#',
        },
        {
          ...(founderSachin ? { image: founderSachin } : {}),
          name: 'Sachin Rabade',
          role: 'Co-founder and Director',
          linkedin: '#',
          twitter: '#',
          emailHref: '#',
        },
        {
          ...(founderMarianne ? { image: founderMarianne } : {}),
          name: 'Marianne Lombard',
          role: 'Chief Executive Officer',
          linkedin: '#',
          twitter: '#',
          emailHref: '#',
        },
      ],
    },
    faq: {
      heading: 'FAQs',
      items: [
        {
          question: 'What is SEWB?',
          answer:
            'SEWB is an AI-powered healthcare platform that helps individuals understand their health data, connect with Health Professionals, and manage medical reports in one place.',
        },
        {
          question: 'How does SEWB help individuals?',
          answer:
            'SEWB helps individuals by providing a centralized platform to track health metrics, receive AI-powered insights, manage appointments, store medical records securely, and connect with healthcare organisations seamlessly.',
        },
        {
          question: 'Is my health data secure on SEWB?',
          answer:
            'Yes, SEWB employs enterprise-grade encryption, is HIPAA and ISO 27001 compliant, and uses multi-factor authentication. Your data is stored securely with complete privacy controls and you decide who can access your information.',
        },
        {
          question: 'Can Health Professionals use SEWB?',
          answer:
            'AI-powered alerts for abnormal vitals, manage appointments, conduct telehealth consultations, and collaborate with other healthcare organisations.',
        },
      ],
    },
  }

  return [about]
}
