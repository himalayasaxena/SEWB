import { FeaturesAosInit } from '@/components/pages/FeaturesAosInit'
import { mediaUrl } from '@/lib/mediaUrl'
import type { FeaturesFullPageBlock } from '@/payload-types'

function faClass(iconClass?: string | null, fallback = 'fas fa-bolt') {
  if (!iconClass) return fallback
  if (/^(fas|far|fab|fal|fad)\s/.test(iconClass)) return iconClass
  return `fas ${iconClass}`
}

/** Renders features page content from CMS FeaturesFullPageBlock. */
export function FeaturesFullPageSection({
  block,
  instanceKey,
}: {
  block: FeaturesFullPageBlock
  instanceKey: string
}) {
  const {
    hero,
    smartHealth,
    powerfulFeatures,
    realWorld,
    secureData,
    healthTracking,
    appSection,
    faq,
  } = block

  const uid = (block.id ?? instanceKey).toString().replace(/[^a-zA-Z0-9]/g, '')
  const accordionId = `faqAccordion-features-${uid}`

  const heroImage = hero.image ? mediaUrl(hero.image) : ''
  const smartSide = smartHealth.sideImage ? mediaUrl(smartHealth.sideImage) : ''
  const ctaArrow = smartHealth.ctaArrowImage ? mediaUrl(smartHealth.ctaArrowImage) : ''
  const realWorldImg = realWorld.sideImage ? mediaUrl(realWorld.sideImage) : ''
  const secureImg = secureData.image ? mediaUrl(secureData.image) : ''
  const productBg = healthTracking.productBackground
    ? mediaUrl(healthTracking.productBackground)
    : ''
  const trackImg = healthTracking.trackImage ? mediaUrl(healthTracking.trackImage) : ''
  const overlayAi = healthTracking.overlayBadgeAi
    ? mediaUrl(healthTracking.overlayBadgeAi)
    : ''
  const overlayAlert = healthTracking.overlayBadgeAlert
    ? mediaUrl(healthTracking.overlayBadgeAlert)
    : ''
  const appBg = appSection.backgroundImage ? mediaUrl(appSection.backgroundImage) : ''
  const appMockup = appSection.mockupImage ? mediaUrl(appSection.mockupImage) : ''

  const heroTags = hero.tags ?? []
  const featureCards = powerfulFeatures.cards ?? []
  const steps = realWorld.steps ?? []
  const secureItems = secureData.items ?? []
  const trackingItems = healthTracking.items ?? []
  const appBullets = appSection.bullets ?? []
  const faqItems = faq.items ?? []

  return (
    <>
      <section className="common-hero-section" style={{ paddingBottom: 0 }}>
        <div className="custom-container container-fluid">
          <div className="row align-items-center justify-content-between g-4">
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
                  {hero.titleHighlight && hero.titleRest ? ' ' : null}
                  {hero.titleRest}
                </h1>
                {hero.subtitle ? <p className="hero-subtitle">{hero.subtitle}</p> : null}
                {heroTags.length > 0 ? (
                  <div className="hero-features-tags">
                    {heroTags.map((tag, i) =>
                      tag?.text ? (
                        <span key={tag.id ?? i} className="feature-tag">
                          <i className="fas fa-check-circle"></i> {tag.text}
                        </span>
                      ) : null,
                    )}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="col-lg-5 align-self-end">
              <div className="hero-image-wrap" style={{ padding: '30px' }}>
                {heroImage ? (
                  <img
                    src={heroImage}
                    loading="lazy"
                    alt=""
                    className="hero-main-img"
                    style={{
                      objectPosition: 'bottom',
                      aspectRatio: 'auto',
                      height: 'auto',
                      borderBottomLeftRadius: '20px',
                      borderBottomRightRadius: '20px',
                      marginBottom: 0,
                    }}
                  />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="smart-health-section section features-health">
        <div className="custom-container container-fluid">
          <div className="row justify-content-center text-center">
            <div className="col-lg-12">
              {smartHealth.badge ? (
                <span className="section-badge">{smartHealth.badge}</span>
              ) : null}
              <h2 className="section-title">{smartHealth.title}</h2>
              {smartHealth.subtitle ? (
                <p className="section-subtitle">{smartHealth.subtitle}</p>
              ) : null}
            </div>
          </div>
          <div className="row align-items-center g-lg-5 g-3 mt-2">
            <div className="col-lg-4 col-xl-4">
              <div className="img-box security-img_box">
                {smartSide ? (
                  <img
                    src={smartSide}
                    width={420}
                    height={600}
                    loading="lazy"
                    alt=""
                    className="img-fluid"
                  />
                ) : null}
              </div>
            </div>
            <div className="col-lg-8 col-xl-7">
              <div className="smart-health-content ps-lg-4">
                <p className="health-content">{smartHealth.paragraph1}</p>
                <p className="health-content">{smartHealth.paragraph2}</p>
                {smartHealth.ctaLabel && smartHealth.ctaHref ? (
                  <a href={smartHealth.ctaHref} className="primary-btn mt-4">
                    {smartHealth.ctaLabel}{' '}
                    {ctaArrow ? (
                      <img src={ctaArrow} width={14} height={14} alt="arrow" />
                    ) : null}
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="security-section two section features">
        <div className="custom-container container-fluid">
          <div className="row justify-content-center text-center mb-4 mb-lg-0">
            <div className="col-lg-10">
              {powerfulFeatures.badge ? (
                <span className="section-badge">{powerfulFeatures.badge}</span>
              ) : null}
              <h2 className="section-title">{powerfulFeatures.title}</h2>
              {powerfulFeatures.subtitle ? (
                <p className="section-subtitle text-black">{powerfulFeatures.subtitle}</p>
              ) : null}
            </div>
          </div>
          <div className="row g-4 justify-content-center">
            {featureCards.map((card, i) => {
              const icon = card?.icon ? mediaUrl(card.icon) : ''
              return (
                <div key={card?.id ?? i} className="col-xl-3 col-lg-4 col-sm-6">
                  <div className="security-card">
                    {icon ? (
                      <div className="benefit-icon-box">
                        <img
                          src={icon}
                          width={26}
                          height={29}
                          loading="lazy"
                          alt=""
                        />
                      </div>
                    ) : null}
                    <h3 className="card-title">{card?.title}</h3>
                    <p className="card-desc">{card?.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section
        className="real-world-section section position-relative overflow-hidden py-5"
        style={{ background: 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)' }}
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background:
              'radial-gradient(circle at top right, rgba(95, 182, 255, 0.15) 0%, transparent 60%)',
            zIndex: 0,
          }}
        ></div>

        <div
          className="custom-container container-fluid position-relative"
          style={{ zIndex: 1 }}
        >
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-8">
              {realWorld.pillLabel ? (
                <span
                  className="section-badge badge bg-white text-primary rounded-pill px-4 py-2 fw-bold mb-3 shadow-sm"
                  style={{ letterSpacing: '1px', fontSize: '14px' }}
                >
                  <i
                    className={`${faClass(realWorld.pillIconClass)} text-warning me-2`}
                  ></i>
                  {realWorld.pillLabel}
                </span>
              ) : null}
              <h2 className="section-title fw-bold text-dark mb-3">{realWorld.title}</h2>
              {realWorld.subtitle ? (
                <p
                  className="section-subtitle lead text-dark opacity-75 mb-0 mx-auto"
                  style={{ maxWidth: '700px' }}
                >
                  {realWorld.subtitle}
                </p>
              ) : null}
            </div>
          </div>

          <div className="row align-items-center g-5 justify-content-lg-between">
            <div className="col-lg-5 col-xl-5">
              <div className="modern-timeline d-flex flex-column gap-4 pe-lg-3">
                {steps.map((step, i) => {
                  const delay = step?.aosDelay ?? (i + 1) * 100
                  return (
                    <div
                      key={step?.id ?? i}
                      className="step-card bg-white shadow-sm rounded-4 p-4 d-flex align-items-start gap-4 position-relative transition-hover border border-light"
                      data-aos="fade-up"
                      data-aos-delay={String(delay)}
                    >
                      <div
                        className="step-icon flex-shrink-0 text-white rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                        style={{
                          width: '55px',
                          height: '55px',
                          fontSize: '1.5rem',
                          background: 'linear-gradient(135deg, #5FB6FF, #0056b3)',
                        }}
                      >
                        <i
                          className={`${faClass(step?.iconClass, 'fas fa-circle')} text-white fa-sm`}
                        ></i>
                      </div>
                      <div>
                        <h4 className="mb-2 fw-bold text-dark fs-5">{step?.title}</h4>
                        <p
                          className="mb-0 text-secondary fs-6"
                          style={{ lineHeight: 1.6 }}
                        >
                          {step?.body}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div
              className="col-lg-7 col-xl-6 text-center mt-5 mt-lg-0"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="position-relative d-inline-block w-100">
                <div
                  className="position-absolute top-50 start-50 translate-middle bg-primary opacity-25 rounded-circle"
                  style={{
                    width: '400px',
                    height: '400px',
                    filter: 'blur(60px)',
                    zIndex: '-1',
                  }}
                ></div>

                {realWorldImg ? (
                  <img
                    src={realWorldImg}
                    loading="lazy"
                    alt=""
                    className="img-fluid"
                    style={{
                      maxHeight: '650px',
                      filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.1))',
                    }}
                  />
                ) : null}

                {realWorld.floatCardTitle ? (
                  <div
                    className="position-absolute bottom-0 end-0 bg-white rounded-pill shadow-lg p-3 d-flex align-items-center gap-3 animate-float-delayed d-none d-md-flex"
                    style={{ zIndex: 10, marginBottom: '20px' }}
                  >
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center"
                      style={{
                        width: '45px',
                        height: '45px',
                        background: 'rgba(0, 86, 179, 0.1)',
                        color: '#0056b3',
                      }}
                    >
                      <i className="fas fa-user-md fa-xl"></i>
                    </div>
                    <div className="text-start pe-2">
                      <h6 className="mb-0 fw-bold text-dark">
                        {realWorld.floatCardTitle}
                      </h6>
                      {realWorld.floatCardSubtitle ? (
                        <small className="text-muted">
                          {realWorld.floatCardSubtitle}
                        </small>
                      ) : null}
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="protected-section section bg-white">
        <div className="custom-container container-fluid">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-10">
              {secureData.badge ? (
                <span className="section-badge">{secureData.badge}</span>
              ) : null}
              <h2 className="section-title">{secureData.title}</h2>
              {secureData.subtitle ? (
                <p className="section-subtitle">{secureData.subtitle}</p>
              ) : null}
            </div>
          </div>
          <div className="row align-items-center g-md-5 g-3">
            <div className="col-lg-5">
              <div className="position-relative protected-img-box">
                {secureImg ? (
                  <img
                    src={secureImg}
                    loading="lazy"
                    alt=""
                    className="img-fluid protected-img1"
                  />
                ) : null}
              </div>
            </div>
            <div className="col-lg-7">
              <div className="protected-content ps-lg-5">
                <p className="mb-md-4 mb-2 card-desc">{secureData.paragraph1}</p>
                <p className="mb-md-5 mb-2 card-desc">{secureData.paragraph2}</p>
                <div className="row g-4 w-100 mx-auto ps-0 ms-0">
                  {secureItems.map((item, i) => {
                    const icon = item?.icon ? mediaUrl(item.icon) : ''
                    return (
                      <div key={item?.id ?? i} className="col-sm-6">
                        <div className="protected-card">
                          {icon ? (
                            <div className="benefit-icon-box">
                              <img
                                src={icon}
                                width={36}
                                height={36}
                                loading="lazy"
                                alt=""
                              />
                            </div>
                          ) : null}
                          <h3 className="card-title">{item?.title}</h3>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tracking-section section">
        <div className="custom-container container-fluid">
          <div className="product-card-wrapper right tracking-wrapper mt-0">
            {productBg ? (
              <img
                src={productBg}
                loading="lazy"
                alt=""
                className="product-bg_img"
              />
            ) : null}
            <div className="row justify-content-center align-items-center mb-custom">
              <div className="col-lg-12 text-center">
                {healthTracking.badge ? (
                  <span className="section-badge">{healthTracking.badge}</span>
                ) : null}
                <h2 className="section-title">
                  {healthTracking.titleLine1}
                  {healthTracking.titleLine2 ? (
                    <>
                      {' '}
                      {healthTracking.titleLine2}
                    </>
                  ) : null}
                </h2>
                {healthTracking.subtitle ? (
                  <p className="section-subtitle">{healthTracking.subtitle}</p>
                ) : null}
              </div>
            </div>
            <div className="product-card-img right d-none d-lg-block">
              <div className="position-relative text-end">
                {trackImg ? (
                  <img
                    src={trackImg}
                    loading="lazy"
                    alt=""
                    className="img-fluid track-mobile"
                  />
                ) : null}
                <div className="tracking-badge ai">
                  {overlayAi ? (
                    <img src={overlayAi} loading="lazy" alt="" />
                  ) : null}
                </div>
                <div className="tracking-badge alert">
                  {overlayAlert ? (
                    <img src={overlayAlert} loading="lazy" alt="" />
                  ) : null}
                </div>
              </div>
            </div>
            <div className="row align-items-center justify-content-start">
              <div className="col-lg-8 col-xl-7 feature-banner_content">
                <div className="row g-lg-4 g-3">
                  {trackingItems.map((item, i) => {
                    const icon = item?.icon ? mediaUrl(item.icon) : ''
                    return (
                      <div key={item?.id ?? i} className="col-sm-6">
                        <div className="protected-card ">
                          {icon ? (
                            <div className="benefit-icon-box">
                              <img
                                src={icon}
                                width={36}
                                height={36}
                                loading="lazy"
                                alt=""
                              />
                            </div>
                          ) : null}
                          <h3 className="card-title">{item?.title}</h3>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="col-12 d-lg-none mt-lg-5">
                <div className="position-relative text-center mx-auto">
                  {trackImg ? (
                    <img
                      src={trackImg}
                      loading="lazy"
                      alt=""
                      className="img-fluid track-mobile"
                    />
                  ) : null}
                  <div className="tracking-badge ai">
                    {overlayAi ? (
                      <img src={overlayAi} loading="lazy" alt="" />
                    ) : null}
                  </div>
                  <div className="tracking-badge alert">
                    {overlayAlert ? (
                      <img src={overlayAlert} loading="lazy" alt="" />
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="app-download-section two feature" id="app">
        {appBg ? (
          <img
            src={appBg}
            width={950}
            height={900}
            loading="lazy"
            alt=""
            className="product-bg_img"
          />
        ) : null}
        <div className="container-fluid custom-container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="app-content">
                {appSection.badge ? (
                  <span className="section-badge text-uppercase">{appSection.badge}</span>
                ) : null}
                <h2
                  className="section-title text-white text-uppercase"
                  style={{ whiteSpace: 'pre-line' }}
                >
                  {appSection.title}
                </h2>
                {appBullets.length > 0 ? (
                  <ul className="app-list">
                    {appBullets.map((b, i) =>
                      b?.text ? <li key={b.id ?? i}>{b.text}</li> : null,
                    )}
                  </ul>
                ) : null}
              </div>
            </div>
            <div className="col-lg-5">
              <div className="app-mockup">
                {appMockup ? (
                  <img
                    src={appMockup}
                    width={1185}
                    height={850}
                    loading="lazy"
                    alt=""
                    className="img-fluid"
                  />
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <div className="app-mockup two">
          {appMockup ? (
            <img
              src={appMockup}
              width={850}
              height={550}
              loading="lazy"
              alt=""
              className="img-fluid"
            />
          ) : null}
        </div>
      </section>

      <section className="faq-section" id="faq">
        <div className="container-fluid custom-container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <h2 className="faq-title">{faq.heading ?? 'FAQs'}</h2>
              <div className="accordion faq-accordion" id={accordionId}>
                {faqItems.map((item, i) => {
                  const collapseId = `faq-features-${uid}-${i}`
                  const isFirst = i === 0
                  return (
                    <div key={item?.id ?? i} className="accordion-item">
                      <h3 className="accordion-header">
                        <button
                          className={
                            isFirst ? 'accordion-button' : 'accordion-button collapsed'
                          }
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

      <FeaturesAosInit />
    </>
  )
}
