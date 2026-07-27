import type { IndBenefitsBlock } from '@/payload-types'
import { mediaUrl } from '@/lib/mediaUrl'

export function IndBenefitsSection({ block }: { block: IndBenefitsBlock }) {
  const main = block.mainImage ? mediaUrl(block.mainImage) : ''
  const floatIcon = block.floatingCard?.icon ? mediaUrl(block.floatingCard.icon) : ''
  const items = block.items ?? []

  return (
    <section className="benefit-section section">
      <div className="custom-container container-fluid">
        <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-12">
            {block.badge ? <span className="section-badge">{block.badge}</span> : null}
            <h2 className="section-title two text-uppercase">{block.title}</h2>
          </div>
          <div className="col-lg-10">
            {block.subtitle ? <p className="section-subtitle">{block.subtitle}</p> : null}
          </div>
        </div>
        <div className="row align-items-center g-3">
          <div className="col-lg-7">
            <div className="benefit-img-wrapper">
              {main ? (
                <img
                  src={main}
                  width={700}
                  height={500}
                  loading="lazy"
                  alt=""
                  className="img-fluid"
                />
              ) : null}
              {block.floatingCard?.title ? (
                <div className="floating-info-card">
                  <div className="icon-box">
                    {floatIcon ? <img src={floatIcon} loading="lazy" alt="" /> : null}
                  </div>
                  <div className="info-text">
                    <h3>{block.floatingCard.title}</h3>
                    {block.floatingCard.subtitle ? <p>{block.floatingCard.subtitle}</p> : null}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="benefit-list ps-lg-5">
              {items.map((it, i) => {
                const ic = it?.icon ? mediaUrl(it.icon) : ''
                return (
                  <div key={it?.id ?? i} className="benefit-item">
                    <div className="benefit-icon-box">
                      {ic ? <img src={ic} width={34} height={24} loading="lazy" alt="" /> : null}
                    </div>
                    <div className="benefit-content">
                      <h3>{it?.title}</h3>
                      <p>{it?.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
