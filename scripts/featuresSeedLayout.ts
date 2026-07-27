import type { FeaturesFullPageBlock, Page } from '../src/payload-types.js'

type PageLayout = NonNullable<Page['layout']>

export async function buildFeaturesSeedBlocks(
  ensureMediaId: (publicRelativePath: string) => Promise<string | undefined>,
): Promise<PageLayout> {
  const banner = await ensureMediaId('assets/img/features/banner.png')
  const smartHealth = await ensureMediaId('assets/img/features/smart-health.jpg')
  const arrow = await ensureMediaId('assets/img/icons/left-arrow.png')
  const iconSearch = await ensureMediaId('assets/img/icons/search-plus.png')
  const iconShield = await ensureMediaId('assets/img/icons/shield.png')
  const iconNotes = await ensureMediaId('assets/img/icons/clinical-notes.png')
  const realWorld = await ensureMediaId('assets/img/features/real-world.webp')
  const protected1 = await ensureMediaId('assets/img/features/protected1.webp')
  const iconLock = await ensureMediaId('assets/img/icons/lock.png')
  const iconSecurity = await ensureMediaId('assets/img/icons/security.png')
  const iconCloud = await ensureMediaId('assets/img/icons/cloud.png')
  const iconA11y = await ensureMediaId('assets/img/icons/accessibility.png')
  const productBg = await ensureMediaId('assets/img/features/product-bg.webp')
  const track = await ensureMediaId('assets/img/features/track.webp')
  const aiBadge = await ensureMediaId('assets/img/features/ai-health-badge.webp')
  const alertBadge = await ensureMediaId('assets/img/features/smat-alert.webp')
  const homeMock = await ensureMediaId('assets/img/home/2.webp')

  const block: FeaturesFullPageBlock = {
    blockType: 'featuresFullPage',
    hero: {
      badge: 'Smart Health Intelligence',
      titleHighlight: 'AI Health Intelligence',
      titleRest: 'for Smarter, Faster Care',
      subtitle: 'Get quick health insights, check symptoms, and find the right care all in one place.',
      tags: [{ text: 'Symptom Checker' }, { text: 'Risk Detection' }, { text: 'Expert Matching' }],
      ...(banner ? { image: banner } : {}),
    },
    smartHealth: {
      badge: 'SMART HEALTH ASSISTANT',
      title: 'AI-POWERED HEALTH INTELLIGENCE FOR BETTER individual CARE',
      subtitle:
        'Understand your health quickly with AI-driven insights, Health Professional guidance, and easy report interpretation.',
      ...(smartHealth ? { sideImage: smartHealth } : {}),
      paragraph1:
        'AI Health Intelligence is an advanced, individual-focused platform designed to simplify healthcare by providing clear, actionable insights through medical data analysis. By translating complex reports and prescriptions into understandable guidance, the platform empowers individuals to make informed decisions and find the right care with confidence.',
      paragraph2:
        'Beyond data analysis, the system proactively monitors health patterns and suggests the most suitable medical specialists based on your unique needs. This ensures a seamless transition from understanding symptoms to receiving expert care, making your healthcare journey faster and more connected.',
      ctaLabel: 'Get Started Now',
      ctaHref: '/individuals',
      ...(arrow ? { ctaArrowImage: arrow } : {}),
    },
    powerfulFeatures: {
      badge: 'POWERFUL FEATURES',
      title: 'EVERYTHING YOU NEED FOR BETTER HEALTH MANAGEMENT',
      subtitle:
        'Our AI-powered platform combines cutting-edge technology with medical expertise to provide comprehensive health support.',
      cards: [
        {
          ...(iconSearch ? { icon: iconSearch } : {}),
          title: 'SYMPTOM CHECKER',
          description:
            "Advanced AI analyzes your symptoms to provide preliminary insights about possible conditions. Simply describe what you're experiencing, and get instant, evidence-based information.",
        },
        {
          ...(iconShield ? { icon: iconShield } : {}),
          title: 'HEALTH RISK DETECTION',
          description:
            'Proactive monitoring of health patterns to identify potential risks early. Our AI continuously analyzes your data to flag any concerns before they become serious issues.',
        },
        {
          ...(iconNotes ? { icon: iconNotes } : {}),
          title: 'Health Professional MATCHING',
          description:
            'Intelligent matching system that connects you with the most appropriate healthcare specialist based on your symptoms, location, availability, and insurance coverage.',
        },
      ],
    },
    realWorld: {
      pillLabel: 'REAL-WORLD EXAMPLE',
      pillIconClass: 'fa-bolt',
      title: "SARAH'S HEALTH JOURNEY",
      subtitle:
        'See how AI Health Intelligence guided Sarah from initial symptoms to proper treatment in just a few simple steps.',
      steps: [
        {
          iconClass: 'fa-comment-medical',
          title: 'Describe Symptoms',
          body: 'Sarah details her persistent headaches and fatigue in the app.',
          aosDelay: 100,
        },
        {
          iconClass: 'fa-brain',
          title: 'AI Analysis',
          body: 'The system analyzes her history and symptoms to identify potential causes instantly.',
          aosDelay: 200,
        },
        {
          iconClass: 'fa-user-md',
          title: 'Expert Matching',
          body: 'Sarah is instantly matched with a specialist neurologist within her healthcare network.',
          aosDelay: 300,
        },
        {
          iconClass: 'fa-heartbeat',
          title: 'Care & Recovery',
          body: 'Following a consultation, the app helps Sarah manage her recovery and personalized treatment plan.',
          aosDelay: 400,
        },
      ],
      ...(realWorld ? { sideImage: realWorld } : {}),
      floatCardTitle: 'Specialist Care',
      floatCardSubtitle: 'Instant Access',
    },
    secureData: {
      badge: 'YOUR DATA, FULLY PROTECTED',
      title: 'SECURE & COMPLIANT HEALTHCARE DATA',
      subtitle:
        'Built with enterprise-grade security to ensure individual privacy and regulatory compliance.',
      ...(protected1 ? { image: protected1 } : {}),
      paragraph1:
        'Your health data is one of your most valuable assets — and we treat it that way. Our platform is designed with advanced security protocols to protect sensitive medical information at every stage. From encrypted storage to secure data transmission, every interaction is safeguarded.',
      paragraph2:
        "We follow strict healthcare compliance standards to ensure your data remains private, protected, and accessible only to authorized users. Whether you're a individual, Health Professional, or lab, you can trust our system to maintain the highest levels of confidentiality.",
      items: [
        { ...(iconLock ? { icon: iconLock } : {}), title: 'END-TO-END ENCRYPTION' },
        { ...(iconSecurity ? { icon: iconSecurity } : {}), title: 'HIPAA-READY INFRASTRUCTURE' },
        { ...(iconCloud ? { icon: iconCloud } : {}), title: 'SECURE CLOUD STORAGE' },
        { ...(iconA11y ? { icon: iconA11y } : {}), title: 'ROLE-BASED ACCESS CONTROL' },
      ],
    },
    healthTracking: {
      badge: 'TRACK YOUR HEALTH IN REAL TIME',
      titleLine1: 'REAL-TIME HEALTH',
      titleLine2: 'MONITORING DASHBOARD',
      subtitle:
        'Stay informed with live updates and actionable insights from your health data.',
      ...(productBg ? { productBackground: productBg } : {}),
      ...(track ? { trackImage: track } : {}),
      ...(aiBadge ? { overlayBadgeAi: aiBadge } : {}),
      ...(alertBadge ? { overlayBadgeAlert: alertBadge } : {}),
      items: [
        { ...(iconLock ? { icon: iconLock } : {}), title: 'LIVE HEALTH METRICS TRACKING' },
        { ...(iconSecurity ? { icon: iconSecurity } : {}), title: 'VISUAL REPORTS & TRENDS' },
        { ...(iconCloud ? { icon: iconCloud } : {}), title: 'INSTANT RISK ALERTS' },
        { ...(iconA11y ? { icon: iconA11y } : {}), title: 'PERSONALIZED HEALTH INSIGHTS' },
      ],
    },
    appSection: {
      ...(productBg ? { backgroundImage: productBg } : {}),
      badge: 'WHY CHOOSE SEWB FOR SMART HEALTHCARE',
      title: 'A SMARTER, FASTER, AND MORE CONNECTED WAY TO MANAGE YOUR HEALTH.',
      bullets: [
        { text: 'Faster Diagnosis with AI Insights' },
        { text: 'Intelligent Decision Support' },
        { text: 'All-in-One Healthcare Platform' },
        { text: 'Saves Time & Reduces Waiting' },
        { text: 'Data-Driven Health Tracking' },
      ],
      ...(homeMock ? { mockupImage: homeMock } : {}),
    },
    faq: {
      heading: 'FAQs',
      items: [
        {
          question: 'How does the AI symptom checker work?',
          answer:
            'Our AI analyzes your symptoms, medical history, and inputs to provide possible conditions and next steps. It uses medical data models to give accurate, evidence-based suggestions.',
        },
        {
          question: 'Is my health data secure?',
          answer:
            'SEWB helps individuals by providing a centralized platform to track health metrics, receive AI-powered insights, manage appointments, store medical records securely, and connect with healthcare organisations seamlessly.',
        },
        {
          question: 'Can I connect with real Health Professionals through the platform?',
          answer:
            'Yes, SEWB employs enterprise-grade encryption, is HIPAA and ISO 27001 compliant, and uses multi-factor authentication. Your data is stored securely with complete privacy controls and you decide who can access your information.',
        },
        {
          question: 'Does the platform replace a Health Professional consultation?',
          answer:
            'Absolutely! Health Professionals can use SEWB to monitor individual health in real-time, receive AI-powered alerts for abnormal vitals, manage appointments, conduct telehealth consultations, and collaborate with other healthcare organisations.',
        },
      ],
    },
  }

  return [block]
}
