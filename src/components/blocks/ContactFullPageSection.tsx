import { ContactForm } from '@/components/ContactForm'
import { mediaUrl } from '@/lib/mediaUrl'
import type { ContactFullPageBlock } from '@/payload-types'

function linesWithBreaks(text: string) {
  const lines = text.split('\n')
  return lines.map((line, i) => (
    <span key={i}>
      {i > 0 ? <br /> : null}
      {line}
    </span>
  ))
}

/** Renders contact page content from CMS ContactFullPageBlock. */
export function ContactFullPageSection({ block }: { block: ContactFullPageBlock }) {
  const { hero, intro, officeCard, reachCard, social, form, map } = block
  const heroImage = hero.image ? mediaUrl(hero.image) : ''
  const officeIcon = officeCard.icon ? mediaUrl(officeCard.icon) : ''
  const reachIcon = reachCard.icon ? mediaUrl(reachCard.icon) : ''
  const tags = hero.tags ?? []
  const socialLinks = social.links ?? []

  return (
    <>
      <section className="common-hero-section">
        <div className="container-fluid custom-container">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <div className="hero-content">
                {hero.badge ? (
                  <div className="hero-badge-wrap">
                    <span className="hero-badge">{hero.badge}</span>
                  </div>
                ) : null}
                <h1 className="hero-title">
                  {hero.titleLine1}
                  {hero.titleHighlight ? (
                    <>
                      {' '}
                      <span className="highlight">{hero.titleHighlight}</span>
                    </>
                  ) : null}
                </h1>
                {hero.subtitle ? (
                  <p className="hero-subtitle">{linesWithBreaks(hero.subtitle)}</p>
                ) : null}
                {tags.length > 0 ? (
                  <div className="hero-features-tags">
                    {tags.map((t, i) =>
                      t?.text ? (
                        <span key={t.id ?? i} className="feature-tag">
                          <i className="fas fa-check-circle"></i> {t.text}
                        </span>
                      ) : null,
                    )}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="col-lg-5">
              <div className="hero-image-wrap">
                {heroImage ? (
                  <img
                    src={heroImage}
                    width={550}
                    height={420}
                    loading="lazy"
                    alt=""
                    className="hero-main-img img-fluid"
                  />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="container-fluid custom-container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-12 col-xl-10 text-center">
              {intro.badge ? <span className="section-badge">{intro.badge}</span> : null}
              <h2 className="section-title">{intro.title}</h2>
              {intro.subtitle ? (
                <p className="section-subtitle">{linesWithBreaks(intro.subtitle)}</p>
              ) : null}
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="contact-cards-wrapper">
                <div className="row g-4">
                  <div className="col-lg-12 col-md-6">
                    <div className="contact-info-card">
                      {officeIcon ? (
                        <div className="card-icon">
                          <img
                            src={officeIcon}
                            width={30}
                            height={30}
                            loading="lazy"
                            alt=""
                          />
                        </div>
                      ) : null}
                      <div className="card-content">
                        <h3 className="card-title">{officeCard.title}</h3>
                        <p className="card-description">{linesWithBreaks(officeCard.address)}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-6">
                    <div className="contact-info-card">
                      {reachIcon ? (
                        <div className="card-icon">
                          <img
                            src={reachIcon}
                            width={30}
                            height={30}
                            loading="lazy"
                            alt=""
                          />
                        </div>
                      ) : null}
                      <div className="card-content">
                        <h3 className="card-title">{reachCard.emailTitle}</h3>
                        <p className="card-description">{reachCard.email}</p>
                        <br />
                        <h3 className="card-title">{reachCard.phoneTitle}</h3>
                        <p className="card-description">{reachCard.phone}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-6">
                    <div className="social-card">
                      <h4 className="social-title">{social.title}</h4>
                      {socialLinks.length > 0 ? (
                        <div className="social-links">
                          {socialLinks.map((link, i) => {
                            if (!link?.href) return null
                            const icon = link.icon ? mediaUrl(link.icon) : ''
                            return (
                              <a
                                key={link.id ?? i}
                                href={link.href}
                                className="social-link"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {icon ? (
                                  <img
                                    src={icon}
                                    width={24}
                                    height={20}
                                    loading="lazy"
                                    alt={link.label || ''}
                                  />
                                ) : (
                                  link.label
                                )}
                              </a>
                            )
                          })}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="modern-contact-form">
                <div className="form-header">
                  <h3 className="form-title">{form.title}</h3>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="container-fluid custom-container text-center">
          {map.badge ? <span className="section-badge">{map.badge}</span> : null}
          <h2 className="section-title">{map.title}</h2>
          {map.subtitle ? (
            <p className="section-subtitle">{linesWithBreaks(map.subtitle)}</p>
          ) : null}
          <div className="map-box">
            <iframe
              src={map.embedUrl}
              style={{ width: '100%', height: '500px', border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  )
}
