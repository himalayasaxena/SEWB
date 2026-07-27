import type { FixedPageSlug } from './fixedPages'

/** Mirrors major marketing sections (below hero) for Payload layout — editorial overview & live preview. */
export type SectionIntroSeed = {
  badge?: string
  title: string
  subtitle?: string
}

export type BannerSlideSeed = {
  imagePublicPath: string
  pretitle?: string
  title: string
  subtitle?: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}

/** Homepage hero — matches `HomePage` banner slider (two slides). */
export const HOME_BANNER_SLIDES: BannerSlideSeed[] = [
  {
    imagePublicPath: 'assets/img/banner/b1.webp',
    pretitle: 'Digital Healthcare Revolution',
    title: 'Your Digital Healthcare Assistant',
    subtitle:
      'From smart devices to smart decisions — SEWB centralizes, analyzes, and activates your health data for better living.',
    primaryCta: { label: 'Explore the Platform', href: '/individuals' },
    secondaryCta: { label: 'Learn More', href: '/about' },
  },
  {
    imagePublicPath: 'assets/img/banner/b2.webp',
    pretitle: 'AI-Powered Health Insights',
    title: 'Because Health is About Living Well',
    subtitle:
      'Experience the future of healthcare with AI-driven analytics that keep you safe, connected, and in control of your wellness journey.',
    primaryCta: { label: 'Get Started', href: '/individuals' },
    secondaryCta: { label: 'View Features', href: '/features' },
  },
]

export const PAGE_SECTION_INTROS: Record<FixedPageSlug, SectionIntroSeed[]> = {
  /** Full homepage body is CMS blocks (`homeInfrastructure` … `homeFaq`) — no duplicate section intros. */
  home: [],
  about: [
    {
      badge: 'ABOUT SEWB',
      title: 'Simplifying the Healthcare Journey',
      subtitle:
        'SEWB is a digital healthcare marketplace that connects individuals with verified Health Professionals, laboratory services, pharmacies, and medical guidance in one unified platform.',
    },
    {
      badge: 'MISSION',
      title: 'Our mission',
      subtitle:
        'To simplify healthcare access by making it easier for people to find the right medical guidance at the right time through a secure digital platform.',
    },
    {
      badge: 'VISION',
      title: 'Our vision',
      subtitle:
        'To create an intelligent digital healthcare ecosystem where individuals, Health Professionals, organisations, and pharmacies are seamlessly connected through technology.',
    },
    {
      badge: 'WHY SEWB',
      title: 'From Reactive Treatment to Predictive Intelligence',
      subtitle:
        'SEWB evolves the medical experience from reactive treatment to proactive wellness with a 360-degree biological profile.',
    },
    {
      badge: 'PLATFORM IMPACT',
      title: 'OUR GROWING HEALTHCARE IMPACT',
      subtitle:
        'Our impact is reflected in the number of individuals helped, Health Professionals onboarded, and medical reports processed every day.',
    },
    {
      badge: 'MEET THE FOUNDERS',
      title: 'THE PEOPLE BUILDING THE FUTURE OF HEALTHCARE',
      subtitle:
        'The passionate team behind the platform — healthcare, technology, and innovation committed to a smarter, more accessible experience.',
    },
  ],
  contact: [
    {
      badge: 'GET IN TOUCH',
      title: "We're Here to Help",
      subtitle:
        'Whether you have a question, feedback, or want to learn more — our team is ready to assist you.',
    },
    {
      badge: 'Find Us on the Map',
      title: 'Find our office location and get easy directions',
      subtitle: 'Locate our office easily using the map below. Visit us for direct assistance.',
    },
  ],
  blog: [
    {
      badge: 'Blog',
      title: 'Featured & recent articles',
      subtitle: 'Featured stories in the main column and popular posts in the sidebar — powered by your CMS posts.',
    },
  ],
  features: [
    {
      badge: 'SMART HEALTH ASSISTANT',
      title: 'AI-POWERED HEALTH INTELLIGENCE FOR BETTER INDIVIDUAL CARE',
      subtitle:
        'Understand your health quickly with AI-driven insights, Health Professional guidance, and easy report interpretation.',
    },
    {
      badge: 'POWERFUL FEATURES',
      title: 'EVERYTHING YOU NEED FOR BETTER HEALTH MANAGEMENT',
      subtitle:
        'Our AI-powered platform combines cutting-edge technology with medical expertise in one place.',
    },
    {
      badge: 'YOUR DATA, FULLY PROTECTED',
      title: 'SECURE & COMPLIANT HEALTHCARE DATA',
      subtitle: 'Enterprise-grade security for privacy and regulatory alignment.',
    },
    {
      badge: 'TRACK YOUR HEALTH IN REAL TIME',
      title: 'REAL-TIME HEALTH MONITORING',
      subtitle: 'Stay informed with live updates and actionable insights from your health data.',
    },
    {
      badge: 'WHY CHOOSE SEWB FOR SMART HEALTHCARE',
      title: 'A SMARTER, FASTER, AND MORE CONNECTED WAY TO MANAGE HEALTH',
      subtitle: 'One platform for guidance, devices, and continuity of care.',
    },
  ],
  gallery: [
    {
      badge: 'Visual Highlights',
      title: 'Explore Our Gallery of Care & Innovation',
      subtitle:
        'How we bring healthcare and technology together — from individual care moments to advanced digital solutions.',
    },
  ],
  'product-list': [
    {
      badge: 'Our healthcare products',
      title: 'Comprehensive healthcare technology solutions',
      subtitle:
        'Explore digital healthcare solutions designed to connect individuals, professionals, and organisations.',
    },
    {
      badge: 'User Voices',
      title: 'What users say',
      subtitle: 'Feedback from healthcare professionals and individuals using SEWB.',
    },
  ],
  security: [
    {
      badge: 'End-to-End Safety',
      title: 'Complete Protection FOR YOUR Medical Data',
      subtitle: 'Security-first architecture for sensitive health information.',
    },
    {
      badge: 'Advanced Protection',
      title: 'MULTI-LAYERED SECURITY ARCHITECTURE',
      subtitle: 'Defense in depth across application, network, and data layers.',
    },
    {
      badge: 'Stop Threats in Real Time',
      title: 'REAL-TIME THREAT DETECTION',
      subtitle: 'Identify and respond to threats before they impact your organisation.',
    },
    {
      badge: 'ALWAYS PROTECTED, ALWAYS RECOVERABLE',
      title: 'AUTOMATED DATA BACKUP & RECOVERY',
      subtitle: 'Resilient backups and recovery paths for continuity of care.',
    },
    {
      badge: 'Transparent Activity Tracking',
      title: 'AUDIT LOGS & ACTIVITY TRACKING',
      subtitle: 'Visibility into access and changes for compliance and trust.',
    },
    {
      badge: 'Why Security Matters',
      title: 'Medical data security is essential for safe digital healthcare',
      subtitle: 'Trust and compliance built into every workflow.',
    },
  ],
  testimonial: [
    {
      badge: 'individual Stories',
      title: 'Experiences from individuals',
      subtitle: 'Real feedback from people using SEWB for their health journey.',
    },
    {
      badge: 'Health Professional Stories',
      title: 'Voices from clinicians and teams',
      subtitle: 'How professionals deliver care with SEWB.',
    },
  ],
  organisations: [
    {
      badge: 'LABORATORY SOLUTIONS',
      title: 'SMART LAB MANAGEMENT',
      subtitle: 'Streamlined lab workflows and integrations.',
    },
    {
      badge: 'PHARMACY SOLUTIONS',
      title: 'MODERN PHARMACY OPERATIONS',
      subtitle: 'Digital tools for dispensing and coordination.',
    },
    {
      badge: 'SIMPLE PROCESS',
      title: 'HOW IT WORKS FOR Organisations',
      subtitle: 'Onboarding and operations in clear steps.',
    },
    {
      badge: 'SECURE & INSTANT',
      title: 'REPORTS & DIGITAL DELIVERY',
      subtitle: 'Secure upload and delivery of reports.',
    },
    {
      badge: 'POWERFUL FEATURES',
      title: 'EVERYTHING YOU NEED FOR BETTER HEALTH OUTCOMES',
      subtitle: 'Modules tailored for enterprise healthcare teams.',
    },
    {
      badge: 'WHY Organisations & PHARMACIES CHOOSE SEWB',
      title: 'BUILT FOR SPEED. DESIGNED FOR ACCURACY. TRUSTED FOR GROWTH.',
      subtitle: 'Enterprise-grade platform for scale and compliance.',
    },
    {
      badge: 'SEWB Enterprise',
      title: 'Your Command Center for Complete Practice Management',
      subtitle: 'Centralised dashboard for data, workflows, and decisions.',
    },
  ],
  'health-professionals': [
    {
      badge: 'Health Professional Tools',
      title: 'Built for the Way Health Professionals Actually Work',
      subtitle:
        'SEWB simplifies day-to-day practice management through an integrated Health professional app designed around real clinical workflows.',
    },
    {
      badge: 'Health Professional Benefits',
      title: 'Grow Your Practice. Improve Your Care.',
      subtitle: 'Connect with more clients and deliver flexible care through one connected clinical platform.',
    },
    {
      badge: 'Health Professional Onboarding',
      title: 'Start Providing Healthcare Services in 3 Simple Steps',
      subtitle: 'Get started in three simple steps.',
    },
    {
      badge: 'Trust & Compliance',
      title: 'Your Practice and Your Clients’ Data — Always Protected',
      subtitle: 'Enterprise-grade security standards so you can focus on care, not compliance concerns.',
    },
    {
      badge: 'Smart Client Management',
      title: 'Clear, Complete View of Every Client',
      subtitle: 'Access and manage client information from one organised dashboard.',
    },
    {
      badge: 'Why Health Professionals Choose SEWB',
      title: 'Smarter Tools. Stronger Practice. Better Outcomes.',
      subtitle: 'Designed to simplify practice management and strengthen client engagement.',
    },
  ],
  individuals: [
    {
      badge: 'My health tools',
      title: 'Powerful Tools to Simplify the Well-being Experience',
      subtitle: 'Everything you need to manage your health in one place.',
    },
    {
      badge: 'Simple Process',
      title: 'How WELL-BEINGS Use the Platform',
      subtitle: 'A simple journey from symptoms to treatment.',
    },
    {
      badge: 'Smart individual Benefits',
      title: 'Simplifying Healthcare for Better Experience',
      subtitle: 'Convenience, speed, and clarity across your journey.',
    },
    {
      badge: 'Simple Process',
      title: 'Smart Healthcare In 3 Simple Steps',
      subtitle: 'AI-guided flow from symptoms to care.',
    },
    {
      badge: 'AI-Powered',
      title: 'Smart Search Experience',
      subtitle: 'Match with the right Health Professional based on your needs.',
    },
    {
      badge: 'All-in-One Care',
      title: 'Integrated Healthcare Services',
      subtitle: 'Consultations through to medicine delivery in one flow.',
    },
    {
      badge: 'individual Voices',
      title: 'What Our individuals Say',
      subtitle: 'Trusted experiences from people using SEWB every day.',
    },
  ],
  'privacy-policy': [
    {
      badge: 'Introduction',
      title: 'How we handle your information',
      subtitle:
        'We value your privacy — this policy explains how we collect, use, store, and protect personal and medical information.',
    },
    {
      badge: 'Information We Collect',
      title: 'Personal and health-related data',
      subtitle: 'Account details, health information, documents, and usage data needed to provide services.',
    },
    {
      badge: 'Your Rights',
      title: 'User rights and control',
      subtitle: 'Choices and controls available to you over your data.',
    },
  ],
  'terms-conditions': [
    {
      badge: 'Terms',
      title: 'Rules governing use of SEWB',
      subtitle: 'Terms of service for the platform and related offerings.',
    },
    {
      badge: 'Use of services',
      title: 'Your responsibilities',
      subtitle: 'Acceptable use, accounts, and compliance with applicable laws.',
    },
  ],
  'medical-disclaimer': [
    {
      badge: 'Disclaimer',
      title: 'Medical information and AI-assisted guidance',
      subtitle: 'Important information about how SEWB presents health content and when to seek professional care.',
    },
    {
      badge: 'Not a substitute',
      title: 'Professional medical advice',
      subtitle: 'Always consult qualified professionals for diagnosis and treatment decisions.',
    },
  ],
}
