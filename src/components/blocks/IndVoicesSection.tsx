import type { IndVoicesBlock } from '@/payload-types'
import { mediaUrl } from '@/lib/mediaUrl'

export function IndVoicesSection({ block }: { block: IndVoicesBlock }) {
  const bg = block.backgroundShapeImage ? mediaUrl(block.backgroundShapeImage) : ''
  const star = block.testimonialStarIcon ? mediaUrl(block.testimonialStarIcon) : ''
  const stats = block.stats ?? []
  const testimonials = block.testimonials ?? []

  return (
    <section className="patient-voices-section section">
      {bg ? (
        <img
          src={bg}
          width={357}
          height={800}
          loading="lazy"
          alt=""
          className="highlight-bg-shape"
        />
      ) : null}
      <div className="custom-container container-fluid">
        <div className="row justify-content-center text-center">
          <div className="col-lg-12">
            {block.badge ? <span className="section-badge text-uppercase">{block.badge}</span> : null}
            <h2 className="section-title two text-uppercase">
              {block.titleBeforeHighlight}
              {block.titleHighlight ? (
                <>
                  {' '}
                  <span className="highlight-pink">{block.titleHighlight}</span>
                </>
              ) : null}
            </h2>
            {block.subtitle ? <p className="section-subtitle">{block.subtitle}</p> : null}
          </div>
        </div>
        <div className="voices-stats">
          {stats.map((s, i) =>
            s?.value ? (
              <div key={s.id ?? i} className="stat-item">
                <span className="stat-count">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ) : null,
          )}
        </div>
        <div className="testimonial-slider-wrap position-relative">
          <div className="owl-carousel testimonial-carousel" id="patient-carousel">
            {testimonials.map((t, i) => {
              const av = t?.avatar ? mediaUrl(t.avatar) : ''
              return (
                <div key={t?.id ?? i} className="item testimonial-item">
                  <div className="testimonial-card">
                    <div className="profile-img-wrap">
                      {av ? (
                        <img src={av} width={84} height={84} loading="lazy" alt="" />
                      ) : null}
                    </div>
                    <div className="testimonial-body">
                      <p className="quote-text">{t?.quote}</p>
                      <div className="card-footer-box d-flex justify-content-between align-items-end">
                        <div className="user-info">
                          <h3 className="name">{t?.name}</h3>
                          <p className="specialty">{t?.specialty}</p>
                        </div>
                        <div className="rating">
                          {star
                            ? Array.from({ length: 5 }).map((_, k) => (
                                <img
                                  key={k}
                                  src={star}
                                  width={30}
                                  height={30}
                                  loading="lazy"
                                  alt=""
                                />
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
      </div>
    </section>
  )
}
