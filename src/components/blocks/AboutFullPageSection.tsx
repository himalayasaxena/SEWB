import { AboutImpactScript } from '@/components/pages/AboutImpactScript'
import { mediaUrl } from '@/lib/mediaUrl'
import type { AboutFullPageBlock, Media } from '@/payload-types'

function mediaAlt(media: string | Media | null | undefined, fallback = ''): string {
  if (media && typeof media === 'object' && media.alt) return media.alt
  return fallback
}

export function AboutFullPageSection({
  block,
  instanceKey,
}: {
  block: AboutFullPageBlock
  instanceKey: string
}) {
  const uid = (block.id ?? instanceKey).toString().replace(/[^a-zA-Z0-9]/g, '')
  const { hero, journey, why, impact, founders, faq } = block

  const heroImg = hero.image ? mediaUrl(hero.image) : ''
  const journeyLeft = journey.leftImage ? mediaUrl(journey.leftImage) : ''
  const journeyCenter = journey.centerImage ? mediaUrl(journey.centerImage) : ''
  const journeyRight = journey.rightImage ? mediaUrl(journey.rightImage) : ''
  const whyImg = why.image ? mediaUrl(why.image) : ''

  const networkImg = impact.networkImage ? mediaUrl(impact.networkImage) : ''
  const baseImg = impact.baseImage ? mediaUrl(impact.baseImage) : ''
  const doctorImg = impact.doctorImage ? mediaUrl(impact.doctorImage) : ''
  const avatarImg = impact.avatarImage ? mediaUrl(impact.avatarImage) : ''
  const chatImg = impact.chatImage ? mediaUrl(impact.chatImage) : ''
  const barChartImg = impact.barChartImage ? mediaUrl(impact.barChartImage) : ''
  const circleImg = impact.circleImage ? mediaUrl(impact.circleImage) : ''

  const tabs = impact.tabs ?? []
  const activeTabIndex = Math.max(
    0,
    tabs.findIndex((t) => t?.defaultActive),
  )
  const activeTab = tabs[activeTabIndex] ?? tabs[0]
  const linkHref = impact.linkHref || '#'
  const linkLabel = impact.linkLabel || 'Learn More'

  const members = founders.members ?? []
  const faqItems = faq.items ?? []
  const accordionId = `faqAccordion-about-${uid}`

  const impactId = (base: string) => `${base}-${uid}`

  return (
    <>
      <section className="common-hero-section">
        <div className="custom-container container-fluid">
          <div className="row align-items-center about-main-row">
            <div className="col-lg-7">
              <div className="hero-content">
                {hero.badge ? (
                  <div className="hero-badge-wrap">
                    <span className="hero-badge">{hero.badge}</span>
                  </div>
                ) : null}
                <h1 className="hero-title">
                  {hero.titleHighlight ? (
                    <span className="highlight">{hero.titleHighlight}</span>
                  ) : null}
                  {hero.titleHighlight ? ' ' : null}
                  {hero.titleRest}
                </h1>
                {hero.subtitle ? <p className="hero-subtitle">{hero.subtitle}</p> : null}
                {hero.tags && hero.tags.length > 0 ? (
                  <div className="hero-features-tags">
                    {hero.tags.map((tag, i) => (
                      <span key={tag?.id ?? i} className="feature-tag">
                        <i className="fas fa-check-circle"></i> {tag?.text}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="col-lg-5">
              <div className="hero-image-wrap">
                {heroImg ? (
                  <img
                    src={heroImg}
                    width={1180}
                    height={1100}
                    loading="lazy"
                    alt={mediaAlt(hero.image, 'About hero')}
                    className="hero-main-img about-main-image"
                    style={{ aspectRatio: 'auto', height: 'auto', objectFit: 'contain' }}
                  />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="about-journey-section">
          <div className="custom-container container-fluid">
            <div className="row justify-content-center">
              <div className="col-xl-10 col-lg-10 text-center">
                {journey.badge ? <span className="section-badge">{journey.badge}</span> : null}
                <h2 className="section-title ">
                  {journey.titlePrefix}
                  {journey.titleHighlight ? <span> {journey.titleHighlight}</span> : null}
                </h2>
                {journey.subtitle ? <p className="section-subtitle">{journey.subtitle}</p> : null}
              </div>
            </div>
            {(journeyLeft || journeyCenter || journeyRight) && (
              <div className="row justify-content-center">
                <div className="col-xl-8 col-lg-9">
                  <div className="about-journey-gallery">
                    {journeyLeft ? (
                      <div className="about-journey-card about-journey-card-left">
                        <img
                          src={journeyLeft}
                          width={200}
                          height={400}
                          loading="lazy"
                          alt={mediaAlt(journey.leftImage, 'Journey')}
                          className="img-fluid"
                        />
                      </div>
                    ) : null}
                    {journeyCenter ? (
                      <div className="about-journey-card about-journey-card-center">
                        <img
                          src={journeyCenter}
                          width={400}
                          height={400}
                          loading="lazy"
                          alt={mediaAlt(journey.centerImage, 'Journey')}
                          className="img-fluid"
                        />
                      </div>
                    ) : null}
                    {journeyRight ? (
                      <div className="about-journey-card about-journey-card-right">
                        <img
                          src={journeyRight}
                          width={300}
                          height={400}
                          loading="lazy"
                          alt={mediaAlt(journey.rightImage, 'Journey')}
                          className="img-fluid"
                        />
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            )}
            {(journey.missionText || journey.visionText) && (
              <div className="row about-purpose-row justify-content-center g-lg-5 g-3" id="mission-vision">
                {journey.missionText ? (
                  <div className="col-lg-6 col-md-6">
                    <div className="about-purpose-block">
                      {journey.missionLabel ? (
                        <span className="section-badge">{journey.missionLabel}</span>
                      ) : null}
                      <p>{journey.missionText}</p>
                    </div>
                  </div>
                ) : null}
                {journey.visionText ? (
                  <div className="col-lg-6 col-md-6">
                    <div className="about-purpose-block">
                      {journey.visionLabel ? (
                        <span className="section-badge">{journey.visionLabel}</span>
                      ) : null}
                      <p>{journey.visionText}</p>
                    </div>
                  </div>
                ) : null}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="why-new-section section">
        <div className="container-fluid custom-container">
          <div className="row align-items-center justify-content-lg-between justify-content-center g-4">
            <div className="col-lg-6 col-md-10">
              <div className="why-new-content">
                {why.badge ? <span className="section-badge">{why.badge}</span> : null}
                <h2 className="section-title">
                  {why.titlePrefix}
                  {why.titleHighlight ? <span> {why.titleHighlight}</span> : null}
                </h2>
                {why.subtitle ? <p className="section-subtitle mx-0">{why.subtitle}</p> : null}
              </div>
            </div>
            <div className="col-lg-5">
              <div className="why-new-images text-center position-relative mt-ld-5 mt-lg-0">
                <div className="position-absolute why-wrapper w-100 h-100 bg-primary rounded-5"></div>
                {whyImg ? (
                  <img
                    src={whyImg}
                    className="img-fluid rounded-4 shadow-lg position-relative z-1 why-img"
                    alt={mediaAlt(why.image, 'Why SEWB')}
                  />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-impact-section" id={impactId('aboutImpactSection')}>
        {networkImg ? (
          <div className="about-impact-network">
            <img
              src={networkImg}
              loading="lazy"
              alt={mediaAlt(impact.networkImage, 'Network')}
              className="img-fluid"
            />
          </div>
        ) : null}
        <div className="custom-container container-fluid">
          <div className="row justify-content-center text-center">
            <div className="col-xl-7 col-lg-10">
              {impact.badge ? <span className="section-badge">{impact.badge}</span> : null}
              <h2 className="section-title ">{impact.title}</h2>
              {impact.subtitle ? (
                <p className="section-subtitle text-white">{impact.subtitle}</p>
              ) : null}
              {tabs.length > 0 ? (
                <div className="about-impact-tabs" id={impactId('aboutImpactTabs')}>
                  {tabs.map((tab, i) => {
                    const isActive = i === activeTabIndex
                    return (
                      <button
                        key={tab?.id ?? i}
                        className={`about-impact-tab${isActive ? ' active' : ''}`}
                        type="button"
                        data-impact-title={tab?.title ?? ''}
                        data-impact-copy={tab?.copy ?? ''}
                        data-impact-name={tab?.name ?? ''}
                        data-impact-role={tab?.role ?? ''}
                        data-impact-stat-label={tab?.statLabel ?? ''}
                        data-impact-stat-value={tab?.statValue ?? ''}
                        data-impact-bottom={tab?.bottom ?? ''}
                        data-impact-link={linkHref}
                        aria-selected={isActive ? 'true' : 'false'}
                      >
                        {tab?.label}
                      </button>
                    )
                  })}
                </div>
              ) : null}
            </div>
          </div>
          <div className="about-impact-stage-wrap">
            <div className="about-impact-stage">
              <div className="about-impact-visual">
                {baseImg ? (
                  <div className="about-impact-base">
                    <img
                      src={baseImg}
                      width={700}
                      height={500}
                      loading="lazy"
                      alt={mediaAlt(impact.baseImage, 'Healthcare environment')}
                      className="img-fluid"
                    />
                  </div>
                ) : null}
                {doctorImg ? (
                  <img
                    src={doctorImg}
                    width={500}
                    height={600}
                    loading="lazy"
                    alt={mediaAlt(impact.doctorImage, 'Doctor')}
                    className="img-fluid about-impact-doctor"
                  />
                ) : null}
                <div className="about-impact-mini-card about-impact-mini-card-left">
                  {avatarImg ? (
                    <div className="about-impact-mini-avatar">
                      <img
                        src={avatarImg}
                        loading="lazy"
                        alt={mediaAlt(impact.avatarImage, 'Avatar')}
                        className="about-impact-check-img"
                      />
                    </div>
                  ) : null}
                  <div className="about-impact-mini-text">
                    <strong id={impactId('aboutImpactName')}>{activeTab?.name ?? ''}</strong>
                    <span id={impactId('aboutImpactRole')}>{activeTab?.role ?? ''}</span>
                  </div>
                  {chatImg ? (
                    <div className="about-impact-mini-action">
                      <img
                        src={chatImg}
                        loading="lazy"
                        alt={mediaAlt(impact.chatImage, 'Chat icon')}
                      />
                    </div>
                  ) : null}
                </div>
                <div className="about-impact-mini-card about-impact-mini-card-top">
                  <div className="about-impact-stat-copy">
                    <span id={impactId('aboutImpactStatLabel')}>{activeTab?.statLabel ?? ''}</span>
                    <strong id={impactId('aboutImpactStatValue')}>
                      {activeTab?.statValue ?? ''}
                    </strong>
                  </div>
                  {barChartImg ? (
                    <img
                      src={barChartImg}
                      loading="lazy"
                      alt={mediaAlt(impact.barChartImage, 'Growth icon')}
                      className="about-impact-stat-icon"
                    />
                  ) : null}
                </div>
                {(circleImg || activeTab?.bottom) && (
                  <div className="about-impact-mini-card about-impact-mini-card-bottom">
                    {circleImg ? (
                      <img
                        src={circleImg}
                        loading="lazy"
                        alt={mediaAlt(impact.circleImage, 'Verified icon')}
                        className="about-impact-check-icon"
                      />
                    ) : null}
                    <span id={impactId('aboutImpactBottom')}>{activeTab?.bottom ?? ''}</span>
                  </div>
                )}
              </div>
              <div className="about-impact-content-card">
                <h3 id={impactId('aboutImpactTitle')}>{activeTab?.title ?? ''}</h3>
                <p id={impactId('aboutImpactCopy')}>{activeTab?.copy ?? ''}</p>
                <a href={linkHref} id={impactId('aboutImpactLink')} className="about-impact-link">
                  {linkLabel}
                  <img
                    src="/assets/img/icons/left-arrow.png"
                    width={14}
                    height={14}
                    loading="lazy"
                    alt="left arrow"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-founders-section">
        <div className="custom-container container-fluid">
          <div className=" row justify-content-center">
            <div className="col-xl-9 col-lg-10 text-center">
              {founders.badge ? <span className="section-badge">{founders.badge}</span> : null}
              <h2 className="section-title ">
                {founders.titlePrefix}
                {founders.titleHighlight ? <span> {founders.titleHighlight}</span> : null}
              </h2>
              {founders.subtitle ? <p className="section-subtitle">{founders.subtitle}</p> : null}
            </div>
          </div>
          <div className="row g-3 g-lg-4 about-founders-grid justify-content-center">
            {members.map((member, i) => {
              const img = member?.image ? mediaUrl(member.image) : ''
              return (
                <div key={member?.id ?? i} className="col-sm-6 col-lg-4">
                  <div className="team-member-card">
                    {img ? (
                      <div className="team-image-container">
                        <img
                          src={img}
                          width={530}
                          height={530}
                          loading="lazy"
                          alt={mediaAlt(member?.image, member?.name ?? 'Founder')}
                          className="img-fluid team-member-photo"
                        />
                      </div>
                    ) : null}
                    <div className="team-member-info">
                      <h3 className="team-member-name">{member?.name}</h3>
                      {member?.role ? <p className="team-member-role">{member.role}</p> : null}
                      {(member?.linkedin || member?.twitter || member?.emailHref) && (
                        <div className="team-member-social">
                          {member.linkedin ? (
                            <a href={member.linkedin} className="social-link">
                              <i className="fab fa-linkedin"></i>
                            </a>
                          ) : null}
                          {member.twitter ? (
                            <a href={member.twitter} className="social-link">
                              <i className="fab fa-twitter"></i>
                            </a>
                          ) : null}
                          {member.emailHref ? (
                            <a href={member.emailHref} className="social-link">
                              <i className="fas fa-envelope"></i>
                            </a>
                          ) : null}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="faq-section" id="faq">
        <div className="container-fluid custom-container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <h2 className="faq-title">{faq.heading || 'FAQs'}</h2>
              <div className="accordion faq-accordion" id={accordionId}>
                {faqItems.map((item, i) => {
                  const collapseId = `faq-about-${uid}-${i}`
                  const isFirst = i === 0
                  return (
                    <div key={item?.id ?? i} className="accordion-item">
                      <h3 className="accordion-header">
                        <button
                          className={isFirst ? 'accordion-button' : 'accordion-button collapsed'}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#${collapseId}`}
                          aria-expanded={isFirst ? 'true' : 'false'}
                          aria-controls={collapseId}
                        >
                          {item?.question}
                        </button>
                      </h3>
                      <div
                        id={collapseId}
                        className={`accordion-collapse collapse${isFirst ? ' show' : ''}`}
                        data-bs-parent={`#${accordionId}`}
                      >
                        <div className="accordion-body">{item?.answer}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutImpactScript instanceKey={uid} />
    </>
  )
}
