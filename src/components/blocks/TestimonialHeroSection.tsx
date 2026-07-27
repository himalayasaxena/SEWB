import type { TestimonialHeroBlock } from '@/payload-types'
import { mediaUrl } from '@/lib/mediaUrl'

export function TestimonialHeroSection({ block }: { block: TestimonialHeroBlock }) {
  const img = block.sideImage ? mediaUrl(block.sideImage) : ''

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
                {block.titleLine1}
                {block.titleHighlight ? (
                  <>
                    {' '}
                    <span className="highlight">{block.titleHighlight}</span>
                  </>
                ) : null}
                {block.titleLine2 ? <> {block.titleLine2}</> : null}
              </h1>
              {block.subtitle ? <p className="hero-subtitle">{block.subtitle}</p> : null}
            </div>
          </div>
          <div className="col-lg-5">
            <div className="hero-image-wrap">
              {img ? (
                <img
                  src={img}
                  width={400}
                  height={300}
                  loading="lazy"
                  alt="Testimonials"
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
