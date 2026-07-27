import type { IndHeroBlock } from '@/payload-types'
import { mediaUrl } from '@/lib/mediaUrl'

export function IndHeroSection({ block }: { block: IndHeroBlock }) {
  const img = block.image ? mediaUrl(block.image) : ''

  return (
    <section className="common-hero-section">
      <div className="custom-container container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="hero-content">
              {block.badge ? (
                <div className="hero-badge-wrap">
                  <span className="hero-badge">{block.badge}</span>
                </div>
              ) : null}
              <h1 className="hero-title">
                <span className="highlight">{block.titleHighlight}</span> {block.titleRest}
              </h1>
              {block.subtitle ? <p className="hero-subtitle">{block.subtitle}</p> : null}
            </div>
          </div>
          <div className="col-lg-5">
            <div className="hero-image-wrap">
              {img ? (
                <img
                  src={img}
                  width={530}
                  height={400}
                  loading="lazy"
                  alt=""
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
