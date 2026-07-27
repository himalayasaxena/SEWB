import type { TestimonialCarouselBlock } from '@/payload-types'
import { mediaUrl } from '@/lib/mediaUrl'

import { ParagraphWithBreaks } from '@/components/blocks/securityParagraph'

export function TestimonialCarouselSection({ block }: { block: TestimonialCarouselBlock }) {
  const star = block.ratingStarIcon ? mediaUrl(block.ratingStarIcon) : ''
  const items = block.items ?? []
  const isPatients = block.variant === 'patients'

  const carouselId = isPatients ? 'patient-carousel' : 'doctor-carousel'

  const innerSlider = (
    <div className="testimonial-slider-wrap position-relative">
      <div className={`owl-carousel testimonial-carousel`} id={carouselId}>
        {items.map((t, i) => {
          const av = t?.avatar ? mediaUrl(t.avatar) : ''
          return (
            <div key={t?.id ?? i} className="item testimonial-item">
              <div className="testimonial-card">
                <div className="profile-img-wrap">
                  {av ? (
                    <img
                      src={av}
                      width={84}
                      height={84}
                      loading="lazy"
                      alt={isPatients ? (t?.name ?? '') : `Dr. ${t?.name ?? ''}`}
                    />
                  ) : null}
                </div>
                <div className="testimonial-body">
                  {t?.quote ? (
                    <ParagraphWithBreaks text={t.quote} className="quote-text" />
                  ) : null}
                  <div className="card-footer-box d-flex justify-content-between align-items-end">
                    <div className="user-info">
                      <h3 className="name">{t?.name}</h3>
                      <p className="specialty">{t?.specialty}</p>
                    </div>
                    <div className="rating">
                      {star
                        ? Array.from({ length: 5 }).map((_, k) => (
                            <img key={k} src={star} width={30} height={30} loading="lazy" alt="Rating" />
                          ))
                        : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )

  if (isPatients) {
    return (
      <section className="testimonial-page-section section pb-0">
        <div className="container-fluid custom-container">
          <div className="testimonial-group">
            <div className="row justify-content-center">
              <div className="col-lg-9 col-xl-8 text-center">
                {block.badge ? (
                  <span className="section-badge text-uppercase">{block.badge}</span>
                ) : null}
                {block.heading ? (
                  <h2 className="section-title two">{block.heading}</h2>
                ) : null}
              </div>
            </div>
            {innerSlider}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="testimonial-page-section two section">
      <div className="container-fluid custom-container">
        <div className="row g-3 justify-content-center">
          <div className="col-lg-9">
            <div className="testimonial-group">
              <div className="text-center mb-md-5">
                {block.badge ? (
                  <span className="section-badge text-uppercase">{block.badge}</span>
                ) : null}
                {block.heading ? (
                  <h2 className="section-title two">{block.heading}</h2>
                ) : null}
              </div>
            </div>
          </div>
          <div className="col-12">{innerSlider}</div>
        </div>
      </div>
    </section>
  )
}
