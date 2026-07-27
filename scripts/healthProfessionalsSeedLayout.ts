import type { Page } from '../src/payload-types.js'

type PageLayout = NonNullable<Page['layout']>

export async function buildHealthProfessionalsSeedBlocks(
  ensureMediaId: (publicRelativePath: string) => Promise<string | undefined>,
): Promise<PageLayout> {
  const heroImg = await ensureMediaId('assets/img/health/health.jpg')
  const decor = await ensureMediaId('assets/img/patients/card-decor.webp')
  const iconChat = await ensureMediaId('assets/img/icons/chat.png')
  const iconCal = await ensureMediaId('assets/img/icons/calendar-addon.png')
  const iconList = await ensureMediaId('assets/img/icons/list.png')

  const h2 = await ensureMediaId('assets/img/health/health2.jpg')
  const h3 = await ensureMediaId('assets/img/health/health3.png')
  const h4 = await ensureMediaId('assets/img/health/health4.png')

  const n1 = await ensureMediaId('assets/img/icons/n1.png')
  const n2 = await ensureMediaId('assets/img/icons/n2.png')
  const n3 = await ensureMediaId('assets/img/icons/n3.png')
  const iconAccount = await ensureMediaId('assets/img/icons/account-box.png')
  const iconCalToday = await ensureMediaId('assets/img/icons/calendar-today.png')

  const iconSec = await ensureMediaId('assets/img/icons/security.png')
  const iconLic = await ensureMediaId('assets/img/icons/license.png')
  const iconScan = await ensureMediaId('assets/img/icons/document-scanner.png')

  const health5 = await ensureMediaId('assets/img/health/health5.png')
  const iconInterp = await ensureMediaId('assets/img/icons/interpreter.png')
  const iconStar = await ensureMediaId('assets/img/icons/star-shine.png')
  const iconMed = await ensureMediaId('assets/img/icons/medical.png')

  const appImg = await ensureMediaId('assets/img/health/health7.jpg')

  const layout: PageLayout = [
    {
      blockType: 'healthProHero',
      badge: 'AI-Enhanced Practice Management',
      titleLine1: 'Smarter Way to Manage Your Practice and Deliver Better Care',
      subtitle:
        'Deliver better care without the administrative burden. SEWB gives Health Professionals one connected platform to manage appointments, coordinate care, engage clients and track earnings — designed around the realities of modern clinical practice.',
      tags: [
        { text: 'Connected Practice' },
        { text: 'Care Coordination' },
        { text: 'Verified Profiles' },
      ],
      ...(heroImg ? { image: heroImg } : {}),
    },
    {
      blockType: 'healthProTools',
      badge: 'Health Professional Tools',
      title: 'Built for the Way Health Professionals Actually Work',
      subtitle:
        'SEWB Simplifies day-to-day practice management through an integrated Health professional app designed around real clinical workflows. From consultations and appointments to prescriptions and shared wellness insights, everything is connected within one streamlined experience.',
      ...(decor ? { cardDecor: decor } : {}),
      cards: [
        {
          ...(iconCal ? { icon: iconCal } : {}),
          title: 'Profile & Appointment Management',
          description:
            'Smart scheduling that works around your availability. Clients book directly, reminders are sent out automatically and your calendar stays organised without the back-and-forth.',
        },
        {
          ...(iconChat ? { icon: iconChat } : {}),
          title: 'Consultations & Prescription Management',
          description:
            'Conduct secure video and audio consultations, review shared health reports before each session, issue digital prescriptions and deliver personalised wellness support — all within one connected workspace.',
        },
        {
          ...(iconList ? { icon: iconList } : {}),
          title: 'Instant Reports & Wellness Information Access',
          description:
            'Access the health records, wearable data, and wellness reports shared by your clients, giving you clearer context and more informed consultations.',
        },
      ],
    },
    {
      blockType: 'healthProBenefits',
      badge: 'Health Professional Benefits',
      title: 'Grow Your Practice. Improve Your Care.',
      subtitle:
        'Connect with more clients, and deliver flexible care through one connected clinical platform designed for modern healthcare delivery.',
      cards: [
        {
          ...(h2 ? { image: h2 } : {}),
          title: 'Reach More Clients',
          description:
            'SEWB helps you connect with clients beyond traditional geographic boundaries whether locally, nationally or through virtual care services.',
        },
        {
          ...(h3 ? { image: h3 } : {}),
          title: 'Efficient Workflow',
          description:
            'Less time on managing administrative and more time delivering care. SEWB scheduling, reminders, records management and earnings tracking within one connected platform.',
        },
        {
          ...(h4 ? { image: h4 } : {}),
          title: 'Flexible Care Access',
          description:
            'Deliver secure telehealth consultations, digital prescriptions, wellness support and coordinated home care services through a single integrated platform to individual client needs.',
        },
      ],
    },
    {
      blockType: 'healthProOnboarding',
      badge: 'Health Professional Onboarding',
      title: 'Start Providing Healthcare Services in 3 Simple Steps',
      subtitle: 'Get Started in Three Simple Steps',
      steps: [
        {
          ...(n1 ? { stepNumberImage: n1 } : {}),
          ...(iconAccount ? { icon: iconAccount } : {}),
          title: 'Step 1 — Register',
          description:
            'Create your verified Health Professional profile in minutes. List your specialties, services, and experience so clients looking for your specific expertise can find and connect with you.',
        },
        {
          ...(n2 ? { stepNumberImage: n2 } : {}),
          ...(iconCalToday ? { icon: iconCalToday } : {}),
          title: 'Step 2 — Set Availability',
          description:
            'Set the hours and consultation types that work for you. SEWB’s smart scheduling syncs with your availability and handles bookings automatically — no manual management needed.',
        },
        {
          ...(n3 ? { stepNumberImage: n3 } : {}),
          ...(iconList ? { icon: iconList } : {}),
          title: 'Step 3 — Accept Clients',
          description:
            'SEWB’s matching engine connects you with individuals and families based on your specialty, location and availability. When a match is made, you’ll have their shared health profile ready to review before the consultation begins.',
        },
      ],
    },
    {
      blockType: 'healthProSecurity',
      badge: 'Trust & Compliance',
      title: 'Your Practice and Your Clients’ Data — Always Protected',
      subtitle:
        'Health data requires the highest level of protection. SEWB is built with enterprise-grade security standards so you can focus on care, not compliance concerns.',
      cards: [
        {
          ...(iconSec ? { icon: iconSec } : {}),
          title: 'HIPAA Compliant',
          description: 'Built to support secure handling of protected health information',
        },
        {
          ...(iconLic ? { icon: iconLic } : {}),
          title: 'ISO 27001 Certified',
          description: 'Internationally recognised information and security standards',
        },
        {
          ...(iconScan ? { icon: iconScan } : {}),
          title: 'SOC 2 Type II',
          description: 'Independently audited controls for security, availability and confidentiality.',
        },
      ],
    },
    {
      blockType: 'healthProPatientControl',
      badge: 'Smart Client Management',
      titleBeforeHighlight: 'Clear, Complete View of Every Client',
      subtitle:
        'Access and manage client information from one organised dashboard designed to support informed, efficient care delivery',
      ...(health5 ? { columnImage: health5 } : {}),
      features: [
        {
          ...(iconInterp ? { icon: iconInterp } : {}),
          title: 'Individual Identity Overview',
          description:
            'View essential client details, including profile information, demographics, and shared health data in one place.',
        },
        {
          ...(iconStar ? { icon: iconStar } : {}),
          title: 'Real-Time Status Indicator',
          description:
            'See client’s current status (with client consent) after scheduled appointment so that better targeted recommendations and support can be offered.',
        },
        {
          ...(iconMed ? { icon: iconMed } : {}),
          title: 'Consultation History',
          description:
            'Quickly access previous appointment dates, notes, and interactions to maintain continuity of care without searching through record.',
        },
        {
          ...(iconStar ? { icon: iconStar } : {}),
          title: 'Condition Summary & Care Summary',
          description:
            'Review key health concerns, wellness information, and care priorities before every consultation for better-informed decision-making.',
        },
      ],
    },
    {
      blockType: 'healthProAppCta',
      badge: 'Why Health Professionals Choose SEWB',
      title: 'Smarter Tools. Stronger Practice. Better Outcomes.',
      subtitle:
        'Designed to simplify practice management, strengthen client engagement, and support modern healthcare delivery through one connected platform.',
      bullets: [
        { text: 'All-in-One Platform' },
        { text: 'AI-Powered Insights' },
        { text: 'Grow Your Client Reach' },
        { text: 'Time-Saving Automation' },
        { text: 'Secure & Compliant' },
        { text: 'Built to Scale' },
      ],
      ...(appImg ? { mockupImage: appImg } : {}),
    },
    {
      blockType: 'healthProFaq',
      heading: 'FAQs',
      items: [
        {
          question: 'Who is the SEWB Health Professionals App designed for?',
          answer:
            'The SEWB Health Professionals App is built for registered healthcare practitioners and it includes doctors, nurses, occupational therapists and care workers. Whether you run an independent practice or work within a larger care team, the platform is designed to simplify how you manage clients, coordinate care, and grow professionally.',
        },
        {
          question: 'How does SEWB Professional Add support my clinical work?',
          answer:
            'SEWB’s AI Intelligence Engine gives access to client wellness trends, wearable readings and health history with their consensus (only when client wants to share). This helps you to identify patterns, provide more targeted recommendations and to support clients in making informed choices about their wellbeing before and after each consultation.',
        },
        {
          question: 'Is my clients’ data secure on the platform?',
          answer:
            'Yes. SEWB uses advanced encryption for all stored and transmitted data, is built on HIPAA-ready infrastructure, and holds ISO 27001 certification. Role-based access controls ensure that client data is only visible to the people authorised to see it and clients remain in full control of what they share.',
        },
        {
          question: 'Can I conduct telehealth consultations through SEWB?',
          answer:
            'Yes. SEWB includes built-in tools for secure video and audio consultations. You can also issue digital prescriptions and review shared health reports before each session, making virtual care delivery seamless and efficient.',
        },
      ],
    },
  ]

  return layout
}
