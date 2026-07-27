import type { Page } from '../src/payload-types.js'

type PageLayout = NonNullable<Page['layout']>

const faqBody =
  'Yes, SEWB is built to seamlessly manage both laboratory workflows (test processing, reports) and pharmacy operations (inventory, billing, delivery).'

/** Seeds match `OrganisationsPage.tsx` / organisations marketing layout. */
export async function buildOrganisationsSeedBlocks(
  ensureMediaId: (publicRelativePath: string) => Promise<string | undefined>,
): Promise<PageLayout> {
  const heroImg = await ensureMediaId('assets/img/lab/lab_banner.avif')

  const l1 = await ensureMediaId('assets/img/lab/l1.png')
  const l3 = await ensureMediaId('assets/img/lab/l3.png')
  const l2 = await ensureMediaId('assets/img/lab/l2.png')

  const doctor = await ensureMediaId('assets/img/lab/doctor.webp')
  const s1 = await ensureMediaId('assets/img/lab/s1.png')
  const s2 = await ensureMediaId('assets/img/lab/s2.png')
  const s3 = await ensureMediaId('assets/img/lab/s3.png')

  const p1 = await ensureMediaId('assets/img/lab/p1.png')
  const p2 = await ensureMediaId('assets/img/lab/p2.png')
  const p3 = await ensureMediaId('assets/img/lab/p3.png')

  const i1 = await ensureMediaId('assets/img/lab/i1.png')
  const i2 = await ensureMediaId('assets/img/lab/i2.png')
  const i3 = await ensureMediaId('assets/img/lab/i3.png')
  const secureMock = await ensureMediaId('assets/img/lab/secure1.webp')

  const f1 = await ensureMediaId('assets/img/lab/f1.png')
  const tickSvg = await ensureMediaId('assets/img/lab/tick.svg')
  const clock = await ensureMediaId('assets/img/lab/clock.png')
  const p4 = await ensureMediaId('assets/img/lab/p4.png')

  const productBg = await ensureMediaId('assets/img/features/product-bg.webp')
  const home2 = await ensureMediaId('assets/img/home/2.webp')

  const quickInsights = await ensureMediaId('assets/img/doctors/quick-insights.webp')
  const aiInsights = await ensureMediaId('assets/img/doctors/ai-insights.png')
  const dashboard = await ensureMediaId('assets/img/doctors/dashboard.webp')

  const layout: PageLayout = [
    {
      blockType: 'orgHero',
      badge: 'AI-Powered Healthcare Solutions',
      titleLine1: 'All in One Platform for',
      titleHighlight: 'Organisations & Pharmacies',
      subtitle:
        'Streamline your operations with intelligent automation. Our AI-powered platform helps organisations and pharmacies deliver faster, more accurate healthcare services.',
      ...(heroImg ? { image: heroImg } : {}),
      tags: [{ text: 'AI-powered automation' }, { text: 'Real-time fetched' }, { text: 'Smart analytics & insights' }],
    },
    {
      blockType: 'orgLabSolutions',
      badge: 'LABORATORY SOLUTIONS',
      title: 'SMART LAB MANAGEMENT',
      subtitle:
        'Transform your laboratory operations with AI-driven workflows that reduce errors, save time, and improve Individual satisfaction. From test requests to report delivery, every step is optimized.',
      cards: [
        {
          ...(l1 ? { icon: l1 } : {}),
          title: 'RECEIVE TEST REQUESTS',
          description:
            'Instantly receive and organize test requests from healthcare organisations through our AI-powered platform.',
        },
        {
          ...(l3 ? { icon: l3 } : {}),
          title: 'UPLOAD REPORTS DIGITALLY',
          description: 'Seamlessly upload and store test reports with automatic data extraction and validation.',
        },
        {
          ...(l2 ? { icon: l2 } : {}),
          title: 'SEND individual NOTIFICATIONS',
          description: 'Automatically notify Individuals when results are ready with smart delivery timing.',
        },
      ],
    },
    {
      blockType: 'orgPharmacySolutions',
      badge: 'PHARMACY SOLUTIONS',
      title: 'MODERN PHARMACY OPERATIONS',
      subtitle:
        'Revolutionize prescription management with intelligent automation. Handle prescriptions, deliveries, and Individual communications seamlessly while ensuring accuracy and compliance.',
      ...(doctor ? { sideImage: doctor } : {}),
      features: [
        {
          ...(s1 ? { icon: s1 } : {}),
          title: 'RECEIVE PRESCRIPTIONS',
          descriptionLine1: 'Get digital prescriptions directly from physicians ',
          descriptionLine2: 'with AI-verified accuracy and completeness.',
        },
        {
          ...(s2 ? { icon: s2 } : {}),
          title: 'MEDICINE DELIVERY',
          descriptionLine1: 'Coordinate efficient delivery routes and real-time ',
          descriptionLine2: 'tracking for Individual convenience.',
        },
        {
          ...(s3 ? { icon: s3 } : {}),
          title: 'PRESCRIPTION TRACKING',
          descriptionLine1: 'Monitor prescription status, refills, and Individual ',
          descriptionLine2: 'adherence with intelligent insights.',
        },
      ],
    },
    {
      blockType: 'orgProcessSteps',
      badge: 'SIMPLE PROCESS',
      title: 'HOW IT WORKS FOR Organisations',
      subtitle: 'Get started in minutes with our streamlined onboarding process',
      steps: [
        {
          ...(p1 ? { icon: p1 } : {}),
          title: 'REGISTER LAB',
          description:
            'Create your lab profile with certifications, service areas, and specialties. AI validates credentials instantly.',
        },
        {
          ...(p2 ? { icon: p2 } : {}),
          title: 'LIST TESTS',
          description:
            'Add your test catalog with pricing and turnaround times. Smart algorithms optimize pricing based on market trends.',
        },
        {
          ...(p3 ? { icon: p3 } : {}),
          title: 'RECEIVE BOOKINGS',
          description:
            'Get real-time booking notifications. AI-powered scheduling prevents conflicts and optimizes sample collection routes.',
        },
      ],
    },
    {
      blockType: 'orgSecureReports',
      badge: 'SECURE & INSTANT',
      title: 'REPORTS & DIGITAL DELIVERY',
      subtitle: 'Upload reports securely with automated delivery and blockchain verification',
      ...(secureMock ? { mockupImage: secureMock } : {}),
      features: [
        {
          iconLayout: 'default',
          ...(i1 ? { icon: i1 } : {}),
          title: 'UPLOAD individual REPORT',
          description: 'Easily upload Individual reports with secure drag-and-drop or file selection.',
        },
        {
          iconLayout: 'aiBox',
          ...(i2 ? { icon: i2 } : {}),
          title: 'AI QUALITY CHECK',
          description:
            'Automatically validates reports for accuracy, completeness, and required fields.',
        },
        {
          iconLayout: 'default',
          ...(i3 ? { icon: i3 } : {}),
          title: 'SMS NOTIFICATION',
          description:
            'Instantly notify Individuals with a secure link and verification code via SMS.',
        },
      ],
    },
    {
      blockType: 'orgFeatureGrid',
      badge: 'POWERFUL FEATURES',
      titlePrefix: 'EVERYTHING YOU NEED FOR BETTER HEALTH',
      titleSpan: 'MANAGEMENT',
      subtitle:
        'Our AI-powered platform combines cutting-edge technology with medical expertise to provide comprehensive health support.',
      cards: [
        {
          ...(f1 ? { stepIcon: f1 } : {}),
          stepDecoration: 'tick',
          ...(tickSvg ? { tickImage: tickSvg } : {}),
          title: 'ORDER PLACED',
          description: 'Customer books test through platform',
          ...(clock ? { timeIcon: clock } : {}),
          timeText: '2:30 PM',
          statusVariant: 'completed',
          statusLabel: 'Completed',
          detailLines: [{ text: 'Order #ORD-2847' }, { text: 'Payment confirmed' }, { text: 'Sample kit prepared' }],
        },
        {
          ...(f1 ? { stepIcon: f1 } : {}),
          stepDecoration: 'dot',
          title: 'DISPATCH & COLLECTION',
          description: 'Sample collection scheduled with optimized routing',
          ...(clock ? { timeIcon: clock } : {}),
          timeText: '4:15 PM',
          statusVariant: 'progress',
          statusLabel: 'In Progress',
          detailLines: [{ text: 'Agent assigned' }, { text: 'Route optimized by AI' }, { text: 'ETA: 30 mins' }],
        },
        {
          ...(f1 ? { stepIcon: f1 } : {}),
          stepDecoration: 'none',
          title: 'LAB PROCESSING',
          description: 'Sample received and analyzed',
          ...(clock ? { timeIcon: clock } : {}),
          timeText: 'Scheduled',
          statusVariant: 'pending',
          statusLabel: 'Pending',
          detailLines: [{ text: 'Auto-assigned to technician' }, { text: 'Priority: Normal' }, { text: 'TAT: 24 hours' }],
        },
        {
          ...(p4 ? { stepIcon: p4 } : {}),
          stepDecoration: 'none',
          title: 'REPORT DELIVERY',
          description: 'Digital report uploaded and delivered to Individual',
          ...(clock ? { timeIcon: clock } : {}),
          timeText: 'Scheduled',
          statusVariant: 'pending',
          statusLabel: 'Pending',
          detailLines: [
            { text: 'Auto-delivery enabled' },
            { text: 'SMS + Email notification' },
            { text: 'Blockchain verified' },
          ],
        },
      ],
    },
    {
      blockType: 'orgAppCta',
      ...(productBg ? { backgroundImage: productBg } : {}),
      badge: 'WHY Organisations & PHARMACIES CHOOSE SEWB',
      title: 'BUILT FOR SPEED. DESIGNED FOR ACCURACY. TRUSTED FOR GROWTH.',
      ...(home2 ? { mockupImage: home2 } : {}),
      bullets: [
        { title: 'All-in-One Management' },
        { title: 'Faster Workflows' },
        { title: 'Real-Time Insights' },
        { title: 'Smart Tracking & Delivery' },
        { title: 'Secure & Compliant' },
      ],
    },
    {
      blockType: 'orgEnterpriseDashboard',
      badge: 'SEWB Enterprise',
      title: 'Your Command Center for Complete Practice Management',
      subtitle:
        'An AI-powered dashboard that centralizes individual data, appointments, and workflows for effortless control.',
      ...(dashboard ? { dashboardImage: dashboard } : {}),
      ...(quickInsights ? { quickInsightsBadge: quickInsights } : {}),
      ...(aiInsights ? { aiInsightsBadge: aiInsights } : {}),
    },
    {
      blockType: 'orgFaq',
      heading: 'FAQs',
      items: [
        {
          question: 'Can SEWB handle both lab and pharmacy operations?',
          answer: faqBody,
        },
        {
          question: 'Does the platform support real-time tracking?',
          answer: faqBody,
        },
        {
          question: 'Is SEWB suitable for small organisations or only large setups?',
          answer: faqBody,
        },
        {
          question: 'Is customer support available?',
          answer: faqBody,
        },
      ],
    },
  ]

  return layout
}
