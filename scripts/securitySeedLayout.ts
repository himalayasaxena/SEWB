import type { Page } from '../src/payload-types.js'

type PageLayout = NonNullable<Page['layout']>

const faqAnswer =
  'SEWB uses advanced encryption, secure access controls, and continuous monitoring to keep all medical data safe from unauthorized access.'

/** Matches `SecurityPage.tsx` / security.php */
export async function buildSecuritySeedBlocks(
  ensureMediaId: (publicRelativePath: string) => Promise<string | undefined>,
): Promise<PageLayout> {
  const heroImg = await ensureMediaId('assets/img/security/hero-section/3.webp')

  const s7 = await ensureMediaId('assets/img/security/safety/7.webp')
  const s8 = await ensureMediaId('assets/img/security/safety/8.webp')
  const s6 = await ensureMediaId('assets/img/security/safety/6.webp')
  const s61 = await ensureMediaId('assets/img/security/safety/6.1.webp')
  const s5 = await ensureMediaId('assets/img/security/safety/5.webp')
  const sf1 = await ensureMediaId('assets/img/security/safety/1.webp')
  const sf2 = await ensureMediaId('assets/img/security/safety/2.webp')
  const sf3 = await ensureMediaId('assets/img/security/safety/3.webp')
  const sf4 = await ensureMediaId('assets/img/security/safety/4.webp')

  const p4 = await ensureMediaId('assets/img/security/protection/4.webp')
  const p3 = await ensureMediaId('assets/img/security/protection/3.webp')
  const p2 = await ensureMediaId('assets/img/security/protection/2.webp')
  const man = await ensureMediaId('assets/img/security/protection/man.webp')

  const t5 = await ensureMediaId('assets/img/security/threats/5.webp')
  const t1 = await ensureMediaId('assets/img/security/threats/1.png')
  const tick = await ensureMediaId('assets/img/security/threats/tick.svg')
  const t4 = await ensureMediaId('assets/img/security/threats/4.png')
  const t2 = await ensureMediaId('assets/img/security/threats/2.png')
  const t3img = await ensureMediaId('assets/img/security/threats/3.png')

  const bk1 = await ensureMediaId('assets/img/security/backup/1.png')
  const bk2 = await ensureMediaId('assets/img/security/backup/2.png')
  const bk4 = await ensureMediaId('assets/img/security/backup/4.png')
  const bk3 = await ensureMediaId('assets/img/security/backup/3.png')

  const track1 = await ensureMediaId('assets/img/security/tracking/1.webp')
  const leftArrow = await ensureMediaId('assets/img/icons/left-arrow.png')

  const home2 = await ensureMediaId('assets/img/home/2.webp')

  const layout: PageLayout = [
    {
      blockType: 'securityHero',
      badge: 'Bank-Level Security',
      title: 'Protecting Your',
      titleHighlight: 'Medical Data',
      subtitle:
        'Protecting your medical data ensures your personal health information stays safe, private, and secure at all times. With advanced encryption and strict access controls.',
      ...(heroImg ? { sideImage: heroImg } : {}),
      tags: [
        { iconClass: 'fas fa-shield-alt', text: 'HIPAA Compliant' },
        { iconClass: 'fas fa-lock', text: 'End-to-End Encryption' },
        { iconClass: 'fas fa-user-secret', text: 'Role-Based Access' },
      ],
    },
    {
      blockType: 'securitySafety',
      badge: 'End-to-End Safety',
      title: 'Complete Protection FOR YOUR Medical Data',
      subtitle: 'Your medical data is encrypted to prevent unauthorized access at every stage.',
      ...(s7 ? { mainImage: s7 } : {}),
      ...(s8 ? { dnaOverlayImage: s8 } : {}),
      ...(s6 ? { shieldBgImage: s6 } : {}),
      ...(s61 ? { shieldIconImage: s61 } : {}),
      ...(s5 ? { tagIconImage: s5 } : {}),
      tagHeading: 'Advanced',
      tagSubheading: 'Medical Security',
      features: [
        {
          ...(sf1 ? { icon: sf1 } : {}),
          title: 'Data Encryption',
          description:
            'Protects sensitive information by converting it into secure code that only authorized users can access.',
        },
        {
          ...(sf2 ? { icon: sf2 } : {}),
          title: 'Secure Authentication',
          description:
            'Verifies user identity using safe methods like passwords, biometrics, or multi-factor authentication.',
        },
        {
          ...(sf3 ? { icon: sf3 } : {}),
          title: 'Medical Privacy Standards',
          description:
            'Ensures individual data is handled and stored according to strict healthcare privacy regulations.',
        },
        {
          ...(sf4 ? { icon: sf4 } : {}),
          title: 'Access Control',
          description:
            'Restricts data access to authorized users based on roles and permissions.',
        },
      ],
    },
    {
      blockType: 'securityArchitecture',
      badge: 'Advanced Protection',
      title: 'MULTI-LAYERED SECURITY ARCHITECTURE',
      subtitle: 'Our comprehensive security framework protects your healthcare data at every level',
      ...(man ? { sideImage: man } : {}),
      items: [
        {
          ...(p4 ? { icon: p4 } : {}),
          title: 'MULTI-FACTOR AUTHENTICATION',
          description: 'Verify identity through multiple secure channels',
        },
        {
          ...(p3 ? { icon: p3 } : {}),
          title: 'LEAST PRIVILEGE ACCESS',
          description: 'Users only access data necessary for their role',
        },
        {
          ...(p2 ? { icon: p2 } : {}),
          title: 'CONTINUOUS VERIFICATION',
          description: 'Real-time validation of every access\nrequest',
        },
      ],
    },
    {
      blockType: 'securityThreat',
      badge: 'Stop Threats in Real Time',
      title: 'REAL-TIME THREAT DETECTION',
      subtitle:
        'Proactively identify and stop threats before they impact your data. Our AI-powered monitoring system detects unusual activities and potential breaches instantly, helping prevent unauthorized access and cyber risks.',
      ...(t5 ? { backgroundImage: t5 } : {}),
      ...(t1 ? { centerImage: t1 } : {}),
      ...(tick ? { alertIcon: tick } : {}),
      alertTitle: 'Threat Detected',
      alertSubtitle: 'Unusual login pattern identified',
      items: [
        {
          ...(t4 ? { icon: t4 } : {}),
          title: 'BEHAVIORAL ANOMALY DETECTION',
          description:
            'Identify unusual user or system behavior in real\ntime to prevent potential security threats.',
        },
        {
          ...(t2 ? { icon: t2 } : {}),
          title: 'PATTERN RECOGNITION FOR SUSPICIOUS ACTIVITIES',
          description:
            'Analyze data patterns to detect and flag potentially\nmalicious or abnormal actions.',
        },
        {
          ...(t3img ? { icon: t3img } : {}),
          title: 'AUTOMATED THREAT RESPONSE PROTOCOLS',
          description:
            'Instantly respond to detected threats with\npredefined actions to minimize risk and damage.',
        },
      ],
    },
    {
      blockType: 'securityBackup',
      badge: 'ALWAYS PROTECTED, ALWAYS RECOVERABLE',
      title: 'AUTOMATED DATA BACKUP & RECOVERY',
      subtitle:
        'Your data is always safe, even in unexpected situations. SEWB automatically backs up medical records and ensures quick recovery in case of system failures, cyberattacks, or data loss incidents.',
      steps: [
        {
          ...(bk1 ? { icon: bk1 } : {}),
          stepBadge: '1',
          title: 'CONTINUOUS BACKUP',
          description: 'Real-time data replication across\nsecure locations',
          layoutVariant: 'default',
        },
        {
          ...(bk2 ? { icon: bk2 } : {}),
          stepBadge: '1',
          title: 'INSTANT RECOVERY',
          description: 'Restore operations within\nminutes, not hours',
          layoutVariant: 'itemDown',
        },
        {
          ...(bk4 ? { icon: bk4 } : {}),
          stepBadge: '1',
          title: 'ENCRYPTED STORAGE',
          description: 'All backups encrypted with\nmilitary-grade security',
          layoutVariant: 'default',
        },
        {
          ...(bk3 ? { icon: bk3 } : {}),
          stepBadge: '1',
          title: 'DISASTER RESILIENCE',
          description: 'Ensure business continuity even\nduring critical failures',
          layoutVariant: 'itemDown',
        },
      ],
    },
    {
      blockType: 'securityAudit',
      badge: 'Transparent Activity Tracking',
      title: 'AUDIT LOGS & ACTIVITY TRACKING',
      subtitle:
        'Full transparency with detailed access and activity logs. Track who accessed what data and when, with complete audit trails that help ensure compliance and accountability across the platform.',
      ...(track1 ? { image: track1 } : {}),
      loggingTitle: 'Comprehensive Logging',
      loggingItems: [
        { text: 'User authentication and authorization events' },
        { text: 'Data access and modification history' },
        { text: 'System configuration changes' },
        { text: 'Security incidents and responses' },
      ],
      stats: [
        { value: '∞', label: 'Retention Period', alignVariant: 'default' },
        { value: '100%', label: 'Coverage', alignVariant: 'centered' },
        { value: 'REAL-TIME', label: 'Updates', alignVariant: 'centered' },
      ],
      ctaLabel: 'View Sample Audit Report',
      ctaHref: '#',
      ...(leftArrow ? { ctaArrowIcon: leftArrow } : {}),
    },
    {
      blockType: 'securityAppCta',
      badge: 'Why Security Matters in Digital Healthcare',
      title:
        'Medical data security is essential for safe,\ntrusted, and\nreliable healthcare.',
      ...(home2 ? { mockupImage: home2 } : {}),
      bullets: [
        { text: 'Protects individual Privacy' },
        { text: 'Prevents Data Breaches' },
        { text: 'Builds Trust & Credibility' },
        { text: 'Ensures Regulatory Compliance' },
        { text: 'Supports Reliable Healthcare Systems' },
      ],
    },
    {
      blockType: 'securityFaq',
      heading: 'FAQs',
      items: [
        {
          question: 'How does SEWB protect sensitive medical data?',
          answer: faqAnswer,
        },
        {
          question: 'What is Zero Trust Security in SEWB?',
          answer: faqAnswer,
        },
        {
          question: 'Is individual data encrypted?',
          answer: faqAnswer,
        },
        {
          question: 'How does SEWB detect security threats?',
          answer: faqAnswer,
        },
      ],
    },
  ]

  return layout
}
