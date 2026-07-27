import type { Page } from '../src/payload-types.js'

type PageLayout = NonNullable<Page['layout']>

/** Seeds match `IndividualsPage.tsx` + individuals.php structure and copy. */
export async function buildIndividualsSeedBlocks(
  ensureMediaId: (publicRelativePath: string) => Promise<string | undefined>,
): Promise<PageLayout> {
  const heroImg = await ensureMediaId('assets/img/patients/banner.webp')
  const tChat = await ensureMediaId('assets/img/icons/chat.png')
  const tUpload = await ensureMediaId('assets/img/icons/upload.png')
  const tAlarm = await ensureMediaId('assets/img/icons/alarm.png')

  const p1 = await ensureMediaId('assets/img/patients/process1.webp')
  const p2 = await ensureMediaId('assets/img/patients/process2.webp')
  const p3 = await ensureMediaId('assets/img/patients/process3.webp')
  const p4 = await ensureMediaId('assets/img/patients/process4.webp')

  const benefitImg = await ensureMediaId('assets/img/patients/benefit.webp')
  const checkIc = await ensureMediaId('assets/img/icons/check.png')
  const peoples = await ensureMediaId('assets/img/icons/peoples.png')
  const starShine = await ensureMediaId('assets/img/icons/star-shine.png')
  const medical = await ensureMediaId('assets/img/icons/medical.png')

  const n1 = await ensureMediaId('assets/img/icons/n1.png')
  const n2 = await ensureMediaId('assets/img/icons/n2.png')
  const n3 = await ensureMediaId('assets/img/icons/n3.png')
  const search2 = await ensureMediaId('assets/img/icons/search2.png')
  const video = await ensureMediaId('assets/img/icons/video.png')
  const scanner = await ensureMediaId('assets/img/icons/scanner.png')

  const search3 = await ensureMediaId('assets/img/icons/search3.png')
  const loc2 = await ensureMediaId('assets/img/icons/location2.png')
  const rating = await ensureMediaId('assets/img/icons/rating.png')
  const premium = await ensureMediaId('assets/img/icons/premium.png')
  const clock2 = await ensureMediaId('assets/img/icons/clock2.png')
  const d1 = await ensureMediaId('assets/img/patients/doctor1.webp')
  const d2 = await ensureMediaId('assets/img/patients/doctor2.webp')
  const d3 = await ensureMediaId('assets/img/patients/doctor3.webp')

  const decor = await ensureMediaId('assets/img/patients/card-decor.webp')
  const icHealth = await ensureMediaId('assets/img/icons/health.png')
  const icPill = await ensureMediaId('assets/img/icons/pill.png')
  const icScience = await ensureMediaId('assets/img/icons/science.png')
  const arrowRight = await ensureMediaId('assets/img/icons/right-black.png')
  const allInOne = await ensureMediaId('assets/img/patients/allin-one.webp')

  const glow = await ensureMediaId('assets/img/privacypolicy/glow-right.webp')
  const tm1 = await ensureMediaId('assets/img/testimonial/1.webp')
  const tm2 = await ensureMediaId('assets/img/testimonial/2.webp')
  const tm3 = await ensureMediaId('assets/img/testimonial/3.webp')

  const book = '/contact'

  const docSarah = {
    ...(d1 ? { photo: d1 } : {}),
    name: 'DR. SARAH JOHNSON',
    specialty: 'Cardiologist',
    ratingScore: '4.9 ',
    ratingCount: '127',
    experienceText: '15+ years experience',
    availabilityText: 'Available Today',
    nextAvailableTime: '2:00 PM',
    bookHref: book,
  }
  const docMichael = {
    ...(d2 ? { photo: d2 } : {}),
    name: 'DR. MICHAEL CHEN',
    specialty: 'Dermatologist',
    ratingScore: '4.8',
    ratingCount: '257',
    experienceText: '12+ years experience',
    availabilityText: 'Available Tomorrow',
    nextAvailableTime: '10:00 AM',
    bookHref: book,
  }
  const docEmily = {
    ...(d3 ? { photo: d3 } : {}),
    name: 'DR. EMILY RODRIGUEZ',
    specialty: 'Pediatrician',
    ratingScore: '5.0',
    ratingCount: '527',
    experienceText: '18+ years experience',
    availabilityText: 'Available Today',
    nextAvailableTime: '3:30 PM',
    bookHref: book,
  }

  const layout: PageLayout = [
    {
      blockType: 'indHero',
      badge: 'AI-Powered Healthcare',
      titleHighlight: 'Your Trusted Digital Health & Wellness',
      titleRest: 'Companion',
      subtitle:
        'Experience the future of healthcare with AI-driven insights, instant consultations, and complete control over your medical journey.',
      ...(heroImg ? { image: heroImg } : {}),
    },
    {
      blockType: 'indTools',
      badge: 'My health tools',
      title: 'Powerful Tools to Simplify the Well-being Experience',
      subtitle: 'Everything you need to manage your health, all in one place',
      cards: [
        {
          ...(tChat ? { icon: tChat } : {}),
          title: 'Chat with Health Professional',
          description: 'Instant AI-powered consultation with healthcare professionals',
        },
        {
          ...(tUpload ? { icon: tUpload } : {}),
          title: 'Upload Lab Reports',
          description: 'Securely upload and store your medical documents',
        },
        {
          ...(tAlarm ? { icon: tAlarm } : {}),
          title: 'Track Medical History',
          description: 'Access your complete health records anytime, anywhere',
        },
      ],
    },
    {
      blockType: 'indProcessShowcase',
      badge: 'Simple Process',
      titleBeforeHighlight: 'How WELL-BEINGS Use the',
      titleHighlight: 'Platform',
      subtitle: 'A simple journey from symptoms to treatment',
      steps: [
        { ...(p1 ? { image: p1 } : {}), title: 'Well-being Symptoms' },
        { ...(p2 ? { image: p2 } : {}), title: 'AI Health Insights' },
        { ...(p3 ? { image: p3 } : {}), title: 'Health Professional Consultation' },
        { ...(p4 ? { image: p4 } : {}), title: 'Lab Report Upload' },
      ],
    },
    {
      blockType: 'indBenefits',
      badge: 'Smart individual Benefits',
      title: 'Simplifying Healthcare for Better individual Experience',
      subtitle:
        'Enjoy a seamless healthcare journey with greater convenience, quicker diagnosis, and secure digital medical records all designed to save time, improve accuracy, and enhance overall individual care.',
      ...(benefitImg ? { mainImage: benefitImg } : {}),
      floatingCard: {
        ...(checkIc ? { icon: checkIc } : {}),
        title: 'Easy and Quick',
        subtitle: 'Care Access',
      },
      items: [
        {
          ...(peoples ? { icon: peoples } : {}),
          title: 'Convenience',
          description: 'Access healthcare from the comfort of your home',
        },
        {
          ...(starShine ? { icon: starShine } : {}),
          title: 'Faster Diagnosis',
          description: 'AI-powered insights speed up your treatment',
        },
        {
          ...(medical ? { icon: medical } : {}),
          title: 'Digital Medical Records',
          description: 'All your health data in one secure place',
        },
      ],
    },
    {
      blockType: 'indSimpleSteps',
      badge: 'Simple Process',
      title: 'How It Works Smart Healthcare In 3 Simple Steps',
      subtitle:
        'Experience seamless healthcare with AI guiding you from symptoms to treatment in just 3 simple steps.',
      steps: [
        {
          ...(n1 ? { stepNumberImage: n1 } : {}),
          stepNumberImageClass: 'one',
          ...(search2 ? { icon: search2 } : {}),
          iconWidth: 110,
          iconHeight: 110,
          title: 'Search Health Professional',
          descriptionLine1: 'AI-powered search to find the',
          descriptionLine2: 'perfect specialist',
        },
        {
          ...(n2 ? { stepNumberImage: n2 } : {}),
          ...(video ? { icon: video } : {}),
          title: 'Consult Online',
          descriptionLine1: 'Secure video consultation from',
          descriptionLine2: 'anywhere',
        },
        {
          ...(n3 ? { stepNumberImage: n3 } : {}),
          ...(scanner ? { icon: scanner } : {}),
          title: 'Get Prescription',
          descriptionLine1: 'Digital prescription & follow-up',
          descriptionLine2: 'care',
        },
      ],
    },
    {
      blockType: 'indAiSearch',
      ...(rating ? { metaRatingIcon: rating } : {}),
      ...(premium ? { metaPremiumIcon: premium } : {}),
      ...(clock2 ? { metaClockIcon: clock2 } : {}),
      ...(search3 ? { symptomInputIcon: search3 } : {}),
      ...(loc2 ? { locationInputIcon: loc2 } : {}),
      badge: 'AI-Powered',
      title: 'Smart Search Experience',
      subtitle:
        'Our AI matches you with the perfect Health Professional based on your symptoms, location, and preferences',
      symptomPlaceholder: 'Describe your symptoms or search by specialty...',
      locationPlaceholder: 'Location',
      searchButtonLabel: 'Search',
      tabs: [
        { label: 'All', paneId: 'all', defaultActive: true },
        { label: 'Cardiologist', paneId: 'cardio', defaultActive: false },
        { label: 'Dermatologist', paneId: 'derma', defaultActive: false },
        { label: 'Pediatrician', paneId: 'pedia', defaultActive: false },
        { label: 'Neurologist', paneId: 'neuro', defaultActive: false },
      ],
      panes: [
        {
          paneId: 'all',
          columnClass: 'col-lg-4 col-sm-6',
          doctors: [docSarah, docMichael, docEmily],
        },
        {
          paneId: 'cardio',
          columnClass: 'col-lg-4 col-md-6',
          doctors: [docSarah],
        },
        {
          paneId: 'derma',
          columnClass: 'col-lg-4 col-md-6',
          doctors: [docMichael],
        },
        {
          paneId: 'pedia',
          columnClass: 'col-lg-4 col-md-6',
          doctors: [docEmily],
        },
        {
          paneId: 'neuro',
          columnClass: 'col-lg-4 col-md-6',
          doctors: [docSarah],
        },
      ],
    },
    {
      blockType: 'indAllInOne',
      badge: 'All-in-One Care',
      title: 'Integrated Healthcare Services for Complete individual Care',
      subtitle:
        'From Health Professional consultations to medicine delivery, manage your entire healthcare journey in one seamless platform.',
      ...(allInOne ? { sideImage: allInOne } : {}),
      cards: [
        {
          ...(decor ? { decorImage: decor } : {}),
          ...(icHealth ? { icon: icHealth } : {}),
          title: 'Consult Health Professional',
          description:
            'Connect with certified Health Professionals via video, chat, or in-person visits. Get instant medical advice 24/7.',
          listItems: [
            { text: 'Video Consultation' },
            { text: 'Chat with Health Professionals' },
            { text: 'In-person Visits' },
            { text: '24/7 Availability' },
          ],
          learnMoreHref: '#',
          ...(arrowRight ? { learnMoreArrowImage: arrowRight } : {}),
        },
        {
          ...(decor ? { decorImage: decor } : {}),
          ...(icPill ? { icon: icPill } : {}),
          title: 'Order Medicines',
          description:
            'Order prescribed medicines online with doorstep delivery. Track your order in real-time.',
          listItems: [
            { text: 'Digital Prescription' },
            { text: 'Home Delivery' },
            { text: 'Genuine Medicines' },
            { text: 'Order Tracking' },
          ],
          learnMoreHref: '#',
          ...(arrowRight ? { learnMoreArrowImage: arrowRight } : {}),
        },
        {
          ...(decor ? { decorImage: decor } : {}),
          ...(icScience ? { icon: icScience } : {}),
          title: 'Book Lab Tests',
          description:
            'Schedule lab tests at home or visit diagnostic centers. Get reports digitally within 24 hours.',
          listItems: [
            { text: 'Home Sample Collection' },
            { text: 'NABL Certified Organisations' },
            { text: 'Digital Reports' },
            { text: 'Fast Results' },
          ],
          learnMoreHref: '#',
          ...(arrowRight ? { learnMoreArrowImage: arrowRight } : {}),
        },
      ],
    },
    {
      blockType: 'indVoices',
      ...(glow ? { backgroundShapeImage: glow } : {}),
      ...(rating ? { testimonialStarIcon: rating } : {}),
      badge: 'individual Voices',
      titleBeforeHighlight: 'What Our individuals Say About Their',
      titleHighlight: 'Care Experience',
      subtitle:
        'Trusted by thousands, our individuals share their positive experiences and confidence in our healthcare services.',
      stats: [
        { value: '50K+', label: 'Happy individuals' },
        { value: '4.9/5', label: 'Average Rating' },
        { value: '98%', label: 'Satisfaction Rate' },
      ],
      testimonials: [
        {
          ...(tm1 ? { avatar: tm1 } : {}),
          quote:
            '"As a busy mom, this platform is a lifesaver. Quick appointments, genuine medicines delivered home, and caring Health Professionals. Everything I need in one app!"',
          name: 'Emily Rodriguez',
          specialty: 'Pediatric Care',
        },
        {
          ...(tm2 ? { avatar: tm2 } : {}),
          quote:
            '"The AI-powered search helped me find a specialist in minutes. The video consultation was seamless and the prescription was delivered the same day!"',
          name: 'Sarah Mitchell',
          specialty: 'Skin Allergy',
        },
        {
          ...(tm3 ? { avatar: tm3 } : {}),
          quote:
            '"I was able to book lab tests from home and got my reports within 24 hours. The entire experience was professional and hassle-free. Highly recommend!"',
          name: 'James Peterson',
          specialty: 'Annual Checkup',
        },
        {
          ...(tm1 ? { avatar: tm1 } : {}),
          quote:
            '"As a busy mom, this platform is a lifesaver. Quick appointments, genuine medicines delivered home, and caring Health Professionals. Everything I need in one app!"',
          name: 'Emily Rodriguez',
          specialty: 'Pediatric Care',
        },
      ],
    },
    {
      blockType: 'indFaq',
      heading: 'FAQs',
      items: [
        {
          question: 'How does the AI-powered Health Professional search work?',
          answer:
            'Our advanced AI analyzes your symptoms, medical history, and preferences to match you with the most suitable Health Professionals. It considers factors like specialization, availability, ratings, and location to provide personalized recommendations in seconds.',
        },
        {
          question: 'Is online consultation as effective as in-person visits?',
          answer:
            'SEWB helps individuals by providing a centralized platform to track health metrics, receive AI-powered insights, manage appointments, store medical records securely, and connect with healthcare organisations seamlessly.',
        },
        {
          question: 'How quickly can I get an appointment?',
          answer:
            'Yes, SEWB employs enterprise-grade encryption, is HIPAA and ISO 27001 compliant, and uses multi-factor authentication. Your data is stored securely with complete privacy controls and you decide who can access your information.',
        },
        {
          question: 'Are my medical records secure and private?',
          answer:
            'Absolutely! Health Professionals can use SEWB to monitor individual health in real-time, receive AI-powered alerts for abnormal vitals, manage appointments, conduct telehealth consultations, and collaborate with other healthcare organisations.',
        },
      ],
    },
  ]

  return layout
}
