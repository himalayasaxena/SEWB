import type { SecurityHeroBlock } from '@/payload-types'
import { mediaUrl } from '@/lib/mediaUrl'

export function SecurityHeroSection({ block }: { block: SecurityHeroBlock }) {
  const img = block.sideImage ? mediaUrl(block.sideImage) : ''
  const tags = block.tags ?? []

  return (
    <section className="common-hero-section">
      <div className="custom-container container-fluid">
        <div className="row align-items-center g-4">
          <div className="col-lg-7">
            <div className="hero-content">
              {block.badge ? (
                <div className="hero-badge-wrap">
                  <span className="hero-badge">{block.badge}</span>
                </div>
              ) : null}
              <h1 className="hero-title">
                {block.title}
                {block.titleHighlight ? (
                  <>
                    {' '}
                    <span className="highlight">{block.titleHighlight}</span>
                  </>
                ) : null}
              </h1>
              {block.subtitle ? <p className="hero-subtitle">{block.subtitle}</p> : null}
              {tags.length > 0 ? (
                <div className="hero-features-tags">
                  {tags.map((t, i) =>
                    t?.text ? (
                      <span key={t.id ?? i} className="feature-tag">
                        {t.iconClass ? <i className={t.iconClass}></i> : null}{' '}
                        {t.text}
                      </span>
                    ) : null,
                  )}
                </div>
              ) : null}
            </div>
          </div>
          <div className="col-lg-5">
            <div className="hero-image-wrap">
              {img ? (
                <img
                  src={img}
                  width={571}
                  height={600}
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
  )
}
