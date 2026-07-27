import type { Page, Post } from '@/payload-types'

import { AboutFullPageSection } from '@/components/blocks/AboutFullPageSection'
import { MedicalDisclaimerFullPageSection } from '@/components/blocks/MedicalDisclaimerFullPageSection'
import { ContactFullPageSection } from '@/components/blocks/ContactFullPageSection'
import { FeaturesFullPageSection } from '@/components/blocks/FeaturesFullPageSection'
import { HealthProAppCtaSection } from '@/components/blocks/HealthProAppCtaSection'
import { HealthProBenefitsSection } from '@/components/blocks/HealthProBenefitsSection'
import { HealthProFaqSection } from '@/components/blocks/HealthProFaqSection'
import { HealthProHeroSection } from '@/components/blocks/HealthProHeroSection'
import { HealthProOnboardingSection } from '@/components/blocks/HealthProOnboardingSection'
import { HealthProPatientControlSection } from '@/components/blocks/HealthProPatientControlSection'
import { HealthProSecuritySection } from '@/components/blocks/HealthProSecuritySection'
import { HealthProToolsSection } from '@/components/blocks/HealthProToolsSection'
import { IndAiSearchSection } from '@/components/blocks/IndAiSearchSection'
import { IndAllInOneSection } from '@/components/blocks/IndAllInOneSection'
import { IndBenefitsSection } from '@/components/blocks/IndBenefitsSection'
import { IndFaqSection } from '@/components/blocks/IndFaqSection'
import { IndHeroSection } from '@/components/blocks/IndHeroSection'
import { IndProcessShowcaseSection } from '@/components/blocks/IndProcessShowcaseSection'
import { IndSimpleStepsSection } from '@/components/blocks/IndSimpleStepsSection'
import { IndToolsSection } from '@/components/blocks/IndToolsSection'
import { IndVoicesSection } from '@/components/blocks/IndVoicesSection'
import { BannerSliderSection } from '@/components/blocks/BannerSliderSection'
import { CommonHeroSection } from '@/components/blocks/CommonHeroSection'
import { HomeAppDownloadSection } from '@/components/blocks/HomeAppDownloadSection'
import { HomeFaqSection } from '@/components/blocks/HomeFaqSection'
import { HomeHighlightsSection } from '@/components/blocks/HomeHighlightsSection'
import { HomeInfrastructureSection } from '@/components/blocks/HomeInfrastructureSection'
import { HomePrivacySection } from '@/components/blocks/HomePrivacySection'
import { SectionIntroSection } from '@/components/blocks/SectionIntroSection'
import { OrgAppCtaSection } from '@/components/blocks/OrgAppCtaSection'
import { OrgEnterpriseDashboardSection } from '@/components/blocks/OrgEnterpriseDashboardSection'
import { OrgFaqSection } from '@/components/blocks/OrgFaqSection'
import { OrgFeatureGridSection } from '@/components/blocks/OrgFeatureGridSection'
import { OrgHeroSection } from '@/components/blocks/OrgHeroSection'
import { OrgLabSolutionsSection } from '@/components/blocks/OrgLabSolutionsSection'
import { OrgPharmacySolutionsSection } from '@/components/blocks/OrgPharmacySolutionsSection'
import { OrgProcessStepsSection } from '@/components/blocks/OrgProcessStepsSection'
import { OrgSecureReportsSection } from '@/components/blocks/OrgSecureReportsSection'
import { SecurityAppCtaSection } from '@/components/blocks/SecurityAppCtaSection'
import { SecurityArchitectureSection } from '@/components/blocks/SecurityArchitectureSection'
import { SecurityAuditSection } from '@/components/blocks/SecurityAuditSection'
import { SecurityBackupSection } from '@/components/blocks/SecurityBackupSection'
import { SecurityFaqSection } from '@/components/blocks/SecurityFaqSection'
import { SecurityHeroSection } from '@/components/blocks/SecurityHeroSection'
import { SecuritySafetySection } from '@/components/blocks/SecuritySafetySection'
import { SecurityThreatSection } from '@/components/blocks/SecurityThreatSection'
import { BlogHeroSection } from '@/components/blocks/BlogHeroSection'
import { BlogIndexFeedSection } from '@/components/blocks/BlogIndexFeedSection'
import { TestimonialCarouselSection } from '@/components/blocks/TestimonialCarouselSection'
import { TestimonialHeroSection } from '@/components/blocks/TestimonialHeroSection'
import { GalleryFullPageSection } from '@/components/blocks/GalleryFullPageSection'

export function PageBlocks({
  layout,
  blogPosts,
}: {
  layout: Page['layout']
  /** Required when layout includes `blogIndexFeed` (blog index uses server-fetched posts). */
  blogPosts?: Post[]
}) {
  if (!layout?.length) return null

  return (
    <>
      {layout.map((block, i) => {
        const key = block.id ?? i
        switch (block.blockType) {
          case 'aboutFullPage':
            return <AboutFullPageSection key={key} block={block} instanceKey={`${i}`} />
          case 'medicalDisclaimerFullPage':
            return <MedicalDisclaimerFullPageSection key={key} block={block} />
          case 'contactFullPage':
            return <ContactFullPageSection key={key} block={block} />
          case 'featuresFullPage':
            return <FeaturesFullPageSection key={key} block={block} instanceKey={`${i}`} />
          case 'healthProHero':
            return <HealthProHeroSection key={key} block={block} />
          case 'healthProTools':
            return <HealthProToolsSection key={key} block={block} />
          case 'healthProBenefits':
            return <HealthProBenefitsSection key={key} block={block} />
          case 'healthProOnboarding':
            return <HealthProOnboardingSection key={key} block={block} />
          case 'healthProSecurity':
            return <HealthProSecuritySection key={key} block={block} />
          case 'healthProPatientControl':
            return <HealthProPatientControlSection key={key} block={block} />
          case 'healthProAppCta':
            return <HealthProAppCtaSection key={key} block={block} />
          case 'healthProFaq':
            return <HealthProFaqSection key={key} block={block} instanceKey={`${i}`} />
          case 'indHero':
            return <IndHeroSection key={key} block={block} />
          case 'indTools':
            return <IndToolsSection key={key} block={block} />
          case 'indProcessShowcase':
            return <IndProcessShowcaseSection key={key} block={block} />
          case 'indBenefits':
            return <IndBenefitsSection key={key} block={block} />
          case 'indSimpleSteps':
            return <IndSimpleStepsSection key={key} block={block} />
          case 'indAiSearch':
            return <IndAiSearchSection key={key} block={block} />
          case 'indAllInOne':
            return <IndAllInOneSection key={key} block={block} />
          case 'indVoices':
            return <IndVoicesSection key={key} block={block} />
          case 'indFaq':
            return <IndFaqSection key={key} block={block} instanceKey={`${i}`} />
          case 'bannerSlider':
            return <BannerSliderSection key={key} block={block} />
          case 'commonHero':
            return <CommonHeroSection key={key} block={block} />
          case 'sectionIntro':
            return <SectionIntroSection key={key} block={block} />
          case 'homeInfrastructure':
            return <HomeInfrastructureSection key={key} block={block} instanceKey={`${i}`} />
          case 'homeHighlights':
            return <HomeHighlightsSection key={key} block={block} />
          case 'homePrivacy':
            return <HomePrivacySection key={key} block={block} />
          case 'homeAppDownload':
            return <HomeAppDownloadSection key={key} block={block} />
          case 'homeFaq':
            return <HomeFaqSection key={key} block={block} instanceKey={`${i}`} />
          case 'orgHero':
            return <OrgHeroSection key={key} block={block} />
          case 'orgLabSolutions':
            return <OrgLabSolutionsSection key={key} block={block} />
          case 'orgPharmacySolutions':
            return <OrgPharmacySolutionsSection key={key} block={block} />
          case 'orgProcessSteps':
            return <OrgProcessStepsSection key={key} block={block} />
          case 'orgSecureReports':
            return <OrgSecureReportsSection key={key} block={block} />
          case 'orgFeatureGrid':
            return <OrgFeatureGridSection key={key} block={block} />
          case 'orgAppCta':
            return <OrgAppCtaSection key={key} block={block} />
          case 'orgEnterpriseDashboard':
            return <OrgEnterpriseDashboardSection key={key} block={block} />
          case 'orgFaq':
            return <OrgFaqSection key={key} block={block} instanceKey={`${i}`} />
          case 'securityHero':
            return <SecurityHeroSection key={key} block={block} />
          case 'securitySafety':
            return <SecuritySafetySection key={key} block={block} />
          case 'securityArchitecture':
            return <SecurityArchitectureSection key={key} block={block} />
          case 'securityThreat':
            return <SecurityThreatSection key={key} block={block} />
          case 'securityBackup':
            return <SecurityBackupSection key={key} block={block} />
          case 'securityAudit':
            return <SecurityAuditSection key={key} block={block} />
          case 'securityAppCta':
            return <SecurityAppCtaSection key={key} block={block} />
          case 'securityFaq':
            return <SecurityFaqSection key={key} block={block} instanceKey={`${i}`} />
          case 'blogHero':
            return <BlogHeroSection key={key} block={block} />
          case 'blogIndexFeed':
            return blogPosts?.length !== undefined ? (
              <BlogIndexFeedSection key={key} block={block} posts={blogPosts} />
            ) : (
              <p key={key} className="container-fluid custom-container py-4 text-muted">
                Blog listing requires post data — open the live site at /blog to see articles.
              </p>
            )
          case 'testimonialHero':
            return <TestimonialHeroSection key={key} block={block} />
          case 'testimonialCarousel':
            return <TestimonialCarouselSection key={key} block={block} />
          case 'galleryFullPage':
            return <GalleryFullPageSection key={key} block={block} />
          default:
            return null
        }
      })}
    </>
  )
}
