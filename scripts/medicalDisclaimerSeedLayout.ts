import type { Page } from '../src/payload-types.js'

type PageLayout = NonNullable<Page['layout']>

/** Matches `MedicalDisclaimerPage.tsx` / medical-disclaimer.php */
export async function buildMedicalDisclaimerSeedBlocks(
  ensureMediaId: (publicRelativePath: string) => Promise<string | undefined>,
): Promise<PageLayout> {
  const heroImg = await ensureMediaId('assets/img/privacy/disclaimer.png')
  const glowLeft = await ensureMediaId('assets/img/privacypolicy/glow-left.webp')
  const closeIc = await ensureMediaId('assets/img/icons/close.png')
  const desc2 = await ensureMediaId('assets/img/icons/desc2.png')
  const desc1 = await ensureMediaId('assets/img/icons/desc1.png')
  const desc3 = await ensureMediaId('assets/img/icons/desc3.png')
  const desc4 = await ensureMediaId('assets/img/icons/desc4.png')
  const desc5 = await ensureMediaId('assets/img/icons/desc5.png')
  const desc6 = await ensureMediaId('assets/img/icons/desc6.png')

  const layout: PageLayout = [
    {
      blockType: 'medicalDisclaimerFullPage',
      hero: {
        badge: 'Important Notice',
        title: 'Medical',
        titleHighlight: 'Disclaimer',
        subtitle:
          'SEWB AI supports healthcare access but does not replace licensed medical professionals. Learn about the limitations and boundaries of our digital tools.',
        ...(heroImg ? { sideImage: heroImg } : {}),
      },
      ...(glowLeft ? { sectionGlowImage: glowLeft } : {}),
      cards: [
        {
          variant: 'important',
          ...(closeIc ? { icon: closeIc } : {}),
          heading: 'Important notice.',
          paragraphs: [
            {
              text: 'The platform supports healthcare access but does not replace licensed medical professionals.',
            },
          ],
        },
        {
          variant: 'default',
          ...(desc2 ? { icon: desc2 } : {}),
          heading: 'Introduction',
          paragraphs: [
            {
              text:
                'The information and services provided on this platform are intended to support healthcare access and improve communication between individuals and healthcare organisations. The platform offers tools such as AI-powered health insights, Health Professional consultation services, and access to medical resources to help users better understand their health.',
            },
            {
              text:
                'However, this platform does not replace professional medical advice, diagnosis, or treatment from a licensed healthcare professional.',
            },
          ],
        },
        {
          variant: 'default',
          ...(desc1 ? { icon: desc1 } : {}),
          heading: 'Not a Substitute for Medical Advice',
          paragraphs: [
            {
              text:
                'Any health information, AI-generated insights, or guidance available through the platform is provided for informational and support purposes only. These tools are designed to help users better understand their health concerns and assist them in seeking appropriate medical care.',
            },
            {
              text:
                'Users should always consult a qualified Health Professional or healthcare professional before making any medical decisions or starting any treatment.',
            },
          ],
        },
        {
          variant: 'default',
          ...(desc3 ? { icon: desc3 } : {}),
          heading: 'Health Professional Consultations',
          paragraphs: [
            {
              text:
                'The platform may allow users to connect with verified Health Professionals for consultations. While the platform facilitates this communication, the medical advice provided during consultations is the responsibility of the healthcare professional.',
            },
            {
              text: 'The platform itself does not provide medical treatment or clinical services.',
            },
          ],
        },
        {
          variant: 'default',
          ...(desc4 ? { icon: desc4 } : {}),
          heading: 'Emergency Situations',
          paragraphs: [
            {
              text:
                'This platform is not intended for emergency medical situations. If you are experiencing a medical emergency or a serious health condition, you should immediately contact emergency medical services or visit the nearest hospital.',
            },
          ],
        },
        {
          variant: 'default',
          ...(desc5 ? { icon: desc5 } : {}),
          heading: 'Personal Responsibility',
          paragraphs: [
            {
              text:
                'Users are responsible for how they use the information available on the platform. Any decisions related to health, treatment, or medication should be made in consultation with a licensed healthcare professional.',
            },
          ],
        },
        {
          variant: 'default',
          ...(desc6 ? { icon: desc6 } : {}),
          heading: 'Limitation of Responsibility',
          paragraphs: [
            {
              text:
                'While efforts are made to provide accurate and useful information, the platform does not guarantee that all health-related information or AI-generated insights will be complete or fully accurate. Users should treat the platform as a supportive tool rather than a replacement for professional healthcare services.',
            },
          ],
        },
      ],
      quote: {
        line1:
          'In the strange partnership between humans and technology, tools can extend our reach but never replace the hands that know how to heal.',
        line2Lead: 'A good medical disclaimer simply reminds everyone where the line is drawn: ',
        line2Bold: 'technology can guide, but medicine still belongs to trained professionals.',
        line2Trail: '',
      },
    },
  ]

  return layout
}
