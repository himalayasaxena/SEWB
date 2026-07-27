/**
 * Fixed marketing routes — site design is locked to these URLs only.
 * Edit SEO/blocks in Payload; do not add new Pages (create disabled in collection).
 */
export const FIXED_PAGE_SLUGS = [
  'home',
  'about',
  'contact',
  'blog',
  'features',
  'gallery',
  'product-list',
  'security',
  'testimonial',
  'organisations',
  'health-professionals',
  'individuals',
  'privacy-policy',
  'terms-conditions',
  'medical-disclaimer',
] as const

export type FixedPageSlug = (typeof FIXED_PAGE_SLUGS)[number]

export type FixedPageSeed = {
  slug: FixedPageSlug
  title: string
  seoTitle: string
  seoDescription: string
  hero: {
    badge: string
    title: string
    titleHighlight?: string
    subtitle: string
    /** Path under `public/` (served as `/assets/...`) */
    imagePublicPath: string
  }
}

export const FIXED_PAGE_SEEDS: FixedPageSeed[] = [
  {
    slug: 'home',
    title: 'Home',
    seoTitle: 'SEWB — Global Care',
    seoDescription: 'Your digital healthcare assistant — AI-powered insights, connected care, one platform.',
    hero: {
      badge: 'SEWB: Your Complete Health Ecosystem',
      title: 'Wearables. Medical Records. Professional Care. All in One Secure Space',
      titleHighlight: '',
      subtitle:
        'Managing your health shouldn\'t mean juggling multiple apps, scattered medical records, and disconnected care providers. SEWB brings your entire health picture together.',
      imagePublicPath: 'assets/img/banner/b1.webp',
    },
  },
  {
    slug: 'about',
    title: 'About',
    seoTitle: 'About SEWB',
    seoDescription:
      'Mission, vision, leadership, and platform impact — SEWB connects individuals with verified health professionals and trusted care.',
    hero: {
      badge: 'About SEWB',
      title: 'Empowering Healthcare with Intelligent Wellness',
      titleHighlight: 'Why We built SEWB',
      subtitle:
        'Better health starts with shifting from reactive to proactive care. SEWB transforms real-time wearable data into meaningful guidance while consolidating health information into one complete ecosystem.',
      imagePublicPath: 'assets/img/about/wellness-hero.png',
    },
  },
  {
    slug: 'contact',
    title: 'Contact',
    seoTitle: 'Contact SEWB',
    seoDescription: 'Office location, phone, email, and message form — SEWB support and partnerships.',
    hero: {
      badge: '24/7 Support Available',
      title: 'CONTACT US',
      titleHighlight: '',
      subtitle:
        'Get in Touch with the SEWB Team. Whether you have a question about the SEWB App, want to join as a Health Professional, or discuss partnership possibilities — our team is here to help.',
      imagePublicPath: 'assets/img/banner/contact-hero-v3.png',
    },
  },
  {
    slug: 'blog',
    title: 'Blog',
    seoTitle: 'Healthcare Insights & Updates',
    seoDescription: 'News, medical advice, and industry trends from SEWB.',
    hero: {
      badge: 'Latest Healthcare Insights',
      title: 'Healthcare',
      titleHighlight: 'Insights & Updates',
      subtitle:
        'Discover the latest news, medical advice, and industry trends to stay informed and healthy.',
      imagePublicPath: 'assets/img/blog/blog-bc.webp',
    },
  },
  {
    slug: 'features',
    title: 'Features',
    seoTitle: 'Platform Features',
    seoDescription: 'Capabilities that power SEWB — AI intelligence, security, devices, and care workflows.',
    hero: {
      badge: 'Smart Health Intelligence',
      title: 'Personalised Wellbeing Support',
      titleHighlight: 'for Smarter, Faster Care',
      subtitle: 'Get quick health insights, check symptoms, and find the right care all in one place.',
      imagePublicPath: 'assets/img/features/banner.png',
    },
  },
  {
    slug: 'gallery',
    title: 'Gallery',
    seoTitle: 'Gallery',
    seoDescription: 'Visual highlights from the SEWB platform and community.',
    hero: {
      badge: 'Visual Highlights',
      title: 'Explore Our Gallery of Care',
      titleHighlight: 'Gallery',
      subtitle:
        'Take a closer look at how we bring healthcare and technology together. From individual care moments to advanced digital solutions.',
      imagePublicPath: 'assets/img/gallery/1.webp',
    },
  },
  {
    slug: 'product-list',
    title: 'Products',
    seoTitle: 'Products',
    seoDescription: 'SEWB products and platform modules for individuals and organisations.',
    hero: {
      badge: 'Products',
      title: 'Platform modules',
      titleHighlight: '',
      subtitle: 'Discover how SEWB modules fit your care workflow and organisation.',
      imagePublicPath: 'assets/img/product/banner.webp',
    },
  },
  {
    slug: 'security',
    title: 'Security',
    seoTitle: 'Security & Privacy',
    seoDescription: 'How SEWB protects health data — encryption, compliance, and operational safeguards.',
    hero: {
      badge: 'Bank-Level Security',
      title: 'Protecting Your',
      titleHighlight: 'Medical Data',
      subtitle:
        'Protecting your medical data ensures your personal health information stays safe, private, and secure at all times. With advanced encryption and strict access controls.',
      imagePublicPath: 'assets/img/security/hero-section/3.webp',
    },
  },
  {
    slug: 'testimonial',
    title: 'Testimonials',
    seoTitle: 'Testimonials',
    seoDescription: 'Voices from professionals and individuals using SEWB.',
    hero: {
      badge: 'Success Stories',
      title: 'Real Experiences From Our Users',
      titleHighlight: 'Experiences',
      subtitle:
        'Discover how SEWB AI is transforming healthcare journeys for individuals and health professionals around the world.',
      imagePublicPath: 'assets/img/testimonial/12.png',
    },
  },
  {
    slug: 'organisations',
    title: 'Organisations',
    seoTitle: 'For Organisations',
    seoDescription: 'SEWB for hospitals, clinics, labs, and enterprise healthcare teams.',
    hero: {
      badge: 'Enterprise',
      title: 'Built for organisations',
      titleHighlight: '',
      subtitle: 'Scale workflows, integrate systems, and deliver consistent care experiences.',
      imagePublicPath: 'assets/img/team/Abhishek.webp',
    },
  },
  {
    slug: 'health-professionals',
    title: 'Health Professionals',
    seoTitle: 'For Health Professionals',
    seoDescription: 'Tools for clinicians and allied health — workflow, insights, and collaboration.',
    hero: {
      badge: 'Clinical workflows',
      title: 'For Health Professionals',
      titleHighlight: '',
      subtitle: 'Focus on patients while SEWB connects data, tasks, and follow-up.',
      imagePublicPath: 'assets/img/health/health7.jpg',
    },
  },
  {
    slug: 'individuals',
    title: 'Individuals',
    seoTitle: 'For Individuals',
    seoDescription: 'Personal health journeys — guidance, records, and continuity of care.',
    hero: {
      badge: 'Personal health',
      title: 'Your health journey',
      titleHighlight: '',
      subtitle: 'Simple steps from insight to action — tailored to you.',
      imagePublicPath: 'assets/img/patients/banner.webp',
    },
  },
  {
    slug: 'privacy-policy',
    title: 'Privacy Policy',
    seoTitle: 'Privacy Policy',
    seoDescription: 'How SEWB collects, uses, and protects your personal information.',
    hero: {
      badge: 'Legal',
      title: 'Privacy Policy',
      titleHighlight: '',
      subtitle: 'Transparency about data practices and your choices.',
      imagePublicPath: 'assets/img/privacypolicy/glow-right.webp',
    },
  },
  {
    slug: 'terms-conditions',
    title: 'Terms & Conditions',
    seoTitle: 'Terms & Conditions',
    seoDescription: 'Terms governing use of the SEWB platform and services.',
    hero: {
      badge: 'Legal',
      title: 'Terms & Conditions',
      titleHighlight: '',
      subtitle: 'Rules and responsibilities for using SEWB.',
      imagePublicPath: 'assets/img/privacypolicy/glow-left.webp',
    },
  },
  {
    slug: 'medical-disclaimer',
    title: 'Medical Disclaimer',
    seoTitle: 'Medical Disclaimer',
    seoDescription: 'Important information about medical information and AI-assisted guidance on SEWB.',
    hero: {
      badge: 'Important Notice',
      title: 'Medical',
      titleHighlight: 'Disclaimer',
      subtitle:
        'SEWB AI supports healthcare access but does not replace licensed medical professionals. Learn about the limitations and boundaries of our digital tools.',
      imagePublicPath: 'assets/img/privacy/disclaimer.png',
    },
  },
]
