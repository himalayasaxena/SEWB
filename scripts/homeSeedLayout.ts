/**
 * Seed payloads for full homepage CMS blocks (matches legacy HomePageMain content).
 * Used by `seed-fixed-pages.ts`.
 */
import type {
  HomeAppDownloadBlock,
  HomeFaqBlock,
  HomeHighlightsBlock,
  HomeInfrastructureBlock,
  HomePrivacyBlock,
  Page,
} from '../src/payload-types.js'

type PageLayout = NonNullable<Page['layout']>

export async function buildHomeSeedBlocks(
  ensureMediaId: (publicRelativePath: string) => Promise<string | undefined>,
): Promise<PageLayout> {
  const homeTabImg = await ensureMediaId('assets/img/home/1.webp')
  const hi1 = await ensureMediaId('assets/img/highlights/1.webp')
  const hi2 = await ensureMediaId('assets/img/highlights/2.webp')
  const hi3 = await ensureMediaId('assets/img/highlights/3.webp')
  const privMain = await ensureMediaId('assets/img/privacy/privacy.webp')
  const pf1 = await ensureMediaId('assets/img/privacy/1.png')
  const pf2 = await ensureMediaId('assets/img/privacy/2.png')
  const pf3 = await ensureMediaId('assets/img/privacy/3.png')
  const pf4 = await ensureMediaId('assets/img/privacy/4.png')
  const appBg = await ensureMediaId('assets/img/features/product-bg.webp')
  const appMock = await ensureMediaId('assets/img/home/2.webp')

  const infra: HomeInfrastructureBlock = {
    blockType: 'homeInfrastructure',
    badge: 'SEWB',
    title: 'ONE INTELLIGENT HEALTHCARE INFRASTRUCTURE',
    subtitle:
      'SEWB is a unified AI-driven ecosystem connecting individuals, Health Professionals, organisations, and pharmacies through structured health intelligence. We transform raw wearable data into meaningful, preventive healthcare actions.',
    tab1Label: 'For Individuals',
    tab2Label: 'For Health Professionals',
    tab1: {
      heading: 'For Individuals',
      description:
        'Take control of your health with a smart, centralized digital health platform designed for everyday life.',
      bullets: [
        {
          text:
            'Centralized Health Records – All wearable data, lab reports, prescriptions, and medical history in one secure place.',
        },
        { text: 'AI Health Scoring – Get a clear, real-time health score that reflects your overall wellness.' },
        { text: 'Preventive Alerts – Early warnings for potential risks before they become serious.' },
        {
          text: 'Personalized Guidance – Tailored nutrition, fitness, sleep, and lifestyle recommendations.',
        },
      ],
      ...(homeTabImg ? { image: homeTabImg } : {}),
      ctaLabel: 'Start Monitoring Now',
      ctaHref: '/individuals',
    },
    tab2: {
      heading: 'For Health Professionals',
      description: 'Empower your practice with real-time individual insights and AI-assisted diagnostics.',
      bullets: [
        {
          text:
            'Real-Time Individual Monitoring – Access live health data from all your individuals in one dashboard.',
        },
        {
          text: 'AI-Powered Insights – Intelligent alerts for abnormal vitals and potential health risks.',
        },
        {
          text: 'Integrated EMR – Seamless integration with existing electronic medical records.',
        },
        { text: 'Telehealth Ready – Built-in video consultation and secure messaging.' },
      ],
      ...(homeTabImg ? { image: homeTabImg } : {}),
      ctaLabel: 'Join as an Organisation',
      ctaHref: '/health-professionals',
    },
  }

  const highlights: HomeHighlightsBlock = {
    blockType: 'homeHighlights',
    badge: 'PRODUCT HIGHLIGHTS',
    title: 'AI HEALTH INTELLIGENCE ENGINE',
    subtitle:
      'Wearable data alone is noise. Our AI engine detects patterns, identifies risks, and converts continuous health metrics into clear, preventive guidance.',
    items: [
      {
        ...(hi1 ? { icon: hi1 } : {}),
        titleTop: 'REAL-TIME HEALTH',
        titleBottom: 'DATA PROCESSING',
        description:
          'Advanced algorithms process health metrics continuously, providing instant insights and alerts for proactive health management.',
      },
      {
        ...(hi2 ? { icon: hi2 } : {}),
        titleTop: 'AI-BASED RISK',
        titleBottom: 'DETECTION INDICATORS',
        description:
          'Machine learning models identify potential health risks early, enabling timely interventions and preventive care.',
      },
      {
        ...(hi3 ? { icon: hi3 } : {}),
        titleTop: 'PREDICTIVE HEALTH',
        titleBottom: 'TREND ANALYSIS',
        description:
          'Analyze long-term health patterns and trends to predict future health outcomes with high accuracy.',
      },
    ],
  }

  const privacy: HomePrivacyBlock = {
    blockType: 'homePrivacy',
    badge: 'PRIVACY FIRST',
    title: 'SECURITY & TRUST POSITIONING',
    subtitle:
      'SEWB is built on enterprise-grade encryption, consent-driven data sharing, and compliant digital infrastructure. Health data remains secure and fully controlled by the individual.',
    ...(privMain ? { sideImage: privMain } : {}),
    features: [
      {
        ...(pf1 ? { icon: pf1 } : {}),
        title: 'Role-Based Data Permissions',
        description: 'Control access by user role with granular permission settings.',
      },
      {
        ...(pf2 ? { icon: pf2 } : {}),
        title: 'Activity Logs & Audit Trails',
        description: 'Track all system activities with comprehensive audit logs.',
      },
      {
        ...(pf3 ? { icon: pf3 } : {}),
        title: 'Intelligent Health Score Engine',
        description: 'AI-powered health scoring with real-time insights.',
      },
      {
        ...(pf4 ? { icon: pf4 } : {}),
        title: 'Multi-Factor Authentication',
        description: 'Extra secure login verification with MFA protection.',
      },
    ],
  }

  const appSection: HomeAppDownloadBlock = {
    blockType: 'homeAppDownload',
    ...(appBg ? { backgroundImage: appBg } : {}),
    badge: 'SMART HEALTHCARE',
    titleLine1: 'AI-POWERED HEALTHCARE MADE',
    titleLine2: 'SIMPLE AND ACCESSIBLE',
    paragraphs: [
      {
        text:
          'SEWB simplifies healthcare by unifying reports, appointments, and pharmacy services into one intelligent ecosystem. Powered by AI, the platform provides clear health insights and personalized scores, empowering you to track progress and make informed decisions with confidence.',
      },
      {
        text: 'Experience a smarter, connected healthcare journey—anytime, anywhere.',
      },
    ],
    emphasisLine: 'Get the SEWB app today.',
    ...(appMock ? { mockupImage: appMock, secondaryMockupImage: appMock } : {}),
  }

  const faq: HomeFaqBlock = {
    blockType: 'homeFaq',
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
  }

  return [infra, highlights, privacy, appSection, faq]
}
