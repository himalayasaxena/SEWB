import type { CommonHeroBlock } from '@/payload-types'

import { mediaUrl } from '@/lib/mediaUrl'

export function CommonHeroSection({ block }: { block: CommonHeroBlock }) {
  return (
    <section className="common-hero-section">
      <div className="container-fluid custom-container">
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
            </div>
          </div>
          <div className="col-lg-5">
            <div className="hero-image-wrap">
              {block.sideImage ? (
                <img
                  src={mediaUrl(block.sideImage)}
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
  )
}
