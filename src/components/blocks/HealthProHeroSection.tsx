import type { HealthProHeroBlock } from '@/payload-types'
import { mediaUrl } from '@/lib/mediaUrl'

export function HealthProHeroSection({ block }: { block: HealthProHeroBlock }) {
  const img = block.image ? mediaUrl(block.image) : ''
  const tags = block.tags ?? []

  return (
    <section className="common-hero-section">
      <div className="custom-container container-fluid">
        <div className="row align-items-center justify-content-between g-4">
          <div className="col-lg-7">
            <div className="hero-content">
              {block.badge ? (
                <div className="hero-badge-wrap">
                  <span className="hero-badge">{block.badge}</span>
                </div>
              ) : null}
              <h1 className="hero-title">
                {block.titleLine1}
                {block.titleHighlight ? (
                  <>
                    <br /> <span className="highlight">{block.titleHighlight}</span>
                  </>
                ) : null}
              </h1>
              {block.subtitle ? <p className="hero-subtitle">{block.subtitle}</p> : null}
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
            <div className="hero-image-wrap" style={{ padding: '30px' }}>
              {img ? (
                <img
                  src={img}
                  width={530}
                  height={400}
                  loading="lazy"
                  alt="doctors Banner"
                  className="hero-main-img"
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
